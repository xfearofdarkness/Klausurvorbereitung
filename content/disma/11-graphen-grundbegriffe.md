---
id: graphen-grundbegriffe
title: Matrizen und Graphen: Grundbegriffe
icon: 🕸️
---

## Karte: Matrizen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 175-177

Matrizen bekommen erst in der Linearen Algebra ihre volle Bedeutung, werden aber bereits in der Graphentheorie benötigt. Für \(a_{ij} \in \mathbb{R}\), \(i \in \{1, \ldots, m\}\), \(j \in \{1, \ldots, n\}\) heißt \[A := \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix} =: (a_{ij})\] eine Matrix vom Format \((m \times n)\) mit Einträgen aus \(\mathbb{R}\), kurz \((m \times n)\)-Matrix oder \((m, n)\)-Matrix. Der erste Index \(i\) heißt Zeilenindex, der zweite Spaltenindex. Die Menge aller \((m \times n)\)-Matrizen wird als \(M(m \times n)\) oder \(M^{m,n}\) notiert.

## Karte: Einheitsmatrix
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 178

Beispiel: \(\begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} \in M(2 \times 2)\). Eine sehr wichtige Matrix ist die Einheitsmatrix \(E_n \in M(n \times n)\) mit Einsen auf der Diagonalen und sonst Nullen.

## Karte: Graphentheorie und Königsberger Brücken
quelle: DiskreteMathematikVLHO.pdf, Folien 179-184

Die Graphentheorie ist ein Teilgebiet der Diskreten Mathematik und befasst sich mit Graphen, die eine endliche Menge von Ecken und Kanten haben. Für die Informatik sind Graphen besonders im Zusammenhang mit Algorithmen interessant; z. B. lassen sich Netzwerke als Graphen interpretieren. Das Königsberger Brückenproblem: In Königsberg teilte sich der Fluss Pregel, und es gab sieben Brücken über die Flussarme. Leonhard Euler wurde 1736 gefragt, ob es einen geschlossenen Rundweg gibt, bei dem man jede Brücke genau einmal überquert (Geburtsstunde der Graphentheorie?).

## Karte: Graph
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 185-186

Eine Menge von Punkten und Linien, die jeweils zwei dieser Punkte verbinden, heißt <em>Graph</em>. Die Punkte heißen Knoten/Ecken, die Linien Kanten des Graphen. Vollständig von Kanten und Knoten eingeschlossene Flächen heißen <em>Gebiet</em> des Graphen; deshalb wird z. B. auch das Färben von Karten in der Graphentheorie untersucht.

## Karte: Knoten- und Kantenmenge
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 187-190

Ein Graph wird durch Knotenmenge und Kantenmenge angegeben, z. B. \(V = \{A, B, C, D, E\}\), \(E = \{c, f, g, h, i, j, k, l\}\). Kanten werden teils auch in Mengenschreibweise angegeben, etwa \(g = \{E, C\}\) für die Kante zwischen \(E\) und \(C\). Auch ein U-Bahn-Netz (Wien) ist ein Graph.

## Karte: Insel, Schlinge, parallel, planar, schlicht
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 191

Ein isolierter Knoten heißt <em>Insel</em>. Zwei Knoten, die durch eine Kante verbunden sind, heißen <em>benachbart</em>. Eine Kante von einem Knoten zu demselben Knoten heißt <em>Schlinge</em>. Zwei Kanten, die dieselben Knoten verbinden, heißen <em>parallel</em>. Ein Graph heißt <em>planar</em>, wenn er sich so in einer Ebene zeichnen lässt, dass sich keine Kanten überschneiden. Ein Graph heißt <em>schlicht</em>, wenn er weder Schlingen noch parallele Kanten enthält.

## Karte: Beispiel: Insel, Schlinge, parallele Kanten
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 193-194

Im Graphen mit \(V = \{A, B, C, D, E\}\) ist \(E\) eine Insel, \(k = \{D, D\}\) eine Schlinge, und es gibt die parallelen Kanten \(a \parallel f\), \(b \parallel i\), \(h \parallel c\) und \(d \parallel e \parallel g\). Lässt man Schlinge und parallele Kanten weg, entsteht ein schlichter Graph; beide Graphen sind planar.

