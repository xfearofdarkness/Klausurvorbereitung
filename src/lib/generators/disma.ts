import { decimal, int, nonZeroInt, pick, polyStr, shuffle, type Generator } from "./shared";

/** Teilmengen in Reihenfolge der Mächtigkeit, innerhalb gleicher Größe nach Lage der Elemente. */
function subsetsOf<T>(elements: T[]): T[][] {
  const subsets: T[][] = [];
  for (let mask = 0; mask < 1 << elements.length; mask++) {
    subsets.push(elements.filter((_, index) => mask & (1 << index)));
  }
  return subsets.sort((a, b) => a.length - b.length);
}

function setStr(elements: string[]): string {
  return elements.length === 0 ? String.raw`\emptyset` : String.raw`\{${elements.join(", ")}\}`;
}

const POWER_SET_ELEMENTS = ["1", "2", "3", "4", "5", "a", "b", "c", "x", "y", String.raw`\pi`, "+", "-"];
const POWER_SET_MAX_SIZE = 4;

export const potenzmenge: Generator = (rng) => {
  const size = int(rng, 1, POWER_SET_MAX_SIZE);
  const elements = shuffle(rng, POWER_SET_ELEMENTS).slice(0, size);
  const subsets = subsetsOf(elements).map(setStr);
  return {
    task: String.raw`Geben Sie die Potenzmenge von \(X = ${setStr(elements)}\) an und bestimmen Sie deren Mächtigkeit.`,
    solution: String.raw`Die Potenzmenge enthält alle Teilmengen von \(X\), auch \(\emptyset\) und \(X\) selbst: \[P(X) = \{${subsets.join(", ")}\}\] Mächtigkeit: \(|P(X)| = 2^{|X|} = 2^{${size}} = ${2 ** size}\).`
  };
};

const CARTESIAN_POOL = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const CARTESIAN_MAX_SIZE = 3;

export const kartesischesProdukt: Generator = (rng) => {
  const pool = shuffle(rng, CARTESIAN_POOL);
  const a = pool.slice(0, int(rng, 2, CARTESIAN_MAX_SIZE)).sort((x, y) => x - y);
  const b = shuffle(rng, CARTESIAN_POOL).slice(0, int(rng, 2, CARTESIAN_MAX_SIZE)).sort((x, y) => x - y);
  const pairs = a.flatMap((x) => b.map((y) => `(${x}, ${y})`));
  return {
    task: String.raw`Geben Sie das kartesische Produkt \(A \times B\) der Mengen \(A = ${setStr(a.map(String))}\) und \(B = ${setStr(b.map(String))}\) an.`,
    solution: String.raw`\(A \times B\) enthält alle geordneten Paare \((a, b)\) mit \(a \in A\) und \(b \in B\): \[A \times B = \{${pairs.join(", ")}\}\] Das sind ${pairs.length} Paare.`
  };
};

export const umkehrfunktionLinear: Generator = (rng) => {
  const a = nonZeroInt(rng, -6, 6);
  const b = nonZeroInt(rng, -9, 9);
  const f = polyStr([a, b]);
  const inverse = Math.abs(a) === 1 ? polyStr([a, -a * b]).replace(/x/g, "y") : String.raw`\frac{y ${b < 0 ? "+" : "-"} ${Math.abs(b)}}{${a}}`;
  return {
    task: String.raw`Zeigen Sie, dass \(f: \mathbb{R} \to \mathbb{R},\ f(x) := ${f}\) bijektiv ist, und bestimmen Sie die Umkehrfunktion.`,
    solution: String.raw`Injektiv: Aus \(f(x_1) = f(x_2)\) folgt \(${a}x_1 = ${a}x_2\), also \(x_1 = x_2\). Surjektiv: Zu jedem \(y \in \mathbb{R}\) ist \(x = ${inverse}\) ein Urbild, denn \(f(x) = y\). Also ist \(f\) bijektiv. Umkehrfunktion nach \(f^{-1}(y) = x \iff f(x) = y\): Aus \(y = ${f}\) folgt \[f^{-1}: \mathbb{R} \to \mathbb{R},\quad f^{-1}(y) = ${inverse}.\]`
  };
};

const HEX_DIGITS = "0123456789ABCDEF";
const BASE_CONVERSION_MAX = 255;

function digitsIn(value: number, base: number): number[] {
  const digits: number[] = [];
  do {
    digits.unshift(value % base);
    value = Math.floor(value / base);
  } while (value > 0);
  return digits;
}

