#!/usr/bin/env tsx

import { catalog, subjectLoaders } from "../src/data/catalog";
import { normalizeSubject } from "../src/lib/normalize";
import type {
  ArrayVisual,
  GraphVisual,
  MatrixDefinition,
  RawSubject,
  Subject,
  SubjectId,
  Topic,
  TreeVisual,
  Walkthrough,
  WalkthroughHighlight,
  WalkthroughValueUpdate
} from "../src/types/content";

let failed = false;
const DANGEROUS_HTML_PATTERNS = [
  { label: "script tag", pattern: /<\s*script\b/i },
  { label: "javascript URL", pattern: /javascript\s*:/i },
  { label: "inline event handler", pattern: /\son[a-z]+\s*=/i }
];

function fail(message: string): void {
  console.error(`ERROR: ${message}`);
  failed = true;
}

async function loadSubject(subjectId: SubjectId): Promise<Subject | null> {
  const meta = catalog.find((entry) => entry.id === subjectId);
  const loader = subjectLoaders[subjectId];

  if (!meta || !loader) {
    fail(`Subject "${subjectId}" is not registered in catalog/loaders.`);
    return null;
  }

  const module = await loader();
  return normalizeSubject(module.default as RawSubject, meta);
}

function validateSubject(subjectId: SubjectId, subject: Subject | null): void {
  if (!subject || typeof subject !== "object") {
    fail(`Subject "${subjectId}" is missing or invalid.`);
    return;
  }

  if (!subject.id || subject.id !== subjectId) {
    fail(`Subject "${subjectId}" has missing or mismatching id.`);
  }

  if (!subject.title || typeof subject.title !== "string") {
    fail(`Subject "${subjectId}" is missing title.`);
  }

  if (!Array.isArray(subject.topics) || subject.topics.length === 0) {
    fail(`Subject "${subjectId}" must contain at least one topic.`);
    return;
  }

  const topicIds = new Set<string>();

  subject.topics.forEach((topic, topicIndex) => validateTopic(subjectId, topic, topicIndex, topicIds));

  if (!failed) {
    console.log(`OK: ${subjectId}`);
  }
}

function validateTopic(subjectId: SubjectId, topic: Topic, topicIndex: number, topicIds: Set<string>): void {
  const topicLabel = `subject "${subjectId}" topic[${topicIndex}]`;

  if (!topic.title || typeof topic.title !== "string") {
    fail(`${topicLabel} is missing title.`);
  }

  if (!topic.id || typeof topic.id !== "string") {
    fail(`${topicLabel} is missing id.`);
  } else if (topicIds.has(topic.id)) {
    fail(`${topicLabel} has duplicate id "${topic.id}".`);
  } else {
    topicIds.add(topic.id);
  }

  for (const key of ["cards", "questions", "flashcards", "exercises", "walkthroughs"] as const) {
    if (!Array.isArray(topic[key])) {
      fail(`${topicLabel} field "${key}" must be an array.`);
    }
  }

  topic.cards.forEach((card, cardIndex) => {
    if (!card.title || !card.body) {
      fail(`${topicLabel} card[${cardIndex}] is missing title/body.`);
    }
    validateHtmlField(`${topicLabel} card[${cardIndex}].body`, card.body);
    requireSource(topicLabel, "card", cardIndex, card.source);
  });

  topic.questions.forEach((question, questionIndex) => {
    if (!question.question || !question.answer) {
      fail(`${topicLabel} question[${questionIndex}] is missing question/answer.`);
    }
    validateHtmlField(`${topicLabel} question[${questionIndex}].question`, question.question);
    validateHtmlField(`${topicLabel} question[${questionIndex}].answer`, question.answer);
    requireSource(topicLabel, "question", questionIndex, question.source);
  });

  topic.exercises.forEach((exercise, exerciseIndex) => {
    if (!exercise.task) {
      fail(`${topicLabel} exercise[${exerciseIndex}] is missing task.`);
    }
    validateHtmlField(`${topicLabel} exercise[${exerciseIndex}].task`, exercise.task);
    validateHtmlField(`${topicLabel} exercise[${exerciseIndex}].note`, exercise.note);
    requireSource(topicLabel, "exercise", exerciseIndex, exercise.source);
  });

  topic.flashcards.forEach((flashcard, flashIndex) => {
    if (!flashcard.front || !flashcard.back) {
      fail(`${topicLabel} flashcard[${flashIndex}] is missing front/back.`);
    }
    validateHtmlField(`${topicLabel} flashcard[${flashIndex}].front`, flashcard.front);
    validateHtmlField(`${topicLabel} flashcard[${flashIndex}].back`, flashcard.back);
    requireSource(topicLabel, "flashcard", flashIndex, flashcard.source);
  });

  const walkthroughIds = new Set<string>();
  topic.walkthroughs.forEach((walkthrough, walkthroughIndex) => validateWalkthrough(topicLabel, walkthrough, walkthroughIndex, walkthroughIds));

  if (topic.questions.length === 0) {
    fail(`${topicLabel} has no questions.`);
  }

  if (topic.flashcards.length === 0) {
    fail(`${topicLabel} has no flashcards.`);
  }
}

