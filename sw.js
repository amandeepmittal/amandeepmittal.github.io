/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-953a576799ad29509c60.js"
  },
  {
    "url": "app-aedcdcbac955d042deef.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b48127627d3a416b8133.js"
  },
  {
    "url": "index.html",
    "revision": "a0cd6db1af348ea0bd7bdb1ed5093ff2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "71d98038c2cd335cc0940b45666720c6"
  },
  {
    "url": "component---src-pages-index-js.ccbc49f45c6fc26f2ac9.css"
  },
  {
    "url": "component---src-pages-index-js-e6649d31496a5d7112b7.js"
  },
  {
    "url": "6-0c30382a408d9d017db2.js"
  },
  {
    "url": "0-ad54f4716786ddfa50ac.js"
  },
  {
    "url": "static/d/208/path---index-6a9-Uj6Ham5nfKiZFki6rJqN1flw8.json",
    "revision": "e2064a3449b6f6b59e7119874c83e6a4"
  },
  {
    "url": "component---src-pages-404-js.ccbc49f45c6fc26f2ac9.css"
  },
  {
    "url": "component---src-pages-404-js-a1cf9870552433706b79.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e077f0a419c9152abd1b8e03f30b1402"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});