## Karte: Knotengrad
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 195-197

Die Anzahl der in einem Knoten \(K\) ankommenden Kanten heißt Knotengrad \(\deg(K)\). Beispiel: \(\deg(A) = 3\), \(\deg(B) = 5\), \(\deg(C) = 3\), \(\deg(D) = 3\), \(\deg(E) = 0\), Summe 14. Merke: Bei einer Schlinge wird jedes Ende der Schlinge gezählt.

## Karte: Summe der Knotengrade
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folie 199

Sei \(G_n\) ein beliebiger Graph mit \(n \ge 1\) Knoten \(K_1, \ldots, K_n\) und \(e\) die Anzahl seiner Kanten. Dann gilt \[S_n = \sum_{i=1}^{n} \deg(K_i) = 2e.\] Die Summe aller Knotengrade jedes Graphen ist also gleich der doppelten Kantenanzahl.

## Karte: Knotengrade in schlichten Graphen
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folien 201-202

In jedem schlichten Graphen mit \(n \ge 1\) Knoten beträgt der maximal mögliche Knotengrad \(n - 1\). In jedem schlichten Graphen kommt wenigstens ein Knotengrad mindestens zweimal vor.

## Karte: Reguläre Graphen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 203-204

Ein Graph heißt <em>regulär</em>, wenn alle Knoten denselben Knotengrad haben. Hat jeder Knoten den Grad 2 (z. B. ein Fünfeck), nennt man ihn auch quadratisch; hat jeder Knoten den Grad 3 (z. B. ein Würfel), auch kubisch.

## Karte: Vollständige Graphen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 205-208

Ein schlichter Graph, in dem jeder Knoten mit jedem anderen benachbart ist, heißt <em>vollständig</em>. Satz: Jeder vollständige Graph mit \(n\) Knoten hat genau \(e_n = \frac{1}{2} \cdot n(n-1)\) Kanten. <table><thead><tr><th>Knotenanzahl</th><th>Knotengrad</th><th>Kantenanzahl</th></tr></thead><tbody><tr><td>2</td><td>1</td><td>1</td></tr><tr><td>3</td><td>2</td><td>3</td></tr><tr><td>4</td><td>3</td><td>6</td></tr><tr><td>5</td><td>4</td><td>10</td></tr><tr><td>6</td><td>5</td><td>15</td></tr><tr><td>7</td><td>6</td><td>21</td></tr></tbody></table> Ein Graph mit 8 Knoten vom Grad 7 und 28 Kanten ist vollständig.

## Karte: Diagonalen im n-Eck
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folien 209-211

Für die Anzahl \(d_n\) der Diagonalen in einem \(n\)-Eck gilt \(d_n = \frac{1}{2} \cdot n \cdot (n - 3)\); der kleinste sinnvolle Wert für \(n\) ist 3. Vollständige Graphen sind mit Vielecken vergleichbar, in die alle Diagonalen eingezeichnet sind; zieht man von der Kantenanzahl die \(n\) Seiten ab, erhält man \[d_n = e_n - n = \tfrac{1}{2}n(n-1) - n = \tfrac{1}{2}n^2 - \tfrac{3}{2}n = \tfrac{1}{2}(n^2 - 3n) = \tfrac{1}{2}n(n-3).\]

## Frage: Was ist eine \((m \times n)\)-Matrix, und was bezeichnen die Indizes von \(a_{ij}\)?
id: matrix
quelle: DiskreteMathematikVLHO.pdf, Folie 176

Ein Schema von \(m \cdot n\) Einträgen \(a_{ij} \in \mathbb{R}\) in \(m\) Zeilen und \(n\) Spalten; \(i\) ist der Zeilenindex, \(j\) der Spaltenindex.

## Frage: Was ist ein Graph?
id: graph
quelle: DiskreteMathematikVLHO.pdf, Folie 185

