var CACHE_NAME = 'restaurant-reviews-cache-v1';
var urlsToCache = [
  '/',
  '/css/restaurant_styles.css',
  '/css/styles.css',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/sw_support.js',
  '/index.html',
  '/restaurant.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('In fetch event handler');
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // response found in cache - return it
        if (response) {
          console.log('Served response from cache');
          return response;
        }

        // Cloning the request stream in order to
        // provide it both to cache and browser.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              console.log('Response received, but with issue. Not to be cached.');
              return response;
            }

            // Cloning the response stream in order to
            // provide it both to browser and to cache.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                console.log('Response received, to be cached');
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(function(error){
          console.log("Could not download data.");
          return new Response("Sorry, could not load data. Possibly network outage. Please try again later.");
        });
      }).catch(function(){
        console.log('The cache.match promise failed');
      })
    );
});
