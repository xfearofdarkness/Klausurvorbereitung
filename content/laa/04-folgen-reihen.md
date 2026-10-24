---
id: folgen-reihen
title: Folgen & Reihen
icon: ♾️
---

## Karte: Wozu Folgen?
quelle: VorlesungFolienLAA-2026.pdf, Folien 49-50

Folgen werden wesentlich verwendet, um sich um die Begriffe Konvergenz und Divergenz zu kümmern und Konsequenzen daraus abzuleiten. Später sind Folgen Hilfsmittel, um sich an bestimmte Werte „anzuschleichen“ — sie sind die Grundlage für Begriffe wie Stetigkeit und Differenzierbarkeit.

## Karte: Folge
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 51

Eine reelle bzw. komplexe Folge \((x_n)\) ist eine Abbildung von \(\mathbb{N}\) nach \(\mathbb{R}\) bzw. \(\mathbb{C}\). Jedem Index \(n \in \mathbb{N}\) wird dabei eine reelle bzw. komplexe Zahl \(x_n\) zugeordnet. Schreibweise \(\mathbb{K}\): gemeint ist \(\mathbb{R}\) oder \(\mathbb{C}\).

## Karte: Schreibweise von Folgen
quelle: VorlesungFolienLAA-2026.pdf, Folien 52-53

Statt der Funktionsschreibweise \(f(n) := 1 - \frac{1}{n}\) schreibt man \(x_n := 1 - \frac{1}{n}\). Das ergibt eine Auflistung: \(0, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \ldots\) Die Folge an sich wird in Klammern geschrieben \(\left(1 - \frac{1}{n}\right)\); ohne Klammern sind die einzelnen Folgenglieder \(x_n\) gemeint. Der Indexname (\(n\), \(k\), \(i\), …) ist egal.

## Karte: Konvergenz und Nullfolge
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 54

Eine Folge \((x_n)\) in \(\mathbb{K}\) heißt konvergent gegen einen Grenzwert \(a \in \mathbb{K}\), wenn es zu jedem \(\varepsilon > 0\) ein \(N \in \mathbb{N}\) gibt, sodass für alle Indizes \(n \ge N\) die Ungleichung \(|x_n - a| < \varepsilon\) gilt. Schreibweise: \(\lim_{n \to \infty} x_n = a\) oder \(x_n \to a\). Eine Folge mit Grenzwert 0 heißt Nullfolge.

## Karte: ε-Umgebung
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 55-57

Die Ungleichung \(|x_n - a| < \varepsilon\) lässt sich im Reellen umformulieren zu \(x_n \in \,]a - \varepsilon, a + \varepsilon[\), der so genannten \(\varepsilon\)-Umgebung des Punktes \(a\) (stets \(\varepsilon > 0\)). Eine Folge ist demnach konvergent gegen \(a\), wenn sich in jedem noch so kleinen Intervall um \(a\) fast alle (alle bis auf endlich viele) Folgenglieder befinden. Ist eine Folge konvergent, so ist ihr Grenzwert eindeutig.

## Karte: Standardbeispiel: 1/n ist Nullfolge
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 58-59

Es gilt \(\lim_{n \to \infty} \frac{1}{n} = 0\). Beweis: Zu beliebig kleinem \(\varepsilon > 0\) wählt man \(N \in \mathbb{N}\) größer als \(\frac{1}{\varepsilon}\). Dann gilt für alle \(n \ge N\): \[|x_n - 0| = \frac{1}{n} \le \frac{1}{N} < \varepsilon\] Das \(N\) lässt sich auch direkt berechnen: aus \(\frac{1}{n} < \varepsilon\) folgt \(n > \frac{1}{\varepsilon}\).

## Karte: Divergenz und Häufungspunkte
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 60-61

Nicht konvergente Folgen heißen divergent. Beispiel: \(x_n := n\) wächst immer weiter an, es kann keinen Grenzwert geben. Die Folge \(x_n := (-1)^n\) hat zwei so genannte Häufungspunkte: \(-1\) und \(+1\). Folgen wie \(x_n := n^2\), die betraglich über jede Grenze wachsen, notiert man als \(\lim_{n\to\infty} |x_n| = \infty\) bzw. \(|x_n| \to \infty\); bei reellen Folgen ggf. mit Vorzeichen: \(x_n := -n \to -\infty\).

## Karte: Rechenregeln für konvergente Folgen
tag: satz
quelle: VorlesungFolienLAA-2026.pdf, Folie 62

