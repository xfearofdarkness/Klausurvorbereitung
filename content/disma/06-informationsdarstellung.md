---
id: informationsdarstellung
title: Bits, Bool'sche Funktionen und Schaltungen
icon: 💡
---

## Karte: Brücke zur Informatik
quelle: DiskreteMathematikVLHO.pdf, Folie 92

Auf den folgenden Seiten erscheinen bekannte Dinge teils in neuer Form: Es wird die Brücke zur Informatik geschlagen, das bisher Gelernte eingeordnet und erweitert; manchmal geht es nur um neue bzw. andere Bezeichnungen.

## Karte: Bit und Byte
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 94

Ein <em>Bit</em> ist die kleinste Informationseinheit mit zwei möglichen Werten, 0 oder 1, realisiert durch einen Transistor bzw. eine elementare Schaltung: auf/zu. Ein <em>Byte</em> ist eine Informationseinheit aus 8 Bits, z. B. 00100001; Anwendung etwa zur Codierung von Zeichen (Textzeichen und Steuerzeichen).

## Karte: Dualzahlen und p-adische Darstellung
tag: formel
quelle: DiskreteMathematikVLHO.pdf, Folie 95

Positive ganze Zahlen als Dualzahl (Binärzahl): \(z = z_n 2^n + z_{n-1} 2^{n-1} + \cdots + z_0 2^0\). Beispiele: dezimal 7 ist dual 111 \((1 \cdot 2^2 + 1 \cdot 2^1 + 1 \cdot 2^0)\), dezimal 14 ist dual 1110 \((1 \cdot 2^3 + 1 \cdot 2^2 + 1 \cdot 2^1 + 0 \cdot 2^0)\). Dualzahlen sind ein Spezialfall der \(p\)-adischen Darstellung \(z = z_n p^n + z_{n-1} p^{n-1} + \cdots + z_0 p^0\) mit \(p = 2\). Hexadezimalsystem: \(p = 16\), „Ziffern“ 0–9, A–F; dezimal 15 ist hexadezimal F, dezimal 16 ist 10, dezimal 27 ist 1B.

## Karte: Bool'sche Funktionen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 97

Eine \(n\)-stellige Bool'sche Funktion hat als Definitionsbereich die Menge der 0/1-Folgen der Länge \(n\) und als Wertebereich \(\{0, 1\}\). Sie wird durch Wertetabellen definiert. Beispiel: \(f(a, b, c)\) ist genau dann gleich 1, wenn die Mehrzahl der Parameterwerte gleich 1 ist.

## Karte: Elementare Bool'sche Funktionen
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folie 98

Bool'sche Funktionen lassen sich durch Verknüpfung elementarer Bool'scher Funktionen darstellen: and, or, nand, nor, not. <table><thead><tr><th>a</th><th>b</th><th>and</th><th>or</th><th>nand</th><th>nor</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></tbody></table> not: 0 ↦ 1, 1 ↦ 0. Es gilt nand = nicht and, nor = nicht or; 1 = „true“, 0 = „false“.

## Karte: Disjunktive Normalform
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 99-100

Die <em>disjunktive Normalform</em> stellt eine Bool'sche Funktion einheitlich nur durch and-, or- und not-Verknüpfungen dar. Vorgehen: 1. a) Für alle Zeilen der Tabelle, die den Wert 1 liefern, bilde eine Bool'sche Formel, die alle Eingabeparameter direkt oder negiert enthält; b) ein Parameter wird genau dann negiert, wenn sein Wert in der Zeile 0 ist; c) die Parameter werden mit and verknüpft. 2. Verknüpfe die entstehenden Formeln mit or. Schreibweise: \(*\) entspricht and (\(\land\)), \(+\) entspricht or (\(\lor\)), \(\bar{a}\) entspricht not (\(\neg\)). Optimierung: Die Formeln lassen sich häufig verkürzen (weniger Operationen).

## Karte: Beispiel zur disjunktiven Normalform
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 99

Für die Mehrheitsfunktion \(f(a, b, c)\) liefern die Zeilen 011, 101, 110 und 111 den Wert 1. Also \(\bar{a} * b * c + a * \bar{b} * c + a * b * \bar{c} + a * b * c = f(a, b, c)\) bzw. \((\neg a \land b \land c) \lor (a \land \neg b \land c) \lor (a \land b \land \neg c) \lor (a \land b \land c)\).

## Karte: Gatter und Schaltkreise
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 103-108

