import { describe, expect, it } from "vitest";
import { formatSource } from "./formatSource";

describe("formatSource", () => {
  it("kürzt Blatt und Folien", () => {
    expect(formatSource("ÜbungsaufgabenDisMa.pdf, Aufgabe 12; DiskreteMathematikVLHO.pdf, Folien 71 und 80")).toBe(
      "Übung 12 · Folien 71, 80"
    );
  });

  it("lässt Bereiche stehen", () => {
    expect(formatSource("VorlesungFolienLAA-2026.pdf, Folien 86-88")).toBe("Folien 86-88");
    expect(formatSource("VorlesungFolienLAA-2026.pdf, Folie 89")).toBe("Folie 89");
    expect(formatSource("ÜbungsaufgabenLAA.pdf, Aufgaben 34 und 35")).toBe("Übung 34, 35");
    expect(formatSource("VorlesungFolienLAA-2026.pdf, Folien 148, 158-160")).toBe("Folien 148, 158-160");
  });
});
