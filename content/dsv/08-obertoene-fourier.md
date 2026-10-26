---
id: obertoene-fourier
title: Obertöne und Fouriertransformation
icon: 🌈
---

## Karte: Harmonische
tag: def
quelle: DSV-final.pdf, Folien 214-216

Eine Harmonische ist in der Physik und Technik eine Schwingung, deren Frequenz ein ganzzahliges Vielfaches einer bestimmten Grundfrequenz ist. Eine Harmonische oberhalb der Grundfrequenz wird auch Oberton genannt. Beispiel mit Grundton C = 66 Hz: Teilton 2 hat die doppelte Frequenz (132 Hz, Verhältnis 2:1, Oktave), Teilton 3 die dreifache (198 Hz, 3:2 zum Ton darunter, reine Quinte), Teilton 4 die vierfache (264 Hz, 4:3, reine Quarte), Teilton 5 die fünffache (330 Hz, 5:4, große Terz), Teilton 6 die sechsfache (396 Hz, 6:5, kleine Terz).

<em>Hinweis: korrigiert, weicht von der Folie ab. Folie 214 schreibt „Untertöne (Harmonics)“ und „Unterton“; das Inhaltsverzeichnis (Folie 7) und die Tabelle auf Folie 216 sprechen von Obertönen.</em>

## Karte: Spektrum eines Klangs
quelle: DSV-final.pdf, Folie 217

Die Folie zeigt zwei Spektren (Amplitude über der Frequenz bis 3000 Hz): oben eine einzelne Spektrallinie, unten zusätzlich kleinere Linien bei Vielfachen dieser Frequenz.

## Karte: Fouriertransformation
tag: def
quelle: DSV-final.pdf, Folien 218-219

Die Fouriertransformation ist ein auf vielen wissenschaftlichen Gebieten weit verbreiteter Algorithmus und ein effizientes Verfahren zur Ausführung wesentlicher Operationen bei der Signal- und Bildverarbeitung, Systemtheorie und Optik sowie grundlegenden mathematischen Berechnungen. Spektrum einer 1D-Funktion: Eine (fast) beliebige Funktion \(f(x)\) kann als Summe („lineare Kombination“) von elementaren Funktionen („Basisfunktionen“, z. B. Sinus/Cosinus) dargestellt werden.

## Karte: Zerlegung in Sin/Cos-Funktionen
tag: formel
quelle: DSV-final.pdf, Folie 220

\[f(x) = \int_{-\infty}^{\infty} \big(A(\omega) \cdot \cos \omega + B(\omega) \cdot \sin \omega\big)\, d\omega\]
\(A(\omega) \cdot \cos\omega\): Cosinus-Funktion mit Frequenz \(\omega\) und Amplitude \(A(\omega)\); \(B(\omega) \cdot \sin\omega\): Sinus-Funktion mit Frequenz \(\omega\) und Amplitude \(B(\omega)\).

## Karte: Rechteck aus Sinusschwingungen
tag: beispiel
quelle: DSV-final.pdf, Folien 221-222

Eine Rechteckfunktion \(f(x)\) mit Amplitude \(A\) und Periode \(T\) zerfällt in Sinusschwingungen mit \(n = 1, 3, 5, \ldots\) und den Amplituden \(B_1, B_3, B_5, \ldots\). Mit \(n = 1\) ergibt sich eine Sinusschwingung, mit \(n = 1, 3, 5\) bereits eine angenäherte Rechteckform; mit \(n = 1 \ldots 21\) und \(n = 1 \ldots 101\) wird das Rechteck immer genauer.

## Karte: Fourier-Spektrum
tag: formel
quelle: DSV-final.pdf, Folie 223

\[f(x) = \int_{-\infty}^{\infty} \big(F(\omega) \cdot e^{j\omega x}\big)\, d\omega\]
\(F(\omega) = A(\omega) + jB(\omega)\) ist eine komplexwertige Funktion, das „Spektrum“. Es ist die Zerlegung in periodische Funktionen mit Frequenz \(\omega\), gewichtet mit \(F(\omega)\).

