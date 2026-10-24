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

  const restTerm = rest === 0 ? "" : String.raw` ${rest < 0 ? "-" : "+"} \frac{${Math.abs(rest)}}{${divisor}}`;
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
      solution: String.raw`Zeile II ist das \(${k}\)-Fache von Zeile I. Die Zeilenoperation \(\mathrm{II} - ${par(k)} \cdot \mathrm{I}\) liefert die Nullzeile \(0 = 0\) — eine wahre Aussage, die die Lösungsmenge nicht einschränkt. Es verbleibt \(${polyLine(a11, a12)} = ${b1}\) mit unendlich vielen Lösungen: \(x_2\) frei wählbar und \[x_1 = ${a12 === 0 ? frac(b1, a11) : String.raw`\frac{${b1} ${a12 < 0 ? "+" : "-"} ${Math.abs(a12) === 1 ? "" : Math.abs(a12)} x_2}{${a11}}`}\]`
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

/** Linearfaktor (λ − r) als LaTeX; für r = 0 nur λ. */
function linearFactor(root: number): string {
  if (root === 0) return String.raw`\lambda`;
  return String.raw`(\lambda ${root < 0 ? "+" : "-"} ${Math.abs(root)})`;
}

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
      solution: String.raw`Charakteristisches Polynom über \(\det(A - \lambda E) = 0\): \[\det \begin{pmatrix} ${a} - \lambda & ${b} \\ ${c} & ${d} - \lambda \end{pmatrix} = \lambda^2 ${trace === 0 ? "" : `${trace < 0 ? "+" : "-"} ${Math.abs(trace) === 1 ? "" : Math.abs(trace)}\\lambda`} ${detValue === 0 ? "" : detValue < 0 ? `- ${-detValue}` : `+ ${detValue}`} = ${linearFactor(low)}${linearFactor(high)}\] Die Nullstellen des charakteristischen Polynoms sind die Eigenwerte: \(\lambda_1 = ${low}\), \(\lambda_2 = ${high}\). Die zugehörigen Eigenvektoren ergeben sich jeweils aus dem LGS \((A - \lambda E)\vec{v} = \vec{0}\).`
    };
  }

  return {
    task: String.raw`Bestimmen Sie die Eigenwerte der Matrix \[A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\]`,
    solution: String.raw`\(\det(A - \lambda E) = \lambda^2 - 1 = (\lambda + 1)(\lambda - 1)\), also \(\lambda_{1,2} = \pm 1\).`
  };
};

type SchedulingKind = "fcfs" | "sjf" | "rr" | "prio-np" | "prio-p";

interface SchedulingProcess {
  id: number;
  arrival: number;
  service: number;
  /** Größerer Wert bedeutet höhere Priorität. */
  priority: number;
}

interface SchedulingSegment {
  process: number;
  start: number;
  end: number;
}

interface SchedulingResult {
  segments: SchedulingSegment[];
  turnaround: number[];
  waiting: number[];
}

const SCHEDULING_LABELS: Record<SchedulingKind, string> = {
  fcfs: "First Come First Serve (FCFS)",
  sjf: "Shortest Job First (SJF)",
  rr: "Round Robin (RR)",
  "prio-np": "nicht-präemptives Priority-Scheduling (PRIO-NP)",
  "prio-p": "präemptives Priority-Scheduling (PRIO-P)"
};

const SCHEDULING_PROCESS_COUNT = 5;
const SCHEDULING_MAX_SERVICE = 7;
const SCHEDULING_MAX_ARRIVAL_GAP = 3;
const SCHEDULING_QUANTA = [1, 2, 3, 4];

/** Folienbeispiel: Ankunft, Bedienzeit und Priorität der Prozesse P1 bis P5. */
const SCHEDULING_SLIDE_PROCESSES: SchedulingProcess[] = [
  { id: 1, arrival: 0, service: 3, priority: 2 },
  { id: 2, arrival: 2, service: 6, priority: 4 },
  { id: 3, arrival: 4, service: 4, priority: 1 },
  { id: 4, arrival: 6, service: 5, priority: 5 },
  { id: 5, arrival: 8, service: 2, priority: 3 }
];

