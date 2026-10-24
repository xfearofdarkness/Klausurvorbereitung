import { catalog } from "../data/catalog";
import { NAV_PLACEMENTS, NAV_STORAGE_KEY, SIDEBAR_COLLAPSED_KEY, SIDEBAR_COLLAPSED_VALUE, type NavPlacement } from "./navPlacement";
import { STORAGE_KEY } from "./progress";
import type { AppProgress, FlashMark, PracticeMark, QuizMark, SubjectId, SubjectProgress } from "../types/content";

const NEW_SITE_ORIGIN = "https://learn.jamiehuta.com";
const FRAGMENT_KEY = "m";
const MAX_FRAGMENT_LENGTH = 48_000;
const MAX_TOPICS_PER_SUBJECT = 40;
const MAX_MARKS_PER_TOPIC = 400;
const MAX_VERSION = 9;
const MAX_TOPIC_INDEX = 500;
const ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9_-]{0,79}$/;
const INDEX_KEY = /^\d+$/;
const KNOWN_PATHS = new Set(["/", "/index.html", "/trainer.html"]);
const MODE_IDS = new Set(["study", "flash", "practice", "quiz", "walkthrough"]);
const FLASH_MARKS = new Set<FlashMark>(["know", "repeat"]);
const PRACTICE_MARKS = new Set<PracticeMark>(["done"]);
const QUIZ_MARKS = new Set<QuizMark>(["correct", "wrong"]);

const SUBJECT_IDS = new Set<string>(catalog.map((subject) => subject.id));

interface MigrationBundle {
  v: 1;
  p?: AppProgress;
  n?: NavPlacement;
  c?: 1;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isSubjectId(value: unknown): value is SubjectId {
  return typeof value === "string" && SUBJECT_IDS.has(value);
}

function isId(value: unknown): value is string {
  return typeof value === "string" && ID_PATTERN.test(value);
}

function isNavPlacement(value: unknown): value is NavPlacement {
  return typeof value === "string" && (NAV_PLACEMENTS as string[]).includes(value);
}

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Übernommener Stand konnte nicht gespeichert werden.", error);
  }
}

/** Nur die echte Seite oder eine lokale Origin, damit die Weiterleitung kein offenes Redirect wird. */
function migrationOrigin(): string | null {
  const raw = import.meta.env.VITE_PAGES_REDIRECT;
  if (typeof raw !== "string" || raw === "" || raw === "0") return null;
  if (raw === "1" || raw === "true") return NEW_SITE_ORIGIN;
  try {
    const url = new URL(raw);
    const local = url.protocol === "http:" && (url.hostname === "localhost" || url.hostname === "127.0.0.1");
    if (!local && url.origin !== NEW_SITE_ORIGIN) return null;
    return url.origin;
  } catch {
    return null;
  }
}

function preservedPath(): string {
  const base = import.meta.env.BASE_URL;
  let pathname = window.location.pathname;
  if (base !== "/" && pathname.startsWith(base)) pathname = `/${pathname.slice(base.length)}`;
  else if (base !== "/" && pathname === base.slice(0, -1)) pathname = "/";
  if (!KNOWN_PATHS.has(pathname)) pathname = "/";
  return `${pathname}${window.location.search}`;
}

