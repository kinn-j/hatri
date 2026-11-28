/* Hatri website shell. Increase cache version when shipping changes. */
const CACHE = 'hatri-v76-atomic-offline-shell';
const MEAL_PREVIEW = './images/meal-previews.webp?v=acabad01e62a';
// Recipe photos retain their versioned URLs across app-shell releases.
const PHOTO_CACHE = 'hatri-recipe-photos';
const PHOTO_LIMIT = 240;
const REMOTE_PHOTO_LIMIT = 60;
const scope = new URL(self.registration.scope);
const shellURL = new URL('index.html', scope);
const isShellNavigation = url => url.pathname === scope.pathname || url.pathname === shellURL.pathname;
let photoWrites = Promise.resolve();
const photoOrder = new Map();
async function trimPhotos(cache, limit, include, refreshed) {
  let order = photoOrder.get(limit);
  if (!order) {
    order = new Set((await cache.keys()).map(request => request.url).filter(url => include(new URL(url))));
    photoOrder.set(limit, order);
  }
  if (refreshed) {
    const url = typeof refreshed === 'string' ? refreshed : refreshed.url;
    order.delete(url);
    order.add(url);
  }
  while (order.size > limit) {
    const oldest = order.values().next().value;
    await cache.delete(oldest);
    order.delete(oldest);
  }
}
function storePhoto(cache, key, response, limit, include) {
  const write = photoWrites.then(async () => {
    await cache.put(key, response);
    await trimPhotos(cache,limit,include,key);
  });
  photoWrites = write.catch(() => {});
  return write;
}
function isRemoteIngredient(url) {
  return url.hostname==='huggingface.co' && url.pathname.startsWith('/datasets/ionicam/ingredient-atlas/resolve/main/images/');
}
function isBundledPhoto(url) {
  return url.href.startsWith(new URL('images/', self.registration.scope).href) &&
    /[.](webp|png|jpe?g|avif)$/i.test(url.pathname);
}
const SHELL = ['./', './index.html', './preferences.js', './auth.js', './recipe-reels.js', './vrat-recipes.js', './instagram-recipes.js', './quick-north-recipes.js', './desi-recipes.js', './additional-recipes.js', './street-food-recipes.js', './north-chaat-recipes.js', './north-chaat-hindi.js', './no-cook-recipes.js', './no-cook-hindi.js', './rajasthani-recipes.js', './seasonal-recipes.js', './winter-recipes.js', './activity.js', './international-recipes.js', './hero-carousel.js', './ingredient-images.js', './recipe-details.js', './manifest.webmanifest',
  './hindi-catalog.js', './translation.js', './icons/icon-192x192.png', './icons/icon-512x512.png',
  './icons/apple-touch-icon.png', './icons/favicon.png', './images/hatri-pantry-header.webp', './images/hatri-dinner-header.webp', './images/hatri-christmas-header.webp', './images/mushroom-barley-soup.webp', MEAL_PREVIEW];
// Keep one coherent, versioned app shell. These core assets are served from the
// installed cache even when the network is unstable (notably on iOS/WebKit).
// New versions arrive through an atomic service-worker installation.
const SHELL_ASSETS = new Set(SHELL.filter(path => /\.(?:js|webmanifest)$/.test(path))
  .map(path => new URL(path,scope).href));
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Bypass the browser HTTP cache when installing a new version so one shell
    // never combines newly deployed HTML with stale local scripts.
    await cache.addAll(SHELL.map(path => new Request(new URL(path,scope), {cache:'reload'})));
    for (const path of ['./index.html','./preferences.js','./translation.js']) {
      if (!await cache.match(new URL(path,scope).href)) throw Error('Incomplete Hatri offline shell: ' + path);
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const photos = await caches.open(PHOTO_CACHE);
    for (const name of await caches.keys()) {
      if (!name.startsWith('hatri-v') || name === CACHE) continue;
      const old = await caches.open(name);
      for (const request of await old.keys()) {
        if (!isBundledPhoto(new URL(request.url)) || await photos.match(request)) continue;
        const response = await old.match(request);
        if (response && response.ok && /^image\//i.test(response.headers.get('content-type') || '')) await storePhoto(photos, request, response, PHOTO_LIMIT, isBundledPhoto);
      }
      await caches.delete(name);
    }
    await trimPhotos(photos,PHOTO_LIMIT,isBundledPhoto);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  // Keep already-viewed ingredient photos available when the device is offline.
  if(isRemoteIngredient(url)) {
    event.respondWith(caches.open(CACHE).then(async cache => {
      const saved=await cache.match(req);
      try {
        const res=await fetch(req);
        if(res.ok || res.type==='opaque') await storePhoto(cache,req,res.clone(),REMOTE_PHOTO_LIMIT,isRemoteIngredient).catch(() => {});
        return res;
      } catch(e) { if(saved)return saved; throw e; }
    }));
    return;
  }
  if(url.origin !== self.location.origin) return;
  if (isBundledPhoto(url)) {
    event.respondWith((async () => {
      const retry = url.searchParams.get('photo-retry') === '1';
      url.searchParams.delete('photo-retry');
      const cacheKey = url.href;
      let cache, saved;
      try {
        cache = await caches.open(PHOTO_CACHE);
        if (!retry) saved = await cache.match(cacheKey) || await caches.match(cacheKey, {cacheName: CACHE});
      } catch { /* Photos can still load when device storage is unavailable. */ }
      if (saved && url.searchParams.has('v')) return saved;
      try {
        const response = await fetch(req, retry ? {cache: 'reload'} : undefined);
        if (!response.ok || !/^image\//i.test(response.headers.get('content-type') || '')) {
          return saved || response;
        }
        if (cache) {
          try { await storePhoto(cache, cacheKey, response.clone(), PHOTO_LIMIT, isBundledPhoto); } catch { /* Storage may be full. */ }
        }
        return response;
      } catch (error) {
        if (saved) return saved;
        throw error;
      }
    })());
    return;
  }
  // Keep HTML and scripts on the same installed release, online or offline.
  if(req.mode==='navigate') {
    if(!isShellNavigation(url)) return;
    event.respondWith((async () => {
      // Use the HTML installed alongside the scripts. A network-first HTML
      // update could otherwise mix two app versions inside one offline cache.
      const saved = await caches.open(CACHE).then(cache => cache.match(shellURL.href)).catch(() => undefined);
      return saved || fetch(req);
    })());
    return;
  }
  if(SHELL_ASSETS.has(url.href)) {
    event.respondWith((async () => {
      let cache;
      try {
        cache = await caches.open(CACHE);
        const saved = await cache.match(req);
        if(saved) return saved;
      } catch { /* Continue online when cache storage is unavailable. */ }
      const response = await fetch(req);
      // Do not populate a partially missing versioned shell from a later
      // deployment; the next service-worker installation owns upgrades.
      return response;
    })());
    return;
  }
  // Keep image files on-device after first visit, without precaching the entire photo library.
  event.respondWith(fetch(req).then(res => {
    if(res.ok && (req.url.includes('/icons/') || req.url.includes('/images/'))) {
      const c=res.clone(); caches.open(CACHE).then(cache => cache.put(req,c));
    }
    return res;
  }).catch(() => caches.match(req)));
});

