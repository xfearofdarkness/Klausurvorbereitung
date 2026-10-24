import path from "node:path";
import type { Plugin } from "vite";
import { CONTENT_DIR, loadRawSubject } from "./load_content";
import type { SubjectId } from "../src/types/content";

const VIRTUAL_PREFIX = "virtual:subject/";
const RESOLVED_PREFIX = `\0${VIRTUAL_PREFIX}`;

/**
 * Stellt `virtual:subject/<fach-id>` bereit: die kompilierten Autorendateien aus `content/<fach-id>/`
 * als `JSON.parse(...)`, das der Browser schneller einliest als ein gleich großes Objektliteral.
 */
export function contentPlugin(): Plugin {
  return {
    name: "klausurtrainer-content",
    resolveId(id) {
      return id.startsWith(VIRTUAL_PREFIX) ? `\0${id}` : undefined;
    },
    load(id) {
      if (!id.startsWith(RESOLVED_PREFIX)) return undefined;
      const { subject, files } = loadRawSubject(id.slice(RESOLVED_PREFIX.length) as SubjectId);
      for (const file of files) this.addWatchFile(file);
      return `export default JSON.parse(${JSON.stringify(JSON.stringify(subject))});`;
    },
    configureServer(server) {
      server.watcher.add(CONTENT_DIR);
      const reload = (file: string): void => {
        const relative = path.relative(CONTENT_DIR, file);
        if (relative.startsWith("..") || !file.endsWith(".md")) return;
        const module = server.moduleGraph.getModuleById(`${RESOLVED_PREFIX}${relative.split(path.sep)[0]}`);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", reload);
      server.watcher.on("change", reload);
      server.watcher.on("unlink", reload);
    }
  };
}
