---
id: lgs
title: Lineare Gleichungssysteme
icon: ⚖️
---

## Karte: Lineares Gleichungssystem
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 171

Ein System der Form \[\begin{aligned} a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n &= b_1 \\ &\;\;\vdots \\ a_{m1}x_1 + a_{m2}x_2 + \ldots + a_{mn}x_n &= b_m \end{aligned}\] mit \(a_{jk}, b_j \in \mathbb{R}\) heißt lineares Gleichungssystem mit \(m\) Gleichungen und \(n\) Unbekannten (Variablen). Die \(b_j\) heißen Inhomogenitäten, die \(a_{jk}\) Koeffizienten. Sind alle \(b_j = 0\), heißt das LGS homogen, sonst inhomogen.

## Karte: Matrixschreibweise Ax = b
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 172-173

Die linke Seite lässt sich als Matrix-Vektor-Produkt schreiben: \(A\vec{x} = \vec{b}\). Die Matrix \(A := (a_{jk})\) heißt Koeffizientenmatrix, der Vektor \(\vec{b}\) Inhomogenitätsvektor. Da alle wichtigen Informationen in \(A\) und \(\vec{b}\) stehen, verzichtet man beim Rechnen gerne auf \(\vec{x}\): Übrig bleibt die so genannte erweiterte Koeffizientenmatrix \((A|\vec{b})\).

## Karte: Lösungsvektor und Lösungsmenge
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 174

Der Vektor \(\vec{x}\) heißt Lösungsvektor des LGSs, wenn seine Komponenten \(x_1, \ldots, x_n\) alle Gleichungen des LGSs erfüllen. Die Menge aller Lösungsvektoren heißt Lösungsmenge des LGSs.

## Karte: Elementare Zeilenoperationen
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folien 165-166

Beim Lösen sind gestattet: Tauschen von Zeilen; Addition eines (ggf. negativen) Vielfachen einer Zeile zu einer anderen; Multiplikation einer Zeile mit einer Zahl ungleich Null. Diese Operationen ändern die Lösungsmenge nicht und genügen, um jedes lösbare LGS zu lösen — sie sind der Kern des Gauß-Algorithmus.

## Karte: Beispiel: Gauß-Algorithmus
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 162-164

Das System \(2x_1 + 2x_2 = 2\), \(-x_1 + 6x_2 = -1\) wird als erweiterte Koeffizientenmatrix umgeformt: Zeilen tauschen, zu Zeile 2 zweimal Zeile 1 addieren, Zeile 2 durch 14 teilen (normieren), von Zeile 1 sechsmal Zeile 2 subtrahieren, Zeile 1 mit \((-1)\) multiplizieren. Ergebnis: \[\left(\begin{array}{cc|c} 1 & 0 & 1 \\ 0 & 1 & 0 \end{array}\right) \;\Rightarrow\; x_1 = 1,\; x_2 = 0\]

## Karte: Der Idealfall
quelle: VorlesungFolienLAA-2026.pdf, Folien 167, 175

Ein LGS mit \(m\) Gleichungen und \(m\) Variablen kann unter gewissen Voraussetzungen in die Form mit der Einheitsmatrix im linken Teil überführt werden. Daran kann die eindeutige Lösung \(x_1 = c_1, \ldots, x_m = c_m\) direkt abgelesen werden. Dieser Idealfall sollte als zu erstrebendes Ziel nie aus den Augen verloren werden.

## Karte: Unendlich viele Lösungen
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 168-169

Beispiel: \(3x_1 + 6x_2 = 9\), \(4x_1 + 8x_2 = 12\) führt nach Umformungen auf eine Nullzeile \(0 = 0\) — eine wahre Aussage, die die Lösungsmenge nicht einschränkt. Es verbleibt \(x_1 + 2x_2 = 3\) mit unendlich vielen Lösungen in der Abhängigkeit \(x_1 = 3 - 2x_2\): Eine konkrete Lösung ergibt sich durch konkretes Wählen von \(x_2\).

## Karte: Keine Lösung
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 170

Ergibt sich nach Umformungen eine Zeile der Form \[\left(\begin{array}{cc|c} 1 & 0 & 1 \\ 0 & 0 & 1 \end{array}\right)\] so bedeutet die letzte Zeile \(0 = 1\): Das ursprüngliche LGS hat keine Lösung.

## Karte: Lösungsraum homogener LGS
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folien 176-177

Die Lösungsmenge eines homogenen LGS ist ein Vektorraum, daher spricht man von einem Lösungsraum. Satz: Linearkombinationen von Lösungen eines homogenen LGSs \(A\vec{x} = \vec{0}\) sind wieder Lösungen.

## Karte: Struktur der Lösungsmenge inhomogener LGS
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folien 178-179

