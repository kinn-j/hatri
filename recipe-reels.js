import { getApp, getApps, initializeApp } from 'https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js';
import { addDoc, collection, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp } from 'https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js';
import { connectStorageEmulator, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'https://www.gstatic.com/firebasejs/13.3.0/firebase-storage.js';

const CONFIG = {
  apiKey: 'AIzaSyAWl1eHaT9tbHqGWvfve4OkoVYJFEo2Se4',
  authDomain: 'hatri-5b44d.firebaseapp.com', projectId: 'hatri-5b44d',
  appId: '1:253486795611:web:34655e72cb5fa7217d687e',
  storageBucket: 'hatri-5b44d.firebasestorage.app'
};
const app = getApps().length ? getApp() : initializeApp(CONFIG);
const auth = getAuth(app), db = getFirestore(app), storage = getStorage(app);
if (location.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(location.hostname)) {
  connectStorageEmulator(storage, location.hostname, 9199);
}
const feed = document.getElementById('reels-feed');
const dialog = document.getElementById('reels-upload-dialog');
const form = document.getElementById('reels-upload-form');
const videoInput = document.getElementById('reels-video-input');
const videoName = document.getElementById('reels-video-name');
const status = document.getElementById('reels-upload-status');
const progress = document.getElementById('reels-upload-progress');
const MAX_BYTES = 100 * 1024 * 1024;
let signedInUser = null;

function text(value) { return typeof value === 'string' ? value : ''; }
function empty(message = 'No community videos yet. Be the first cook to share one!') {
  feed.replaceChildren();
  const wrap = document.createElement('div'); wrap.className = 'reels-empty';
  const card = document.createElement('div'); card.className = 'card';
  const title = document.createElement('h1'); title.textContent = 'Community recipes';
  const copy = document.createElement('p'); copy.textContent = message;
  card.append(title, copy); wrap.append(card); feed.append(wrap);
}
function button(label, icon, action) {
  const b = document.createElement('button'); b.type = 'button'; b.title = label; b.setAttribute('aria-label', label); b.textContent = icon;
  b.addEventListener('click', action); return b;
}
function render(items) {
  feed.replaceChildren();
  if (!items.length) { empty(); return; }
  items.forEach(item => {
    const card = document.createElement('article'); card.className = 'reel-card';
    const video = document.createElement('video');
    video.src = text(item.videoUrl); video.muted = true; video.loop = true; video.playsInline = true; video.preload = 'none';
    video.addEventListener('click', () => video.paused ? video.play() : video.pause());
    const copy = document.createElement('div'); copy.className = 'reel-copy';
    const author = document.createElement('div'); author.className = 'reel-author';
    const creator = text(item.creatorName);
    if (creator) author.translate = false;
    author.textContent = '@' + (creator || 'Hatri cook');
    const title = document.createElement('h2'); title.textContent = text(item.title) || 'Recipe video';
    const caption = document.createElement('p'); caption.textContent = text(item.caption);
    const meta = document.createElement('div'); meta.className = 'reel-meta'; meta.textContent = 'Public recipe · Tap video to pause';
    copy.append(author, title, caption, meta);
    const actions = document.createElement('div'); actions.className = 'reel-actions';
    actions.append(button('Share recipe', '↗', async () => {
      const share = { title: title.textContent, text: caption.textContent, url: location.href };
      try { if (navigator.share) await navigator.share(share); else await navigator.clipboard.writeText(location.href); } catch (_) { /* cancelled */ }
    }));
    card.append(video, copy, actions); feed.append(card);
  });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    const video = entry.target.querySelector('video');
    if (entry.isIntersecting) video.play().catch(() => {}); else video.pause();
  }), { root: feed, threshold: 0.65 });
  feed.querySelectorAll('.reel-card').forEach(card => observer.observe(card));
}

onAuthStateChanged(auth, user => { signedInUser = user; });
onSnapshot(query(collection(db, 'publicRecipeVideos'), orderBy('createdAt', 'desc'), limit(30)), snapshot => {
  render(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter(item => item.status === 'published'));
}, error => empty(error.code === 'permission-denied' ? 'Public videos are not enabled yet. Publish the Firestore rules, then refresh.' : 'Could not load community videos.'));

function showVideoName() {
  const file = videoInput.files[0];
  videoName.translate = !file;
  videoName.textContent = file?.name || 'No video selected';
}
document.getElementById('reels-video-pick').addEventListener('click', () => videoInput.click());
videoInput.addEventListener('change', showVideoName);
document.getElementById('reels-upload-open').addEventListener('click', () => {
  if (!signedInUser) { window.toast?.('Sign in with Google from your profile before uploading.'); document.querySelector('[data-rr-profile-open]')?.click(); return; }
  form.reset(); showVideoName(); status.textContent = ''; progress.style.width = '0%'; dialog.showModal();
});
document.getElementById('reels-upload-cancel').addEventListener('click', () => dialog.close());
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!signedInUser) { status.textContent = 'Please sign in first.'; return; }
  const file = videoInput.files[0];
  if (!file || !/^video\/(mp4|webm|quicktime)$/.test(file.type)) { status.textContent = 'Choose an MP4, WebM, or MOV video.'; return; }
  if (file.size > MAX_BYTES) { status.textContent = 'Videos must be 100 MB or smaller.'; return; }
  const publish = form.querySelector('[type="submit"]'); publish.disabled = true; status.textContent = 'Uploading video…';
  try {
    const post = await addDoc(collection(db, 'publicRecipeVideos'), { ownerUid: signedInUser.uid, creatorName: signedInUser.displayName || 'Hatri cook', title: form.title.value.trim(), caption: form.caption.value.trim(), status: 'uploading', createdAt: serverTimestamp() });
    const upload = uploadBytesResumable(ref(storage, `communityVideos/${signedInUser.uid}/${post.id}`), file, { contentType: file.type, customMetadata: { postId: post.id } });
    await new Promise((resolve, reject) => { upload.on('state_changed', snap => { progress.style.width = `${Math.round(snap.bytesTransferred / snap.totalBytes * 100)}%`; }, reject, resolve); });
    const videoUrl = await getDownloadURL(upload.snapshot.ref);
    const { updateDoc, doc } = await import('https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js');
    await updateDoc(doc(db, 'publicRecipeVideos', post.id), { videoUrl, status: 'published', sizeBytes: file.size, contentType: file.type });
    status.textContent = 'Published!'; setTimeout(() => dialog.close(), 500);
  } catch (error) { status.textContent = error.code === 'permission-denied' ? 'Permission denied. Check Firebase rules.' : 'Upload failed. Please try again.'; }
  finally { publish.disabled = false; }
});
