import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { compileSubject, type ContentFile } from "./content_compiler";
import type { RawSubject, SubjectId } from "../src/types/content";

export const CONTENT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../content");

export function subjectContentDir(subjectId: SubjectId): string {
  return path.join(CONTENT_DIR, subjectId);
}

/** Liest und kompiliert die Autorendateien eines Fachs; `files` sind die gelesenen Pfade. */
export function loadRawSubject(subjectId: SubjectId): { subject: RawSubject; files: string[] } {
  const dir = subjectContentDir(subjectId);
  const names = fs.readdirSync(dir).filter((name) => name.endsWith(".md"));
  const files = names.map((name) => path.join(dir, name));
  const contents: ContentFile[] = names.map((name, index) => ({ name, text: fs.readFileSync(files[index], "utf8").replace(/\r\n/g, "\n") }));
  return { subject: compileSubject(subjectId, contents), files };
}
