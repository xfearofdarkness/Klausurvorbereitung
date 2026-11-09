/** Klasse im KaTeX-HTML → genau die woff2-Datei, die die Schriftregel lädt. */
const CLASS_FONT: Record<string, string> = {
  mathnormal: "KaTeX_Math-Italic.woff2",
  mathbf: "KaTeX_Main-Bold.woff2",
  textbf: "KaTeX_Main-Bold.woff2",
  mathit: "KaTeX_Main-Italic.woff2",
  textit: "KaTeX_Main-Italic.woff2",
  boldsymbol: "KaTeX_Math-BoldItalic.woff2",
  mathbb: "KaTeX_AMS-Regular.woff2",
  textbb: "KaTeX_AMS-Regular.woff2",
  amsrm: "KaTeX_AMS-Regular.woff2",
  mathcal: "KaTeX_Caligraphic-Regular.woff2",
  mathfrak: "KaTeX_Fraktur-Regular.woff2",
  textfrak: "KaTeX_Fraktur-Regular.woff2",
  mathboldfrak: "KaTeX_Fraktur-Bold.woff2",
  textboldfrak: "KaTeX_Fraktur-Bold.woff2",
  mathtt: "KaTeX_Typewriter-Regular.woff2",
  texttt: "KaTeX_Typewriter-Regular.woff2",
  mathscr: "KaTeX_Script-Regular.woff2",
  textscr: "KaTeX_Script-Regular.woff2",
  mathsf: "KaTeX_SansSerif-Regular.woff2",
  textsf: "KaTeX_SansSerif-Regular.woff2",
  mathboldsf: "KaTeX_SansSerif-Bold.woff2",
  textboldsf: "KaTeX_SansSerif-Bold.woff2",
  mathitsf: "KaTeX_SansSerif-Italic.woff2",
  mathsfit: "KaTeX_SansSerif-Italic.woff2",
  textitsf: "KaTeX_SansSerif-Italic.woff2"
};

/** Nur echte Delimiter-Schnitte, nicht die Schriftgrößenklassen `size3` in `reset-size6 size3`. */
const DELIM_SIZE_FONT: Record<string, string> = {
  size1: "KaTeX_Size1-Regular.woff2",
  size2: "KaTeX_Size2-Regular.woff2",
  size3: "KaTeX_Size3-Regular.woff2",
  size4: "KaTeX_Size4-Regular.woff2"
};

const MAIN_REGULAR = "KaTeX_Main-Regular.woff2";
const CLASS_ATTRIBUTE = /class="([^"]*)"/g;
const LEGACY_FONT_URL = /,url\([^)]+\.(?:woff|ttf)\)\s*format\("[^"]+"\)/g;

/**
 * woff2-Dateien, die das vorgerenderte KaTeX-HTML wirklich benutzt.
 * Jede Formel sitzt auf KaTeX_Main; weitere Schnitte kommen aus den Klassen.
 */
export function fontFilesForHtml(html: string): string[] {
  const files = new Set<string>();
  let usesKatex = false;
  for (const match of html.matchAll(CLASS_ATTRIBUTE)) {
    const tokens = new Set(match[1].split(/\s+/).filter((token) => token.length > 0));
    if (tokens.has("katex")) usesKatex = true;
    for (const token of tokens) {
      const file = CLASS_FONT[token];
      if (file) files.add(file);
    }
    if (tokens.has("delimsizing")) {
      for (const token of tokens) {
        const file = DELIM_SIZE_FONT[token];
        if (file) files.add(file);
      }
    }
    if (tokens.has("delim-size1")) files.add(DELIM_SIZE_FONT.size1);
    if (tokens.has("delim-size4")) files.add(DELIM_SIZE_FONT.size4);
    if (tokens.has("op-symbol") && tokens.has("large-op")) files.add(DELIM_SIZE_FONT.size2);
    if (tokens.has("op-symbol") && tokens.has("small-op")) files.add(DELIM_SIZE_FONT.size1);
  }
  if (usesKatex) files.add(MAIN_REGULAR);
  return [...files].sort();
}

/** Entfernt die woff- und ttf-Fallbacks einer KaTeX-@font-face-Regel. `font-display` bleibt. */
export function woff2OnlyCss(css: string): string {
  return css.replace(LEGACY_FONT_URL, "");
}
