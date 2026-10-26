---
id: blockschaltbild
title: Ablaufplan und Blockschaltbild
icon: 🧱
---

## Karte: Verarbeitung und Folge
tag: def
quelle: DSV-final.pdf, Folie 259

<strong>Verarbeitung:</strong> Die Darstellung des Programmkonstrukts besteht nur aus einem Block, der genau einmal ausgeführt wird (V: Verarbeitung, Beschreibung der Aktion; ein Pfeil gibt die Bearbeitungsrichtung an).

<strong>Folge:</strong> Die Darstellung des Programmkonstrukts Folge oder Sequenz enthält zwei oder mehrere Verarbeitungsteile, die genau je einmal ausgeführt werden, wenn das Element abgearbeitet wird.

## Karte: Auswahl
tag: wichtig
quelle: DSV-final.pdf, Folien 260-261

Mit dem Programmkonstrukt Auswahl werden alternative Verarbeitungen beim logischen Ablauf des Programms möglich. Drei Formen:
- <strong>Bedingte Verarbeitung:</strong> ein Verarbeitungsteil und ein Steuerungsteil mit einer Bedingung; die Bedingung bestimmt, ob der Verarbeitungsteil ausgeführt wird (B: Bedingung, JA: erfüllt, NEIN: nicht erfüllt).
- <strong>Einfache Alternative:</strong> zwei Verarbeitungsteile und ein Steuerungsteil mit einer Bedingung; der Steuerungsteil gibt an, welcher der beiden Verarbeitungsteile ausgeführt wird.
- <strong>Mehrfache Alternative:</strong> mindestens drei Verarbeitungsteile und ein Steuerungsteil mit der gleichen Anzahl einander ausschließender Bedingungen; der Steuerungsteil gibt an, welcher der Verarbeitungsteile ausgeführt wird (G: gemeinsamer Bedingungsteil).

## Karte: Wiederholung
tag: wichtig
quelle: DSV-final.pdf, Folien 262-263

Mit dem Programmkonstrukt Wiederholung, auch Schleife oder Iteration genannt, wird ein Verarbeitungsteil so lange wiederholt, wie es der Steuerungsteil vorgibt. Die Bedingungsprüfung kann vor oder nach dem Verarbeitungsteil stehen.
- <strong>Ohne Bedingungsprüfung:</strong> nur ein Verarbeitungsteil, der endlos wiederholt wird.
- <strong>Mit vorausgehender Bedingungsprüfung:</strong> Die Bedingung bestimmt, ob bzw. wie häufig der Verarbeitungsteil ausgeführt wird; möglich ist auch, dass er überhaupt nicht ausgeführt wird.
- <strong>Mit nachfolgender Bedingungsprüfung:</strong> Die Bedingung bestimmt, ob bzw. wie häufig der Verarbeitungsteil nach der ersten Ausführung wiederholt wird.

## Karte: Sinnbilder für Programmablaufplan und Struktogramm
quelle: DSV-final.pdf, Folie 264

Die Tabelle stellt für jede Ablaufstruktur (Verarbeitung, Folge, bedingte Verarbeitung, einfache Alternative, mehrfache Alternative, Wiederholung ohne, mit vorausgehender und mit nachfolgender Bedingungsprüfung) das Sinnbild im Struktogramm und im Programmablaufplan gegenüber. Im Struktogramm steht die Ausführungsbedingung einer Wiederholung mit vorausgehender Prüfung über dem Verarbeitungsteil, bei nachfolgender Prüfung darunter.

## Karte: Signalflussbilder
tag: wichtig
quelle: DSV-final.pdf, Folie 265

In der Signalverarbeitung werden Blockschaltbilder auch als Signalflussbilder genutzt. Dafür werden mathematische Operatoren einbezogen:
- Kreis mit +: Addition; mit einem negativen Eingang: Subtraktion
- Dreieck mit m: Multiplikation mit Faktor „m“
- Block \(z^{-1}\): Abtastwert wird um 1 verzögert ausgegeben
- \(x_1[k]\): Abtastwert k des digitalen Eingangssignals X1; \(y_1[k]\): Abtastwert k des digitalen Ausgabesignals Y1

## Frage: Welche drei Formen des Programmkonstrukts Auswahl gibt es?
id: auswahl-formen
quelle: DSV-final.pdf, Folien 260-261

Bedingte Verarbeitung (ein Verarbeitungsteil), einfache Alternative (zwei Verarbeitungsteile) und mehrfache Alternative (mindestens drei Verarbeitungsteile mit einander ausschließenden Bedingungen).

## Frage: Wie unterscheiden sich Wiederholungen mit vorausgehender und mit nachfolgender Bedingungsprüfung?
id: wiederholung-pruefung
quelle: DSV-final.pdf, Folien 262-263

Vorausgehend: Die Bedingung bestimmt, ob bzw. wie häufig der Verarbeitungsteil ausgeführt wird; er wird eventuell gar nicht ausgeführt. Nachfolgend: Die Bedingung bestimmt, ob bzw. wie häufig er nach der ersten Ausführung wiederholt wird.

## Frage: Was bedeutet eine Wiederholung ohne Bedingungsprüfung?
id: wiederholung-ohne
quelle: DSV-final.pdf, Folie 262

Das Konstrukt enthält nur einen Verarbeitungsteil, der endlos wiederholt wird.

## Frage: Welche Operatoren nutzen Signalflussbilder?
id: signalfluss-operatoren
quelle: DSV-final.pdf, Folie 265

Addition, Subtraktion, Multiplikation mit Faktor „m“ und den Block \(z^{-1}\): Er gibt den Abtastwert um 1 verzögert aus.
