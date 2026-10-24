---
id: integralrechnung
title: Integralrechnung
icon: 📊
---

## Karte: Grundidee der Integration
quelle: VorlesungFolienLAA-2026.pdf, Folien 116-117

Die Fläche zwischen einer Funktion und der x-Achse wird von oben und unten durch Rechtecke approximiert. Ist der Graph eine Gerade, lässt sich die Fläche einfach durch Dreiecke und Rechtecke zusammensetzen — bei komplizierteren Funktionen ist das nicht so einfach.

## Karte: Zerlegung des Intervalls
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 118-119

Das Intervall \([a, b]\) wird in \(n\) gleich große Teile mit Randpunkten \(a =: x_0 < x_1 < \ldots < x_n := b\) unterteilt. Die Grundseiten der Rechtecke sind jeweils \(\Delta x := \frac{b-a}{n}\), die Randpunkte \(x_k = a + k\Delta x\) \((k = 0, \ldots, n)\) und die Flächen der \(n\) Rechtecke \(F_k = f(x_{k-1})\Delta x\). Die gesamte Rechtecksfläche ist \[F(n) = \sum_{k=1}^{n} F_k\]

## Karte: Das bestimmte Integral
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 120

Für stetige (oder monotone) Funktionen \(f: [a, b] \to \mathbb{R}\) existiert der Grenzwert von \(F(n)\) und \[\int_a^b f(x)\,dx := \lim_{n\to\infty} F(n)\] ist das Integral von \(f\) über \([a, b]\).

## Karte: Rechenregeln für Integrale
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 121

\[\int_a^a f(x)\,dx = 0, \qquad \int_b^a f(x)\,dx := -\int_a^b f(x)\,dx\] \[\int_a^b f(x)\,dx + \int_b^c f(x)\,dx = \int_a^c f(x)\,dx\] Linearität: \[\int_a^b (f(x) + g(x))\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx, \quad \int_a^b \lambda f(x)\,dx = \lambda \int_a^b f(x)\,dx\] Abschätzungen: \[\int_a^b f(x)\,dx \le \int_a^b |f(x)|\,dx, \qquad \int_a^b f(x)\,dx \le \int_a^b g(x)\,dx \text{ falls } f(x) \le g(x) \text{ für alle } x \in \,]a,b[\]

## Karte: Stammfunktion
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 122

Sei \(f: [a, b] \to \mathbb{R}\). Eine differenzierbare Funktion \(F: [a, b] \to \mathbb{R}\) heißt Stammfunktion von \(f\), wenn gilt: \(F' = f\). Ist \(F\) eine Stammfunktion von \(f\), dann auch \(F + c\) für eine beliebige Konstante \(c \in \mathbb{R}\), denn \((F + c)' = F' + 0 = F'\).

## Karte: Unbestimmtes Integral
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 123

Um sich nicht auf eine bestimmte Stammfunktion einigen zu müssen, schreibt man \[\int f(x)\,dx = F(x) + c\] ohne Grenzen am Integralsymbol; \(\int f(x)\,dx\) heißt unbestimmtes Integral von \(f\). Anders ausgedrückt: Das unbestimmte Integral bezeichnet die Gesamtheit aller Stammfunktionen.

## Karte: Die Bedeutung der Integrationskonstanten
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folien 124-126

Die Konstante \(c\) wird oft gleich Null gesetzt — ohne Schaden aber nur, wenn lediglich Interesse an einer möglichen Stammfunktion besteht. Beispiel 2. Newton'sches Gesetz mit \(\ddot{x}(t) = a\): Stammfunktionen liefern \(\dot{x}(t) = at + v_0\) und \(x(t) = \frac{a}{2}t^2 + v_0 t + x_0\). Werden die Konstanten vernachlässigt, verschwinden plötzlich Anfangsort \(x_0\) und Anfangsgeschwindigkeit \(v_0\)!

## Karte: Hauptsatz der Differential- und Integralrechnung
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folien 127-128

