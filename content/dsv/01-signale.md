---
id: signale
title: Signale
icon: 〰️
---

## Karte: Prüfungsform und Inhalte
quelle: DSV-final.pdf, Folien 2, 7

Die Abschlussprüfung findet am Tag der letzten Vorlesung als MC-Klausur statt. Inhalte: 1.) Informationsspeicherung und Übertragung (Signale, technische Grundbegriffe, Gründe der Digitalisierung, Abtastung, Quantisierung, Frequenzfilter und Rekonstruktion, Übertragung, PC-basierte Soundkarten), 2.) Signaltheorie zu Sound und Musik, 3.) Obertöne, 4.) Signaltheorie, 5.) Frequenzfilter / Rekonstruktion, 6.) Ablaufplan / Blockschaltbild, 7.) Systeme am Beispiel von Audioeffekten, 8.) Übertragung in digitalen Netzwerken.

## Karte: Multimedia
tag: def
quelle: DSV-final.pdf, Folie 6

Multimedia (Duden): „das Zusammenwirken, die Anwendung von verschiedenen Medien (Texten, Bildern, Computeranimationen, -grafiken, Musik, Ton)“; dazu kommen die Interaktionsmöglichkeiten der Digitaltechnik.

## Karte: Fourier und Shannon
quelle: DSV-final.pdf, Folien 22-23

Joseph Fourier (geb. 1768): Fourierreihen, Fouriertransformation. Claude Elwood Shannon (US-Amerikaner) ist der Begründer der modernen Informationstheorie; 1948 erschien „A Mathematical Theory of Communication“ (mathematische Grundlagen in der Informationstheorie).

## Karte: Amplitude, Periode, Frequenz, Phase
tag: def
quelle: DSV-final.pdf, Folien 24-25

- <strong>Amplitude:</strong> Ausschlag / Intensität des Signals (bei Audio die Lautstärke)
- <strong>Periode:</strong> zeitliche Dauer \(T\) eines Schwingungsverlaufs
- <strong>Frequenz:</strong> \(f = 1/T\), Einheit Hz (Schwingungen pro Sekunde)
- <strong>Phase:</strong> Beginn einer Schwingung im Verhältnis zu einer zweiten Schwingung

Die Phase wird in Grad angegeben; eine Periode umfasst 360°.

## Karte: Schall und natürlicher Signalübertragungspfad
quelle: DSV-final.pdf, Folien 26-29

Eine Stimmgabel erzeugt in der Luft abwechselnd Verdichtung und Verdünnung (condensation / rarefaction); über die Zeit aufgetragen ergibt das eine Sinusschwingung. Folie 28 zeigt den Aufbau des Ohrs (u. a. innere und äußere Haarzellen, Basilar- und Tektorialmembran). Natürlicher Signalübertragungspfad: Soundgenerator → Air → Ear → Brain; die Luft verursacht dabei eine deutliche Verzögerung (significant delay).

## Karte: Addition und Multiplikation von Sinusschwingungen
quelle: DSV-final.pdf, Folien 30-34

Zwei gleiche Sinusschwingungen, um 180° gegeneinander verschoben, ergeben addiert null. Ohne Verschiebung ergibt die Addition eine Schwingung mit doppelter Amplitude. Die Addition einer Sinusschwingung überlagert beide Schwingungen; die Multiplikation einer Sinusschwingung ergibt eine Amplitudenmodulation.

## Karte: Fouriersynthese
tag: wichtig
quelle: DSV-final.pdf, Folien 35-36

Durch die Fouriersynthese kann man zeigen, dass jedes Signal aus einer Kombination von Sinusschwingungen unterschiedlicher Frequenz, unterschiedlicher Amplitude und unterschiedlicher Phase besteht. Daraus ergibt sich, dass man Signale im Zeitbereich und im Frequenzbereich darstellen kann.

## Karte: Zeit- und Frequenzbereich
quelle: DSV-final.pdf, Folien 37-39

Signale lassen sich im Zeit- und im Frequenzbereich darstellen, bei Audio etwa als Spektrogramm. Prinzipiell gelten für (ortsabhängige) Bilddaten die gleichen Zusammenhänge wie für (zeitabhängige) Audiodaten, z. B. ein Histogramm mit RGB-Werten. Typische Spektren (Folie 39): ein Sinus hat eine einzelne Spektrallinie; Rechteck- und Dreieckschwingung haben zusätzlich Obertöne (1., 3., 5., 7. OT); Rauschen hat ein flaches Spektrum über alle Frequenzen.

## Karte: Wahrnehmbare Frequenzen
tag: wichtig
quelle: DSV-final.pdf, Folien 40-44

Ohr: 20 Hz bis 20 kHz. Auge: Rot 430–480 THz, Grün 540–610 THz, Blau 610–670 THz. Die Frequenzachse lässt sich linear oder logarithmisch darstellen. Zwischen Hör- und Sehbereich liegen u. a. LW, MW, KW, UKW und IEEE-802.11.

