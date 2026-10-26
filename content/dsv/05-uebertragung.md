---
id: uebertragung
title: Übertragung und Latenz
icon: 📡
---

## Karte: Die vier Übertragungspfade
tag: wichtig
quelle: DSV-final.pdf, Folie 157

- <strong>Natural path:</strong> Sound generator → Air → Ear → Brain
- <strong>Electronic path:</strong> Sound converter → Connector → Amplifier → Connector → Loudspeaker
- <strong>Digital path:</strong> Anti-aliasing filter → Sigma/Delta converter → Input blocking & driver buffering → Encoding → Transmission → Decoding → Output blocking & driver buffering → Reconstruction
- <strong>Internet path:</strong> Add UDP Header → Add IP Header → Add Ethernet Header → Sending → Routing → Receiving → Remove Ethernet Header → Remove IP Header → Remove UDP Header → Jitter buffering

Encoding und Decoding sind optionale Stufen. Die Legende unterscheidet significant, slight, insignificant und virtually no delay.

## Karte: Verzögerungen entlang der Pfade
tag: wichtig
quelle: DSV-final.pdf, Folie 157

Deutliche Verzögerung (significant delay): Air, Input blocking & driver buffering, Transmission, Output blocking & driver buffering, Routing, Jitter buffering. Leichte Verzögerung (slight delay) u. a.: Sound generator, Sigma/Delta converter, Encoding, Decoding, Reconstruction, Sending, Receiving. Praktisch keine Verzögerung: Ear, Brain und alle Stufen des elektronischen Pfads.

## Karte: Schallgeschwindigkeit in Luft
tag: formel
quelle: DSV-final.pdf, Folie 158

\[c = (331{,}5 + 0{,}6\vartheta)\ \frac{\text{m}}{\text{s}}\]

## Karte: Connector und Anti-aliasing filter
quelle: DSV-final.pdf, Folien 160-161

Connector: z. B. XLR jack. Das Anti-aliasing filter ist auf der Folie als RC-Glied dargestellt: Widerstand R zwischen \(V_{in}\) und \(V_{out}\), Kondensator C von \(V_{out}\) gegen Masse.

## Karte: Sigma/Delta converter
quelle: DSV-final.pdf, Folie 162

Der Sigma/Delta converter übernimmt Diskretisierung und Quantisierung: Das zeitkontinuierliche Signal wird mit einer Folge von Dirac-Pulsen multipliziert. Beispiel: ein 16-Bit Continuous Time Dual ΣΔ ADC (Analog Devices).

## Karte: Input blocking & driver buffering
quelle: DSV-final.pdf, Folie 163

Die Samples 1 bis n werden in einem physikalischen Eingangspuffer (physical input buffer, als Ring dargestellt) aufgenommen und zum Interrupt-Zeitpunkt \(t\) in den Puffer der Anwendung (system application buffer) kopiert (copy captured samples 1 to n at interrupt t).

## Karte: Encoding und Transmission
quelle: DSV-final.pdf, Folien 164-165