/** Laufzeiten und Wartezeiten des Folienbeispiels je Verfahren. */
const SCHEDULING_SLIDE_RESULTS: Array<{ kind: SchedulingKind; quantum?: number; turnaround: number[]; waiting: number[] }> = [
  { kind: "fcfs", turnaround: [3, 7, 9, 12, 12], waiting: [0, 1, 5, 7, 10] },
  { kind: "sjf", turnaround: [3, 7, 11, 14, 3], waiting: [0, 1, 7, 9, 1] },
  { kind: "rr", quantum: 1, turnaround: [4, 16, 13, 14, 7], waiting: [1, 10, 9, 9, 5] },
  { kind: "rr", quantum: 4, turnaround: [3, 15, 7, 14, 11], waiting: [0, 9, 3, 9, 9] },
  { kind: "prio-np", turnaround: [3, 7, 16, 8, 8], waiting: [0, 1, 12, 3, 6] },
  { kind: "prio-p", turnaround: [16, 11, 16, 5, 7], waiting: [13, 5, 12, 0, 5] }
];

/**
 * Simuliert die Verfahren nach den Regeln der Folien: Die Bereitliste ist nach Ankunft geordnet,
 * bei PRIO nach Priorität; bei RR kommen neu angekommene Prozesse vor den verdrängten.
 */
function simulateScheduling(kind: SchedulingKind, processes: SchedulingProcess[], quantum = 1): SchedulingResult {
  const remaining = new Map(processes.map((process) => [process.id, process.service]));
  const byId = new Map(processes.map((process) => [process.id, process]));
  const arrived = new Set<number>();
  const finish = new Map<number, number>();
  const segments: SchedulingSegment[] = [];
  let queue: number[] = [];
  let time = 0;

  const admit = (upTo: number): void => {
    for (const process of [...processes].sort((a, b) => a.arrival - b.arrival)) {
      if (process.arrival <= upTo && !arrived.has(process.id)) {
        arrived.add(process.id);
        queue.push(process.id);
      }
    }
  };
  const priorityOf = (id: number): number => byId.get(id)!.priority;
  const serviceOf = (id: number): number => byId.get(id)!.service;

  while (finish.size < processes.length) {
    admit(time);
    if (kind === "prio-np" || kind === "prio-p") queue.sort((a, b) => priorityOf(b) - priorityOf(a));
    if (queue.length === 0) {
      time += 1;
      continue;
    }
    const chosen = kind === "sjf" ? queue.reduce((best, id) => (serviceOf(id) < serviceOf(best) ? id : best)) : queue[0];
    queue = queue.filter((id) => id !== chosen);
    const start = time;
    let end = start + remaining.get(chosen)!;
    if (kind === "rr") end = start + Math.min(quantum, remaining.get(chosen)!);
    if (kind === "prio-p") {
      const preemptor = processes.find((p) => p.arrival > start && p.arrival < end && p.priority > priorityOf(chosen));
      if (preemptor) end = preemptor.arrival;
    }
    remaining.set(chosen, remaining.get(chosen)! - (end - start));
    time = end;
    if (remaining.get(chosen)! > 0) {
      admit(time);
      queue.push(chosen);
    } else {
      finish.set(chosen, time);
    }
    const last = segments[segments.length - 1];
    if (last && last.process === chosen && last.end === start) {
      last.end = end;
    } else {
      segments.push({ process: chosen, start, end });
    }
  }

  const turnaround = processes.map((process) => finish.get(process.id)! - process.arrival);
  return { segments, turnaround, waiting: turnaround.map((value, index) => value - processes[index].service) };
}

/** Zufällige Prozesse ohne Gleichstände; jede Ankunft liegt vor dem Ende der bisherigen Arbeit, die CPU läuft also nie leer. */
function randomSchedulingProcesses(rng: Rng): SchedulingProcess[] {
  const services = shuffle(rng, Array.from({ length: SCHEDULING_MAX_SERVICE }, (_, index) => index + 1)).slice(0, SCHEDULING_PROCESS_COUNT);
  const priorities = shuffle(rng, Array.from({ length: SCHEDULING_PROCESS_COUNT }, (_, index) => index + 1));
  const processes: SchedulingProcess[] = [];
  let arrival = 0;
  let work = 0;
  for (let index = 0; index < SCHEDULING_PROCESS_COUNT; index++) {
    if (index > 0) arrival = int(rng, arrival + 1, Math.min(arrival + SCHEDULING_MAX_ARRIVAL_GAP, work));
    processes.push({ id: index + 1, arrival, service: services[index], priority: priorities[index] });
    work += services[index];
  }
  return processes;
}