## Karte: Berechnung des Fourier-Spektrums
tag: formel
quelle: DSV-final.pdf, Folie 224

Fourier-Transformierte:
\[F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \big(f(x) \cdot e^{-j\omega x}\big)\, dx\]
bzw. Realteil und Imaginärteil:
\[A(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \big(f(x) \cdot \cos(\omega x)\big)\, dx\]
\[B(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \big(f(x) \cdot \sin(\omega x)\big)\, dx\]

## Karte: Vorwärts- und Rückwärtstransformation
tag: formel
quelle: DSV-final.pdf, Folie 225

Fourier-Transformation (kontinuierlich). Vorwärts-Transformation \(f(x) \xrightarrow{F} F(\omega)\):
\[F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \big(f(x) \cdot e^{-j\omega x}\big)\, dx\]
Rückwärts- (inverse) Transformation \(F(\omega) \xrightarrow{F^{-1}} f(x)\):
\[f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \big(F(\omega) \cdot e^{j\omega x}\big)\, d\omega\]

## Karte: Fourier-Transformationspaar
quelle: DSV-final.pdf, Folie 226

\(f(x)\) und \(F(\omega)\) bilden ein „Fourier-Transformationspaar“. Beispiel: \(f(x) = a\cos(2\pi k_0 x)\) hat als Realteil des Spektrums zwei Linien \(\frac{a}{2}\delta(k - k_0)\) und \(\frac{a}{2}\delta(k + k_0)\) bei \(\pm k_0\).

## Frage: Was ist eine Harmonische?
id: harmonische
quelle: DSV-final.pdf, Folie 214

Eine Schwingung, deren Frequenz ein ganzzahliges Vielfaches einer bestimmten Grundfrequenz ist. Oberhalb der Grundfrequenz heißt sie auch Oberton. <em>Hinweis: korrigiert, weicht von der Folie ab. Folie 214 schreibt „Unterton“.</em>

## Frage: Welche Frequenzen haben die ersten Teiltöne über einem Grundton von 66 Hz, und welche Intervalle bilden sie zum Ton darunter?
id: teiltoene
quelle: DSV-final.pdf, Folie 216

132 Hz (2:1, Oktave), 198 Hz (3:2, reine Quinte), 264 Hz (4:3, reine Quarte), 330 Hz (5:4, große Terz), 396 Hz (6:5, kleine Terz).

## Frage: Als was lässt sich eine (fast) beliebige Funktion darstellen?
id: fourier-basisfunktionen
quelle: DSV-final.pdf, Folie 219

Als Summe (lineare Kombination) elementarer Basisfunktionen, z. B. Sinus/Cosinus.

## Frage: Welche Sinusanteile ergeben zusammen eine Rechteckschwingung?
id: rechteck-fourier
quelle: DSV-final.pdf, Folien 221-222

Sinusschwingungen mit \(n = 1, 3, 5, \ldots\); je mehr Anteile (z. B. \(n = 1 \ldots 101\)), desto genauer das Rechteck.

## Frage: Was ist das Fourier-Spektrum F(ω)?
id: fourier-spektrum
quelle: DSV-final.pdf, Folie 223

Die komplexwertige Funktion \(F(\omega) = A(\omega) + jB(\omega)\), mit der die periodischen Funktionen der Frequenz \(\omega\) gewichtet werden.

## Frage: Wie lautet die Vorwärts-Fouriertransformation?
id: fourier-vorwaerts
quelle: DSV-final.pdf, Folien 224-225

\(F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \big(f(x) \cdot e^{-j\omega x}\big)\, dx\)

## Frage: Wie lautet die inverse Fouriertransformation?
id: fourier-invers
quelle: DSV-final.pdf, Folie 225

\(f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \big(F(\omega) \cdot e^{j\omega x}\big)\, d\omega\)