function encodeBase64Url(value: unknown): string {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeBase64Url(encoded: string): unknown {
  if (!/^[A-Za-z0-9_-]+$/.test(encoded)) return null;
  const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function isMark<T extends string>(value: unknown, allowed: ReadonlySet<T>): value is T {
  return typeof value === "string" && (allowed as ReadonlySet<string>).has(value);
}

function sanitizeMarks<T extends string>(
  value: unknown,
  allowed: ReadonlySet<T>
): Record<string, Record<string, T>> | undefined {
  if (!isRecord(value)) return undefined;
  const topics: Record<string, Record<string, T>> = {};
  for (const [topicId, marks] of Object.entries(value)) {
    if (Object.keys(topics).length >= MAX_TOPICS_PER_SUBJECT) break;
    if (!isId(topicId) || !isRecord(marks)) continue;
    const clean: Record<string, T> = {};
    for (const [key, mark] of Object.entries(marks)) {
      if (Object.keys(clean).length >= MAX_MARKS_PER_TOPIC) break;
      if (isId(key) && isMark(mark, allowed)) clean[key] = mark;
    }
    if (Object.keys(clean).length > 0) topics[topicId] = clean;
  }
  return Object.keys(topics).length > 0 ? topics : undefined;
}

function sanitizeSubject(value: unknown): SubjectProgress | null {
  if (!isRecord(value)) return null;
  const flash = sanitizeMarks(value.flash, FLASH_MARKS) ?? {};
  const practice = sanitizeMarks(value.practice, PRACTICE_MARKS);
  const quiz = sanitizeMarks(value.quiz, QUIZ_MARKS);
  const subject: SubjectProgress = { flash };
  if (practice) subject.practice = practice;
  if (quiz) subject.quiz = quiz;
  if (typeof value.version === "number" && Number.isInteger(value.version) && value.version >= 1 && value.version <= MAX_VERSION) {
    subject.version = value.version;
  }
  if (isRecord(value.ui)) {
    const ui: NonNullable<SubjectProgress["ui"]> = {};
    if (typeof value.ui.lastMode === "string" && MODE_IDS.has(value.ui.lastMode)) ui.lastMode = value.ui.lastMode;
    if (isId(value.ui.lastTopicId)) ui.lastTopicId = value.ui.lastTopicId;
    if (typeof value.ui.lastTopicIndex === "number" && Number.isInteger(value.ui.lastTopicIndex) && value.ui.lastTopicIndex >= 0 && value.ui.lastTopicIndex <= MAX_TOPIC_INDEX) {
      ui.lastTopicIndex = value.ui.lastTopicIndex;
    }
    if (Object.keys(ui).length > 0) subject.ui = ui;
  }
  const hasContent = Object.keys(flash).length > 0 || practice || quiz || subject.ui || subject.version !== undefined;
  return hasContent ? subject : null;
}

export function sanitizeProgress(value: unknown): AppProgress | null {
  if (!isRecord(value) || !isRecord(value.subjects)) return null;
  const subjects: AppProgress["subjects"] = {};
  for (const [id, subject] of Object.entries(value.subjects)) {
    if (!isSubjectId(id)) continue;
    const clean = sanitizeSubject(subject);
    if (clean) subjects[id] = clean;
  }
  const progress: AppProgress = { subjects };
  if (isSubjectId(value.lastSubjectId)) progress.lastSubjectId = value.lastSubjectId;
  if (Object.keys(subjects).length === 0 && !progress.lastSubjectId) return null;
  return progress;
}

function fillMarks(
  existing: unknown,
  incoming: Record<string, Record<string, string>> | undefined,
  skipIndexes: boolean
): { value: Record<string, unknown> | undefined; changed: boolean } {
  if (!incoming) return { value: undefined, changed: false };
  const marks: Record<string, unknown> = isRecord(existing) ? { ...existing } : {};
  let changed = false;
  for (const [topicId, topicMarks] of Object.entries(incoming)) {
    const current = marks[topicId];
    const topic: Record<string, unknown> = isRecord(current) ? { ...current } : {};
    let topicChanged = false;
    for (const [key, mark] of Object.entries(topicMarks)) {
      if (skipIndexes && INDEX_KEY.test(key)) continue;
      if (topic[key] !== undefined) continue;
      topic[key] = mark;
      topicChanged = true;
    }
    if (topicChanged) {
      marks[topicId] = topic;
      changed = true;
    }
  }
  return { value: marks, changed };
}

/**
 * Füllt Lücken aus der alten Seite. Eine Markierung, die hier schon steht, bleibt — auch wenn sie
 * anders lautet. Zeitstempel gibt es nicht, deshalb gilt der Stand auf dieser Seite bei Konflikt.
 * Listenpositionen aus der alten Version werden nicht in einen Stand ab Version 2 gemischt.
 * Ansicht (Modus, Thema) und `lastSubjectId` werden nur gesetzt, wenn sie hier noch fehlen.
 * Lage der Navigation und eingeklappte Seitenleiste ebenso: die Leiste ist nur gespeichert, solange
 * sie zu ist. Fehlt der Schlüssel, gilt sie als offen, und ein Import darf sie zuklappen. Ein Import
 * ohne den Schlüssel öffnet eine hier geschlossene Leiste nicht.
 */
export function mergeProgress(existingRaw: unknown, incoming: AppProgress): Record<string, unknown> | null {
  if (!isRecord(existingRaw)) return { ...incoming };

  const next: Record<string, unknown> = { ...existingRaw };
  const subjects: Record<string, unknown> = isRecord(existingRaw.subjects) ? { ...existingRaw.subjects } : {};
  let changed = false;

  for (const [id, imported] of Object.entries(incoming.subjects)) {
    if (!imported) continue;
    const current = subjects[id];
    if (!isRecord(current)) {
      subjects[id] = imported;
      changed = true;
      continue;
    }
    const version = typeof current.version === "number" ? current.version : 1;
    const subject: Record<string, unknown> = { ...current };
    let subjectChanged = false;
    const apply = (field: "flash" | "practice" | "quiz", marks: Record<string, Record<string, string>> | undefined): void => {
      const filled = fillMarks(subject[field], marks, version >= 2);
      if (!filled.changed || !filled.value) return;
      subject[field] = filled.value;
      subjectChanged = true;
    };
    apply("flash", imported.flash);
    apply("practice", imported.practice);
    apply("quiz", imported.quiz);
    if (subject.version === undefined && imported.version !== undefined) {
      subject.version = imported.version;
      subjectChanged = true;
    }
    if (imported.ui) {
      const ui: Record<string, unknown> = isRecord(subject.ui) ? { ...subject.ui } : {};
      let uiChanged = false;
      if (ui.lastMode === undefined && imported.ui.lastMode) {
        ui.lastMode = imported.ui.lastMode;
        uiChanged = true;
      }
      if (ui.lastTopicId === undefined && imported.ui.lastTopicId) {
        ui.lastTopicId = imported.ui.lastTopicId;
        uiChanged = true;
      }
      if (ui.lastTopicIndex === undefined && imported.ui.lastTopicIndex !== undefined) {
        ui.lastTopicIndex = imported.ui.lastTopicIndex;
        uiChanged = true;
      }
      if (uiChanged) {
        subject.ui = ui;
        subjectChanged = true;
      }
    }
    if (subjectChanged) {
      subjects[id] = subject;
      changed = true;
    }
  }

  if (changed) next.subjects = subjects;
  if (!isSubjectId(next.lastSubjectId) && incoming.lastSubjectId) {
    next.lastSubjectId = incoming.lastSubjectId;
    changed = true;
  }
  return changed ? next : null;
}

function bundleFromStorage(): MigrationBundle | null {
  const bundle: MigrationBundle = { v: 1 };
  const progressRaw = readStorage(STORAGE_KEY);
  if (progressRaw) {
    try {
      const progress = sanitizeProgress(JSON.parse(progressRaw));
      if (progress) bundle.p = progress;
    } catch {
      // Ungültiger Stand bleibt auf der alten Seite und wandert nicht mit.
    }
  }
  const nav = readStorage(NAV_STORAGE_KEY);
  if (isNavPlacement(nav)) bundle.n = nav;
  if (readStorage(SIDEBAR_COLLAPSED_KEY) === SIDEBAR_COLLAPSED_VALUE) bundle.c = 1;
  if (!bundle.p && !bundle.n && bundle.c !== 1) return null;
  return bundle;
}

function fragmentFor(bundle: MigrationBundle): string {
  const full = encodeBase64Url(bundle);
  if (full.length <= MAX_FRAGMENT_LENGTH) return `#${FRAGMENT_KEY}=${full}`;
  const { p: _progress, ...settings } = bundle;
  if (!settings.n && settings.c !== 1) return "";
  const reduced = encodeBase64Url(settings);
  return reduced.length <= MAX_FRAGMENT_LENGTH ? `#${FRAGMENT_KEY}=${reduced}` : "";
}

function parseBundle(value: unknown): MigrationBundle | null {
  if (!isRecord(value) || value.v !== 1) return null;
  const bundle: MigrationBundle = { v: 1 };
  if (value.p !== undefined) {
    const progress = sanitizeProgress(value.p);
    if (progress) bundle.p = progress;
  }
  if (isNavPlacement(value.n)) bundle.n = value.n;
  if (value.c === 1) bundle.c = 1;
  if (!bundle.p && !bundle.n && bundle.c !== 1) return null;
  return bundle;
}

function writeBundle(bundle: MigrationBundle): void {
  if (bundle.p) {
    let existingRaw: unknown = null;
    const stored = readStorage(STORAGE_KEY);
    if (stored) {
      try {
        existingRaw = JSON.parse(stored);
      } catch {
        existingRaw = null;
      }
    }
    const merged = mergeProgress(existingRaw, bundle.p);
    if (merged) writeStorage(STORAGE_KEY, JSON.stringify(merged));
  }
  if (bundle.n && readStorage(NAV_STORAGE_KEY) === null) writeStorage(NAV_STORAGE_KEY, bundle.n);
  if (bundle.c === 1 && readStorage(SIDEBAR_COLLAPSED_KEY) === null) {
    writeStorage(SIDEBAR_COLLAPSED_KEY, SIDEBAR_COLLAPSED_VALUE);
  }
}

function stripFragment(): void {
  const path = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(window.history.state, "", path);
}

function importFragment(): void {
  const hash = window.location.hash;
  const prefix = `#${FRAGMENT_KEY}=`;
  if (!hash.startsWith(prefix)) return;
  const encoded = hash.slice(prefix.length);
  if (encoded.length > MAX_FRAGMENT_LENGTH) {
    stripFragment();
    return;
  }
  try {
    const bundle = parseBundle(decodeBase64Url(encoded));
    if (bundle) writeBundle(bundle);
  } catch (error) {
    console.warn("Fortschritt aus der alten Seite konnte nicht übernommen werden.", error);
  }
  stripFragment();
}

function redirectToNewSite(): boolean {
  const origin = migrationOrigin();
  if (!origin || window.location.origin === origin) return false;
  const bundle = bundleFromStorage();
  const fragment = bundle ? fragmentFor(bundle) : "";
  window.location.replace(`${origin}${preservedPath()}${fragment}`);
  return true;
}

/** GitHub-Pages-Build leitet um. Die neue Seite liest das Fragment einmalig ein und entfernt es. */
export function applySiteMigration(): boolean {
  if (redirectToNewSite()) return true;
  importFragment();
  return false;
}
