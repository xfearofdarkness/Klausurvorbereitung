---
id: vektorgeometrie
title: Kreuzprodukt, Norm & Skalarprodukt
icon: 📏
---

## Karte: Kreuzprodukt (nur im R³)
quelle: VorlesungFolienLAA-2026.pdf, Folie 198

Das Kreuzprodukt gibt eine Möglichkeit, zwei Vektoren miteinander zu multiplizieren. Es ist allerdings nur für Vektoren des \(\mathbb{R}^3\) definiert, bietet dort aber eine schöne geometrische Interpretation. Das Skalarprodukt ist ein weiteres Produkt von Vektoren, das gänzlich anders aussieht.

## Karte: Definition des Kreuzprodukts
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 199

Seien \(\vec{x}, \vec{y} \in \mathbb{R}^3\). Dann ist das Kreuzprodukt definiert durch \[\vec{x} \times \vec{y} := \begin{pmatrix} x_2 y_3 - x_3 y_2 \\ x_3 y_1 - x_1 y_3 \\ x_1 y_2 - x_2 y_1 \end{pmatrix}\]

## Karte: Eigenschaften des Kreuzprodukts
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 200

\(\vec{x} \times \vec{y}\) steht senkrecht auf \(\vec{x}\) und \(\vec{y}\); das Kreuzprodukt ist in beiden Eingängen linear; \((\vec{x}, \vec{y}, \vec{x} \times \vec{y})\) genügen der Rechte-Hand-Regel.

## Karte: Kreuzprodukt in der Physik
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 202

Bekannte Beispiele sind die Winkelgeschwindigkeit \(\vec{\omega}\) mit der Gleichung \(\vec{v} = \vec{\omega} \times \vec{r}\) sowie die Lorentz-Kraft \(\vec{F} = q(\vec{v} \times \vec{B})\).

## Karte: Standardnorm
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 204-205

Die so genannte Standardnorm auf dem \(\mathbb{R}^n\) ist definiert als \[\lVert\vec{x}\rVert := \left(x_1^2 + \ldots + x_n^2\right)^{\frac{1}{2}}\] Mit der Norm lassen sich Untersuchungen in normierten Vektorräumen durchführen (Längenmessung).

## Karte: Standardskalarprodukt
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 205-206

Das so genannte Standardskalarprodukt auf dem \(\mathbb{R}^n\) ist definiert als \[\langle\vec{x}, \vec{y}\rangle = x_1 y_1 + \ldots + x_n y_n\] Jedes Skalarprodukt induziert eine Norm (aber nicht umgekehrt).

## Karte: Skalarprodukt, Norm und Winkel
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folie 207

Es gilt \(\langle\vec{x}, \vec{x}\rangle = x_1^2 + \ldots + x_n^2\), also \[\lVert\vec{x}\rVert = \sqrt{\langle\vec{x}, \vec{x}\rangle}\] Die Standardnorm wird vom Standardskalarprodukt induziert. Ferner gilt \[\langle\vec{v}, \vec{w}\rangle = \lVert\vec{v}\rVert \lVert\vec{w}\rVert \cos\sphericalangle(\vec{v}, \vec{w})\] mit dem Winkel zwischen den Vektoren \(\vec{v}\) und \(\vec{w}\).

## Karte: Orthogonalbasis und Orthonormalbasis
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 208

Eine Basis \(\{\vec{b}_1, \ldots, \vec{b}_n\}\) des \(\mathbb{R}^n\) heißt Orthogonalbasis, wenn \(\langle\vec{b}_i, \vec{b}_j\rangle = 0\) für \(i \ne j\). Sie heißt Orthonormalbasis (ONB), wenn \(\langle\vec{b}_i, \vec{b}_j\rangle = 1\) für \(i = j\) und \(0\) für \(i \ne j\).

## Karte: Orthogonalität
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 209-210

Sind \(\vec{v}, \vec{w}\) orthogonal zueinander, schreibt man \(\vec{v} \perp \vec{w}\). Die Bedingung lautet: \[\vec{x} \perp \vec{y} \;\Leftrightarrow\; \langle\vec{x}, \vec{y}\rangle = 0\] Beispiel im \(\mathbb{R}^2\): \(\vec{x} = (1, 0)^T\), \(\vec{y} = (0, 1)^T\) mit \(\langle\vec{x}, \vec{y}\rangle = 1 \cdot 0 + 0 \cdot 1 = 0\): die Vektoren sind bezüglich des Standardskalarproduktes senkrecht zueinander.

## Frage: Wie ist das Kreuzprodukt definiert, und für welche Vektoren existiert es?
id: 10xtrpz
quelle: VorlesungFolienLAA-2026.pdf, Folien 198-199

