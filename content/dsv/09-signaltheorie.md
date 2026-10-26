---
id: signaltheorie
title: Signaltheorie und LTI-Systeme
icon: 📈
---

## Karte: Systemtheorie und LTI-System
tag: def
quelle: DSV-final.pdf, Folien 228-229

Die Systemtheorie erlaubt eine allgemeingültige Beschreibung von Manipulationen an Signalen. Ein System erzeugt aus Eingangsgrößen \(x(t)\) die Ausgangsgrößen \(y(t)\). LTI steht für Linear-Time-Invariant, eine Beschränkung auf lineare, zeitinvariante Systeme. Ein zeitdiskretes System überführt die Eingangsfolge \(x[n]\) durch eine Übertragungsfunktion \(S(x[n])\) in die Ausgangsfolge \(y[n]\). Handelt es sich um ein lineares zeitinvariantes System (LZI-System), so sind die Impulsantwort zusammen mit der Faltungsoperation ausreichend, um das System vollständig zu beschreiben.

## Karte: Zeitinvarianz und Linearität
tag: wichtig
quelle: DSV-final.pdf, Folie 230

<strong>Zeitinvarianz:</strong> Das System verändert sein Verhalten über die Zeit nicht, d. h. wenn \(x_1(t) \to y_1(t)\), folgt \(x_1(t - \tau) \to y_1(t - \tau)\).

<strong>Linearität:</strong> Es gilt das Überlagerungsprinzip (Superpositionsprinzip), d. h. wenn \(x_1(t) \to y_1(t)\) und \(x_2(t) \to y_2(t)\), folgt \(a x_1(t) + b x_2(t) \to a y_1(t) + b y_2(t)\).

## Karte: Einheitsimpuls
tag: def
quelle: DSV-final.pdf, Folie 231

Von sehr großer Bedeutung ist die Einheitsimpulsfolge, kurz „Einheitsimpuls“:
\[\delta[n] = \begin{cases} 1 & : n = 0 \\ 0 & : n \neq 0 \end{cases}\]
Die Bezeichnung \(\delta[n]\) ergibt sich, da das äquivalente Signal in der analogen Signalverarbeitung der Dirac-Impuls \(\delta(t)\) ist.

## Karte: Impulsantwort
tag: def
quelle: DSV-final.pdf, Folie 232

Die Impulsantwort \(h[n]\) eines LZI-Systems ist definiert als die Reaktion auf die Einheitsimpulsfolge \(\delta[n]\): \(h[n] = S(\delta[n])\).

## Karte: Faltung mit der Impulsantwort
tag: wichtig
quelle: DSV-final.pdf, Folie 233

Da für LZI-Systeme das Superpositionsprinzip gilt, ist die Impulsantwort \(h[n]\) ausreichend, um die Reaktion des Systems auf jede beliebige Eingabe zu ermitteln. Jede Eingabefolge lässt sich mit dem Einheitsimpuls schreiben als \(x[n] = \sum_k x[k]\,\delta[n - k]\). Mit \(h[n] = S(\delta[n])\) gilt für die Ausgangsfolge:
\[\begin{aligned} y[n] &= S\Big(\sum_k x[k]\,\delta[n - k]\Big) \\ &= \sum_k x[k]\,S(\delta[n - k]) \\ &= \sum_k x[k]\,h[n - k] \\ &= x[n] * h[n] \end{aligned}\]
D. h. die Reaktion des Systems auf eine beliebige Eingabe kann durch die Faltung der Eingabefolge mit der Impulsantwort ermittelt werden.

## Karte: Einheitssprung
tag: def
quelle: DSV-final.pdf, Folie 234

\[u[n] = \begin{cases} 1 & : n \geq 0 \\ 0 & : n < 0 \end{cases}\]
Zusammenhang mit dem Einheitsimpuls: die Integration (bzw. im zeitdiskreten Fall die Summation) \(u[n] = \sum_{i=-\infty}^{n} \delta[i]\).

## Karte: Zeitdiskrete Pulse
tag: formel
quelle: DSV-final.pdf, Folien 235-237

