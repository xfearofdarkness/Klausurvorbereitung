import katex from "katex";
import { replaceFormulas, type Formula } from "./mathSyntax";

export { MATH_PATTERN } from "./mathSyntax";

/** Eine Formel als KaTeX-HTML. Läuft beim Build für alle Fachdaten und im Browser nur für Generator-Aufgaben. */
export function renderFormula(formula: Formula): string {
  return katex.renderToString(formula.tex, { displayMode: formula.displayMode, throwOnError: false });
}

/** Rendert jede Formel in allen Strings von `value` (rekursiv) und sammelt sie unter ihrem Schlüssel. */
export function prerenderFormulas(value: unknown, table: Record<string, string> = {}): Record<string, string> {
  if (typeof value === "string") {
    replaceFormulas(value, (formula) => {
      table[formula.key] ??= renderFormula(formula);
      return "";
    });
  } else if (Array.isArray(value)) {
    for (const entry of value) prerenderFormulas(entry, table);
  } else if (value && typeof value === "object") {
    for (const entry of Object.values(value)) prerenderFormulas(entry, table);
  }
  return table;
}
