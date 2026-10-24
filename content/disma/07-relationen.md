---
id: relationen
title: Relationen
icon: 🔗
---

## Karte: Relation
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 120-121

Relationen stellen Beziehungen zwischen Elementen von Mengen her; die Relation ist ein fundamentaler Begriff der Mathematik und Informatik. Jede Teilmenge \(R \subset M_1 \times \cdots \times M_n\) heißt \(n\)-stellige Relation. Oft verwendet werden 2-stellige (binäre) Relationen \(R \subset M_1 \times M_2\), die als Zuordnungen aufgefasst werden können: Elementen aus \(M_1\) werden nach einer definierten Vorschrift Elemente aus \(M_2\) zugeordnet. Statt \((a, b) \in R\) schreibt man auch \(aRb\).

## Karte: Beispiele für Relationen
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 122-123

Ordnungsrelation \(<\), Gleichheitsrelation \(=\), Senkrechtsrelation \(\perp\) usw. Die Skizze zeigt auf \(M = \{1, 3, 4, 5, 7\}\) die Ordnungsrelation (blaue Pfeile) und die Gleichheitsrelation (rote Schleifen an jedem Element).

## Karte: Eigenschaften von Relationen
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folie 124

Eine Relation \(R\) auf \(A\) heißt <ul><li><em>reflexiv</em>, falls \(\forall a \in A:\ aRa\),</li><li><em>irreflexiv</em>, falls \(\forall a \in A:\ \neg aRa\),</li><li><em>symmetrisch</em>, falls \(\forall a, b \in A:\ (aRb \Rightarrow bRa)\),</li><li><em>antisymmetrisch</em>, falls \(\forall a, b \in A:\ (aRb \land bRa \Rightarrow a = b)\),</li><li><em>transitiv</em>, falls \(\forall a, b, c \in A:\ (aRb \land bRc \Rightarrow aRc)\).</li></ul>

## Karte: Beispiel: reflexiv
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 126-129

Auf \(A = \{a, b, c\}\): \(R_1 = \{(a,a), (c,c)\}\) ist nicht reflexiv, da \((b,b)\) fehlt. \(R_2 = \{(a,c), (b,b), (b,c), (a,a), (b,a), (c,c)\}\) ist reflexiv. \(R_3 = \emptyset\) ist nicht reflexiv.

## Karte: Beispiel: symmetrisch
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 130-134

Auf \(A = \{a, b, c\}\): \(R_1 = \{(a,a), (c,c)\}\) ist symmetrisch. \(R_2 = \{(a,c), (b,b), (b,c), (a,a), (c,b), (c,c)\}\) ist nicht symmetrisch, da \((a,c)\), aber nicht \((c,a)\) enthalten ist. \(R_3 = \{(a,c), (b,b), (c,a)\}\) und \(R_4 = \emptyset\) sind symmetrisch.

## Karte: Äquivalenzrelation
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 135

Eine besonders wichtige Relation ist die <em>Äquivalenzrelation</em>: eine reflexive, symmetrische und transitive Relation.

## Frage: Was ist eine \(n\)-stellige Relation?
id: relation
quelle: DiskreteMathematikVLHO.pdf, Folie 121

Jede Teilmenge \(R \subset M_1 \times \cdots \times M_n\). Für binäre Relationen schreibt man statt \((a, b) \in R\) auch \(aRb\).

## Frage: Wann ist eine Relation \(R\) auf \(A\) reflexiv, wann irreflexiv?
id: reflexiv-irreflexiv
quelle: DiskreteMathematikVLHO.pdf, Folie 124

Reflexiv: \(aRa\) für alle \(a \in A\). Irreflexiv: \(\neg aRa\) für alle \(a \in A\).

## Frage: Wann ist eine Relation symmetrisch, wann antisymmetrisch?
id: symmetrisch-antisymmetrisch
quelle: DiskreteMathematikVLHO.pdf, Folie 124

Symmetrisch: aus \(aRb\) folgt \(bRa\). Antisymmetrisch: aus \(aRb\) und \(bRa\) folgt \(a = b\).

## Frage: Wann ist eine Relation transitiv?
id: transitiv
quelle: DiskreteMathematikVLHO.pdf, Folie 124

Wenn für alle \(a, b, c \in A\) aus \(aRb\) und \(bRc\) folgt \(aRc\).

## Frage: Ist \(R_1 = \{(a,a), (c,c)\}\) auf \(A = \{a, b, c\}\) reflexiv? Ist sie symmetrisch?
id: r1-reflexiv-symmetrisch
quelle: DiskreteMathematikVLHO.pdf, Folien 129 und 134

Nicht reflexiv, da \((b,b)\) fehlt; aber symmetrisch.

## Frage: Was ist eine Äquivalenzrelation?
id: aequivalenzrelation
quelle: DiskreteMathematikVLHO.pdf, Folie 135

Eine reflexive, symmetrische und transitive Relation.

## Aufgabe: Eigenschaften von Relationen
id: rm-relation-eigenschaften
generator: relation-eigenschaften
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: ÜbungsaufgabenDisMa.pdf, Aufgaben 21-22; DiskreteMathematikVLHO.pdf, Folie 124

## Aufgabe: Irreflexive Relationen
id: aufgabe-21-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 21

Sei \(A = \{a, b, c\}\). 1) Welche der Relationen \(R_1 = \{(b, b)\}\), \(R_2 = \{(a, b), (b, c), (c, a)\}\), \(R_3 = \{(a, a), (b, b), (c, c)\}\) sind irreflexiv? 2) Welche der Relationen \(R_4 = \{(a, b), (b, a), (a, a)\}\), \(R_5 = \{(a, b), (b, c), (a, c)\}\), \(R_6 = \{(c, c)\}\) sind transitiv?

## Aufgabe: Eigenschaften einer Relation
id: aufgabe-22-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 22

Sei \(A = \{a, b, c\}\) und \(R = \{(a, a), (b, b), (c, c), (a, b), (b, a), (b, c)\}\) eine Relation auf \(A\). Welche der Eigenschaften reflexiv, irreflexiv, symmetrisch, antisymmetrisch und transitiv gelten?
