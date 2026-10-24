import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { checkSlideExample, generateTask, listGenerators } from "./exerciseGenerators";

const golden = JSON.parse(readFileSync(new URL("./generators/seed1.golden.json", import.meta.url), "utf8")) as Record<
  string,
  { task: string; solution: string }
>;

describe("Generatoren", () => {
  it("liefert für Seed 1 unverändert Aufgabe und Lösung", () => {
    expect(listGenerators()).toEqual(Object.keys(golden));
    for (const id of listGenerators()) {
      expect(generateTask(id, 1), id).toEqual(golden[id]);
      expect(checkSlideExample(id), id).toBeNull();
    }
  });

  it("bleibt bei gleichem Seed gleich und kennt unbekannte Ids nicht", () => {
    for (const id of listGenerators()) {
      expect(generateTask(id, 2)).toEqual(generateTask(id, 2));
    }
    expect(generateTask("gibt-es-nicht", 1)).toBeNull();
    expect(checkSlideExample("gibt-es-nicht")).toBeNull();
  });
});
