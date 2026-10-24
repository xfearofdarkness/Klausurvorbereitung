import { describe, expect, it } from "vitest";
import { NAV_STORAGE_KEY, SIDEBAR_COLLAPSED_KEY, SIDEBAR_COLLAPSED_VALUE } from "./navPlacement";
import { getSubjectProgress, migrateLegacyProgress, STORAGE_KEY, type LegacySubjectKeys } from "./progress";
import { buildProgressFile, planProgressImport } from "./progressTransfer";
import type { AppProgress, Subject } from "../types/content";

const subject = {
  id: "laa",
  title: "LAA",
  subtitle: "",
  icon: "",
  features: {},
  topics: [
    {
      id: "funktionen",
      title: "Funktionen",
      icon: "",
      cards: [],
      flashcards: [{ key: "karte-a", front: "Frage", back: "Antwort", source: "Folie 1" }],
      exercises: [{ key: "aufgabe-a", task: "Rechne", ref: "Aufgabe", note: "", source: "Folie 2" }],
      walkthroughs: []
    }
  ]
} satisfies Subject;

const legacy: LegacySubjectKeys = {
  topicOrder: ["funktionen"],
  topics: { funktionen: { flash: ["karte-a"], quiz: ["karte-a"], practice: ["aufgabe-a"] } }
};

function memory(initial: Record<string, string> = {}): { read: (key: string) => string | null; store: Record<string, string> } {
  const store = { ...initial };
  return { store, read: (key) => (key in store ? store[key] : null) };
}

