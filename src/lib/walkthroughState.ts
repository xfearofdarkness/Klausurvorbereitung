import type {
  ArrayVisual,
  MatrixDefinition,
  MatrixValue,
  MatrixVisual,
  TimelineVisual,
  Walkthrough,
  WalkthroughHighlight,
  WalkthroughLegendKey,
  WalkthroughRange,
  WalkthroughRole,
  WalkthroughStep
} from "../types/content";

/**
 * Jedes Element eines Ablaufs trägt genau einen Zustand. Bei mehreren Kandidaten gewinnt der
 * erste dieser Liste: eine Rolle des Schritts vor „geändert“, „geändert“ vor „erledigt“.
 */
const ROLE_PRIORITY: WalkthroughRole[] = ["result", "target", "compare", "factor", "active", "done"];

export const DEFAULT_ARRAY_ID = "__default";

export function pickState(roles: Iterable<string>, changed: boolean, done: boolean): WalkthroughLegendKey | null {
  const roleSet = new Set(roles);
  const role = ROLE_PRIORITY.find((candidate) => roleSet.has(candidate));
  if (role) return role;
  if (changed) return "changed";
  if (done) return "done";
  return null;
}

/* Arrays */

export interface ArrayRowDefinition {
  id: string;
  label?: string;
  values: Array<number | string>;
  bars?: boolean;
}

export interface ArrayStepState {
  values: Map<string, Array<number | string>>;
  states: Map<string, WalkthroughLegendKey>;
  pointers: Map<string, string[]>;
  ranges: Map<string, WalkthroughRange[]>;
  dimmed: Set<string>;
}

export function arrayRows(visual: ArrayVisual): ArrayRowDefinition[] {
  if (visual.arrays?.length) {
    return visual.arrays.map((row) => ({ id: row.id, label: row.label, values: row.values, bars: row.bars ?? visual.bars }));
  }
  return [{ id: DEFAULT_ARRAY_ID, label: visual.label, values: visual.values, bars: visual.bars }];
}

export function arrayKey(rowId: string | undefined, index: number): string {
  return `${rowId || DEFAULT_ARRAY_ID}:${index}`;
}

export function arrayStepState(visual: ArrayVisual, steps: WalkthroughStep[], stepIndex: number): ArrayStepState {
  const rows = arrayRows(visual);
  const values = new Map(rows.map((row) => [row.id, [...row.values]]));
  const changed = new Set<string>();

  for (let index = 0; index <= stepIndex; index += 1) {
    for (const update of steps[index]?.values || []) {
      if (update.kind !== "array-index") continue;
      const rowValues = values.get(update.array || DEFAULT_ARRAY_ID);
      if (!rowValues) continue;
      const isVisibleChange = rowValues[update.index] !== update.value && update.value !== "";
      if (index === stepIndex && isVisibleChange) changed.add(arrayKey(update.array, update.index));
      rowValues[update.index] = update.value;
    }
  }

  const step = steps[stepIndex];
  const roles = new Map<string, string[]>();
  for (const highlight of step?.highlights || []) {
    if (highlight.kind !== "array-index") continue;
    const key = arrayKey(highlight.array, highlight.index);
    roles.set(key, [...(roles.get(key) || []), highlight.role]);
  }

  const states = new Map<string, WalkthroughLegendKey>();
  for (const row of rows) {
    row.values.forEach((_, index) => {
      const key = arrayKey(row.id, index);
      const state = pickState(roles.get(key) || [], changed.has(key), false);
      if (state) states.set(key, state);
    });
  }

  const pointers = new Map<string, string[]>();
  for (const pointer of step?.pointers || []) {
    const key = arrayKey(pointer.array, pointer.index);
    pointers.set(key, [...(pointers.get(key) || []), pointer.label]);
  }

  const ranges = new Map<string, WalkthroughRange[]>();
  const dimmed = new Set<string>();
  for (const row of rows) {
    const rowRanges = (step?.ranges || []).filter((range) => (range.array || DEFAULT_ARRAY_ID) === row.id);
    ranges.set(row.id, rowRanges);
    const focus = rowRanges.filter((range) => range.focus);
    if (focus.length === 0) continue;
    row.values.forEach((_, index) => {
      if (!focus.some((range) => index >= range.from && index <= range.to)) dimmed.add(arrayKey(row.id, index));
    });
  }

  return { values, states, pointers, ranges, dimmed };
}

