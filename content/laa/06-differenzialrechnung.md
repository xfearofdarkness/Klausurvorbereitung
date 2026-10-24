---
id: differenzialrechnung
title: Differenzialrechnung
icon: 🎢
---

## Karte: Von der Sekante zur Tangente
quelle: VorlesungFolienLAA-2026.pdf, Folien 86-88

Die Steigung der Sekante zwischen zwei Punkten am Funktionsgraphen ist \(\frac{\Delta f}{\Delta x}\) mit \(\Delta f := f(x) - f(x_0)\) und \(\Delta x := x - x_0\); sie gibt die Änderung von \(f\) pro \(\Delta x\) an. Für die Steigung der Tangente in \(x_0\) muss \(\Delta x\) immer kleiner werden: Im Grenzwertprozess \(x \to x_0\) gehen die Sekanten in die Tangente über.

## Karte: Differenzierbarkeit und Differenzialquotient
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 89

Sei \(f: I \to \mathbb{R}\) auf einem Intervall \(I \subseteq \mathbb{R}\) definiert. \(f\) ist in \(x_0 \in I\) differenzierbar, wenn der Grenzwert \[f'(x_0) := \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}\] (Differenzialquotient) existiert; \(f'(x_0)\) heißt dann Ableitung von \(f\) in \(x_0\). \(f\) heißt differenzierbar auf \(I\), wenn \(f\) in allen \(x_0 \in I\) differenzierbar ist.

## Karte: Bedeutung der Ableitung
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 90

Die Ableitung gibt die Steigung von \(f\) im betrachteten Punkt an und beschreibt somit die lokale Änderung von \(f\).

## Karte: Alternative h-Schreibweise
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folien 91-92

