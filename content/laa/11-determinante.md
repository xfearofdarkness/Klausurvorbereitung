---
id: determinante
title: Determinante
icon: 📦
---

## Karte: Vektoren als Matrix. Wozu die Determinante?
quelle: VorlesungFolienLAA-2026.pdf, Folien 181-183

Mehrere Vektoren (meist eine Basis) lassen sich zu einer Matrix zusammenfassen, indem jeder Vektor in eine Spalte geschrieben wird. So wird z. B. aus der Standardbasis des \(\mathbb{R}^3\) die \((3 \times 3)\)-Einheitsmatrix. Aus der Berechnung einer einzigen Größe, der Determinante, lässt sich eine Vielzahl von Eigenschaften ableiten. Interessant sind dabei: lineare Unabhängigkeit (einfachere Prüfung als bisher) und Volumenberechnung (Volumen eines Quaders im \(\mathbb{R}^n\), dessen Kanten durch \(n\) Vektoren gegeben sind).

## Karte: Streichungsmatrix
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 184

Sei \(A \in M(n \times n)\) mit \(n > 1\). Durch Streichen der \(i\)-ten Zeile und \(j\)-ten Spalte kann aus \(A\) die so genannte Streichungsmatrix \(S_{ij}(A) \in M(n-1 \times n-1)\) gewonnen werden.

## Karte: Determinante (Laplace'scher Entwicklungssatz)
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 185-187

Sei \(n > 1\). Die Determinante \(\det: M(n \times n) \to \mathbb{R}\) ist definiert durch \[\det A = \sum_{k=1}^{n} (-1)^{i+k} a_{ik} \det S_{ik}(A) \;\text{(Entwicklung nach der } i\text{-ten Zeile)}\] \[\det A = \sum_{i=1}^{n} (-1)^{i+k} a_{ik} \det S_{ik}(A) \;\text{(Entwicklung nach der } k\text{-ten Spalte)}\] Für \(A = (a_{11}) \in M(1 \times 1)\) gilt \(\det A := a_{11}\). Die Determinante ist also rekursiv über Determinanten kleinerer Matrizen definiert. Statt \(\det(\cdot)\) werden oft Betragsstriche um die Matrix geschrieben.

## Karte: Strategie: Zeile oder Spalte mit vielen Nullen wählen
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folien 188-189

Der Vorteil des Entwicklungssatzes: Man darf sich die Zeile oder Spalte aussuchen, die am wenigsten Rechenaufwand verspricht. Typischerweise die mit den meisten Nullen, denn so entfallen viele Determinantenberechnungen für die Streichungsmatrizen. Enthält eine quadratische Matrix eine Nullzeile oder -spalte, ist ihre Determinante Null.

## Karte: Determinante von (2×2)-Matrizen
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folien 191-192

Entwicklung nach der ersten Spalte liefert die Formel \[\det \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = a_{11}a_{22} - a_{21}a_{12}\] (Hauptdiagonale minus Nebendiagonale).

## Karte: Regel von Sarrus für (3×3)-Matrizen
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 193

Die ersten beiden Spalten werden noch einmal hinten an die Matrix geschrieben. Die Terme zu den schräg nach unten zeigenden Pfeilen werden addiert, jene zu den schräg nach oben zeigenden subtrahiert; entlang der Pfeile wird multipliziert. Diese Determinantenberechnung heißt Regel von Sarrus.

## Karte: Determinante von Dreiecksmatrizen
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 194

