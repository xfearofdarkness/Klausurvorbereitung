let mathRenderer: ((html: string) => string) | null = null;

/** Lädt KaTeX samt Stylesheet nur für Fächer mit `features.math`. */
export async function prepareRichText(math: boolean): Promise<void> {
  if (!math) {
    mathRenderer = null;
    return;
  }
  const [{ renderMath }] = await Promise.all([import("./math"), import("katex/dist/katex.min.css")]);
  mathRenderer = renderMath;
}

/** Inhalts-HTML für `{@html}`; Formeln werden vor dem Einfügen gerendert, nicht nachträglich im DOM. */
export function richText(html: string): string {
  return mathRenderer ? mathRenderer(html) : html;
}
