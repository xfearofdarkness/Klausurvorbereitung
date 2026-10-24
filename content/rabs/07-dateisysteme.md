---
id: dateisysteme
title: Dateien & Dateisysteme
icon: 🗂️
---

## Karte: Datei-Konzept
tag: def
quelle: 03_rabs_dateisystem.pdf, Folie 4

Eine Datei ist das Konzept zur dauerhaften, persistenten Speicherung von Daten, Informationen und Programmen auf Platten oder anderen externen Speichermedien. Sie abstrahiert physikalische Speichereigenschaften als logische Speichereinheit.

## Karte: Speichermedien
quelle: 03_rabs_dateisystem.pdf, Folien 7-11

Festplatten erlauben blockorientierten und wahlfreien Zugriff. USB-Sticks und SSDs nutzen Flash-EEPROMs oder SDRAM, haben keine beweglichen Teile und kürzere Zugriffszeiten; Magnetband bietet nur sequenziellen Zugriff und dient heute vor allem Datenspeicherung und Archivierung.

## Karte: Dateisysteme
quelle: 03_rabs_dateisystem.pdf, Folie 19

Dateisysteme speichern Daten und Programme persistent in Dateien. Sie sind eine Betriebssystemabstraktion zur Nutzung von Hintergrundspeichern und bestehen aus Dateien, Verzeichnissen und Partitionen.

## Karte: Anforderungen an Dateisysteme
quelle: 03_rabs_dateisystem.pdf, Folie 20

Dateisysteme sollen Persistenz, flexible Benennung, mehrere Namen für eine Datei, geschützte oder gemeinsame Benutzung, verschiedene Zugriffsmuster und wenig Overhead für Verwaltungs- und Metadaten bieten.

## Karte: Bestandteile und Organisation
quelle: 03_rabs_dateisystem.pdf, Folien 21-22

Ein Dateisystem besteht aus Dateien (speichern Daten oder Programme, repräsentieren auch E/A-Geräte), Verzeichnissen (fassen Dateien und Verzeichnisse zusammen, enthalten Verwaltungsinformationen) und Partitionen (trennen Dateimengen physisch, z. B. Festplatte, oder logisch, z. B. Teilbereich einer Platte). Die Struktur ist meist hierarchisch; das Device-Directory (Volume Table) einer Partition enthält Informationen über deren Dateien.

## Karte: Dateien als unstrukturierte Bytefolge
quelle: 03_rabs_dateisystem.pdf, Folie 24

Bei heutigen PC- und Server-Betriebssystemen sind Dateien meist unstrukturierte Folgen von Bytes; das Betriebssystem kennt die Struktur nicht. In Mainframe-Systemen können Dateien auch Datensätze fester Struktur mit Index enthalten.

## Karte: Dateitypen
quelle: 03_rabs_dateisystem.pdf, Folien 26-27

Dateitypen sind Klassen von Dateien mit gemeinsamen Eigenschaften. Meist ist der Typ als Extension Teil des Namens (z. B. <code>.exe</code>, <code>.c</code>, <code>.sh</code>, <code>.txt</code>, <code>.zip</code>), sodass das Betriebssystem beim Öffnen die passende Anwendung starten kann. Alternativ steht der Typ in der Datei selbst, unter UNIX z. B. als Magic Number in ausführbaren Dateien. Jedes Betriebssystem muss mindestens die Struktur ausführbarer Dateien kennen, um Programme zu laden.

## Karte: Dateiattribute
quelle: 03_rabs_dateisystem.pdf, Folien 29-30

Dateiattribute sind Metadaten. Beispiele sind Name, Flags, interne ID, Typ, Location, Größe, Protection, Zeitpunkte des Erstellens, der letzten Veränderung und der letzten Verwendung sowie Owner.

## Karte: Spezialdateien
quelle: 03_rabs_dateisystem.pdf, Folie 31

Periphere Geräte werden als Spezialdateien repräsentiert und können wie Dateien mit Lese- und Schreiboperationen angesprochen werden. Es gibt blockorientierte Spezialdateien und zeichenorientierte Spezialdateien.

## Karte: Typische Dateioperationen
quelle: 03_rabs_dateisystem.pdf, Folien 32-33

Typische Operationen sind Create, Delete, Open, Close, Rename, Read, Write, Append, Seek sowie Get und Set Attributes.

