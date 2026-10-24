---
id: matrizen
title: Matrizen
icon: 🔢
---

## Karte: Matrix
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 146-147

Für \(a_{ij} \in \mathbb{R}\), \(i \in \{1, \ldots, m\}\), \(j \in \{1, \ldots, n\}\) heißt \[A := \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{pmatrix} =: (a_{ij})\] eine Matrix vom Format \((m \times n)\) mit Einträgen aus \(\mathbb{R}\). Der erste Index \(i\) heißt Zeilenindex, der zweite Spaltenindex. Die Menge aller \((m \times n)\)-Matrizen wird als \(M(m \times n)\) notiert.

## Karte: Einheitsmatrix
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 148-149

Eine sehr wichtige Matrix ist die Einheitsmatrix \(E_n \in M(n \times n)\) mit Einsen auf der Diagonalen und Nullen sonst. Beim Multiplizieren mit Matrizen übernimmt sie die Rolle, die die 1 bei den reellen Zahlen hat. Statt \(E_n\) wird häufig einfach \(E\) geschrieben, wenn \(n\) klar ist; in der Literatur findet sich auch \(I_n\) bzw. \(I\).

## Karte: Multiplikation von Matrizen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 150-151

Seien \(A := (a_{ij}) \in M(m \times n)\) und \(B := (b_{jk}) \in M(n \times p)\). Dann ist das Matrixprodukt definiert als \[AB := \left(\sum_{j=1}^{n} a_{ij} b_{jk}\right)_{i = 1 \ldots m,\; k = 1 \ldots p}\] Anschaulich: Die Zeilen der linken Matrix werden auf die Spalten der rechten Matrix „gelegt“, aufeinanderliegende Einträge multipliziert und die Ergebnisse addiert.

## Karte: Matrixprodukt für (2×2)-Matrizen
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 152

\[\begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} \begin{pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{pmatrix} = \begin{pmatrix} a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\ a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22} \end{pmatrix}\]

## Karte: Matrix-Vektor-Produkt
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folien 150, 153

Das Matrix-Vektor-Produkt \(A\vec{v}\) ist als Spezialfall des Matrixproduktes erklärt, indem \(\vec{v}\) als \((n \times 1)\)-Matrix aufgefasst wird: \[\begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} a_{11}v_1 + a_{12}v_2 \\ a_{21}v_1 + a_{22}v_2 \end{pmatrix}\]

## Karte: Matrizenmultiplikation ist nicht kommutativ
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 155

Achtung: Die Matrizenmultiplikation ist allgemein nicht kommutativ!

## Karte: Rang einer Matrix
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 154

Der Rang einer Matrix \(A\) (geschrieben Rang \(A\) oder rang \(A\)) ist die Anzahl ihrer linear unabhängigen Spaltenvektoren, was wiederum gleich der Anzahl ihrer linear unabhängigen Zeilenvektoren ist. Diese Aussage kann als Satz und Definition aufgefasst werden.

## Karte: Matrixsumme und Multiplikation mit Skalaren
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 156-157

Seien \(A := (a_{ij})\), \(B := (b_{ij}) \in M(m \times n)\) und \(\lambda \in \mathbb{R}\): \[A + B := (a_{ij} + b_{ij}), \qquad \lambda A := (\lambda a_{ij})\] Beispiel: \(-\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} -1 & -2 \\ -3 & -4 \end{pmatrix}\).

## Karte: Diagonal- und Dreiecksmatrizen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 158

Bei quadratischen Matrizen aus \(M(n \times n)\): Eine Diagonalmatrix hat nur auf der Diagonalen Einträge \(a_{ii}\), sonst Nullen. Bei der oberen Dreiecksmatrix stehen beliebige Zahlen auf und über der Diagonalen (darunter Nullen), bei der unteren Dreiecksmatrix entsprechend auf und unter der Diagonalen.

## Karte: Transponierte und inverse Matrix
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 159

Aus \(A := (a_{ij})\) ergibt sich die transponierte Matrix durch \(A^T := (a_{ji})\). Zeilen und Spalten werden vertauscht. Es gilt \((AB)^T = B^T A^T\). Eine quadratische Matrix \(A\) heißt invertierbar, wenn ein \(B \in M(n \times n)\) existiert mit \(AB = E_n\, (= BA)\). Für \(B\) wird dann \(A^{-1}\) geschrieben; sie heißt Inverse von \(A\).

## Karte: Symmetrische Matrix
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 160