- <strong>Rechteckpuls</strong> mit Pulsweite \(P\): \(x[n] = 1\) für \(|n| < P/2\), \(x[n] = 0\) für \(|n| > P/2\) (Abbildung: \(P = 9\))
- <strong>Gauss-Puls</strong> mit Standardabweichung \(\sigma\): \(x[n] = e^{-0.5\,(n/\sigma)^2}\) (Abbildung: \(\sigma = 4\))
- <strong>Dreieck-Puls</strong> mit Pulsweite \(P\): \(x[n] = 1.0 - 2.0\,(n/P)\) für \(|n| \leq P/2\), \(x[n] = 0\) für \(|n| > P/2\) (Abbildung: \(P = 9\))

## Karte: Zeitdiskrete Schwingungen
tag: formel
quelle: DSV-final.pdf, Folien 238-240

Mit Wellenlänge \(W\), Verschiebung \(M\) und Amplitude \(A\) (Abbildungen: \(W = 16\), \(M = 0\), \(A = 1\)):
- <strong>Sinus-Schwingung:</strong> \(x[n] = A \sin\big(2\pi \frac{n + M}{W}\big)\)
- <strong>Dreieck-Schwingung:</strong> \(x[n] = A\big(2.0\,\frac{(n + M) \bmod W}{W} - 1.0\big)\), dabei bezeichnet mod die Modulo-Operation
- <strong>Rechteck-Schwingung:</strong> \(x[n] = A\) für \((n + M) \bmod W \geq W/2\), \(x[n] = -A\) für \((n + M) \bmod W < W/2\)

## Karte: Faltung und Rekonstruktion
quelle: DSV-final.pdf, Folien 241-244

Die Faltung \((f * g)(t)\) ist die Fläche unter \(f(\tau)\,g(t - \tau)\) (Animation: Faltung eines Rechtecksignals mit sich selbst ergibt ein Dreieck). Mathematische Schreibweise zur Faltung: \(y(t) = x(t) * a(t)\). Beim Rekonstruktionsprozess entsteht das Signal aus skalierten und verschobenen sinc-Funktionen (scaled and shifted sinc functions).

## Karte: Systembeschreibung im Frequenzbereich
tag: wichtig
quelle: DSV-final.pdf, Folien 245-246

Das Verhalten eines linearen zeitinvarianten Systems kann auch im Frequenzbereich beschrieben werden; das Systemverhalten wird dann nicht in Abhängigkeit der Zeit, sondern der Frequenz beschrieben (Spektralanalyse). \(y(t) = x(t) * a(t)\) entspricht \(Y(s) = X(s) \cdot A^L(s)\): Faltung im Zeitbereich entspricht einer Multiplikation im Frequenzbereich. Die Systemantwort im Frequenzbereich berechnet sich also durch Multiplikation der Erregung im Frequenzbereich mit der Impulsantwort im Frequenzbereich.

## Karte: Weitere Regeln der Fourier-Transformation
tag: formel
quelle: DSV-final.pdf, Folie 247

<table><thead><tr><th></th><th>Zeitbereich</th><th>Frequenzbereich</th></tr></thead><tbody><tr><td>Linearkombination</td><td>\(a x_1(t) + b x_2(t)\)</td><td>\(a X_1(\omega) + b X_2(\omega)\)</td></tr><tr><td>Faltung</td><td>\(x_1(t) * x_2(t)\)</td><td>\(X_1(\omega) \cdot X_2(\omega)\)</td></tr></tbody></table>
und vice versa.

## Karte: Frequenz- und Zeitauflösung
tag: wichtig
quelle: DSV-final.pdf, Folien 248-250

Je größer \(N\) (also je grober die Zeitauflösung), umso feiner/detaillierter das Spektrum. Bei \(f_s = 16.000\) Hz:
- \(N = 512\): \(N/2 + 1 = 257\) Spektralkomponenten zwischen 0 und 8 kHz mit einem Abstand von \(16.000/512 = 31{,}25\) Hz
- \(N = 1024\): 513 Spektralkomponenten mit einem Abstand von \(16.000/1024 = 15{,}625\) Hz
- \(N = 64\): Frequenzabstand \(16.000/64 = 250\) Hz

Bei einer Fourier-Analyse werden \(N\) aufeinanderfolgende digitale Werte eines Zeitsignals in \(N\) spektrale Werte umgewandelt. Dauer in ms eines N-Punkt-Fensters: \(N/f_{s,kHz}\) (\(f_{s,kHz}\): Abtastrate in kHz). Beispiel: 256 Punkte bei 10 kHz = 25,6 ms → ca. 39 Hz.

