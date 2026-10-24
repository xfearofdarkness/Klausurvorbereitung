---
id: einfuehrung
title: Einführung
icon: 🧭
---

## Karte: Computational Thinking
tag: def
quelle: 01_introduction.pdf, Folie 4

„Informatisches Denken“: Beschreibt Denkprozesse, bei denen die Problembeschreibung und Lösungsfindung so erfolgt bzw. beschrieben wird, dass die Lösung auch effektiv durch andere (Personen oder Computer) durchgeführt werden kann. Ist eine allgemeine Denkschule und unabhängig von Computern & Programmierung.

## Karte: Kernkonzepte des Computational Thinking
tag: wichtig
quelle: 01_introduction.pdf, Folie 6

Abstraktion, Dekomposition, Mustererkennung, Algorithmisierung.

## Karte: Dekomposition
tag: def
quelle: 01_introduction.pdf, Folie 7

Ziel: Zerlegung eines komplexen Problems in kleinere, überschaubare Teile. Verwandtes Prinzip: Teile und Herrsche (Divide & Conquer). Beispiele: Tagesablauf in Abschnitte unterteilen, Aufgabenstellung erfassen und aufteilen.

## Karte: Mustererkennung
tag: def
quelle: 01_introduction.pdf, Folie 8

Ziel: Identifikation von wiederkehrenden Gemeinsamkeiten und Unterschieden. Beispiel: Muster und Regelmäßigkeiten in Zahlenreihen erkennen (2, 4, 8, 16, … / 1, 4, 9, 16, … / 1, 1, 2, 3, 5, …).

## Karte: Abstraktion und Modellbildung
tag: def
quelle: 01_introduction.pdf, Folie 9

Ziel: Reduktion von Informationen auf die zur Lösung wesentlichen. Fokussieren auf wesentliche Details, um Komplexität zu reduzieren; z. T. Nutzung von Modellen und Diagrammen. Beispiel: Windkanaltests von Autos — wichtig ist die Karosserie, Motor etc. können weggelassen werden.

## Karte: Algorithmisierung
tag: def
quelle: 01_introduction.pdf, Folie 10

„Eine eindeutig festgelegte Abfolge von Schritten oder Regeln zur Lösung eines Problems.“ Endet nach endlich vielen Schritten. Deterministisch: bei gleicher Eingabe erhält man das gleiche Ergebnis. Große Bedeutung im alltäglichen Leben (Beispiel: Tür öffnen).

## Karte: Algorithmus
tag: def
quelle: 01_introduction.pdf, Folie 14

Ein Algorithmus ist eine Abfolge eindeutiger Anweisungen zur Lösung eines Problems, d. h. zur Erzeugung eines gewünschten Ergebnisses, für jede zulässige Eingabe, innerhalb einer endlichen Zeitspanne.

## Karte: Arten von Problemen
tag: wichtig
quelle: 01_introduction.pdf, Folie 15

<b>Berechnungsproblem:</b> berechne Ausgabedaten aus Eingabedaten. <b>Entscheidungsproblem:</b> gibt es eine Lösung mit bestimmtem Wert? (Ja/Nein-Antwort). <b>Optimierungsproblem:</b> bestimme den Wert der optimalen Lösung (beste unter vielen möglichen Lösungen) oder gib die optimale Lösung zurück (Suchproblem).

## Karte: Eigenschaften eines Algorithmus
tag: wichtig
quelle: 01_introduction.pdf, Folie 16

<b>Endlichkeit:</b> muss nach einer endlichen Anzahl von Schritten immer beendet sein. <b>Bestimmtheit:</b> jeder Schritt muss genau definiert sein; die auszuführenden Aktionen müssen für jeden Fall streng und eindeutig festgelegt sein. <b>Eingabe:</b> null oder mehr Eingaben aus einer festgelegten Menge von Objekten. <b>Ausgabe:</b> eine oder mehrere Ausgaben, die in einer festgelegten Beziehung zu den Eingaben stehen. <b>Wirksamkeit:</b> alle Operationen müssen so einfach sein, dass sie exakt und in endlicher Zeit durchgeführt werden können.

## Karte: Darstellungsformen eines Algorithmus
quelle: 01_introduction.pdf, Folie 17

<b>Natürliche Sprache:</b> meist umständlich und mehrdeutig. <b>Flussdiagramme:</b> vermeiden die meisten Mehrdeutigkeiten; ohne spezielle Werkzeuge schwer anzupassen; weitgehend standardisiert (Beispiel: Programmablaufplan, PAP). <b>Pseudo-Code:</b> vermeidet ebenfalls die meisten Mehrdeutigkeiten; ähnelt vage gängigen Elementen von Programmiersprachen; keine einheitliche Übereinkunft hinsichtlich der Syntax. <b>Programmiersprache:</b> erfordert i. d. R. Details auf niedriger Ebene, die für ein Verständnis auf hoher Ebene nicht notwendig sind.