Sei \(\vec{x}_P\) eine beliebige Lösung des inhomogenen LGSs \(A\vec{x} = \vec{b}\) und \(L_H\) der Lösungsraum des zugehörigen homogenen LGSs \(A\vec{x} = \vec{0}\). Dann ist \[\vec{x}_P + L_H := \{\vec{x}_P + \vec{x}_H \,|\, \vec{x}_H \in L_H\}\] die gesamte Lösungsmenge des inhomogenen LGSs. \(\vec{x}_P\) heißt auch partikuläre Lösung; man schreibt auch \(\vec{x}_S\) und spricht von der speziellen Lösung.

## Karte: Dokumentation der Gauß-Schritte
quelle: VorlesungFolienLAA-2026.pdf, Folie 180

Die Schritte beim Gauß-Algorithmus werden dokumentiert, indem über den Pfeil geschrieben wird, was getan wird; die Zeilen bekommen römische Ziffern. Beispiel: \(2 \cdot \mathrm{II} - 3 \cdot \mathrm{I}\) bedeutet „zwei mal zweite Zeile minus drei mal erste Zeile“.

## Frage: Welche drei elementaren Zeilenoperationen sind beim Gauß-Algorithmus gestattet?
id: 1wbay57
quelle: VorlesungFolienLAA-2026.pdf, Folien 165-166

1. Tauschen von Zeilen, 2. Addition eines (ggf. negativen) Vielfachen einer Zeile zu einer anderen, 3. Multiplikation einer Zeile mit einer Zahl ungleich Null. Diese Operationen ändern die Lösungsmenge nicht.

## Frage: Was ist der Idealfall beim Gauß-Algorithmus?
id: 368r3t
quelle: VorlesungFolienLAA-2026.pdf, Folien 167, 175

Die erweiterte Koeffizientenmatrix wird so umgeformt, dass im linken Teil die Einheitsmatrix steht. Daran kann die eindeutige Lösung \(x_1 = c_1, \ldots, x_m = c_m\) direkt abgelesen werden.

## Frage: Was bedeutet eine Nullzeile „\(0 = 0\)“ nach den Umformungen?
id: 1ftg0ge
quelle: VorlesungFolienLAA-2026.pdf, Folien 168-169

Sie ist eine wahre Aussage und schränkt die Lösungsmenge nicht ein. Es verbleiben Gleichungen mit Abhängigkeiten (z. B. \(x_1 = 3 - 2x_2\)) — das LGS hat dann unendlich viele Lösungen, und eine konkrete Lösung ergibt sich durch konkretes Wählen der freien Variablen.

## Frage: Was bedeutet eine Zeile „\(0 = 1\)“ nach den Umformungen?
id: kerljc
quelle: VorlesungFolienLAA-2026.pdf, Folie 170

Eine falsche Aussage — das ursprüngliche LGS hat keine Lösung.

## Frage: Wann heißt ein lineares Gleichungssystem homogen, wann inhomogen?
id: 13owxd1
quelle: VorlesungFolienLAA-2026.pdf, Folie 171

Homogen, wenn alle Inhomogenitäten \(b_j = 0\) sind; sonst inhomogen. Die \(a_{jk}\) heißen Koeffizienten, die \(b_j\) Inhomogenitäten.

## Frage: Wie schreibt man ein LGS in Matrixform?
id: 1rii7ql
quelle: VorlesungFolienLAA-2026.pdf, Folien 172-173

\(A\vec{x} = \vec{b}\) mit der Koeffizientenmatrix \(A\) und dem Inhomogenitätsvektor \(\vec{b}\). Beim Rechnen verzichtet man gern auf \(\vec{x}\), da alle wichtigen Informationen in \(A\) und \(\vec{b}\) stehen — übrig bleibt die erweiterte Koeffizientenmatrix \((A|\vec{b})\).

## Frage: Was gilt für Linearkombinationen von Lösungen eines homogenen LGS?
id: 4jt82x
quelle: VorlesungFolienLAA-2026.pdf, Folien 176-177

Sie sind wieder Lösungen — die Lösungsmenge eines homogenen LGS ist ein Vektorraum (Lösungsraum).

## Frage: Wie ist die Lösungsmenge eines inhomogenen LGS aufgebaut?
id: 1230j8i
quelle: VorlesungFolienLAA-2026.pdf, Folien 178-179

\(\vec{x}_P + L_H = \{\vec{x}_P + \vec{x}_H \,|\, \vec{x}_H \in L_H\}\): eine partikuläre (auch: spezielle) Lösung \(\vec{x}_P\) plus der Lösungsraum \(L_H\) des zugehörigen homogenen LGSs \(A\vec{x} = \vec{0}\).

## Aufgabe: Aufgabe 31 (Typ)
id: 36ncdd
generator: gauss-lgs-2x2
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet — es kommen alle drei Fälle vor (eindeutig, unendlich viele, keine Lösung).
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 31

## Aufgabe: Aufgabe 32
id: 1u8rtp
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 32

Für welche Werte von \(\alpha \in \mathbb{R}\) hat das lineare Gleichungssystem \[\begin{aligned} x + y + z &= 2 \\ x + 2y - 2z &= 2 \\ 3x + y + \alpha^2 z &= 2\alpha \end{aligned}\] keine, eine bzw. unendlich viele Lösungen?
