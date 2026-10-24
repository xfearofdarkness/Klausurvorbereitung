---
id: schubfachprinzip
title: Schubfachprinzip und Hashing
icon: 🗄️
---

## Karte: Schubfachprinzip
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folien 149-150

Seien \(n\) und \(m\) natürliche Zahlen größer Null. Falls man \(n\) Objekte auf \(m\) Mengen verteilt und \(n > m\) gilt, dann gibt es wenigstens eine Menge, in der mehr als ein Objekt ist. Äquivalent: Falls man \(n\) Objekte auf \(m\) Mengen verteilt und \(n < m\) gilt, dann gibt es mindestens eine Menge, in der kein Objekt ist. Der Name: Hat man mehr Objekte als Schubfächer, kommen in ein Fach wenigstens zwei Objekte. Es heißt auch Dirichlet-Prinzip, da es (soweit bekannt) J. P. G. L. Dirichlet 1834 erstmals verwendete.

## Karte: Beweis des Schubfachprinzips
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folie 151

Beweis für die erste Formulierung: Falls das Prinzip falsch ist, kommt in jedes Schubfach höchstens ein Objekt. Damit gibt es jedoch höchstens so viele Objekte wie Schubfächer, was im Widerspruch zur Voraussetzung steht, nach der es mehr Objekte als Schubfächer gibt.

## Karte: Beispiel: Haare in Berlin
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 148 und 152

Behauptung: In Berlin gibt es wenigstens zwei Menschen mit exakt gleicher Anzahl an Haaren auf dem Kopf. Man teilt alle Einwohner gedanklich nach ihrer Haarzahl in Schubfächer ein. Ein gewöhnlicher Mensch hat etwa \(10^5\) bis \(2 \times 10^5\) Haare, sicher weniger als \(10^6\). Also gibt es höchstens \(10^6\) Schubfächer (0 bis 999999). Bei etwa \(3{,}5 \times 10^6\) Einwohnern gibt es mehr Einwohner als Schubfächer, also kommen in wenigstens ein Fach zwei (oder mehr) Personen; diese haben die identische Haarzahl.

## Karte: Hashfunktionen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 153-156

Hashfunktionen sind Abbildungen, die eine Eingabemenge auf eine Zielmenge mit kleinerer Mächtigkeit abbilden; die Eingaben können unterschiedlich lang sein, die Elemente der Zielmenge haben (meist) eine feste Länge. Allgemein ist Hashing eine Abbildung einer (abzählbar) unendlichen Menge \(U\) auf eine endliche Menge \(E\). Für Objekte \(x \in U\), z. B. Datensätze, berechnet man den Hashwert \(h(x)\), den Zugriffsschlüssel für die Position von \(x\) in der Hashwertetabelle. Eine Hashfunktion ist nicht injektiv: Es kommt zu <em>Kollisionen</em>, wenn verschiedene Objekte denselben Hashwert haben (im Beispiel der Folie Robocop und Catwoman).

## Karte: Kollisionen und Schubfachprinzip
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folie 157

Für \(U = \mathbb{N}\) und eine Hashwertetabelle mit \(n\) Positionen folgt aus dem Schubfachprinzip: Eine Kollision findet spätestens beim \((n+1)\)-ten Objekt in \(U\) statt.

## Frage: Was besagt das Schubfachprinzip?
id: schubfachprinzip
quelle: DiskreteMathematikVLHO.pdf, Folie 149

Verteilt man \(n\) Objekte auf \(m\) Mengen mit \(n > m\), gibt es wenigstens eine Menge mit mehr als einem Objekt.

## Frage: Wie lautet die äquivalente Formulierung des Schubfachprinzips?
id: schubfach-aequivalent
quelle: DiskreteMathematikVLHO.pdf, Folie 149

Verteilt man \(n\) Objekte auf \(m\) Mengen mit \(n < m\), gibt es mindestens eine Menge, in der kein Objekt ist.

## Frage: Wie beweist man das Schubfachprinzip?
id: schubfach-beweis
quelle: DiskreteMathematikVLHO.pdf, Folie 151

Durch Widerspruch: Wäre es falsch, käme in jedes Fach höchstens ein Objekt, es gäbe also höchstens so viele Objekte wie Fächer, im Widerspruch zur Voraussetzung.

## Frage: Wie heißt das Schubfachprinzip noch?
id: dirichlet
quelle: DiskreteMathematikVLHO.pdf, Folie 150

Dirichlet-Prinzip, nach J. P. G. L. Dirichlet, der es 1834 erstmals verwendete.

## Frage: Was ist eine Hashfunktion, und ist sie injektiv?
id: hashfunktion
quelle: DiskreteMathematikVLHO.pdf, Folien 153-154

Eine Abbildung einer Eingabemenge auf eine Zielmenge mit kleinerer Mächtigkeit. Sie ist nicht injektiv.

## Frage: Was ist beim Hashing eine Kollision?
id: kollision
quelle: DiskreteMathematikVLHO.pdf, Folie 155

Verschiedene Objekte aus \(U\) haben denselben Hashwert.

## Frage: Wann tritt bei \(n\) Hashwerten spätestens eine Kollision auf?
id: kollision-schubfach
quelle: DiskreteMathematikVLHO.pdf, Folie 157

Nach dem Schubfachprinzip spätestens beim \((n+1)\)-ten Objekt.

## Aufgabe: Aufgabe 23 (Variante)
id: aufgabe-23-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 23

a) Auf einem Fest sind 13 Kinder im Alter von 7 bis 10 Jahren. Garantiert dies, dass wenigstens vier Kinder gleich alt sind? b) Auf ein quadratisches Ziel mit der Seitenlänge 2 werden fünf Treffer abgegeben. Zeigen Sie, dass es zwei Treffer gibt, deren Abstand höchstens \(\sqrt{2}\) ist.
