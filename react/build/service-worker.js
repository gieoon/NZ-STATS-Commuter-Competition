if (typeof importScripts === "function") {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded 🚀");
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"3b9133a764a4aea9ac6bb8e67cdfe692","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"3b9133a764a4aea9ac6bb8e67cdfe692","url":"index.html"},{"revision":"5a6fd404ce3ca1f24c91a7572f9d66b5","url":"precache-manifest.5a6fd404ce3ca1f24c91a7572f9d66b5.js"},{"revision":"09af24edb98d2640cb80f4903df240bd","url":"static/css/App.8c164f66.chunk.css"},{"revision":"f38e51dc7f328609e6579b89bc38dc3d","url":"static/css/main.fb5e79b7.chunk.css"},{"revision":"113dbb79536c63b27ba7666dfae0bb51","url":"static/css/MapExplorer.ef36ce8f.chunk.css"},{"revision":"d37202e2bf0a7d1965328ce367a5a7ae","url":"static/css/MapVisualizer.a04365e1.chunk.css"},{"revision":"93e22f98bef0dfc01e051d79f39beffb","url":"static/js/0.5a5e89a1.chunk.js"},{"revision":"01bba5a560de6bdc27f130ed026e5cd1","url":"static/js/10.2491f698.chunk.js"},{"revision":"fac14b8946e05a83571a5ae10f9d74d7","url":"static/js/11.e782a1d7.chunk.js"},{"revision":"03e8ed1a80786202f602d67eb7bee0e3","url":"static/js/12.b44eba7a.chunk.js"},{"revision":"fda11133c52e3b668614df0bc3b85c8c","url":"static/js/13.d124135b.chunk.js"},{"revision":"0c3496cc3d0161215542b9aac772d806","url":"static/js/14.8ac50d0b.chunk.js"},{"revision":"11a8eb67b80eda292cff1525542c6035","url":"static/js/15.af324d41.chunk.js"},{"revision":"0c0c2daa91335397f19849fd460585e3","url":"static/js/16.e5c1de55.chunk.js"},{"revision":"374462dfae1ce1d8bd848604e95b9e91","url":"static/js/About.c37c560e.chunk.js"},{"revision":"08d7ee90f29a0647a2e2381cfae2f2c5","url":"static/js/App.dd2751c3.chunk.js"},{"revision":"9c87b70a989bbe229129b1d4b7e0ac39","url":"static/js/CommuteTab.1e500f98.chunk.js"},{"revision":"0bd9cded86dab305a09fc614eb826b93","url":"static/js/District.ef3f216e.chunk.js"},{"revision":"eb82a4af5e1d2cf5a1d3248eeba2fc58","url":"static/js/Home.226f9c9b.chunk.js"},{"revision":"50045bd6bbfd1f508d47a56c767e8854","url":"static/js/main.8cfec133.chunk.js"},{"revision":"acc43c5fa02b1d9e7f7e34bbdfabcd02","url":"static/js/MapExplorer.6030fedc.chunk.js"},{"revision":"d07b6a4345b8a94b4771f9b479f7303f","url":"static/js/MapVisualizer.34060ffa.chunk.js"},{"revision":"b96e14aa8b392c4ce56785e8db6cc22a","url":"static/js/runtime-main.a242d596.js"}]);

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
      new RegExp("https://nzcommute.com/.*\\.json"),
      new workbox.strategies.NetworkFirst(),
      "GET"
    );
  } else {
    console.log("Workbox could not be loaded. Hence, no offline support.");
  }
}
