import { replaceFormulas, type Formula } from "./mathSyntax";

let mathEnabled = false;
let prerendered: Record<string, string> = {};
/** KaTeX im Browser; nur für Formeln, die nicht vorab gerendert sind (Generator-Aufgaben). */
let renderer = $state<((formula: Formula) => string) | null>(null);
let rendererLoad: Promise<void> | null = null;

function loadRenderer(): Promise<void> {
  rendererLoad ??= import("./math").then((module) => {
    renderer = module.renderFormula;
  });
  return rendererLoad;
}

/** KaTeX-JS für Generator-Aufgaben. Erst wenn Üben geöffnet oder der Modusknopf anvisiert wird. */
export function warmMathRenderer(): void {
  void loadRenderer();
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Formeln eines Fachs mit `features.math`: Das KaTeX-HTML kommt fertig aus dem Build, hier wird nur
 * das Stylesheet geladen. Das KaTeX-Skript selbst startet erst mit Üben.
 */
export async function prepareRichText(math: boolean, formulas: Record<string, string>): Promise<void> {
  mathEnabled = math;
  prerendered = formulas;
  if (!math) return;
  await import("katex/dist/katex.min.css");
}

/** Inhalts-HTML für `{@html}`; Formeln werden vor dem Einfügen gerendert, nicht nachträglich im DOM. */
export function richText(html: string): string {
  if (!mathEnabled) return html;
  const render = renderer;
  return replaceFormulas(html, (formula) => {
    const ready = prerendered[formula.key];
    if (ready !== undefined) return ready;
    if (render) return render(formula);
    void loadRenderer();
    return `<span class="math-pending">${escapeHtml(formula.tex)}</span>`;
  });
}
