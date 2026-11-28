import { getApp } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js';
import { collection, doc, getDoc, getFirestore, limit, onSnapshot, orderBy, query, where } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js';
import { httpsCallable } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-functions.js';
import { functions } from './auth.js';

const app = getApp(), auth = getAuth(app), db = getFirestore(app);
const feed = document.getElementById('reels-feed');
const dialog = document.getElementById('reels-upload-dialog');
const form = document.getElementById('reels-upload-form');
const videoInput = document.getElementById('reels-video-input');
const videoName = document.getElementById('reels-video-name');
const previewVideo = document.getElementById('reels-preview-video');
const previewEmpty = document.getElementById('reels-preview-empty');
const next = document.getElementById('reels-upload-next');
const galleryControls = document.getElementById('reels-gallery-controls');
const detailsPanel = document.getElementById('reels-create-details');
const mapRecipeButton = document.getElementById('reels-map-recipe-open');
const mapRecipeLabel = document.getElementById('reels-map-recipe-label');
const recipeSearchRow = document.getElementById('reels-recipe-search-row');
const status = document.getElementById('reels-upload-status');
const progress = document.getElementById('reels-upload-progress');
const openUpload = document.getElementById('reels-upload-open');
const cancel = document.getElementById('reels-upload-cancel');
const publish = document.getElementById('reels-upload-submit');
const mine = document.getElementById('reels-mine');
const explore = document.getElementById('reels-explore');
const manageDialog = document.getElementById('reels-manage-dialog');
const manageForm = manageDialog.querySelector('form');
const recipeInput = document.getElementById('reels-recipe-input');
const editRecipeInput = document.getElementById('reel-edit-recipe');
const MAX_BYTES = 100 * 1024 * 1024;
const extensions = {mp4:'video/mp4', webm:'video/webm', mov:'video/quicktime'};
const cards = new Map();
let signedInUser, activeUpload, unsubscribe, wantedFeed, managing, previewURL, generation = 0;
let ownFeed = false;

// Recipe names are the stable catalog identities used by the rest of Hatri.
// Do not infer a different dish from an approximate video title.
const recipes = new Map();
for (const [index, recipe] of (window.MEALS || []).entries()) {
  if (!Array.isArray(recipe) || typeof recipe[0] !== 'string') continue;
  recipes.set(recipe[0].trim().toLocaleLowerCase('en'), {name:recipe[0],index});
}
const choices = document.createDocumentFragment();
for (const recipe of [...recipes.values()].sort((a,b) => a.name.localeCompare(b.name))) {
  const option = document.createElement('option');
  option.value = recipe.name;
  choices.append(option);
}
document.getElementById('reels-recipe-options').append(choices);
function exactRecipe(name) {
  return typeof name === 'string' ? recipes.get(name.trim().toLocaleLowerCase('en')) : null;
}
function linkedRecipe(item) {
  // Before recipeName existed, older clips carried only a free-text title.
  return exactRecipe(item.recipeName === undefined ? item.title : item.recipeName);
}
function selectedRecipe(input, statusNode) {
  const match = exactRecipe(input.value);
  input.setCustomValidity(match ? '' : 'Choose a recipe from the Hatri catalog.');
  if (!match) { statusNode.textContent = 'Select a listed Hatri recipe before continuing.'; input.reportValidity(); }
  return match;
}
for (const input of [recipeInput,editRecipeInput]) input.addEventListener('input', () => input.setCustomValidity(''));

