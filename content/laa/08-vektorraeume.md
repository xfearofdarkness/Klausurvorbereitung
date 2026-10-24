---
id: vektorraeume
title: Vektorräume
icon: ➡️
---

## Karte: Der Vektorraum Rⁿ
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 135

Der \(\mathbb{R}^n\) ist ein so genannter Vektorraum. Seine Vektoren haben die Gestalt \[\vec{x} := \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}, \quad x_1, \ldots, x_n \in \mathbb{R}\] Die Zahlen \(x_i\) heißen Koordinaten von \(\vec{x}\). Die natürliche Zahl \(n\) im Exponenten von \(\mathbb{R}^n\) gibt die Anzahl der Koordinaten seiner Vektoren an.

## Karte: Nullvektor und Vektoraddition
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 136

Ein spezieller Vektor ist der Nullvektor \(\vec{0}\), dessen Koordinaten alle 0 sind. Addition von Vektoren erfolgt koordinatenweise: \[\begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} + \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} := \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix}\]

## Karte: Multiplikation mit einem Skalar
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 137-138

\[\lambda \cdot \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} := \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix}\] Zahlenbeispiel von den Folien: \[2 \cdot \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} + \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 6 \\ 4 \\ 2 \end{pmatrix} + \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 7 \\ 5 \\ 2 \end{pmatrix}\]

## Karte: Linearkombination
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 139

Ein Vektor \(\vec{v} \in \mathbb{R}^n\) heißt Linearkombination der Vektoren \(\vec{v}_1, \ldots, \vec{v}_k \in \mathbb{R}^n\), wenn er sich mit \(\lambda_1, \ldots, \lambda_k \in \mathbb{R}\) darstellen lässt als \[\vec{v} = \lambda_1 \vec{v}_1 + \ldots + \lambda_k \vec{v}_k =: \sum_{i=1}^{k} \lambda_i \vec{v}_i\] Sprechweise: \(\vec{v}\) lässt sich aus \(\vec{v}_1, \ldots, \vec{v}_k\) linear kombinieren.

## Karte: Beispiel einer Linearkombination
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 140-141

\(\vec{v} = \begin{pmatrix} 2 \\ 5 \end{pmatrix}\) soll aus \(\vec{v}_1 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}\) und \(\vec{v}_2 = \begin{pmatrix} 6 \\ 0 \end{pmatrix}\) linear kombiniert werden: \[\vec{v} = 5 \vec{v}_1 + \tfrac{1}{3} \vec{v}_2, \quad \text{also } \lambda_1 = 5,\; \lambda_2 = \tfrac{1}{3}\] Gegenbeispiel: \((0, 0, 1)^T\) ist aus \((1, 0, 0)^T\) und \((0, 1, 0)^T\) nicht linear kombinierbar — die dritte Koordinate liefert die unerfüllbare Gleichung \(1 = 0\).

## Karte: Lineare Abhängigkeit und Unabhängigkeit
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 143

Die Vektoren \(\vec{v}_1, \ldots, \vec{v}_k \in \mathbb{R}^n\) heißen linear abhängig, wenn es \(\lambda_1, \ldots, \lambda_k \in \mathbb{R}\) gibt, von denen mindestens eines ungleich Null ist, mit \[\lambda_1 \vec{v}_1 + \ldots + \lambda_k \vec{v}_k = \vec{0}\] Es gibt dann eine Linearkombination, in der sich die Vektoren genau gegeneinander aufheben. Die Vektoren heißen linear unabhängig, wenn aus dieser Gleichung folgt, dass \(\lambda_1 = \ldots = \lambda_k = 0\) gilt.

## Karte: Basis und Dimension
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 144

Eine minimale Menge von Vektoren des \(\mathbb{R}^n\) heißt Basis, wenn sich mit ihnen durch Linearkombinationen jeder andere Vektor des \(\mathbb{R}^n\) bilden lässt. Die Anzahl der Vektoren in einer Basis heißt Dimension.

## Karte: Standardbasis
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 145

