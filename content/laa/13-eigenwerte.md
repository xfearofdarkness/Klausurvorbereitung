---
id: eigenwerte
title: Eigenwerte & Eigenvektoren
icon: 🎯
---

## Karte: Eigenwert und Eigenvektor
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 211

Sei \(A\) eine quadratische Matrix, aufgefasst als Abbildung von \(\mathbb{R}^n\) nach \(\mathbb{R}^n\). Eine Zahl \(\lambda\) heißt Eigenwert (EW) von \(A\) zum Eigenvektor (EV) \(\vec{v} \ne \vec{0}\), wenn \(\vec{v}\) durch \(A\) auf das \(\lambda\)-Fache von sich selbst abgebildet wird: \[A\vec{v} = \lambda\vec{v} \quad \text{(Eigenwertgleichung)}\]

## Karte: Warum wird der Nullvektor ausgenommen?
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 212

Der Nullvektor würde die Eigenwertgleichung für jedes \(\lambda\) erfüllen. Für die nachfolgende Theorie ist es jedoch wichtig, dass jedem Eigenvektor ein eindeutiger Eigenwert zugeordnet werden kann.

## Karte: Umformung der Eigenwertgleichung
quelle: VorlesungFolienLAA-2026.pdf, Folien 213-214

Die Eigenwertgleichung ist ein lineares Gleichungssystem. Umgestellt: \[A\vec{v} = \lambda\vec{v} \;\Leftrightarrow\; A\vec{v} - \lambda\vec{v} = \vec{0} \;\Leftrightarrow\; (A - \lambda E)\vec{v} = \vec{0}\] Im letzten Schritt muss die Einheitsmatrix \(E\) hinzugefügt werden, damit der Term innerhalb der Klammern definiert ist.

## Karte: Bedingung für Eigenwerte
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folie 215

Gesucht sind jene \(\lambda\), für welche \((A - \lambda E)\vec{v} = \vec{0}\) eine Lösung hat, die nicht nur aus dem Nullvektor besteht. Dies ist äquivalent zu \[\det(A - \lambda E) = 0\]

## Karte: Charakteristisches Polynom
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 216

Der Determinantenterm \(P_A(\lambda) := \det(A - \lambda E)\) wird charakteristisches Polynom genannt. Er liefert nach dem Ausrechnen ein Polynom \(n\)-ten Grades in \(\lambda\). Die Nullstellen des charakteristischen Polynoms liefern die Eigenwerte von \(A\).

## Karte: Beispiel: Eigenwerte berechnen
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 217

Für \(A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\): \[\det(A - \lambda E) = \begin{vmatrix} -\lambda & 1 \\ 1 & -\lambda \end{vmatrix} = \lambda^2 - 1\] Die Nullstellen. Und damit die Eigenwerte. Sind \(\lambda_{1,2} = \pm 1\).

## Karte: Eigenvektoren berechnen
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 218-219

