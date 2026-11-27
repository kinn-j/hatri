/* Hatri website shell. Increase cache version when shipping changes. */
const CACHE = 'hatri-v53-hindi-fallback';
const MEAL_PREVIEW = './images/meal-previews.webp?v=acabad01e62a';
// Recipe photos retain their versioned URLs across app-shell releases.
const PHOTO_CACHE = 'hatri-recipe-photos';
function isBundledPhoto(url) {
  return url.href.startsWith(new URL('images/', self.registration.scope).href) &&
    /[.](webp|png|jpe?g|avif)$/i.test(url.pathname);
}
const SHELL = ['./', './index.html', './auth.js', './recipe-reels.js', './vrat-recipes.js', './instagram-recipes.js', './quick-north-recipes.js', './desi-recipes.js', './additional-recipes.js', './street-food-recipes.js', './rajasthani-recipes.js', './seasonal-recipes.js', './winter-recipes.js', './activity.js', './international-recipes.js', './hero-carousel.js', './ingredient-images.js', './recipe-details.js', './manifest.webmanifest',
  './translation.js', './icons/icon-192x192.png', './icons/icon-512x512.png',
  './icons/apple-touch-icon.png', './icons/favicon.png', './images/hatri-pantry-header.webp', './images/hatri-dinner-header.webp', './images/hatri-christmas-header.webp', './images/mushroom-barley-soup.webp', MEAL_PREVIEW];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
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
        if (response && response.ok && /^image\//i.test(response.headers.get('content-type') || '')) await photos.put(request, response);
      }
      await caches.delete(name);
    }
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  // Keep already-viewed ingredient photos available when the device is offline.
  if(url.hostname==='huggingface.co' && url.pathname.startsWith('/datasets/ionicam/ingredient-atlas/resolve/main/images/')) {
    event.respondWith(caches.open(CACHE).then(async cache => {
      const saved=await cache.match(req);
      try {
        const res=await fetch(req);
        if(res.ok || res.type==='opaque') cache.put(req,res.clone());
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
          try { await cache.put(cacheKey, response.clone()); } catch { /* Storage may be full. */ }
        }
        return response;
      } catch (error) {
        if (saved) return saved;
        throw error;
      }
    })());
    return;
  }
  // Always try a fresh page first; use the cached shell if disconnected.
  if(req.mode==='navigate') {
    event.respondWith(fetch(req).then(res => {
      if(res.ok){const c=res.clone(); caches.open(CACHE).then(cache => cache.put('./index.html',c));}
      return res;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  // Keep image files on-device after first visit, without precaching the entire photo library.
  event.respondWith(fetch(req).then(res => {
    if(res.ok && (req.url.includes('/icons/') || req.url.includes('/images/') ||
      ['/manifest.webmanifest', '/auth.js', '/recipe-reels.js', '/vrat-recipes.js', '/instagram-recipes.js', '/quick-north-recipes.js', '/desi-recipes.js', '/additional-recipes.js', '/street-food-recipes.js', '/rajasthani-recipes.js', '/seasonal-recipes.js', '/winter-recipes.js', '/activity.js', '/international-recipes.js', '/hero-carousel.js', '/ingredient-images.js', '/recipe-details.js', '/translation.js'].some(path => req.url.endsWith(path)))) {
      const c=res.clone(); caches.open(CACHE).then(cache => cache.put(req,c));
    }
    return res;
  }).catch(() => caches.match(req)));
});