Die Vektoren \(\vec{e}_1 = (1, 0, \ldots, 0)^T\), \(\vec{e}_2 = (0, 1, 0, \ldots)^T\), …, \(\vec{e}_n = (0, \ldots, 0, 1)^T\) bilden die so genannte Standardbasis des \(\mathbb{R}^n\), was den \(\mathbb{R}^n\) zu einem \(n\)-dimensionalen Vektorraum macht.

## Frage: Was sind die Koordinaten eines Vektors im \(\mathbb{R}^n\)?
id: dlpjnm
quelle: VorlesungFolienLAA-2026.pdf, Folie 135

Die Zahlen \(x_1, \ldots, x_n\) im Vektor \(\vec{x} = (x_1, \ldots, x_n)^T\). Die natürliche Zahl \(n\) im Exponenten von \(\mathbb{R}^n\) gibt die Anzahl der Koordinaten seiner Vektoren an.

## Frage: Wie werden Vektoren addiert und mit einem Skalar multipliziert?
id: 1t6lv3e
quelle: VorlesungFolienLAA-2026.pdf, Folien 136-137

Beides erfolgt koordinatenweise: Bei der Addition werden die Koordinaten einzeln addiert (\((\vec{x} + \vec{y})_i = x_i + y_i\)), bei der Multiplikation mit einem Skalar wird jede Koordinate mit \(\lambda\) multipliziert (\((\lambda\vec{x})_i = \lambda x_i\)).

## Frage: Wann heißt ein Vektor \(\vec{v}\) Linearkombination der Vektoren \(\vec{v}_1, \ldots, \vec{v}_k\)?
id: 212kml
quelle: VorlesungFolienLAA-2026.pdf, Folie 139

Wenn er sich mit Zahlen \(\lambda_1, \ldots, \lambda_k \in \mathbb{R}\) darstellen lässt als \(\vec{v} = \lambda_1 \vec{v}_1 + \ldots + \lambda_k \vec{v}_k\). Sprechweise: \(\vec{v}\) lässt sich aus \(\vec{v}_1, \ldots, \vec{v}_k\) linear kombinieren.

## Frage: Wann heißen Vektoren linear unabhängig, wann linear abhängig?
id: 1tj0an3
quelle: VorlesungFolienLAA-2026.pdf, Folie 143

Linear unabhängig, wenn aus \(\lambda_1 \vec{v}_1 + \ldots + \lambda_k \vec{v}_k = \vec{0}\) folgt, dass \(\lambda_1 = \ldots = \lambda_k = 0\). Linear abhängig, wenn es eine solche Linearkombination gibt, bei der mindestens ein \(\lambda_i\) ungleich Null ist — die Vektoren heben sich dann genau gegeneinander auf.

## Frage: Was ist eine Basis des \(\mathbb{R}^n\)?
id: 17api19
quelle: VorlesungFolienLAA-2026.pdf, Folie 144

Eine minimale Menge von Vektoren, mit denen sich durch Linearkombinationen jeder andere Vektor des \(\mathbb{R}^n\) bilden lässt.

## Frage: Was ist die Dimension?
id: fl4zfd
quelle: VorlesungFolienLAA-2026.pdf, Folien 144-145

Die Anzahl der Vektoren in einer Basis. Der \(\mathbb{R}^n\) ist wegen der Standardbasis aus \(n\) Vektoren ein \(n\)-dimensionaler Vektorraum.

## Frage: Was ist die Standardbasis des \(\mathbb{R}^n\)?
id: 1ikikqj
quelle: VorlesungFolienLAA-2026.pdf, Folie 145

Die Vektoren \(\vec{e}_1 = (1, 0, \ldots, 0)^T\) bis \(\vec{e}_n = (0, \ldots, 0, 1)^T\) — bei jedem ist genau eine Koordinate 1 und alle anderen sind 0.

## Aufgabe: Aufgabe 28 (Variante)
id: aufgabe-28-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 28

Finden Sie diejenigen Zahlen \(\alpha \in \mathbb{R}\), für die folgende Vektoren eine Basis des \(\mathbb{R}^3\) bilden: \[\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \quad \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}, \quad \begin{pmatrix} \alpha \\ 0 \\ 1 \end{pmatrix}\]
