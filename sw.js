self.addEventListener('fetch', function(event) {
  if (event.request.url.endsWith('.testsw')) {
    event.respondWith(new Response('The sw works!',
    {headers:
     {"Content-type":"text/html"}
   }));
  }
});
