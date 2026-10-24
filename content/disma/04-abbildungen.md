---
id: abbildungen
title: Abbildungen und Funktionen
icon: 🔀
---

## Karte: Abbildung
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 66-67

Eine <em>Abbildung</em> \(f\) von einer Menge \(A\) in eine Menge \(B\), geschrieben \(f: A \to B\), ordnet jedem Element \(x \in A\) genau ein Element \(y \in B\) zu. Man schreibt \(f(x) = y\), \(f: x \mapsto y\) oder nur \(x \mapsto y\). \(A\) heißt Definitionsbereich, \(B\) Wertebereich der Abbildung. Für \(B \subseteq \mathbb{R}\) spricht man auch von einer <em>Funktion</em> (auf \(A\)).

## Karte: Beispiele für Funktionen
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 68

Abbildungen \(f_i: \mathbb{R} \to \mathbb{R}\), die Funktionen sind: \(f_1(x) := x + 12\), \(f_2(x) := 3x + x^2\), \(f_3(x) := \cos(1 - x)\).

## Karte: Bildmenge und Urbildmenge
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 69-70

Für eine Abbildung \(f: A \to B\) und Teilmengen \(X \subseteq A\), \(Y \subseteq B\): \[f(X) := \{f(x) \mid x \in X\} \subseteq B \quad (\text{Bildmenge}),\] \[f^{-1}(Y) := \{x \in A \mid f(x) \in Y\} \subseteq A \quad (\text{Urbildmenge}).\]

## Karte: Surjektiv, injektiv, bijektiv
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 71-74

Eine Abbildung \(f: A \to B\) heißt <em>surjektiv</em>, wenn \(f(A) = B\); <em>injektiv</em>, wenn für alle \(x, y \in A\) aus \(x \ne y\) folgt \(f(x) \ne f(y)\); <em>bijektiv</em>, wenn \(f\) injektiv und surjektiv ist. Die Skizzen zeigen: Treffen zwei Pfeile dasselbe Element, ist \(f\) nicht injektiv; bleibt ein \(y \in B\) mit \(y \notin f(A)\), ist \(f\) nicht surjektiv.

## Karte: Beispiele zu Injektivität und Surjektivität
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 75-78

