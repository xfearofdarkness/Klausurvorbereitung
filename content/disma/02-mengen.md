---
id: mengen
title: Mengen
icon: 🫧
---

## Karte: Menge und Element
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 31

Eine <em>Menge</em> ist die Zusammenfassung unterscheidbarer Objekte zu einem Ganzen. Die Objekte heißen <em>Elemente</em> der Menge. Ist ein Objekt \(x\) ein Element einer Menge \(M\), schreibt man \(x \in M\); ist \(x\) kein Element von \(M\), dann \(x \notin M\).

## Karte: Mengen angeben
quelle: DiskreteMathematikVLHO.pdf, Folien 32-35

Mengen lassen sich durch explizite Aufzählung definieren, z. B. \(M := \{0, 2, 1008\}\), oder durch eine Eigenschaft \(E\) der Elemente: \(M := \{x \mid x \text{ hat die Eigenschaft } E\}\), gelesen „\(M\) ist die Menge aller \(x\), für die gilt: \(x\) hat die Eigenschaft \(E\).“ Das Symbol \(:=\) deutet immer an, dass es sich um eine Definition handelt. Beispiel: \(G := \{x \mid x \text{ ist eine ganze Zahl zwischen } -2 \text{ und } 4\}\) liefert \(G = \{-1, 0, 1, 2, 3\}\); hier ist das reine Gleichheitszeichen gerechtfertigt.

## Karte: Keine Reihenfolge
quelle: DiskreteMathematikVLHO.pdf, Folie 36

Für die Elemente einer Menge ist keine Reihenfolge ausgezeichnet. Z. B. gilt \(\{2, 10, 16\} = \{10, 16, 2\}\).

## Karte: Beispiel: Kreisring
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 37-38

Die Menge \(R := \{(x, y) \text{ in der Ebene} \mid 1 \le x^2 + y^2 \le 9,\ x, y \text{ reell}\}\) ist in der Skizze ein Kreisring um den Ursprung mit innerem Radius 1 und äußerem Radius 3 (nach Pythagoras ist \(x^2 + y^2 = r^2\)).

## Karte: Häufig verwendete Mengen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 39

\(\emptyset\): leere Menge, sie enthält keine Elemente, \(\emptyset = \{\}\). \(\mathbb{N} = \{0, 1, 2, 3, \ldots\}\): natürliche Zahlen. \(\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}\): ganze Zahlen. \(\mathbb{Q}\): rationale Zahlen, die sich als Bruch \(\frac{p}{q}\) mit \(p, q \in \mathbb{Z}\), \(q \ne 0\) darstellen lassen. \(\mathbb{R}\): reelle Zahlen, also die rationalen und irrationalen; die irrationalen lassen sich nicht als Bruch darstellen, z. B. \(\sqrt{2}\) oder \(\pi\).

## Karte: Vereinigung, Schnitt, Differenz
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 40-42

Aus bekannten Mengen lassen sich neue bilden: \[A \cup B := \{x \mid x \in A \text{ oder } x \in B\} \quad (\text{Vereinigung}),\] \[A \cap B := \{x \mid x \in A \text{ und } x \in B\} \quad (\text{Schnitt}),\] \[A \setminus B := \{x \mid x \in A \text{ und } x \notin B\} \quad (\text{Differenz}).\]

## Karte: Teilmenge
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 43-46

Es ist \(A \subseteq B\) („\(A\) ist Teilmenge von \(B\)“), wenn aus \(x \in A\) folgt, dass \(x \in B\) ist. Es gilt \(A \subseteq A\). \(A\) heißt <em>echte</em> Teilmenge von \(B\), wenn \(A\) nicht \(B\) ist; man schreibt dann \(A \subset B\). Manchmal steht \(\subset\) einfach für Teilmenge (ohne „echt“ sein zu müssen), und \(\subsetneq\) bezeichnet echte Teilmengen.

## Karte: Beispiel zu Mengenoperationen
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 45

