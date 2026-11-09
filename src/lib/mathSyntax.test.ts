import { describe, expect, it } from "vitest";
import { prerenderFormulas, renderFormula } from "./math";
import { replaceFormulas } from "./mathSyntax";

describe("vorab gerenderte Formeln", () => {
  const data = { topics: [{ body: String.raw`Für \(a &lt; b\) gilt \[a^2\] und \(a &lt; b\).`, note: "ohne Formel" }] };

  it("sammelt jede Formel einmal unter dem Schlüssel, den richText nachschlägt", () => {
    const table = prerenderFormulas(data);
    expect(Object.keys(table).sort()).toEqual(["Da^2", "Ia < b"]);
    const looked: string[] = [];
    replaceFormulas(data.topics[0].body, (formula) => {
      looked.push(formula.key);
      return "";
    });
    expect(looked.every((key) => key in table)).toBe(true);
  });

  it("liefert dasselbe HTML wie das Rendern im Browser", () => {
    const table = prerenderFormulas(data);
    expect(table["Da^2"]).toBe(renderFormula({ tex: "a^2", displayMode: true, key: "Da^2" }));
  });

  it("lässt Text ohne Formel unverändert", () => {
    expect(replaceFormulas("ohne Formel", () => "x")).toBe("ohne Formel");
  });
});