Ist ein Eigenwert \(\lambda\) gefunden, so berechnen sich die zugehörigen Eigenvektoren über das LGS \((A - \lambda E)\vec{v} = \vec{0}\). Beispiel: Für \(A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\) und \(\lambda_1 = +1\) liefert der Gauß-Algorithmus Lösungen der Form \(x = y\), also \(\vec{v} = x\begin{pmatrix} 1 \\ 1 \end{pmatrix}\). Eigenvektor: \(\vec{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\) bzw. alle Vielfachen davon.

## Karte: Komplexe Eigenwerte
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 220

Das charakteristische Polynom von \(A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\) ist \(\lambda^2 + 1\). Im Reellen ist dies nicht zu faktorisieren und es gibt keine Eigenwerte. Im Komplexen hingegen ist \(\lambda^2 + 1 = (\lambda + \mathrm{i})(\lambda - \mathrm{i})\) und \(A\) hat die komplexen Eigenwerte \(\lambda_{1,2} = \pm\mathrm{i}\).

## Frage: Wie lautet die Eigenwertgleichung?
id: 1aqkr1g
quelle: VorlesungFolienLAA-2026.pdf, Folie 211

\(A\vec{v} = \lambda\vec{v}\) mit \(\vec{v} \ne \vec{0}\): Der Eigenvektor \(\vec{v}\) wird durch \(A\) auf das \(\lambda\)-Fache von sich selbst abgebildet; \(\lambda\) heißt Eigenwert von \(A\) zum Eigenvektor \(\vec{v}\).

## Frage: Warum wird der Nullvektor als Eigenvektor ausgeschlossen?
id: xz8wnn
quelle: VorlesungFolienLAA-2026.pdf, Folie 212

Der Nullvektor würde die Eigenwertgleichung für jedes \(\lambda\) erfüllen. Für die Theorie ist aber wichtig, dass jedem Eigenvektor ein eindeutiger Eigenwert zugeordnet werden kann.

## Frage: Unter welcher Bedingung ist \(\lambda\) ein Eigenwert von \(A\)?
id: xl8w7g
quelle: VorlesungFolienLAA-2026.pdf, Folie 215

Wenn \(\det(A - \lambda E) = 0\) gilt. Genau dann hat das Gleichungssystem \((A - \lambda E)\vec{v} = \vec{0}\) eine Lösung, die nicht nur aus dem Nullvektor besteht.

## Frage: Was ist das charakteristische Polynom?
id: bvjyhw
quelle: VorlesungFolienLAA-2026.pdf, Folie 216

\(P_A(\lambda) := \det(A - \lambda E)\). Nach dem Ausrechnen ein Polynom \(n\)-ten Grades in \(\lambda\). Seine Nullstellen liefern die Eigenwerte von \(A\).

## Frage: Welche Eigenwerte hat die Matrix \(\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\)?
id: q8crta
quelle: VorlesungFolienLAA-2026.pdf, Folien 217, 219

Das charakteristische Polynom ist \(\lambda^2 - 1\) mit den Nullstellen \(\lambda_{1,2} = \pm 1\). Eigenvektor zu \(\lambda_1 = +1\): \(\vec{v}_1 = (1, 1)^T\) bzw. alle Vielfachen davon.

## Frage: Wie berechnet man die Eigenvektoren zu einem gefundenen Eigenwert \(\lambda\)?
id: ngbbf9
quelle: VorlesungFolienLAA-2026.pdf, Folie 218

Als Lösungen des linearen Gleichungssystems \((A - \lambda E)\vec{v} = \vec{0}\), z. B. mit dem Gauß-Algorithmus.

## Frage: Welche Eigenwerte hat die Matrix \(\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\)?
id: 1mmgk6j
quelle: VorlesungFolienLAA-2026.pdf, Folie 220

Das charakteristische Polynom \(\lambda^2 + 1\) ist im Reellen nicht zu faktorisieren. Es gibt keine reellen Eigenwerte. Im Komplexen gilt \(\lambda^2 + 1 = (\lambda + \mathrm{i})(\lambda - \mathrm{i})\), und \(A\) hat die komplexen Eigenwerte \(\lambda_{1,2} = \pm\mathrm{i}\).

## Aufgabe: Aufgabe 38 (Typ)
id: 13lzoof
generator: eigenwerte-2x2
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Die Eigenwerte sind stets ganzzahlig.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 38

## Aufgabe: Aufgabe 39 (Variante)
id: aufgabe-39-variante
notiz: Fragt den Stoff der Kapitel Vektorräume bis Eigenwerte ab. Die Theoriefragen sind auch als Karteikarten der jeweiligen Themen enthalten.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 39

Wiederholung zum freien Vortragen (Stoff von den Vektorräumen bis zu den Eigenwerten): Wann sind Vektoren linear unabhängig, und was ist eine Basis? Wie bestimmt man den Rang einer Matrix? Welche besonderen Matrizentypen kennen Sie? Wann ist ein inhomogenes LGS lösbar, und welche Umformungen erlaubt der Gauß-Algorithmus? Wie berechnet man Determinanten mit dem Entwicklungssatz und mit der Regel von Sarrus, und was bedeutet \(\det A \ne 0\)? Was beschreiben Kreuzprodukt, Skalarprodukt und Norm geometrisch, und wie berechnet man einen Winkel? Wie findet man Eigenwerte über das charakteristische Polynom?
