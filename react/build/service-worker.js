if (typeof importScripts === "function") {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded 🚀");
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"7593a1797c4cb04afbe8acf83a81a00d","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"7593a1797c4cb04afbe8acf83a81a00d","url":"index.html"},{"revision":"647d80de7266ad07b46469bf75b50324","url":"precache-manifest.647d80de7266ad07b46469bf75b50324.js"},{"revision":"cd23f580d2feee46b603170774638e50","url":"static/css/App.f8194e85.chunk.css"},{"revision":"f38e51dc7f328609e6579b89bc38dc3d","url":"static/css/main.fb5e79b7.chunk.css"},{"revision":"113dbb79536c63b27ba7666dfae0bb51","url":"static/css/MapExplorer.ef36ce8f.chunk.css"},{"revision":"d37202e2bf0a7d1965328ce367a5a7ae","url":"static/css/MapVisualizer.a04365e1.chunk.css"},{"revision":"78882f0b1468e688e8f0877b9aaefa98","url":"static/js/0.ad7ff245.chunk.js"},{"revision":"a908be899dfb0049ebe0218c6ef171c7","url":"static/js/10.db840d3b.chunk.js"},{"revision":"6dda72f0cd6955cd38278a42713170e0","url":"static/js/11.5fd4fe18.chunk.js"},{"revision":"03e8ed1a80786202f602d67eb7bee0e3","url":"static/js/12.b44eba7a.chunk.js"},{"revision":"a0f07d703cb765394415f1f1c8243334","url":"static/js/13.dc5ab195.chunk.js"},{"revision":"4acf46fad209c9410fa1489b99bc5bfc","url":"static/js/14.7ddc7b52.chunk.js"},{"revision":"09b52d879aad7e39b4a0a1015fa04b41","url":"static/js/15.fcb0605b.chunk.js"},{"revision":"0c0c2daa91335397f19849fd460585e3","url":"static/js/16.e5c1de55.chunk.js"},{"revision":"ca2075e6b6e7719a138c36a0fd331e34","url":"static/js/About.30945020.chunk.js"},{"revision":"7c77cc238e1e09a67921e6b06d6dc8b0","url":"static/js/App.28634292.chunk.js"},{"revision":"375cc94ddb55f6ab1ab9447afc4b09db","url":"static/js/CommuteTab.01ac43f8.chunk.js"},{"revision":"2622e9b53c7b866a4b2556d01f87b709","url":"static/js/District.a534f3aa.chunk.js"},{"revision":"3fbd6654eb63ad7deff20475a2d3b0bc","url":"static/js/Home.6964c34a.chunk.js"},{"revision":"bbb15a0ae18adea80d5a0aac1cda6e52","url":"static/js/main.b07d9c4f.chunk.js"},{"revision":"a1992bb02ec43997a3271adcb4a1692e","url":"static/js/MapExplorer.60d558fd.chunk.js"},{"revision":"3fe94b36f164d4ac0c5555c69a9c7b9f","url":"static/js/MapVisualizer.cd57b20f.chunk.js"},{"revision":"e347a21eb6b541d130e640953fc7e523","url":"static/js/runtime-main.67c087cc.js"}]);

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