## Karte: Sequentielles Dateimodell
tag: wichtig
quelle: 03_rabs_dateisystem.pdf, Folie 34

Die Datei ist eine unstrukturierte Byte-Folge. Nach dem Öffnen hat der Prozess einen privaten Dateizeiger auf das nächste zu lesende Byte bzw. die Schreibposition. Lesen und Schreiben kopieren einen Datenblock zwischen Hauptspeicher und Datei und schieben den Zeiger weiter. Über das Dateiende (EOF) hinaus kann nicht gelesen werden; Schreiben dort hängt an. Mit <code>seek</code> lässt sich der Zeiger explizit setzen.

## Karte: Verzeichnisse und Pfadnamen
quelle: 03_rabs_dateisystem.pdf, Folie 36

Verzeichnisse organisieren Dateien hierarchisch, sind selbst spezielle Dateien und benennen Dateien über Pfadnamen. Absolute Pfadnamen beginnen beim Wurzelverzeichnis, relative beim aktuellen Arbeitsverzeichnis.

## Karte: Operationen auf Verzeichnissen
quelle: 03_rabs_dateisystem.pdf, Folie 37

Create legt ein leeres Verzeichnis an (bis auf <code>.</code> und <code>..</code>), Delete löscht ein Verzeichnis (nur leere), Opendir und Closedir öffnen und schließen es, Readdir liefert den nächsten Eintrag, Link verlinkt eine Datei in ein Verzeichnis und Unlink entfernt einen Verzeichniseintrag.

## Karte: Links und Mounten
quelle: 03_rabs_dateisystem.pdf, Folien 38-39

Links erlauben, dass eine Datei oder ein Verzeichnis in mehr als einem Verzeichnis auftritt, physisch aber nur einmal vorhanden ist. Beim Mounten wird ein Dateisystem in den bestehenden UNIX-Dateibaum eingehängt.

## Karte: Datenträgerorganisation
quelle: 03_rabs_dateisystem.pdf, Folien 42-43

Datenträger können in Partitionen eingeteilt werden; eine Partition wird als Folge logischer Blöcke betrachtet. Aufgaben sind Formatieren, Lesen und Schreiben von Blöcken, Verwaltung freier Blöcke und Verwaltung defekter Blöcke.

## Karte: Speichern von Dateien auf Blöcken
quelle: 03_rabs_dateisystem.pdf, Folien 44-47

Für Dateien, die größer als ein Block sind, nennen die Folien kontinuierliche Speicherung, verkettete Speicherung und indizierte Speicherung. Kontinuierliche Speicherung ermöglicht schnellen Zugriff, führt aber zu Fragmentierung und Problemen bei wachsender Datei.

## Karte: Indizierte Speicherung
quelle: 03_rabs_dateisystem.pdf, Folie 48

Ein spezieller Plattenblock, der Indexblock, enthält alle Blocknummern der Datenblöcke einer Datei, z. B. bei UNIX-I-Nodes. Problem: Ein Indexblock ist nur ein Plattenblock, seine Kapazität ist begrenzt; für größere Dateien gibt es mehrere Indexstufen. Nachteil: Pro Datei muss der Indexblock (eventuell mehrere) mitgeladen werden.

## Karte: FAT und UNIX-Dateisystem
quelle: 03_rabs_dateisystem.pdf, Folien 50-52

VFAT/FAT32 nutzt einfache, unstrukturierte Bytefolgen und Laufwerksbuchstaben. UFS nutzt ebenfalls unstrukturierte Bytefolgen, aber UNIX-Verzeichnisse sind Knoten, Blätter sind Links, und ein Prozess hat ein Current Working Directory.

## Karte: Backups
quelle: 03_rabs_dateisystem.pdf, Folie 53

Ein Komplett-Backup sichert alle Daten. Ein inkrementelles Backup sichert Änderungen ab einem Zeitpunkt, sodass der alte Stand aus Komplett-Backup und inkrementellen Backups wiederherstellbar ist. Ein differenzielles Backup sichert Änderungen bezogen auf das letzte Komplett-Backup.

## Karte: 3-2-1-Regel
tag: wichtig
quelle: 03_rabs_dateisystem.pdf, Folie 54