Encoding verkleinert einen Datenblock; die Daten werden als Pakete (Packet #1 bis Packet #n) übertragen. Die Übertragungsverzögerung (transmission delay) hängt von der Paketgröße und der Gerätekapazität (device capacity in Mbps) ab: Größere Pakete (256 statt 32 Bytes) brauchen länger, höhere Kapazität verkürzt die Verzögerung. Die Bereiche reichen von uncritical über acceptable und critical bis unacceptable.

## Karte: Protokoll-Header
quelle: DSV-final.pdf, Folien 166, 168

Beim Senden fügt jede Schicht einen Header hinzu, beim Empfangen wird er wieder entfernt: Application Layer (SMTP, Telnet, FTP etc.) liefert Data; Transport Layer (TCP, UDP, ICMP) ergänzt einen Header; Internet Layer (IP) einen weiteren; Network Access Layer (Ethernet, FDDI, ATM etc.) einen dritten.

## Karte: Sending, Routing, Receiving und Jitter buffering
quelle: DSV-final.pdf, Folien 167, 169-170

Beim Sending, Routing und Receiving entstehen Ausbreitungsverzögerungen (propagation delays) in der Glasfaser. Ein Switch (z. B. 8 port switch with output queues) puffert Pakete in Warteschlangen. Beim Empfänger sammelt ein Jitter-Buffer die Pakete aus dem Netzwerk; die Wiedergabe beginnt ab einer Buffer Threshold.

## Karte: Output blocking und Reconstruction
quelle: DSV-final.pdf, Folien 171-172

Die gesamte Audio-Blocking-Verzögerung (total audio-blocking delay in ms) wächst mit der Blockgröße (block size in samples, 64 bis 1024) und sinkt mit höherer Abtastrate (8 kHz, 24 kHz, 44,1 kHz, 48 kHz, 96 kHz). Ab 10,7 ms gilt sie als critical, ab 21,3 ms als unacceptable. Reconstruction: Aus dem Spektrum \(X_A(\omega)\) wird das Originalspektrum \(X(\omega)\) zwischen \(-f_{max}\) und \(f_{max}\) zurückgewonnen.

## Karte: Modifizierter Pfad für den visuellen Bereich
quelle: DSV-final.pdf, Folien 177-178

- <strong>Natural path:</strong> Light emitter → Air → Eye → Brain
- <strong>Electronic path:</strong> Image sensor → Connector → Amplifier → Connector → Display
- <strong>Digital path:</strong> Anti-aliasing filter → A/D converter → Input blocking & framing → Encoding → Transmission → Decoding → Output blocking → Reconstruction
- <strong>Internet path:</strong> wie bei Audio

## Karte: Puffergrößen bei Audio und Video
tag: beispiel
quelle: DSV-final.pdf, Folien 179-180

Audio: \(f = 48\) kHz, \(T = 1/48.000 = 20{,}83\ \mu s\). Sample buffer 32 → \(32 \cdot 20{,}83\ \mu s = 666\ \mu s\); 64 → 1,3 ms; 128 → 2,6 ms; …; 2048 → 42,6 ms. Video: Full HD 1080p → \(1920 \cdot 1080 = 2.073.600\) Pixel pro Bild; 32 Bits/Pixel → 66.355.200 Bits = 8.294.400 Bytes; \(f = 25\) fps, \(T = 40\) ms.

## Karte: Callbackfunktion
tag: def
quelle: DSV-final.pdf, Folie 181

Eine Rückruffunktion (englisch Callbackfunction) bezeichnet in der Informatik eine Funktion, die einer anderen Funktion, meist einer vorgefertigten Bibliotheks- oder Betriebssystemfunktion, als Parameter übergeben und von dieser unter definierten Bedingungen mit definierten Argumenten aufgerufen wird. Im Rahmen des Moduls werden die Audio- und die Video-Callbackfunktion betrachtet.

## Karte: Jitter und Wordclockjitter
tag: def
quelle: DSV-final.pdf, Folien 182-183

Jitter (englisch für „zittern“) ist eine Schwankung in der zeitlichen Anordnung digitaler Signale, bei der die Zeitabstände zwischen den einzelnen Signalen nicht konstant sind. Der Jitter beschreibt die Abweichung \(\Delta t\) von einem vorhandenen durchschnittlichen Intervall, in denen die Signale auftreten. Wordclockjitter beschreibt die zeitlichen Schwankungen der Sampleintervalle, die zwar einen theoretisch fixen Idealwert haben, der in der Praxis allerdings instabil ist. Folge bei der A/D-Wandlung: ein falscher Samplewert (getting a wrong sample value); bei der D/A-Wandlung: eine falsche Signalform (getting a wrong signal shape).

## Karte: ISO/OSI und Servicetyp
tag: wichtig
quelle: DSV-final.pdf, Folien 184-193

Der ISO/OSI protocol stack hat sieben Schichten: Application, Presentation, Session, Transport, Network, Data Link, Physical. Der Servicetyp der Anwendung ist entweder asynchron oder synchron / Echtzeit; danach richtet sich das Transportprotokoll: asynchron → TCP (z. B. HTTP, FTP), Echtzeit → UDP (z. B. VoIP, VPN).

## Karte: TCP und UDP im Vergleich
tag: wichtig
quelle: DSV-final.pdf, Folien 190-192

TCP ist verbindungsorientiert (connection oriented): Fehlerhafte Daten werden neu angefordert. UDP ist verbindungslos (connectionless): Fehlende Daten werden nicht neu gesendet.
<table><thead><tr><th>Feature</th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>Reliability</td><td>Yes</td><td>No</td></tr><tr><td>Data loss</td><td>No</td><td>Yes</td></tr><tr><td>Data transfer speed</td><td>Slow</td><td>Fast</td></tr><tr><td>Header size</td><td>20 bytes</td><td>8 bytes</td></tr><tr><td>Error checking</td><td>Yes</td><td>Yes</td></tr><tr><td>Error recovery</td><td>Yes</td><td>No</td></tr><tr><td>Flow control</td><td>Yes</td><td>No</td></tr></tbody></table>

## Karte: Network-Jitter
tag: wichtig
quelle: DSV-final.pdf, Folien 194-196

- Das Internet ist ein asynchrones Übertragungsmedium.
- Übertragungslatenzen sind nicht identisch und hängen von zusätzlichem Traffic ab.
- Dieser sogenannte Cross-Traffic ist nicht vorhersehbar und von der Nutzung abhängig.
- Die Schwankungen der Latenz bezeichnet man als Network-Jitter.
- Ping ist als Tool zur Veranschaulichung nutzbar.
- Die Nutzung synchroner Services bedarf eines Jitter-Buffers; er ist ein FIFO-Buffer (First In / First Out).

## Frage: Wie lauten die Stufen des digitalen Pfads im Übertragungsmodell?
id: digital-path
quelle: DSV-final.pdf, Folie 157

Anti-aliasing filter → Sigma/Delta converter → Input blocking & driver buffering → Encoding → Transmission → Decoding → Output blocking & driver buffering → Reconstruction (Encoding und Decoding optional).

## Frage: Wie lauten die Stufen des Internet-Pfads?
id: internet-path
quelle: DSV-final.pdf, Folie 157

Add UDP Header → Add IP Header → Add Ethernet Header → Sending → Routing → Receiving → Remove Ethernet Header → Remove IP Header → Remove UDP Header → Jitter buffering.

## Frage: Welche Stufen der Übertragungspfade verursachen eine deutliche Verzögerung?
id: significant-delay
quelle: DSV-final.pdf, Folie 157

Air, Input blocking & driver buffering, Transmission, Output blocking & driver buffering, Routing und Jitter buffering.

## Frage: Wie hängt die Schallgeschwindigkeit in Luft von der Temperatur ab?
id: schallgeschwindigkeit
quelle: DSV-final.pdf, Folie 158

\(c = (331{,}5 + 0{,}6\vartheta)\) m/s.

## Frage: Wie lang ist ein Sample buffer von 64 bzw. 2048 Samples bei 48 kHz?
id: samplebuffer-dauer
quelle: DSV-final.pdf, Folie 179

\(T = 1/48.000 = 20{,}83\ \mu s\); 64 Samples → 1,3 ms; 2048 Samples → 42,6 ms.

## Frage: Wie viele Bytes hat ein Full-HD-Bild mit 32 Bit pro Pixel?
id: fullhd-bild
quelle: DSV-final.pdf, Folie 180

\(1920 \cdot 1080 = 2.073.600\) Pixel; \(\cdot\ 32\) Bit = 66.355.200 Bits = 8.294.400 Bytes. Bei 25 fps ist \(T = 40\) ms.

## Frage: Was ist eine Callbackfunktion?
id: callback
quelle: DSV-final.pdf, Folie 181

Eine Funktion, die einer anderen Funktion (meist einer Bibliotheks- oder Betriebssystemfunktion) als Parameter übergeben und von dieser unter definierten Bedingungen mit definierten Argumenten aufgerufen wird.

## Frage: Was ist Jitter?
id: jitter
quelle: DSV-final.pdf, Folie 182

Eine Schwankung in der zeitlichen Anordnung digitaler Signale mit nicht konstanten Zeitabständen; er beschreibt die Abweichung \(\Delta t\) vom durchschnittlichen Intervall.

## Frage: Was beschreibt Wordclockjitter und welche Folgen hat er?
id: wordclockjitter
quelle: DSV-final.pdf, Folie 183

Die zeitlichen Schwankungen der Sampleintervalle, die einen theoretisch fixen, in der Praxis instabilen Idealwert haben. Folge: bei der A/D-Wandlung falsche Samplewerte, bei der D/A-Wandlung eine falsche Signalform.

## Frage: Welches Transportprotokoll gehört zu asynchronen, welches zu Echtzeit-Anwendungen?
id: servicetyp-protokoll
quelle: DSV-final.pdf, Folie 193

Asynchron (z. B. HTTP, FTP) → TCP. Echtzeit (z. B. VoIP, VPN) → UDP.

## Frage: Wie unterscheiden sich TCP und UDP?
id: tcp-udp
quelle: DSV-final.pdf, Folien 190-192

TCP: verbindungsorientiert, zuverlässig, kein Datenverlust, langsamer, Header 20 Bytes, Error recovery und Flow control. UDP: verbindungslos, nicht zuverlässig, Datenverlust möglich, schneller, Header 8 Bytes, kein Error recovery und keine Flow control. Error checking haben beide.

## Frage: Was ist Network-Jitter und was braucht ein synchroner Service deshalb?
id: network-jitter
quelle: DSV-final.pdf, Folien 194, 196

Die Schwankung der Latenz im asynchronen Internet, verursacht durch unvorhersehbaren Cross-Traffic. Synchrone Services brauchen einen Jitter-Buffer (FIFO-Buffer).