const call = async (name, data) => (await httpsCallable(functions, name)(data)).data;
function action(label, handler) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn sm';
  button.textContent = label;
  button.addEventListener('click', handler);
  return button;
}
function storageURL(value) {
  const url = new URL(value);
  if (url.origin !== 'https://storage.googleapis.com' || url.username || url.password) throw Error('Video host is unavailable.');
  return url.href;
}
function message(text, retry) {
  render([]);
  const wrap = document.createElement('div');
  wrap.className = 'reels-empty';
  const card = document.createElement('div');
  card.className = 'card';
  const copy = document.createElement('p');
  copy.setAttribute('role', 'status');
  copy.textContent = text;
  card.append(copy);
  if (retry) card.append(action('Retry', retry));
  wrap.append(card);
  feed.replaceChildren(wrap);
}
function profile() {
  window.toast?.('Sign in with Google to continue.');
  document.querySelector('[data-rr-profile-open]')?.click();
}
function openManagement(kind, entry) {
  if (!signedInUser) return profile();
  managing = {kind, entry, uid:signedInUser.uid};
  manageForm.reset();
  manageForm.querySelector('[data-reel-management-status]').textContent = '';
  for (const group of manageForm.querySelectorAll('[data-reel-management]')) {
    const selected = group.dataset.reelManagement === kind;
    group.hidden = !selected;
    for (const field of group.querySelectorAll('input,select,textarea')) field.disabled = !selected;
  }
  manageDialog.querySelector('h2').textContent = {edit:'Edit video',delete:'Remove video',report:'Report video'}[kind];
  if (kind === 'edit') {
    for (const key of ['caption','credit']) manageForm.elements.namedItem(key).value = entry.item[key] || '';
    editRecipeInput.value = entry.item.recipeName || linkedRecipe(entry.item)?.name || '';
  }
  manageDialog.showModal();
}
manageForm.addEventListener('submit', async event => {
  event.preventDefault();
  const job = managing;
  if (!job || job.uid !== signedInUser?.uid) return;
  if (job.kind === 'edit' && !selectedRecipe(editRecipeInput,manageForm.querySelector('[data-reel-management-status]'))) return;
  const submit = manageForm.querySelector('[type=submit]');
  submit.disabled = true;
  const fields = Object.fromEntries(new FormData(manageForm));
  try {
    const data = {id:job.entry.item.id, action:job.kind, ...fields};
    if (job.kind === 'edit') {
      data.recipeName = exactRecipe(data.recipeName).name;
      // Existing backend records still require title; it is internal, not a Reel UI field.
      data.title = data.recipeName.slice(0,80);
    }
    await call(job.kind === 'report' ? 'reportReel' : 'manageReel', data);
    if (job.kind === 'edit' && wantedFeed?.startsWith('post:')) loadFeed();
    if (job.kind === 'delete' && wantedFeed?.startsWith('post:')) message('This video has been removed.');
    if (managing === job) manageDialog.close();
    window.toast?.(job.kind === 'report' ? 'Report sent.' : job.kind === 'delete' ? 'Video removed.' : 'Video updated.');
  } catch (error) {
    if (managing === job) manageForm.querySelector('[data-reel-management-status]').textContent = error.message || 'Try again.';
  } finally { submit.disabled = false; }
});
manageDialog.querySelector('[data-reel-manage-cancel]').addEventListener('click', () => manageDialog.close());