function validateWalkthrough(topicLabel: string, walkthrough: Walkthrough, walkthroughIndex: number, walkthroughIds: Set<string>): void {
  const label = `${topicLabel} walkthrough[${walkthroughIndex}]`;

  if (!walkthrough.id || !walkthrough.title) {
    fail(`${label} is missing id/title.`);
  }
  if (walkthrough.id) {
    if (walkthroughIds.has(walkthrough.id)) {
      fail(`${label} has duplicate id "${walkthrough.id}".`);
    }
    walkthroughIds.add(walkthrough.id);
  }
  requireSource(topicLabel, "walkthrough", walkthroughIndex, walkthrough.source);
  validateHtmlField(`${label}.intro`, walkthrough.intro || "");

  if (!walkthrough.visual || !["matrix", "array", "tree", "graph"].includes(walkthrough.visual.kind)) {
    fail(`${label} has unsupported visual kind.`);
    return;
  }

  if (!Array.isArray(walkthrough.steps) || walkthrough.steps.length === 0) {
    fail(`${label} must contain at least one step.`);
    return;
  }

  validateWalkthroughVisual(label, walkthrough);

  walkthrough.steps.forEach((step, stepIndex) => {
    if (!step.title || !step.text) {
      fail(`${label} step[${stepIndex}] is missing title/text.`);
    }
    validateHtmlField(`${label} step[${stepIndex}].text`, step.text);
    validateHtmlField(`${label} step[${stepIndex}].explanation.action`, step.explanation?.action);
    validateHtmlField(`${label} step[${stepIndex}].explanation.rule`, step.explanation?.rule);
    validateHtmlField(`${label} step[${stepIndex}].explanation.decision`, step.explanation?.decision);
    step.highlights?.forEach((highlight, highlightIndex) => validateWalkthroughHighlight(label, walkthrough, stepIndex, highlight, highlightIndex));
    step.values?.forEach((update, updateIndex) => validateWalkthroughValue(label, walkthrough, stepIndex, update, updateIndex));
  });
}

function validateWalkthroughVisual(label: string, walkthrough: Walkthrough): void {
  if (walkthrough.visual.kind === "tree") {
    validateTreeVisual(label, walkthrough.visual);
    return;
  }

  if (walkthrough.visual.kind === "graph") {
    validateGraphVisual(label, walkthrough.visual);
    return;
  }

  if (walkthrough.visual.kind === "matrix") {
    if (!Array.isArray(walkthrough.visual.matrices) || walkthrough.visual.matrices.length === 0) {
      fail(`${label} matrix visual must contain at least one matrix.`);
      return;
    }

    if (walkthrough.visual.operators !== undefined) {
      if (
        !Array.isArray(walkthrough.visual.operators) ||
        walkthrough.visual.operators.length >= walkthrough.visual.matrices.length ||
        walkthrough.visual.operators.some((operator) => typeof operator !== "string" || !operator)
      ) {
        fail(`${label} matrix visual has invalid operators (expected non-empty strings, fewer than matrices).`);
      }
    }

    const matrixIds = new Set<string>();
    walkthrough.visual.matrices.forEach((matrix, matrixIndex) => {
      const matrixLabel = `${label} visual.matrices[${matrixIndex}]`;
      if (!matrix.id || !matrix.label) {
        fail(`${matrixLabel} is missing id/label.`);
      }
      if (matrix.id) {
        if (matrixIds.has(matrix.id)) {
          fail(`${matrixLabel} has duplicate id "${matrix.id}".`);
        }
        matrixIds.add(matrix.id);
      }
      validateMatrixShape(matrixLabel, matrix);
    });
    return;
  }

  validateArrayVisual(label, walkthrough.visual);
}

