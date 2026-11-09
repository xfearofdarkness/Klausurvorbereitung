import type { Topic, Walkthrough, WalkthroughLegendKey } from "../types/content";
import { visibleStates } from "./walkthroughState";

export type LegendKey = WalkthroughLegendKey;

const LEGEND_ORDER: LegendKey[] = ["active", "compare", "factor", "target", "changed", "done", "waiting", "result"];

const DEFAULT_LABELS: Record<LegendKey, string> = {
  active: "Aktuell",
  compare: "Wird verglichen",
  factor: "Faktor",
  target: "Ziel",
  done: "Erledigt",
  changed: "In diesem Schritt geändert",
  waiting: "Wartet",
  result: "Ergebnis"
};

export interface LegendEntry {
  key: LegendKey;
  label: string;
}

/** Legende aus den Zuständen, die der Ablauf in irgendeinem Schritt tatsächlich zeigt. */
export function legendFor(walkthrough: Walkthrough): LegendEntry[] {
  const used = new Set<LegendKey>();
  walkthrough.steps.forEach((_, index) => legendKeysInStep(walkthrough, index).forEach((key) => used.add(key)));

  return LEGEND_ORDER.filter((key) => used.has(key)).map((key) => ({
    key,
    label: walkthrough.legend?.[key] || DEFAULT_LABELS[key]
  }));
}

/** Legendeneinträge, die im angegebenen Schritt sichtbar vorkommen. */
export function legendKeysInStep(walkthrough: Walkthrough, stepIndex: number): Set<LegendKey> {
  const kind = walkthrough.visual.kind;
  if (kind === "array" || kind === "matrix" || kind === "timeline") return visibleStates(walkthrough, stepIndex);

  const keys = new Set<LegendKey>();
  const step = walkthrough.steps[stepIndex];
  if (step) collectStepKeys(step, keys);
  const hasEarlierMarks = walkthrough.steps
    .slice(0, stepIndex)
    .some((earlier) => earlier.values?.some((update) => "mark" in update && update.mark === "done"));
  if (hasEarlierMarks) keys.add("done");
  return keys;
}

function collectStepKeys(step: Walkthrough["steps"][number], keys: Set<LegendKey>): void {
  const roleTargets = new Set<string>();
  for (const highlight of step.highlights || []) {
    keys.add(highlight.role);
    if (highlight.kind === "tree-node" || highlight.kind === "graph-node") roleTargets.add(highlight.node);
  }
  for (const update of step.values || []) {
    if ("mark" in update && update.mark === "done") keys.add("done");
    const changesNode =
      (update.kind === "tree-node" && (update.value !== undefined || update.note !== undefined)) ||
      (update.kind === "graph-node" && update.note !== undefined);
    if (changesNode && !roleTargets.has(update.node)) keys.add("changed");
  }
}

export interface WalkthroughPlacement {
  /** Abläufe je Lernkarten-Index, die direkt nach dieser Karte stehen. */
  afterCard: Record<number, Walkthrough[]>;
  /** Abläufe ohne passende Lernkarte, am Ende des Themas. */
  atEnd: Walkthrough[];
}

/** Ordnet jeden Ablauf der Lernkarte zu, die er veranschaulicht; die Reihenfolge der Daten bleibt erhalten. */
export function walkthroughsAfterCards(topic: Topic): WalkthroughPlacement {
  const cardIndexByTitle = new Map(topic.cards.map((card, index) => [card.title, index]));
  const placement: WalkthroughPlacement = { afterCard: {}, atEnd: [] };
  for (const walkthrough of topic.walkthroughs) {
    const index = walkthrough.afterCard === undefined ? undefined : cardIndexByTitle.get(walkthrough.afterCard);
    if (index === undefined) {
      placement.atEnd.push(walkthrough);
    } else {
      (placement.afterCard[index] ||= []).push(walkthrough);
    }
  }
  return placement;
}