Seien \((x_n)\), \((y_n)\) konvergent mit \(\lim x_n = a\), \(\lim y_n = b\) und \(c \in \mathbb{R}\): \[\lim_{n\to\infty}(x_n + y_n) = a + b\] \[\lim_{n\to\infty}(x_n \cdot y_n) = ab, \qquad \lim_{n\to\infty} c \cdot x_n = ca\] \[\lim_{n\to\infty} \frac{x_n}{y_n} = \frac{a}{b}, \text{ falls } b \ne 0\]

## Karte: Grenzwerte berechnen durch Zerlegen und Kürzen
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 63-64

Die Folge \(\left(\frac{1}{1 + \frac{1}{n}}\right)\) ist aus der konstanten Folge \((1)\) und der Nullfolge \(\left(\frac{1}{n}\right)\) zusammengesetzt: Grenzwert \(\frac{1}{1+0} = 1\). Bei \(\left(\frac{n}{n+1}\right)\) ist Vorsicht geboten, denn \((n)\) ist nicht konvergent — hier hilft Kürzen: \(\frac{n}{n+1} = \frac{1}{1 + \frac{1}{n}}\).

## Karte: Wichtige Grenzwerte (zum Merken)
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 66

1. Für \(|b| < 1\) gilt \(b^n \to 0\)<br>2. \(\left(1 + \frac{a}{n}\right)^n \to e^a\)<br>3. Für positives \(a\) gilt \(a^{1/n} \to 1\) und \(n^{1/n} \to 1\)

## Karte: Partialsumme
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 70, 73

Für eine (reelle oder komplexe) Folge \((a_k)\) heißt \[S_n := \sum_{k=0}^{n} a_k\] die \(n\)-te Partialsumme. Sie ist einfach die Summe der ersten \(n\) Folgenglieder.

## Karte: Reihe
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 71-72

Die Folge der Partialsummen heißt Reihe, notiert als \(\sum_{k=0}^{\infty} a_k\). Falls die Folge der Partialsummen \((S_n)\) konvergiert, heißt die Reihe konvergent, und ihr Wert ist \[\sum_{k=0}^{\infty} a_k := \lim_{n\to\infty} \sum_{k=0}^{n} a_k\] Die Begriffe Konvergenz und Divergenz für Reihen werden so einfach von Folgen übernommen.

## Karte: Geometrische Summe und geometrische Reihe
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 74

Für die geometrische Summe gilt (\(x \ne 1\)): \[S_n(x) = \sum_{k=0}^{n} x^k = \frac{1 - x^{n+1}}{1 - x}\] Wegen \(x^{n+1} \to 0\) für \(|x| < 1\) ist die geometrische Reihe für \(x \in \,]-1, 1[\) definiert mit dem Ergebnis \[\sum_{k=0}^{\infty} x^k = \frac{1}{1 - x}\]

## Karte: Der Läufer im Stadion
tag: beispiel
quelle: VorlesungFolienLAA-2026.pdf, Folien 67, 75

Ein Läufer muss vom Start ins Ziel alle Teilabschnitte durchlaufen (200 m, 100 m, 50 m, …). Mit der geometrischen Reihe kommt er an: \[200 + 100 + \ldots = 200 \cdot \sum_{n=0}^{\infty} \left(\frac{1}{2}\right)^n = 200 \cdot \frac{1}{1 - \frac{1}{2}} = 400\]

## Frage: Was ist eine Folge? Nennen Sie Beispiele.
id: 7jex9q
quelle: VorlesungFolienLAA-2026.pdf, Folien 51-61

Eine Abbildung von \(\mathbb{N}\) nach \(\mathbb{R}\) bzw. \(\mathbb{C}\); jedem Index \(n\) wird eine Zahl \(x_n\) zugeordnet. Beispiele von den Folien: \(x_n := 1 - \frac{1}{n}\), \(x_n := \frac{1}{n}\), \(x_n := n\), \(x_n := (-1)^n\).

## Frage: Wann konvergiert eine Folge \((x_n)\) gegen einen Grenzwert \(a\)?
id: gou5rk
quelle: VorlesungFolienLAA-2026.pdf, Folie 54

Wenn es zu jedem \(\varepsilon > 0\) ein \(N \in \mathbb{N}\) gibt, sodass für alle Indizes \(n \ge N\) die Ungleichung \(|x_n - a| < \varepsilon\) gilt. Schreibweise: \(\lim_{n \to \infty} x_n = a\) oder \(x_n \to a\).

## Frage: Was ist eine Nullfolge?
id: mh0jco
quelle: VorlesungFolienLAA-2026.pdf, Folien 54, 58

