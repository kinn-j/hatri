/* Hatri website shell. Increase cache version when shipping changes. */
const CACHE = 'hatri-v29-recipe-details';
const SHELL = ['./', './index.html', './auth.js', './vrat-recipes.js', './instagram-recipes.js', './quick-north-recipes.js', './street-food-recipes.js', './rajasthani-recipes.js', './ingredient-images.js', './recipe-details.js', './manifest.webmanifest',
  './icons/icon-192x192.png', './icons/icon-512x512.png',
  './icons/apple-touch-icon.png', './icons/favicon.png', './images/photos.json', './images/hatri-pantry-header.webp'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim()));
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
      ['/manifest.webmanifest', '/auth.js', '/vrat-recipes.js', '/instagram-recipes.js', '/quick-north-recipes.js', '/street-food-recipes.js', '/rajasthani-recipes.js', '/ingredient-images.js', '/recipe-details.js'].some(path => req.url.endsWith(path)))) {
      const c=res.clone(); caches.open(CACHE).then(cache => cache.put(req,c));
    }
    return res;
  }).catch(() => caches.match(req)));
});
