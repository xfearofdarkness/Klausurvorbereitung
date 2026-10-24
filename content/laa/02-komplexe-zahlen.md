---
id: komplexe-zahlen
title: Komplexe Zahlen
icon: 🌀
---

## Karte: Komplexe Zahlen
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 24

Komplexe Zahlen sind Zahlen der Form \(a + b\mathrm{i}\) mit \(a, b \in \mathbb{R}\). Die Größe \(\mathrm{i}\) ist durch die Gleichung \(\mathrm{i}^2 = -1\) charakterisiert. \(a\) heißt Realteil und \(b\) Imaginärteil von \(z := a + b\mathrm{i}\); kurz: \(\operatorname{Re} z := a\) und \(\operatorname{Im} z := b\).

## Karte: Warum komplexe Zahlen?
quelle: VorlesungFolienLAA-2026.pdf, Folie 25

Das Quadrat einer reellen Zahl ist nie negativ. Um beispielsweise die Gleichung \(x^2 = -1\) zu lösen, braucht man eine Erweiterung der reellen Zahlen: die komplexen Zahlen \(\mathbb{C}\).

## Karte: Real- und Imaginärteil sind reell
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 26

Real- und Imaginärteil sind reelle Zahlen, was beim Imaginärteil gerne vergessen wird. Ist \(b = 0\), bleibt nur der Realteil übrig: \(a + 0\mathrm{i} = a \in \mathbb{R}\).

## Karte: Addition und Subtraktion
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 27

Wie bei reellen Zahlen, nur wird das Ergebnis wieder in der Form \(a + b\mathrm{i}\) geschrieben: \[(a + b\mathrm{i}) + (c + d\mathrm{i}) = (a + c) + (b + d)\mathrm{i}\] \[(a + b\mathrm{i}) - (c + d\mathrm{i}) = (a - c) + (b - d)\mathrm{i}\]

## Karte: Multiplikation
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 28

\[(a + b\mathrm{i})(c + d\mathrm{i}) = (ac - bd) + (ad + bc)\mathrm{i}\] Dies entspricht dem gewöhnlichen Ausmultiplizieren von Klammern mit reellen Zahlen, wobei lediglich \(\mathrm{i}^2 = -1\) eingesetzt wird.

## Karte: Division
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folie 29

\[\frac{a + b\mathrm{i}}{c + d\mathrm{i}} = \frac{(a + b\mathrm{i})(c - d\mathrm{i})}{(c + d\mathrm{i})(c - d\mathrm{i})} = \frac{ac + bd}{c^2 + d^2} + \frac{bc - ad}{c^2 + d^2}\mathrm{i}\]

## Karte: Komplexe Konjugation
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 30

Dreht man das Vorzeichen des Imaginärteils einer komplexen Zahl \(z\) um, erhält man die komplex konjugierte Zahl \(\bar{z}\): \[z = a + b\mathrm{i} \;\Rightarrow\; \bar{z} := a - b\mathrm{i}\]

## Karte: Gauß'sche Zahlenebene
quelle: VorlesungFolienLAA-2026.pdf, Folie 31

Komplexe Zahlen werden in der Gauß'schen Zahlenebene dargestellt: \(\operatorname{Re} z\) auf der einen Achse, \(\mathrm{i}\operatorname{Im} z\) auf der anderen. \(z = a + b\mathrm{i}\) liegt bei \((a, b)\), die konjugierte Zahl \(\bar{z} = a - b\mathrm{i}\) bei \((a, -b)\).

## Karte: Betrag einer komplexen Zahl
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folie 32

Der Betrag \(|z|\) ist der Abstand des Punktes vom Koordinatenursprung. Nach dem Satz von Pythagoras: \[|z| := \sqrt{a^2 + b^2}\] Für reelle Zahlen \(a\) gibt diese Gleichung ebenfalls den Betrag an: \(|a| = \sqrt{a^2}\).

## Karte: Polarkoordinaten
tag: def
quelle: VorlesungFolienLAA-2026.pdf, Folien 33-34

Alternative Beschreibung über den Abstand \(r\) vom Koordinatenursprung und den Winkel \(\varphi\) von der positiven reellen Achse aus. Mit \(a = r\cos\varphi\) und \(b = r\sin\varphi\) gilt: \[z = r(\cos\varphi + \mathrm{i}\sin\varphi)\]

## Karte: Eulerformel
tag: formel
quelle: VorlesungFolienLAA-2026.pdf, Folien 34-35

\[e^{\mathrm{i}\varphi} = \cos\varphi + \mathrm{i}\sin\varphi\] Damit ist eine kürzere Schreibweise möglich: \(z = r e^{\mathrm{i}\varphi}\). Jede Notation hat ihre Vor- und Nachteile: abhängig davon, was betrachtet wird, ist die eine oder andere hilfreich.

## Karte: Multiplikation in Polarform
tag: wichtig
quelle: VorlesungFolienLAA-2026.pdf, Folie 36

\[z_1 \cdot z_2 = r_1 e^{\mathrm{i}\varphi_1} \cdot r_2 e^{\mathrm{i}\varphi_2} = r_1 r_2\, e^{\mathrm{i}(\varphi_1 + \varphi_2)}\] Geometrische Bedeutung: Die Beträge multiplizieren sich und die Winkel addieren sich.

## Frage: Wodurch ist die imaginäre Einheit \(\mathrm{i}\) charakterisiert?
id: 2q9qh8
quelle: VorlesungFolienLAA-2026.pdf, Folie 24