Ein Bool'scher Schaltkreis stellt eine Bool'sche Funktion durch Verknüpfung von Gattern dar; Gatter entsprechen den elementaren Bool'schen Funktionen (and-, or-, nand-, nor-, not-Gatter; nand und nor auch als and- bzw. or-Gatter mit Negationskreis am Ausgang). Beispiel: Die Tabelle mit \(S = 1\) genau für \((a, b) = (0, 1)\) und \((1, 0)\) ergibt \(S = \bar{a} * b + a * \bar{b}\), das „exklusive oder“ (xor). Als Schaltung: \(a\) und \(b\) gehen jeweils einmal über ein not-Gatter, zwei and-Gatter bilden \(\bar{a} * b\) und \(a * \bar{b}\), ein or-Gatter verknüpft sie zu \(S\). Ebenso lässt sich die disjunktive Normalform der Mehrheitsfunktion mit drei not-, vier and- und einem or-Gatter verschalten.

## Karte: Halbaddierer und 1-Bit-Addierer
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 109-112

Der <em>Halbaddierer</em> addiert zwei Bits \(a\), \(b\) zu Summe \(S\) und Übertrag Ü: <table><thead><tr><th>a</th><th>b</th><th>S</th><th>Ü</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr></tbody></table> Schaltung: \(S\) aus einem xor-Gatter, Ü aus einem and-Gatter. Der <em>1-Bit-Addierer</em> addiert zusätzlich einen eingehenden Übertrag Ü<sub>in</sub>: Ein erster Halbaddierer verarbeitet \(a\) und \(b\), ein zweiter dessen Summe und Ü<sub>in</sub>; ein or-Gatter verknüpft beide Überträge zu Ü<sub>out</sub>. <table><thead><tr><th>a</th><th>b</th><th>Ü<sub>in</sub></th><th>S</th><th>Ü<sub>out</sub></th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody></table>

## Karte: RS-Flipflop
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 113-119

Das RS-Flipflop (\(R\) = „reset“, \(S\) = „set“) speichert eine 1-Bit-Information \(Q\): Setzen auf 1 mit \(S = 1, R = 0\), Setzen auf 0 mit \(S = 0, R = 1\), Ausgabe des gespeicherten Werts mit \(S = 0, R = 0\) (\(Q = 0\) oder \(Q = 1\)); \(S = 1, R = 1\) wird nicht verwendet. Realisierung durch eine rückgekoppelte Schaltung aus zwei nor-Gattern. Analyse mit \(Q_{alt}\) an der Rückkopplung und \(Q_{neu}\) am Ausgang; stabil ist ein Zustand mit \(Q_{alt} = Q_{neu}\). <table><thead><tr><th>R</th><th>S</th><th>\(Q_{alt}\)</th><th>\(Q_{neu}\)</th><th></th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>stabil, gibt den gespeicherten Wert aus</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>stabil, gibt den gespeicherten Wert aus</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>instabil, speichert den Wert 1, → Zustand 3</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>stabil, wird auf 1 gesetzt</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>stabil, wird auf 0 gesetzt</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>instabil, wird auf 0 gesetzt, → Zustand 4</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>stabil, für Speicherfunktion nicht verwendet</td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>instabil, → Zustand 6</td></tr></tbody></table>

## Frage: Was ist ein Bit, was ein Byte?
id: bit-byte
quelle: DiskreteMathematikVLHO.pdf, Folie 94

Bit: kleinste Informationseinheit mit den Werten 0 oder 1 (Transistor: auf/zu). Byte: Informationseinheit aus 8 Bits, z. B. zur Codierung von Zeichen.

## Frage: Wie lautet die Dualdarstellung von dezimal 14?
id: dual-14
quelle: DiskreteMathematikVLHO.pdf, Folie 95

1110, denn \(1 \cdot 2^3 + 1 \cdot 2^2 + 1 \cdot 2^1 + 0 \cdot 2^0 = 14\).

## Frage: Welche Ziffern hat das Hexadezimalsystem, und was ist dezimal 27 hexadezimal?
id: hexadezimal
quelle: DiskreteMathematikVLHO.pdf, Folie 95

\(p = 16\) mit den „Ziffern“ 0–9 und A–F; dezimal 27 ist hexadezimal 1B.

## Frage: Was ist eine \(n\)-stellige Bool'sche Funktion?
id: boolsche-funktion
quelle: DiskreteMathematikVLHO.pdf, Folie 97

Eine Funktion mit der Menge der 0/1-Folgen der Länge \(n\) als Definitionsbereich und \(\{0, 1\}\) als Wertebereich, definiert durch eine Wertetabelle.