## Karte: Trägerfrequenz und Modulation
tag: def
quelle: DSV-final.pdf, Folien 45-47

Um diese Frequenzen zur Signalübertragung zu nutzen, wählt man eine Trägerfrequenz und moduliert sie mit dem Nutzsignal. Bei der Amplitudenmodulation (AM) folgt die Amplitude des Trägers dem Signal (Modulator), bei der Frequenzmodulation (FM) die Frequenz.

## Karte: Antennen und Wellenlänge
quelle: DSV-final.pdf, Folien 48-50

Antennen dienen zum Senden und Empfangen von elektromagnetischen Wellen. Es gilt \(f = 1/T\) bzw. \(T = 1/f\): Je höher die Frequenz, desto kleiner die Wellenlänge; je kleiner die Wellenlänge, desto kleiner die Antenne.

## Karte: Analoges Signal
tag: def
quelle: DSV-final.pdf, Folien 51-52

Ein Signal ist in seiner natürlichen Form zeitkontinuierlich und wertkontinuierlich. Auch beim Zoom in ein analoges Signal bleibt es ein kontinuierlicher Verlauf.

## Karte: Mikrofonprinzipien
tag: wichtig
quelle: DSV-final.pdf, Folien 53-57

Mikrofone wandeln die akustische Schwingung in eine elektromagnetische Schwingung um, und zwar durch
- Induktion → Tauchspulmikrofon (Tauchspulprinzip: ein Magnet bewegt sich in einer Spule und erzeugt eine Spannung)
- Veränderung einer Kapazität → Kondensatormikrofon

## Karte: Elektronischer Signalübertragungspfad
quelle: DSV-final.pdf, Folien 58-60

Sound converter → Connector → Amplifier → Connector → Loudspeaker. Die Stufen dieses Pfads verursachen praktisch keine Verzögerung (virtually no delay). Beispiele analoger Speicherung: Tonband-Mehrspurmaschine, Vinyl-Plattenspieler.

## Frage: Wie sind Amplitude, Periode, Frequenz und Phase definiert?
id: signal-begriffe
quelle: DSV-final.pdf, Folie 25

Amplitude: Ausschlag / Intensität des Signals (bei Audio Lautstärke). Periode: zeitliche Dauer \(T\) eines Schwingungsverlaufs. Frequenz: \(f = 1/T\) in Hz (Schwingungen pro Sekunde). Phase: Beginn einer Schwingung im Verhältnis zu einer zweiten Schwingung.

## Frage: Was ergibt die Addition zweier gleicher Sinusschwingungen, die um 180° verschoben sind?
id: sinus-addition-180
quelle: DSV-final.pdf, Folien 30-31

Sie löschen sich aus, die Summe ist null.

## Frage: Was ergibt die Multiplikation einer Sinusschwingung?
id: sinus-multiplikation
quelle: DSV-final.pdf, Folie 34

Eine Amplitudenmodulation.

## Frage: Was lässt sich mit der Fouriersynthese zeigen?
id: fouriersynthese
quelle: DSV-final.pdf, Folie 36

Jedes Signal besteht aus einer Kombination von Sinusschwingungen unterschiedlicher Frequenz, Amplitude und Phase. Daher kann man Signale im Zeitbereich und im Frequenzbereich darstellen.

## Frage: Welche Frequenzen nehmen Ohr und Auge wahr?
id: wahrnehmbare-frequenzen
quelle: DSV-final.pdf, Folie 40

Ohr: 20 Hz bis 20 kHz. Auge: Rot 430–480 THz, Grün 540–610 THz, Blau 610–670 THz.

## Frage: Wie nutzt man hohe Frequenzen zur Signalübertragung?
id: traegerfrequenz
quelle: DSV-final.pdf, Folien 45-47

Man wählt eine Trägerfrequenz und moduliert sie mit dem Nutzsignal, z. B. per Amplitudenmodulation (AM) oder Frequenzmodulation (FM).

## Frage: Wie hängen Frequenz, Wellenlänge und Antennengröße zusammen?
id: antenne-wellenlaenge
quelle: DSV-final.pdf, Folie 50

Je höher die Frequenz, desto kleiner die Wellenlänge; je kleiner die Wellenlänge, desto kleiner die Antenne.

## Frage: Wie ist ein Signal in seiner natürlichen Form?
id: signal-natuerlich
quelle: DSV-final.pdf, Folie 51

Zeitkontinuierlich und wertkontinuierlich.

## Frage: Wie wandeln Tauchspul- und Kondensatormikrofon die akustische Schwingung um?
id: mikrofonprinzipien
quelle: DSV-final.pdf, Folie 57

Tauchspulmikrofon: durch Induktion. Kondensatormikrofon: durch Veränderung einer Kapazität. Beide erzeugen aus der akustischen eine elektromagnetische Schwingung.