/* Matrizen und Tabellen */

export interface MatrixStepState {
  values: Map<string, MatrixValue>;
  states: Map<string, WalkthroughLegendKey>;
  /** Zeilen- und Spaltenköpfe, die der Schritt markiert (nur Tabellen). */
  headers: Map<string, WalkthroughLegendKey>;
}

export function matrixKey(matrixId: string, row: number, col: number): string {
  return `${matrixId}:${row}:${col}`;
}

export function matrixHeaderKey(matrixId: string, axis: "row" | "col", index: number): string {
  return `${matrixId}:${axis}:${index}`;
}

export function matrixStepState(visual: MatrixVisual, steps: WalkthroughStep[], stepIndex: number): MatrixStepState {
  const values = new Map<string, MatrixValue>();
  const done = new Set<string>();
  const changed = new Set<string>();
  const matrixById = new Map(visual.matrices.map((matrix) => [matrix.id, matrix]));

  for (const matrix of visual.matrices) {
    matrix.values.forEach((row, rowIndex) => row.forEach((value, colIndex) => values.set(matrixKey(matrix.id, rowIndex, colIndex), value)));
  }

  for (let index = 0; index <= stepIndex; index += 1) {
    for (const update of steps[index]?.values || []) {
      if (update.kind !== "matrix-cell") continue;
      const key = matrixKey(update.matrix, update.row, update.col);
      if (index === stepIndex && values.get(key) !== update.value) changed.add(key);
      values.set(key, update.value);
      const isTable = matrixById.get(update.matrix)?.layout === "table";
      if (index < stepIndex && !isTable) done.add(key);
    }
  }

  const cellRoles = new Map<string, string[]>();
  const lineRoles = new Map<string, string[]>();
  const headers = new Map<string, WalkthroughLegendKey>();
  /** Zellen einer markierten Tabellenzeile oder -spalte: der Kopf zeigt bereits, dass sie neu sind. */
  const markedLines = new Set<string>();
  for (const highlight of steps[stepIndex]?.highlights || []) {
    if (highlight.kind === "matrix-cell") {
      const key = matrixKey(highlight.matrix, highlight.row, highlight.col);
      cellRoles.set(key, [...(cellRoles.get(key) || []), highlight.role]);
      continue;
    }
    if (highlight.kind !== "matrix-row" && highlight.kind !== "matrix-col") continue;
    const matrix = matrixById.get(highlight.matrix);
    if (!matrix) continue;
    if (matrix.layout === "table") {
      // In Tabellen markiert eine Zeile oder Spalte nur ihren Kopf; die Zellen behalten ihren eigenen Zustand.
      const header = highlight.kind === "matrix-row" ? matrixHeaderKey(matrix.id, "row", highlight.row) : matrixHeaderKey(matrix.id, "col", highlight.col);
      headers.set(header, highlight.role);
      for (const key of lineCellKeys(highlight, matrix)) markedLines.add(key);
      continue;
    }
    for (const key of lineCellKeys(highlight, matrix)) lineRoles.set(key, [...(lineRoles.get(key) || []), highlight.role]);
  }

  const states = new Map<string, WalkthroughLegendKey>();
  for (const key of values.keys()) {
    const state = pickState(cellRoles.get(key) || [], false, false) ?? pickState(lineRoles.get(key) || [], changed.has(key) && !markedLines.has(key), done.has(key));
    if (state) states.set(key, state);
  }

  return { values, states, headers };
}

function lineCellKeys(highlight: WalkthroughHighlight, matrix: MatrixDefinition): string[] {
  if (highlight.kind === "matrix-row") return (matrix.values[highlight.row] || []).map((_, col) => matrixKey(matrix.id, highlight.row, col));
  if (highlight.kind === "matrix-col") return matrix.values.map((_, row) => matrixKey(matrix.id, row, highlight.col));
  return [];
}

/* Zeitleisten */

export interface TimelineSegmentState {
  from: number;
  to: number;
  state: WalkthroughLegendKey | null;
}

