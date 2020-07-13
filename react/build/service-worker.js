if (typeof importScripts === "function") {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded 🚀");
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"3321e652e656d0d4d842819636856e84","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"3321e652e656d0d4d842819636856e84","url":"index.html"},{"revision":"93bd08ec5699dd7f67dfe185be04bbcc","url":"precache-manifest.93bd08ec5699dd7f67dfe185be04bbcc.js"},{"revision":"dedbe04196b0687e16a2a829af56d556","url":"static/css/App.ce63d231.chunk.css"},{"revision":"f38e51dc7f328609e6579b89bc38dc3d","url":"static/css/main.fb5e79b7.chunk.css"},{"revision":"113dbb79536c63b27ba7666dfae0bb51","url":"static/css/MapExplorer.ef36ce8f.chunk.css"},{"revision":"863f0af03a48ba29b2a252ae96b529da","url":"static/css/MapVisualizer.e99b4910.chunk.css"},{"revision":"b11125de1ab643ad168b42427185c178","url":"static/js/10.b5a7e05f.chunk.js"},{"revision":"e5777c0c97aa49504e6c89614b994360","url":"static/js/11.a77513ef.chunk.js"},{"revision":"b2225d221fbd7f24c7bc2ce59048e428","url":"static/js/12.730601ab.chunk.js"},{"revision":"cd4f27a8327d1dd9396392215d70f741","url":"static/js/13.b479a44a.chunk.js"},{"revision":"19b362f770afe3e79c25552f568af3b1","url":"static/js/14.06b8b275.chunk.js"},{"revision":"094b1b1a7eb1382acb4bce2885af8122","url":"static/js/15.1b3adb69.chunk.js"},{"revision":"816b7eafda1505cd92ce7ac60118542f","url":"static/js/9.d914376c.chunk.js"},{"revision":"bfd8abfae7475bc251ede20b007d4448","url":"static/js/About.690c37c2.chunk.js"},{"revision":"d0ecc9edf3a17cd7065b3ea27f7bcd10","url":"static/js/App.966cad5e.chunk.js"},{"revision":"0c2de1555a2bbf029080cad4910ad29f","url":"static/js/CommuteTab.eb7aa256.chunk.js"},{"revision":"9a774fb0bccda107a3fde6e89fea990b","url":"static/js/District.18d3635a.chunk.js"},{"revision":"c291ce0c92e629a7fdff749d7d7eca48","url":"static/js/Home.1012a3d0.chunk.js"},{"revision":"33619d0a02b09393e889eb32a311f333","url":"static/js/main.723f6b38.chunk.js"},{"revision":"3dc5fd1d0fe6245e55eb7321911b44a2","url":"static/js/MapExplorer.4538e9a7.chunk.js"},{"revision":"82e928ea24f253204b081ca4495b0734","url":"static/js/MapVisualizer.37e51f9d.chunk.js"},{"revision":"da67b64b16357b7f51fd799b7736aa9a","url":"static/js/runtime-main.549682da.js"}]);

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