function positionalSum(digits: number[], base: number): string {
  return digits.map((digit, index) => String.raw`${digit} \cdot ${base}^{${digits.length - 1 - index}}`).join(" + ");
}

/** Dual- und Hexadezimaldarstellung wie auf den Folien (z. B. 14 ist dual 1110, 27 ist hexadezimal 1B). */
function baseRepresentation(value: number): { dual: string; hex: string } {
  return { dual: digitsIn(value, 2).join(""), hex: digitsIn(value, 16).map((d) => HEX_DIGITS[d]).join("") };
}

export const dualHexadezimal: Generator = (rng) => {
  const value = int(rng, 5, BASE_CONVERSION_MAX);
  const { dual, hex } = baseRepresentation(value);
  const hexDigits = digitsIn(value, 16);
  return {
    task: String.raw`Geben Sie die Dezimalzahl ${value} als Dualzahl und als Hexadezimalzahl an.`,
    solution: String.raw`Dual: ${value} ist dual ${dual}, denn \(${positionalSum(digitsIn(value, 2), 2)} = ${value}\). Hexadezimal (Ziffern 0–9, A–F): ${value} ist hexadezimal ${hex}, denn \(${positionalSum(hexDigits, 16)} = ${value}\)${hexDigits.some((d) => d > 9) ? " mit A = 10, …, F = 15" : ""}.`
  };
};

const DNF_VARIABLES = ["a", "b", "c"];
const DNF_ROWS = 1 << DNF_VARIABLES.length;

/** Disjunktive Normalform nach Folie 100: je Zeile mit Wert 1 ein and-Term, Parameter mit Wert 0 negiert. */
function dnfTerms(values: number[]): string[] {
  return values.flatMap((value, row) => {
    if (value !== 1) return [];
    const bits = DNF_VARIABLES.map((_, index) => (row >> (DNF_VARIABLES.length - 1 - index)) & 1);
    return [bits.map((bit, index) => (bit ? DNF_VARIABLES[index] : String.raw`\bar{${DNF_VARIABLES[index]}}`)).join(" * ")];
  });
}

export const disjunktiveNormalform: Generator = (rng) => {
  let values: number[] = [];
  while (!values.includes(1) || !values.includes(0)) values = Array.from({ length: DNF_ROWS }, () => int(rng, 0, 1));
  const rows = values
    .map((value, row) => `<tr>${DNF_VARIABLES.map((_, index) => `<td>${(row >> (DNF_VARIABLES.length - 1 - index)) & 1}</td>`).join("")}<td>${value}</td></tr>`)
    .join("");
  const terms = dnfTerms(values);
  return {
    task: `Berechnen Sie die disjunktive Normalform der Bool'schen Funktion \\(f(a, b, c)\\) mit der Wertetabelle<table><thead><tr><th>a</th><th>b</th><th>c</th><th>f(a, b, c)</th></tr></thead><tbody>${rows}</tbody></table>`,
    solution: String.raw`Für jede Zeile mit Wert 1 werden alle Parameter mit and verknüpft, ein Parameter wird negiert, wenn sein Wert in der Zeile 0 ist; die Terme werden mit or verknüpft (\(*\) = and, \(+\) = or, \(\bar{x}\) = not): \[f(a, b, c) = ${terms.join(" + ")}\]`
  };
};

const RELATION_ELEMENTS = ["a", "b", "c"];
const RELATION_PAIR_PROBABILITY = 0.45;

type Pair = [string, string];

