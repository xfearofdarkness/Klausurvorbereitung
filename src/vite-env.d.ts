/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "katex/contrib/auto-render" {
  export interface AutoRenderOptions {
    delimiters: Array<{ left: string; right: string; display: boolean }>;
    throwOnError?: boolean;
  }

  export default function renderMathInElement(element: HTMLElement, options: AutoRenderOptions): void;
}
