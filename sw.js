// Service worker: guarda la app en caché para usarla sin conexión.
const CACHE = 'copiloto-pn26-v6';
const TILES = 'copiloto-pn26-tiles'; // fondo de mapa visto con cobertura, para verlo después sin ella
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png', './Ruta-PN26-Etapa2.gpx', './Ruta-PN26-Etapa2.kml', './vendor/leaflet.js', './vendor/leaflet.css'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== TILES).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Primero caché (funciona sin cobertura); si hay red, actualiza la copia en segundo plano.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.hostname === 'tile.openstreetmap.org') { // teselas: primero caché; si no, red y se guardan
    e.respondWith(caches.open(TILES).then((c) => c.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      if (res && res.ok) c.put(e.request, res.clone());
      return res;
    }).catch(() => new Response('', { status: 504 })))));
    return;
  }
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      const net = fetch(e.request)
        .then((res) => {
          if (res && res.ok && new URL(e.request.url).origin === location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
