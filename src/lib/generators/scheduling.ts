import { decimal, int, pick, shuffle, type Generator, type Rng } from "./shared";

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

export function schedulingGenerator(kind: SchedulingKind): Generator {
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
export function checkSchedulingSlideExample(kind: SchedulingKind): string | null {
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
