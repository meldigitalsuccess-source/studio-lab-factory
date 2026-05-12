const CACHE_NAME = 'studio-lab-factory-v1';
const urlsToCache = [
  '/studio-lab-factory/studio-lab-factory-login.html',
  '/studio-lab-factory/studio-lab-factory-v2.html',
  '/studio-lab-factory/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