Mit ihr lässt sich zumeist etwas besser rechnen: \[f'(x) := \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}\] Nichts von Substanz ändert sich: Der betrachtete Punkt heißt \(x\) statt \(x_0\), der Abstand \(h\).

## Karte: Notationen der Ableitung
quelle: VorlesungFolienLAA-2026.pdf, Folie 94

Statt \(f'(x)\) schreibt man häufig \(\frac{df(x)}{dx}\) oder. Wenn \(f\) von der Zeit abhängt: \(\dot{f}(t)\) (bei Physikern beliebt). Das Intervall \(I\) wird zumeist als offen angenommen, weil das in der Theorie Vorteile bringt.

## Karte: Ableitung von x² über den Differenzialquotienten
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 95

Sei \(f(x) := x^2\). Es gilt \[\frac{f(x+h) - f(x)}{h} = \frac{(x+h)^2 - x^2}{h} = \frac{2hx + h^2}{h} = 2x + h\] und somit \(f'(x) = \lim_{h \to 0}(2x + h) = 2x\).

## Karte: Nicht jede Funktion ist differenzierbar
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 96-97

Die Funktion \(f(x) := |x|\) ist im Punkt 0 nicht differenzierbar, denn \[\frac{|0 + h| - |0|}{h} = \frac{|h|}{h}\] ist für \(h \to 0\) nicht konvergent. Die behandelten Standardfunktionen (Exponentialfunktion, Polynome, Sinus, …) sind dagegen auf ihrem Definitionsbereich differenzierbar.

## Karte: Ableitungsregeln
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folie 98

Sind \(f\) und \(g\) differenzierbar (und die Ausdrücke definiert), gilt mit konstantem \(c \in \mathbb{R}\): \[(f + g)'(x) = f'(x) + g'(x), \quad (c \cdot f)'(x) = c \cdot f'(x) \;\text{(Linearität)}\] \[(f \cdot g)'(x) = f'(x)g(x) + f(x)g'(x) \;\text{(Produktregel)}\] \[\left(\frac{f}{g}\right)'(x) = \frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)} \;\text{(Quotientenregel)}\] \[(f \circ g)'(x) = f'(g(x)) \cdot g'(x) \;\text{(Kettenregel)}\]

## Karte: Wichtige Ableitungen (zum Merken)
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 99

\[(x^s)' = s \cdot x^{s-1} \;(s \in \mathbb{R}), \qquad (\sqrt{x})' = \frac{1}{2\sqrt{x}}\] \[(a_0 + a_1 x + \ldots + a_n x^n)' = a_1 + 2a_2 x + \ldots + n a_n x^{n-1}\] \[(e^x)' = e^x, \qquad (\ln|x|)' = \frac{1}{x}\] \[(\sin x)' = \cos x, \qquad (\cos x)' = -\sin x\] \[(\tan x)' = \frac{1}{\cos^2 x} = 1 + \tan^2 x\] Bitte die jeweiligen Definitionsbereiche beachten!

## Karte: Ableitung von x^x
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 100

Für \(f: \,]0, \infty[ \to \mathbb{R},\; x \mapsto x^x\) gilt: \[f'(x) = \frac{d}{dx}\left(e^{\ln(x^x)}\right) = \frac{d}{dx}\left(e^{x \ln x}\right) = e^{x \ln x} \cdot \frac{d}{dx}(x \ln x) = x^x(\ln x + 1)\]

## Karte: Differenzierbar ⇒ stetig
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folie 102

Für differenzierbares \(f\) gilt \[\lim_{x \to x_0}(f(x) - f(x_0)) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} \cdot \lim_{x \to x_0}(x - x_0) = f'(x_0) \cdot 0 = 0\] Das sagt uns: Jede differenzierbare Funktion ist stetig.

## Karte: Höhere Ableitungen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 103-105

Ist die Ableitung \(f'\) wiederum differenzierbar, erhält man die zweite Ableitung \(f'' := (f')' = \frac{d^2 f}{dx^2}\). Ist \(f\) insgesamt \(k\)-mal differenzierbar, erhält man die \(k\)-te Ableitung \[f^{(k)} = \frac{d^k f}{dx^k}\] Die 0-te Ableitung ist \(f^{(0)} := f\), die Funktion selbst. Achtung: \(f^k\) statt \(f^{(k)}\) zu schreiben ist falsch. Die Klammern vermeiden die Verwechselung mit der \(k\)-ten Potenz.

## Karte: Geschwindigkeit und Beschleunigung
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 106

Ist \(x(t)\) eine zweimal differenzierbare Ortsfunktion eines Teilchens, so heißt die erste Ableitung Geschwindigkeit \(v(t) = \dot{x}(t)\) und die zweite Ableitung Beschleunigung \(a(t) = \dot{v}(t) = \ddot{x}(t)\). Die Formelzeichen kommen von velocity und acceleration.

## Karte: Notwendige Bedingung für lokale Extrema
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folie 108

Sei \(f: D \to \mathbb{R}\) differenzierbar und \(O \subseteq D\) eine \(\varepsilon\)-Umgebung von \(x_0\). Hat \(f\) in \(x_0\) ein lokales Minimum oder Maximum, dann gilt \(f'(x_0) = 0\).

## Karte: Hinreichendes Kriterium über die n-te Ableitung
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folie 109

Sei \(f\) \(n\)-mal differenzierbar und \(x_0\) mit \[f'(x_0) = \ldots = f^{(n-1)}(x_0) = 0, \quad f^{(n)}(x_0) \ne 0\] Ist \(n\) gerade: \(f\) nimmt in \(x_0\) ein lokales Maximum an, falls \(f^{(n)}(x_0) < 0\), und ein lokales Minimum, falls \(f^{(n)}(x_0) > 0\). Ist \(n\) ungerade, nimmt \(f\) in \(x_0\) weder Minimum noch Maximum an.

## Karte: Beispiel: Extrema von x² − 2x + 5 auf [−2, 2]
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 110-111

\(f'(x) = 2x - 2\), \(f''(x) = 2\). Einzige Nullstelle der Ableitung: \(x = 1\) mit \(f''(1) = 2 > 0\). Dort liegt ein lokales Minimum mit \(f(1) = 4\). An den Rändern gilt \(f(-2) = 13\), \(f(2) = 5\); da \(f\) auf \([-2, 1[\) streng monoton fällt und auf \(]1, 2]\) streng monoton steigt, liegen bei \(x = \pm 2\) lokale Maxima. Vergleich der Funktionswerte: globales Minimum \(y = 4\) bei \(x = 1\), globales Maximum \(y = 13\) bei \(x = -2\).

## Karte: Warnung: Das Schulkriterium ist nicht die ganze Weisheit
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 112

In der Schule wurde oft gelehrt: kritische Stellen über die Nullstellen der ersten Ableitung finden und in die zweite Ableitung einsetzen; je nach Vorzeichen liegt ein Maximum oder Minimum vor. Das funktioniert manchmal, ist aber nach dem Kriterium über die \(n\)-te Ableitung nicht die ganze Weisheit (Gegenbeispiel aus der Vorlesung: \(f(x) = x^4\)).

## Karte: Taylor-Formel und Taylor-Polynom
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 113

Sei \(I \subset \mathbb{R}\) ein Intervall, \(x_0, x \in I\) und \(f: I \to \mathbb{R}\) \(n\)-mal differenzierbar. Dann gilt: \[f(x) = \sum_{i=0}^{n} \frac{f^{(i)}(x_0)}{i!}(x - x_0)^i + R^{n,x_0}_f(x)\] Die gesamte Gleichung heißt Taylor-Formel, die Summe Taylor-Polynom \(T^{n,x_0}_f\) \(n\)-ter Ordnung von \(f\) mit Entwicklungspunkt \(x_0\), der letzte Term Restglied \(R^{n,x_0}_f\).

## Karte: Bedeutung des Taylor-Polynoms
quelle: VorlesungFolienLAA-2026.pdf, Folie 114

Das Taylor-Polynom stellt eine Approximation (Näherung) einer geeigneten Funktion durch Polynome dar. Das Restglied gibt den Fehler an, der bei dieser Näherung gemacht wird.

## Karte: Taylor-Polynom der Exponentialfunktion
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 115

Für \(f(x) = e^x\) um den Entwicklungspunkt \(x_0 = 0\): Beim Ableiten ändert sich die Funktion nicht, daher ist \(f^{(i)}(0) = e^0 = 1\) für alle \(i \in \mathbb{N}\) und \[T^{n,0}_f(x) = \sum_{i=0}^{n} \frac{f^{(i)}(0)}{i!}(x - 0)^i = \sum_{i=0}^{n} \frac{1}{i!} x^i\]

## Frage: Was ist eine Sekante, was eine Tangente?
id: f7j64l
quelle: VorlesungFolienLAA-2026.pdf, Folien 86-88

Die Sekante verbindet zwei Punkte am Funktionsgraphen; ihre Steigung \(\frac{\Delta f}{\Delta x}\) gibt die Änderung von \(f\) pro \(\Delta x\) an. Lässt man \(\Delta x\) immer kleiner werden (\(x \to x_0\)), gehen die Sekanten in die Tangente in \(x_0\) über, deren Steigung die Ableitung ist.

## Frage: Wie ist die Ableitung \(f'(x_0)\) über den Differenzialquotienten definiert?
id: 1olxkr7
quelle: VorlesungFolienLAA-2026.pdf, Folien 89-90

\(f'(x_0) := \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}\). Existiert dieser Grenzwert, heißt \(f\) in \(x_0\) differenzierbar und \(f'(x_0)\) Ableitung von \(f\) in \(x_0\). Die Ableitung gibt die Steigung von \(f\) im betrachteten Punkt an.

## Frage: Wie lautet die h-Schreibweise der Ableitung?
id: 3o93ho
quelle: VorlesungFolienLAA-2026.pdf, Folien 91-92

\(f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}\). Inhaltlich ändert sich nichts. Der betrachtete Punkt heißt \(x\) statt \(x_0\) und der Abstand \(h\); mit dieser Form lässt sich zumeist etwas besser rechnen.

## Frage: Welcher Zusammenhang besteht zwischen Differenzierbarkeit und Stetigkeit?
id: 1wc27et
quelle: VorlesungFolienLAA-2026.pdf, Folien 96, 102

Jede differenzierbare Funktion ist stetig. Die Umkehrung gilt nicht: \(f(x) := |x|\) ist im Punkt 0 nicht differenzierbar, denn \(\frac{|h|}{h}\) ist für \(h \to 0\) nicht konvergent.

## Frage: Wie lautet die Produktregel?
id: 1o123x6
quelle: VorlesungFolienLAA-2026.pdf, Folie 98

Für differenzierbare Funktionen \(f\) und \(g\) gilt: \((f \cdot g)'(x) = f'(x)g(x) + f(x)g'(x)\).

## Frage: Wie lautet die Quotientenregel?
id: 1b9edj5
quelle: VorlesungFolienLAA-2026.pdf, Folie 98

\(\left(\frac{f}{g}\right)'(x) = \frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)}\). Dort, wo der Ausdruck definiert ist.

## Frage: Wie lautet die Kettenregel?
id: 1u25bn0
quelle: VorlesungFolienLAA-2026.pdf, Folie 98

Für die Komposition differenzierbarer Funktionen gilt: \((f \circ g)'(x) = f'(g(x)) \cdot g'(x)\).

## Frage: Welche Ableitungen haben \(e^x\), \(\ln|x|\), \(\sin x\), \(\cos x\) und \(\tan x\)?
id: l64ext
quelle: VorlesungFolienLAA-2026.pdf, Folie 99

\((e^x)' = e^x\); \((\ln|x|)' = \frac{1}{x}\); \((\sin x)' = \cos x\); \((\cos x)' = -\sin x\); \((\tan x)' = \frac{1}{\cos^2 x} = 1 + \tan^2 x\).

## Frage: Wie lauten die Ableitungen von \(x^s\) und \(\sqrt{x}\)?
id: 78vus5
quelle: VorlesungFolienLAA-2026.pdf, Folie 99

\((x^s)' = s \cdot x^{s-1}\) für \(s \in \mathbb{R}\) und \((\sqrt{x})' = \frac{1}{2\sqrt{x}}\). Dabei die jeweiligen Definitionsbereiche beachten.

## Frage: Was ist die 0-te Ableitung und warum schreibt man f⁽ᵏ⁾ mit Klammern?
id: 1k8v4ok
quelle: VorlesungFolienLAA-2026.pdf, Folie 105

\(f^{(0)} := f\), also die Funktion selbst. Die Klammern um \(k\) vermeiden die Verwechselung mit der \(k\)-ten Potenz: \(f^k\) zu schreiben ist grob verwirrend und falsch.

## Frage: Wie heißen erste und zweite Ableitung der Ortsfunktion x(t) in der Physik?
id: 4fpizg
quelle: VorlesungFolienLAA-2026.pdf, Folie 106

Erste Ableitung: Geschwindigkeit \(v(t) = \dot{x}(t)\). Zweite Ableitung: Beschleunigung \(a(t) = \dot{v}(t) = \ddot{x}(t)\).

## Frage: Welche notwendige Bedingung gilt für lokale Extrema differenzierbarer Funktionen?
id: 4he0nz
quelle: VorlesungFolienLAA-2026.pdf, Folien 108-109

Hat \(f\) in \(x_0\) ein lokales Minimum oder Maximum, dann gilt \(f'(x_0) = 0\). Für hinreichende Aussagen dient das Kriterium über die \(n\)-te Ableitung.

## Frage: Wie lautet das hinreichende Kriterium für Extrema über die n-te Ableitung?
id: 1oyb3mw
quelle: VorlesungFolienLAA-2026.pdf, Folie 109

Gilt \(f'(x_0) = \ldots = f^{(n-1)}(x_0) = 0\) und \(f^{(n)}(x_0) \ne 0\): Bei geradem \(n\) liegt ein lokales Maximum vor, falls \(f^{(n)}(x_0) < 0\), ein lokales Minimum, falls \(f^{(n)}(x_0) > 0\). Bei ungeradem \(n\) liegt weder Minimum noch Maximum vor.

## Frage: Wie ist das Taylor-Polynom \(n\)-ter Ordnung definiert?
id: 128h1sl
quelle: VorlesungFolienLAA-2026.pdf, Folien 113-114

\(T^{n,x_0}_f(x) = \sum_{i=0}^{n} \frac{f^{(i)}(x_0)}{i!}(x - x_0)^i\) mit Entwicklungspunkt \(x_0\). Es stellt eine Näherung der Funktion durch Polynome dar; das Restglied \(R^{n,x_0}_f\) gibt den Fehler dieser Näherung an.

## Frage: Wie lautet das Taylor-Polynom von \(e^x\) um den Entwicklungspunkt 0?
id: 26by7g
quelle: VorlesungFolienLAA-2026.pdf, Folie 115

\(T^{n,0}_f(x) = \sum_{i=0}^{n} \frac{x^i}{i!}\), denn beim Ableiten ändert sich die Exponentialfunktion nicht und damit ist \(f^{(i)}(0) = e^0 = 1\) für alle \(i\).

## Aufgabe: Aufgabe 18 (Variante)
id: aufgabe-18-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 18

Zeigen Sie: Ist \(f\) gerade und in 0 differenzierbar, so ist \(f'(0) = 0\).

## Aufgabe: Aufgabe 19 (Variante)
id: aufgabe-19-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 19

a) Differenzieren Sie die Funktion \(h(x) := x^2 \cdot \sin x \cdot e^{-x}\).<br>b) Leiten Sie \(h'\) ein weiteres Mal ab.

## Aufgabe: Aufgabe 20 (Variante)
id: aufgabe-20-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 20

Betrachten Sie \(f(x) := 2x^2 - 5x\). Bilden Sie die Ableitung dieser Funktion unter Verwendung des Differentialquotienten.

## Aufgabe: Aufgabe 21 (Variante)
id: aufgabe-21-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 21

Differenzieren Sie die Funktionen \[g_1(x) := \sqrt{2 + \sin x}, \quad g_2(x) := \ln(x^2 + 1), \quad g_3(x) := e^{\sin x}\] und geben Sie zuvor den jeweiligen Definitionsbereich an.

## Aufgabe: Aufgabe 22 (Variante)
id: aufgabe-22-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 22

Bestimmen Sie sämtliche lokalen Extrema von \[f: \,]0, \infty[ \to \mathbb{R}, \quad f(x) := \frac{\ln x}{x^2}\]

## Aufgabe: Aufgabe 23 (Variante)
id: aufgabe-23-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 23

Betrachten Sie \(f(x) = x^3 - 4x^2 + x - 5\). Bilden Sie \(T^{3}_{f,0}(x)\). Was fällt Ihnen am Ergebnis auf?

## Aufgabe: Aufgabe 24 (Variante)
id: aufgabe-24-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 24

Betrachten Sie \(f(x) = \cos x\). Berechnen Sie \(T^{1}_{f,0}(x)\), \(T^{2}_{f,0}(x)\), \(T^{3}_{f,0}(x)\) sowie \(T^{1}_{f,1}(x)\), \(T^{2}_{f,1}(x)\), \(T^{3}_{f,1}(x)\). Skizzieren Sie die Taylorpolynome zusammen mit der Kosinusfunktion auf \([-\pi, \pi]\). Was stellen Sie fest?
