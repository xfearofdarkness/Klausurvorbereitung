import type { Walkthrough, WalkthroughRole } from "../types/content";

export type LegendKey = WalkthroughRole | "changed";

const LEGEND_ORDER: LegendKey[] = ["active", "compare", "factor", "target", "done", "changed"];

const DEFAULT_LABELS: Record<LegendKey, string> = {
  active: "Aktuell",
  compare: "Wird verglichen",
  factor: "Faktor",
  target: "Ziel",
  done: "Erledigt",
  changed: "In diesem Schritt geändert"
};

export interface LegendEntry {
  key: LegendKey;
  label: string;
}

/** Legende aus den Rollen, die der Ablauf tatsächlich verwendet. */
export function legendFor(walkthrough: Walkthrough): LegendEntry[] {
  const used = new Set<LegendKey>();
  walkthrough.steps.forEach((step) => collectStepKeys(step, used));
  if (walkthrough.visual.kind === "matrix" && used.has("changed")) used.add("done");

  return LEGEND_ORDER.filter((key) => used.has(key)).map((key) => ({
    key,
    label: (key !== "changed" && walkthrough.legend?.[key]) || DEFAULT_LABELS[key]
  }));
}

/** Legendeneinträge, die im angegebenen Schritt sichtbar vorkommen. */
export function legendKeysInStep(walkthrough: Walkthrough, stepIndex: number): Set<LegendKey> {
  const keys = new Set<LegendKey>();
  const step = walkthrough.steps[stepIndex];
  if (step) collectStepKeys(step, keys);
  const earlierSteps = walkthrough.steps.slice(0, stepIndex);
  const hasEarlierMarks = earlierSteps.some((earlier) =>
    earlier.values?.some((update) => ("mark" in update && update.mark === "done") || (walkthrough.visual.kind === "matrix" && changesValue(update)))
  );
  if (hasEarlierMarks) keys.add("done");
  return keys;
}

function collectStepKeys(step: Walkthrough["steps"][number], keys: Set<LegendKey>): void {
  for (const highlight of step.highlights || []) keys.add(highlight.role);
  for (const update of step.values || []) {
    if ("mark" in update && update.mark === "done") keys.add("done");
    if (changesValue(update)) keys.add("changed");
  }
}

function changesValue(update: NonNullable<Walkthrough["steps"][number]["values"]>[number]): boolean {
  if (update.kind === "matrix-cell" || update.kind === "array-index") return true;
  if (update.kind === "tree-node") return update.value !== undefined || update.note !== undefined;
  if (update.kind === "graph-node") return update.note !== undefined;
  return false;
}
