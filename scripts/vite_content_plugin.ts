import { createHash } from "node:crypto";
import path from "node:path";
import type { HtmlTagDescriptor, IndexHtmlTransformContext, Plugin, ResolvedConfig } from "vite";
import { catalog } from "../src/data/catalog";
import { SUBJECT_BOOT_GLOBAL, type SubjectAsset } from "../src/data/subjectData";
import { prerenderFormulas } from "../src/lib/math";
import type { SubjectBundle, SubjectId } from "../src/types/content";
import { fontFilesForHtml, woff2OnlyCss } from "./katex_fonts";
import { CONTENT_DIR, loadRawSubject } from "./load_content";

const DEV_PATH = "__subject/";
const HASH_LENGTH = 10;
const UI_FONT = "outfit-latin-wght-normal.woff2";
const CHARSET_TAG = '<meta charset="UTF-8">';
const KATEX_STYLESHEET = /^katex.*\.css$/;

interface BuiltAsset {
  data: string;
  math: boolean;
  /** woff2-Schnitte der ersten Ansicht (erstes Thema), noch ohne Build-Hash. */
  fontFiles: string[];
}

/** Kompiliert ein Fach samt vorab gerenderter Formeln (nur bei `features.math`). */
function buildBundle(subjectId: SubjectId): { bundle: SubjectBundle; files: string[] } {
  const { subject, files } = loadRawSubject(subjectId);
  const formulas = subject.features?.math === true ? prerenderFormulas(subject) : {};
  return { bundle: { subject, formulas }, files };
}

/**
 * Schriften, die die Formeln des ersten Themas brauchen. Nicht die des ganzen Fachs: Vorgeladene
 * Schriften teilen sich die Leitung mit der Fachdatei, und selten gebrauchte Schnitte (Size4, Caligraphic)
 * verzögerten bei langsamen Verbindungen die Schriften, die die erste Ansicht wirklich braucht.
 */
function firstViewFonts(bundle: SubjectBundle): string[] {
  const firstTopic = bundle.subject.topics[0];
  return firstTopic ? fontFilesForHtml(Object.values(prerenderFormulas(firstTopic)).join("")) : [];
}

function contentHash(text: string): string {
  return createHash("sha256").update(text).digest("hex").slice(0, HASH_LENGTH);
}

function isTrainerPage(ctx: IndexHtmlTransformContext): boolean {
  return path.basename(ctx.filename.split("?")[0]) === "trainer.html";
}

/** Inline-Skript: legt die Zuordnung ab. Auf der Trainerseite startet es zusätzlich den Abruf des Fachs. */
function bootScript(assets: Partial<Record<SubjectId, SubjectAsset>>, stylesheet: string | undefined, prefetch: boolean): string {
  const preloadMath = stylesheet
    ? `if(s.math){var c=document.createElement("link");c.rel="preload";c.as="style";c.href=${JSON.stringify(stylesheet)};document.head.appendChild(c);(s.fonts||[]).forEach(function(h){var f=document.createElement("link");f.rel="preload";f.as="font";f.type="font/woff2";f.href=h;f.crossOrigin="";document.head.appendChild(f)})}`
    : `if(s.math)(s.fonts||[]).forEach(function(h){var f=document.createElement("link");f.rel="preload";f.as="font";f.type="font/woff2";f.href=h;f.crossOrigin="";document.head.appendChild(f)})`;
  return `(function(){var a=${JSON.stringify(assets)},b=window[${JSON.stringify(SUBJECT_BOOT_GLOBAL)}]={assets:a};${
    prefetch
      ? `var id=(new URLSearchParams(location.search).get("subject")||"").trim().toLowerCase(),s=Object.prototype.hasOwnProperty.call(a,id)&&a[id];if(!s)return;` +
        `var p=fetch(s.data).then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json()});p.catch(function(){});b.pending={id:id,data:p};` +
        preloadMath
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
 * Das Inline-Skript fordert die Fachdatei, das KaTeX-CSS und die woff2-Schnitte der ersten Ansicht an.
 * Dieselbe Zuordnung steht in `index.html`, damit die Startseite die Fachdatei vorab holen kann.
 */
export function contentPlugin(): Plugin {
  let config: ResolvedConfig;
  const buildAssets: Partial<Record<SubjectId, BuiltAsset>> = {};

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
        const math = bundle.subject.features?.math === true;
        buildAssets[entry.id] = {
          data: `${config.base}${fileName}`,
          math,
          fontFiles: math ? firstViewFonts(bundle) : []
        };
      }
    },
    transform(code, id) {
      if (!id.includes(`${path.sep}katex${path.sep}`) || !id.includes(".css")) return;
      const next = woff2OnlyCss(code);
      if (next === code) return;
      return { code: next, map: null };
    },
    generateBundle(_options, bundle) {
      for (const output of Object.values(bundle)) {
        if (output.type !== "asset" || !output.fileName.endsWith(".css") || typeof output.source !== "string") continue;
        if (!output.source.includes("KaTeX_")) continue;
        output.source = woff2OnlyCss(output.source);
      }
      for (const [fileName, output] of Object.entries(bundle)) {
        if (output.type !== "asset") continue;
        const labels = [fileName, ...output.names];
        if (labels.some((name) => /KaTeX_.*\.(?:woff|ttf)$/.test(name))) delete bundle[fileName];
      }
    },
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        const tags: HtmlTagDescriptor[] = [];
        const href = (fileName: string): string => `${config.base}${fileName}`;
        const homeOrTrainer = isTrainerPage(ctx) || path.basename(ctx.filename.split("?")[0]) === "index.html";
        if (homeOrTrainer) {
          // Im Dev-Server liefert die Middleware unten die Fächer; Schriften gibt es dort nicht als gehashte Dateien.
          const assets: Partial<Record<SubjectId, SubjectAsset>> = ctx.bundle
            ? Object.fromEntries(
                catalog.map((entry) => {
                  const built = buildAssets[entry.id];
                  const fonts = (built?.fontFiles ?? []).flatMap((name) => {
                    const file = assetFile(ctx, (assetName) => assetName === name);
                    return file ? [href(file)] : [];
                  });
                  return [
                    entry.id,
                    {
                      data: built?.data ?? `${config.base}${DEV_PATH}${entry.id}.json`,
                      math: built?.math === true,
                      ...(fonts.length > 0 ? { fonts } : {})
                    } satisfies SubjectAsset
                  ];
                })
              )
            : Object.fromEntries(
                catalog.map((entry) => [entry.id, { data: `${config.base}${DEV_PATH}${entry.id}.json`, math: false } satisfies SubjectAsset])
              );
          const stylesheetFile = ctx.bundle ? assetFile(ctx, (name) => KATEX_STYLESHEET.test(name)) : undefined;
          const prefetch = isTrainerPage(ctx) && config.env.VITE_PAGES_REDIRECT !== "1";
          // Direkt hinter `<meta charset>` und vor dem Stylesheet: Ein Inline-Skript hinter einem Stylesheet
          // wartet, bis dieses geladen ist; die Zeichensatzangabe muss in den ersten 1024 Bytes bleiben.
          if (!html.includes(CHARSET_TAG)) throw new Error(`${ctx.filename}: ${CHARSET_TAG} fehlt`);
          html = html.replace(
            CHARSET_TAG,
            `${CHARSET_TAG}\n  <script>${bootScript(assets, stylesheetFile ? href(stylesheetFile) : undefined, prefetch)}</script>`
          );
        }
        if (!isTrainerPage(ctx) && ctx.bundle) {
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
