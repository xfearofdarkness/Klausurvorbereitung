---
id: lineare-regression
title: Lineare Regression
icon: 📈
---

## Karte: Regression
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 272-275 und 301

Die Regression gehört in das mathematische Teilgebiet der Statistik und ist <em>das</em> Mittel im Bereich des maschinellen Lernens und der KI. Die Statistik befasst sich mit Sammlung, Analyse, Interpretation und Präsentation von Daten. Grundidee: Durch eine Punktwolke wird eine Gerade gelegt; KI im Sinne einer intelligenten Vorhersage.

## Karte: Lineare Regression
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 302-305

Die lineare Regression ist ein Ansatz zur Modellierung des Zusammenhangs zwischen einer <em>abhängigen Variable</em> \(y\) und einer <em>unabhängigen Variable</em> \(x\). Die Daten werden durch eine lineare Vorhersagefunktion modelliert. Hauptanwendung: Vorhersagen. Man passt ein Vorhersagemodell an gegebene \(x\)- und \(y\)-Werte an und kann damit zu einem weiteren Wert \(\tilde{x}\) einen zugehörigen Wert \(\tilde{y}\) vorhersagen.

## Karte: Ziel und Regressionsgerade
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 306-307

Gegeben ist eine Menge von \(n\) Datenpunkten \((x_i, y_i)\). Ziel: Finde reelle Zahlen \(a\) und \(b\) für \(y(x) = bx + a\) (lineare Vorhersagefunktion) mit der bestmöglichen Anpassung an die Datenpunkte, „bestmöglich“ im Sinne der Methode der kleinsten Quadrate. \(b\) ist die Steigung, \(a\) der Schnittpunkt mit der \(y\)-Achse.

## Karte: Methode der kleinsten Quadrate
tag: formel
quelle: DiskreteMathematikVLHO.pdf, Folien 308-312

Die Abweichungen zwischen Gerade und Datenpunkten sind \(r_i = bx_i + a - y_i\). Gesucht sind \(a\) und \(b\) mit \[\min_{a, b \in \mathbb{R}} \left(\sum_{i=1}^{n} r_i^2\right).\] Das führt zu \[b = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n}(x_i - \bar{x})^2}, \qquad a = \bar{y} - b\bar{x}\] mit den Mittelwerten \(\bar{x}\), \(\bar{y}\). Zum Nachdenken: Warum ist die Methode der kleinsten Quadrate der Methode der kleinsten Abstände \(\min \sum r_i\) überlegen?

## Karte: Beispiel: Einkommen und Alter
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 314-318

Einkommen von sieben Arbeitern einer Firma in Bezug auf ihr Alter: <table><thead><tr><th>Person</th><th>Einkommen (Euro)</th><th>Alter (Jahre)</th></tr></thead><tbody><tr><td>1</td><td>2750</td><td>20</td></tr><tr><td>2</td><td>3300</td><td>35</td></tr><tr><td>3</td><td>4300</td><td>45</td></tr><tr><td>4</td><td>2750</td><td>25</td></tr><tr><td>5</td><td>3250</td><td>50</td></tr><tr><td>6</td><td>2850</td><td>30</td></tr><tr><td>7</td><td>3200</td><td>40</td></tr></tbody></table> Alter ist die unabhängige Variable \(x\) mit \(\bar{x} = 35\), Einkommen die abhängige \(y\) mit \(\bar{y} = 3200\); es ergibt sich \(b \approx 35{,}4\) und \(a \approx 1962{,}5\). Vorhersage für 42 Jahre: \(y(42) \approx 35{,}4 \cdot 42 + 1962{,}5 = 3449{,}3\); für 99 Jahre: \(y(99) \approx 5467{,}1\). Achtung: Das Modell macht nur Vorhersagen im Beobachtungsbereich, also etwa für 20 bis 50 Jahre (und im sinnvollen Rahmen darüber hinaus).

## Karte: Warnungen zur Regression
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 319-322

Weiteres Beispiel: Anstieg des systolischen Blutdrucks pro Jahr in Abhängigkeit von der Salzausscheidung. Warnung: Bei derselben Studie (diastolischer Blutdruck) ergibt sich je nach Auswahl der Punkte eine steigende oder eine fallende Gerade. Vorsicht bei Scheinzusammenhängen: Eine Grafik „zeigt“, dass die abnehmende Zahl der Piraten die globale Erwärmung verursacht. Vier sehr unterschiedliche Datensätze können dieselbe Regressionsgerade liefern.

## Frage: Was modelliert die lineare Regression?
id: regression
quelle: DiskreteMathematikVLHO.pdf, Folie 302

Den Zusammenhang zwischen einer abhängigen Variable \(y\) und einer unabhängigen Variable \(x\) durch eine lineare Vorhersagefunktion.

## Frage: Was bedeuten \(a\) und \(b\) in \(y(x) = bx + a\)?
id: regressionsgerade
quelle: DiskreteMathematikVLHO.pdf, Folie 307

\(b\) ist die Steigung, \(a\) der Schnittpunkt mit der \(y\)-Achse.

## Frage: Was minimiert die Methode der kleinsten Quadrate?
id: kleinste-quadrate
quelle: DiskreteMathematikVLHO.pdf, Folie 308

Die Summe der quadrierten Abweichungen \(\sum r_i^2\) mit \(r_i = bx_i + a - y_i\).

## Frage: Wie berechnet man \(b\) und \(a\) der Regressionsgeraden?
id: regression-formeln
quelle: DiskreteMathematikVLHO.pdf, Folie 311

\(b = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}\) und \(a = \bar{y} - b\bar{x}\).

## Frage: Wofür darf man das Regressionsmodell aus dem Einkommensbeispiel verwenden?
id: regression-beobachtungsbereich
quelle: DiskreteMathematikVLHO.pdf, Folie 318

Nur für Vorhersagen im Beobachtungsbereich (etwa 20 bis 50 Jahre) und in einem sinnvollen Rahmen darüber hinaus; \(y(99) \approx 5467{,}1\) ist nicht sinnvoll.

## Aufgabe: Lineare Regression
id: rm-lineare-regression
generator: lineare-regression
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 41; DiskreteMathematikVLHO.pdf, Folien 306-311

## Aufgabe: Aufgabe 41 (Variante)
id: aufgabe-41-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 41

Berechnen Sie \(a\) und \(b\) aus der Tabelle der Vorlesung (Einkommen und Alter, Folie 314) a) für die Personen 4 und 5 und b) für die Personen 5, 6 und 7. Interpretieren Sie die Ergebnisse und vergleichen Sie sie mit \(b \approx 35{,}4\), \(a \approx 1962{,}5\) aus der Vorlesung.
