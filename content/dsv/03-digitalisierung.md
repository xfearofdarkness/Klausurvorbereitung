---
id: digitalisierung
title: Digitalisierung, Abtastung und Quantisierung
icon: 🔢
---

## Karte: Rauschen beim analogen Signal
quelle: DSV-final.pdf, Folien 103-105

Jedes Übertragungsmedium ist mit einem Rauschen verbunden. Das Rauschen verfremdet das analoge Signal; beide sind nicht mehr oder nur unter extremem technischem Aufwand voneinander trennbar. Das Ergebnis nennt man auch „verrauscht“. Je ausgeprägter das Rauschen ist, desto unbrauchbarer ist das Ergebnis.

## Karte: Digitale Signale und Toleranzbereich
tag: def
quelle: DSV-final.pdf, Folie 106

Digitale Signale bestehen aus Folgen von Einsen und Nullen (Bits). Die logische 1 ist i. d. R. einem Spannungswert von 5 V zugeordnet, die logische 0 einem Wert von 0 V. Tatsächlich handelt es sich aber nicht um feste Werte: Es existiert ein Toleranzbereich, um den die Spannung abweichen darf, um noch immer als 0 oder 1 identifiziert zu werden (in der Abbildung gilt für die 1 der Bereich zwischen 3,5 V und 5 V).

## Karte: Rauschen beim digitalen Signal
tag: wichtig
quelle: DSV-final.pdf, Folien 107-108

Das Rauschen verfremdet auch das digitale Signal; auch hier sind beide nicht mehr oder nur unter extremem technischem Aufwand voneinander trennbar. Da die logische 1 und die logische 0 keinem festen Spannungswert, sondern einem Spannungsbereich zugeordnet sind, kann das verrauschte Signal trotzdem fehlerfrei zum ursprünglichen Nutzsignal dekodiert werden.

## Karte: Zwei Schaltungstechniken
quelle: DSV-final.pdf, Folie 109

Das Modul unterscheidet zwei Schaltungstechniken: TTL/CMOS mit 5 V, die logische 1 liegt im Bereich 3,5 V bis 5 V; CPU-Logik mit 1,3 V, die logische 1 liegt im Bereich 0,9 V bis 1,3 V.

## Karte: Vorteile digitaler Signale
tag: wichtig
quelle: DSV-final.pdf, Folie 110

- Unempfindlichkeit gegen Störungen des unterliegenden Übertragungsmediums (z. B. Einstrahlung von Störfeldern) bzw. Speichermediums (z. B. magnetische Instabilitäten)
- Fehler erst ab einem Schwellwert bemerkbar
- zusätzlich Fehlererkennung und -korrektur möglich (FEC, Checksum etc.)
- verlustfrei kopierbar
- heutzutage entstehen diverse Signale bereits in digitaler Form

## Karte: Nachteile digitaler Signale
tag: wichtig
quelle: DSV-final.pdf, Folie 111

- theoretisch vorhandener Informationsverlust gegenüber dem analogen Original
- Sample-basierte Signalübertragung erzeugt im Vergleich zur analogen höhere Latenzen

Beide Aspekte sind in der Praxis allerdings minimal und vernachlässigbar.

## Karte: Abtastung
tag: def
quelle: DSV-final.pdf, Folien 112-115

Um ein Signal mit digitalen Rechnern nutzen/verarbeiten zu können, muss es digitalisiert werden. In einem ersten Schritt muss es diskretisiert (zeitdiskret) werden. Dieses Prinzip nennt man Diskretisierung oder auch Abtastung bzw. Sampling. Dazu wird das zeitkontinuierliche Signal mit einer Folge von Dirac-Pulsen im Abstand \(T\) (train of diracs) multipliziert; das Ergebnis (resulting signal) besteht aus einzelnen Werten. Der ideale Dirac-Puls ist unendlich hoch und unendlich schmal; in der analogen Realität ist er ein schmaler, endlicher Puls.

## Karte: Quantisierung
tag: def
quelle: DSV-final.pdf, Folien 116, 118

Um das Signal mit digitalen Rechnern nutzen/verarbeiten zu können, muss es in einem zweiten Schritt quantisiert (wertdiskret) werden. Dieses Prinzip nennt man Quantisierung. Der Bereich zwischen \(U_{min}\) und \(U_{max}\) wird dabei in Stufen der Größe \(\Delta U\) eingeteilt.

## Karte: Bit und Byte
tag: def
quelle: DSV-final.pdf, Folie 117

Ein Bit (von englisch binary digit) ist die kleinste Einheit der digitalen Information und kann einen von zwei Zuständen darstellen: 0 oder 1. Diese Zustände werden in der Informatik auch als „An“ oder „Aus“, „wahr“ oder „falsch“ interpretiert. Um komplexere Daten wie Buchstaben, Zahlen, Bilder und Videos zu speichern, werden Bits zu größeren Einheiten wie einem Byte zusammengefasst, das aus acht Bits besteht.

## Karte: Zweierpotenzen und Binärzahlen
tag: beispiel
quelle: DSV-final.pdf, Folien 119-121

\(2^0 = 1,\ 2^1 = 2,\ 2^2 = 4,\ 2^3 = 8,\ 2^4 = 16,\ 2^5 = 32,\ 2^6 = 64,\ 2^7 = 128,\ 2^8 = 256,\ 2^9 = 512,\ 2^{10} = 1024,\ 2^{11} = 2048,\ 2^{12} = 4096,\ 2^{13} = 8192,\ 2^{14} = 16.384,\ 2^{15} = 32.768\). Beispiele (Bits von \(2^0\) links nach \(2^{15}\) rechts): 1100… = 3, 1111 0… = 15, nur \(2^8\) gesetzt = 256, nur \(2^{15}\) gesetzt = 32.768.