function relationProperties(pairs: Pair[]): Array<{ name: string; holds: boolean; reason: string }> {
  const has = (x: string, y: string): boolean => pairs.some(([p, q]) => p === x && q === y);
  const missingLoop = RELATION_ELEMENTS.find((x) => !has(x, x));
  const loop = RELATION_ELEMENTS.find((x) => has(x, x));
  const asymmetric = pairs.find(([x, y]) => !has(y, x));
  const mutual = pairs.find(([x, y]) => x !== y && has(y, x));
  let transitivityGap: [string, string, string] | undefined;
  for (const [x, y] of pairs) {
    for (const [y2, z] of pairs) if (y === y2 && !has(x, z) && !transitivityGap) transitivityGap = [x, y, z];
  }
  return [
    { name: "reflexiv", holds: !missingLoop, reason: missingLoop ? String.raw`\((${missingLoop}, ${missingLoop}) \notin R\)` : "alle \\((x, x)\\) sind enthalten" },
    { name: "irreflexiv", holds: !loop, reason: loop ? String.raw`\((${loop}, ${loop}) \in R\)` : "kein \\((x, x)\\) ist enthalten" },
    { name: "symmetrisch", holds: !asymmetric, reason: asymmetric ? String.raw`\((${asymmetric[0]}, ${asymmetric[1]}) \in R\), aber \((${asymmetric[1]}, ${asymmetric[0]}) \notin R\)` : "zu jedem \\((x, y)\\) ist auch \\((y, x)\\) enthalten" },
    { name: "antisymmetrisch", holds: !mutual, reason: mutual ? String.raw`\((${mutual[0]}, ${mutual[1]})\) und \((${mutual[1]}, ${mutual[0]})\) sind enthalten, aber \(${mutual[0]} \ne ${mutual[1]}\)` : "es gibt kein Paar \\((x, y)\\), \\((y, x)\\) mit \\(x \\ne y\\)" },
    { name: "transitiv", holds: !transitivityGap, reason: transitivityGap ? String.raw`\((${transitivityGap[0]}, ${transitivityGap[1]})\) und \((${transitivityGap[1]}, ${transitivityGap[2]})\) sind enthalten, aber \((${transitivityGap[0]}, ${transitivityGap[2]})\) nicht` : "aus \\(xRy\\) und \\(yRz\\) folgt stets \\(xRz\\)" }
  ];
}

export const relationEigenschaften: Generator = (rng) => {
  const pairs: Pair[] = RELATION_ELEMENTS.flatMap((x) => RELATION_ELEMENTS.map((y): Pair => [x, y])).filter(() => rng() < RELATION_PAIR_PROBABILITY);
  const relation = pairs.length ? String.raw`\{${pairs.map(([x, y]) => `(${x}, ${y})`).join(", ")}\}` : String.raw`\emptyset`;
  const rows = relationProperties(pairs).map((p) => `<tr><td>${p.name}</td><td>${p.holds ? "ja" : "nein"}</td><td>${p.reason}</td></tr>`).join("");
  return {
    task: String.raw`Sei \(A = \{a, b, c\}\) und \(R = ${relation}\) eine Relation auf \(A\). Ist \(R\) reflexiv, irreflexiv, symmetrisch, antisymmetrisch, transitiv?`,
    solution: `<table><thead><tr><th>Eigenschaft</th><th>gilt?</th><th>Begründung</th></tr></thead><tbody>${rows}</tbody></table>`
  };
};

const FACTOR_PRIMES = [2, 3, 5, 7, 11, 13, 17];
const FACTOR_MAX_VALUE = 20000;

function primeFactors(value: number): number[] {
  const factors: number[] = [];
  for (let divisor = 2; value > 1; divisor++) {
    while (value % divisor === 0) {
      factors.push(divisor);
      value /= divisor;
    }
  }
  return factors;
}

function factorPowers(factors: number[]): string {
  const counts = new Map<number, number>();
  for (const factor of factors) counts.set(factor, (counts.get(factor) ?? 0) + 1);
  return [...counts].map(([prime, count]) => (count === 1 ? String(prime) : `${prime}^{${count}}`)).join(String.raw` \cdot `);
}

export const primfaktorzerlegung: Generator = (rng) => {
  let value = 1;
  while (value < 30) {
    value = 1;
    for (let k = int(rng, 2, 5); k > 0; k--) {
      const prime = pick(rng, FACTOR_PRIMES);
      if (value * prime <= FACTOR_MAX_VALUE) value *= prime;
    }
  }
  const factors = primeFactors(value);
  let rest = value;
  const chain = factors.slice(0, -1).map((factor, index) => {
    rest /= factor;
    return `${factors.slice(0, index + 1).join(String.raw` \cdot `)} \\cdot ${rest}`;
  });
  return {
    task: String.raw`Finden Sie die Primfaktorzerlegung von \(${value}\). Begründen Sie vorab, warum es eine solche geben muss.`,
    solution: String.raw`Nach dem Satz über die Primfaktorzerlegung besitzt jede natürliche Zahl \(n \ne 1\) eine Darstellung als Produkt von Primzahlen. Schrittweise Division durch die kleinsten Primteiler: \[${[String(value), ...chain].join(" = ")}\] Also \(${value} = ${factorPowers(factors)}\).`
  };
};

/** Dezimalzahl mit Komma für Formeln; KaTeX setzt ein nacktes Komma sonst mit Abstand. */
function mathDecimal(value: number): string {
  return decimal(value).replace(",", "{,}");
}

interface RegressionResult {
  meanX: number;
  meanY: number;
  b: number;
  a: number;
}

