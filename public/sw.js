'use strict';

const CACHE_NAME = 'Gem-TD_serviceworker';

const cacheUrls = [
  '/',
  '/singleplayer-online/',
  '/singleplayer-offline/',
  '/multiplayer/',
  '/rating/',
  '/profile/',
  '/login/',
  '/signup/',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(cacheUrls);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          })
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});