---
id: netzwerke
title: Übertragung in digitalen Netzwerken
icon: 🌐
---

## Karte: Rechenbeispiel: Sinus digitalisieren
tag: beispiel
quelle: DSV-final.pdf, Folien 301-303

Ein Sinus mit 440 Hz wird erzeugt und mit 48 kHz / 8 Bit digitalisiert. Gefragt ist, wie viele Werte pro Sekunde entstehen und welches der größte und der kleinste mögliche Wert ist. Ein 8-Bit-Wert reicht von 0 (alle Bits 0) bis 255 (alle Bits 1).

## Karte: LSB und MSB
tag: def
quelle: DSV-final.pdf, Folie 303

In der Digitaltechnik bezeichnet man das Bit mit der niedrigsten Wertigkeit als „least significant bit“ (LSB) und das Bit mit der höchsten Wertigkeit als „most significant bit“ (MSB). In der Tabelle steht das LSB (\(2^0\)) links, das MSB (\(2^7\)) rechts.

## Karte: Unsigned und signed
tag: wichtig
quelle: DSV-final.pdf, Folien 304-306

Zur Darstellung von Zahlen mit Vorzeichen wird das MSB genutzt. Ist es gesetzt, handelt es sich um eine negative Zahl, wenn nicht, um eine positive. Werte der Tabelle (Bits von \(2^0\) bis \(2^7\)):
<table><thead><tr><th>Bits \(2^0 \ldots 2^7\)</th><th>Wert</th></tr></thead><tbody><tr><td>0000 0000</td><td>0</td></tr><tr><td>1111 1111 (unsigned)</td><td>255</td></tr><tr><td>0000 0001 (signed)</td><td>-128</td></tr><tr><td>1101 0101 (signed)</td><td>-85</td></tr><tr><td>0101 0100 (signed)</td><td>+42</td></tr><tr><td>1111 1110 (signed)</td><td>+127</td></tr></tbody></table>
Die fünf Werte -128, -85, 0, +42 und 127 sind die relevanten Werte für den Beispiel-Anwendungsfall.

<em>Hinweis: korrigiert, weicht von der Folie ab. Der Text auf Folie 304 sagt, ein gesetztes MSB bedeute eine positive Zahl; die Tabelle derselben Folie zeigt MSB = 1 als -128 und MSB = 0 als +127.</em>

## Karte: Bitrate für unkomprimierte Signale
tag: wichtig
quelle: DSV-final.pdf, Folien 308-309

a) Stereo-Audiosignal mit \(f_s = 48\) kHz und 16 Bit Quantisierung: \(48.000\text{ Hz} \cdot 16\text{ Bit} = 768\text{ kBit/s}\), mal 2 Kanäle = 1,536 Mbit/s.

b) Full-HD-Videobild mit 32 Bit pro Pixel: \(1920 \cdot 1080 \cdot 32\text{ Bit} \cdot 25\text{ Hz} = 1.658.880.000\text{ Bit/s} = 1{,}658\text{ Gbit/s}\).

Heutzutage übliche Übertragungsraten: 56 kBit/s → 1 Mbit/s → 10 Mbit/s → 100 Mbit/s → 1 Gbit/s (Up- und Download beachten).

## Karte: Bits als Gauss-Pulse
tag: wichtig
quelle: DSV-final.pdf, Folien 300, 307, 310-312

1 und 0 werden in Form von Gauss-Pulsen auf der Glasfaser übertragen (Glasfaserkabel: Außenhülle, Schutzschicht, Mantel, Kern). Periode \(T\) und Frequenz \(f\) des Gauss-Pulses:
<table><thead><tr><th>Bitrate</th><th>T</th><th>f</th></tr></thead><tbody><tr><td>1 bit/s</td><td>1 s</td><td>1 Hz</td></tr><tr><td>1 Mbit/s</td><td>1 µs</td><td>1 MHz</td></tr><tr><td>1 Gbit/s</td><td>1 ns</td><td>1 GHz</td></tr><tr><td>1 Tbit/s</td><td>1 ps</td><td>1 THz</td></tr></tbody></table>

