const cacheName = 'connaissance-info-cache-v1';
const files = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json'
  '/contact.html'
  '/login.html'
  '/dashboard.html'
  '/plus.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});