Sei \(f: [a, b] \to \mathbb{R}\) eine stetige Funktion, dann gibt es eine Stammfunktion \(F\) zu \(f\) und \[\int_a^b f(x)\,dx = F(b) - F(a)\] Der Hauptsatz verbindet also bestimmtes und unbestimmtes Integral und liefert die Berechnung des bestimmten Integrals. Übliche Kurzschreibweisen: \(F(x)\big|_a^b\) bzw. \([F(x)]_a^b\).

## Karte: Beispiel: Fläche unter x² auf [−1, 1]
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 129-130

\[\int_{-1}^{1} x^2\,dx = \left[\frac{x^3}{3} + c\right]_{-1}^{1} = \left(\frac{1}{3} + c\right) - \left(\frac{-1}{3} + c\right) = \frac{2}{3}\] Die Konstante der Stammfunktion spielt bei der Berechnung keine Rolle — das bestimmte Integral ist unabhängig von der Wahl der Stammfunktion.

## Karte: Partielle Integration
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folien 131-132

Seien \(f, g\) auf \([a, b]\) stetig differenzierbar. Aus der Produktregel \((f \cdot g)' = f'g + fg'\) und dem Hauptsatz folgt: \[\int_a^b f'(x) g(x)\,dx = f(x)g(x)\Big|_a^b - \int_a^b f(x) g'(x)\,dx\] Oft auch in der Form \[\int_a^b f(x) g(x)\,dx = F(x)g(x)\Big|_a^b - \int_a^b F(x) g'(x)\,dx\]

## Karte: Beispiel zur partiellen Integration
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folie 133

