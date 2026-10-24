export interface GeneratedTask {
  task: string;
  solution: string;
}

export type Rng = () => number;
export type Generator = (rng: Rng) => GeneratedTask;

/** Deterministischer RNG (mulberry32), damit eine Aufgabe pro Seed stabil bleibt. */
export function mulberry32(seed: number): Rng {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function int(rng: Rng, min: number, max: number): number {
  return min + Math.floor(rng() * (max - min + 1));
}

export function nonZeroInt(rng: Rng, min: number, max: number): number {
  let value = 0;
  while (value === 0) {
    value = int(rng, min, max);
  }
  return value;
}

export function pick<T>(rng: Rng, values: T[]): T {
  return values[Math.floor(rng() * values.length)];
}

export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

/** Gekürzter Bruch als LaTeX; ganze Zahlen ohne Bruchstrich. */
export function frac(numerator: number, denominator: number): string {
  if (denominator < 0) {
    numerator = -numerator;
    denominator = -denominator;
  }
  const divisor = gcd(numerator, denominator);
  const p = numerator / divisor;
  const q = denominator / divisor;
  if (q === 1) return String(p);
  return p < 0 ? String.raw`-\frac{${-p}}{${q}}` : String.raw`\frac{${p}}{${q}}`;
}

/** Negative Zahlen in Klammern, z. B. für Produkte wie 3 · (−2). */
export function par(value: number): string {
  return value < 0 ? `(${value})` : String(value);
}

/** Terme aufsummieren: "3 + (−2) − 4" wird als "3 - 2 - 4" geschrieben. */
export function sumTerms(first: string, ...rest: Array<{ sign: 1 | -1; text: string }>): string {
  let out = first;
  for (const term of rest) {
    out += term.sign < 0 ? ` - ${term.text}` : ` + ${term.text}`;
  }
  return out;
}

/** Komplexe Zahl a + bi als LaTeX. */
export function complexStr(a: number, b: number): string {
  const i = String.raw`\mathrm{i}`;
  if (b === 0) return String(a);
  const imag = b === 1 ? i : b === -1 ? `-${i}` : `${b}${i}`;
  if (a === 0) return imag;
  const abs = Math.abs(b);
  const imagAbs = abs === 1 ? i : `${abs}${i}`;
  return `${a} ${b < 0 ? "-" : "+"} ${imagAbs}`;
}

/** Polynom aus absteigenden Koeffizienten, z. B. [1, -2, 0, 3] -> x^3 - 2x^2 + 3. */
export function polyStr(coefficients: number[]): string {
  const degree = coefficients.length - 1;
  const parts: string[] = [];
  coefficients.forEach((c, index) => {
    if (c === 0) return;
    const power = degree - index;
    const monom = power === 0 ? "" : power === 1 ? "x" : `x^${power}`;
    const abs = Math.abs(c);
    const value = monom && abs === 1 ? monom : `${abs}${monom}`;
    if (parts.length === 0) {
      parts.push(c < 0 ? `-${value}` : value);
    } else {
      parts.push(c < 0 ? `- ${value}` : `+ ${value}`);
    }
  });
  return parts.length ? parts.join(" ") : "0";
}

export function pmatrix(rows: number[][]): string {
  const body = rows.map((row) => row.join(" & ")).join(String.raw` \\ `);
  return String.raw`\begin{pmatrix} ${body} \end{pmatrix}`;
}

export function vec(values: number[]): string {
  return pmatrix(values.map((value) => [value]));
}

export function det3(m: number[][]): number {
  return (
    m[0][0] * m[1][1] * m[2][2] +
    m[0][1] * m[1][2] * m[2][0] +
    m[0][2] * m[1][0] * m[2][1] -
    m[2][0] * m[1][1] * m[0][2] -
    m[2][1] * m[1][2] * m[0][0] -
    m[2][2] * m[1][0] * m[0][1]
  );
}

export function shuffle<T>(rng: Rng, values: T[]): T[] {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index--) {
    const other = Math.floor(rng() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

export function decimal(value: number): string {
  return String(Math.round(value * 100) / 100).replace(".", ",");
}

export function sarrusTerms(m: number[][]): string {
  const plus = [
    `${par(m[0][0])} \\cdot ${par(m[1][1])} \\cdot ${par(m[2][2])}`,
    `${par(m[0][1])} \\cdot ${par(m[1][2])} \\cdot ${par(m[2][0])}`,
    `${par(m[0][2])} \\cdot ${par(m[1][0])} \\cdot ${par(m[2][1])}`
  ];
  const minus = [
    `${par(m[2][0])} \\cdot ${par(m[1][1])} \\cdot ${par(m[0][2])}`,
    `${par(m[2][1])} \\cdot ${par(m[1][2])} \\cdot ${par(m[0][0])}`,
    `${par(m[2][2])} \\cdot ${par(m[1][0])} \\cdot ${par(m[0][1])}`
  ];
  return `${plus.join(" + ")} - ${minus.join(" - ")}`;
}
