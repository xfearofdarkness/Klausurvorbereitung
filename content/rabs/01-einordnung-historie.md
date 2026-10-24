---
id: einordnung-historie
title: Einordnung & Historie
icon: 🧭
---

## Karte: Ziel der Vorlesung
tag: wichtig
quelle: 01_rabs_intro-01.pdf, Folie 4

Der Rechner ist das zentrale Handwerkszeug des Informatikers. Die Vorlesung zielt darauf, Möglichkeiten und Grenzen der Hardware, das Verhalten komplexer Systeme, das Laufzeitverhalten von Programmen und den Blick unter die Haube besser zu verstehen.

## Karte: Sicht auf Computer
quelle: 01_rabs_intro-01.pdf, Folien 6-7

Ein Rechnersystem wird über Eingabe-/Ausgabegeräte, Betriebssystem, Anwendungen aus der Softwareentwicklung und Hardware betrachtet. Die Folien stellen dazu ausdrücklich die Frage, was ein Betriebssystem ist und welche Funktionen es hat.

## Karte: Eingebettete Systeme
quelle: 01_rabs_intro-01.pdf, Folie 8

Eingebettete Systeme sind in größere technische Komponenten eingebettet, häufig für einen bestimmten Zweck ausgelegt, interagieren in der Regel nicht über Tastatur oder Touchscreen und arbeiten hardwarenah.

## Karte: Rechnerarchitektur nach Amdahl, Brooks und Blaauw
tag: def
quelle: 01_rabs_intro-01.pdf, Folie 10

Rechnerarchitektur beschreibt Eigenschaften und Verhalten eines Computers aus Sicht des Programmierers. Dazu gehören Befehlssatz, Befehlsformate, OP-Codes, Adressierungsarten sowie Register und Speicher, die ein Maschinensprachenprogrammierer direkt verändern kann.

## Karte: Warum Rechnerarchitektur wichtig ist
quelle: 01_rabs_intro-01.pdf, Folie 11

Grundverständnis der Rechnerarchitektur wird für Geräteauswahl, Fehlersuche, Leistungsoptimierung, Benchmarkentwürfe, Zuverlässigkeitsanalysen, Systementwurf, Compiler-Codeoptimierung und Sicherheitsfragen benötigt.

## Karte: Historie: vom Abakus zum Webstuhl
quelle: 01_rabs_intro-01.pdf, Folien 13-14

Ca. 1100 v. Chr. Abakus, die älteste Rechenhilfe der Welt, noch heute im asiatischen Raum in Gebrauch. 1629 Rechenschieber (William Oughtred). 1642 Pascaline (Blaise Pascal), eine mechanische Rechenmaschine, nur Addition. 1804 automatischer Webstuhl (Joseph Jacquard): Lochkarten bestimmen das Muster, der erste Nur-Lese-Speicher (ROM).

## Karte: Historie: Boole, Hollerith, Zuse
quelle: 01_rabs_intro-01.pdf, Folien 15-16

1847 Boolesche Algebra (George Boole): binäre logische Operationen, Basis für heutige Digitalrechner. 1890 Tabelliermaschine (Herman Hollerith): Zähl- und Sortiermaschine für die Volkszählung auf Basis von Lochkarten; Holleriths Firma wurde später IBM. 1940 Z3 (Konrad Zuse): 2.200 Relais, 10 Hertz Taktfrequenz, 22-stellige Binärzahlen im Gleitkomma-Format, dezimale Ein-/Ausgabe, Speicher mit 64 Worten, Steuereinheit mit Sequenzer; Addition in 3, Multiplikation in 16 Takten.

## Karte: 1945: Von-Neumann-Architektur
tag: wichtig
quelle: 01_rabs_intro-01.pdf, Folie 17

Von Presper Eckert, John Mauchly und John von Neumann: der klassische Universalrechner. Vier wesentliche Komponenten: Leitwerk, Rechenwerk, Speicherwerk sowie Ein- und Ausgabewerk. Programme und Daten liegen in einem Speicher, das Rechenwerk hat ALU und Register, das Leitwerk den <em>fetch-decode-execute</em>-Instruktionszyklus; Codierung binär.