\(f_1: [0,1] \to \mathbb{R},\ x \mapsto x\) ist injektiv, aber wegen \(f_1([0,1]) = [0,1] \ne \mathbb{R}\) nicht surjektiv und damit nicht bijektiv. \(f_2: [0,1] \to [0,1],\ x \mapsto x\) ist bijektiv. \(f_3: \mathbb{R} \to \mathbb{R},\ x \mapsto x^2\) ist nicht injektiv, da \(f_3(2) = 4 = f_3(-2)\), und nicht surjektiv, da \(-1\) keinen Urbildpunkt hat. \(f_4: [0, \infty[ \to [0, \infty[,\ x \mapsto x^2\) ist bijektiv.

## Karte: Umkehrabbildung
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 79-81

Bei bijektiven Abbildungen gehört zu jedem Element des Wertebereichs ein eindeutig bestimmtes Urbild; diese Zuordnung definiert die <em>Umkehrabbildung</em> (oder Inverse). Für eine injektive Abbildung \(f: A \to B\) heißt \(f^{-1}: f(A) \to A\) mit \[f^{-1}(y) = x \iff f(x) = y\] für alle \(y \in f(A)\) und \(x \in A\) Umkehrabbildung von \(f\). Beispiel: Die Umkehrfunktion von \(f_4: [0, \infty[ \to [0, \infty[,\ x \mapsto x^2\) ist die Quadratwurzel \(f_4^{-1}: x \mapsto \sqrt{x}\).

## Karte: Komposition
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 82-86

Für Abbildungen \(f: A \to X\) und \(g: Y \to B\) mit \(f(A) \subseteq Y\) ist die Komposition \((g \circ f): A \to B\) mit \((g \circ f)(x) = g(f(x))\) für alle \(x \in A\): Auf \(x\) wird zuerst \(f\) und anschließend \(g\) „losgelassen“. Sie heißt auch Hintereinanderausführung oder Verkettung, gelesen „\(g\) Kringel \(f\)“ oder „\(g\) nach \(f\)“. Mit der Umkehrabbildung kommt wieder der Startpunkt heraus: \((f^{-1} \circ f)(x) = x\) und \((f \circ f^{-1})(y) = y\).

## Karte: Beispiel zur Komposition
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 87

\(f: [-1,1] \to \mathbb{R},\ x \mapsto 1 - x^2\) und \(g: [0, \infty[ \to \mathbb{R},\ x \mapsto \sqrt{x}\). Es gilt \(f([-1,1]) = [0,1] \subseteq [0, \infty[\), damit ist \(g\) nach \(f\) erklärt: \(g \circ f: [-1,1] \to \mathbb{R},\ x \mapsto \sqrt{1 - x^2}\).

## Frage: Wie ist eine Abbildung \(f: A \to B\) definiert?
id: abbildung
quelle: DiskreteMathematikVLHO.pdf, Folie 66

Sie ordnet jedem Element \(x \in A\) genau ein Element \(y \in B\) zu; \(A\) heißt Definitionsbereich, \(B\) Wertebereich.

## Frage: Wann spricht man bei einer Abbildung von einer Funktion?
id: funktion
quelle: DiskreteMathematikVLHO.pdf, Folie 67

Wenn der Wertebereich \(B \subseteq \mathbb{R}\) ist.

## Frage: Wie sind Bildmenge \(f(X)\) und Urbildmenge \(f^{-1}(Y)\) definiert?
id: bild-urbild
quelle: DiskreteMathematikVLHO.pdf, Folie 69

\(f(X) := \{f(x) \mid x \in X\} \subseteq B\) und \(f^{-1}(Y) := \{x \in A \mid f(x) \in Y\} \subseteq A\).

## Frage: Wann ist eine Abbildung surjektiv, injektiv, bijektiv?
id: sur-in-bijektiv
quelle: DiskreteMathematikVLHO.pdf, Folie 71

Surjektiv: \(f(A) = B\). Injektiv: aus \(x \ne y\) folgt \(f(x) \ne f(y)\). Bijektiv: injektiv und surjektiv.

## Frage: Warum ist \(x \mapsto x^2\) als Abbildung \(\mathbb{R} \to \mathbb{R}\) weder injektiv noch surjektiv?
id: quadrat-nicht-bijektiv
quelle: DiskreteMathematikVLHO.pdf, Folie 77

Nicht injektiv, da \(f(2) = 4 = f(-2)\); nicht surjektiv, da \(-1\) keinen Urbildpunkt hat.

## Frage: Wie ist die Umkehrabbildung einer injektiven Abbildung \(f: A \to B\) definiert?
id: umkehrabbildung
quelle: DiskreteMathematikVLHO.pdf, Folie 80

\(f^{-1}: f(A) \to A\) mit \(f^{-1}(y) = x \iff f(x) = y\) für alle \(y \in f(A)\), \(x \in A\).

## Frage: Was ist die Umkehrfunktion von \(x \mapsto x^2\) auf \([0, \infty[\)?
id: umkehr-quadrat
quelle: DiskreteMathematikVLHO.pdf, Folie 81

Die Quadratwurzel \(x \mapsto \sqrt{x}\) auf \([0, \infty[\).

## Frage: Wie ist die Komposition \(g \circ f\) definiert, und was muss gelten?
id: komposition
quelle: DiskreteMathematikVLHO.pdf, Folie 83

Für \(f: A \to X\), \(g: Y \to B\) mit \(f(A) \subseteq Y\) ist \((g \circ f): A \to B\), \((g \circ f)(x) = g(f(x))\).

## Frage: Was ergibt \(f^{-1} \circ f\)?
id: komposition-inverse
quelle: DiskreteMathematikVLHO.pdf, Folie 85

Wieder den Startpunkt: \((f^{-1} \circ f)(x) = x\), ebenso \((f \circ f^{-1})(y) = y\).

## Aufgabe: Umkehrfunktion
id: rm-umkehrfunktion-linear
generator: umkehrfunktion-linear
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 12; DiskreteMathematikVLHO.pdf, Folien 71 und 80

## Aufgabe: Komposition
id: aufgabe-13-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 13

Schreiben Sie für die Funktionen \(f: \mathbb{R} \to \mathbb{R},\ f(x) := 2x + 1\), \(g: \mathbb{R} \to [0, \infty[,\ g(x) := x^2\) und \(h: [0, \infty[ \to [0, \infty[,\ h(x) := \sqrt{x}\) die Hintereinanderausführungen \(g \circ f\), \(h \circ g\), \(f \circ h\) und \(h \circ f\) samt Definitions- und Wertebereich auf, soweit sie erklärt sind. Welche ist nicht erklärt und warum?