## Karte: Ausbreitungsgeschwindigkeit und Verzögerung
tag: wichtig
quelle: DSV-final.pdf, Folie 313

- Luft: Propagation-Speed ca. 300.000 km/s, Delay 3,3 µs/km bzw. 3,3 ns/m
- Glasfaser: Propagation-Speed 210.000 km/s, Delay 4,7 µs/km bzw. 4,7 ns/m
- Kupferkabel: Propagation-Speed 240.000 km/s, Delay 4,2 µs/km bzw. 4,2 ns/m

Finale Verzögerung in digitalen Netzwerken:
\[d_{transfer} = \sum^{M} d_{propagation} + \sum^{N} d_{transmission}\]

<em>Hinweis: korrigiert, weicht von der Folie ab. Folie 313 schreibt für Luft „3,3 µs/m“; bei Glasfaser und Kupfer rechnet sie µs/km in ns/m um.</em>

## Frage: Was bezeichnen LSB und MSB?
id: lsb-msb
quelle: DSV-final.pdf, Folie 303

LSB (least significant bit): das Bit mit der niedrigsten Wertigkeit. MSB (most significant bit): das Bit mit der höchsten Wertigkeit.

## Frage: Welches Bit wird zur Darstellung des Vorzeichens genutzt?
id: vorzeichenbit
quelle: DSV-final.pdf, Folie 304

Das MSB. Ist es gesetzt, ist die Zahl negativ. <em>Hinweis: korrigiert, weicht von der Folie ab. Der Text auf Folie 304 sagt „positiv“, die Tabelle zeigt negativ.</em>

## Frage: Welche Bitrate braucht ein unkomprimiertes Stereo-Audiosignal mit 48 kHz und 16 Bit?
id: bitrate-audio
quelle: DSV-final.pdf, Folie 309

\(48.000\text{ Hz} \cdot 16\text{ Bit} \cdot 2 = 1{,}536\) Mbit/s (768 kBit/s pro Kanal).

## Frage: Welche Bitrate braucht ein unkomprimiertes Full-HD-Video mit 32 Bit pro Pixel und 25 Hz?
id: bitrate-video
quelle: DSV-final.pdf, Folie 309

\(1920 \cdot 1080 \cdot 32\text{ Bit} \cdot 25\text{ Hz} = 1.658.880.000\) Bit/s \(= 1{,}658\) Gbit/s.

## Frage: Wie werden Bits auf der Glasfaser übertragen?
id: gauss-pulse-glasfaser
quelle: DSV-final.pdf, Folie 310

1 und 0 werden in Form von Gauss-Pulsen übertragen.

## Frage: Wie groß sind T und f eines Gauss-Pulses bei 1 Mbit/s und bei 1 Gbit/s?
id: gauss-puls-t-f
quelle: DSV-final.pdf, Folie 312

1 Mbit/s: \(T = 1\ \mu s\), \(f = 1\) MHz. 1 Gbit/s: \(T = 1\) ns, \(f = 1\) GHz.

## Frage: Welche Ausbreitungsgeschwindigkeiten nennt die Folie für Luft, Glasfaser und Kupfer?
id: propagation-speed
quelle: DSV-final.pdf, Folie 313

Luft ca. 300.000 km/s (3,3 µs/km), Glasfaser 210.000 km/s (4,7 µs/km), Kupferkabel 240.000 km/s (4,2 µs/km).

## Frage: Woraus setzt sich die finale Verzögerung d_transfer in digitalen Netzwerken zusammen?
id: d-transfer
quelle: DSV-final.pdf, Folie 313

Aus der Summe der Ausbreitungsverzögerungen und der Summe der Übertragungsverzögerungen: \(d_{transfer} = \sum^{M} d_{propagation} + \sum^{N} d_{transmission}\).