## Karte: Pseudocode-Konstrukte
quelle: 01_introduction.pdf, Folien 18-20

<b>Methodendeklaration:</b> Algorithm name(param1, param2, …). <b>Methodenrückgabe:</b> return value. <b>Zuweisungsoperator:</b> count <- 0 (initialer Wert), count <- count + 1 (berechneter Wert). <b>Boolescher Ausdruck:</b> num = 1 definiert eine Bedingung (true/false). <b>Auswahl:</b> if bedingung then wahr-Aktion [else falsch-Aktion]. <b>Iteration:</b> while bedingung do Aktionen od; repeat Aktionen until Bedingung; for variable-increment-definition do Aktionen od.

## Karte: Algorithmisches Problem und Lösung
quelle: 01_introduction.pdf, Folien 23-24

Ein algorithmisches Problem besteht aus der Spezifikation der Eingabe und der Spezifikation der Ausgabe als Funktion der Eingabe. Es gibt unendlich viele mögliche Eingabeinstanzen, die die Spezifikation erfüllen. Ein Algorithmus beschreibt die Schritte, die an der Eingabeinstanz durchgeführt werden. Für dasselbe algorithmische Problem kann es viele korrekte Algorithmen geben.

## Karte: Modell zur Problemlösung
tag: wichtig
quelle: 01_introduction.pdf, Folien 25-26

Vier Phasen: <b>Analyse</b> (Problemdaten analysieren → Problemdefinition), <b>Suche</b> nach existierenden Lösungen, <b>Entwurf</b> der Lösung (Datenstrukturen und Algorithmen), <b>Implementierung</b> (Programm).

## Karte: Datenstruktur, Algorithmus, Programm
tag: def
quelle: 01_introduction.pdf, Folie 27

<b>Datenstruktur:</b> eine systematische Art und Weise, Daten zu organisieren und darauf zuzugreifen. <b>Algorithmus:</b> eine systematische Art und Weise, um die Lösung für ein Problem/eine Fragestellung zu finden. <b>Programm:</b> Implementierung eines Algorithmus in einer Programmiersprache.

## Karte: Entwurfsziele
tag: wichtig
quelle: 01_introduction.pdf, Folien 28-29

<b>Korrektheit:</b> für alle möglichen Eingaben funktionieren, auf die man in einer bestimmten Domäne (z. B. Wertebereich, Datentyp) stoßen könnte. <b>Effizienz:</b> schnell sein und nicht mehr Ressourcen des Computers beanspruchen, als unbedingt nötig ist.

## Karte: Implementierungsziele
tag: wichtig
quelle: 01_introduction.pdf, Folien 30-31

<b>Robustheit:</b> Eingaben verarbeiten können, die für den Anwendungsbereich nicht explizit definiert sind. <b>Anpassbarkeit:</b> sich im Laufe der Zeit an veränderte Umweltbedingungen anpassen können. <b>Wiederverwendbarkeit:</b> denselben Code in einer Komponente verschiedener Systeme verwenden können.

## Karte: Vorbedingung, Nachbedingung, Sonderfälle
tag: def
quelle: 01_introduction.pdf, Folie 36

<b>Vorbedingung:</b> Was erhält der Algorithmus als Eingabe? <b>Nachbedingung:</b> Was gibt der Algorithmus als Ausgabe aus? <b>Sonderfälle:</b> leere Menge, Zahl 0, Zeiger nil, …

## Karte: Effizienz: experimentelle Untersuchungen
quelle: 01_introduction.pdf, Folie 38

Untersuchung der Laufzeit durch Ausführung an verschiedenen Testdaten und Erfassung der benötigten Zeit bei jeder Ausführung; die Laufzeit steigt mit der Größe der Eingabedaten. <b>Einschränkungen:</b> Experimente nur mit begrenzter Anzahl von Testdaten möglich; Vergleich zweier Algorithmen schwierig, sofern die Experimente nicht auf derselben Hardware und Software durchgeführt wurden; der Algorithmus muss implementiert und ausgeführt werden, um seine Laufzeit zu untersuchen.

## Karte: Zeitkomplexität
tag: def
quelle: 01_introduction.pdf, Folie 39

Die Anzahl der Schritte, die ein Algorithmus benötigt, um ein Problem der Größe n zu lösen. Grundoperationen, die unabhängig von der Programmiersprache sind: eine arithmetische Operation (z. B. +, *), eine Zuweisung (z. B. x <- 0), eine Überprüfung (z. B. x = 0), ein Zugriff auf Index (z. B. x[i]).

## Karte: Beispiel: Effizienz des Mittelwert-Algorithmus
tag: beispiel
quelle: 01_introduction.pdf, Folie 40

