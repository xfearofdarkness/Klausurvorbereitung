---
id: technische-grundlagen
title: Technische Grundlagen
icon: 🔌
---

## Karte: Elektrischer Strom
tag: def
quelle: DSV-final.pdf, Folien 61-62

Elektrischer Strom ist die gerichtete Bewegung von kleinen Teilchen (Elektronen) durch einen geschlossenen Kreislauf, ähnlich wie Wasser durch eine Leitung fließt. Angetrieben wird sie durch eine elektrische Spannung \(U\), gemessen in Volt (V); sie erzeugt nutzbare Energie für Geräte wie Lampen, Motoren oder Heizungen. Die Stärke des Stromflusses, die Stromstärke \(I\), wird in Ampere (A) gemessen. Sie hängt von der Spannung und vom Widerstand \(R\) (gemessen in Ohm Ω) der Verbraucher ab.

## Karte: Ohmsches Gesetz
tag: formel
quelle: DSV-final.pdf, Folien 63-64

\[I = U / R\]
mit \(R\): elektrischer Widerstand, \(U\): Spannung, \(I\): Stromstärke.

## Karte: Beispiel: Strom durch den Körper
tag: beispiel
quelle: DSV-final.pdf, Folien 65-69

Berührt man mit beiden Händen die Pole einer Spannungsquelle mit \(U = 230\) V, fließt bei einem Widerstand von 1.000 Ω durch den Körper \(I = U/R = 230\text{ V} / 1.000\ \Omega = 0{,}23\text{ A} = 230\text{ mA}\).

## Karte: Leiterwiderstand
tag: formel
quelle: DSV-final.pdf, Folien 70-71

\(R\) ist abhängig vom Leiterquerschnitt \(A\) und der Leiterlänge \(l\): \(R = (\rho \times l) / A\). \(\rho\) (gesprochen „Rho“) ist materialabhängig und temperaturabhängig, hier aber zu vernachlässigen; dann gilt \(R = l/A\).

## Karte: Spannungsteiler
tag: wichtig
quelle: DSV-final.pdf, Folien 72-74

Beim Spannungsteiler liegen zwei Widerstände R1 und R2 in Reihe an der Gesamtspannung; an R2 wird die Teilspannung U2 abgegriffen. Beispiel: \(U = 230\) V, R1 = R2 = 1.000 Ω ergibt U1 = U2 = 115 V und \(I_1 = U_1/R = 115\text{ V} / 1.000\ \Omega = 0{,}115\text{ A} = 115\text{ mA}\), ebenso \(I_2 = 115\) mA.

## Karte: Netzspannung
tag: wichtig
quelle: DSV-final.pdf, Folien 77-79

Die Netzspannung hat einen Effektivwert von 230 V (RMS), eine Amplitude (Spitzenwert) von 325 V und eine Frequenz von 50 Hz, also eine Periode von \(T = 20\) ms.

<em>Hinweis: korrigiert, weicht von der Folie ab. Der Text auf Folie 79 nennt eine Amplitude von 230 V; die Abbildung derselben Folie zeigt 325 V (230 V RMS).</em>

## Karte: Powerline Communication
tag: def
quelle: DSV-final.pdf, Folien 80-82

Mit Powerline Communication (PLC) lassen sich vorhandene Stromkabel als Datenleitung nutzen. PLC nutzt die vorhandene 230-V-Infrastruktur (bei Bedarf auch andere Technologien wie TV- oder Telefonleitungen), bedient sich aber höherer Trägerfrequenzen als die anliegende 50-Hz-Netzspannung. Als Modulationsart wird „Orthogonales Frequenzmultiplexing“ (OFDM) verwendet.

## Karte: Elektronische Bauelemente
quelle: DSV-final.pdf, Folien 83-93

Bauelemente: Diode, Leuchtdiode (LED), Widerstand, Kondensator, Transistor. Widerstandswerte werden über eine Farbtabelle (Farbringe) codiert. IC steht für integrated circuit. Beispiel: Der Apple Silicon M4 hat 28 Milliarden Transistoren (\(28 \cdot 10^9\)).

## Karte: Dämpfung und Dezibel
tag: def
quelle: DSV-final.pdf, Folie 94

Dämpfung bezeichnet das Maß der Amplitudenabnahme eines Signals; die Angabe erfolgt üblicherweise logarithmisch in dB. Ein Dezibel (dB) ist eine logarithmische Hilfsmaßeinheit, die das Verhältnis zweier Größen angibt, oft Lautstärke oder Leistung, z. B. von Antennen.

## Karte: SNR (Signal/Noise Ratio)
tag: def
quelle: DSV-final.pdf, Folie 95

