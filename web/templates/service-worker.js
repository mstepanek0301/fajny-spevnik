const cacheName = "fajny-spevnik-cache-%VERSION%";
// prettier-ignore
const assets = [/*ASSETS*/];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.keys().then(keys => keys.map(key => caches.delete(key)))
  )
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((result) => result || fetch(event.request.url))
  );
});