Eine Folge mit dem Grenzwert 0. Standardbeispiel: \(x_n := \frac{1}{n}\), denn es gilt \(\lim_{n \to \infty} \frac{1}{n} = 0\).

## Frage: Was ist die \(\varepsilon\)-Umgebung eines Punktes \(a\)?
id: 1j5ktg2
quelle: VorlesungFolienLAA-2026.pdf, Folien 55-57

Das Intervall \(]a - \varepsilon, a + \varepsilon[\) um den Punkt \(a\) (stets \(\varepsilon > 0\)). Eine Folge konvergiert gegen \(a\), wenn sich in jeder noch so kleinen \(\varepsilon\)-Umgebung fast alle — also alle bis auf endlich viele — Folgenglieder befinden.

## Frage: Ist der Grenzwert einer konvergenten Folge eindeutig?
id: widv9l
quelle: VorlesungFolienLAA-2026.pdf, Folie 57

Ja — ist eine Folge konvergent, so ist ihr Grenzwert eindeutig.

## Frage: Nennen Sie Beispiele für konvergente und divergente Reihen bzw. Folgen von den Folien.
id: 1ec0lo0
quelle: VorlesungFolienLAA-2026.pdf, Folien 60-61, 74-75

Konvergent: die geometrische Reihe \(\sum x^k = \frac{1}{1-x}\) für \(|x| < 1\) (z. B. Läufer im Stadion: Wert 400). Divergent: die Folgen \(x_n := n\) und \(x_n := (-1)^n\) (zwei Häufungspunkte).

## Frage: Welche Häufungspunkte hat die Folge \(x_n := (-1)^n\)?
id: 1lurp9j
quelle: VorlesungFolienLAA-2026.pdf, Folien 60-61

Die Folge ist divergent und hat die zwei so genannten Häufungspunkte \(-1\) und \(+1\).

## Frage: Nennen Sie drei wichtige Rechenregeln für konvergente Folgen.
id: 11fjx8d
quelle: VorlesungFolienLAA-2026.pdf, Folie 62

Mit \(\lim x_n = a\), \(\lim y_n = b\): \(\lim(x_n + y_n) = a + b\); \(\lim(x_n y_n) = ab\); \(\lim \frac{x_n}{y_n} = \frac{a}{b}\) falls \(b \ne 0\) (außerdem \(\lim c\,x_n = ca\)).

## Frage: Wogegen konvergiert \(\left(1 + \frac{a}{n}\right)^n\) für \(n \to \infty\)?
id: 1mh10c
quelle: VorlesungFolienLAA-2026.pdf, Folie 66

Gegen \(e^a\) — einer der wichtigen Grenzwerte zum Merken.

## Frage: Wogegen konvergiert \(b^n\) für \(|b| < 1\)?
id: 1kq31gb
quelle: VorlesungFolienLAA-2026.pdf, Folie 66

Gegen 0. Weitere Merk-Grenzwerte: Für positives \(a\) gilt \(a^{1/n} \to 1\) und \(n^{1/n} \to 1\).

## Frage: Was ist die \(n\)-te Partialsumme einer Folge \((a_k)\)?
id: 68cslj
quelle: VorlesungFolienLAA-2026.pdf, Folie 70

\(S_n := \sum_{k=0}^{n} a_k\) — einfach die Summe der ersten \(n\) Folgenglieder.

## Frage: Was ist eine Reihe, und wann heißt sie konvergent?
id: 1pcjxcz
quelle: VorlesungFolienLAA-2026.pdf, Folien 71-72

Die Folge der Partialsummen, notiert als \(\sum_{k=0}^{\infty} a_k\). Konvergiert die Folge der Partialsummen \((S_n)\), heißt die Reihe konvergent, und ihr Wert ist \(\sum_{k=0}^{\infty} a_k = \lim_{n\to\infty} S_n\).

## Frage: Welchen Wert hat die geometrische Reihe \(\sum_{k=0}^{\infty} x^k\)?
id: 1wpefkn
quelle: VorlesungFolienLAA-2026.pdf, Folie 74

Für \(x \in \,]-1, 1[\) gilt \(\sum_{k=0}^{\infty} x^k = \frac{1}{1 - x}\), denn \(x^{n+1} \to 0\) für \(|x| < 1\).

## Frage: Welchen Wert hat die geometrische Summe \(\sum_{k=0}^{n} x^k\)?
id: 19vlc4x
quelle: VorlesungFolienLAA-2026.pdf, Folie 74

Für \(x \ne 1\) gilt \(S_n(x) = \sum_{k=0}^{n} x^k = \frac{1 - x^{n+1}}{1 - x}\).