Eine Menge von Punkten (Knoten/Ecken) und Linien (Kanten), die jeweils zwei dieser Punkte verbinden. Vollständig eingeschlossene Flächen heißen Gebiete.

## Frage: Was fragte das Königsberger Brückenproblem?
id: koenigsberg
quelle: DiskreteMathematikVLHO.pdf, Folie 181

Ob es einen geschlossenen Rundweg gibt, bei dem man jede der sieben Brücken über die Pregel genau einmal überquert (Euler, 1736).

## Frage: Was ist eine Insel, was eine Schlinge?
id: insel-schlinge
quelle: DiskreteMathematikVLHO.pdf, Folie 191

Insel: ein isolierter Knoten. Schlinge: eine Kante von einem Knoten zu demselben Knoten.

## Frage: Wann heißt ein Graph planar, wann schlicht?
id: planar-schlicht
quelle: DiskreteMathematikVLHO.pdf, Folie 191

Planar: in der Ebene ohne sich überschneidende Kanten zeichenbar. Schlicht: weder Schlingen noch parallele Kanten.

## Frage: Wie wird eine Schlinge beim Knotengrad gezählt?
id: schlinge-knotengrad
quelle: DiskreteMathematikVLHO.pdf, Folie 197

Jedes Ende der Schlinge wird gezählt; sie trägt also 2 zum Knotengrad bei.

## Frage: Was gilt für die Summe aller Knotengrade eines Graphen?
id: knotengradsumme
quelle: DiskreteMathematikVLHO.pdf, Folie 199

Sie ist gleich der doppelten Kantenanzahl: \(\sum_{i=1}^{n} \deg(K_i) = 2e\).

## Frage: Wie groß ist der maximale Knotengrad in einem schlichten Graphen mit \(n\) Knoten?
id: max-knotengrad
quelle: DiskreteMathematikVLHO.pdf, Folie 201

\(n - 1\).

## Frage: Wann heißt ein Graph regulär, quadratisch, kubisch?
id: regulaer
quelle: DiskreteMathematikVLHO.pdf, Folien 203-204

Regulär: alle Knoten haben denselben Grad. Quadratisch: jeder Knoten hat Grad 2. Kubisch: jeder Knoten hat Grad 3.

## Frage: Wie viele Kanten hat ein vollständiger Graph mit \(n\) Knoten?
id: vollstaendig-kanten
quelle: DiskreteMathematikVLHO.pdf, Folie 208

\(e_n = \frac{1}{2} n(n-1)\).

## Frage: Wie viele Diagonalen hat ein \(n\)-Eck, und wie leitet man das her?
id: diagonalen
quelle: DiskreteMathematikVLHO.pdf, Folien 209-211

\(d_n = \frac{1}{2}n(n-3)\): Kantenzahl des vollständigen Graphen minus die \(n\) Seiten, \(d_n = e_n - n\).

## Aufgabe: Summe der Knotengrade
id: aufgabe-25-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 25

Beweisen Sie den Satz aus der Vorlesung, nach dem die Summe aller Knotengrade eines Graphen mit \(e\) Kanten gleich \(2e\) ist. Tipp: Was trägt jede Kante zur Summe bei?

## Aufgabe: Maximaler Knotengrad
id: aufgabe-26-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 26

Beweisen Sie den Satz aus der Vorlesung über den maximal möglichen Knotengrad in einem schlichten Graphen mit \(n \ge 1\) Knoten.

## Aufgabe: Kanten im vollständigen Graphen
id: aufgabe-28-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 28

Beweisen Sie den Satz aus der Vorlesung über die Kantenanzahl \(e_n\) eines vollständigen Graphen mit \(n\) Knoten, z. B. mit vollständiger Induktion.

## Aufgabe: Gerade und ungerade Knotengradsumme
id: folie-198-knotengrade
quelle: DiskreteMathematikVLHO.pdf, Folien 198-200

Zeichnen Sie einen Graphen mit wenigstens fünf Knoten, dessen Knotengradsumme gerade ist, und einen solchen, dessen Knotengradsumme ungerade ist. Überprüfen Sie dabei den Satz über die Summe der Knotengrade.