/** Regressionsgerade nach Folie 311: b = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)², a = ȳ − b·x̄. */
function regression(points: Array<[number, number]>): RegressionResult {
  const meanX = points.reduce((sum, [x]) => sum + x, 0) / points.length;
  const meanY = points.reduce((sum, [, y]) => sum + y, 0) / points.length;
  const b = points.reduce((sum, [x, y]) => sum + (x - meanX) * (y - meanY), 0) / points.reduce((sum, [x]) => sum + (x - meanX) ** 2, 0);
  return { meanX, meanY, b, a: meanY - b * meanX };
}

const REGRESSION_POINTS = [3, 4];
const REGRESSION_MAX_X = 10;
const REGRESSION_MAX_Y = 20;

/** Einkommen (Euro) und Alter (Jahre) der sieben Arbeiter auf Folie 314. */
const REGRESSION_SLIDE_POINTS: Array<[number, number]> = [[20, 2750], [35, 3300], [45, 4300], [25, 2750], [50, 3250], [30, 2850], [40, 3200]];

export const linearRegression: Generator = (rng) => {
  const count = pick(rng, REGRESSION_POINTS);
  const xs = shuffle(rng, Array.from({ length: REGRESSION_MAX_X }, (_, index) => index + 1)).slice(0, count).sort((x, y) => x - y);
  const points: Array<[number, number]> = xs.map((x) => [x, int(rng, 0, REGRESSION_MAX_Y)]);
  const { meanX, meanY, b, a } = regression(points);
  const rows = points.map(([x, y], index) => `<tr><td>${index + 1}</td><td>${x}</td><td>${y}</td></tr>`).join("");
  const numerator = points.map(([x, y]) => `(${mathDecimal(x - meanX)}) \\cdot (${mathDecimal(y - meanY)})`).join(" + ");
  const denominator = points.map(([x]) => `(${mathDecimal(x - meanX)})^2`).join(" + ");
  return {
    task: `Bestimmen Sie die Regressionsgerade \\(y(x) = bx + a\\) nach der Methode der kleinsten Quadrate für die Datenpunkte<table><thead><tr><th>i</th><th>\\(x_i\\)</th><th>\\(y_i\\)</th></tr></thead><tbody>${rows}</tbody></table>`,
    solution: String.raw`Mittelwerte: \(\bar{x} = ${mathDecimal(meanX)}\), \(\bar{y} = ${mathDecimal(meanY)}\). \[b = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2} = \frac{${numerator}}{${denominator}} \approx ${mathDecimal(b)}\] \[a = \bar{y} - b\bar{x} \approx ${mathDecimal(meanY)} - ${mathDecimal(b)} \cdot ${mathDecimal(meanX)} \approx ${mathDecimal(a)}\] Also \(y(x) \approx ${mathDecimal(b)}x ${a < 0 ? "-" : "+"} ${mathDecimal(Math.abs(a))}\) (gerundet auf zwei Nachkommastellen).`
  };
};

/** Gewichte aus der Tabelle auf Folie 325, in Zehnteln, damit die Summe exakt bleibt. */
const NEURON_WEIGHT_TENTHS = [-10, -5, 0, 5, 10, 20];
const NEURON_THRESHOLD_TENTHS = [2, 5, 7, 10, 15];
const TENTHS = 10;

/** Ausgabe eines Neurons mit Treppenfunktion f_θ (Folie 328): 1, falls Σ g_i e_i ≥ θ, sonst 0. */
function stepNeuron(inputs: number[], weightTenths: number[], thresholdTenths: number): { sumTenths: number; output: number } {
  const sumTenths = inputs.reduce((sum, input, index) => sum + input * weightTenths[index], 0);
  return { sumTenths, output: sumTenths >= thresholdTenths ? 1 : 0 };
}

export const neuronTreppenfunktion: Generator = (rng) => {
  const count = int(rng, 2, 3);
  const inputs = Array.from({ length: count }, () => int(rng, 0, 1));
  const weights = Array.from({ length: count }, () => pick(rng, NEURON_WEIGHT_TENTHS));
  const threshold = pick(rng, NEURON_THRESHOLD_TENTHS);
  const { sumTenths, output } = stepNeuron(inputs, weights, threshold);
  const show = (tenths: number): string => mathDecimal(tenths / TENTHS);
  const terms = inputs.map((input, index) => `${weights[index] < 0 ? `(${show(weights[index])})` : show(weights[index])} \\cdot ${input}`).join(" + ");
  return {
    task: String.raw`Ein Neuron mit Treppenfunktion hat die Eingaben \((${inputs.join(", ")})\), die Gewichte \((${weights.map(show).join(";\ ")})\) und den Schwellenwert \(\theta = ${show(threshold)}\). Bestimmen Sie seine Ausgabe.`,
    solution: String.raw`Gewichtete Summe: \(S = \sum g_i e_i = ${terms} = ${show(sumTenths)}\). Treppenfunktion: \(f_\theta(S) = 1\), falls \(S \ge \theta\), sonst 0. Da \(${show(sumTenths)} ${output ? String.raw`\ge` : "<"} ${show(threshold)}\), ist die Ausgabe \(${output}\).`
  };
};