Bei der Integration von \(x \cdot e^x\) wählt man \(f(x) := x\) und \(g'(x) := e^x\): \[\int_a^b x e^x\,dx = x e^x\Big|_a^b - \int_a^b 1 \cdot e^x\,dx = (x - 1)e^x\Big|_a^b\]

## Frage: Was ist die Grundidee bei der Berechnung von bestimmten Integralen?
id: 1n751be
quelle: VorlesungFolienLAA-2026.pdf, Folien 116-120

Die Fläche zwischen Funktion und x-Achse wird von oben und unten durch Rechtecke approximiert. Verkleinert man die Grundseiten (\(n \to \infty\)), erhält man im Grenzwert das Integral: \(\int_a^b f(x)\,dx = \lim_{n\to\infty} F(n)\).

## Frage: Wie ist das bestimmte Integral \(\int_a^b f(x)\,dx\) definiert?
id: ekwr9y
quelle: VorlesungFolienLAA-2026.pdf, Folie 120

Als Grenzwert der Rechteckssummen: \(\int_a^b f(x)\,dx := \lim_{n\to\infty} F(n)\). Für stetige (oder monotone) Funktionen \(f: [a, b] \to \mathbb{R}\) existiert dieser Grenzwert.

## Frage: Was ergeben \(\int_a^a f(x)\,dx\) und \(\int_b^a f(x)\,dx\)?
id: 1fhlfpd
quelle: VorlesungFolienLAA-2026.pdf, Folie 121

\(\int_a^a f(x)\,dx = 0\), und beim Vertauschen der Grenzen dreht sich das Vorzeichen um: \(\int_b^a f(x)\,dx := -\int_a^b f(x)\,dx\).

## Frage: Was ist eine Stammfunktion?
id: yd73cq
quelle: VorlesungFolienLAA-2026.pdf, Folie 122

Eine differenzierbare Funktion \(F: [a, b] \to \mathbb{R}\) mit \(F' = f\). Mit \(F\) ist auch \(F + c\) für jede Konstante \(c \in \mathbb{R}\) eine Stammfunktion, denn \((F + c)' = F' + 0 = F'\).

## Frage: Was bezeichnet das unbestimmte Integral?
id: 54sw8x
quelle: VorlesungFolienLAA-2026.pdf, Folie 123

Die Gesamtheit aller Stammfunktionen: \(\int f(x)\,dx = F(x) + c\), geschrieben ohne Grenzen am Integralsymbol.

## Frage: Warum darf die Integrationskonstante nicht immer vernachlässigt werden?
id: xlncab
quelle: VorlesungFolienLAA-2026.pdf, Folien 124-126

Nur wenn lediglich eine mögliche Stammfunktion interessiert, kann \(c = 0\) gesetzt werden. Beim Newton-Beispiel \(\ddot{x}(t) = a\) sind die Konstanten die Anfangsgeschwindigkeit \(v_0\) und der Anfangsort \(x_0\) — vernachlässigt man sie, verschwinden diese Informationen.

## Frage: Was besagt der Hauptsatz der Differential- und Integralrechnung?
id: v78794
quelle: VorlesungFolienLAA-2026.pdf, Folien 127-128

Zu jeder stetigen Funktion \(f: [a, b] \to \mathbb{R}\) gibt es eine Stammfunktion \(F\), und es gilt \(\int_a^b f(x)\,dx = F(b) - F(a)\). Der Hauptsatz verbindet damit bestimmtes und unbestimmtes Integral.

## Frage: Warum ist das bestimmte Integral unabhängig von der Wahl der Stammfunktion?
id: 121zcbo
quelle: VorlesungFolienLAA-2026.pdf, Folie 130

Beim Auswerten \(F(b) - F(a)\) hebt sich die Konstante weg, wie das Folienbeispiel \(\int_{-1}^1 x^2 dx = (\frac{1}{3} + c) - (-\frac{1}{3} + c) = \frac{2}{3}\) zeigt.

## Frage: Wie lautet die Formel der partiellen Integration?
id: 1afnhjo
quelle: VorlesungFolienLAA-2026.pdf, Folien 131-132

\(\int_a^b f'(x)g(x)\,dx = f(x)g(x)\big|_a^b - \int_a^b f(x)g'(x)\,dx\) für auf \([a, b]\) stetig differenzierbare \(f, g\). Sie folgt aus der Produktregel zusammen mit dem Hauptsatz.

## Frage: Wie berechnet man \(\int_a^b x e^x\,dx\) mit partieller Integration?
id: imc8w8
quelle: VorlesungFolienLAA-2026.pdf, Folie 133

Man wählt \(f(x) := x\) und \(g'(x) := e^x\): \(\int_a^b x e^x\,dx = x e^x\big|_a^b - \int_a^b 1 \cdot e^x\,dx = (x - 1)e^x\big|_a^b\).

## Aufgabe: Aufgabe 25 (Variante)
id: aufgabe-25-variante
notiz: Die Theoriefragen sind auch als Karteikarten dieses Themas mit Folienbeleg enthalten.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 25

a) Erklären Sie an einer eigenen Skizze, wie man den Flächeninhalt unter einem Funktionsgraphen durch Rechtecke annähert.<br>b) Welche Funktionen sind laut Vorlesung integrierbar? Gehören differenzierbare Funktionen dazu?<br>c) Wie berechnet man mit dem Hauptsatz ein bestimmtes Integral aus einer Stammfunktion?

## Aufgabe: Aufgabe 26 (Variante)
id: aufgabe-26-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 26

Sei \(F\) eine Stammfunktion von \(f\). Zeigen Sie durch eine allgemeine Rechnung, dass \(\int_a^b f(x)\,dx\) mit \(F + C\) für jede Konstante \(C\) denselben Wert ergibt, und erklären Sie, was das für die Flächenberechnung bedeutet.

## Aufgabe: Aufgabe 27 (Variante)
id: aufgabe-27-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 27

Berechnen Sie folgende Stammfunktionen: \[\int \frac{1}{x^4}\,dx, \quad \int \sin x \cos^2 x\,dx, \quad \int x \cos x\,dx, \quad \int \sin^2 x\,dx\]
