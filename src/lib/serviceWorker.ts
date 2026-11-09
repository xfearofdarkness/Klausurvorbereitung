/**
 * Meldet `public/sw.js` an: Seiten und gehashte Dateien kommen dann bei wiederholten Besuchen aus dem
 * Gerät. Nur im Produktions-Build und nicht im Pages-Build, der nur weiterleitet. Erst nach `load`,
 * damit die Anmeldung nicht mit dem ersten Laden um Bandbreite konkurriert.
 */
export function registerServiceWorker(): void {
  if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return;
  const redirect = import.meta.env.VITE_PAGES_REDIRECT;
  if (redirect && redirect !== "0") return;
  const register = (): void => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch((error: unknown) => {
      console.warn("Offline-Cache konnte nicht eingerichtet werden.", error);
    });
  };
  if (document.readyState === "complete") register();
  else window.addEventListener("load", register, { once: true });
}
