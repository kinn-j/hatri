/* Hatri authentication for the GitHub Pages / static-hosted app.
   Complete FIREBASE_CONFIG from your own Firebase Console web-app settings.
   These client identifiers are public; never paste a service-account key here. */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js';
import {
  getAuth, browserLocalPersistence, setPersistence, onAuthStateChanged,
  GoogleAuthProvider, signInWithPopup, signOut
} from 'https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js';
import {
  getFirestore, doc, getDoc, setDoc, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAWl1eHaT9tbHqGWvfve4OkoVYJFEo2Se4',
  authDomain: 'hatri-5b44d.firebaseapp.com',
  projectId: 'hatri-5b44d',
  appId: '1:253486795611:web:34655e72cb5fa7217d687e',
  messagingSenderId: '253486795611',
  storageBucket: 'hatri-5b44d.firebasestorage.app'
};

const configured = ['apiKey', 'authDomain', 'projectId', 'appId']
  .every(key => !!FIREBASE_CONFIG[key]);
const isClaude = !!(window.claude && window.claude.use);
let auth = null;
let database = null;
let currentUser = null;
let loadedUid = null;
let syncReady = false;
let lastSynced = '';
let saveTimer = null;
let syncMessage = 'Your changes are saved on this device.';

function safeText(value) {
  return typeof value === 'string' ? value : '';
}

function initials(user) {
  const name = safeText(user && user.displayName).trim();
  return (name || safeText(user && user.email) || 'A').split(/\s+/).slice(0, 2)
    .map(part => part[0]).join('').toUpperCase();
}

function renderProfileDrawer() {
  const trigger = document.querySelector('[data-rr-profile-open]');
  const content = document.getElementById('rr-profile-content');
  const signin = document.getElementById('rr-drawer-signin');
  const logout = document.getElementById('rr-drawer-logout');
  trigger.replaceChildren();
  content.replaceChildren();
  content.hidden = !currentUser;
  signin.hidden = !!currentUser;
  signin.disabled = !auth;
  logout.hidden = !currentUser;

  if (!currentUser) {
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '👤';
    trigger.append(icon);
    return;
  }

  const card = document.createElement('div');
  card.className = 'rr-profile-card';
  if (currentUser.photoURL) {
    const image = document.createElement('img');
    image.src = currentUser.photoURL;
    image.alt = '';
    trigger.append(image);
    card.append(image.cloneNode());
  } else {
    const monogram = initials(currentUser);
    const label = document.createElement('span');
    label.setAttribute('aria-hidden', 'true');
    label.textContent = monogram;
    trigger.append(label);
    const fallback = document.createElement('div');
    fallback.className = 'rr-profile-fallback';
    fallback.textContent = monogram;
    card.append(fallback);
  }
  const identity = document.createElement('div');
  const name = document.createElement('strong');
  name.textContent = safeText(currentUser.displayName) || 'Hatri cook';
  const email = document.createElement('span');
  email.textContent = safeText(currentUser.email);
  identity.append(name, email);
  card.append(identity);
  content.append(card);
}

function status(message) {
  syncMessage = message;
  const element = document.getElementById('rr-auth-status');
  if (element) element.textContent = message;
  const drawerStatus = document.getElementById('rr-drawer-status');
  if (drawerStatus) drawerStatus.textContent = message;
}

function renderAccount() {
  renderProfileDrawer();
  const account = document.getElementById('acct');
  if (!account) return;
  const oldDescription = account.querySelector('p.sub');
  if (oldDescription) oldDescription.textContent =
    'Your pantry and shopping list stay on this device until you sign in. Signed-in preferences are also saved to your private cloud account.';
  let panel = document.getElementById('rr-auth-panel');
  if (!panel) {
    panel = document.createElement('section');
    panel.id = 'rr-auth-panel';
    account.prepend(panel);
  }
  const lbl = document.getElementById('acctLbl');
  if (lbl) lbl.textContent = currentUser ? 'Signed in ✓' : 'Account';
  if (isClaude) {
    panel.innerHTML = '';
    return;
  }
  if (!configured) {
    panel.innerHTML = '<h3>🔐 Sign in & sync</h3>' +
      '<p class="note">Google sign-in is ready for Firebase setup. The site owner must add the web-app configuration in <code>auth.js</code> and enable Google Authentication in Firebase Console.</p>';
    return;
  }
  panel.innerHTML =
    '<h3>🔐 ' + (currentUser ? 'Your account' : 'Sign in to save your kitchen') + '</h3>' +
    '<p id="rr-user-identity" class="sub"></p>' +
    '<p class="note" id="rr-auth-status" aria-live="polite"></p>' +
    (!currentUser ? '<button type="button" class="btn primary" data-rr-auth="google">Continue with Google</button>' : '') +
    (currentUser ? '<button type="button" class="btn sm" data-rr-auth="logout">Sign out</button>' : '') +
    '<p class="note">Your saved pantry, shopping list, filters and recipe ratings are private to your Google account.</p>';
  const identity = panel.querySelector('#rr-user-identity');
  if (identity && currentUser) {
    identity.textContent = [safeText(currentUser.displayName),
      safeText(currentUser.email)].filter(Boolean).join(' · ') || 'Signed in';
  }
  status(syncMessage);
}

