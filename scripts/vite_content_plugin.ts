import { createHash } from "node:crypto";
import path from "node:path";
import type { HtmlTagDescriptor, IndexHtmlTransformContext, Plugin, ResolvedConfig } from "vite";
import { catalog } from "../src/data/catalog";
import { SUBJECT_BOOT_GLOBAL, type SubjectAsset } from "../src/data/subjectData";
import { prerenderFormulas } from "../src/lib/math";
import type { SubjectBundle, SubjectId } from "../src/types/content";
import { CONTENT_DIR, loadRawSubject } from "./load_content";

const DEV_PATH = "__subject/";
const HASH_LENGTH = 10;
/** KaTeX-Schriften, die praktisch jede Formel braucht (Ziffern, Variablen); die übrigen lädt das CSS bei Bedarf. */
const KATEX_CORE_FONTS = ["KaTeX_Main-Regular.woff2", "KaTeX_Math-Italic.woff2"];
const UI_FONT = "outfit-latin-wght-normal.woff2";
const CHARSET_TAG = '<meta charset="UTF-8">';
const KATEX_STYLESHEET = /^katex.*\.css$/;

interface Preload {
  href: string;
  as: "style" | "font";
}

/** Kompiliert ein Fach samt vorab gerenderter Formeln (nur bei `features.math`). */
function buildBundle(subjectId: SubjectId): { bundle: SubjectBundle; files: string[] } {
  const { subject, files } = loadRawSubject(subjectId);
  const formulas = subject.features?.math === true ? prerenderFormulas(subject) : {};
  return { bundle: { subject, formulas }, files };
}

function contentHash(text: string): string {
  return createHash("sha256").update(text).digest("hex").slice(0, HASH_LENGTH);
}

function isTrainerPage(ctx: IndexHtmlTransformContext): boolean {
  return path.basename(ctx.filename.split("?")[0]) === "trainer.html";
}

/** Inline-Skript für `trainer.html`: legt die Zuordnung ab und startet den Abruf des Fachs aus der URL sofort. */
function bootScript(assets: Partial<Record<SubjectId, SubjectAsset>>, mathPreloads: Preload[], prefetch: boolean): string {
  return `(function(){var a=${JSON.stringify(assets)},b=window[${JSON.stringify(SUBJECT_BOOT_GLOBAL)}]={assets:a};${
    prefetch
      ? `var id=(new URLSearchParams(location.search).get("subject")||"").trim().toLowerCase(),s=Object.prototype.hasOwnProperty.call(a,id)&&a[id];if(!s)return;` +
        `var p=fetch(s.data).then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json()});p.catch(function(){});b.pending={id:id,data:p};` +
        `if(s.math)${JSON.stringify(mathPreloads)}.forEach(function(l){var e=document.createElement("link");e.rel="preload";e.as=l.as;e.href=l.href;e.crossOrigin="";if(l.as==="font")e.type="font/woff2";document.head.appendChild(e)});`
      : ""
  }})();`;
}

function assetFile(ctx: IndexHtmlTransformContext, match: (name: string) => boolean): string | undefined {
  for (const output of Object.values(ctx.bundle ?? {})) {
    if (output.type === "asset" && output.names.some(match)) return output.fileName;
  }
  return undefined;
}

/**
 * Fachdaten aus `content/<fach-id>/`. Der Build schreibt jedes Fach als `assets/<fach>-<hash>.json`
 * (Daten plus fertig gerendertes KaTeX-HTML). Die Zuordnung Fach → Datei steht inline in `trainer.html`,
 * nicht im JS-Bundle: Ändert sich ein Fach, bleiben `trainer-*.js` und die anderen Fächer im Cache.
 * Das Inline-Skript fordert die Fachdatei, KaTeX-CSS und Kernschriften schon beim Parsen des HTML an.
 */
