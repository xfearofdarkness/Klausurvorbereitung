import type { SubjectBundle, SubjectId } from "../types/content";

/**
 * Name des globalen Objekts, das `scripts/vite_content_plugin.ts` als Inline-Skript in `trainer.html`
 * schreibt. Die Zuordnung Fach → gehashte Datei steht dort und nicht im JS-Bundle, damit eine
 * Inhaltsänderung nur die Datei dieses Fachs ungültig macht und nicht `trainer-*.js`.
 */
export const SUBJECT_BOOT_GLOBAL = "__klausurtrainerSubjects";

export interface SubjectAsset {
  /** URL der Fachdatei (Build: `assets/<fach>-<hash>.json`). */
  data: string;
  math: boolean;
  /** Gehashte woff2-URLs der KaTeX-Schnitte, die dieses Fach benutzt. */
  fonts?: string[];
}

export interface SubjectBoot {
  assets: Partial<Record<SubjectId, SubjectAsset>>;
  /** Schon beim Parsen des HTML gestarteter Abruf für das Fach aus der URL. */
  pending?: { id: string; data: Promise<SubjectBundle> };
}

function boot(): SubjectBoot | undefined {
  return (window as unknown as Record<string, SubjectBoot | undefined>)[SUBJECT_BOOT_GLOBAL];
}

/** URL der Fachdatei aus dem Inline-Skript, wie `trainer.html` sie ablegt. */
export function subjectDataUrl(subjectId: SubjectId): string | undefined {
  return boot()?.assets[subjectId]?.data;
}

export async function loadSubjectBundle(subjectId: SubjectId): Promise<SubjectBundle> {
  const state = boot();
  if (state?.pending?.id === subjectId) return state.pending.data;
  const asset = state?.assets[subjectId];
  if (!asset) throw new Error(`Keine Fachdatei für ${subjectId}`);
  const response = await fetch(asset.data);
  if (!response.ok) throw new Error(`Fachdatei ${asset.data}: HTTP ${response.status}`);
  return (await response.json()) as SubjectBundle;
}