\(A \in M(n \times n)\) heißt symmetrisch, falls gilt: \[A = A^T, \quad \text{d. h. } (a_{ij}) = (a_{ji})\]

## Frage: Was bedeutet das Format \((m \times n)\) einer Matrix?
id: 1bv6v3f
quelle: VorlesungFolienLAA-2026.pdf, Folien 146-147

Die Matrix hat \(m\) Zeilen und \(n\) Spalten mit Einträgen \(a_{ij}\). Der erste Index \(i\) heißt Zeilenindex, der zweite Index \(j\) Spaltenindex. Die Menge aller \((m \times n)\)-Matrizen wird als \(M(m \times n)\) notiert.

## Frage: Welche besonderen Typen von Matrizen kennen Sie?
id: 11wjvty
quelle: VorlesungFolienLAA-2026.pdf, Folien 148, 158-160

Einheitsmatrix, Diagonalmatrix, obere und untere Dreiecksmatrix, transponierte Matrix \(A^T\), invertierbare Matrizen mit Inverser \(A^{-1}\) und symmetrische Matrizen (\(A = A^T\)).

## Frage: Welche Rolle spielt die Einheitsmatrix bei der Multiplikation?
id: aehy9i
quelle: VorlesungFolienLAA-2026.pdf, Folie 149

Sie übernimmt die Rolle, die die 1 bei den reellen Zahlen übernimmt.

## Frage: Wie ist das Matrixprodukt \(AB\) definiert?
id: rczur9
quelle: VorlesungFolienLAA-2026.pdf, Folien 150-151

Für \(A \in M(m \times n)\) und \(B \in M(n \times p)\) gilt \(AB = \left(\sum_{j=1}^{n} a_{ij} b_{jk}\right)\). Anschaulich: Die Zeilen der linken Matrix werden auf die Spalten der rechten Matrix „gelegt“, aufeinanderliegende Einträge multipliziert und die Ergebnisse addiert.

## Frage: Was ist der Rang einer Matrix?
id: 4m6ng
quelle: VorlesungFolienLAA-2026.pdf, Folie 154

Die Anzahl ihrer linear unabhängigen Spaltenvektoren. Was gleich der Anzahl ihrer linear unabhängigen Zeilenvektoren ist.

## Frage: Gilt für Matrizen \(AB = BA\)?
id: q5ata2
quelle: VorlesungFolienLAA-2026.pdf, Folie 155

Nein. Die Matrizenmultiplikation ist allgemein nicht kommutativ.

## Frage: Was ist die transponierte Matrix \(A^T\)?
id: j5xvs6
quelle: VorlesungFolienLAA-2026.pdf, Folie 159

\(A^T := (a_{ji})\). Zeilen und Spalten werden vertauscht. Für Produkte gilt die Regel \((AB)^T = B^T A^T\).

## Frage: Wann heißt eine Matrix invertierbar?
id: 1se33z6
quelle: VorlesungFolienLAA-2026.pdf, Folie 159

Eine quadratische Matrix \(A\) heißt invertierbar, wenn ein \(B \in M(n \times n)\) existiert mit \(AB = E_n = BA\). Für \(B\) schreibt man dann \(A^{-1}\); sie heißt Inverse von \(A\).

## Frage: Wann heißt eine Matrix symmetrisch?
id: 1raczjh
quelle: VorlesungFolienLAA-2026.pdf, Folie 160

Wenn \(A = A^T\) gilt, d. h. \(a_{ij} = a_{ji}\) für alle Einträge.

## Aufgabe: Matrixprodukt
id: 1p8eg6a
generator: matrixprodukt-2x2
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Aufgabentyp wie im Übungsblatt.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 29

## Aufgabe: Symmetrische Matrix
id: aufgabe-30-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 30

Für welche reellen Werte von \(\alpha\) ist die Matrix \[A = \begin{pmatrix} \alpha^2 & 4 \\ \alpha + 2 & 1 \end{pmatrix}\] symmetrisch?

## Ablauf: Matrixprodukt Schritt für Schritt
nach: Matrixprodukt für (2×2)-Matrizen
quelle: VorlesungFolienLAA-2026.pdf, Folien 150-152

