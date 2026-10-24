---
id: trig-exp-log
title: Sin, Cos, Exp & Log
icon: 📐
---

## Karte: Sinus und Kosinus
quelle: VorlesungFolienLAA-2026.pdf, Folien 37, 39

Schwingungsprozesse tauchen besonders in der Physik und den Ingenieurwissenschaften sehr häufig auf — die sie beschreibenden Funktionen heißen Sinus und Kosinus (\(\sin\) und \(\cos\)). Sie gehen durch Verschieben um \(\frac{\pi}{2}\) ineinander über und sind \(2\pi\)-periodisch.

## Karte: Nullstellen von Sinus und Kosinus
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 39

\[\sin t = 0 \text{ für } t = k\pi,\; k \in \mathbb{Z}\] \[\cos t = 0 \text{ für } t = \tfrac{\pi}{2} + k\pi,\; k \in \mathbb{Z}\]

## Karte: Arcussinus und Arcuskosinus
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 40

Für die Umkehrfunktionen gilt: \[\arcsin := \sin^{-1} \quad\text{und}\quad \arccos := \cos^{-1}\]

## Karte: Tangens
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 41, 43

Aus Sinus und Kosinus wird eine neue Funktion konstruiert: \[\tan t := \frac{\sin t}{\cos t}\] Der Tangens hat die gleichen Nullstellen wie der Sinus. Das „gestückelte“ Bild des Tangens ergibt sich aus den bekannten Nullstellen des Kosinus.

## Karte: Exponentialfunktion
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 44

\(e^x\) mit einem reellen Exponenten \(x\), dabei ist \(e = 2{,}71828\ldots\) die Eulersche Zahl.

## Karte: Natürlicher Logarithmus
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 45

Die Umkehrfunktion der Exponentialfunktion \(f(x) := e^x\) ist der natürliche Logarithmus \(f^{-1}(x) = \ln x\). Es gilt also: \[e^{\ln x} = x \quad\text{und}\quad \ln e^x = x\]

## Karte: Allgemeine Potenz
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 46

Die allgemeine Potenz \(a^x\) mit \(a > 0\) wird über die Exponentialfunktion definiert: \[a^x := e^{x \ln a}\] Die Umkehrfunktion von \(a^x\) ist der Logarithmus zur Basis \(a\), notiert als \(\log_a x\).

## Karte: Potenzregeln
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 47

Seien \(a, b > 0\) und \(r, s \in \mathbb{R}\): \[a^0 = 1 \text{ (speziell auch } 0^0 = 1\text{)}, \quad a^{-s} = \frac{1}{a^s}\] \[a^{r+s} = a^r a^s, \quad a^{r-s} = \frac{a^r}{a^s}\] \[(a^r)^s = a^{rs}, \quad (ab)^r = a^r b^r\]

## Karte: Logarithmusregeln
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 48

Seien \(a, x, y > 0\): \[\log_a xy = \log_a x + \log_a y\] \[\log_a x^y = y \log_a x\] \[\log_a \frac{x}{y} = \log_a x - \log_a y\]

## Frage: Wo liegen die Nullstellen des Sinus?
id: 1lr4oqg
quelle: VorlesungFolienLAA-2026.pdf, Folie 39

Bei allen ganzzahligen Vielfachen von \(\pi\): \(\sin t = 0\) für \(t = k\pi\) mit \(k \in \mathbb{Z}\).

## Frage: Wo liegen die Nullstellen des Kosinus?
id: iphdui
quelle: VorlesungFolienLAA-2026.pdf, Folie 39

\(\cos t = 0\) für \(t = \frac{\pi}{2} + k\pi\) mit \(k \in \mathbb{Z}\). Sinus und Kosinus gehen durch Verschieben um \(\frac{\pi}{2}\) ineinander über.

## Frage: Was sind Arcussinus und Arcuskosinus?
id: b9ao8q
quelle: VorlesungFolienLAA-2026.pdf, Folie 40

Die Umkehrfunktionen von Sinus und Kosinus: \(\arcsin := \sin^{-1}\), \(\arccos := \cos^{-1}\).

## Frage: Wie ist der Tangens definiert, und wo liegen seine Nullstellen?
id: 1jh30oz
quelle: VorlesungFolienLAA-2026.pdf, Folien 41, 43

\(\tan t := \frac{\sin t}{\cos t}\). Der Tangens hat die gleichen Nullstellen wie der Sinus; sein „gestückeltes“ Bild ergibt sich aus den Nullstellen des Kosinus im Nenner.

## Frage: Was ist die Eulersche Zahl \(e\)?
id: 1fhx88u
quelle: VorlesungFolienLAA-2026.pdf, Folie 44

\(e = 2{,}71828\ldots\) — die Basis der Exponentialfunktion \(e^x\) mit reellem Exponenten \(x\).

## Frage: In welchem Zusammenhang stehen Exponentialfunktion und natürlicher Logarithmus?
id: 1lfhnjm
quelle: VorlesungFolienLAA-2026.pdf, Folie 45

Der natürliche Logarithmus \(\ln x\) ist die Umkehrfunktion der Exponentialfunktion \(e^x\). Es gilt daher \(e^{\ln x} = x\) und \(\ln e^x = x\).

## Frage: Wie wird die allgemeine Potenz \(a^x\) definiert?
id: hn6du4
quelle: VorlesungFolienLAA-2026.pdf, Folie 46

Über die Exponentialfunktion: \(a^x := e^{x \ln a}\) für \(a > 0\). Die Umkehrfunktion von \(a^x\) ist der Logarithmus zur Basis \(a\), notiert als \(\log_a x\).

## Frage: Wie lauten die Potenzregeln für \(a^{r+s}\) und \((a^r)^s\)?
id: xq9zzo
quelle: VorlesungFolienLAA-2026.pdf, Folie 47

\(a^{r+s} = a^r a^s\) und \((a^r)^s = a^{rs}\).

## Frage: Wie lautet die Logarithmusregel für ein Produkt, also \(\log_a xy\)?
id: 148xtnw
quelle: VorlesungFolienLAA-2026.pdf, Folie 48

\(\log_a xy = \log_a x + \log_a y\) — der Logarithmus eines Produkts ist die Summe der Logarithmen (für \(a, x, y > 0\)).

## Frage: Wie lautet die Logarithmusregel für eine Potenz, also \(\log_a x^y\)?
id: 1od9n90
quelle: VorlesungFolienLAA-2026.pdf, Folie 48

\(\log_a x^y = y \log_a x\) — der Exponent darf vor den Logarithmus gezogen werden. Für Quotienten gilt außerdem \(\log_a \frac{x}{y} = \log_a x - \log_a y\).

## Aufgabe: Aufgabe 7 (Variante)
id: aufgabe-7-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 7

Betrachten Sie den Einheitskreis. Verwenden Sie diesen, um mithilfe der Schuldefinition des Kosinus nachzuweisen, dass die Kosinuskurve die Ihnen bekannte Form hat.

## Aufgabe: Aufgabe 10 (Variante)
id: aufgabe-10-variante
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 10

a) Lösen Sie die folgende Exponentialgleichung: \(a^{x+2n} = \frac{a^{3x+n}}{a^{2n}}\)<br>b) Vereinfachen Sie den folgenden Term: \(\frac{(9p^2 - q^2)^{n}}{(3p - q)^{n}}\)<br>c) Lösen Sie die Klammern auf: \((m + 2n)^{-2}\)<br>d) Fassen Sie zusammen: \(\log_3 a + \log_3 b\)<br>e) Vereinfachen Sie: \(3 \cdot \log x - \frac{1}{3}\log x^6 + \log x^2\)