function refreshActions(entry, isOwner) {
  for (const button of entry.actions.querySelectorAll('[data-reel-owner]')) button.remove();
  if (!isOwner) return;
  for (const [key,label] of [['edit','Edit'],['delete','Remove']]) {
    const button = action(label, () => openManagement(key,entry));
    button.dataset.reelOwner = '';
    entry.actions.append(button);
  }
}
function renderRecipeLink(entry, item) {
  const recipe = linkedRecipe(item), area = entry.recipeArea;
  area.replaceChildren();
  if (!recipe) {
    const note = document.createElement('p');
    note.className = 'reel-recipe-missing';
    note.textContent = 'Recipe not linked yet. The cook can add a Hatri recipe in Edit.';
    area.append(note);
    return;
  }
  const tile = document.createElement('button');
  tile.type = 'button';
  tile.className = 'reel-recipe-tile';
  tile.dataset.openDish = String(recipe.index);
  tile.setAttribute('aria-haspopup','dialog');
  tile.setAttribute('aria-controls','dtray');
  tile.setAttribute('aria-label',`Open ${recipe.name} ingredients and recipe steps`);
  const imageId = window.IMG?.[window.pslug?.(recipe.name)];
  const fallback = () => {
    const symbol = document.createElement('span');
    symbol.className = 'reel-recipe-fallback';
    symbol.setAttribute('aria-hidden','true');
    symbol.textContent = '🍲';
    return symbol;
  };
  if (imageId && typeof window.photoSrc === 'function') {
    const img = document.createElement('img');
    img.alt = '';
    img.loading = 'lazy';
    img.src = window.photoSrc(imageId);
    img.addEventListener('error', () => img.replaceWith(fallback()), {once:true});
    tile.append(img);
  } else tile.append(fallback());
  const label = document.createElement('span');
  const name = document.createElement('strong');
  name.textContent = window.dn?.(recipe.name) || recipe.name;
  const instruction = document.createElement('small');
  instruction.textContent = 'View ingredients & full recipe ↗';
  label.append(name,instruction);
  tile.append(label);
  area.append(tile);
}
function makeCard(item) {
  const card = document.createElement('article');
  card.className = 'reel-card';
  const video = document.createElement('video');
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'none';
  video.controls = true;
  const copy = document.createElement('div');
  copy.className = 'reel-copy';
  const author = document.createElement('div');
  author.className = 'reel-author';
  const caption = document.createElement('p');
  author.translate = caption.translate = false;
  const playError = document.createElement('p');
  playError.setAttribute('role','status');
  playError.hidden = true;
  const recipeArea = document.createElement('div');
  const hint = document.createElement('p');
  hint.className = 'reels-swipe-hint';
  hint.textContent = 'Swipe up for the next recipe video ↑';
  copy.append(author,caption,playError,recipeArea,hint);
  const actions = document.createElement('div');
  actions.className = 'reel-actions';
  const entry = {card,video,author,caption,playError,recipeArea,actions,item};
  const share = action('Share', async () => {
    const url = new URL(location.href);
    url.searchParams.delete('reels');
    url.searchParams.set('reel', entry.item.id);
    url.hash = '';
    try {
      if (navigator.share) await navigator.share({title:linkedRecipe(entry.item)?.name || 'Hatri reel', text:caption.textContent, url:url.href});
      else if (navigator.clipboard) { await navigator.clipboard.writeText(url.href); window.toast?.('Video link copied.'); }
      else window.prompt('Copy this video link',url.href);
    } catch (error) {
      if (error.name !== 'AbortError') window.prompt('Copy this video link',url.href);
    }
  });
  share.setAttribute('aria-label','Share recipe');
  actions.append(share, action('Report', () => openManagement('report',entry)));
  const retry = action('Retry video', () => {
    entry.expires = 0;
    playVisible(entry);
  });
  retry.hidden = true;
  entry.retry = retry;
  actions.append(retry);
  video.addEventListener('error', () => {
    if (!video.src) return;
    playError.hidden = retry.hidden = false;
    playError.textContent = 'Could not play this video.';
  });
  card.append(video,copy,actions);
  observer.observe(card);
  return entry;
}
function updateCard(entry, item) {
  const {video, author, caption} = entry;
  entry.item = item;
  author.textContent = item.credit || 'Hatri cook';
  caption.textContent = item.caption || '';
  renderRecipeLink(entry,item);
  video.setAttribute('aria-label',`Recipe reel: ${linkedRecipe(item)?.name || 'unlinked recipe'}`);
  if (entry.subtitles === item.subtitles && entry.subtitleLanguage === item.subtitleLanguage) return;
  video.querySelector('track')?.remove();
  if (entry.captionURL) URL.revokeObjectURL(entry.captionURL);
  entry.subtitles = item.subtitles;
  entry.subtitleLanguage = item.subtitleLanguage;
  if (item.subtitles) {
    const track = document.createElement('track');
    track.kind = 'captions';
    track.srclang = item.subtitleLanguage === 'hi' ? 'hi' : 'en';
    track.label = track.srclang === 'hi' ? 'हिंदी' : 'English';
    entry.captionURL = URL.createObjectURL(new Blob([item.subtitles],{type:'text/vtt'}));
    track.src = entry.captionURL;
    video.append(track);
  }
}
async function playVisible(entry) {
  if (entry.loading) return;
  entry.playError.hidden = entry.retry.hidden = true;
  if (!entry.expires || entry.expires < Date.now() + 15_000 || entry.viewer !== signedInUser?.uid) {
    entry.loading = true;
    const viewer = signedInUser?.uid;
    try {
      const result = await call('playReel',{id:entry.item.id});
      if (cards.get(entry.item.id) !== entry || viewer !== signedInUser?.uid) return;
      const url = storageURL(result.url);
      if (entry.video.src !== url) entry.video.src = url;
      entry.expires = result.expires;
      entry.viewer = viewer;
      refreshActions(entry,result.owner);
    } catch (error) {
      entry.playError.textContent = error.message || 'Could not play this video.';
      entry.playError.hidden = entry.retry.hidden = false;
      return;
    } finally { entry.loading = false; }
  }
  if (entry.visible) await entry.video.play().catch(() => {});
}
const observer = new IntersectionObserver(entries => entries.forEach(({target,isIntersecting}) => {
  const entry = cards.get(target.dataset.videoId);
  if (!entry) return;
  entry.visible = isIntersecting;
  if (isIntersecting) playVisible(entry);
  else entry.video.pause();
}),{root:feed,threshold:0.65});