Nur für Vektoren des \(\mathbb{R}^3\): \(\vec{x} \times \vec{y} := \begin{pmatrix} x_2y_3 - x_3y_2 \\ x_3y_1 - x_1y_3 \\ x_1y_2 - x_2y_1 \end{pmatrix}\).

## Frage: In welche Richtung zeigt der Vektor \(\vec{x} \times \vec{y}\)?
id: 1kv0cb8
quelle: VorlesungFolienLAA-2026.pdf, Folie 200

Er steht senkrecht auf \(\vec{x}\) und auf \(\vec{y}\); \((\vec{x}, \vec{y}, \vec{x} \times \vec{y})\) genügen der Rechte-Hand-Regel. Außerdem ist das Kreuzprodukt in beiden Eingängen linear.

## Frage: Wo kommt das Kreuzprodukt in der Physik vor?
id: 1vouqot
quelle: VorlesungFolienLAA-2026.pdf, Folie 202

Bei der Winkelgeschwindigkeit (\(\vec{v} = \vec{\omega} \times \vec{r}\)) und der Lorentz-Kraft (\(\vec{F} = q(\vec{v} \times \vec{B})\)).

## Frage: Wie ist die Standardnorm auf dem \(\mathbb{R}^n\) definiert?
id: 1xai3pd
quelle: VorlesungFolienLAA-2026.pdf, Folien 204-205

\(\lVert\vec{x}\rVert := \sqrt{x_1^2 + \ldots + x_n^2}\). Mit der Norm lassen sich Untersuchungen in normierten Vektorräumen durchführen (Längenmessung).

## Frage: Wie ist das Standardskalarprodukt auf dem \(\mathbb{R}^n\) definiert?
id: 11pp3lw
quelle: VorlesungFolienLAA-2026.pdf, Folien 205-206

\(\langle\vec{x}, \vec{y}\rangle = x_1y_1 + \ldots + x_ny_n\): die Koordinaten werden paarweise multipliziert und die Produkte addiert.

## Frage: Welcher Zusammenhang besteht zwischen Norm und Skalarprodukt?
id: 1t7nxby
quelle: VorlesungFolienLAA-2026.pdf, Folien 205-207

Wegen \(\langle\vec{x}, \vec{x}\rangle = x_1^2 + \ldots + x_n^2\) gilt \(\lVert\vec{x}\rVert = \sqrt{\langle\vec{x}, \vec{x}\rangle}\): die Standardnorm wird vom Standardskalarprodukt induziert. Jedes Skalarprodukt induziert eine Norm, aber nicht umgekehrt.

## Frage: Wie berechnet man den Winkel zwischen zwei Vektoren?
id: 6iy5i8
quelle: VorlesungFolienLAA-2026.pdf, Folie 207

Über die Formel \(\langle\vec{v}, \vec{w}\rangle = \lVert\vec{v}\rVert \lVert\vec{w}\rVert \cos\sphericalangle(\vec{v}, \vec{w})\); darin ist \(\sphericalangle(\vec{v}, \vec{w})\) der Winkel zwischen den Vektoren \(\vec{v}\) und \(\vec{w}\).

## Frage: Was ist eine Orthonormalbasis?
id: ugnvar
quelle: VorlesungFolienLAA-2026.pdf, Folie 208

Eine Basis mit \(\langle\vec{b}_i, \vec{b}_j\rangle = 1\) für \(i = j\) und \(0\) für \(i \ne j\), also paarweise orthogonale Vektoren der Länge 1.

## Frage: Wann heißen zwei Vektoren orthogonal?
id: 1cxc1k
quelle: VorlesungFolienLAA-2026.pdf, Folien 209-210

Wenn ihr Skalarprodukt Null ist: \(\vec{x} \perp \vec{y} \Leftrightarrow \langle\vec{x}, \vec{y}\rangle = 0\). Beispiel im \(\mathbb{R}^2\): \((1, 0)^T\) und \((0, 1)^T\) mit \(\langle\vec{x}, \vec{y}\rangle = 1 \cdot 0 + 0 \cdot 1 = 0\).

## Aufgabe: Aufgabe 36 (Typ)
id: 4swhhf
generator: kreuzprodukt
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Aufgabentyp wie im Übungsblatt.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 36

## Aufgabe: Aufgabe 37a (Typ)
id: 1zetqi
generator: vektor-normieren
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Aufgabentyp wie im Übungsblatt.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 37

## Aufgabe: Aufgabe 37b (Typ)
id: 1lg6tzq
generator: skalarprodukt-winkel
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Aufgabentyp wie im Übungsblatt.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 37