export function contentPlugin(): Plugin {
  let config: ResolvedConfig;
  const buildAssets: Partial<Record<SubjectId, SubjectAsset>> = {};

  return {
    name: "klausurtrainer-content",
    configResolved(resolved) {
      config = resolved;
    },
    buildStart() {
      if (config.command !== "build") return;
      for (const entry of catalog) {
        const { bundle, files } = buildBundle(entry.id);
        for (const file of files) this.addWatchFile(file);
        const json = JSON.stringify(bundle);
        const fileName = `${config.build.assetsDir}/${entry.id}-${contentHash(json)}.json`;
        this.emitFile({ type: "asset", fileName, source: json });
        buildAssets[entry.id] = { data: `${config.base}${fileName}`, math: bundle.subject.features?.math === true };
      }
    },
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        const tags: HtmlTagDescriptor[] = [];
        const href = (fileName: string): string => `${config.base}${fileName}`;
        if (isTrainerPage(ctx)) {
          // Im Dev-Server liefert die Middleware unten die Fächer; `math` steuert nur das Vorladen, das es dort nicht gibt.
          const assets = ctx.bundle
            ? buildAssets
            : Object.fromEntries(
                catalog.map((entry) => [entry.id, { data: `${config.base}${DEV_PATH}${entry.id}.json`, math: false } satisfies SubjectAsset])
              );
          const mathPreloads: Preload[] = [];
          const stylesheet = ctx.bundle ? assetFile(ctx, (name) => KATEX_STYLESHEET.test(name)) : undefined;
          if (stylesheet) mathPreloads.push({ href: href(stylesheet), as: "style" });
          for (const font of KATEX_CORE_FONTS) {
            const file = ctx.bundle ? assetFile(ctx, (name) => name === font) : undefined;
            if (file) mathPreloads.push({ href: href(file), as: "font" });
          }
          const prefetch = config.env.VITE_PAGES_REDIRECT !== "1";
          // Direkt hinter `<meta charset>` und vor dem Stylesheet: Ein Inline-Skript hinter einem Stylesheet
          // wartet, bis dieses geladen ist; die Zeichensatzangabe muss in den ersten 1024 Bytes bleiben.
          if (!html.includes(CHARSET_TAG)) throw new Error(`${ctx.filename}: ${CHARSET_TAG} fehlt`);
          html = html.replace(CHARSET_TAG, `${CHARSET_TAG}\n  <script>${bootScript(assets, mathPreloads, prefetch)}</script>`);
        } else if (ctx.bundle) {
          // Startseite: wenig kritisches JS, die UI-Schrift darf früh kommen; der Trainer folgt mit niedriger Priorität.
          const uiFont = assetFile(ctx, (name) => name === UI_FONT);
          if (uiFont) {
            tags.push({ tag: "link", attrs: { rel: "preload", as: "font", type: "font/woff2", href: href(uiFont), crossorigin: "" }, injectTo: "head" });
          }
          const trainer = Object.values(ctx.bundle).find((output) => output.type === "chunk" && output.isEntry && output.name === "trainer");
          if (trainer) tags.push({ tag: "link", attrs: { rel: "prefetch", href: href(trainer.fileName) }, injectTo: "head" });
        }
        return { html, tags };
      }
    },
    configureServer(server) {
      server.watcher.add(CONTENT_DIR);
      const reload = (file: string): void => {
        if (path.relative(CONTENT_DIR, file).startsWith("..") || !file.endsWith(".md")) return;
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", reload);
      server.watcher.on("change", reload);
      server.watcher.on("unlink", reload);

      const prefix = `${server.config.base}${DEV_PATH}`;
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        const id = url.startsWith(prefix) && url.endsWith(".json") ? url.slice(prefix.length, -".json".length) : "";
        const entry = catalog.find((subject) => subject.id === id);
        if (!entry) {
          next();
          return;
        }
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.setHeader("Cache-Control", "no-store");
        res.end(JSON.stringify(buildBundle(entry.id).bundle));
      });
    }
  };
}
