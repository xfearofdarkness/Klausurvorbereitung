import katex from "katex";

/** Formeln in `\(...\)` (inline) bzw. `\[...\]` (abgesetzt); maskierte Backslashes zählen nicht. */
export const MATH_PATTERN = /(?<!\\)\\\(([\s\S]*?)(?<!\\)\\\)|(?<!\\)\\\[([\s\S]*?)(?<!\\)\\\]/g;

const HTML_ENTITIES: Record<string, string> = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " " };
const cache = new Map<string, string>();

/** Ersetzt alle Formeln in einem HTML-String durch KaTeX-HTML; der übrige Text bleibt unverändert. */
export function renderMath(html: string): string {
  if (!html.includes("\\(") && !html.includes("\\[")) return html;

  return html.replace(MATH_PATTERN, (_match, inline: string | undefined, display: string | undefined) => {
    const displayMode = display !== undefined;
    const tex = (inline ?? display ?? "").replace(/&(lt|gt|amp|nbsp);/g, (entity) => HTML_ENTITIES[entity]);
    const cacheKey = `${displayMode ? "D" : "I"}${tex}`;
    let rendered = cache.get(cacheKey);
    if (rendered === undefined) {
      rendered = katex.renderToString(tex, { displayMode, throwOnError: false });
      cache.set(cacheKey, rendered);
    }
    return rendered;
  });
}