function render(items) {
  const keep = new Set(items.map(item => item.id));
  const anchor = [...cards.values()].find(entry => entry.visible && keep.has(entry.item.id));
  const before = anchor?.card.getBoundingClientRect().top;
  feed.querySelector('.reels-empty')?.remove();
  for (const [id,entry] of cards) {
    if (keep.has(id)) continue;
    observer.unobserve(entry.card);
    entry.video.pause();
    entry.video.removeAttribute('src');
    entry.video.load();
    if (entry.captionURL) URL.revokeObjectURL(entry.captionURL);
    entry.card.remove();
    cards.delete(id);
  }
  let cursor = feed.firstElementChild;
  for (const item of items) {
    let entry = cards.get(item.id);
    if (!entry) {
      entry = makeCard(item);
      entry.card.dataset.videoId = item.id;
      cards.set(item.id,entry);
    }
    updateCard(entry,item);
    if (entry.card !== cursor) feed.insertBefore(entry.card,cursor);
    cursor = entry.card.nextElementSibling;
  }
  if (anchor && before !== undefined) feed.scrollTop += anchor.card.getBoundingClientRect().top - before;
}
function loadFeed() {
  const token = ++generation;
  unsubscribe?.();
  unsubscribe = null;
  const link = new URL(location.href).searchParams.get('reel');
  const linkId = link && /^[A-Za-z0-9_-]{16,80}$/.test(link) ? link : null;
  explore.hidden = !linkId || ownFeed;
  const scope = linkId && !ownFeed ? 'post:' + linkId : ownFeed ? 'own:' + signedInUser?.uid : 'public';
  if (wantedFeed !== scope) { render([]); feed.scrollTop = 0; }
  wantedFeed = scope;
  const failed = error => {
    if (generation === token) message(linkId && error.code === 'permission-denied' ? 'This video is unavailable.' : 'Could not load community videos.',loadFeed);
  };
  if (scope.startsWith('post:')) {
    getDoc(doc(db,'publicRecipeVideos',linkId)).then(snapshot => {
      if (generation !== token) return;
      if (snapshot.exists()) render([{...snapshot.data(),id:snapshot.id}]);
      else message('This video is unavailable.');
    }).catch(failed);
    return;
  }
  const queries = ownFeed
    ? [collection(db,'reelDrafts'),where('ownerUid','==',signedInUser.uid)]
    : [collection(db,'publicRecipeVideos'),where('version','==',2)];
  unsubscribe = onSnapshot(query(...queries,where('status','==','published'),orderBy('publishedAt','desc'),limit(30)), snapshot => {
    if (generation !== token) return;
    if (snapshot.empty) message(ownFeed ? 'You have no published videos.' : 'No community videos yet.');
    else render(snapshot.docs.map(record => ({...record.data(),id:record.id})));
  },failed);
}
mine.addEventListener('click', () => {
  if (!signedInUser) return profile();
  ownFeed = !ownFeed;
  mine.textContent = ownFeed ? 'Community feed' : 'My videos';
  loadFeed();
});
explore.addEventListener('click', () => {
  const url = new URL(location.href);
  url.searchParams.delete('reel');
  url.searchParams.set('reels','1');
  history.replaceState({hatriReels:true},'',url);
  ownFeed = false;
  mine.textContent = 'My videos';
  loadFeed();
});
// The existing Hatri recipe dialog supplies photos, quantities, methods, Hindi
// content and its normal close button. Keep the reel position behind the dialog.
document.addEventListener('hatri:recipe-open', () => {
  if (document.body.dataset.v === 'reels') for (const entry of cards.values()) entry.video.pause();
});
document.getElementById('dtray').addEventListener('close', () => {
  if (document.body.dataset.v === 'reels') for (const entry of cards.values()) if (entry.visible) playVisible(entry);
});
function syncFeed() {
  if (document.body.dataset.v === 'reels') loadFeed();
  else {
    ++generation;
    unsubscribe?.();
    unsubscribe = null;
    for (const entry of cards.values()) { entry.visible = false; entry.video.pause(); }
  }
}
document.addEventListener('hatri:view-change',syncFeed);

