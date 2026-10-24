import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { catalog } from "./src/data/catalog";
import { buildPublicFiles } from "./scripts/publish_content";
import { contentPlugin } from "./scripts/vite_content_plugin";

/** Schreibt /llms.txt und /content/* in den Build und stellt sie im Dev-Server bereit. */
function publishPlugin(): Plugin {
  let cache: ReturnType<typeof buildPublicFiles> | null = null;
  const files = (): ReturnType<typeof buildPublicFiles> => (cache ??= buildPublicFiles());
  return {
    name: "klausurtrainer-publish",
    generateBundle() {
      for (const file of files()) {
        this.emitFile({ type: "asset", fileName: file.fileName, source: file.body });
      }
    },
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        if (!ctx.filename.endsWith(`${sep}index.html`)) return html;
        const items = catalog.map((subject) => `<li><a href="/content/${subject.id}.md">${subject.title}</a></li>`).join("");
        const nav = `<nav class="agent-subjects" aria-label="Inhalte als Text"><ul>${items}</ul></nav>\n  `;
        return html.replace('<footer class="agent-hint">', `${nav}<footer class="agent-hint">`);
      }
    },
    configureServer(server) {
      const base = server.config.base;
      const dropCache = (file: string): void => {
        if (file.endsWith(".md") && file.includes(`${sep}content${sep}`)) cache = null;
      };
      server.watcher.on("add", dropCache);
      server.watcher.on("change", dropCache);
      server.watcher.on("unlink", dropCache);
      server.middlewares.use((req, res, next) => {
        let path = req.url?.split("?")[0] ?? "";
        if (base !== "/" && path.startsWith(base)) path = `/${path.slice(base.length)}`;
        const name = path.replace(/^\//, "");
        if (name !== "llms.txt" && name !== "robots.txt" && name !== "sitemap.xml" && !name.startsWith("content/")) {
          next();
          return;
        }
        const file = files().find((entry) => entry.fileName === name);
        if (!file) {
          next();
          return;
        }
        res.setHeader("Content-Type", file.contentType);
        res.end(file.body);
      });
    }
  };
}

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
    plugins: [contentPlugin(), publishPlugin(), svelte()],
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
