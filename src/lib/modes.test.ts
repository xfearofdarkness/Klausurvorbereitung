import { describe, expect, it } from "vitest";
import { MODES, modeAccessName, modeAccessTitle } from "./modes";

describe("leere Modi", () => {
  const practice = MODES.find((mode) => mode.id === "practice");
  const flash = MODES.find((mode) => mode.id === "flash");

  it("nennt den fehlenden Inhalt und lässt einen vollen Modus beim Namen", () => {
    expect(practice).toBeDefined();
    expect(flash).toBeDefined();
    if (!practice || !flash) return;
    expect(modeAccessName(practice, false)).toBe("Üben (keine Aufgaben in diesem Thema)");
    expect(modeAccessTitle(practice, false)).toBe("Keine Aufgaben in diesem Thema");
    expect(modeAccessName(flash, false)).toBe("Karteikarten (keine Karteikarten in diesem Thema)");
    expect(modeAccessTitle(flash, false)).toBe("Keine Karteikarten in diesem Thema");
    expect(modeAccessName(practice, true)).toBe("Üben");
    expect(modeAccessTitle(practice, true)).toBeUndefined();
  });
});
