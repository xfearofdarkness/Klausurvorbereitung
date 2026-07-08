export interface GeneratedTask {
  task: string;
  solution: string;
}

type Rng = () => number;
type Generator = (rng: Rng) => GeneratedTask;

/** Deterministischer RNG (mulberry32), damit eine Aufgabe pro Seed stabil bleibt. */
function mulberry32(seed: number): Rng {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function int(rng: Rng, min: number, max: number): number {
  return min + Math.floor(rng() * (max - min + 1));
}

function nonZeroInt(rng: Rng, min: number, max: number): number {
  let value = 0;
  while (value === 0) {
    value = int(rng, min, max);
  }
  return value;
}

function pick<T>(rng: Rng, values: T[]): T {
  return values[Math.floor(rng() * values.length)];
}

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

/** Gekürzter Bruch als LaTeX; ganze Zahlen ohne Bruchstrich. */
function frac(numerator: number, denominator: number): string {
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
function par(value: number): string {
  return value < 0 ? `(${value})` : String(value);
}

/** Terme aufsummieren: "3 + (−2) − 4" wird als "3 - 2 - 4" geschrieben. */
function sumTerms(first: string, ...rest: Array<{ sign: 1 | -1; text: string }>): string {
  let out = first;
  for (const term of rest) {
    out += term.sign < 0 ? ` - ${term.text}` : ` + ${term.text}`;
  }
  return out;
}

/** Komplexe Zahl a + bi als LaTeX. */
function complexStr(a: number, b: number): string {
  const i = String.raw`\mathrm{i}`;
  if (b === 0) return String(a);
  const imag = b === 1 ? i : b === -1 ? `-${i}` : `${b}${i}`;
  if (a === 0) return imag;
  const abs = Math.abs(b);
  const imagAbs = abs === 1 ? i : `${abs}${i}`;
  return `${a} ${b < 0 ? "-" : "+"} ${imagAbs}`;
}

/** Polynom aus absteigenden Koeffizienten, z. B. [1, -2, 0, 3] -> x^3 - 2x^2 + 3. */
function polyStr(coefficients: number[]): string {
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

function pmatrix(rows: number[][]): string {
  const body = rows.map((row) => row.join(" & ")).join(String.raw` \\ `);
  return String.raw`\begin{pmatrix} ${body} \end{pmatrix}`;
}

function vec(values: number[]): string {
  return pmatrix(values.map((value) => [value]));
}

function det3(m: number[][]): number {
  return (
    m[0][0] * m[1][1] * m[2][2] +
    m[0][1] * m[1][2] * m[2][0] +
    m[0][2] * m[1][0] * m[2][1] -
    m[2][0] * m[1][1] * m[0][2] -
    m[2][1] * m[1][2] * m[0][0] -
    m[2][2] * m[1][0] * m[0][1]
  );
}

function sarrusTerms(m: number[][]): string {
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

const komplexProduktQuotient: Generator = (rng) => {
  const a = int(rng, -6, 6);
  const b = nonZeroInt(rng, -6, 6);
  let c = int(rng, -6, 6);
  let d = int(rng, -6, 6);
  while (c === 0 && d === 0) {
    c = int(rng, -6, 6);
    d = int(rng, -6, 6);
  }

  const prodRe = a * c - b * d;
  const prodIm = a * d + b * c;
  const quotDenominator = c * c + d * d;
  const quotReNumerator = a * c + b * d;
  const quotImNumerator = b * c - a * d;

  const z1 = complexStr(a, b);
  const z2 = complexStr(c, d);
  const conj = complexStr(c, -d);

  const quotIm = frac(quotImNumerator, quotDenominator);
  const quotImTerm =
    quotImNumerator === 0
      ? ""
      : quotImNumerator < 0
        ? String.raw` - ${frac(-quotImNumerator, quotDenominator)}\,\mathrm{i}`
        : String.raw` + ${quotIm}\,\mathrm{i}`;

  return {
    task: String.raw`Gegeben sind \(z_1 = ${z1}\) und \(z_2 = ${z2}\). Berechnen Sie \(z_1 \cdot z_2\) sowie \(\frac{z_1}{z_2}\) (jeweils Real- und Imaginärteil).`,
    solution: String.raw`Produkt nach der Multiplikationsformel \((ac - bd) + (ad + bc)\mathrm{i}\): \[z_1 z_2 = (${par(a)} \cdot ${par(c)} - ${par(b)} \cdot ${par(d)}) + (${par(a)} \cdot ${par(d)} + ${par(b)} \cdot ${par(c)})\mathrm{i} = ${complexStr(prodRe, prodIm)}\] Quotient durch Erweitern mit der konjugierten Zahl \(\bar{z}_2 = ${conj}\): \[\frac{z_1}{z_2} = \frac{(${z1})(${conj})}{${par(c)}^2 + ${par(d)}^2} = \frac{${quotReNumerator}}{${quotDenominator}} + \frac{${quotImNumerator}}{${quotDenominator}}\,\mathrm{i} = ${frac(quotReNumerator, quotDenominator)}${quotImTerm}\] Also \(\operatorname{Re}\frac{z_1}{z_2} = ${frac(quotReNumerator, quotDenominator)}\) und \(\operatorname{Im}\frac{z_1}{z_2} = ${quotIm}\).`
  };
};

const polynomdivision: Generator = (rng) => {
  const a = nonZeroInt(rng, -3, 3);
  const p = int(rng, -4, 4);
  const r = nonZeroInt(rng, -4, 4);
  const rest = rng() < 0.5 ? 0 : nonZeroInt(rng, -5, 5);

  const dividend = [1, p - a, r - a * p, -a * r + rest];
  const divisor = polyStr([1, -a]);
  const quotient = polyStr([1, p, r]);

  const restTerm = rest === 0 ? "" : String.raw` + \frac{${rest}}{${divisor}}`;
  const probe =
    rest === 0
      ? String.raw`Probe: \((${divisor})(${quotient}) = ${polyStr(dividend)}\).`
      : String.raw`Probe: \((${divisor})(${quotient}) + ${par(rest)} = ${polyStr(dividend)}\).`;

  return {
    task: String.raw`Führen Sie die Polynomdivision durch: \[(${polyStr(dividend)}) : (${divisor}) = \;?\]`,
    solution: String.raw`\[(${polyStr(dividend)}) : (${divisor}) = ${quotient}${restTerm}\] ${rest === 0 ? "Die Division geht ohne Rest auf." : String.raw`Es bleibt der Rest \(${rest}\).`} ${probe}`
  };
};

const matrixprodukt2x2: Generator = (rng) => {
  const A = [
    [int(rng, -5, 5), int(rng, -5, 5)],
    [int(rng, -5, 5), int(rng, -5, 5)]
  ];
  const B = [
    [int(rng, -5, 5), int(rng, -5, 5)],
    [int(rng, -5, 5), int(rng, -5, 5)]
  ];
  const C = [
    [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
    [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]
  ];

  const entry = (i: number, k: number): string =>
    String.raw`c_{${i + 1}${k + 1}} &= ${par(A[i][0])} \cdot ${par(B[0][k])} + ${par(A[i][1])} \cdot ${par(B[1][k])} = ${C[i][k]}`;

  return {
    task: String.raw`Berechnen Sie das Matrixprodukt \[AB = ${pmatrix(A)} ${pmatrix(B)}\] („Zeile mal Spalte“: Zeilen der linken Matrix auf die Spalten der rechten legen, multiplizieren und addieren).`,
    solution: String.raw`\[\begin{aligned} ${entry(0, 0)} \\ ${entry(0, 1)} \\ ${entry(1, 0)} \\ ${entry(1, 1)} \end{aligned}\] \[AB = ${pmatrix(C)}\]`
  };
};

const gaussLgs2x2: Generator = (rng) => {
  const caseRoll = rng();

  if (caseRoll < 0.6) {
    const x1 = int(rng, -4, 4);
    const x2 = int(rng, -4, 4);
    let a11 = 0;
    let a12 = 0;
    let a21 = 0;
    let a22 = 0;
    let detA = 0;
    while (detA === 0 || a11 === 0) {
      a11 = int(rng, -5, 5);
      a12 = int(rng, -5, 5);
      a21 = int(rng, -5, 5);
      a22 = int(rng, -5, 5);
      detA = a11 * a22 - a21 * a12;
    }
    const b1 = a11 * x1 + a12 * x2;
    const b2 = a21 * x1 + a22 * x2;
    const rhs2 = a11 * b2 - a21 * b1;

    return {
      task: String.raw`Berechnen Sie mithilfe des Gauß-Algorithmus sämtliche Lösungen des linearen Gleichungssystems \[\begin{aligned} ${polyLine(a11, a12)} &= ${b1} \\ ${polyLine(a21, a22)} &= ${b2} \end{aligned}\]`,
      solution: String.raw`Elementare Zeilenoperation \(${par(a11)} \cdot \mathrm{II} - ${par(a21)} \cdot \mathrm{I}\) eliminiert \(x_1\): \[(${par(a11)} \cdot ${par(a22)} - ${par(a21)} \cdot ${par(a12)})\, x_2 = ${par(a11)} \cdot ${par(b2)} - ${par(a21)} \cdot ${par(b1)} \;\Rightarrow\; ${detA}\, x_2 = ${rhs2} \;\Rightarrow\; x_2 = ${x2}\] Einsetzen in Zeile I: \[x_1 = \frac{${b1} - ${par(a12)} \cdot ${par(x2)}}{${a11}} = ${x1}\] Das LGS hat die eindeutige Lösung \(x_1 = ${x1}\), \(x_2 = ${x2}\).`
    };
  }

  const a11 = nonZeroInt(rng, -4, 4);
  const a12 = int(rng, -4, 4);
  const b1 = int(rng, -6, 6);
  const k = nonZeroInt(rng, -3, 3);

  if (caseRoll < 0.8) {
    return {
      task: String.raw`Berechnen Sie mithilfe des Gauß-Algorithmus sämtliche Lösungen des linearen Gleichungssystems \[\begin{aligned} ${polyLine(a11, a12)} &= ${b1} \\ ${polyLine(k * a11, k * a12)} &= ${k * b1} \end{aligned}\]`,
      solution: String.raw`Zeile II ist das \(${k}\)-Fache von Zeile I. Die Zeilenoperation \(\mathrm{II} - ${par(k)} \cdot \mathrm{I}\) liefert die Nullzeile \(0 = 0\) — eine wahre Aussage, die die Lösungsmenge nicht einschränkt. Es verbleibt \(${polyLine(a11, a12)} = ${b1}\) mit unendlich vielen Lösungen: \(x_2\) frei wählbar und \[x_1 = \frac{${b1} ${a12 < 0 ? "+" : "-"} ${Math.abs(a12)} x_2}{${a11}}\]`
    };
  }

  const m = nonZeroInt(rng, -4, 4);
  return {
    task: String.raw`Berechnen Sie mithilfe des Gauß-Algorithmus sämtliche Lösungen des linearen Gleichungssystems \[\begin{aligned} ${polyLine(a11, a12)} &= ${b1} \\ ${polyLine(k * a11, k * a12)} &= ${k * b1 + m} \end{aligned}\]`,
    solution: String.raw`Die Zeilenoperation \(\mathrm{II} - ${par(k)} \cdot \mathrm{I}\) liefert die Zeile \(0 = ${m}\) — eine falsche Aussage. Das ursprüngliche LGS hat keine Lösung.`
  };
};

/** Zeile a·x1 + b·x2 als LaTeX. */
function polyLine(a: number, b: number): string {
  const first = a === 1 ? "x_1" : a === -1 ? "-x_1" : `${a} x_1`;
  if (b === 0) return first;
  const abs = Math.abs(b);
  const second = abs === 1 ? "x_2" : `${abs} x_2`;
  return `${first} ${b < 0 ? "-" : "+"} ${second}`;
}

const determinante3x3: Generator = (rng) => {
  const m = [
    [int(rng, -4, 4), int(rng, -4, 4), int(rng, -4, 4)],
    [int(rng, -4, 4), int(rng, -4, 4), int(rng, -4, 4)],
    [int(rng, -4, 4), int(rng, -4, 4), int(rng, -4, 4)]
  ];
  const value = det3(m);

  return {
    task: String.raw`Berechnen Sie die Determinante der Matrix \[A = ${pmatrix(m)}\]`,
    solution: String.raw`Mit der Regel von Sarrus (die ersten beiden Spalten hinten anschreiben; Produkte entlang der fallenden Diagonalen addieren, entlang der steigenden subtrahieren): \[\det A = ${sarrusTerms(m)} = ${value}\]`
  };
};

const unabhaengigInvertierbar: Generator = (rng) => {
  let v1: number[] = [];
  let v2: number[] = [];
  let v3: number[] = [];
  const dependent = rng() < 0.5;
  let alpha = 0;
  let beta = 0;

  for (let attempt = 0; attempt < 100; attempt += 1) {
    v1 = [int(rng, -4, 4), int(rng, -4, 4), int(rng, -4, 4)];
    v2 = [int(rng, -4, 4), int(rng, -4, 4), int(rng, -4, 4)];
    const cross = [
      v1[1] * v2[2] - v1[2] * v2[1],
      v1[2] * v2[0] - v1[0] * v2[2],
      v1[0] * v2[1] - v1[1] * v2[0]
    ];
    if (cross.every((c) => c === 0)) continue;

    if (dependent) {
      alpha = pick(rng, [-2, -1, 1, 2]);
      beta = pick(rng, [-2, -1, 1, 2]);
      v3 = [alpha * v1[0] + beta * v2[0], alpha * v1[1] + beta * v2[1], alpha * v1[2] + beta * v2[2]];
      if (v3.every((c) => Math.abs(c) <= 9)) break;
    } else {
      v3 = [int(rng, -4, 4), int(rng, -4, 4), int(rng, -4, 4)];
      const candidate = [
        [v1[0], v2[0], v3[0]],
        [v1[1], v2[1], v3[1]],
        [v1[2], v2[2], v3[2]]
      ];
      if (det3(candidate) !== 0) break;
    }
  }

  const matrix = [
    [v1[0], v2[0], v3[0]],
    [v1[1], v2[1], v3[1]],
    [v1[2], v2[2], v3[2]]
  ];
  const value = det3(matrix);

  const alphaStr = alpha === 1 ? "" : alpha === -1 ? "-" : `${alpha} \\cdot `;
  const betaAbs = Math.abs(beta) === 1 ? "" : `${Math.abs(beta)} \\cdot `;
  const relation =
    dependent && value === 0
      ? String.raw` — hier gilt \(\vec{v}_3 = ${alphaStr}\vec{v}_1 ${beta < 0 ? "-" : "+"} ${betaAbs}\vec{v}_2\)`
      : "";

  return {
    task: String.raw`Überprüfen Sie mithilfe von Determinanten, ob die Vektoren \[\vec{v}_1 = ${vec(v1)}, \quad \vec{v}_2 = ${vec(v2)}, \quad \vec{v}_3 = ${vec(v3)}\] linear abhängig oder linear unabhängig sind. Ist die Matrix \(A\) mit diesen Spaltenvektoren invertierbar, und welchen Rang hat sie?`,
    solution:
      value !== 0
        ? String.raw`Die Vektoren als Spalten in eine Matrix schreiben und die Determinante berechnen (Sarrus): \[\det A = ${sarrusTerms(matrix)} = ${value} \ne 0\] Nach dem Äquivalenzsatz sind die Vektoren linear unabhängig, es gilt \(\operatorname{Rang} A = 3\), und \(A^{-1}\) existiert.`
        : String.raw`Die Vektoren als Spalten in eine Matrix schreiben und die Determinante berechnen (Sarrus): \[\det A = ${sarrusTerms(matrix)} = 0\] Die Vektoren sind linear abhängig${relation}. Da \(\vec{v}_1\) und \(\vec{v}_2\) nicht kollinear gewählt sind, gilt \(\operatorname{Rang} A = 2\). Nach dem Äquivalenzsatz ist \(A\) nicht invertierbar.`
  };
};

const kreuzprodukt: Generator = (rng) => {
  let x: number[] = [];
  let y: number[] = [];
  let result: number[] = [];
  do {
    x = [int(rng, -5, 5), int(rng, -5, 5), int(rng, -5, 5)];
    y = [int(rng, -5, 5), int(rng, -5, 5), int(rng, -5, 5)];
    result = [x[1] * y[2] - x[2] * y[1], x[2] * y[0] - x[0] * y[2], x[0] * y[1] - x[1] * y[0]];
  } while (result.every((c) => c === 0));

  return {
    task: String.raw`Berechnen Sie das Kreuzprodukt \(\vec{x} \times \vec{y}\) für \[\vec{x} = ${vec(x)}, \qquad \vec{y} = ${vec(y)}\]`,
    solution: String.raw`Nach der Definition des Kreuzprodukts: \[\vec{x} \times \vec{y} = \begin{pmatrix} ${par(x[1])} \cdot ${par(y[2])} - ${par(x[2])} \cdot ${par(y[1])} \\ ${par(x[2])} \cdot ${par(y[0])} - ${par(x[0])} \cdot ${par(y[2])} \\ ${par(x[0])} \cdot ${par(y[1])} - ${par(x[1])} \cdot ${par(y[0])} \end{pmatrix} = ${vec(result)}\] Probe: Das Ergebnis steht senkrecht auf \(\vec{x}\) und \(\vec{y}\), z. B. \(\langle\vec{x} \times \vec{y}, \vec{x}\rangle = ${sumTerms(
      `${par(result[0])} \\cdot ${par(x[0])}`,
      { sign: 1, text: `${par(result[1])} \\cdot ${par(x[1])}` },
      { sign: 1, text: `${par(result[2])} \\cdot ${par(x[2])}` }
    )} = 0\).`
  };
};

const PYTHAGORAS_3D: number[][] = [
  [1, 2, 2],
  [2, 3, 6],
  [1, 4, 8],
  [4, 4, 7],
  [2, 6, 9],
  [6, 6, 7],
  [2, 10, 11],
  [3, 4, 12]
];

const PYTHAGORAS_2D: number[][] = [
  [3, 4],
  [6, 8],
  [5, 12],
  [8, 15],
  [9, 12],
  [7, 24],
  [20, 21]
];

const vektorNormieren: Generator = (rng) => {
  const base = rng() < 0.5 ? pick(rng, PYTHAGORAS_2D) : pick(rng, PYTHAGORAS_3D);
  const values = [...base]
    .sort(() => rng() - 0.5)
    .map((value) => (rng() < 0.5 ? -value : value));
  const normSquared = values.reduce((sum, value) => sum + value * value, 0);
  const norm = Math.round(Math.sqrt(normSquared));
  const squares = values.map((value) => `${par(value)}^2`).join(" + ");
  const normalized = values.map((value) => frac(value, norm));

  return {
    task: String.raw`Normieren Sie den Vektor \[\vec{v} = ${vec(values)}\]`,
    solution: String.raw`Zuerst die Standardnorm berechnen: \[\lVert\vec{v}\rVert = \sqrt{${squares}} = \sqrt{${normSquared}} = ${norm}\] Der normierte Vektor ist \(\frac{1}{\lVert\vec{v}\rVert}\vec{v}\): \[\frac{1}{${norm}} ${vec(values)} = \begin{pmatrix} ${normalized.join(String.raw` \\ `)} \end{pmatrix}\] Er hat die Länge 1.`
  };
};

const skalarproduktWinkel: Generator = (rng) => {
  let v: number[] = [];
  let w: number[] = [];
  do {
    v = [int(rng, -4, 4), int(rng, -4, 4), int(rng, -4, 4)];
    w = [int(rng, -4, 4), int(rng, -4, 4), int(rng, -4, 4)];
  } while (v.every((c) => c === 0) || w.every((c) => c === 0));

  const s = v[0] * w[0] + v[1] * w[1] + v[2] * w[2];
  const nv = v.reduce((sum, value) => sum + value * value, 0);
  const nw = w.reduce((sum, value) => sum + value * value, 0);
  const cos = s / (Math.sqrt(nv) * Math.sqrt(nw));
  const degrees = (Math.acos(Math.min(1, Math.max(-1, cos))) * 180) / Math.PI;

  const dotTerms = sumTerms(
    `${par(v[0])} \\cdot ${par(w[0])}`,
    { sign: 1, text: `${par(v[1])} \\cdot ${par(w[1])}` },
    { sign: 1, text: `${par(v[2])} \\cdot ${par(w[2])}` }
  );

  const orthogonal = s === 0;
  return {
    task: String.raw`Berechnen Sie den Winkel zwischen den Vektoren \[\vec{v} = ${vec(v)} \qquad \text{und} \qquad \vec{w} = ${vec(w)}\]`,
    solution: String.raw`Skalarprodukt: \(\langle\vec{v}, \vec{w}\rangle = ${dotTerms} = ${s}\). Normen: \(\lVert\vec{v}\rVert = \sqrt{${nv}}\), \(\lVert\vec{w}\rVert = \sqrt{${nw}}\). Aus der Winkelformel \(\langle\vec{v}, \vec{w}\rangle = \lVert\vec{v}\rVert \lVert\vec{w}\rVert \cos\sphericalangle(\vec{v}, \vec{w})\) folgt: \[\cos\sphericalangle(\vec{v}, \vec{w}) = \frac{${s}}{\sqrt{${nv}} \cdot \sqrt{${nw}}} \approx ${cos.toFixed(4)}\] ${
      orthogonal
        ? String.raw`Wegen \(\langle\vec{v}, \vec{w}\rangle = 0\) sind die Vektoren orthogonal: \(\sphericalangle(\vec{v}, \vec{w}) = 90^\circ\).`
        : String.raw`Damit ist \(\sphericalangle(\vec{v}, \vec{w}) = \arccos(${cos.toFixed(4)}) \approx ${degrees.toFixed(1)}^\circ\).`
    }`
  };
};

const eigenwerte2x2: Generator = (rng) => {
  for (let attempt = 0; attempt < 200; attempt += 1) {
    const lambda1 = int(rng, -4, 4);
    const lambda2 = int(rng, -4, 4);
    if (lambda1 === lambda2) continue;

    const a = int(rng, -4, 4);
    const d = lambda1 + lambda2 - a;
    if (Math.abs(d) > 6) continue;
    const m = a * d - lambda1 * lambda2;

    let b = 0;
    let c = 0;
    if (m === 0) {
      b = nonZeroInt(rng, -4, 4);
      c = 0;
    } else {
      const divisors: number[] = [];
      for (let candidate = 1; candidate <= Math.abs(m); candidate += 1) {
        if (m % candidate === 0 && Math.abs(m / candidate) <= 8 && candidate <= 8) {
          divisors.push(candidate);
        }
      }
      if (divisors.length === 0) continue;
      b = pick(rng, divisors);
      c = m / b;
      if (rng() < 0.5) {
        b = -b;
        c = -c;
      }
    }

    const trace = a + d;
    const detValue = a * d - b * c;
    const matrix = [
      [a, b],
      [c, d]
    ];
    const [low, high] = lambda1 < lambda2 ? [lambda1, lambda2] : [lambda2, lambda1];

    return {
      task: String.raw`Bestimmen Sie die Eigenwerte der Matrix \[A = ${pmatrix(matrix)}\]`,
      solution: String.raw`Charakteristisches Polynom über \(\det(A - \lambda E) = 0\): \[\det \begin{pmatrix} ${a} - \lambda & ${b} \\ ${c} & ${d} - \lambda \end{pmatrix} = \lambda^2 ${trace === 0 ? "" : trace < 0 ? `+ ${-trace}\\lambda` : `- ${trace}\\lambda`} ${detValue === 0 ? "" : detValue < 0 ? `- ${-detValue}` : `+ ${detValue}`} = (\lambda ${low < 0 ? `+ ${-low}` : `- ${low}`})(\lambda ${high < 0 ? `+ ${-high}` : `- ${high}`})\] Die Nullstellen des charakteristischen Polynoms sind die Eigenwerte: \(\lambda_1 = ${low}\), \(\lambda_2 = ${high}\). Die zugehörigen Eigenvektoren ergeben sich jeweils aus dem LGS \((A - \lambda E)\vec{v} = \vec{0}\).`
    };
  }

  return {
    task: String.raw`Bestimmen Sie die Eigenwerte der Matrix \[A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\]`,
    solution: String.raw`\(\det(A - \lambda E) = \lambda^2 - 1 = (\lambda + 1)(\lambda - 1)\), also \(\lambda_{1,2} = \pm 1\).`
  };
};

const GENERATORS: Record<string, Generator> = {
  "komplex-produkt-quotient": komplexProduktQuotient,
  "polynomdivision": polynomdivision,
  "matrixprodukt-2x2": matrixprodukt2x2,
  "gauss-lgs-2x2": gaussLgs2x2,
  "determinante-3x3": determinante3x3,
  "unabhaengig-invertierbar": unabhaengigInvertierbar,
  "kreuzprodukt": kreuzprodukt,
  "vektor-normieren": vektorNormieren,
  "skalarprodukt-winkel": skalarproduktWinkel,
  "eigenwerte-2x2": eigenwerte2x2
};

export function hasGenerator(id: string): boolean {
  return Object.prototype.hasOwnProperty.call(GENERATORS, id);
}

export function listGenerators(): string[] {
  return Object.keys(GENERATORS);
}

export function generateTask(id: string, seed: number): GeneratedTask | null {
  const generator = GENERATORS[id];
  if (!generator) return null;
  return generator(mulberry32(seed));
}

export function randomSeed(): number {
  return Math.floor(Math.random() * 0xffffffff);
}