function shuffle<T>(rng: Rng, values: T[]): T[] {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index--) {
    const other = Math.floor(rng() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

function decimal(value: number): string {
  return String(Math.round(value * 100) / 100).replace(".", ",");
}

function average(values: number[]): string {
  const sum = values.reduce((total, value) => total + value, 0);
  return `(${values.join(" + ")}) / ${values.length} = ${decimal(sum / values.length)} ms`;
}

function schedulingTask(kind: SchedulingKind, processes: SchedulingProcess[], quantum: number): string {
  const withPriority = kind === "prio-np" || kind === "prio-p";
  const header = `<tr><th>Prozess</th><th>Ankunft</th><th>Bedienzeit</th>${withPriority ? "<th>Priorität</th>" : ""}</tr>`;
  const rows = processes
    .map((p) => `<tr><td>P${p.id}</td><td>${p.arrival}</td><td>${p.service}</td>${withPriority ? `<td>${p.priority}</td>` : ""}</tr>`)
    .join("");
  const variant = kind === "rr" ? ` mit Zeitquantum τ = ${quantum}` : "";
  const priorityHint = withPriority ? " Ein größerer Wert bedeutet eine höhere Priorität." : "";
  return `Fünf Prozesse kommen zu den angegebenen Zeitpunkten (in ms) in der Bereitliste an.${priorityHint} Bestimmen Sie für ${SCHEDULING_LABELS[kind]}${variant} die Belegung der CPU, die Lauf- und Wartezeit jedes Prozesses sowie die mittlere Lauf- und Wartezeit.<table><thead>${header}</thead><tbody>${rows}</tbody></table>`;
}

function schedulingSolution(processes: SchedulingProcess[], result: SchedulingResult): string {
  const timeline = result.segments.map((segment) => `${segment.start}–${segment.end} P${segment.process}`).join(", ");
  const rows = processes
    .map((p, index) => `<tr><td>P${p.id}</td><td>${p.arrival + result.turnaround[index]}</td><td>${result.turnaround[index]}</td><td>${result.waiting[index]}</td></tr>`)
    .join("");
  return `CPU-Belegung: ${timeline}.<table><thead><tr><th>Prozess</th><th>Ende</th><th>Laufzeit</th><th>Wartezeit</th></tr></thead><tbody>${rows}</tbody></table>Laufzeit = Ende − Ankunft, Wartezeit = Laufzeit − Bedienzeit.<br>Ø Laufzeit = ${average(result.turnaround)}<br>Ø Wartezeit = ${average(result.waiting)}`;
}

function schedulingGenerator(kind: SchedulingKind): Generator {
  return (rng) => {
    const processes = randomSchedulingProcesses(rng);
    const quantum = kind === "rr" ? pick(rng, SCHEDULING_QUANTA) : 1;
    return {
      task: schedulingTask(kind, processes, quantum),
      solution: schedulingSolution(processes, simulateScheduling(kind, processes, quantum))
    };
  };
}

/** Rechnet das Folienbeispiel nach; liefert eine Fehlermeldung, wenn ein Wert abweicht. */
function checkSchedulingSlideExample(kind: SchedulingKind): string | null {
  for (const expected of SCHEDULING_SLIDE_RESULTS.filter((result) => result.kind === kind)) {
    const result = simulateScheduling(expected.kind, SCHEDULING_SLIDE_PROCESSES, expected.quantum);
    const same = (a: number[], b: number[]): boolean => a.length === b.length && a.every((value, index) => value === b[index]);
    if (!same(result.turnaround, expected.turnaround) || !same(result.waiting, expected.waiting)) {
      const variant = expected.quantum ? ` (τ = ${expected.quantum})` : "";
      return `${expected.kind}${variant}: Laufzeiten ${result.turnaround.join(", ")}, Wartezeiten ${result.waiting.join(", ")} weichen vom Folienbeispiel ab.`;
    }
  }
  return null;
}

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

const potenzmenge: Generator = (rng) => {
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

const kartesischesProdukt: Generator = (rng) => {
  const pool = shuffle(rng, CARTESIAN_POOL);
  const a = pool.slice(0, int(rng, 2, CARTESIAN_MAX_SIZE)).sort((x, y) => x - y);
  const b = shuffle(rng, CARTESIAN_POOL).slice(0, int(rng, 2, CARTESIAN_MAX_SIZE)).sort((x, y) => x - y);
  const pairs = a.flatMap((x) => b.map((y) => `(${x}, ${y})`));
  return {
    task: String.raw`Geben Sie das kartesische Produkt \(A \times B\) der Mengen \(A = ${setStr(a.map(String))}\) und \(B = ${setStr(b.map(String))}\) an.`,
    solution: String.raw`\(A \times B\) enthält alle geordneten Paare \((a, b)\) mit \(a \in A\) und \(b \in B\): \[A \times B = \{${pairs.join(", ")}\}\] Das sind ${pairs.length} Paare.`
  };
};

const umkehrfunktionLinear: Generator = (rng) => {
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

const dualHexadezimal: Generator = (rng) => {
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

const disjunktiveNormalform: Generator = (rng) => {
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

const relationEigenschaften: Generator = (rng) => {
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

const primfaktorzerlegung: Generator = (rng) => {
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

const linearRegression: Generator = (rng) => {
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

const neuronTreppenfunktion: Generator = (rng) => {
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

function checkDisMaSlideExamples(id: string): string | null {
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

const GENERATORS: Record<string, Generator> = {
  "potenzmenge": potenzmenge,
  "kartesisches-produkt": kartesischesProdukt,
  "umkehrfunktion-linear": umkehrfunktionLinear,
  "dual-hexadezimal": dualHexadezimal,
  "disjunktive-normalform": disjunktiveNormalform,
  "relation-eigenschaften": relationEigenschaften,
  "primfaktorzerlegung": primfaktorzerlegung,
  "lineare-regression": linearRegression,
  "neuron-treppenfunktion": neuronTreppenfunktion,
  "scheduling-fcfs": schedulingGenerator("fcfs"),
  "scheduling-sjf": schedulingGenerator("sjf"),
  "scheduling-rr": schedulingGenerator("rr"),
  "scheduling-prio-np": schedulingGenerator("prio-np"),
  "scheduling-prio-p": schedulingGenerator("prio-p"),
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

/** Prüfungen, ob ein Generator das Folienbeispiel seines Verfahrens exakt nachrechnet. */
const SLIDE_EXAMPLE_CHECKS: Record<string, () => string | null> = {
  "scheduling-fcfs": () => checkSchedulingSlideExample("fcfs"),
  "scheduling-sjf": () => checkSchedulingSlideExample("sjf"),
  "scheduling-rr": () => checkSchedulingSlideExample("rr"),
  "scheduling-prio-np": () => checkSchedulingSlideExample("prio-np"),
  "scheduling-prio-p": () => checkSchedulingSlideExample("prio-p"),
  "potenzmenge": () => checkDisMaSlideExamples("potenzmenge"),
  "dual-hexadezimal": () => checkDisMaSlideExamples("dual-hex"),
  "disjunktive-normalform": () => checkDisMaSlideExamples("dnf"),
  "relation-eigenschaften": () => checkDisMaSlideExamples("relation"),
  "primfaktorzerlegung": () => checkDisMaSlideExamples("primfaktor"),
  "lineare-regression": () => checkDisMaSlideExamples("regression"),
  "neuron-treppenfunktion": () => checkDisMaSlideExamples("neuron")
};

/** Fehlermeldung, wenn der Generator sein Folienbeispiel nicht reproduziert; null, wenn alles stimmt oder es keins gibt. */
export function checkSlideExample(id: string): string | null {
  return SLIDE_EXAMPLE_CHECKS[id]?.() ?? null;
}

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
