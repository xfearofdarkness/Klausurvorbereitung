/** Die Rechenmodule als eigener Chunk: nur Üben braucht sie, nicht der Start des Trainers. */
export type GeneratorModule = typeof import("./exerciseGenerators");

let pending: Promise<GeneratorModule> | null = null;

export function loadGenerators(): Promise<GeneratorModule> {
  pending ??= import("./exerciseGenerators");
  return pending;
}
