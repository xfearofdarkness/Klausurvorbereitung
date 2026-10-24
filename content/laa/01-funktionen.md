---
id: funktionen
title: Funktionen & Polynome
icon: 📈
---

## Karte: Beschränkte Funktionen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 8

Eine Funktion \(f: D \to \mathbb{R}\) heißt beschränkt, wenn es Zahlen \(M, N \in \mathbb{R}\) gibt, sodass für alle \(x \in D\) gilt: \[M \le f(x) \le N\] \(M\) heißt untere Schranke, \(N\) obere Schranke von \(f\). Gibt es solche \(M\) und \(N\) nicht, heißt \(f\) unbeschränkt.

## Karte: Beschränktheit hängt vom Definitionsbereich ab
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 9

\(f_1(x) := \text{konst}\) ist beschränkt mit \(M = N = \text{konst}\). \(f_2: \mathbb{R} \to \mathbb{R},\; f_2(x) := x\) ist unbeschränkt. Auf dem Definitionsbereich \(D := [0, \pi]\) ist \(f_2\) jedoch beschränkt mit unterer Schranke \(M = 0\) und oberer Schranke \(N = \pi\).

## Karte: Monotone Funktionen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 10-11

\(f: D \to \mathbb{R}\) heißt monoton wachsend, wenn für alle \(x_1, x_2 \in D\) mit \(x_1 < x_2\) gilt: \(f(x_1) \le f(x_2)\). Sie heißt monoton fallend, wenn \(f(x_1) \ge f(x_2)\) gilt. Gilt statt \(\le\) bzw. \(\ge\) sogar \(<\) bzw. \(>\), heißt \(f\) streng monoton wachsend bzw. streng monoton fallend. Beispiel: \(f(x) := x^2\) ist auf \(]-\infty, 0]\) streng monoton fallend und auf \([0, \infty[\) streng monoton wachsend.

## Karte: Gerade und ungerade Funktionen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 12-13

\(f: D \to \mathbb{R}\) heißt gerade, wenn für alle \(x \in D\) auch \(-x \in D\) ist und \(f(-x) = f(x)\) gilt. \(f\) heißt ungerade, wenn für alle \(x \in D\) auch \(-x \in D\) ist und \(f(-x) = -f(x)\) gilt. Beispiel: \(f(x) := x^2\) ist gerade, \(g(x) := x\) ist ungerade.

## Karte: Periodische Funktionen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 14-15

\(f: \mathbb{R} \to \mathbb{R}\) heißt periodisch, wenn es eine Zahl \(p \in \mathbb{R}^+ \setminus \{0\}\) gibt, sodass für alle \(x \in \mathbb{R}\) gilt: \(f(x + p) = f(x)\). Die kleinste dieser Zahlen \(p\) heißt Periode von \(f\). Beispiel: \(\sin x\) und \(\cos x\) sind periodisch mit der Periode \(2\pi\), kurz \(2\pi\)-periodisch.

## Karte: Polynome
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 17

Polynome sind Funktionen der Form \[p(x) := \sum_{k=0}^{n} a_k x^k = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n\] Die Koeffizienten \(a_k\) sind reelle Zahlen, \(x\) ist eine reelle Variable.

## Karte: Monome und Grad
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 18

Als Bausteine von Polynomen können die so genannten Monome \(x^k\) betrachtet werden. Der höchste auftretende Exponent (also \(n\), falls \(a_n \ne 0\)) wird als der Grad von \(p\) bezeichnet.

## Karte: Rationale Funktionen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 21

Der Bruch zweier Polynome \(f(z) := \frac{p(z)}{q(z)}\) mit \(q(z) \ne 0\) heißt rationale Funktion.

## Karte: Nullstellen und Pole rationaler Funktionen
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 22

Die Nullstellen von \(f\) sind identisch mit denen des Zählerpolynoms \(p\). An den Nullstellen des Nennerpolynoms \(q\) ist \(f\) nicht definiert: solche Punkte heißen Pole. Da sich Polynome ähnlich wie reelle Zahlen dividieren lassen (Polynomdivision), kann die Darstellung einer rationalen Funktion oft vereinfacht werden.

## Karte: Polynomdivision
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 23

Beispiel von den Folien: \[(x^3 + 2x^2 + 3x + 4) : (x - 1) = x^2 + 3x + 6 + \frac{10}{x-1}\] Gerechnet wird schrittweise: \(-(x^3 - x^2)\) liefert \(3x^2 + 3x + 4\), dann \(-(3x^2 - 3x)\) liefert \(6x + 4\), dann \(-(6x - 6)\) liefert den Rest \(10\).

## Frage: Wann heißt eine Funktion \(f: D \to \mathbb{R}\) beschränkt?
id: 2ebbf2
quelle: VorlesungFolienLAA-2026.pdf, Folie 8

Wenn es Zahlen \(M, N \in \mathbb{R}\) gibt, sodass für alle \(x \in D\) gilt: \(M \le f(x) \le N\). Dabei heißt \(M\) untere Schranke und \(N\) obere Schranke von \(f\). Gibt es solche Zahlen nicht, heißt \(f\) unbeschränkt.

## Frage: Was ist der Unterschied zwischen monoton wachsend und streng monoton wachsend?
id: 19m7jf5
quelle: VorlesungFolienLAA-2026.pdf, Folie 10

Monoton wachsend: Für alle \(x_1, x_2 \in D\) mit \(x_1 < x_2\) gilt \(f(x_1) \le f(x_2)\). Streng monoton wachsend: Es gilt sogar \(f(x_1) < f(x_2)\). Analog heißt \(f\) monoton fallend bei \(f(x_1) \ge f(x_2)\) und streng monoton fallend bei \(f(x_1) > f(x_2)\).

## Frage: Wann heißt eine Funktion gerade?
id: 1ib3q3a
quelle: VorlesungFolienLAA-2026.pdf, Folien 12-13

Wenn für alle \(x \in D\) auch \(-x \in D\) ist und \(f(-x) = f(x)\) gilt. Beispiel: \(f(x) := x^2\) ist gerade.

## Frage: Wann heißt eine Funktion ungerade?
id: p1h2kn
quelle: VorlesungFolienLAA-2026.pdf, Folien 12-13

Wenn für alle \(x \in D\) auch \(-x \in D\) ist und \(f(-x) = -f(x)\) gilt. Beispiel: \(g(x) := x\) ist ungerade.

## Frage: Wann heißt eine Funktion periodisch, und was ist ihre Periode?
id: qchq7q
quelle: VorlesungFolienLAA-2026.pdf, Folien 14-15

Wenn es eine Zahl \(p \in \mathbb{R}^+ \setminus \{0\}\) gibt, sodass für alle \(x \in \mathbb{R}\) gilt: \(f(x + p) = f(x)\). Die kleinste dieser Zahlen \(p\) heißt Periode von \(f\). Beispiel: \(\sin\) und \(\cos\) sind periodisch mit der Periode \(2\pi\), kurz \(2\pi\)-periodisch.

## Frage: Wie sieht die allgemeine Form eines Polynoms aus, und was ist sein Grad?
id: pi5yvs
quelle: VorlesungFolienLAA-2026.pdf, Folien 17-18

Polynome sind Funktionen der Form \(p(x) = \sum_{k=0}^{n} a_k x^k = a_0 + a_1 x + \dots + a_n x^n\) mit reellen Koeffizienten \(a_k\). Der höchste auftretende Exponent (also \(n\), falls \(a_n \ne 0\)) heißt Grad von \(p\).

## Frage: Was ist eine rationale Funktion?
id: 1425b0h
quelle: VorlesungFolienLAA-2026.pdf, Folie 21

Der Bruch zweier Polynome: \(f(z) := \frac{p(z)}{q(z)}\) mit \(q(z) \ne 0\).

## Frage: Wozu dient die Polynomdivision bei rationalen Funktionen?
id: 2vkkug
quelle: VorlesungFolienLAA-2026.pdf, Folie 22

In vielen Fällen ist die Darstellung einer rationalen Funktion unnötig kompliziert. Ähnlich wie reelle Zahlen können Polynome dividiert werden, um die Darstellung zu vereinfachen.

## Frage: Was sind die Pole einer rationalen Funktion?
id: 1ri27pp
quelle: VorlesungFolienLAA-2026.pdf, Folie 22

Die Nullstellen des Nennerpolynoms \(q\): an diesen Punkten ist die rationale Funktion nicht definiert. Die Nullstellen von \(f\) selbst sind dagegen die Nullstellen des Zählerpolynoms \(p\).

## Aufgabe: Aufgabe 1 (Variante)
id: aufgabe-1-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 1

Beweisen oder widerlegen Sie: Das Produkt von zwei beschränkten Funktionen ist stets wieder beschränkt.

## Aufgabe: Aufgabe 2 (Variante)
id: aufgabe-2-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 2

Beweisen oder widerlegen Sie: Das Produkt von zwei periodischen Funktionen mit der gleichen Periode ist stets wieder periodisch.

## Aufgabe: Aufgabe 3 (Variante)
id: aufgabe-3-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 3

Beweisen oder widerlegen Sie: Das Produkt von zwei geraden Funktionen ist stets gerade.

## Aufgabe: Aufgabe 4 (Variante)
id: aufgabe-4-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 4

Beweisen oder widerlegen Sie: Die Summe einer geraden und einer ungeraden Funktion ist stets gerade oder ungerade.

## Aufgabe: Aufgabe 5 (Typ)
id: y8p0ie
generator: polynomdivision
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Aufgabentyp wie im Übungsblatt.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 5
