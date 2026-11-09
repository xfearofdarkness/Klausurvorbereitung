/** Formeln in `\(...\)` (inline) bzw. `\[...\]` (abgesetzt); maskierte Backslashes zählen nicht. */
export const MATH_PATTERN = /(?<!\\)\\\(([\s\S]*?)(?<!\\)\\\)|(?<!\\)\\\[([\s\S]*?)(?<!\\)\\\]/g;

const HTML_ENTITIES: Record<string, string> = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " " };

export interface Formula {
  tex: string;
  displayMode: boolean;
  /** Schlüssel der vorab gerenderten Formeltabelle. */
  key: string;
}

/** Enthält der String überhaupt eine Formel? Billiger Vorfilter vor dem regulären Ausdruck. */
export function hasMath(html: string): boolean {
  return html.includes("\\(") || html.includes("\\[");
}

/** Ersetzt jede Formel in einem HTML-String durch das Ergebnis von `render`; der übrige Text bleibt. */
export function replaceFormulas(html: string, render: (formula: Formula) => string): string {
  if (!hasMath(html)) return html;
  return html.replace(MATH_PATTERN, (_match, inline: string | undefined, display: string | undefined) => {
    const displayMode = display !== undefined;
    const tex = (inline ?? display ?? "").replace(/&(lt|gt|amp|nbsp);/g, (entity) => HTML_ENTITIES[entity]);
    return render({ tex, displayMode, key: `${displayMode ? "D" : "I"}${tex}` });
  });
}
