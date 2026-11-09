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

/**
 * Erst nach dem ersten Bild und den dafür nötigen Schriften, wenn der Browser Luft hat,
 * damit KaTeX nicht mit dem Start um Bandbreite konkurriert.
 */
function whenIdle(task: () => void): void {
  // Zwei Frames: Erst nach dem Layout des ersten Bilds sind dessen Schriften angefordert.
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      void document.fonts.ready.then(() => {
        if ("requestIdleCallback" in window) window.requestIdleCallback(task);
        else setTimeout(task, 0);
      });
    })
  );
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Formeln eines Fachs mit `features.math`: Das KaTeX-HTML kommt fertig aus dem Build, hier wird nur
 * das Stylesheet geladen. `runtimeMath` lädt KaTeX selbst im Hintergrund für Generator-Aufgaben nach.
 */
export async function prepareRichText(math: boolean, formulas: Record<string, string>, runtimeMath: boolean): Promise<void> {
  mathEnabled = math;
  prerendered = formulas;
  if (!math) return;
  await import("katex/dist/katex.min.css");
  if (runtimeMath) whenIdle(() => void loadRenderer());
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