Seien \(M_1 := \{2, 10, 16\}\), \(M_2 := \{2, 10, 15, 16, 21\}\) und \(M_3 := \{0, 2, 4, 6, \ldots\}\). Dann gilt \(M_1 \subset M_2\), \(M_1 \subset M_3\), \(M_2 \not\subset M_3\), \(M_1 \cap M_2 = M_1\), \(M_2 \setminus M_3 = \{15, 21\}\) und \(M_1 \cup M_2 = M_2\).

## Karte: Gleichheit von Mengen beweisen
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 47-48

Vereinigen und Schneiden lassen sich auch mehr als zwei Mengen, etwa \(A \cup B \cup C\) oder \((A \cup B \cup C) \cap (A \cup B)\). Die Gleichheit zweier Mengen beweist man, indem man zeigt, dass jedes Element der ersten Menge auch in der zweiten enthalten ist und jedes Element der zweiten in der ersten. Dann gibt es kein Element, worin sich die beiden Mengen unterscheiden, folglich sind sie gleich.

## Karte: Intervalle
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 49-51

Offen: \(]a, b[ := \{x \in \mathbb{R} \mid a < x < b\}\). Abgeschlossen: \([a, b] := \{x \in \mathbb{R} \mid a \le x \le b\}\). Halboffen: \(]a, b] := \{x \in \mathbb{R} \mid a < x \le b\}\) oder \([a, b[ := \{x \in \mathbb{R} \mid a \le x < b\}\). Uneigentlich: \(]-\infty, b] := \{x \in \mathbb{R} \mid x \le b\}\), \(]-\infty, b[ := \{x \in \mathbb{R} \mid x < b\}\), \([a, +\infty[ := \{x \in \mathbb{R} \mid a \le x\}\), \(]a, +\infty[ := \{x \in \mathbb{R} \mid a < x\}\), \(]-\infty, +\infty[ := \mathbb{R}\). Statt der vom Element weg zeigenden eckigen Klammern werden in der Literatur teils runde verwendet: \((a, b] = ]a, b]\) und \([a, b) = [a, b[\).

## Karte: Potenzmenge
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 52

Die Potenzmenge \(P(X)\) ist die Menge aller Teilmengen einer gegebenen Menge \(X\): \(P(X) = \{U \mid U \subseteq X\}\). Beispiele: \(P(\{a, b\}) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}\) und \(P(\emptyset) = \{\emptyset\}\).

## Karte: Rechenregeln für Mengen
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folien 53-54

Für Mengen \(A\), \(B\), \(C\) gilt: Kommutativität \(A \cap B = B \cap A\), \(A \cup B = B \cup A\); Assoziativität \(A \cup (B \cup C) = (A \cup B) \cup C\), \(A \cap (B \cap C) = (A \cap B) \cap C\); Distributivität \(A \cap (B \cup C) = (A \cap B) \cup (A \cap C)\), \(A \cup (B \cap C) = (A \cup B) \cap (A \cup C)\); Adjunktivität \(A \cap (A \cup B) = A\), \(A \cup (A \cap B) = A\); Idempotenz \(A \cap A = A\), \(A \cup A = A\); Regeln von de Morgan \(C \setminus (A \cup B) = (C \setminus A) \cap (C \setminus B)\), \(C \setminus (A \cap B) = (C \setminus A) \cup (C \setminus B)\).

## Karte: Vereinigung und Schnitt vieler Mengen
quelle: DiskreteMathematikVLHO.pdf, Folien 55-56

Abkürzend: \(\bigcup_{i=1}^{n} A_i := A_1 \cup A_2 \cup \ldots \cup A_n\) und \(\bigcap_{i=1}^{n} A_i := A_1 \cap A_2 \cap \ldots \cap A_n\). Will man aus durchnummerierten Mengen \(A_1, A_2, \ldots\) nur einige auswählen, etwa alle \(A_k\), deren Index \(k\) eine Primzahl ist, führt man eine Indexmenge ein, hier \(I := \{k \mid k \text{ ist eine Primzahl}\}\), und schreibt \(\bigcup_{i \in I} A_i\) bzw. \(\bigcap_{i \in I} A_i\).

## Karte: Kartesisches Produkt
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 57-59

Das <em>kartesische Produkt</em> von \(n\) Mengen \(A_1, \ldots, A_n\) ist die Menge aller <em>geordneten</em> Elemente: \[A_1 \times \cdots \times A_n := \{(a_1, \ldots, a_n) \mid a_1 \in A_1, \ldots, a_n \in A_n\}.\] Ein Element \((a_1, \ldots, a_n)\) heißt \(n\)-Tupel, für \(n = 2\) Paar, für \(n = 3\) Tripel. Für eine Menge \(M\) ist \(M^n := M \times \cdots \times M\) (\(n\)-mal). Ein \(n\)-Tupel besteht aus \(n\) nummerierten, nicht notwendig verschiedenen Objekten, deren Anordnung (im Gegensatz zu Mengen) zumeist von Bedeutung ist. Das Paar \((1, 3)\) beschreibt den Punkt mit \(x = 1\) und \(y = 3\) in der Zahlenebene.

## Frage: Was ist eine Menge?
id: menge
quelle: DiskreteMathematikVLHO.pdf, Folie 31

Die Zusammenfassung unterscheidbarer Objekte zu einem Ganzen; die Objekte heißen Elemente der Menge.

## Frage: Was bedeutet das Symbol \(:=\)?
id: definitionszeichen
quelle: DiskreteMathematikVLHO.pdf, Folie 33

Es deutet immer an, dass es sich um eine Definition handelt.

## Frage: Ist \(\{2, 10, 16\} = \{10, 16, 2\}\)?
id: mengen-reihenfolge
quelle: DiskreteMathematikVLHO.pdf, Folie 36

Ja. Für die Elemente einer Menge ist keine Reihenfolge ausgezeichnet.

## Frage: Wie sind \(\mathbb{N}\), \(\mathbb{Z}\), \(\mathbb{Q}\) und \(\mathbb{R}\) erklärt?
id: zahlbereiche
quelle: DiskreteMathematikVLHO.pdf, Folie 39

\(\mathbb{N} = \{0, 1, 2, \ldots\}\), \(\mathbb{Z} = \{\ldots, -1, 0, 1, \ldots\}\), \(\mathbb{Q}\): als Bruch \(\frac{p}{q}\) mit \(p, q \in \mathbb{Z}\), \(q \ne 0\) darstellbar, \(\mathbb{R}\): rationale und irrationale Zahlen (nicht als Bruch darstellbar, z. B. \(\sqrt{2}\), \(\pi\)).

## Frage: Wie sind \(A \cup B\), \(A \cap B\) und \(A \setminus B\) definiert?
id: mengenoperationen
quelle: DiskreteMathematikVLHO.pdf, Folien 40-42

\(A \cup B := \{x \mid x \in A \text{ oder } x \in B\}\), \(A \cap B := \{x \mid x \in A \text{ und } x \in B\}\), \(A \setminus B := \{x \mid x \in A \text{ und } x \notin B\}\).

## Frage: Wann ist \(A \subseteq B\), wann ist \(A\) echte Teilmenge von \(B\)?
id: teilmenge
quelle: DiskreteMathematikVLHO.pdf, Folien 43-44

\(A \subseteq B\), wenn aus \(x \in A\) folgt, dass \(x \in B\) ist. Echte Teilmenge (\(A \subset B\)), wenn zusätzlich \(A\) nicht \(B\) ist.

## Frage: Wie beweist man die Gleichheit zweier Mengen?
id: mengengleichheit
quelle: DiskreteMathematikVLHO.pdf, Folie 48

Man zeigt, dass jedes Element der ersten Menge in der zweiten enthalten ist und jedes Element der zweiten in der ersten.

## Frage: Was ist \([a, b[\)?
id: halboffenes-intervall
quelle: DiskreteMathematikVLHO.pdf, Folie 49

Das halboffene Intervall \(\{x \in \mathbb{R} \mid a \le x < b\}\), in runden Klammern auch \([a, b)\) geschrieben.

## Frage: Was ist die Potenzmenge, und was ist \(P(\emptyset)\)?
id: potenzmenge
quelle: DiskreteMathematikVLHO.pdf, Folie 52

Die Menge aller Teilmengen einer Menge \(X\): \(P(X) = \{U \mid U \subseteq X\}\). Es ist \(P(\emptyset) = \{\emptyset\}\).

## Frage: Wie lauten die Regeln von de Morgan für Mengen?
id: de-morgan
quelle: DiskreteMathematikVLHO.pdf, Folie 54

\(C \setminus (A \cup B) = (C \setminus A) \cap (C \setminus B)\) und \(C \setminus (A \cap B) = (C \setminus A) \cup (C \setminus B)\).

## Frage: Was besagt die Adjunktivität?
id: adjunktivitaet
quelle: DiskreteMathematikVLHO.pdf, Folie 54

\(A \cap (A \cup B) = A\) und \(A \cup (A \cap B) = A\).

## Frage: Wozu dient eine Indexmenge?
id: indexmenge
quelle: DiskreteMathematikVLHO.pdf, Folie 56

Um aus durchnummerierten Mengen \(A_1, A_2, \ldots\) nur bestimmte zu vereinigen oder zu schneiden: \(I\) enthält alle relevanten Indizes, geschrieben \(\bigcup_{i \in I} A_i\) bzw. \(\bigcap_{i \in I} A_i\).

## Frage: Was ist das kartesische Produkt \(A_1 \times \cdots \times A_n\)?
id: kartesisches-produkt
quelle: DiskreteMathematikVLHO.pdf, Folie 57

Die Menge aller geordneten \(n\)-Tupel \((a_1, \ldots, a_n)\) mit \(a_1 \in A_1, \ldots, a_n \in A_n\).

## Frage: Was unterscheidet ein \(n\)-Tupel von einer Menge?
id: tupel-vs-menge
quelle: DiskreteMathematikVLHO.pdf, Folie 58

Bei einem \(n\)-Tupel ist die Anordnung der nummerierten, nicht notwendig verschiedenen Objekte zumeist von Bedeutung; bei einer Menge gibt es keine Reihenfolge.

## Aufgabe: Aufgabe 6 (Variante)
id: aufgabe-6-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 6

Betrachten Sie die Menge \(M\) aller Mengen, die sich nicht selbst als Element enthalten. Schreiben Sie \(M\) formal auf und untersuchen Sie beide Fälle \(M \in M\) und \(M \notin M\). Was folgt daraus?

## Aufgabe: Aufgabe 7 (Variante)
id: aufgabe-7-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 7

Schreiben Sie für \(A := \{x \in \mathbb{R} \mid x \ge -2\}\) und \(B := \{x \in \mathbb{R} \mid x < 3\}\) die Mengen \(A \cup B\), \(A \cap B\), \(A \setminus B\) und \(B \setminus A\) in möglichst einfacher Form, z. B. als Intervalle, auf.

## Aufgabe: Potenzmenge
id: rm-potenzmenge
generator: potenzmenge
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 8; DiskreteMathematikVLHO.pdf, Folien 52 und 139

## Aufgabe: Aufgabe 9 (Variante)
id: aufgabe-9-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 9

Beweisen Sie, dass die folgende Behauptung gilt: \(x \in A \cup (A \cap B) \Rightarrow x \in A\).

## Aufgabe: Aufgabe 10 (Variante)
id: aufgabe-10-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 10

Welche Mengen werden durch folgende Notationen beschrieben? \[\bigcup_{k \in \mathbb{N}} \left[k, k + 1\right[, \qquad \bigcap_{k \in \mathbb{N} \setminus \{0\}} \left]-\tfrac{1}{k}, \tfrac{1}{k}\right[, \qquad \bigcup_{k=1}^{\infty} \{x \in \mathbb{R} \mid xk \in \mathbb{Z}\}\]

## Aufgabe: Kartesisches Produkt
id: rm-kartesisches-produkt
generator: kartesisches-produkt
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 11; DiskreteMathematikVLHO.pdf, Folie 57

## Aufgabe: Aufgabe 11 (Variante)
id: aufgabe-11-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 11

Sei \(A = \{x, y\}\), \(B = \{0, 1\}\) und \(C = \{7\}\). Geben Sie \((A \times B) \times C\) und \(A \times (B \times C)\) an. Worin unterscheiden sich die Elemente?