Die ideale Datensicherung besteht aus drei Kopien der Daten inklusive Original, auf mindestens zwei unterschiedlichen Datenträgern, wobei mindestens ein Backup außer Haus aufbewahrt wird.

## Frage: Was ist eine Datei laut Dateisystem-Folien?
id: z2ha5r
quelle: 03_rabs_dateisystem.pdf, Folie 4

Ein Konzept zur persistenten Speicherung von Daten, Informationen und Programmen auf externen Speichermedien.

## Frage: Was ist ein Dateisystem?
id: cgtkq5
quelle: 03_rabs_dateisystem.pdf, Folie 19

Ein Dateisystem ist eine OS-Abstraktion zur Nutzung von Hintergrundspeichern und besteht aus Dateien, Verzeichnissen und Partitionen.

## Frage: Wozu dienen Partitionen im Dateisystem?
id: 1dywvkl
quelle: 03_rabs_dateisystem.pdf, Folie 21

Zum physischen (z. B. eigene Festplatte) oder logischen (z. B. Teilbereich einer Platte) Trennen von Dateimengen.

## Frage: Wie kann ein Betriebssystem den Typ einer Datei erkennen?
id: qaa8tw
quelle: 03_rabs_dateisystem.pdf, Folie 27

Über die Extension im Dateinamen oder über eine Typangabe in der Datei selbst, z. B. die Magic Number ausführbarer UNIX-Dateien.

## Frage: Welche typischen Dateioperationen nennt die Vorlesung?
id: jk6qsc
quelle: 03_rabs_dateisystem.pdf, Folien 32-33

Create, Delete, Open, Close, Rename, Read, Write, Append, Seek sowie Get und Set Attributes.

## Frage: Was passiert im sequentiellen Dateimodell beim Lesen und Schreiben?
id: 3nhkje
quelle: 03_rabs_dateisystem.pdf, Folie 34

Ein Datenblock wird zwischen Hauptspeicher und Datei kopiert und der private Dateizeiger weitergeschoben. Lesen über EOF ist nicht möglich, Schreiben dort hängt an; <code>seek</code> setzt den Zeiger explizit.

## Frage: Woran erkennt man absolute Pfadnamen?
id: 1vpvd39
quelle: 03_rabs_dateisystem.pdf, Folie 36

Absolute Pfadnamen beginnen beim Wurzelverzeichnis.

## Frage: Welche Verzeichnisse darf Delete löschen?
id: 130w6yd
quelle: 03_rabs_dateisystem.pdf, Folie 37

Nur leere Verzeichnisse.

## Frage: Was ist Mounten im UNIX-Dateibaum?
id: 42qljq
quelle: 03_rabs_dateisystem.pdf, Folie 39

Ein anderes Dateisystem wird mit dem Befehl mount in das bestehende System hineinmontiert; das root file system bildet die Wurzel des Gesamtsystems.

## Frage: Wie funktioniert verkettete Speicherung?
id: 1a9irhl
quelle: 03_rabs_dateisystem.pdf, Folie 46

Bei verketteter Speicherung sind die Blöcke der Datei durch Adressen der Folgeblöcke verkettet.

## Frage: Was ist FAT?
id: ytr4hi
quelle: 03_rabs_dateisystem.pdf, Folie 47

FAT ist eine Variante verketteter Speicherung mit Verkettung in speziellen Plattenblöcken.

## Frage: Wie funktioniert indizierte Speicherung und was ist ihr Nachteil?
id: 1jup0x2
quelle: 03_rabs_dateisystem.pdf, Folie 48

Ein Indexblock enthält alle Blocknummern der Datenblöcke einer Datei (z. B. UNIX-I-Nodes); für große Dateien gibt es mehrere Indexstufen. Nachteil: Pro Datei muss der Indexblock mitgeladen werden.

## Frage: Was sichert ein Komplett-Backup?
id: 1pvhins
quelle: 03_rabs_dateisystem.pdf, Folie 53

Ein Komplett-Backup sichert alle Daten, also die komplette Platte.

## Frage: Was sagt die 3-2-1-Regel für Backups?
id: k3l5hj
quelle: 03_rabs_dateisystem.pdf, Folie 54

Drei Kopien inklusive Original, auf mindestens zwei unterschiedlichen Datenträgern, davon mindestens ein Backup außer Haus.