Durch die Gleichung \(\mathrm{i}^2 = -1\). Komplexe Zahlen sind Zahlen der Form \(z = a + b\mathrm{i}\) mit \(a, b \in \mathbb{R}\).

## Frage: Was sind Real- und Imaginärteil von \(z = a + b\mathrm{i}\)?
id: 1kjq18h
quelle: VorlesungFolienLAA-2026.pdf, Folien 24, 26

\(\operatorname{Re} z = a\) und \(\operatorname{Im} z = b\). Beide sind reelle Zahlen, was beim Imaginärteil gerne vergessen wird.

## Frage: Gibt es einen Zusammenhang zwischen reellen und komplexen Zahlen?
id: w34r3v
quelle: VorlesungFolienLAA-2026.pdf, Folien 25-26

Die komplexen Zahlen sind eine Erweiterung der reellen Zahlen (nötig z. B. für \(x^2 = -1\)). Ist \(b = 0\), bleibt nur der Realteil übrig: \(a + 0\mathrm{i} = a \in \mathbb{R}\).

## Frage: Wie addiert und subtrahiert man komplexe Zahlen?
id: 5op241
quelle: VorlesungFolienLAA-2026.pdf, Folie 27

Wie bei reellen Zahlen, das Ergebnis wieder in der Form \(a + b\mathrm{i}\): \((a+b\mathrm{i}) \pm (c+d\mathrm{i}) = (a \pm c) + (b \pm d)\mathrm{i}\).

## Frage: Wie multipliziert man zwei komplexe Zahlen \((a+b\mathrm{i})\) und \((c+d\mathrm{i})\)?
id: 19p2rwe
quelle: VorlesungFolienLAA-2026.pdf, Folie 28

\((a+b\mathrm{i})(c+d\mathrm{i}) = (ac - bd) + (ad + bc)\mathrm{i}\). Das entspricht dem gewöhnlichen Ausmultiplizieren von Klammern mit reellen Zahlen, wobei lediglich \(\mathrm{i}^2 = -1\) eingesetzt wird.

## Frage: Wie dividiert man zwei komplexe Zahlen?
id: 2dgvx5
quelle: VorlesungFolienLAA-2026.pdf, Folie 29

Man erweitert mit der konjugierten Zahl des Nenners: \(\frac{a+b\mathrm{i}}{c+d\mathrm{i}} = \frac{(a+b\mathrm{i})(c-d\mathrm{i})}{(c+d\mathrm{i})(c-d\mathrm{i})} = \frac{ac+bd}{c^2+d^2} + \frac{bc-ad}{c^2+d^2}\mathrm{i}\).

## Frage: Was ist komplexe Konjugation anschaulich?
id: 7gzg48
quelle: VorlesungFolienLAA-2026.pdf, Folien 30-31

Das Umdrehen des Vorzeichens des Imaginärteils: aus \(z = a + b\mathrm{i}\) wird \(\bar{z} = a - b\mathrm{i}\). In der Gauß'schen Zahlenebene liegt \(\bar{z}\) bei \((a, -b)\), also gespiegelt an der reellen Achse.

## Frage: Wie ist der Betrag \(|z|\) einer komplexen Zahl definiert?
id: 1li5hjx
quelle: VorlesungFolienLAA-2026.pdf, Folie 32

Als Abstand des Punktes vom Koordinatenursprung in der Gauß'schen Zahlenebene. Nach dem Satz von Pythagoras gilt \(|z| = \sqrt{a^2 + b^2}\).

## Frage: Geben Sie die Polarkoordinatendarstellung komplexer Zahlen an.
id: n2t2vy
quelle: VorlesungFolienLAA-2026.pdf, Folien 33-34

\(z = r(\cos\varphi + \mathrm{i}\sin\varphi) = r e^{\mathrm{i}\varphi}\) mit Abstand \(r\) vom Ursprung und Winkel \(\varphi\) von der positiven reellen Achse; dabei ist \(a = r\cos\varphi\), \(b = r\sin\varphi\).

## Frage: Wie lautet die Eulerformel?
id: gf15m0
quelle: VorlesungFolienLAA-2026.pdf, Folie 34

\(e^{\mathrm{i}\varphi} = \cos\varphi + \mathrm{i}\sin\varphi\). Damit lässt sich eine komplexe Zahl in Polarkoordinaten kurz als \(z = r e^{\mathrm{i}\varphi}\) schreiben, mit dem Abstand \(r\) vom Ursprung und dem Winkel \(\varphi\) von der positiven reellen Achse aus.

## Frage: Warum gibt es so viele Darstellungen komplexer Zahlen?
id: zor6uo
quelle: VorlesungFolienLAA-2026.pdf, Folie 35

Jede Notation hat ihre Vor- und Nachteile. Abhängig davon, was gerade betrachtet wird, ist die eine oder die andere Notation hilfreich.

## Frage: Was passiert geometrisch bei der Multiplikation komplexer Zahlen in Polarform?
id: 14x29m1
quelle: VorlesungFolienLAA-2026.pdf, Folie 36

\(z_1 \cdot z_2 = r_1 e^{\mathrm{i}\varphi_1} \cdot r_2 e^{\mathrm{i}\varphi_2} = r_1 r_2\, e^{\mathrm{i}(\varphi_1 + \varphi_2)}\): Die Beträge multiplizieren sich und die Winkel addieren sich.

## Aufgabe: Aufgaben 6, 8 (Typ)
id: jo4n76
generator: komplex-produkt-quotient
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt und die Lösung wird berechnet. Aufgabentyp wie im Übungsblatt.
quelle: ÜbungsaufgabenLAA.pdf, Aufgaben 6 und 8