function stopUpload() {
  if (activeUpload?.publishing) return false;
  if (activeUpload) {
    activeUpload.cancelled = true;
    activeUpload.request?.abort();
  }
  return true;
}
onAuthStateChanged(auth,user => {
  if (signedInUser?.uid !== user?.uid) {
    stopUpload();
    if (manageDialog.open) manageDialog.close();
    for (const entry of cards.values()) refreshActions(entry,false);
  }
  signedInUser = user;
  if (!user && ownFeed) { ownFeed = false; mine.textContent = 'My videos'; }
  if (document.body.dataset.v === 'reels') {
    if (wantedFeed) syncFeed();
    for (const entry of cards.values()) if (entry.visible) playVisible(entry);
  }
});

function clearPreview() {
  previewVideo.pause();
  previewVideo.removeAttribute('src');
  previewVideo.load();
  if (previewURL) URL.revokeObjectURL(previewURL);
  previewURL = null;
  previewVideo.hidden = true;
  previewEmpty.hidden = false;
}
function showVideoName() {
  clearPreview();
  const file = videoInput.files[0];
  const mime = file && (Object.values(extensions).includes(file.type) ? file.type : extensions[file.name.split('.').pop().toLowerCase()]);
  const valid = !!(file && mime && file.size > 0 && file.size <= MAX_BYTES);
  videoName.translate = !file;
  videoName.textContent = !file ? 'No video selected' : valid ? file.name : 'Choose an MP4, WebM, or MOV video up to 100 MB.';
  next.disabled = !valid;
  if (valid) {
    previewURL = URL.createObjectURL(file);
    previewVideo.src = previewURL;
    previewVideo.hidden = false;
    previewEmpty.hidden = true;
  }
}
function setUploadStage(details) {
  dialog.classList.toggle('is-details',details);
  galleryControls.hidden = details;
  detailsPanel.hidden = !details;
  next.textContent = details ? '‹ Back' : 'Next';
  if (details) previewVideo.pause();
}
function showRecipeSearch() {
  recipeSearchRow.hidden = false;
  mapRecipeButton.setAttribute('aria-expanded','true');
  recipeInput.focus();
}
function syncMappedRecipe() {
  mapRecipeLabel.textContent = exactRecipe(recipeInput.value)?.name || 'Add / map a recipe';
}
mapRecipeButton.addEventListener('click',() => {
  if (recipeSearchRow.hidden) showRecipeSearch();
  else { recipeSearchRow.hidden = true; mapRecipeButton.setAttribute('aria-expanded','false'); }
});
recipeInput.addEventListener('input',syncMappedRecipe);
videoInput.addEventListener('change',showVideoName);
document.getElementById('reels-video-pick').addEventListener('click',() => videoInput.click());
next.addEventListener('click',() => {
  if (activeUpload) return;
  if (detailsPanel.hidden) { if (!next.disabled) setUploadStage(true); }
  else setUploadStage(false);
});
openUpload.addEventListener('click',() => {
  if (!signedInUser) return profile();
  if (activeUpload) return;
  form.reset();
  recipeInput.setCustomValidity('');
  showVideoName();
  syncMappedRecipe();
  recipeSearchRow.hidden = true;
  mapRecipeButton.setAttribute('aria-expanded','false');
  setUploadStage(false);
  status.textContent = '';
  progress.value = 0;
  dialog.showModal();
});
cancel.addEventListener('click',() => { if (stopUpload()) dialog.close(); });
dialog.addEventListener('cancel',event => { if (!stopUpload()) event.preventDefault(); });
dialog.addEventListener('close',clearPreview);

