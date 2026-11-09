import { readFileSync } from "node:fs";
import katex from "katex";
import { describe, expect, it } from "vitest";
import { prerenderFormulas } from "../src/lib/math";
import { loadRawSubject } from "./load_content";
import { fontFilesForHtml, woff2OnlyCss } from "./katex_fonts";

describe("KaTeX-Schriften", () => {
  it("lädt zur Formel nur die benutzten woff2-Schnitte", () => {
    const plain = katex.renderToString("x", { throwOnError: false });
    expect(fontFilesForHtml(plain)).toEqual(["KaTeX_Main-Regular.woff2", "KaTeX_Math-Italic.woff2"]);

    const ams = katex.renderToString(String.raw`\mathbb{R}`, { throwOnError: false });
    expect(fontFilesForHtml(ams)).toContain("KaTeX_AMS-Regular.woff2");

    const sized = katex.renderToString(String.raw`\left(\frac{a}{b}\right)`, { displayMode: true, throwOnError: false });
    const sizedFonts = fontFilesForHtml(sized);
    expect(sizedFonts).toContain("KaTeX_Size2-Regular.woff2");
    expect(sizedFonts).not.toContain("KaTeX_Size3-Regular.woff2");
  });

  it("findet AMS und Size2 in den LAA-Formeln", () => {
    const formulas = Object.values(prerenderFormulas(loadRawSubject("laa").subject)).join("");
    const fonts = fontFilesForHtml(formulas);
    expect(fonts).toContain("KaTeX_AMS-Regular.woff2");
    expect(fonts).toContain("KaTeX_Size2-Regular.woff2");
    expect(fonts).toContain("KaTeX_Main-Regular.woff2");
    expect(fonts).toContain("KaTeX_Math-Italic.woff2");
  });

  it("streicht woff und ttf, lässt woff2 und font-display stehen", () => {
    const css = readFileSync(new URL("../node_modules/katex/dist/katex.min.css", import.meta.url), "utf8");
    const stripped = woff2OnlyCss(css);
    expect(stripped).not.toMatch(/\.woff\)/);
    expect(stripped).not.toMatch(/\.ttf\)/);
    expect(stripped).toContain("KaTeX_Main-Regular.woff2");
    expect(stripped).toContain("KaTeX_AMS-Regular.woff2");
    expect(stripped).toContain("font-display:block");
    const minified = 'src:url(/assets/KaTeX_AMS-Regular-BQhdFMY1.woff2)format("woff2"),url(/assets/KaTeX_AMS-Regular-DMm9YOAa.woff)format("woff"),url(/assets/KaTeX_AMS-Regular-DRggAlZN.ttf)format("truetype")';
    expect(woff2OnlyCss(minified)).toBe('src:url(/assets/KaTeX_AMS-Regular-BQhdFMY1.woff2)format("woff2")');
  });
});
