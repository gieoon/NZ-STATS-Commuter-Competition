if (typeof importScripts === "function") {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded 🚀");
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"a83582270c36f153ad012fdd962f9b7d","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"a83582270c36f153ad012fdd962f9b7d","url":"index.html"},{"revision":"0e90ad8e29ea78339d0e88f7a5fd664d","url":"precache-manifest.0e90ad8e29ea78339d0e88f7a5fd664d.js"},{"revision":"09af24edb98d2640cb80f4903df240bd","url":"static/css/App.8c164f66.chunk.css"},{"revision":"f38e51dc7f328609e6579b89bc38dc3d","url":"static/css/main.fb5e79b7.chunk.css"},{"revision":"113dbb79536c63b27ba7666dfae0bb51","url":"static/css/MapExplorer.ef36ce8f.chunk.css"},{"revision":"d37202e2bf0a7d1965328ce367a5a7ae","url":"static/css/MapVisualizer.a04365e1.chunk.css"},{"revision":"f171774761117bbc8740c6717e8127f0","url":"static/js/0.81e2cab9.chunk.js"},{"revision":"425b716642ef2f4866f053efa71f7d56","url":"static/js/10.ea912c17.chunk.js"},{"revision":"393b94813f02a7cbf1f15fe76e8904d9","url":"static/js/11.062cb34e.chunk.js"},{"revision":"03e8ed1a80786202f602d67eb7bee0e3","url":"static/js/12.b44eba7a.chunk.js"},{"revision":"58e71fc9d69d86a956e2fb376cb6e23c","url":"static/js/13.0f711cff.chunk.js"},{"revision":"0c3496cc3d0161215542b9aac772d806","url":"static/js/14.8ac50d0b.chunk.js"},{"revision":"5b0d9e36906ebd811796274c78b75966","url":"static/js/15.705aa2c8.chunk.js"},{"revision":"0c0c2daa91335397f19849fd460585e3","url":"static/js/16.e5c1de55.chunk.js"},{"revision":"374462dfae1ce1d8bd848604e95b9e91","url":"static/js/About.c37c560e.chunk.js"},{"revision":"4daa3f7f748f78d9fd073e54c6040c87","url":"static/js/App.ab4bde3e.chunk.js"},{"revision":"9c87b70a989bbe229129b1d4b7e0ac39","url":"static/js/CommuteTab.1e500f98.chunk.js"},{"revision":"59343c93d3536ff52b1e758067200617","url":"static/js/District.b68892d3.chunk.js"},{"revision":"ff617e71c08d3a9610b7da845ed689c6","url":"static/js/Home.41305d9c.chunk.js"},{"revision":"ef283f307993649930ce8cc90cb2e9e7","url":"static/js/main.1aaa20d8.chunk.js"},{"revision":"24d058492ea82e65dc8c557d95e1268d","url":"static/js/MapExplorer.4ecdaf44.chunk.js"},{"revision":"f5739f353f570e823e75901704218a20","url":"static/js/MapVisualizer.41589959.chunk.js"},{"revision":"07eea9fe85d9d60d124dd9723663555e","url":"static/js/runtime-main.f11b19e4.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: "PRODUCTION",
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp("https://nz-commuter.com/.*\\.json"),
      new workbox.strategies.NetworkFirst(),
      "GET"
    );
  } else {
    console.log("Workbox could not be loaded. Hence, no offline support.");
  }
}
