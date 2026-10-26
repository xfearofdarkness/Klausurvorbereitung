---
id: filter-rekonstruktion
title: Frequenzfilter, Rekonstruktion und Nyquist
icon: 🎛️
---

## Karte: Frequenzfilter
tag: wichtig
quelle: DSV-final.pdf, Folien 131-142

Die Übertragungsfunktion \(h(f)\) zeigt, welche Frequenzen ein Filter durchlässt und welche er sperrt:
- <strong>Tiefpassfilter:</strong> lässt Frequenzen unterhalb der Grenzfrequenz durch (Beispiele: 1 kHz, 80 Hz)
- <strong>Hochpassfilter:</strong> lässt Frequenzen oberhalb der Grenzfrequenz durch (Beispiele: 1 kHz, 4 kHz)
- <strong>Bandpassfilter:</strong> lässt nur den Bereich zwischen zwei Grenzfrequenzen durch (Beispiele: 80 Hz bis 4 kHz, 500 Hz bis 1 kHz)
- <strong>Bandsperre:</strong> sperrt den Bereich zwischen zwei Grenzfrequenzen (Beispiele: 500 Hz bis 1 kHz, 80 Hz bis 4 kHz)

## Karte: Rekonstruktionsprozess
tag: def
quelle: DSV-final.pdf, Folien 143-144

Der Rekonstruktionsprozess in der digitalen Signalverarbeitung wandelt ein diskretes, digitales Signal zurück in ein kontinuierliches, analoges Signal. Dies geschieht durch die Umwandlung der digitalen Samples in Spannungsstufen, gefolgt von der Verwendung eines Rekonstruktionsfilters (Tiefpassfilter), um unerwünschte höhere Frequenzen zu entfernen, die durch die Stufung der Samples entstehen. Ziel ist es, das ursprüngliche kontinuierliche Signal möglichst genau wiederherzustellen. Im Frequenzbereich wiederholt sich das Spektrum \(X(\omega)\) des abgetasteten Signals \(X_A(\omega)\) im Abstand \(1/\tau\); das Originalspektrum reicht von \(-f_{max}\) bis \(f_{max}\).

## Karte: Bandbreitenbegrenzung
quelle: DSV-final.pdf, Folie 145

Die meisten Signale haben eine obere und untere Grenzfrequenz, d. h. niedrigere oder höhere Frequenzen kommen nicht vor oder sind nicht relevant. Beispiel: Audio-Signale interessieren nur im menschlichen Hörbereich, ca. 20 Hz bis 20 kHz.

## Karte: Abtastung im Frequenzraum
tag: wichtig
quelle: DSV-final.pdf, Folien 146-148

Effekt der Abtastung im Frequenzraum: Das Originalspektrum wiederholt sich im Abstand der Abtastfrequenz. Das Originalspektrum ist symmetrisch um den Ursprung und wird auch in den Wiederholungen gespiegelt. Andere (meist zitierte) mathematische Erklärung: Eine „Kamm-Funktion“ modelliert die Abtastung; die „Faltung“ zwischen Original und Kamm führt zur Replikation des Originalspektrums.

## Karte: Aliasing nach dem Nyquist-Theorem
tag: wichtig
quelle: DSV-final.pdf, Folie 149

Wenn sich die wiederholten Frequenzspektren überlappen, kommt es zur Bildung nicht vorhandener (Alias-)Frequenzen im rekonstruierten Signal. Aliasing wird vermieden, wenn \(2 \cdot f_g < f_S\) (\(f_g\): obere Grenzfrequenz, \(f_S\): Abtastfrequenz).

## Karte: Samplerate und Rekonstruktionsfilter
quelle: DSV-final.pdf, Folie 150

- Je höher die Samplerate, desto größer die Abstände zwischen den Wiederholungen der Spektren.
- Je näher diese beieinander liegen, desto steiler / präziser muss das Rekonstruktionsfilter sein.

## Karte: Digitaler Signalübertragungspfad
tag: wichtig
quelle: DSV-final.pdf, Folie 151

Anti-aliasing filter → Sampling → Quantization → Input filtering → Input blocking & driver buffering → Encoding → Transmission → Decoding → Output blocking & driver buffering → Output filtering → Reconstruction. Encoding und Decoding sind optionale Stufen. Deutliche Verzögerung (significant delay) verursachen Input blocking & driver buffering, Transmission sowie Output blocking & driver buffering.

## Karte: Digitale Aufnahme
quelle: DSV-final.pdf, Folien 152-155

Erster berühmter digitaler Aufnahmerecorder: Alesis ADAT (1993). Folie 153 zeigt dazu ein VHS-Videotape (Magnetband). Ein digitales Signal lässt sich z. B. in Audacity betrachten; im Zoom werden die einzelnen Samples sichtbar.

## Frage: Was lassen Tiefpass, Hochpass, Bandpass und Bandsperre durch?
id: filtertypen
quelle: DSV-final.pdf, Folien 132-142

Tiefpass: Frequenzen unterhalb der Grenzfrequenz. Hochpass: Frequenzen oberhalb der Grenzfrequenz. Bandpass: nur den Bereich zwischen zwei Grenzfrequenzen. Bandsperre: alles außer dem Bereich zwischen zwei Grenzfrequenzen.

## Frage: Wie läuft der Rekonstruktionsprozess ab?
id: rekonstruktion
quelle: DSV-final.pdf, Folie 143

Die digitalen Samples werden in Spannungsstufen umgewandelt; danach entfernt ein Rekonstruktionsfilter (Tiefpassfilter) die unerwünschten höheren Frequenzen, die durch die Stufung entstehen. Ziel: das ursprüngliche kontinuierliche Signal möglichst genau wiederherstellen.

## Frage: Was bewirkt die Abtastung im Frequenzraum?
id: abtastung-frequenzraum
quelle: DSV-final.pdf, Folie 147

Das Originalspektrum wiederholt sich im Abstand der Abtastfrequenz und wird, da es symmetrisch um den Ursprung ist, auch in den Wiederholungen gespiegelt.

## Frage: Wann entsteht Aliasing und wie wird es vermieden?
id: aliasing-bedingung
quelle: DSV-final.pdf, Folie 149

Wenn sich die wiederholten Frequenzspektren überlappen, entstehen nicht vorhandene (Alias-)Frequenzen im rekonstruierten Signal. Vermieden wird es, wenn \(2 \cdot f_g < f_S\).

## Frage: Wie hängen Samplerate und Rekonstruktionsfilter zusammen?
id: samplerate-filter
quelle: DSV-final.pdf, Folie 150

Je höher die Samplerate, desto größer die Abstände zwischen den Spektrumswiederholungen. Je näher diese beieinander liegen, desto steiler / präziser muss das Rekonstruktionsfilter sein.

## Frage: Welche Stufen des digitalen Signalübertragungspfads verursachen eine deutliche Verzögerung?
id: digitaler-pfad-verzoegerung
quelle: DSV-final.pdf, Folie 151

Input blocking & driver buffering, Transmission sowie Output blocking & driver buffering.
