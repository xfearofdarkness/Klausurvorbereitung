#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    fail(`Could not parse JSON: ${filePath}`);
    return null;
  }
}

function validateManifest(manifestPath) {
  const manifest = readJson(manifestPath);
  if (!manifest) {
    return;
  }

  const baseDir = path.dirname(manifestPath);
  const requiredTopLevel = [
    "subject_id",
    "subject_title",
    "source_type",
    "slides_are_complete",
    "only_slides_have_authority",
    "files"
  ];

  for (const key of requiredTopLevel) {
    if (!(key in manifest)) {
      fail(`Missing top-level field "${key}" in ${manifestPath}`);
    }
  }

  if (!Array.isArray(manifest.files) || manifest.files.length === 0) {
    fail(`"files" must be a non-empty array in ${manifestPath}`);
    return;
  }

  const seenPaths = new Set();
  const seenOrders = new Set();

  manifest.files.forEach((entry, index) => {
    const label = `files[${index}]`;
    const requiredEntryFields = ["path", "label", "order", "kind", "relevant"];

    for (const key of requiredEntryFields) {
      if (!(key in entry)) {
        fail(`Missing field "${key}" in ${label} of ${manifestPath}`);
      }
    }

    if (typeof entry.path !== "string" || entry.path.trim() === "") {
      fail(`Invalid "path" in ${label} of ${manifestPath}`);
      return;
    }

    if (seenPaths.has(entry.path)) {
      fail(`Duplicate file path "${entry.path}" in ${manifestPath}`);
    }
    seenPaths.add(entry.path);

    if (!Number.isInteger(entry.order) || entry.order < 1) {
      fail(`Invalid "order" in ${label} of ${manifestPath}`);
    }

    if (seenOrders.has(entry.order)) {
      fail(`Duplicate file order "${entry.order}" in ${manifestPath}`);
    }
    seenOrders.add(entry.order);

    const absoluteFilePath = path.join(baseDir, entry.path);
    if (!fs.existsSync(absoluteFilePath)) {
      fail(`Referenced file does not exist: ${absoluteFilePath}`);
      return;
    }

    if (!absoluteFilePath.toLowerCase().endsWith(".pdf")) {
      fail(`Referenced file is not a PDF: ${absoluteFilePath}`);
    }
  });

  const orders = manifest.files.map((entry) => entry.order).sort((a, b) => a - b);
  orders.forEach((order, index) => {
    if (order !== index + 1) {
      fail(`File orders must be contiguous starting at 1 in ${manifestPath}`);
    }
  });

  if (process.exitCode !== 1) {
    console.log(`OK: ${manifestPath}`);
  }
}

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: node scripts/validate_manifest.js <manifest.json>");
  process.exit(1);
}

validateManifest(path.resolve(inputPath));