## Karte: Triebkräfte der Entwicklung
quelle: 01_rabs_intro-01.pdf, Folie 18

Mooresches Gesetz (Gordon Moore, Mitbegründer von Intel, 1965): Die Anzahl der auf einem Chip integrierten Transistoren verdoppelt sich alle 18 Monate. Nathans erstes Softwaregesetz (Nathan Myhrvold, Microsoft): Software ist ein Gas, sie dehnt sich aus und füllt den Behälter, in dem sie sich befindet.

## Karte: Entwicklung der Mikroprozessoren
quelle: 01_rabs_intro-01.pdf, Folien 19-20

Die Transistorzahl der Mikroprozessoren stieg von 1971 (4004) bis 2011 (Core i7, Xeon) exponentiell. Herausforderungen sind Energieverbrauch und Hitzeentwicklung. Strategie: mehrere Prozessoren auf einem Chip, die über Caches kommunizieren, denn Speicher verbraucht nicht viel Energie.

## Karte: Bestandteile eines Rechnersystems
quelle: 01_rabs_intro-01.pdf, Folie 23

Die Folien unterscheiden Anwendungssoftware, Systemsoftware und Hardware. Zur Systemsoftware zählen unter anderem Compiler, Betriebssystem und Dateimanager; zur Hardware unter anderem CPU, RAM, SSD, HDD, PCIe, USB sowie Netzwerk-, Grafik- und Soundkarten.

## Karte: Ebenen eines Rechnersystems
quelle: 01_rabs_intro-01.pdf, Folie 25

Die Ebenen reichen von Anwendungsebene und Assemblerebene über Betriebssystem und Instruction Set Architecture bis zu Mikroarchitektur, digital-logischer Ebene und Transistorebene.

## Karte: Mehrschichten-Architektur
quelle: 01_rabs_intro-01.pdf, Folie 26

Die oberen Schichten (4 und 5) sind für den Anwendungsprogrammierer gedacht und nutzen Sprachen mit Wörtern oder Abkürzungen (z. B. Assembler). Die unteren Schichten (0 bis 3) sind für den Systemprogrammierer und nutzen eher numerische Sprachen.

## Karte: Eigenschaften einer Rechnerarchitektur
quelle: 01_rabs_intro-01.pdf, Folie 27

Rechnerarchitekturen unterscheiden sich in der Rechnerarithmetik (Addition, Subtraktion, Multiplikation, Division, Gleitkommaarithmetik), im Prozessor mit Datenpfad und Steuerwerk (Entwurf von Logikschaltungen, Implementierungsmethoden, Steuerwerksentwurf) und in der Speicherorganisation (Speicherhierarchie, Cache).

## Karte: Klassifikation von Rechnerarchitekturen
quelle: 01_rabs_intro-01.pdf, Folie 28

Nach Rechenprinzip nennt die Vorlesung Von-Neumann-Architektur, Harvard-Architektur, Datenfluss, Reduktion und objektorientierte Architektur. Nach Architekturgrundkonzept werden Vektorrechner, Array-Computer und Assoziativ-Rechner genannt.

## Frage: Welche Ziele verfolgt die RABS-Vorlesung laut Einführung?
id: 1xgl9n4
quelle: 01_rabs_intro-01.pdf, Folie 4

Sie soll Möglichkeiten und Grenzen der Hardware, das Verhalten komplexer Systeme, das Laufzeitverhalten von Programmen und den Blick unter die Haube verständlicher machen.

## Frage: Was kennzeichnet eingebettete Systeme in den Folien?
id: 19smetd
quelle: 01_rabs_intro-01.pdf, Folie 8

Sie sind in größere technische Komponenten eingebettet, häufig zweckgebunden, interagieren meist nicht über Tastatur oder Touchscreen und sind hardwarenah.

## Frage: Wie definieren Amdahl, Brooks und Blaauw Rechnerarchitektur?
id: 1qhfuyp
quelle: 01_rabs_intro-01.pdf, Folie 10

Als Eigenschaften und Verhalten eines Computers, wie dieser von einem Programmierer gesehen wird, einschließlich Befehlssatz, Befehlsformaten, OP-Codes, Adressierungsarten, Registern und direkt veränderbaren Speichern.

