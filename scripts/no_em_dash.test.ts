import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { buildPublicFiles } from "./publish_content";
import { emDashPaths } from "./no_em_dash";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("Geviertstrich", () => {
  it("fehlt in ausgeliefertem Text", () => {
    expect(emDashPaths(root)).toEqual([]);
    for (const file of buildPublicFiles()) {
      expect(file.body, file.fileName).not.toContain("\u2014");
    }
  });
});
