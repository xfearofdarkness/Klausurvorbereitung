import type { ModeConfig } from "../types/content";

export const MODES: ModeConfig[] = [
  { id: "study", label: "Lernen", shortLabel: "Lernen", icon: "book", keys: ["cards", "walkthroughs"], missing: "Lernkarten" },
  { id: "flash", label: "Karteikarten", shortLabel: "Karten", icon: "cards", keys: ["flashcards"], missing: "Karteikarten" },
  { id: "practice", label: "Üben", shortLabel: "Üben", icon: "pencil", keys: ["exercises"], missing: "Aufgaben" }
];

/** Name für die Modusleiste. Leer bleibt der Knopf im Baum und sagt, was fehlt. */
export function modeAccessName(mode: ModeConfig, available: boolean): string {
  if (available) return mode.label;
  return `${mode.label} (keine ${mode.missing} in diesem Thema)`;
}

/** Tooltip nur bei einem leeren Modus. */
export function modeAccessTitle(mode: ModeConfig, available: boolean): string | undefined {
  if (available) return undefined;
  return `Keine ${mode.missing} in diesem Thema`;
}