Zählen der Grundoperationen im Algorithmus average(DATA): 4 Zuweisungen zu Beginn, n Bedingungsprüfungen der for-Schleife, pro Durchlauf 2 + 3 Operationen (Zuweisung, Summieren; Zuweisung, Summieren, Indexzugriff), dazu Bedingung, Zuweisung mit Division und Rückgabe: T(n) = 4 + n + n·(2+3) + 1 + 2 + 1 = 6n + 8 = O(n).

## Frage: Was beschreibt Computational Thinking?
id: 11fft4o
quelle: 01_introduction.pdf, Folie 4

Denkprozesse, bei denen die Problembeschreibung und Lösungsfindung so erfolgt bzw. beschrieben wird, dass die Lösung auch effektiv durch andere (Personen oder Computer) durchgeführt werden kann. Es ist eine allgemeine Denkschule, unabhängig von Computern und Programmierung.

## Frage: Nennen Sie die vier Kernkonzepte des Computational Thinking.
id: 13jm8mc
quelle: 01_introduction.pdf, Folie 6

Abstraktion, Dekomposition, Mustererkennung, Algorithmisierung.

## Frage: Was bedeutet Dekomposition?
id: mqp7b8
quelle: 01_introduction.pdf, Folie 7

Dekomposition bedeutet, ein komplexes Problem in kleinere, überschaubare Teile zu zerlegen; verwandt damit ist Teile und Herrsche (Divide & Conquer).

## Frage: Was ist ein Algorithmus?
id: g3fp38
quelle: 01_introduction.pdf, Folie 14

Ein Algorithmus ist eine Abfolge eindeutiger Anweisungen zur Lösung eines Problems: Er erzeugt ein gewünschtes Ergebnis für jede zulässige Eingabe innerhalb einer endlichen Zeitspanne.

## Frage: Welche Arten von Problemen unterscheiden die Folien?
id: w9fbul
quelle: 01_introduction.pdf, Folie 15

Berechnungsproblem (Ausgabedaten aus Eingabedaten berechnen), Entscheidungsproblem (gibt es eine Lösung mit bestimmtem Wert? Ja/Nein) und Optimierungsproblem (Wert der optimalen Lösung bestimmen bzw. die optimale Lösung zurückgeben — Suchproblem).

## Frage: Welche fünf Eigenschaften muss ein Algorithmus besitzen?
id: 9shoo5
quelle: 01_introduction.pdf, Folie 16

Endlichkeit (endet nach endlich vielen Schritten), Bestimmtheit (jeder Schritt genau definiert), Eingabe (null oder mehr Eingaben aus festgelegter Menge), Ausgabe (eine oder mehrere Ausgaben in festgelegter Beziehung zu den Eingaben), Wirksamkeit (alle Operationen exakt und in endlicher Zeit durchführbar).

## Frage: Auf welche Weisen kann ein Algorithmus dargestellt werden, und was sind die jeweiligen Nachteile?
id: 18p73ue
quelle: 01_introduction.pdf, Folie 17

Natürliche Sprache (umständlich, mehrdeutig), Flussdiagramme (kaum Mehrdeutigkeiten, aber ohne Werkzeuge schwer anzupassen), Pseudo-Code (kaum Mehrdeutigkeiten, aber keine einheitliche Syntax) und Programmiersprache (erfordert Details auf niedriger Ebene, die für das Verständnis nicht nötig sind).

## Frage: Aus welchen Phasen besteht das Modell zur Problemlösung?
id: 9fo8dj
quelle: 01_introduction.pdf, Folien 25-26

Analyse (Problemdefinition), Suche nach existierenden Lösungen, Entwurf (Datenstrukturen und Algorithmen), Implementierung (Programm).

## Frage: Was ist eine Datenstruktur?
id: 1ei3hfe
quelle: 01_introduction.pdf, Folie 27

Eine Datenstruktur ist eine systematische Art und Weise, Daten zu organisieren und darauf zuzugreifen.

## Frage: Welche Ziele gelten in der Entwurfsphase, welche in der Implementierung?
id: bmcqyk
quelle: 01_introduction.pdf, Folien 28-31

Entwurfsziele: Korrektheit und Effizienz. Implementierungsziele: Robustheit, Anpassungsfähigkeit und Wiederverwendbarkeit.

## Frage: Welche Einschränkungen haben experimentelle Untersuchungen der Laufzeit?
id: 1nhihvk
quelle: 01_introduction.pdf, Folie 38

Nur eine begrenzte Anzahl von Testdaten möglich; der Vergleich zweier Algorithmen ist schwierig, wenn die Experimente nicht auf derselben Hardware und Software liefen; der Algorithmus muss implementiert und ausgeführt werden.

## Frage: Was versteht man unter der Zeitkomplexität eines Algorithmus?
id: res99z
quelle: 01_introduction.pdf, Folie 39

Die Anzahl der Schritte, die ein Algorithmus benötigt, um ein Problem der Größe n zu lösen — gezählt in Grundoperationen, die unabhängig von der Programmiersprache sind (arithmetische Operation, Zuweisung, Überprüfung, Indexzugriff).