```json
{
  "id": "matrixprodukt-2x2",
  "intro": "Die Zeilen der linken Matrix werden auf die Spalten der rechten Matrix gelegt; aufeinanderliegende Einträge werden multipliziert und addiert.",
  "visual": {
              "kind": "matrix",
              "operators": ["×","="],
              "matrices": [
                            {"id":"A","label":"Matrix A","values":[[2,1],[0,3]]},
                            {"id":"B","label":"Matrix B","values":[[4,5],[6,7]]},
                            {"id":"C","label":"Matrix C = AB","values":[[null,null],[null,null]]}
                          ]
            },
  "steps": [
             {
               "title": "Erster Anteil für C11",
               "text": "Für C11 wird die erste Zeile von A mit der ersten Spalte von B kombiniert.",
               "explanation": {
                                "action": "Zeile 1 von A auf Spalte 1 von B legen.",
                                "rule": "\\(c_{11} = a_{11} \\cdot b_{11} + a_{12} \\cdot b_{21}\\)",
                                "decision": "Erster Summand: \\(2 \\cdot 4 = 8\\)."
                              },
               "highlights": [
                               {"kind":"matrix-row","matrix":"A","row":0,"role":"active"},
                               {"kind":"matrix-col","matrix":"B","col":0,"role":"active"},
                               {"kind":"matrix-cell","matrix":"A","row":0,"col":0,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"B","row":0,"col":0,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"C","row":0,"col":0,"role":"target"}
                             ],
               "values": [{"kind":"matrix-cell","matrix":"C","row":0,"col":0,"value":8}],
               "formula": "C11 = 2 * 4 + 1 * 6",
               "product": "2 * 4 = 8",
               "sum": "8"
             },
             {
               "title": "C11 fertig addieren",
               "text": "Der zweite Anteil wird addiert; damit ist C11 berechnet.",
               "explanation": {
                                "action": "Den zweiten Summanden addieren.",
                                "rule": "\\(c_{11} = a_{11} \\cdot b_{11} + a_{12} \\cdot b_{21}\\)",
                                "decision": "\\(c_{11} = 8 + 1 \\cdot 6 = 14\\)."
                              },
               "highlights": [
                               {"kind":"matrix-row","matrix":"A","row":0,"role":"active"},
                               {"kind":"matrix-col","matrix":"B","col":0,"role":"active"},
                               {"kind":"matrix-cell","matrix":"A","row":0,"col":1,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"B","row":1,"col":0,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"C","row":0,"col":0,"role":"target"}
                             ],
               "values": [{"kind":"matrix-cell","matrix":"C","row":0,"col":0,"value":14}],
               "formula": "C11 = 2 * 4 + 1 * 6",
               "product": "1 * 6 = 6",
               "sum": "8 + 6 = 14"
             },
             {
               "title": "Erster Anteil für C12",
               "text": "Für C12 bleibt die erste Zeile von A aktiv, aber jetzt wird die zweite Spalte von B verwendet.",
               "explanation": {
                                "action": "Zeile 1 von A auf Spalte 2 von B legen.",
                                "rule": "\\(c_{12} = a_{11} \\cdot b_{12} + a_{12} \\cdot b_{22}\\)",
                                "decision": "Erster Summand: \\(2 \\cdot 5 = 10\\)."
                              },
               "highlights": [
                               {"kind":"matrix-row","matrix":"A","row":0,"role":"active"},
                               {"kind":"matrix-col","matrix":"B","col":1,"role":"active"},
                               {"kind":"matrix-cell","matrix":"A","row":0,"col":0,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"B","row":0,"col":1,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"C","row":0,"col":1,"role":"target"}
                             ],
               "values": [{"kind":"matrix-cell","matrix":"C","row":0,"col":1,"value":10}],
               "formula": "C12 = 2 * 5 + 1 * 7",
               "product": "2 * 5 = 10",
               "sum": "10"
             },
             {
               "title": "C12 fertig addieren",
               "text": "Der zweite Anteil der Zeile-Spalte-Kombination wird ergänzt.",
               "explanation": {
                                "action": "Den zweiten Summanden addieren.",
                                "rule": "\\(c_{12} = a_{11} \\cdot b_{12} + a_{12} \\cdot b_{22}\\)",
                                "decision": "\\(c_{12} = 10 + 1 \\cdot 7 = 17\\)."
                              },
               "highlights": [
                               {"kind":"matrix-row","matrix":"A","row":0,"role":"active"},
                               {"kind":"matrix-col","matrix":"B","col":1,"role":"active"},
                               {"kind":"matrix-cell","matrix":"A","row":0,"col":1,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"B","row":1,"col":1,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"C","row":0,"col":1,"role":"target"}
                             ],
               "values": [{"kind":"matrix-cell","matrix":"C","row":0,"col":1,"value":17}],
               "formula": "C12 = 2 * 5 + 1 * 7",
               "product": "1 * 7 = 7",
               "sum": "10 + 7 = 17"
             },
             {
               "title": "Erster Anteil für C21",
               "text": "Für C21 wird die zweite Zeile von A mit der ersten Spalte von B kombiniert.",
               "explanation": {
                                "action": "Zeile 2 von A auf Spalte 1 von B legen.",
                                "rule": "\\(c_{21} = a_{21} \\cdot b_{11} + a_{22} \\cdot b_{21}\\)",
                                "decision": "Erster Summand: \\(0 \\cdot 4 = 0\\)."
                              },
               "highlights": [
                               {"kind":"matrix-row","matrix":"A","row":1,"role":"active"},
                               {"kind":"matrix-col","matrix":"B","col":0,"role":"active"},
                               {"kind":"matrix-cell","matrix":"A","row":1,"col":0,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"B","row":0,"col":0,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"C","row":1,"col":0,"role":"target"}
                             ],
               "values": [{"kind":"matrix-cell","matrix":"C","row":1,"col":0,"value":0}],
               "formula": "C21 = 0 * 4 + 3 * 6",
               "product": "0 * 4 = 0",
               "sum": "0"
             },
             {
               "title": "C21 fertig addieren",
               "text": "Der zweite Anteil liefert den eigentlichen Wert von C21.",
               "explanation": {
                                "action": "Den zweiten Summanden addieren.",
                                "rule": "\\(c_{21} = a_{21} \\cdot b_{11} + a_{22} \\cdot b_{21}\\)",
                                "decision": "\\(c_{21} = 0 + 3 \\cdot 6 = 18\\)."
                              },
               "highlights": [
                               {"kind":"matrix-row","matrix":"A","row":1,"role":"active"},
                               {"kind":"matrix-col","matrix":"B","col":0,"role":"active"},
                               {"kind":"matrix-cell","matrix":"A","row":1,"col":1,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"B","row":1,"col":0,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"C","row":1,"col":0,"role":"target"}
                             ],
               "values": [{"kind":"matrix-cell","matrix":"C","row":1,"col":0,"value":18}],
               "formula": "C21 = 0 * 4 + 3 * 6",
               "product": "3 * 6 = 18",
               "sum": "0 + 18 = 18"
             },
             {
               "title": "Erster Anteil für C22",
               "text": "Für C22 wird die zweite Zeile von A mit der zweiten Spalte von B kombiniert.",
               "explanation": {
                                "action": "Zeile 2 von A auf Spalte 2 von B legen.",
                                "rule": "\\(c_{22} = a_{21} \\cdot b_{12} + a_{22} \\cdot b_{22}\\)",
                                "decision": "Erster Summand: \\(0 \\cdot 5 = 0\\)."
                              },
               "highlights": [
                               {"kind":"matrix-row","matrix":"A","row":1,"role":"active"},
                               {"kind":"matrix-col","matrix":"B","col":1,"role":"active"},
                               {"kind":"matrix-cell","matrix":"A","row":1,"col":0,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"B","row":0,"col":1,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"C","row":1,"col":1,"role":"target"}
                             ],
               "values": [{"kind":"matrix-cell","matrix":"C","row":1,"col":1,"value":0}],
               "formula": "C22 = 0 * 5 + 3 * 7",
               "product": "0 * 5 = 0",
               "sum": "0"
             },
             {
               "title": "C22 fertig addieren",
               "text": "Nach dem zweiten Anteil ist die Ergebnismatrix vollständig.",
               "explanation": {
                                "action": "Den zweiten Summanden addieren.",
                                "rule": "\\(c_{22} = a_{21} \\cdot b_{12} + a_{22} \\cdot b_{22}\\)",
                                "decision": "\\(c_{22} = 0 + 3 \\cdot 7 = 21\\); die Ergebnismatrix ist vollständig."
                              },
               "highlights": [
                               {"kind":"matrix-row","matrix":"A","row":1,"role":"active"},
                               {"kind":"matrix-col","matrix":"B","col":1,"role":"active"},
                               {"kind":"matrix-cell","matrix":"A","row":1,"col":1,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"B","row":1,"col":1,"role":"factor"},
                               {"kind":"matrix-cell","matrix":"C","row":1,"col":1,"role":"target"}
                             ],
               "values": [{"kind":"matrix-cell","matrix":"C","row":1,"col":1,"value":21}],
               "formula": "C22 = 0 * 5 + 3 * 7",
               "product": "3 * 7 = 21",
               "sum": "0 + 21 = 21"
             }
           ]
}
```