## Frage: Was bedeutet LTI und wodurch ist ein LTI-System vollständig beschrieben?
id: lti-system
quelle: DSV-final.pdf, Folien 228-229

Linear-Time-Invariant: Beschränkung auf lineare, zeitinvariante Systeme. Vollständig beschrieben ist es durch die Impulsantwort zusammen mit der Faltungsoperation.

## Frage: Was bedeuten Zeitinvarianz und Linearität?
id: zeitinvarianz-linearitaet
quelle: DSV-final.pdf, Folie 230

Zeitinvarianz: Das System verändert sein Verhalten über die Zeit nicht; aus \(x_1(t) \to y_1(t)\) folgt \(x_1(t - \tau) \to y_1(t - \tau)\). Linearität: Es gilt das Superpositionsprinzip; aus \(x_1 \to y_1\) und \(x_2 \to y_2\) folgt \(a x_1 + b x_2 \to a y_1 + b y_2\).

## Frage: Wie ist der Einheitsimpuls δ[n] definiert?
id: einheitsimpuls
quelle: DSV-final.pdf, Folie 231

\(\delta[n] = 1\) für \(n = 0\), sonst 0. Analoges Gegenstück ist der Dirac-Impuls \(\delta(t)\).

## Frage: Was ist die Impulsantwort h[n]?
id: impulsantwort
quelle: DSV-final.pdf, Folie 232

Die Reaktion eines LZI-Systems auf die Einheitsimpulsfolge: \(h[n] = S(\delta[n])\).

## Frage: Wie ermittelt man die Reaktion eines LZI-Systems auf eine beliebige Eingabe?
id: faltung-systemantwort
quelle: DSV-final.pdf, Folie 233

Durch Faltung der Eingabefolge mit der Impulsantwort: \(y[n] = \sum_k x[k]\,h[n - k] = x[n] * h[n]\).

## Frage: Wie hängen Einheitssprung und Einheitsimpuls zusammen?
id: einheitssprung
quelle: DSV-final.pdf, Folie 234

Der Einheitssprung ist die Summation (Integration) des Einheitsimpulses: \(u[n] = \sum_{i=-\infty}^{n} \delta[i]\).

## Frage: Wie wird ein zeitdiskreter Gauss-Puls generiert?
id: gauss-puls
quelle: DSV-final.pdf, Folie 236

\(x[n] = e^{-0.5\,(n/\sigma)^2}\) mit der Standardabweichung \(\sigma\).

## Frage: Wie wird eine zeitdiskrete Sinus-Schwingung generiert?
id: sinus-schwingung
quelle: DSV-final.pdf, Folie 238

\(x[n] = A \sin\big(2\pi \frac{n + M}{W}\big)\) mit Wellenlänge \(W\), Verschiebung \(M\) und Amplitude \(A\).

## Frage: Was entspricht einer Faltung im Zeitbereich im Frequenzbereich?
id: faltung-multiplikation
quelle: DSV-final.pdf, Folien 246-247

Eine Multiplikation: Die Systemantwort im Frequenzbereich ist die Erregung im Frequenzbereich mal die Impulsantwort im Frequenzbereich.

## Frage: Wie wirkt sich ein größeres N auf das Spektrum aus?
id: n-aufloesung
quelle: DSV-final.pdf, Folie 248

Je größer \(N\) (je grober die Zeitauflösung), umso feiner/detaillierter das Spektrum.

## Frage: Wie viele Spektralkomponenten mit welchem Abstand liefert N = 512 bei f_s = 16.000 Hz?
id: spektralkomponenten-512
quelle: DSV-final.pdf, Folie 248

\(N/2 + 1 = 257\) Spektralkomponenten zwischen 0 und 8 kHz mit einem Abstand von \(16.000/512 = 31{,}25\) Hz.

## Frage: Wie lange dauert ein N-Punkt-Fenster?
id: n-punkt-fenster
quelle: DSV-final.pdf, Folie 250

\(N/f_{s,kHz}\) in ms. Beispiel: 256 Punkte bei 10 kHz = 25,6 ms (ca. 39 Hz).