describe("Fortschritt", () => {
  it("überträgt Listenpositionen einmalig auf Ids und lässt eine vorhandene Karteikarte gewinnen", () => {
    const progress: AppProgress = {
      subjects: {
        laa: {
          version: 1,
          flash: { funktionen: { "0": "know" } },
          quiz: { funktionen: { "0": "wrong" } },
          practice: { funktionen: { "0": "done" } },
          ui: { lastTopicIndex: 0, lastMode: "quiz" }
        }
      }
    };
    migrateLegacyProgress(progress, subject, legacy);
    const stored = progress.subjects.laa;
    expect(stored?.version).toBe(4);
    expect(stored?.quiz).toBeUndefined();
    expect(stored?.flash.funktionen["karte-a"]).toBe("know");
    expect(stored?.practice?.funktionen["aufgabe-a"]).toBe("done");
    expect(stored?.ui?.lastTopicId).toBe("funktionen");
    expect(stored?.ui?.lastMode).toBe("flash");
    expect(stored?.ui?.lastTopicIndex).toBeUndefined();
  });

  it("füllt eine Lücke aus dem früheren Fragenmodus, wenn die Karteikarte noch leer ist", () => {
    const progress: AppProgress = {
      subjects: {
        laa: {
          version: 1,
          flash: { funktionen: {} },
          quiz: { funktionen: { "0": "wrong" } }
        }
      }
    };
    migrateLegacyProgress(progress, subject, legacy);
    expect(progress.subjects.laa?.flash.funktionen["karte-a"]).toBe("repeat");
  });

  it("behält vorhandene Markierungen und füllt nur Lücken", () => {
    const existing = {
      subjects: {
        laa: { version: 3, flash: { funktionen: { "karte-a": "repeat" } } }
      }
    };
    const { read } = memory({ [STORAGE_KEY]: JSON.stringify(existing) });
    const plan = planProgressImport(
      {
        v: 1,
        keys: {
          [STORAGE_KEY]: {
            subjects: {
              laa: {
                version: 3,
                flash: { funktionen: { "karte-a": "know", "karte-b": "know" } },
                practice: { funktionen: { "aufgabe-a": "done" } }
              }
            }
          },
          [NAV_STORAGE_KEY]: "right"
        }
      },
      read
    );
    expect(plan.ok).toBe(true);
    if (!plan.ok) return;
    const merged = JSON.parse(plan.writes.find((entry) => entry.key === STORAGE_KEY)?.value ?? "{}") as AppProgress;
    expect(merged.subjects.laa?.flash.funktionen["karte-a"]).toBe("repeat");
    expect(merged.subjects.laa?.flash.funktionen["karte-b"]).toBe("know");
    expect(merged.subjects.laa?.practice?.funktionen["aufgabe-a"]).toBe("done");
    expect(plan.writes.some((entry) => entry.key === NAV_STORAGE_KEY)).toBe(true);
  });

  it("mischt keine Listenpositionen in einen Stand ab Version 2", () => {
    const { read } = memory({
      [STORAGE_KEY]: JSON.stringify({ subjects: { laa: { version: 3, flash: {} } } })
    });
    const plan = planProgressImport(
      { v: 1, keys: { [STORAGE_KEY]: { subjects: { laa: { flash: { funktionen: { "0": "know" } } } } } } },
      read
    );
    expect(plan.ok).toBe(true);
    if (!plan.ok) return;
    expect(plan.changed).toBe(false);
  });

  it("lässt eine gespeicherte Navigation in Ruhe und klappt eine offene Leiste nur zu, wenn der Schlüssel fehlt", () => {
    const occupied = memory({ [NAV_STORAGE_KEY]: "left", [SIDEBAR_COLLAPSED_KEY]: SIDEBAR_COLLAPSED_VALUE });
    const keep = planProgressImport(
      { v: 1, keys: { [NAV_STORAGE_KEY]: "right", [SIDEBAR_COLLAPSED_KEY]: SIDEBAR_COLLAPSED_VALUE } },
      occupied.read
    );
    expect(keep.ok).toBe(true);
    if (!keep.ok) return;
    expect(keep.changed).toBe(false);

    const open = memory({});
    const close = planProgressImport({ v: 1, keys: { [SIDEBAR_COLLAPSED_KEY]: SIDEBAR_COLLAPSED_VALUE } }, open.read);
    expect(close.ok).toBe(true);
    if (!close.ok) return;
    expect(close.writes).toEqual([{ key: SIDEBAR_COLLAPSED_KEY, value: SIDEBAR_COLLAPSED_VALUE }]);

    const closed = memory({ [SIDEBAR_COLLAPSED_KEY]: SIDEBAR_COLLAPSED_VALUE });
    const stay = planProgressImport({ v: 1, keys: {} }, closed.read);
    expect(stay.ok).toBe(true);
    if (!stay.ok) return;
    expect(stay.changed).toBe(false);
    expect(closed.read(SIDEBAR_COLLAPSED_KEY)).toBe(SIDEBAR_COLLAPSED_VALUE);
  });

  it("lehnt eine ungültige Datei ab", () => {
    const { read } = memory();
    expect(planProgressImport({ v: 2, keys: {} }, read).ok).toBe(false);
    expect(planProgressImport({ v: 1, keys: { andere: 1 } }, read).ok).toBe(false);
    expect(planProgressImport({ v: 1, keys: { [STORAGE_KEY]: { subjects: { unbekannt: { flash: {} } } } } }, read).ok).toBe(false);
  });

  it("hebt Version 3 auf 4 an, behält Markierungen und überschreibt keine Fälligkeit", () => {
    const progress: AppProgress = {
      subjects: { laa: { version: 3, flash: { funktionen: { "karte-a": "know" } } } }
    };
    const stored = getSubjectProgress(progress, subject);
    expect(stored.version).toBe(4);
    expect(stored.flash.funktionen["karte-a"]).toBe("know");

    const existing = {
      due: "2026-10-20",
      interval: 3,
      ease: 2.5,
      reps: 2
    };
    const { read } = memory({
      [STORAGE_KEY]: JSON.stringify({
        subjects: { laa: { version: 4, flash: { funktionen: { "karte-a": "know" } }, schedule: { funktionen: { "karte-a": existing } } } }
      })
    });
    const plan = planProgressImport(
      {
        v: 1,
        keys: {
          [STORAGE_KEY]: {
            subjects: {
              laa: {
                version: 4,
                flash: {},
                schedule: {
                  funktionen: {
                    "karte-a": { due: "2026-12-01", interval: 9, ease: 2.5, reps: 4 },
                    "karte-b": { due: "2026-10-25", interval: 1, ease: 2.5, reps: 1 },
                    "0": { due: "2026-10-25", interval: 1, ease: 2.5, reps: 1 }
                  }
                }
              }
            }
          }
        }
      },
      read
    );
    expect(plan.ok).toBe(true);
    if (!plan.ok) return;
    const merged = JSON.parse(plan.writes.find((entry) => entry.key === STORAGE_KEY)?.value ?? "{}") as AppProgress;
    expect(merged.subjects.laa?.schedule?.funktionen["karte-a"]).toEqual(existing);
    expect(merged.subjects.laa?.schedule?.funktionen["karte-b"]?.due).toBe("2026-10-25");
    expect(merged.subjects.laa?.schedule?.funktionen["0"]).toBeUndefined();
  });

  it("schreibt in die Exportdatei nur gültige klausurtrainer-Schlüssel", () => {
    const file = buildProgressFile((key) => {
      if (key === STORAGE_KEY) return JSON.stringify({ subjects: { laa: { version: 3, flash: { funktionen: { "karte-a": "know" } } } } });
      if (key === NAV_STORAGE_KEY) return "top";
      if (key === "klausurtrainer-reloaded-after-deploy") return "1";
      return null;
    });
    expect(file.v).toBe(1);
    expect(Object.keys(file.keys).sort()).toEqual([NAV_STORAGE_KEY, STORAGE_KEY].sort());
    expect(file.keys[NAV_STORAGE_KEY]).toBe("top");
  });
});
