import type { ModeConfig } from "../types/content";

export const MODES: ModeConfig[] = [
  { id: "study", label: "Lernen", shortLabel: "Lernen", icon: "book", keys: ["cards", "walkthroughs"] },
  { id: "flash", label: "Karteikarten", shortLabel: "Karten", icon: "cards", keys: ["flashcards"] },
  { id: "practice", label: "Üben", shortLabel: "Üben", icon: "pencil", keys: ["exercises"] }
];
