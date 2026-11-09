import { describe, expect, it } from "vitest";
import { sectionIdFromHash } from "./scrollLayout";

describe("Abschnittsanker", () => {
  it("liest nur #abschnitt-n", () => {
    expect(sectionIdFromHash("#abschnitt-12")).toBe("abschnitt-12");
    expect(sectionIdFromHash("#abschnitt-1")).toBe("abschnitt-1");
    expect(sectionIdFromHash("#andere")).toBeNull();
    expect(sectionIdFromHash("")).toBeNull();
  });
});