function transfer(job, policy, file) {
  return new Promise((resolve,reject) => {
    const data = new FormData();
    for (const [key,value] of Object.entries(policy.fields)) data.append(key,value);
    data.append('file',file);
    const xhr = job.request = new XMLHttpRequest();
    xhr.open('POST',storageURL(policy.url));
    xhr.upload.onprogress = event => { if (event.lengthComputable) progress.value = event.loaded / event.total; };
    xhr.onload = () => xhr.status >= 200 && xhr.status < 300 ? resolve() : reject(Error('Upload failed. Try again.'));
    xhr.onerror = () => reject(Error('Could not connect to video storage.'));
    xhr.onabort = () => reject(new DOMException('Upload cancelled.','AbortError'));
    xhr.send(data);
  });
}
form.addEventListener('submit',async event => {
  event.preventDefault();
  if (!signedInUser || activeUpload) return;
  const data = new FormData(form), file = videoInput.files[0], captionFile = form.elements.namedItem('subtitles').files[0];
  if (recipeSearchRow.hidden && !exactRecipe(recipeInput.value)) showRecipeSearch();
  const recipe = selectedRecipe(recipeInput,status);
  if (!recipe) return;
  const contentType = file && (Object.values(extensions).includes(file.type) ? file.type : extensions[file.name.split('.').pop().toLowerCase()]);
  if (!file || !contentType || !file.size || file.size > MAX_BYTES) {
    status.textContent = 'Choose a non-empty MP4, WebM, or MOV video up to 100 MB.';
    return;
  }
  if (captionFile && captionFile.size > 24_576) { status.textContent = 'Choose a WebVTT caption file up to 24 KB.'; return; }
  const job = activeUpload = {uid:signedInUser.uid};
  publish.disabled = openUpload.disabled = next.disabled = true;
  status.textContent = 'Preparing upload…';
  try {
    const subtitles = captionFile ? await captionFile.text() : '';
    if (job.cancelled || job.uid !== signedInUser?.uid) return;
    const {id,policy} = await call('startReel',{title:recipe.name.slice(0,80),recipeName:recipe.name,caption:data.get('caption'),
      credit:data.get('credit'),subtitleLanguage:data.get('subtitleLanguage'),subtitles,contentType,sizeBytes:file.size});
    job.id = id;
    if (job.cancelled || job.uid !== signedInUser?.uid) return;
    status.textContent = 'Uploading video…';
    await transfer(job,policy,file);
    if (job.cancelled || job.uid !== signedInUser?.uid) return;
    job.publishing = cancel.disabled = true;
    status.textContent = 'Checking and publishing video…';
    await call('publishReel',{id});
    job.done = true;
    dialog.close();
    window.toast?.('Video published.');
  } catch (error) {
    if (!job.cancelled) status.textContent = error.message || 'Upload failed. Try again.';
  } finally {
    if (job.id && !job.done && job.uid === signedInUser?.uid) await call('cancelReel',{id:job.id}).catch(() => {});
    if (activeUpload === job) activeUpload = null;
    openUpload.disabled = publish.disabled = cancel.disabled = false;
    next.disabled = !videoInput.files[0];
  }
});
syncFeed();
