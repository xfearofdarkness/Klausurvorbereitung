---
id: stetigkeit
title: Stetigkeit & Extrema
icon: ✏️
---

## Karte: Anschauliche Idee der Stetigkeit
quelle: VorlesungFolienLAA-2026.pdf, Folie 76

Wenn etwas „stetig“ verläuft, gibt es umgangssprachlich keine Brüche, Sprünge oder Risse. Diese Vorstellung findet sich beim Verlauf einer Funktion wieder: Der Funktionsgraph soll für ein bestimmtes Intervall in einem Zug gezeichnet werden können.

## Karte: Stetigkeit
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 77

Sei \(f: D \to \mathbb{R}\), \(D \subset \mathbb{R}\) der Definitionsbereich und \(\tilde{x} \in D\). \(f\) heißt in \(\tilde{x}\) stetig, falls der Grenzwert \(\lim_{x \to \tilde{x}} f(x)\) existiert und \[\lim_{x \to \tilde{x}} f(x) = f(\tilde{x})\] gilt. Ist \(f\) in allen Punkten des Definitionsbereichs stetig, so heißt \(f\) stetig auf ganz \(D\).

## Karte: Wichtige stetige Funktionen
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 80

Diverse wichtige Funktionen sind auf ganz \(\mathbb{R}\) stetig: Polynome, die Exponentialfunktion \(e^x\), der Logarithmus \(\ln x\) sowie Sinus und Kosinus. Die Funktion \(f(x) := \frac{1}{x}\) ist in \(x = 0\) nicht definiert, sonst aber überall stetig.

## Karte: Kombinationen stetiger Funktionen
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folien 81-82

Summen, Differenzen, Produkte, Quotienten und Kompositionen stetiger Funktionen sind (dort wo definiert) stetig. Damit wird nochmals deutlich, dass Polynome stetig sind, und auch rationale Funktionen, denn diese sind der Quotient von Polynomen.

## Karte: Globales Maximum und Minimum
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 83

Sei \(f: D \to \mathbb{R}\). \(f\) nimmt in \(\tilde{x} \in D\) das (globale) Maximum an, wenn gilt: \[f(\tilde{x}) \ge f(x) \text{ für alle } x \in D\] Schreibweise: \(f(\tilde{x}) = \max_{x \in D} f(x)\). Gilt sogar \(>\) anstelle von \(\ge\), spricht man von einem strengen Maximum. Analog wird das Minimum (\(\min\)) definiert.

## Karte: Lokales Maximum und Minimum
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 84

Sei \(f: D \to \mathbb{R}\). \(f\) nimmt in \(\tilde{x} \in D\) das lokale Maximum an, falls ein \(\varepsilon > 0\) existiert, sodass gilt: \[f(\tilde{x}) \ge f(x) \text{ für alle } x \in D \text{ mit } |x - \tilde{x}| < \varepsilon\] Analog wird das lokale Minimum definiert.

## Frage: Was ist die anschauliche Vorstellung von Stetigkeit?
id: 74e7ve
quelle: VorlesungFolienLAA-2026.pdf, Folie 76

Es gibt keine Brüche, Sprünge oder Risse: Der Funktionsgraph soll sich für ein bestimmtes Intervall in einem Zug zeichnen lassen.

## Frage: Wann heißt eine Funktion \(f\) im Punkt \(\tilde{x}\) stetig?
id: 1mgx15e
quelle: VorlesungFolienLAA-2026.pdf, Folie 77

Wenn der Grenzwert \(\lim_{x \to \tilde{x}} f(x)\) existiert und \(\lim_{x \to \tilde{x}} f(x) = f(\tilde{x})\) gilt. Ist \(f\) in allen Punkten des Definitionsbereichs stetig, heißt \(f\) stetig auf ganz \(D\).

## Frage: Welche wichtigen Funktionen sind auf ganz \(\mathbb{R}\) stetig?
id: 379nwc
quelle: VorlesungFolienLAA-2026.pdf, Folie 80

Polynome, die Exponentialfunktion \(e^x\), der Logarithmus \(\ln x\) sowie Sinus und Kosinus. Die Funktion \(\frac{1}{x}\) ist in \(x = 0\) nicht definiert, sonst aber überall stetig.

## Frage: Was gilt für Summen, Produkte, Quotienten und Kompositionen stetiger Funktionen?
id: 1uuzrqg
quelle: VorlesungFolienLAA-2026.pdf, Folien 81-82

Sie sind (dort, wo sie definiert sind) wieder stetig. Deshalb sind auch rationale Funktionen stetig: sie sind Quotienten von Polynomen.

## Frage: Wann nimmt \(f\) in \(\tilde{x}\) das globale Maximum an?
id: 1mocpyj
quelle: VorlesungFolienLAA-2026.pdf, Folie 83

Wenn \(f(\tilde{x}) \ge f(x)\) für alle \(x \in D\) gilt; Schreibweise \(f(\tilde{x}) = \max_{x \in D} f(x)\). Gilt sogar \(>\) anstelle von \(\ge\), spricht man von einem strengen Maximum. Analog wird das Minimum definiert.

## Frage: Definieren Sie den Begriff des lokalen Minimums.
id: 1zzjak
quelle: VorlesungFolienLAA-2026.pdf, Folie 84

\(f\) nimmt in \(\tilde{x}\) ein lokales Minimum an, falls ein \(\varepsilon > 0\) existiert, sodass \(f(\tilde{x}) \le f(x)\) für alle \(x \in D\) mit \(|x - \tilde{x}| < \varepsilon\) (analog zur Definition des lokalen Maximums mit \(\ge\)).

## Frage: Wann nimmt \(f\) in \(\tilde{x}\) ein lokales Maximum an?
id: 1c379um
quelle: VorlesungFolienLAA-2026.pdf, Folie 84

Wenn ein \(\varepsilon > 0\) existiert, sodass \(f(\tilde{x}) \ge f(x)\) für alle \(x \in D\) mit \(|x - \tilde{x}| < \varepsilon\) gilt. Die Bedingung muss also nur in einer Umgebung von \(\tilde{x}\) gelten, nicht auf ganz \(D\).
