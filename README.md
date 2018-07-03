# The Front End Nanodegree: Restaurant Reviews
This is the sixth project in Google Udacity FEND Nanodegree Scholarship. It demonstrates the responsive design, the accessibility, and the offline-first approach.

## Author
Made by Mariola Karpiewska based on initial code provided by the Udacity.

## Execution
1. Unzip the folders.
2. Run the HTTP server in the top folder of the application.
The application requires a HTTP server so please install it. The easiest options are:
- [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb). In the extension settings choose required folder and start the server. Make sure the port is set to 8000.
- [Python 2.x](https://www.python.org/downloads/release/python-2715/). With command line navigate to the required folder and execute following command:
`python -m SimpleHTTPServer 8000`
- [Python 3.x](https://www.python.org/downloads/release/python-370/). With command line navigate to the required folder and execute following command:
`python3 -m http.server 8000`
For more details on running the servers see the respective webpage.
3. Navigate browser to `localhost:8000`

Note, if necessary, the port number may be changed in js/dbhelper.js script.

## Code Description
The application consists of two views:
- a list of restaurants, implemented in index.html, js/main.js, css/styles.css
- restaurant details, implemented in restaurant.html, js/restaurant_info.js, css/restaurant_styles.css

The js/main.js and js/restaurant_info.js contain my personal token string obtained from https://www.mapbox.com/. You may want to get your own token in case the current one is deactivated.
The restaurants data (name, address, hours, reviews) is stored in data/restaurants.json, in json format. It is loaded to the application by functions defined in js/dbhelper.js.
The application has been adapted to follow the Offline First approach. It uses a Service Worker that caches the http requests for offline use in case the network is unavailable. The Service Worker is registered in js/sw_support.js, and implemented in sw.js script.

## Testing the Offline First (caching) functionality
1. Setup the application environment (HTTP server, web browser) and open the application (localhost:8000). Make sure the restaurant list page shows example data.
2. Select one restaurant and open its details with View Details button. Make sure the example details data is correctlty displayed.
3. Turn off the HTTP server. Note, the Chrome users may alternatively disconnect the network access in the browser by checking the Offline switch in Network tab of the Developer Tools.
4. Make sure the previously visited pages (restaurant list and the detailed view of the selected restaurant) are still available. While the network is off, the data is served by Service Worker from the cache.
5. Make sure the other restaurants' pages are unavailable offline. The following fallback message should be presented instead: "Sorry, could not load data. Possibly network outage. Please try again later."
6. Turn on the HTTP server back. Make sure all the restaurants' pages, both those available and unavailable offline, are now accessible.

## Dependencies
- CSS help library: [normalize.css](normalize-css.googlecode.com)
- Tiling library: [leafletjs](https://leafletjs.com/)
- Map provider: [Mapbox](https://www.mapbox.com/)


## Contributing
Pull requests are not expected, but may be accepted if they occur ;-)

## Useful links
- [Rubric](https://review.udacity.com/#!/rubrics/1090/view) for the project.
- Making accessible apps using ChromeVox: [video tutorial](https://www.youtube.com/watch?v=x18vEEfpK3g)
- [Introduction to Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers/#register_a_service_worker)
- [Introduction to JS Promises](https://developers.google.com/web/fundamentals/primers/promises)
