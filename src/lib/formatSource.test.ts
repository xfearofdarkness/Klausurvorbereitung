import { describe, expect, it } from "vitest";
import audDecks from "../../content/aud/decks.json" with { type: "json" };
import dismaDecks from "../../content/disma/decks.json" with { type: "json" };
import laaDecks from "../../content/laa/decks.json" with { type: "json" };
import rabsDecks from "../../content/rabs/decks.json" with { type: "json" };
import vsDecks from "../../content/vs/decks.json" with { type: "json" };
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

  it("nennt den Foliensatz, sobald ein Fach mehrere hat", () => {
    for (const decks of [rabsDecks, audDecks, vsDecks]) {
      for (const [file, label] of Object.entries(decks)) {
        expect(formatSource(`${file}, Folie 12`)).toBe(`${label} · Folie 12`);
      }
    }
    expect(formatSource("02_rabs_speicher.pdf, Folien 12 und 14")).toBe("Speicherverwaltung · Folien 12, 14");
    expect(formatSource("01_rabs_grundlagen-04.pdf, Folien 17-19; 01_rabs_grundlagen-05.pdf, Folien 4-6")).toBe(
      "Betriebssysteme · Folien 17-19 · Grundlagen Betriebssysteme · Folien 4-6"
    );
    expect(formatSource("ÜbungsaufgabenLAA.pdf, Aufgabe 12; 02_rabs_speicher.pdf, Folie 12")).toBe(
      "Übung 12 · Speicherverwaltung · Folie 12"
    );
  });

  it("lässt einen einzelnen Foliensatz ohne Kürzel", () => {
    for (const decks of [laaDecks, dismaDecks]) {
      expect(Object.keys(decks)).toHaveLength(1);
      for (const file of Object.keys(decks)) {
        expect(formatSource(`${file}, Folie 12`)).toBe("Folie 12");
      }
    }
  });
});
