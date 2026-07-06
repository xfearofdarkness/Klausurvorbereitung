import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/Klausurvorbereitung/",
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(projectRoot, "index.html"),
        trainer: resolve(projectRoot, "trainer.html")
      }
    }
  }
});
