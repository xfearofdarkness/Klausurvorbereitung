import { NAV_PLACEMENTS, NAV_STORAGE_KEY, SIDEBAR_COLLAPSED_KEY, SIDEBAR_COLLAPSED_VALUE, type NavPlacement } from "./navPlacement";
import { STORAGE_KEY } from "./progress";
import { mergeProgress, sanitizeProgress } from "./siteMigration";
import type { AppProgress } from "../types/content";

export const PROGRESS_FILE_VERSION = 1;
export const IMPORT_NOTICE_KEY = "klausurtrainer-import-notice";

const INVALID_FILE = "Die Datei ist kein gültiger Lernstand.";
const KNOWN_KEYS = new Set<string>([STORAGE_KEY, NAV_STORAGE_KEY, SIDEBAR_COLLAPSED_KEY]);

export interface ProgressFile {
  v: 1;
  keys: Partial<Record<string, unknown>>;
}

export interface StorageWrite {
  key: string;
  value: string;
}

export type ImportPlan =
  | { ok: true; changed: boolean; writes: StorageWrite[] }
  | { ok: false; error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNavPlacement(value: unknown): value is NavPlacement {
  return typeof value === "string" && (NAV_PLACEMENTS as string[]).includes(value);
}

/** JSON-Datei mit den `klausurtrainer-*`-Schlüsseln aus localStorage. Beschädigter Fortschritt fehlt. */
export function buildProgressFile(read: (key: string) => string | null): ProgressFile {
  const keys: ProgressFile["keys"] = {};
  const raw = read(STORAGE_KEY);
  if (raw) {
    try {
      const clean = sanitizeProgress(JSON.parse(raw));
      if (clean) keys[STORAGE_KEY] = clean;
    } catch {
      // Beschädigter Stand bleibt auf dem Gerät und kommt nicht in die Datei.
    }
  }
  const nav = read(NAV_STORAGE_KEY);
  if (isNavPlacement(nav)) keys[NAV_STORAGE_KEY] = nav;
  if (read(SIDEBAR_COLLAPSED_KEY) === SIDEBAR_COLLAPSED_VALUE) keys[SIDEBAR_COLLAPSED_KEY] = SIDEBAR_COLLAPSED_VALUE;
  return { v: PROGRESS_FILE_VERSION, keys };
}

/**
 * Gleiche Regel wie die Übernahme von der alten Seite: vorhandene Markierungen bleiben,
 * die Datei füllt nur Lücken. Listenpositionen werden nicht in einen Stand ab Version 2 gemischt.
 * Lage der Navigation und eingeklappte Seitenleiste nur, wenn sie hier noch nicht gespeichert sind.
 * Eine Datei ohne den Leisten-Schlüssel öffnet eine geschlossene Leiste nicht.
 */
export function planProgressImport(value: unknown, read: (key: string) => string | null): ImportPlan {
  if (!isRecord(value) || value.v !== PROGRESS_FILE_VERSION || !isRecord(value.keys)) {
    return { ok: false, error: INVALID_FILE };
  }
  for (const key of Object.keys(value.keys)) {
    if (!KNOWN_KEYS.has(key)) return { ok: false, error: INVALID_FILE };
  }

  let progress: AppProgress | undefined;
  if (STORAGE_KEY in value.keys) {
    const clean = sanitizeProgress(value.keys[STORAGE_KEY]);
    if (!clean) return { ok: false, error: INVALID_FILE };
    progress = clean;
  }
  let nav: NavPlacement | undefined;
  if (NAV_STORAGE_KEY in value.keys) {
    if (!isNavPlacement(value.keys[NAV_STORAGE_KEY])) return { ok: false, error: INVALID_FILE };
    nav = value.keys[NAV_STORAGE_KEY];
  }
  if (SIDEBAR_COLLAPSED_KEY in value.keys && value.keys[SIDEBAR_COLLAPSED_KEY] !== SIDEBAR_COLLAPSED_VALUE) {
    return { ok: false, error: INVALID_FILE };
  }
  const collapsed = value.keys[SIDEBAR_COLLAPSED_KEY] === SIDEBAR_COLLAPSED_VALUE;

  const writes: StorageWrite[] = [];
  if (progress) {
    let existing: unknown = null;
    const stored = read(STORAGE_KEY);
    if (stored) {
      try {
        existing = JSON.parse(stored);
      } catch {
        existing = null;
      }
    }
    const merged = mergeProgress(existing, progress);
    if (merged) writes.push({ key: STORAGE_KEY, value: JSON.stringify(merged) });
  }
  if (nav && read(NAV_STORAGE_KEY) === null) writes.push({ key: NAV_STORAGE_KEY, value: nav });
  if (collapsed && read(SIDEBAR_COLLAPSED_KEY) === null) {
    writes.push({ key: SIDEBAR_COLLAPSED_KEY, value: SIDEBAR_COLLAPSED_VALUE });
  }
  return { ok: true, changed: writes.length > 0, writes };
}

export function applyProgressImport(
  value: unknown,
  read: (key: string) => string | null,
  write: (key: string, value: string) => void
): ImportPlan {
  const plan = planProgressImport(value, read);
  if (plan.ok) {
    for (const entry of plan.writes) write(entry.key, entry.value);
  }
  return plan;
}

function readLocal(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeLocal(key: string, value: string): void {
  window.localStorage.setItem(key, value);
}

export function downloadProgressFile(): void {
  const file = buildProgressFile(readLocal);
  const blob = new Blob([`${JSON.stringify(file, null, 2)}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "klausurtrainer-stand.json";
  link.click();
  URL.revokeObjectURL(url);
}

export function importProgressText(text: string): ImportPlan {
  let value: unknown;
  try {
    value = JSON.parse(text);
  } catch {
    return { ok: false, error: INVALID_FILE };
  }
  return applyProgressImport(value, readLocal, writeLocal);
}
