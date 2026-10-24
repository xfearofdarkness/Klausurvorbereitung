import { mount } from "svelte";
import Trainer from "./pages/Trainer.svelte";
import "@fontsource-variable/outfit";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./styles.css";

const RELOAD_FLAG = "klausurtrainer-reloaded-after-deploy";

/**
 * Nach einem Deploy fehlen die Dateien der alten Version; ein noch offener Tab kann sie nicht mehr
 * nachladen. Dann einmal neu laden, um die aktuelle Version zu holen, ohne in eine Schleife zu geraten.
 */
window.addEventListener("vite:preloadError", (event) => {
  try {
    if (window.sessionStorage.getItem(RELOAD_FLAG)) return;
    window.sessionStorage.setItem(RELOAD_FLAG, "1");
  } catch {
    return;
  }
  event.preventDefault();
  window.location.reload();
});

const target = document.getElementById("app");

if (target) {
  mount(Trainer, { target });
}
