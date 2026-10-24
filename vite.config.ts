import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { contentPlugin } from "./scripts/vite_content_plugin";

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/Klausurvorbereitung/",
  plugins: [contentPlugin(), svelte()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(projectRoot, "index.html"),
        trainer: resolve(projectRoot, "trainer.html")
      }
    }
  }
});
