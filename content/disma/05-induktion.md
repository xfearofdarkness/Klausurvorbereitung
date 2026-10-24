---
id: induktion
title: Vollständige Induktion
icon: 🪜
---

## Karte: Vollständige Induktion
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 88

Die vollständige Induktion ist durch folgende Regel erklärt, die für ein beliebiges Prädikat \(A(\cdot)\) gilt, in das natürliche Zahlen eingesetzt werden dürfen: \[(A(0) \land \forall n (A(n) \to A(n+1))) \to \forall n A(n).\] Sie ermöglicht den Beweis der Gültigkeit einer Aussage für die natürlichen Zahlen.

## Karte: Induktionsanfang und Induktionsschritt
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folie 89

Grundidee: Wenn für alle \(n \in \mathbb{N}\) aus \(A(n)\) folgt \(A(n+1)\), dann gilt \(A(1)\), falls \(A(0)\) wahr ist, dann \(A(2)\) usf. Der Beweis besteht aus zwei Teilen: dem Beweis von \(A(0)\) (<em>Induktionsanfang</em>) und \(A(n) \Rightarrow A(n+1)\) (<em>Induktionsschritt</em>). Gilt eine Aussage nur für alle \(n \ge k\) mit festem \(k > 0\), beginnt man mit \(A(k)\) und zeigt \(A(n) \Rightarrow A(n+1)\) für alle \(n \ge k\).

## Karte: Beispiel: Summe der ersten \(n\) Zahlen
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 90-91

Behauptung \(A(n)\): \(1 + 2 + \ldots + n = \frac{n(n+1)}{2}\) für \(n \ge 1\). Induktionsanfang \(n = 1\): Links steht 1, rechts \(\frac{1 \cdot (1+1)}{2} = 1\). Induktionsschritt: \(A(n)\) sei wahr für ein beliebiges, aber festes \(n\). Addition von \(n + 1\) auf beiden Seiten: \[1 + \ldots + n + (n+1) = \frac{n(n+1)}{2} + \frac{2(n+1)}{2} = \frac{(n+2)(n+1)}{2} = \frac{(n+1)((n+1)+1)}{2},\] das ist gerade \(A(n+1)\).

## Frage: Wie lautet die Regel der vollständigen Induktion formal?
id: induktion-regel
quelle: DiskreteMathematikVLHO.pdf, Folie 88

\((A(0) \land \forall n (A(n) \to A(n+1))) \to \forall n A(n)\).

## Frage: Aus welchen zwei Teilen besteht ein Induktionsbeweis?
id: induktion-teile
quelle: DiskreteMathematikVLHO.pdf, Folie 89

Induktionsanfang (Beweis von \(A(0)\) bzw. \(A(k)\)) und Induktionsschritt (Beweis von \(A(n) \Rightarrow A(n+1)\)).

## Frage: Was tut man, wenn eine Aussage erst ab \(n \ge k\) gilt?
id: induktion-ab-k
quelle: DiskreteMathematikVLHO.pdf, Folie 89

Man beginnt mit \(A(k)\) und zeigt \(A(n) \Rightarrow A(n+1)\) für alle \(n \ge k\).

## Frage: Wie lautet der Induktionsschritt für \(1 + 2 + \ldots + n = \frac{n(n+1)}{2}\)?
id: induktion-gauss
quelle: DiskreteMathematikVLHO.pdf, Folien 90-91

Auf beiden Seiten \(n + 1\) addieren: \(\frac{n(n+1)}{2} + \frac{2(n+1)}{2} = \frac{(n+2)(n+1)}{2} = \frac{(n+1)((n+1)+1)}{2}\), also \(A(n+1)\).

## Aufgabe: Aufgabe 14 (Variante)
id: aufgabe-14-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 14

Weisen Sie für natürliche Zahlen \(n\) größer als 0 nach: 1) \(n^2 - n\) ist gerade. 2) \(n^3 - n\) ist durch 3 teilbar.

## Aufgabe: Aufgabe 15 (Variante)
id: aufgabe-15-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 15

Weisen Sie für natürliche Zahlen \(n\) größer als 0 mit vollständiger Induktion nach: \[2 + 4 + \cdots + 2n = n(n + 1)\]

## Aufgabe: Aufgabe 16 (Variante)
id: aufgabe-16-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 16

Zeigen Sie mit vollständiger Induktion: \(3^n > n^3\) für \(n \ge 4\).