## Frage: Was liefern nand und nor?
id: nand-nor
quelle: DiskreteMathematikVLHO.pdf, Folie 98

nand = nicht and: nur bei \(a = b = 1\) gleich 0. nor = nicht or: nur bei \(a = b = 0\) gleich 1.

## Frage: Wie berechnet man die disjunktive Normalform einer Bool'schen Funktion?
id: dnf-verfahren
quelle: DiskreteMathematikVLHO.pdf, Folie 100

Für jede Zeile mit Wert 1 alle Parameter mit and verknüpfen, dabei einen Parameter genau dann negieren, wenn sein Wert in der Zeile 0 ist; diese Formeln mit or verknüpfen.

## Frage: Welche Bool'sche Funktion ist \(S = \bar{a} * b + a * \bar{b}\)?
id: xor
quelle: DiskreteMathematikVLHO.pdf, Folie 104

Das „exklusive oder“ (xor): \(S = 1\) genau dann, wenn \(a\) und \(b\) verschieden sind.

## Frage: Woraus besteht ein Halbaddierer?
id: halbaddierer
quelle: DiskreteMathematikVLHO.pdf, Folie 110

Aus einem xor-Gatter für die Summe \(S\) und einem and-Gatter für den Übertrag Ü.

## Frage: Wie entsteht aus Halbaddierern ein 1-Bit-Addierer?
id: ein-bit-addierer
quelle: DiskreteMathematikVLHO.pdf, Folien 111-112

Ein Halbaddierer verarbeitet \(a\) und \(b\), ein zweiter dessen Summe und Ü<sub>in</sub> zur Summe \(S\); ein or-Gatter verknüpft die beiden Überträge zu Ü<sub>out</sub>.

## Frage: Mit welchen Eingaben setzt, löscht und liest man ein RS-Flipflop?
id: rs-flipflop
quelle: DiskreteMathematikVLHO.pdf, Folie 113

Setzen auf 1: \(S = 1, R = 0\). Setzen auf 0: \(S = 0, R = 1\). Ausgabe des gespeicherten Werts: \(S = 0, R = 0\). \(S = 1, R = 1\) wird nicht verwendet.

## Frage: Wann ist ein Zustand des RS-Flipflops stabil?
id: rs-flipflop-stabil
quelle: DiskreteMathematikVLHO.pdf, Folie 119

Wenn \(Q_{alt} = Q_{neu}\) gilt, der rückgekoppelte Wert also mit dem neuen Ausgang übereinstimmt.

## Aufgabe: NAND-Schaltung
id: aufgabe-17-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 17

Finden Sie eine Schaltung aus Schaltern und einer Lampe, die das logische „nicht und“ (nand) darstellt.

## Aufgabe: Dual- und Hexadezimaldarstellung
id: rm-dual-hexadezimal
generator: dual-hexadezimal
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: DiskreteMathematikVLHO.pdf, Folie 95

## Aufgabe: Disjunktive Normalform
id: rm-disjunktive-normalform
generator: disjunktive-normalform
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 18; DiskreteMathematikVLHO.pdf, Folien 99-100

## Aufgabe: Normalformen
id: aufgabe-18-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 18

Berechnen Sie die disjunktive Normalform der logischen Operationen „nor“ und „Äquivalenz“.

## Aufgabe: RS-Flipflop
id: aufgabe-19-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 19

Das RS-Flipflop aus zwei rückgekoppelten nor-Gattern (Eingänge \(S\), \(R\), Ausgang \(Q\)) speichert zunächst \(Q = 1\). Spielen Sie die Eingangsfolge \((S, R) = (0, 1)\), dann \((0, 0)\), dann \((1, 0)\), dann \((0, 0)\) durch. Welchen Wert hat \(Q\) nach jedem Schritt, und welche Zustände sind dabei stabil?

## Aufgabe: Boolesche Darstellung
id: aufgabe-20-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 20

Erläutern Sie in eigenen Worten am Beispiel von „nor“ und „Implikation“, wie sich eine beliebige Bool'sche Funktion nur mit „und“, „oder“ und „nicht“ darstellen lässt.

## Aufgabe: Normalformen für or, and und nor
id: folie-101-dnf
quelle: DiskreteMathematikVLHO.pdf, Folie 101

Berechnen Sie die disjunktive Normalform für or, and und nor. Vergleichen Sie die Ergebnisse dann mit den Wertetabellen der „ursprünglichen“ Verknüpfungen.