Die Determinante von (oberen wie unteren) Dreiecksmatrizen ist das Produkt der Diagonaleinträge: \[\det = a_{11} \cdot a_{22} \cdot \ldots \cdot a_{nn}\] (Als Übung zum Laplace'schen Entwicklungssatz eigenständig nachprüfen. Und wie ist das für Diagonalmatrizen?)

## Karte: Determinante und lineare Abhängigkeit in der Ebene
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 196

Vektoren der Ebene sind genau dann linear abhängig, wenn sie Vielfache voneinander sind; andernfalls spannen sie die gesamte Ebene auf. Eine \((2 \times 2)\)-Matrix mit linear abhängigen Spaltenvektoren hat Determinante Null: \[\begin{vmatrix} a & \lambda a \\ b & \lambda b \end{vmatrix} = a \lambda b - b \lambda a = 0\]

## Karte: Der große Äquivalenzsatz
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folie 197

Sei \(A \in M(n \times n)\). Dann gelten folgende Äquivalenzen: \[\det A \ne 0\] \[\Leftrightarrow \text{Die Spalten (Zeilen) von } A \text{ sind linear unabhängig}\] \[\Leftrightarrow \operatorname{Rang} A = n\] \[\Leftrightarrow A^{-1} \text{ existiert}\]

## Frage: Für welche Anwendungen lässt sich die Determinante verwenden und welche geometrische Interpretation gibt es?
id: zdl7nf
quelle: VorlesungFolienLAA-2026.pdf, Folie 183

Prüfung auf lineare Unabhängigkeit und Volumenberechnung: Welches Volumen hat ein Quader im \(\mathbb{R}^n\), dessen Kanten durch \(n\) Vektoren gegeben sind?

## Frage: Was ist die Streichungsmatrix \(S_{ij}(A)\)?
id: 1gwlisf
quelle: VorlesungFolienLAA-2026.pdf, Folie 184

Die \((n-1 \times n-1)\)-Matrix, die aus \(A\) durch Streichen der \(i\)-ten Zeile und der \(j\)-ten Spalte entsteht.

## Frage: Was besagt der Laplace'sche Entwicklungssatz?
id: eaauso
quelle: VorlesungFolienLAA-2026.pdf, Folie 185

Die Determinante lässt sich nach einer beliebigen Zeile oder Spalte entwickeln: \(\det A = \sum_k (-1)^{i+k} a_{ik} \det S_{ik}(A)\) (Zeile) bzw. \(\sum_i (-1)^{i+k} a_{ik} \det S_{ik}(A)\) (Spalte), mit den Streichungsmatrizen \(S_{ik}(A)\).

## Frage: Was ist die Determinante einer \((1 \times 1)\)-Matrix?
id: 11rn3p4
quelle: VorlesungFolienLAA-2026.pdf, Folie 185

\(\det(a_{11}) = a_{11}\). Der Eintrag selbst. Das ist der Startpunkt der rekursiven Definition: Die Determinante größerer Matrizen ist über Determinanten kleinerer Matrizen definiert.

## Frage: Welche Zeile oder Spalte wählt man zur Entwicklung am besten und warum?
id: lgjc15
quelle: VorlesungFolienLAA-2026.pdf, Folie 188

Die mit den meisten Nullen, denn so entfallen viele Determinantenberechnungen für die Streichungsmatrizen.

## Frage: Was ist die Determinante einer Matrix mit einer Nullzeile oder Nullspalte?
id: 1gc4598
quelle: VorlesungFolienLAA-2026.pdf, Folie 189

Null. Entwickelt man nach dieser Zeile bzw. Spalte, verschwinden alle Summanden.

## Frage: Wie berechnet man die Determinante einer \((2 \times 2)\)-Matrix?
id: 1u8056m
quelle: VorlesungFolienLAA-2026.pdf, Folien 191-192

\(\det \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = a_{11}a_{22} - a_{21}a_{12}\). Hauptdiagonale minus Nebendiagonale.

## Frage: Wie berechnet man mit der Regel von Sarrus die Determinante von (3×3)-Matrizen?
id: 192andm
quelle: VorlesungFolienLAA-2026.pdf, Folie 193

Die ersten beiden Spalten hinten an die Matrix anschreiben; entlang der schräg nach unten zeigenden Pfeile multiplizieren und addieren, entlang der schräg nach oben zeigenden multiplizieren und subtrahieren.

## Frage: Wie berechnet sich die Determinante einer Dreiecksmatrix?
id: 1ig9u1g
quelle: VorlesungFolienLAA-2026.pdf, Folie 194

Als Produkt der Diagonaleinträge: \(\det = a_{11} \cdot a_{22} \cdot \ldots \cdot a_{nn}\). Bei oberen wie unteren Dreiecksmatrizen.

## Frage: Zu welchen Aussagen ist \(\det A \ne 0\) äquivalent?
id: q4fhd7
quelle: VorlesungFolienLAA-2026.pdf, Folie 197

Die Spalten (Zeilen) von \(A\) sind linear unabhängig, es gilt \(\operatorname{Rang} A = n\), und die Inverse \(A^{-1}\) existiert (der große Äquivalenzsatz).

## Aufgabe: Aufgabe 33 (Typ)
id: 1yg56bb
generator: determinante-3x3
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Aufgabentyp wie im Übungsblatt.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 33

## Aufgabe: Aufgaben 34, 35 (Typ)
id: sj664k
generator: unabhaengig-invertierbar
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Es kommen abhängige und unabhängige Fälle vor.
quelle: ÜbungsaufgabenLAA.pdf, Aufgaben 34 und 35