Das SNR ist ein Maß für die technische Qualität eines Nutzsignals, das von einem Rauschen überlagert wird. Es ist definiert als Verhältnis der mittleren Leistung des Nutzsignals zum Störsignal. Die Angabe erfolgt ebenfalls in dB.

## Karte: Stecker und Buchsen
tag: wichtig
quelle: DSV-final.pdf, Folien 97-100

- <strong>Asymmetrisch:</strong> Cinch, Klinke (¼ inch), Miniklinke (1/8 inch, Minijack)
- <strong>Symmetrisch:</strong> XLR, Stereoklinke (¼ inch), Stereominiklinke (1/8 inch, Minijack)

## Karte: Symmetrische Übertragung
tag: wichtig
quelle: DSV-final.pdf, Folien 101-102

Im unsymmetrischen Schaltkreis (unbalanced circuit) gelangt eine Störung (Noise) auf der Leitung bis an den Ausgang (noise on output). Im symmetrischen Schaltkreis (balanced, balanced circuit) überträgt der Sender das Signal zusätzlich invertiert auf einer zweiten Ader; die Störung wirkt auf beide Adern gleich. Der Empfänger (Verstärker mit Minus- und Plus-Eingang) gewinnt daraus das Signal ohne die Störung (noise cancelled).

## Frage: Wie lautet das ohmsche Gesetz?
id: ohmsches-gesetz
quelle: DSV-final.pdf, Folie 64

\(I = U/R\) mit Stromstärke \(I\), Spannung \(U\) und Widerstand \(R\).

## Frage: Welcher Strom fließt bei 230 V durch einen Körper mit 1.000 Ω?
id: koerperstrom
quelle: DSV-final.pdf, Folie 69

\(I = 230\text{ V} / 1.000\ \Omega = 0{,}23\text{ A} = 230\text{ mA}\).

## Frage: Wovon hängt der Widerstand eines Leiters ab?
id: leiterwiderstand
quelle: DSV-final.pdf, Folien 70-71

Vom Leiterquerschnitt \(A\) und der Leiterlänge \(l\): \(R = (\rho \times l)/A\), wobei \(\rho\) material- und temperaturabhängig ist (hier vernachlässigt: \(R = l/A\)).

## Frage: Welche Spannungen und Ströme ergeben sich am Spannungsteiler mit 230 V und zwei Widerständen von je 1.000 Ω?
id: spannungsteiler
quelle: DSV-final.pdf, Folien 73-74

U1 = U2 = 115 V; \(I_1 = I_2 = 115\text{ V} / 1.000\ \Omega = 0{,}115\text{ A} = 115\text{ mA}\).

## Frage: Welche Frequenz und Periode hat die Netzspannung?
id: netzspannung
quelle: DSV-final.pdf, Folien 78-79

50 Hz, also eine Periode \(T = 20\) ms. 230 V ist der Effektivwert (RMS), die Amplitude beträgt 325 V.

## Frage: Was ist Powerline Communication (PLC) und welche Modulation nutzt sie?
id: powerline
quelle: DSV-final.pdf, Folien 81-82

PLC nutzt vorhandene Stromkabel (230-V-Infrastruktur) als Datenleitung, mit höheren Trägerfrequenzen als die 50-Hz-Netzspannung. Modulationsart: Orthogonales Frequenzmultiplexing (OFDM).

## Frage: Was bezeichnet Dämpfung und in welcher Einheit wird sie angegeben?
id: daempfung
quelle: DSV-final.pdf, Folie 94

Das Maß der Amplitudenabnahme eines Signals, üblicherweise logarithmisch in dB angegeben.

## Frage: Wie ist das SNR definiert?
id: snr
quelle: DSV-final.pdf, Folie 95

Als Verhältnis der mittleren Leistung des Nutzsignals zum Störsignal, angegeben in dB. Es ist ein Maß für die technische Qualität eines von Rauschen überlagerten Nutzsignals.

## Frage: Welche Steckverbindungen sind symmetrisch, welche asymmetrisch?
id: stecker-symmetrie
quelle: DSV-final.pdf, Folien 98, 100

Asymmetrisch: Cinch, Klinke (¼ inch), Miniklinke (1/8 inch). Symmetrisch: XLR, Stereoklinke (¼ inch), Stereominiklinke (1/8 inch).

## Frage: Warum wird bei symmetrischer Übertragung eine Störung ausgelöscht?
id: symmetrische-uebertragung
quelle: DSV-final.pdf, Folien 101-102

Das Signal wird zusätzlich invertiert auf einer zweiten Ader übertragen. Die Störung wirkt auf beide Adern gleich; der Empfänger mit Minus- und Plus-Eingang gewinnt daraus das Signal ohne die Störung.
