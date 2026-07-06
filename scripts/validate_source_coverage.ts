#!/usr/bin/env tsx

import fs from "node:fs";
import path from "node:path";
import { catalog, subjectLoaders } from "../src/data/catalog";
import { normalizeSubject } from "../src/lib/normalize";
import type { RawSubject, Subject, SubjectId, WalkthroughStep } from "../src/types/content";

interface Manifest {
  subject_id?: string;
  files?: Array<{ path: string }>;
}

let failed = false;

function fail(message: string): void {
  console.error(`ERROR: ${message}`);
  failed = true;
}

function sourceFiles(source: string): string[] {
  return String(source || "")
    .split(";")
    .map((part) => part.split(",")[0].trim())
    .filter(Boolean);
}

async function loadSubject(subjectId: SubjectId): Promise<Subject | null> {
  const meta = catalog.find((entry) => entry.id === subjectId);
  const loader = subjectLoaders[subjectId];
  if (!meta || !loader) return null;
  const module = await loader();
  return normalizeSubject(module.default as RawSubject, meta);
}

function collectSources(subject: Subject): Array<{ label: string; source: string }> {
  const sources: Array<{ label: string; source: string }> = [];

  subject.topics.forEach((topic, topicIndex) => {
    const topicLabel = `subject "${subject.id}" topic[${topicIndex}]`;

    topic.cards.forEach((item, index) => sources.push({ label: `${topicLabel} cards[${index}]`, source: item.source }));
    topic.questions.forEach((item, index) => sources.push({ label: `${topicLabel} questions[${index}]`, source: item.source }));
    topic.flashcards.forEach((item, index) => sources.push({ label: `${topicLabel} flashcards[${index}]`, source: item.source }));
    topic.exercises.forEach((item, index) => sources.push({ label: `${topicLabel} exercises[${index}]`, source: item.source }));
    topic.walkthroughs.forEach((item, index) => {
      sources.push({ label: `${topicLabel} walkthroughs[${index}]`, source: item.source });
      item.steps.forEach((step: WalkthroughStep, stepIndex: number) => {
        if (step.source) {
          sources.push({ label: `${topicLabel} walkthroughs[${index}].steps[${stepIndex}]`, source: step.source });
        }
      });
    });
  });

  return sources;
}

async function validateSourceCoverage(subjectId: SubjectId, manifestPath: string, requireAllManifestFiles: boolean): Promise<void> {
  const subject = await loadSubject(subjectId);
  if (!subject) {
    fail(`Subject "${subjectId}" is missing or invalid.`);
    return;
  }

  const resolvedManifestPath = path.resolve(manifestPath);
  const manifest = JSON.parse(fs.readFileSync(resolvedManifestPath, "utf8")) as Manifest;
  const manifestFiles = new Set((manifest.files || []).map((entry) => entry.path));
  const referencedFiles = new Set<string>();

  if (manifest.subject_id && manifest.subject_id !== subjectId) {
    fail(`Manifest subject_id "${manifest.subject_id}" does not match "${subjectId}".`);
  }

  for (const item of collectSources(subject)) {
    if (!item.source || typeof item.source !== "string") {
      fail(`${item.label} is missing source.`);
      continue;
    }

    const files = sourceFiles(item.source);
    if (files.length === 0) {
      fail(`${item.label} has unparsable source "${item.source}".`);
    }

    files.forEach((file) => {
      referencedFiles.add(file);
      if (!manifestFiles.has(file)) {
        fail(`${item.label} references "${file}", which is not listed in ${manifestPath}.`);
      }
    });
  }

  if (requireAllManifestFiles) {
    const unreferenced = [...manifestFiles].filter((file) => !referencedFiles.has(file));
    if (unreferenced.length > 0) {
      fail(`Manifest files are not referenced by subject "${subjectId}": ${unreferenced.join(", ")}`);
    }
  }

  if (!failed) {
    console.log(`OK: ${subjectId} source coverage`);
  }
}

const args = process.argv.slice(2);
const requireAllManifestFiles = args.includes("--require-all-manifest-files");
const positional = args.filter((arg) => arg !== "--require-all-manifest-files");
const subjectId = positional[0] as SubjectId | undefined;
const manifestPath = positional[1];

if (!subjectId || !manifestPath) {
  console.error("Usage: npm run validate:sources -- <subject-id> <manifest.json> [--require-all-manifest-files]");
  process.exit(1);
}

await validateSourceCoverage(subjectId, manifestPath, requireAllManifestFiles);

if (failed) {
  process.exit(1);
}
