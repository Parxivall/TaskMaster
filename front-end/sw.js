// Asigna un nombre único a la caché
const CACHE_NAME = 'my-pwa-cache';

// Lista de archivos a ser almacenados en caché
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/images/logo.png'
];

// Evento 'install': se ejecuta cuando se instala el Service Worker
self.addEventListener('install', event => {
  // Abre una nueva caché y almacena los archivos en ella
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento 'fetch': se ejecuta cuando se solicita un recurso
self.addEventListener('fetch', event => {
  event.respondWith(
    // Intenta recuperar el recurso de la caché
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en la caché, devuélvelo
        if (response) {
          return response;
        }
        // Si el recurso no está en la caché, solicítalo a la red
        return fetch(event.request);
      })
  );
});
