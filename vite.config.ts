import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { contentPlugin } from "./scripts/vite_content_plugin";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** Pfad-Präfix. Standard `/` (Vercel, lokal). GitHub Pages setzt `VITE_BASE=/Klausurvorbereitung/`. */
function siteBase(raw: string | undefined): string {
  const value = raw?.trim() || "/";
  if (value === "/") return "/";
  const withLeading = value.startsWith("/") ? value : `/${value}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

export default defineConfig(({ mode }) => {
  const fromFile = loadEnv(mode, projectRoot, "VITE_").VITE_BASE;
  return {
    base: siteBase(process.env.VITE_BASE ?? fromFile),
    plugins: [contentPlugin(), svelte()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(projectRoot, "index.html"),
          trainer: resolve(projectRoot, "trainer.html")
        }
      }
    }
  };
});
