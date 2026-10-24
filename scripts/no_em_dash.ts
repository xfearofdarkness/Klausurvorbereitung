import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

export const EM_DASH = "\u2014";

const FILES = ["index.html", "trainer.html", "scripts/publish_content.ts"];
const DIRECTORIES = ["content", "src"];

function consider(path: string, hits: string[]): void {
  if (!/\.(md|svelte|ts|html|json)$/.test(path)) return;
  if (readFileSync(path, "utf8").includes(EM_DASH)) hits.push(path);
}

function walk(path: string, hits: string[]): void {
  if (statSync(path).isDirectory()) {
    for (const name of readdirSync(path)) walk(join(path, name), hits);
    return;
  }
  consider(path, hits);
}

/** Pfade mit Geviertstrich in Text, den die Seite ausliefert. */
export function emDashPaths(root: string): string[] {
  const hits: string[] = [];
  for (const directory of DIRECTORIES) walk(join(root, directory), hits);
  for (const file of FILES) consider(join(root, file), hits);
  return hits;
}