function validateArrayVisual(label: string, visual: ArrayVisual): void {
  if (!Array.isArray(visual.values) || visual.values.length === 0) {
    fail(`${label} array visual must contain at least one value.`);
  }

  if (visual.arrays === undefined) return;
  if (!Array.isArray(visual.arrays) || visual.arrays.length === 0) {
    fail(`${label} array visual field "arrays" must contain at least one row when present.`);
    return;
  }

  const arrayIds = new Set<string>();
  visual.arrays.forEach((array, arrayIndex) => {
    const arrayLabel = `${label} visual.arrays[${arrayIndex}]`;
    if (!array.id || !array.label) {
      fail(`${arrayLabel} is missing id/label.`);
    }
    if (array.id) {
      if (arrayIds.has(array.id)) {
        fail(`${arrayLabel} has duplicate id "${array.id}".`);
      }
      arrayIds.add(array.id);
    }
    if (!Array.isArray(array.values) || array.values.length === 0) {
      fail(`${arrayLabel}.values must contain at least one value.`);
    }
  });
}

function validateTreeVisual(label: string, visual: TreeVisual): void {
  if (!Array.isArray(visual.nodes) || visual.nodes.length === 0) {
    fail(`${label} tree visual must contain at least one node.`);
    return;
  }

  const nodeIds = new Set<string>();
  visual.nodes.forEach((node, nodeIndex) => {
    const nodeLabel = `${label} visual.nodes[${nodeIndex}]`;
    if (!node.id || node.value === undefined) {
      fail(`${nodeLabel} is missing id/value.`);
      return;
    }
    if (nodeIds.has(node.id)) {
      fail(`${nodeLabel} has duplicate id "${node.id}".`);
    }
    nodeIds.add(node.id);
  });

  if (!visual.root || !nodeIds.has(visual.root)) {
    fail(`${label} tree visual references unknown root "${visual.root}".`);
  }

  const childIds = new Set<string>();
  visual.nodes.forEach((node, nodeIndex) => {
    const nodeLabel = `${label} visual.nodes[${nodeIndex}]`;
    for (const childId of [node.left, node.right]) {
      if (childId === undefined) continue;
      if (!nodeIds.has(childId)) {
        fail(`${nodeLabel} references unknown child "${childId}".`);
        continue;
      }
      if (childId === node.id || childIds.has(childId) || childId === visual.root) {
        fail(`${nodeLabel} child "${childId}" breaks the tree structure.`);
        continue;
      }
      childIds.add(childId);
    }
  });

  for (const nodeId of nodeIds) {
    if (nodeId !== visual.root && !childIds.has(nodeId)) {
      fail(`${label} tree node "${nodeId}" is not reachable from the root.`);
    }
  }
}

function validateGraphVisual(label: string, visual: GraphVisual): void {
  if (!Array.isArray(visual.nodes) || visual.nodes.length === 0) {
    fail(`${label} graph visual must contain at least one node.`);
    return;
  }

  const nodeIds = new Set<string>();
  visual.nodes.forEach((node, nodeIndex) => {
    const nodeLabel = `${label} visual.nodes[${nodeIndex}]`;
    if (!node.id) {
      fail(`${nodeLabel} is missing id.`);
      return;
    }
    if (nodeIds.has(node.id)) {
      fail(`${nodeLabel} has duplicate id "${node.id}".`);
    }
    nodeIds.add(node.id);
    if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) {
      fail(`${nodeLabel} is missing numeric x/y coordinates.`);
    }
  });

  if (!Array.isArray(visual.edges)) {
    fail(`${label} graph visual field "edges" must be an array.`);
    return;
  }

  visual.edges.forEach((edge, edgeIndex) => {
    const edgeLabel = `${label} visual.edges[${edgeIndex}]`;
    if (!nodeIds.has(edge.from) || !nodeIds.has(edge.to)) {
      fail(`${edgeLabel} references unknown node "${edge.from}"/"${edge.to}".`);
    }
  });
}

