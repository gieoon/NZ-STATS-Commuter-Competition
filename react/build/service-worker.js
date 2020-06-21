if (typeof importScripts === "function") {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded 🚀");
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
      { revision: "7b8bf825a5262c409018cf0115c09138", url: "404.html" },
      {
        revision: "ad8463d1313fed60e1d10324511efdc3",
        url: "fonts/Archia/archia-bold-webfont.woff2",
      },
      {
        revision: "80da55a565ba8976b8e9e84e8c511bf7",
        url: "fonts/Archia/archia-medium-webfont.woff2",
      },
      {
        revision: "890ee929da47c4931933ff77fd557520",
        url: "fonts/Archia/archia-semibold-webfont.woff2",
      },
      { revision: "7b8bf825a5262c409018cf0115c09138", url: "index.html" },
      {
        revision: "3d83e0315e0ed2fdfc23d82cdefb5d6f",
        url: "precache-manifest.3d83e0315e0ed2fdfc23d82cdefb5d6f.js",
      },
      {
        revision: "0feb3bc384c3a8d7e50cf17bbae05f4d",
        url: "static/css/App.819bdd7d.chunk.css",
      },
      {
        revision: "f38e51dc7f328609e6579b89bc38dc3d",
        url: "static/css/main.fb5e79b7.chunk.css",
      },
      {
        revision: "7b7441105242b7eabbd5fc01782f857e",
        url: "static/js/10.f62f1496.chunk.js",
      },
      {
        revision: "3613d9d20f74978e53b0f8a0b602617e",
        url: "static/js/11.dc90bcdf.chunk.js",
      },
      {
        revision: "5010e7277155701916d4b25c0235251b",
        url: "static/js/12.85e02466.chunk.js",
      },
      {
        revision: "aae25c82dcff6e0470940a7d6b9c9853",
        url: "static/js/13.8d5c0b90.chunk.js",
      },
      {
        revision: "268074371c5fa87d2561eba9f7e09e8b",
        url: "static/js/8.3b33eea6.chunk.js",
      },
      {
        revision: "13f34fc7f6bdf879ecfeb0395703a4ec",
        url: "static/js/9.9e6faeb9.chunk.js",
      },
      {
        revision: "93282bcb4c5ebeabfac9b4c421fcfe7e",
        url: "static/js/About.a26380d0.chunk.js",
      },
      {
        revision: "3e7541f1e268f1951892d7b0bbd9fe46",
        url: "static/js/App.f28e2198.chunk.js",
      },
      {
        revision: "664d8b3164a5d0ff5c93c83cf6a1b8d4",
        url: "static/js/District.035a773e.chunk.js",
      },
      {
        revision: "a044536bb982da306f972a5240ffa985",
        url: "static/js/Home.7eb0a163.chunk.js",
      },
      {
        revision: "fd14ca6b5d906f02d66105147508fbbf",
        url: "static/js/main.fdd1f750.chunk.js",
      },
      {
        revision: "9d174d3f51cefa445bb1fb798ee06b53",
        url: "static/js/MapExplorer.5d7b9e57.chunk.js",
      },
      {
        revision: "de996424548a561e4e9da7ee7b157ab1",
        url: "static/js/MapVisualizer.e7979a63.chunk.js",
      },
      {
        revision: "f4ea3b2fa4497a809761c3c8571a64d7",
        url: "static/js/runtime-main.5016eda9.js",
      },
    ]);

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
