---
id: maechtigkeit
title: Mächtigkeit und Abzählbarkeit
icon: ♾️
---

## Karte: Gleichmächtigkeit
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 136-137

Existiert eine bijektive Abbildung zwischen den Mengen \(A\) und \(B\), so heißen \(A\) und \(B\) <em>gleichmächtig</em>. Beispiel: \(\{0, 1, 2, 3, 4, \ldots\}\) und \(\{0, 5, 10, 15, 20, \ldots\}\) sind gleichmächtig mit \(n \mapsto f(n) = 5n\). Gleichmächtigkeit ist eine Äquivalenzrelation.

## Karte: Mächtigkeit endlicher Mengen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 138

Bei einer endlichen Menge \(M\) bezeichnet die <em>Mächtigkeit</em> (auch Kardinalität) die Anzahl der Elemente von \(M\), bezeichnet durch \(|M|\). Beispiele: \(A = \{1, \pi, 7, 100\} \Rightarrow |A| = 4\); \(B = \{\text{Tetraeder}, \text{Hexaeder}, \text{Oktaeder}, \text{Dodekaeder}\} \Rightarrow |B| = 4\); \(C = \{\text{rot}, \text{gelb}, \text{blau}, \text{orange}, \text{lila}\} \Rightarrow |C| = 5\).

## Karte: Mächtigkeit der Potenzmenge
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folie 139

Die Potenzmenge \(\mathcal{P}(M)\) einer endlichen Menge \(M\) hat genau \(2^{|M|}\) Elemente. Das Problem der Kardinalität unendlicher Mengen ist komplizierter.

## Karte: Abzählbar und überabzählbar
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 140-143

Eine Menge \(M\) heißt <em>abzählbar unendlich</em>, wenn sie die gleiche Mächtigkeit wie \(\mathbb{N}\) hat, d. h. wenn es eine bijektive Abbildung zwischen \(M\) und \(\mathbb{N}\) gibt; ihre Elemente lassen sich mit natürlichen Zahlen durchnummerieren. Eine Menge, die weder endlich noch abzählbar unendlich ist, heißt <em>überabzählbar</em>. \(\mathbb{N}\) ist per Definition abzählbar unendlich, auch \(\mathbb{Z}\) ist abzählbar unendlich. \(\mathbb{R}\) ist überabzählbar.

## Karte: Die rationalen Zahlen sind abzählbar
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 144

Man ordnet alle Brüche in einem Schema an (Zeilen nach Nenner, Spalten nach Zähler, positiv und negativ), das ganz \(\mathbb{Q}\) umfasst, jedoch auch alle ungekürzten Brüche. Wird das Schema „diagonal“ durchlaufen, lässt sich eine surjektive Abbildung \(d: \mathbb{N} \to \mathbb{Q}\) erklären. Überspringt man alle Brüche, die in anderer Darstellung bereits erfasst wurden, wird die Abbildung bijektiv.

## Karte: Einordnung der Diskreten Mathematik
quelle: DiskreteMathematikVLHO.pdf, Folien 145-147

Die Diskrete Mathematik befasst sich mit mathematischen Operationen auf endlichen oder (höchstens) abzählbar unendlichen Mengen, im Gegensatz z. B. zur Analysis mit kontinuierlichen Funktionen auf nicht abzählbaren, unendlichen Mengen. Einordnung des Bisherigen: Logik (kommt mit 0 und 1 aus, Basis für Mathematik, Computerbau wie Halbaddierer und Programmierung), Mengen (Grundlage für Abbildungen), vollständige Induktion (Beweisprinzip für alle natürlichen Zahlen, z. B. für den binomischen Lehrsatz), Abbildungen (Basis z. B. für Bijektivität und Gleichmächtigkeit), Relationen (liefern Abbildungen als Spezialfall; Äquivalenzrelationen sind wichtig in der OOP), Abzählbarkeit (Bedeutung der natürlichen Zahlen im Diskreten).

## Frage: Wann heißen zwei Mengen gleichmächtig?
id: gleichmaechtig
quelle: DiskreteMathematikVLHO.pdf, Folie 136

Wenn eine bijektive Abbildung zwischen ihnen existiert.

## Frage: Was ist die Mächtigkeit \(|M|\) einer endlichen Menge?
id: maechtigkeit-endlich
quelle: DiskreteMathematikVLHO.pdf, Folie 138

Die Anzahl ihrer Elemente (auch Kardinalität genannt).

## Frage: Wie viele Elemente hat die Potenzmenge einer endlichen Menge \(M\)?
id: potenzmenge-maechtigkeit
quelle: DiskreteMathematikVLHO.pdf, Folie 139

Genau \(2^{|M|}\).

## Frage: Was bedeutet „abzählbar unendlich“, was „überabzählbar“?
id: abzaehlbar
quelle: DiskreteMathematikVLHO.pdf, Folie 140

Abzählbar unendlich: gleichmächtig zu \(\mathbb{N}\), die Elemente lassen sich durchnummerieren. Überabzählbar: weder endlich noch abzählbar unendlich.

## Frage: Welche der Mengen \(\mathbb{N}\), \(\mathbb{Z}\), \(\mathbb{Q}\), \(\mathbb{R}\) sind abzählbar unendlich?
id: abzaehlbare-zahlbereiche
quelle: DiskreteMathematikVLHO.pdf, Folien 141-144

\(\mathbb{N}\), \(\mathbb{Z}\) und \(\mathbb{Q}\); \(\mathbb{R}\) ist überabzählbar.

## Frage: Wie zeigt man, dass \(\mathbb{Q}\) abzählbar ist?
id: q-abzaehlbar
quelle: DiskreteMathematikVLHO.pdf, Folie 144

Alle Brüche in einem Schema anordnen und diagonal durchlaufen; das liefert eine surjektive Abbildung \(\mathbb{N} \to \mathbb{Q}\). Überspringt man bereits erfasste Brüche, wird sie bijektiv.

## Frage: Womit befasst sich die Diskrete Mathematik im Unterschied zur Analysis?
id: diskrete-mathematik
quelle: DiskreteMathematikVLHO.pdf, Folie 145

Mit Operationen auf endlichen oder höchstens abzählbar unendlichen Mengen; die Analysis befasst sich mit kontinuierlichen Funktionen auf nicht abzählbaren, unendlichen Mengen.