## Frage: Welche Bedeutung hat der automatische Webstuhl von Jacquard (1804)?
id: cb2cte
quelle: 01_rabs_intro-01.pdf, Folie 14

Lochkarten bestimmen das Muster, indem Löcher das Anheben und Senken der Kettfäden steuern; das gilt als erster Nur-Lese-Speicher (ROM).

## Frage: Was brachten Boole (1847) und Hollerith (1890) für die Rechnerentwicklung?
id: 18a4pzd
quelle: 01_rabs_intro-01.pdf, Folie 15

Boole: die Boolesche Algebra mit binären logischen Operationen als Basis heutiger Digitalrechner. Hollerith: die Tabelliermaschine auf Lochkartenbasis für die Volkszählung; seine Firma wurde später IBM.

## Frage: Welche Merkmale hat die Von-Neumann-Architektur von 1945?
id: pl14em
quelle: 01_rabs_intro-01.pdf, Folie 17

Klassischer Universalrechner mit Leitwerk, Rechenwerk, Speicherwerk und Ein-/Ausgabewerk; Programme und Daten in einem Speicher; Rechenwerk mit ALU und Registern; Leitwerk mit fetch-decode-execute-Zyklus; binäre Codierung.

## Frage: Was besagt das Mooresche Gesetz?
id: 1bluy2
quelle: 01_rabs_intro-01.pdf, Folie 18

Die Anzahl der auf einem Chip integrierten Transistoren verdoppelt sich alle 18 Monate (Gordon Moore, 1965).

## Frage: Was besagt Nathans erstes Softwaregesetz?
id: tcc4jh
quelle: 01_rabs_intro-01.pdf, Folie 18

Software ist ein Gas: Sie dehnt sich aus und füllt den Behälter, in dem sie sich befindet (Nathan Myhrvold, Microsoft).

## Frage: Welche Herausforderungen und welche Strategie nennen die Folien für Mikroprozessoren?
id: 1qblb5x
quelle: 01_rabs_intro-01.pdf, Folie 19

Herausforderungen: Energieverbrauch und Hitzeentwicklung. Strategie: mehrere Prozessoren auf einem Chip, Kommunikation über Caches.

## Frage: Welche drei großen Bestandteile eines Rechnersystems zeigen die Folien?
id: vx0lkg
quelle: 01_rabs_intro-01.pdf, Folie 23

Anwendungssoftware, Systemsoftware und Hardware.

## Frage: Welche Beispiele für Systemsoftware nennen die Folien?
id: 1gbnrmt
quelle: 01_rabs_intro-01.pdf, Folie 23

Beispiele für Systemsoftware sind Compiler, Betriebssystem und Dateimanager.

## Frage: Welche Ebenen liegen zwischen Anwendungsebene und Transistorebene?
id: 1jifoqq
quelle: 01_rabs_intro-01.pdf, Folie 25

Assemblerebene, Betriebssystem, Instruction Set Architecture, Mikroarchitektur und digital-logische Ebene.

## Frage: Wie unterscheiden sich obere und untere Schichten der Mehrschichten-Architektur?
id: 1b6159k
quelle: 01_rabs_intro-01.pdf, Folie 26

Obere Schichten (4 und 5): für Anwendungsprogrammierer, Sprachen mit Wörtern oder Abkürzungen wie Assembler. Untere Schichten (0 bis 3): für Systemprogrammierer, eher numerische Sprachen.

## Frage: In welchen Punkten unterscheiden sich Rechnerarchitekturen?
id: fczgoo
quelle: 01_rabs_intro-01.pdf, Folie 27

In der Rechnerarithmetik, im Prozessor mit Datenpfad und Steuerwerk und in der Speicherorganisation mit Speicherhierarchie und Cache.

## Frage: Welche Rechenprinzipien nennt die Klassifikation?
id: z2ptek
quelle: 01_rabs_intro-01.pdf, Folie 28

Die Klassifikation nennt Von-Neumann, Harvard, Datenfluss, Reduktion und objektorientierte Rechenprinzipien.