## Aufgabe: Aufgabe 9
id: 7zqf5q
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 9

Bestimmen Sie für beliebige \(n \in \mathbb{N}\) den Wert der Summe \[\sum_{k=1}^{n} \ln\left(1 + \frac{1}{k}\right)\]

## Aufgabe: Aufgabe 11
id: 1ta53a9
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 11

Beschreiben Sie den Verlauf der komplexen Folge \(\left(\frac{1}{k} e^{\mathrm{i}k}\right)\). Gegen welchen Grenzwert konvergiert die Folge? Begründen Sie Ihre Wahl.

## Aufgabe: Aufgabe 12
id: 1p7napg
notiz: Die Theoriefragen sind auch im Modus „Fragen“ dieses Themas mit Folienbeleg enthalten.
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 12

Denken Sie über die folgenden Fragen nach, rekapitulieren Sie den zugehörigen Stoff und lernen Sie, die Lösungen in der Übung frei vorzutragen:<br>a) Was ist eine Folge? Nennen Sie Beispiele.<br>b) Wie ist die Konvergenz einer Folge definiert?<br>c) Was ist eine Nullfolge?<br>d) Was ist eine \(\varepsilon\)-Umgebung eines Punktes?<br>e) Welche Anzahl von Häufungspunkten hat eine konvergente Folge?<br>f) Nennen Sie drei wichtige Rechenregeln für konvergente Folgen.

## Aufgabe: Aufgabe 13
id: 19xjpg8
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 13

Berechnen Sie die folgenden Grenzwerte:<br>a) \(\lim_{n\to\infty} \left(\sqrt{n^2 + an + 1} - \sqrt{n^2 + 1}\right)\)<br>b) \(\lim_{n\to\infty} (-1)^n \cdot \frac{23}{n}\)<br>c) \(\lim_{n\to\infty} \left(1 - \frac{1}{n^2}\right)^n\)<br>d) \(\lim_{k\to\infty} \frac{(k+1)(2k-3)(k+2)}{k^3}\)

## Aufgabe: Aufgabe 14
id: 1xbid6p
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 14

Ein Marathonläufer muss 42,195 km laufen, um ins Ziel zu kommen. Dazu muss er zuerst 4,2195 km laufen, danach 0,42195 km usf. Können Sie mathematisch beweisen, dass der Marathonläufer das Ziel erreicht?

## Aufgabe: Aufgabe 15
id: woa607
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 15

Betrachten Sie die Reihe \(\sum_{n=1}^{\infty} \frac{1}{n^2}\). Bilden Sie den Betrag der Differenz zwischen der 7. und 6. Partialsumme und den Betrag der Differenz der 8. und 7. Partialsumme. Welcher der Beträge ist größer? Können Sie Ihre Antwort begründen?

## Aufgabe: Aufgabe 16
id: 128at77
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 16

Die Explosion einer Atombombe: Ein Neutron spaltet einen Plutoniumkern, wobei drei weitere Neutronen entstehen (1. Zerfallsstufe). Jedes der drei erzeugten Neutronen spaltet einen weiteren Kern und es entstehen insgesamt neun Neutronen (2. Zerfallsstufe). Dieses Spiel setzt sich fort, bis alle Plutoniumkerne zerfallen sind (Kettenreaktion). Wie lange dauert der vollständige Zerfall eines Plutoniumstücks mit \(N = 7{,}85 \cdot 10^{26}\) Kernen, wenn die Dauer einer Zerfallsstufe \(\tau\) beträgt?

## Aufgabe: Aufgabe 17
id: 1u3hbks
notiz: Umfasst den Stoff der Kapitel Funktionen bis Differenzierbarkeit (Aufgabenteile a–v im Übungsblatt).
quelle: ÜbungsaufgabenLAA.pdf, Aufgabe 17

Wiederholungsfragen zum frei Vortragen in der Übung — u. a.: Was ist die geometrische Summe (Wert für beliebiges \(x \in \mathbb{R}\), \(n \in \mathbb{N}\))? Imaginär- und Realteil einer komplexen Zahl? Grundrechenregeln für komplexe Zahlen? Polarkoordinatendarstellung? Was ist ein Polynom, wie funktioniert Polynomdivision? Zusammenhang Sinus/Kosinus/Tangens mit Nullstellen? Zusammenhang Logarithmus/Exponentialfunktion? Was ist eine Folge, \(\varepsilon\)-Umgebung, Zusammenhang Reihen/Folgen, Partialsumme, konvergente/divergente Reihen? Definition Stetigkeit und lokales Minimum? Was sind Sekante und Tangente (mit Skizzen)?
