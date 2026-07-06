#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function loadSubjectData(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.window.APP_SUBJECTS || {};
}

function sourceFiles(source) {
  return String(source || "")
    .split(";")
    .map((part) => part.split(",")[0].trim())
    .filter(Boolean);
}

function validateSourceCoverage(dataPath, subjectId, manifestPath, requireAllManifestFiles) {
  const subjects = loadSubjectData(path.resolve(dataPath));
  const subject = subjects[subjectId];

  if (!subject || typeof subject !== "object") {
    fail(`Subject "${subjectId}" is missing or invalid.`);
    return;
  }

  const manifest = JSON.parse(fs.readFileSync(path.resolve(manifestPath), "utf8"));
  const manifestFiles = new Set((manifest.files || []).map((entry) => entry.path));
  const referencedFiles = new Set();

  if (manifest.subject_id && manifest.subject_id !== subjectId) {
    fail(`Manifest subject_id "${manifest.subject_id}" does not match "${subjectId}".`);
  }

  (subject.topics || []).forEach((topic, topicIndex) => {
    const topicLabel = `subject "${subjectId}" topic[${topicIndex}]`;

    ["cards", "questions", "flashcards", "exercises"].forEach((key) => {
      (topic[key] || []).forEach((item, itemIndex) => {
        const itemLabel = `${topicLabel} ${key}[${itemIndex}]`;

        if (!item.source || typeof item.source !== "string") {
          fail(`${itemLabel} is missing source.`);
          return;
        }

        const files = sourceFiles(item.source);
        if (files.length === 0) {
          fail(`${itemLabel} has unparsable source "${item.source}".`);
        }

        files.forEach((file) => {
          referencedFiles.add(file);
          if (!manifestFiles.has(file)) {
            fail(`${itemLabel} references "${file}", which is not listed in ${manifestPath}.`);
          }
        });
      });
    });
  });

  if (requireAllManifestFiles) {
    const unreferenced = [...manifestFiles].filter((file) => !referencedFiles.has(file));
    if (unreferenced.length > 0) {
      fail(`Manifest files are not referenced by ${dataPath}: ${unreferenced.join(", ")}`);
    }
  }

  if (process.exitCode !== 1) {
    console.log(`OK: ${subjectId} source coverage`);
  }
}

const inputPath = process.argv[2];
const subjectId = process.argv[3];
const manifestPath = process.argv[4];
const requireAllManifestFiles = process.argv.includes("--require-all-manifest-files");

if (!inputPath || !subjectId || !manifestPath) {
  console.error(
    "Usage: node scripts/validate_source_coverage.js <data-file.js> <subject-id> <manifest.json> [--require-all-manifest-files]"
  );
  process.exit(1);
}

validateSourceCoverage(inputPath, subjectId, manifestPath, requireAllManifestFiles);