export function checkDisMaSlideExamples(id: string): string | null {
  switch (id) {
    case "dnf": {
      const majority = Array.from({ length: DNF_ROWS }, (_, row) => (row.toString(2).split("").filter((d) => d === "1").length >= 2 ? 1 : 0));
      const expected = [String.raw`\bar{a} * b * c`, String.raw`a * \bar{b} * c`, String.raw`a * b * \bar{c}`, "a * b * c"];
      return dnfTerms(majority).join(" + ") === expected.join(" + ") ? null : "Die Mehrheitsfunktion von Folie 99 ergibt eine andere disjunktive Normalform.";
    }
    case "dual-hex": {
      const cases: Array<[number, string, string]> = [[7, "111", "7"], [14, "1110", "E"], [15, "1111", "F"], [16, "10000", "10"], [27, "11011", "1B"]];
      const wrong = cases.find(([value, dual, hex]) => {
        const result = baseRepresentation(value);
        return (value <= 14 && result.dual !== dual) || (value >= 15 && result.hex !== hex);
      });
      return wrong ? `Dezimal ${wrong[0]} weicht von Folie 95 ab.` : null;
    }
    case "primfaktor": {
      const cases: Array<[number, string]> = [[30, String.raw`2 \cdot 3 \cdot 5`], [17, "17"], [1024, "2^{10}"], [6936, String.raw`2^{3} \cdot 3 \cdot 17^{2}`]];
      const wrong = cases.find(([value, expected]) => factorPowers(primeFactors(value)) !== expected);
      return wrong ? `Die Zerlegung von ${wrong[0]} weicht von Folie 167 ab.` : null;
    }
    case "relation": {
      const r1: Pair[] = [["a", "a"], ["c", "c"]];
      const r2: Pair[] = [["a", "c"], ["b", "b"], ["b", "c"], ["a", "a"], ["b", "a"], ["c", "c"]];
      const r2sym: Pair[] = [["a", "c"], ["b", "b"], ["b", "c"], ["a", "a"], ["c", "b"], ["c", "c"]];
      const r3sym: Pair[] = [["a", "c"], ["b", "b"], ["c", "a"]];
      const holds = (pairs: Pair[], name: string): boolean => relationProperties(pairs).find((p) => p.name === name)!.holds;
      const ok = !holds(r1, "reflexiv") && holds(r2, "reflexiv") && !holds([], "reflexiv") && holds(r1, "symmetrisch") && !holds(r2sym, "symmetrisch") && holds(r3sym, "symmetrisch") && holds([], "symmetrisch");
      return ok ? null : "Die Beispiele zu reflexiv und symmetrisch von Folien 126-134 werden anders bewertet.";
    }
    case "regression": {
      const { meanX, meanY, b, a } = regression(REGRESSION_SLIDE_POINTS);
      const ok = meanX === 35 && meanY === 3200 && decimal(Math.round(b * TENTHS) / TENTHS) === "35,4" && decimal(a) === "1962,5";
      return ok ? null : `Das Folienbeispiel ergibt x̄ = ${meanX}, ȳ = ${meanY}, b = ${b}, a = ${a} statt 35, 3200, 35,4 und 1962,5 (Folie 315).`;
    }
    case "neuron": {
      const outputs = [[0, 0], [0, 1], [1, 0], [1, 1]].map((inputs) => stepNeuron(inputs, [TENTHS, TENTHS], 5).output);
      return outputs.join("") === "0111" ? null : "Das Neuron für das „oder“ von Folie 336 liefert eine andere Tabelle.";
    }
    case "potenzmenge": {
      const subsets = subsetsOf(["a", "b"]).map(setStr).join(", ");
      return subsets === String.raw`\emptyset, \{a\}, \{b\}, \{a, b\}` ? null : "P({a, b}) weicht von Folie 52 ab.";
    }
    default:
      return null;
  }
}