function graphHasEdge(visual: GraphVisual, from: string, to: string): boolean {
  return visual.edges.some(
    (edge) =>
      (edge.from === from && edge.to === to) ||
      (!visual.directed && edge.from === to && edge.to === from)
  );
}

function treeNodeIds(visual: TreeVisual): Set<string> {
  return new Set(visual.nodes.map((node) => node.id));
}

function treeHasEdge(visual: TreeVisual, from: string, to: string): boolean {
  return visual.nodes.some((node) => node.id === from && (node.left === to || node.right === to));
}

function validateMatrixShape(label: string, matrix: MatrixDefinition): void {
  if (!Array.isArray(matrix.values) || matrix.values.length === 0) {
    fail(`${label}.values must contain at least one row.`);
    return;
  }

  if (matrix.layout !== undefined && !["matrix", "table"].includes(matrix.layout)) {
    fail(`${label}.layout must be "matrix" or "table".`);
  }

  const width = Array.isArray(matrix.values[0]) ? matrix.values[0].length : 0;
  if (width === 0) {
    fail(`${label}.values must contain at least one column.`);
  }

  matrix.values.forEach((row, rowIndex) => {
    if (!Array.isArray(row) || row.length !== width) {
      fail(`${label}.values[${rowIndex}] must be rectangular with width ${width}.`);
    }
  });

  if (matrix.rowLabels !== undefined && matrix.rowLabels.length !== matrix.values.length) {
    fail(`${label}.rowLabels length must match row count ${matrix.values.length}.`);
  }

  if (matrix.colLabels !== undefined && matrix.colLabels.length !== width) {
    fail(`${label}.colLabels length must match column count ${width}.`);
  }
}

function validateWalkthroughHighlight(
  label: string,
  walkthrough: Walkthrough,
  stepIndex: number,
  highlight: WalkthroughHighlight,
  highlightIndex: number
): void {
  const highlightLabel = `${label} step[${stepIndex}].highlights[${highlightIndex}]`;
  if (walkthrough.visual.kind === "tree") {
    if (highlight.kind === "tree-node") {
      if (!treeNodeIds(walkthrough.visual).has(highlight.node)) {
        fail(`${highlightLabel} references unknown tree node "${highlight.node}".`);
      }
      return;
    }
    if (highlight.kind === "tree-edge") {
      if (!treeHasEdge(walkthrough.visual, highlight.from, highlight.to)) {
        fail(`${highlightLabel} references unknown tree edge "${highlight.from}" -> "${highlight.to}".`);
      }
      return;
    }
    fail(`${highlightLabel} uses ${highlight.kind} highlight in tree visual.`);
    return;
  }

  if (walkthrough.visual.kind === "graph") {
    if (highlight.kind === "graph-node") {
      if (!walkthrough.visual.nodes.some((node) => node.id === highlight.node)) {
        fail(`${highlightLabel} references unknown graph node "${highlight.node}".`);
      }
      return;
    }
    if (highlight.kind === "graph-edge") {
      if (!graphHasEdge(walkthrough.visual, highlight.from, highlight.to)) {
        fail(`${highlightLabel} references unknown graph edge "${highlight.from}" -- "${highlight.to}".`);
      }
      return;
    }
    fail(`${highlightLabel} uses ${highlight.kind} highlight in graph visual.`);
    return;
  }

  if (walkthrough.visual.kind === "matrix") {
    if (highlight.kind === "array-index") {
      fail(`${highlightLabel} uses array highlight in matrix visual.`);
      return;
    }
    if (highlight.kind === "matrix-cell") {
      validateMatrixReference(highlightLabel, walkthrough.visual.matrices, highlight.matrix, highlight.row, highlight.col);
      return;
    }
    if (highlight.kind === "matrix-row") {
      validateMatrixReference(highlightLabel, walkthrough.visual.matrices, highlight.matrix, highlight.row, undefined);
      return;
    }
    if (highlight.kind === "matrix-col") {
      validateMatrixReference(highlightLabel, walkthrough.visual.matrices, highlight.matrix, undefined, highlight.col);
    }
    return;
  }

  if (highlight.kind !== "array-index") {
    fail(`${highlightLabel} uses matrix highlight in array visual.`);
    return;
  }
  validateArrayReference(highlightLabel, walkthrough.visual, highlight.array, highlight.index);
}

