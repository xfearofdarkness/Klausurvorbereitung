import { checkDisMaSlideExamples, dualHexadezimal, disjunktiveNormalform, kartesischesProdukt, linearRegression, neuronTreppenfunktion, potenzmenge, primfaktorzerlegung, relationEigenschaften, umkehrfunktionLinear } from "./generators/disma";
import { determinante3x3, eigenwerte2x2, gaussLgs2x2, komplexProduktQuotient, kreuzprodukt, matrixprodukt2x2, polynomdivision, skalarproduktWinkel, unabhaengigInvertierbar, vektorNormieren } from "./generators/laa";
import { checkSchedulingSlideExample, schedulingGenerator } from "./generators/scheduling";
import { mulberry32, type GeneratedTask, type Generator } from "./generators/shared";

export type { GeneratedTask };

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