// The existing account UI also contains the backup-code controls. Keep them intact.
if (typeof window.acctUI === 'function') {
  const oldAccountUi = window.acctUI;
  window.acctUI = function (...args) {
    const value = oldAccountUi.apply(this, args);
    renderAccount();
    return value;
  };
}
renderAccount();

function localSnapshot() {
  const payload = {
    core: window.stateObj(),
    filters: { r: window.RS, o: window.OS, h: window.HS, t: window.TS },
    choices: {
      sel: window.sel, crs: window.crs,
      sweet: window.wSweet, side: window.wSide, protein: window.wProt,
      occasion: window.occ, heaviness: window.hv
    },
    ratings: window.MY || {}
  };
  return JSON.parse(JSON.stringify(payload));
}

function applyCloud(data) {
  if (!data || !data.core) return;
  window.applyState(data.core);
  if (data.filters && typeof data.filters === 'object') {
    window.RS = data.filters.r || {};
    window.OS = data.filters.o || {};
    window.HS = data.filters.h || {};
    window.TS = data.filters.t || {};
  }
  const c = data.choices || {};
  if (c.sel && typeof c.sel === 'object' && Object.keys(c.sel).length) window.sel = c.sel;
  if (typeof c.crs === 'string') window.crs = c.crs;
  if (typeof c.sweet === 'boolean') window.wSweet = c.sweet;
  if (typeof c.side === 'boolean') window.wSide = c.side;
  if (typeof c.protein === 'boolean') window.wProt = c.protein;
  if (typeof c.occasion === 'string') window.occ = c.occasion;
  if (typeof c.heaviness === 'string') window.hv = c.heaviness;
  window.MY = data.ratings && typeof data.ratings === 'object' ? data.ratings : {};
  window.syncT();
  window.saveF();
  window.all();
}

function queueSave() {
  if (!syncReady || !currentUser || !database) return;
  clearTimeout(saveTimer);
  const uid = currentUser.uid;
  saveTimer = setTimeout(async () => {
    if (!auth.currentUser || auth.currentUser.uid !== uid || !syncReady) return;
    const payload = localSnapshot();
    const serialized = JSON.stringify(payload);
    if (serialized === lastSynced) return;
    lastSynced = serialized;
    status('Saving your kitchen…');
    try {
      await setDoc(doc(database, 'users', uid, 'preferences', 'app'),
        { ...payload, updatedAt: serverTimestamp() });
      if (auth.currentUser && auth.currentUser.uid === uid) status('✓ Saved to your account');
    } catch (error) {
      lastSynced = '';
      status('Cloud save failed. Your selections are still on this device.');
      console.warn('Hatri sync error', error.code || error.message);
    }
  }, 900);
}

// Existing recipe, filter and pantry handlers use these functions already.
for (const fn of ['save', 'saveF', 'renderResults']) {
  if (typeof window[fn] !== 'function') continue;
  const original = window[fn];
  window[fn] = function (...args) {
    const result = original.apply(this, args);
    queueSave();
    return result;
  };
}

// Save recipe ratings on the static site too; Claude keeps its own mechanism.
if (!isClaude && typeof window.saveMy === 'function') {
  window.saveMy = async function (slug, patch) {
    if (!currentUser || !syncReady) throw Error('Please sign in and wait for sync');
    window.MY[slug] = { ...(window.MY[slug] || {}), ...patch, at: Date.now() };
    queueSave();
    window.renderResults();
    window.renderPick();
    window.renderKitchen();
  };
}

