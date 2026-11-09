// Service Worker des Klausurtrainers: wiederholte Besuche und Fachwechsel kommen aus dem Gerät,
// auch bei hängendem oder fehlendem Netz.
//
// - Seiten (index.html, trainer.html): sofort aus dem Cache, im Hintergrund vom Netz aktualisiert.
//   Nach einem Deploy erscheint die neue Version also beim übernächsten Aufruf.
// - Gehashte Dateien unter assets/: ändern sich nie, deshalb Cache zuerst.
// - Alles andere (llms.txt, content/, Speed Insights) geht unverändert ans Netz.
//
// Notausschalter: Diese Datei durch einen Worker ersetzen, der in `activate` alle Caches löscht und
// `self.registration.unregister()` aufruft. Die Datei wird nie gecacht (vercel.json), Browser holen sie
// bei jedem Seitenaufruf neu.
//
// Ändert sich die Cache-Logik, die Versionsnummer erhöhen: Alte Caches werden dann beim Aktivieren gelöscht.

const VERSION = 1;
const PAGE_CACHE = `seiten-v${VERSION}`;
const ASSET_CACHE = `dateien-v${VERSION}`;
/** Obergrenze für gehashte Dateien; alte Deploys sammeln sich sonst unbegrenzt an. */
const MAX_ASSETS = 120;

const scope = new URL(self.registration.scope);
const ASSET_PREFIX = `${scope.pathname}assets/`;
const PAGES = new Set([scope.pathname, `${scope.pathname}index.html`, `${scope.pathname}trainer.html`]);

// Beide Seiten gleich beim Installieren speichern (zusammen wenige kB): Sonst käme erst der dritte
// Besuch aus dem Cache, weil der erste noch ohne Worker lief. Fehlt eine Seite, holt sie der nächste Besuch.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PAGE_CACHE);
      await Promise.allSettled(
        [...PAGES].map(async (page) => {
          const url = `${scope.origin}${page}`;
          const response = await fetch(url, { cache: "no-cache" });
          if (cacheable(response)) await cache.put(url, response);
        })
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set([PAGE_CACHE, ASSET_CACHE]);
      for (const name of await caches.keys()) {
        if (!keep.has(name)) await caches.delete(name);
      }
      if (self.registration.navigationPreload) await self.registration.navigationPreload.enable();
      await self.clients.claim();
    })()
  );
});

/** Nur vollständige, eigene Antworten speichern; umgeleitete Antworten darf eine Navigation nicht nutzen. */
function cacheable(response) {
  return response && response.ok && response.status === 200 && response.type === "basic" && !response.redirected;
}

async function trimAssets(cache) {
  const keys = await cache.keys();
  for (let index = 0; index < keys.length - MAX_ASSETS; index += 1) await cache.delete(keys[index]);
}

async function fromPageCache(event, url) {
  const cache = await caches.open(PAGE_CACHE);
  // Eine Seite pro Pfad: trainer.html?subject=laa und ?subject=aud teilen sich dasselbe HTML.
  const key = `${url.origin}${url.pathname}`;
  const network = (async () => {
    const response = (await event.preloadResponse) || (await fetch(event.request));
    if (cacheable(response)) await cache.put(key, response.clone());
    return response;
  })();
  const cached = await cache.match(key);
  if (cached) {
    event.waitUntil(network.catch(() => undefined));
    return cached;
  }
  return network;
}

async function fromAssetCache(request) {
  const cache = await caches.open(ASSET_CACHE);
  const cached = await cache.match(request, { ignoreVary: true });
  if (cached) return cached;
  const response = await fetch(request);
  if (cacheable(response)) {
    await cache.put(request, response.clone());
    await trimAssets(cache);
  }
  return response;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== scope.origin) return;

  if (request.mode === "navigate" && PAGES.has(url.pathname)) {
    event.respondWith(fromPageCache(event, url));
    return;
  }
  if (url.pathname.startsWith(ASSET_PREFIX)) {
    event.respondWith(fromAssetCache(request));
  }
});