function validateWalkthroughValue(
  label: string,
  walkthrough: Walkthrough,
  stepIndex: number,
  update: WalkthroughValueUpdate,
  updateIndex: number
): void {
  const updateLabel = `${label} step[${stepIndex}].values[${updateIndex}]`;
  if (walkthrough.visual.kind === "tree") {
    if (update.kind !== "tree-node") {
      fail(`${updateLabel} uses ${update.kind} value in tree visual.`);
      return;
    }
    if (!treeNodeIds(walkthrough.visual).has(update.node)) {
      fail(`${updateLabel} references unknown tree node "${update.node}".`);
    }
    return;
  }

  if (walkthrough.visual.kind === "graph") {
    if (update.kind === "graph-node") {
      if (!walkthrough.visual.nodes.some((node) => node.id === update.node)) {
        fail(`${updateLabel} references unknown graph node "${update.node}".`);
      }
      return;
    }
    if (update.kind === "graph-edge") {
      if (!graphHasEdge(walkthrough.visual, update.from, update.to)) {
        fail(`${updateLabel} references unknown graph edge "${update.from}" -- "${update.to}".`);
      }
      return;
    }
    fail(`${updateLabel} uses ${update.kind} value in graph visual.`);
    return;
  }

  if (walkthrough.visual.kind === "matrix") {
    if (update.kind !== "matrix-cell") {
      fail(`${updateLabel} uses array value in matrix visual.`);
      return;
    }
    validateMatrixReference(updateLabel, walkthrough.visual.matrices, update.matrix, update.row, update.col);
    return;
  }

  if (update.kind !== "array-index") {
    fail(`${updateLabel} uses matrix value in array visual.`);
    return;
  }
  validateArrayReference(updateLabel, walkthrough.visual, update.array, update.index);
}

function validateMatrixReference(
  label: string,
  matrices: MatrixDefinition[],
  matrixId: string,
  row: number | undefined,
  col: number | undefined
): void {
  const matrix = matrices.find((entry) => entry.id === matrixId);
  if (!matrix) {
    fail(`${label} references unknown matrix "${matrixId}".`);
    return;
  }
  if (row !== undefined && (!Number.isInteger(row) || row < 0 || row >= matrix.values.length)) {
    fail(`${label} references invalid row ${row} in matrix "${matrixId}".`);
  }
  const width = matrix.values[0]?.length || 0;
  if (col !== undefined && (!Number.isInteger(col) || col < 0 || col >= width)) {
    fail(`${label} references invalid col ${col} in matrix "${matrixId}".`);
  }
}

function validateArrayIndex(label: string, length: number, index: number): void {
  if (!Number.isInteger(index) || index < 0 || index >= length) {
    fail(`${label} references invalid array index ${index}.`);
  }
}

function validateArrayReference(label: string, visual: ArrayVisual, arrayId: string | undefined, index: number): void {
  const values = arrayId === undefined ? visual.values : visual.arrays?.find((array) => array.id === arrayId)?.values;
  if (!values) {
    fail(`${label} references unknown array "${arrayId}".`);
    return;
  }
  validateArrayIndex(label, values.length, index);
}

function validateHtmlField(label: string, value: string | undefined): void {
  if (!value) return;
  for (const { label: patternLabel, pattern } of DANGEROUS_HTML_PATTERNS) {
    if (pattern.test(value)) {
      fail(`${label} contains unsafe HTML pattern: ${patternLabel}.`);
    }
  }
}

function requireSource(topicLabel: string, kind: string, index: number, source: string): void {
  if (!source || typeof source !== "string") {
    fail(`${topicLabel} ${kind}[${index}] is missing source.`);
  }
}

const requestedSubjectId = process.argv[2] as SubjectId | undefined;
const subjectIds = requestedSubjectId ? [requestedSubjectId] : catalog.map((entry) => entry.id);

for (const subjectId of subjectIds) {
  const subject = await loadSubject(subjectId);
  validateSubject(subjectId, subject);
}

if (failed) {
  process.exit(1);
}