export interface TimelineLaneState {
  segments: TimelineSegmentState[];
  /** Offene Abschnitte zwischen Ankunft und Zeitmarke, in denen die Spur wartet. */
  waiting: Array<{ from: number; to: number }>;
  note: string | null;
  state: WalkthroughLegendKey | null;
}

export interface TimelineStepState {
  lanes: Map<string, TimelineLaneState>;
  cursor: number;
  queue: string[] | null;
  /** Zeitpunkt, zu dem die Liste gilt; ohne Angabe die Zeitmarke. */
  queueAt: number | null;
}

export function timelineStepState(visual: TimelineVisual, steps: WalkthroughStep[], stepIndex: number): TimelineStepState {
  const lanes = new Map<string, TimelineLaneState>(
    visual.lanes.map((lane) => [lane.id, { segments: [], waiting: [], note: null, state: null }])
  );
  let cursor = 0;
  let queue: string[] | null = null;
  let queueAt: number | null = null;

  for (let index = 0; index <= stepIndex; index += 1) {
    for (const update of steps[index]?.values || []) {
      if (update.kind === "timeline-segment") {
        lanes.get(update.lane)?.segments.push({ from: update.from, to: update.to, state: index === stepIndex ? "active" : null });
        cursor = Math.max(cursor, update.to);
      } else if (update.kind === "timeline-cursor") {
        cursor = update.at;
      } else if (update.kind === "timeline-queue") {
        queue = update.items;
        queueAt = update.at ?? null;
      } else if (update.kind === "timeline-note") {
        const lane = lanes.get(update.lane);
        if (lane) lane.note = update.text;
      }
    }
  }

  const roles = new Map<string, string[]>();
  for (const highlight of steps[stepIndex]?.highlights || []) {
    if (highlight.kind === "timeline-lane") roles.set(highlight.lane, [...(roles.get(highlight.lane) || []), highlight.role]);
  }

  for (const lane of visual.lanes) {
    const laneState = lanes.get(lane.id);
    if (!laneState) continue;
    laneState.state = pickState(roles.get(lane.id) || [], false, false);
    laneState.waiting = waitingGaps(lane.start, lane.duration, laneState.segments, cursor);
  }

  return { lanes, cursor, queue, queueAt };
}

function waitingGaps(
  start: number | undefined,
  duration: number | undefined,
  segments: TimelineSegmentState[],
  cursor: number
): Array<{ from: number; to: number }> {
  if (start === undefined) return [];
  const sorted = [...segments].sort((a, b) => a.from - b.from);
  const worked = sorted.reduce((sum, segment) => sum + (segment.to - segment.from), 0);
  const end = duration !== undefined && worked >= duration ? Math.max(start, ...sorted.map((segment) => segment.to)) : cursor;
  const gaps: Array<{ from: number; to: number }> = [];
  let position = start;
  for (const segment of sorted) {
    if (segment.from > position && position < end) gaps.push({ from: position, to: Math.min(segment.from, end) });
    position = Math.max(position, segment.to);
  }
  if (position < end) gaps.push({ from: position, to: end });
  return gaps;
}

/* Legende */

/** Zustände, die im angegebenen Schritt tatsächlich zu sehen sind. */
export function visibleStates(walkthrough: Walkthrough, stepIndex: number): Set<WalkthroughLegendKey> {
  const visual = walkthrough.visual;
  const keys = new Set<WalkthroughLegendKey>();
  if (visual.kind === "array") {
    arrayStepState(visual, walkthrough.steps, stepIndex).states.forEach((state) => keys.add(state));
  } else if (visual.kind === "matrix") {
    const state = matrixStepState(visual, walkthrough.steps, stepIndex);
    state.states.forEach((entry) => keys.add(entry));
    state.headers.forEach((entry) => keys.add(entry));
  } else if (visual.kind === "timeline") {
    for (const lane of timelineStepState(visual, walkthrough.steps, stepIndex).lanes.values()) {
      if (lane.state) keys.add(lane.state);
      if (lane.waiting.length > 0) keys.add("waiting");
      for (const segment of lane.segments) if (segment.state) keys.add(segment.state);
    }
  }
  return keys;
}