function clearPreviousAccount() {
  // Prevent the next person using this browser from seeing the previous account's data.
  window.have = {};
  window.cart = {};
  window.cartMeals = [];
  window.cuis = {};
  (window.CUIS || []).forEach(name => { window.cuis[name] = 1; });
  window.app = {};
  window.nonveg = false;
  window.hostel = false;
  window.sel = { meal: 1 };
  window.crs = 'meal';
  window.wSweet = true;
  window.wSide = true;
  window.wProt = false;
  window.occ = 'All';
  window.hv = 'All';
  window.tmax = 0;
  window.MY = {};
  window.ME = null;
  window.RS = {};
  window.OS = {};
  window.HS = {};
  window.TS = {};
  window.defaults();
  window.syncT();
  try {
    localStorage.removeItem(window.LS);
    localStorage.removeItem('rr-filters-v2');
  } catch (error) { /* Local storage may be disabled. */ }
  window.all();
}

function humanError(error) {
  const code = error && error.code;
  const known = {
    'auth/account-exists-with-different-credential': 'This Google account is already registered with another sign-in method.',
    'auth/popup-blocked': 'Allow pop-ups for Hatri, then try again.',
    'auth/popup-closed-by-user': 'Sign-in was cancelled. Please try again.',
    'auth/unauthorized-domain': 'This website must be added to Firebase Authorized domains.',
    'permission-denied': 'Cloud database permission denied. Ask the site owner to publish the Firestore rules.'
  };
  return known[code] || (code ? 'Sign-in failed (' + code + ').' : safeText(error.message) || 'Something went wrong. Please try again.');
}

document.addEventListener('click', async event => {
  const button = event.target.closest && event.target.closest('[data-rr-auth]');
  if (!button || !auth) return;
  event.preventDefault();
  const action = button.dataset.rrAuth;
  try {
    if (action === 'google') {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } else if (action === 'logout') {
      await signOut(auth);
    }
  } catch (error) {
    status(humanError(error));
  }
});

if (!isClaude && configured) {
  try {
    const app = initializeApp(FIREBASE_CONFIG);
    auth = getAuth(app);
    database = getFirestore(app);
    await setPersistence(auth, browserLocalPersistence);
    onAuthStateChanged(auth, async newUser => {
      // Refreshing the same user must not overwrite in-progress local edits.
      if (newUser && loadedUid === newUser.uid && syncReady) {
        currentUser = newUser;
        renderAccount();
        return;
      }
      clearTimeout(saveTimer);
      const previous = loadedUid;
      syncReady = false;
      currentUser = newUser;
      if (!newUser && previous) document.getElementById('rr-profile-drawer').close();
      loadedUid = newUser ? newUser.uid : null;
      lastSynced = '';
      if (!newUser) {
        if (previous) clearPreviousAccount();
        status('Sign in with Google to sync your saved kitchen.');
        renderAccount();
        return;
      }
      if (previous && previous !== newUser.uid) clearPreviousAccount();
      window.ME = newUser.uid;
      status('Loading your saved kitchen…');
      renderAccount();
      const uid = newUser.uid;
      try {
        const ref = doc(database, 'users', uid, 'preferences', 'app');
        const snapshot = await getDoc(ref);
        if (!auth.currentUser || auth.currentUser.uid !== uid) return;
        if (snapshot.exists()) {
          applyCloud(snapshot.data());
          lastSynced = JSON.stringify(localSnapshot());
          status('✓ Your saved kitchen is ready');
        } else {
          status('Creating your private kitchen…');
          syncReady = true;
          queueSave(); // Import the current guest selections only for a new account.
        }
        syncReady = true;
        window.renderResults();
        window.renderPick();
        window.renderKitchen();
        renderAccount();
      } catch (error) {
        syncReady = false; // Never overwrite remote data if the initial read failed.
        status('Could not load your cloud data. Please refresh and check the database rules.');
        console.warn('Hatri account load failed', error.code || error.message);
      }
    });
  } catch (error) {
    status('Account setup error. Please check your Firebase configuration.');
    console.warn('Hatri Firebase setup failed', error.code || error.message);
  }
}