## Karte: Wertebereich eines 8-Bit-Wandlers
tag: wichtig
quelle: DSV-final.pdf, Folien 122-124

Ein 8-Bit-Wandler hat die Stellen \(2^0\) bis \(2^7\). Alle Bits 0 ergibt 0, alle Bits 1 ergibt 255. Wertebereich: 0 bis 255.

## Karte: Auflösung ΔU
tag: formel
quelle: DSV-final.pdf, Folien 125-128

\[\Delta U = \text{Messbereich} / \text{Wandler-Maximalwert}\]
Beispiel: \(U_{max} = 5\) V, \(U_{min} = -5\) V, 8-Bit-Wandler. Messbereich 10 V, Wandler-Maximalwert 255: \(\Delta U = 10\text{ V} / 255 = 0{,}0392\text{ V} = 39{,}2\text{ mV}\).

## Karte: Sample
tag: def
quelle: DSV-final.pdf, Folie 129

Ein Sample ist eine
- zeit- und wertdiskrete Informationseinheit,
- repräsentiert von einer Zahl, z. B. Integer oder Float,
- blockweise verarbeitet in Form eines Samplebuffers,
- zugänglich über die API der jeweiligen Programmiersprache.

## Karte: Datentypen zu üblichen Auflösungen
tag: wichtig
quelle: DSV-final.pdf, Folie 130

<table><thead><tr><th>Bits</th><th>Typ</th><th>Min</th><th>Max</th></tr></thead><tbody><tr><td>8 bit</td><td>char</td><td>-128</td><td>127</td></tr><tr><td>16 bit</td><td>short</td><td>-32.768</td><td>32.767</td></tr><tr><td>32 bit</td><td>integer</td><td>-2.147.483.648</td><td>2.147.483.647</td></tr><tr><td>64 bit</td><td>long</td><td>-9.223.372.036.854.775.808</td><td>9.223.372.036.854.775.807</td></tr></tbody></table>
Floating Point: 32 bit float, 64 bit double; die Folie nennt dafür Min = -1 und Max = 1.

## Frage: Warum lässt sich ein verrauschtes digitales Signal trotzdem fehlerfrei dekodieren?
id: digital-rauschen
quelle: DSV-final.pdf, Folie 108

Weil die logische 1 und die logische 0 keinem festen Spannungswert, sondern einem Spannungsbereich (Toleranzbereich) zugeordnet sind.

## Frage: In welchem Spannungsbereich liegt die logische 1 bei TTL/CMOS und bei CPU-Logik?
id: schaltungstechniken
quelle: DSV-final.pdf, Folie 109

TTL/CMOS: 3,5 V bis 5 V. CPU-Logik: 0,9 V bis 1,3 V.

## Frage: Welche Vorteile haben digitale Signale?
id: vorteile-digital
quelle: DSV-final.pdf, Folie 110

Unempfindlich gegen Störungen von Übertragungs- bzw. Speichermedium; Fehler erst ab einem Schwellwert bemerkbar; Fehlererkennung und -korrektur möglich (FEC, Checksum); verlustfrei kopierbar; viele Signale entstehen bereits digital.

## Frage: Welche Nachteile haben digitale Signale?
id: nachteile-digital
quelle: DSV-final.pdf, Folie 111

Theoretischer Informationsverlust gegenüber dem analogen Original und höhere Latenzen durch sample-basierte Übertragung. Beides ist in der Praxis minimal und vernachlässigbar.

## Frage: Welche zwei Schritte braucht die Digitalisierung eines Signals?
id: digitalisierung-schritte
quelle: DSV-final.pdf, Folien 112, 116

1. Diskretisierung (zeitdiskret), auch Abtastung bzw. Sampling. 2. Quantisierung (wertdiskret).

## Frage: Was ist ein Bit, was ein Byte?
id: bit-byte
quelle: DSV-final.pdf, Folie 117

Bit (binary digit): kleinste Einheit der digitalen Information, einer von zwei Zuständen 0 oder 1. Byte: Einheit aus acht Bits.

## Frage: Welchen Wertebereich hat ein 8-Bit-Wandler?
id: wertebereich-8bit
quelle: DSV-final.pdf, Folie 124

0 bis 255.

## Frage: Wie groß ist die Auflösung ΔU eines 8-Bit-Wandlers für den Bereich -5 V bis +5 V?
id: aufloesung-delta-u
quelle: DSV-final.pdf, Folien 125-128

\(\Delta U = \text{Messbereich} / \text{Wandler-Maximalwert} = 10\text{ V} / 255 = 0{,}0392\text{ V} = 39{,}2\text{ mV}\).

## Frage: Was ist ein Sample?
id: sample
quelle: DSV-final.pdf, Folie 129

Eine zeit- und wertdiskrete Informationseinheit, repräsentiert von einer Zahl (z. B. Integer oder Float), blockweise verarbeitet in einem Samplebuffer und zugänglich über die API der Programmiersprache.

## Frage: Welcher Datentyp gehört zu welcher Auflösung?
id: datentypen
quelle: DSV-final.pdf, Folie 130

Ganzzahl: 8 bit char, 16 bit short, 32 bit integer, 64 bit long. Floating Point: 32 bit float, 64 bit double.
