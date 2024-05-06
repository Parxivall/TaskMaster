// Definir el nombre de la caché
const CACHE_NAME = 'mi-cache-v1';
// Definir los recursos para almacenar en caché
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  // Realizar acciones durante la instalación, en este caso, almacenar en caché los recursos definidos
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activado');
  // Eliminar cachés antiguas
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Cache antigua eliminada', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Si la solicitud está en la caché, se devuelve la respuesta de la caché
        if (response) {
          return response;
        }
        // Si no, se realiza la solicitud a la red
        return fetch(event.request);
      }
    )
  );
});