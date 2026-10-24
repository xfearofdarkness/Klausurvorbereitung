---
id: c-systemprogrammierung
title: C & Systemprogrammierung
icon: 💻
---

## Karte: C im Kontext von UNIX
quelle: 3_rabs-c-intro.pdf, Folie 5

C entstand im Kontext von UNIX. Die Sprache ist laut Folien bis heute für Systemprogrammierung und maschinennahe Programmierung attraktiv; ihre Bedeutung für Anwendungsentwicklung ist dagegen stark zurückgegangen.

## Karte: C und Java im Vergleich
quelle: 3_rabs-c-intro.pdf, Folie 6

C steht in den Folien für maschinennahe und prozedurale Programmierung, Quelltext-Kompatibilität und direkte Ausführung auf dem Betriebssystem. Java steht für Anwendungsprogrammierung, Objektorientierung, Bytecode-Kompatibilität und Ausführung auf einer JVM.

## Karte: Hello-World-Struktur
quelle: 3_rabs-c-intro.pdf, Folie 7

Header Files ermöglichen den Zugriff auf Bibliotheksfunktionen. Ein C-Programm nutzt eine <code>main()</code>-Methode, Blöcke in geschweiften Klammern, Kommentare, <code>printf()</code>, Strings in Anführungszeichen und ein <code>return</code>-Statement.

## Karte: Basistypen
quelle: 3_rabs-c-intro.pdf, Folie 9

Die Tabelle der Folie nennt <code>char</code> (1 Byte, −128 bis 127, Zeichen), <code>int</code> (2 Byte, −32768 bis 32767, ganze Zahlen), <code>float</code> (4 Byte, 3.4E−38 bis 3.4E+38, Gleitkommazahlen) und <code>double</code> (8 Byte, 1.7E−308 bis 1.7E+308, große Gleitkommazahlen).

## Karte: Variablen
tag: def
quelle: 3_rabs-c-intro.pdf, Folie 10

Eine Variable besteht aus Typ, Name und Wert. Durch Deklaration wird ihr Typ festgelegt und damit, wie sie im Speicher repräsentiert wird. Der Wert wird durch Zuweisungen verändert.

## Karte: Kontrollfluss
quelle: 3_rabs-c-intro.pdf, Folien 11-13

Bedingte Verzweigung mit <code>if (n > 5) { … } else { … }</code>: Ist die Bedingung wahr, läuft der if-Rumpf, sonst der else-Rumpf; danach geht es mit der Anweisung nach dem if weiter. Schleifen: <code>for (int i = 0; i < 3; i++) { … }</code> oder <code>while (i < 3) { …; i++; }</code>; beide Beispiele geben dreimal „Hello RABS“ aus.

## Karte: Funktionen
tag: def
quelle: 3_rabs-c-intro.pdf, Folie 14

Eine Funktion ist ein benannter Code-Block mit Eingabeparametern und Rückgabewerten. In der Funktionsdefinition werden Name, Parameterliste und Rückgabetyp vereinbart.

## Karte: Pointer
tag: wichtig
quelle: 3_rabs-c-intro.pdf, Folie 16

Pointer sind Variablen, die direkt Speicheradressen enthalten. Die Folien nennen Pointer als Konstrukt, das C für Systemprogrammierung attraktiv macht.

## Karte: Adress- und Dereferenzierungsoperator
tag: wichtig
quelle: 3_rabs-c-intro.pdf, Folie 17

<code>&</code> liefert die Adresse eines Werts, <code>*</code> liefert den Wert, auf den ein Pointer zeigt. Beispiel: <code>char c = 65; char* p = &c; *p = 88; char x = *p;</code> Hier zeigt <code>p</code> auf <code>c</code>, <code>*p = 88</code> ändert also <code>c</code>, und <code>x</code> erhält 88.

## Karte: Array-Grenzen und Stack
quelle: 3_rabs-c-intro.pdf, Folien 19-21

Im Beispiel werden zwei <code>char</code>-Arrays nebeneinander auf dem Stack angelegt. Beim Angriff wird über die Grenzen des Arrays hinausgeschrieben und der Inhalt von <code>password</code> überschrieben. C-Style-Arrays bieten nur teilweise Container-Abstraktion.

## Karte: Systemaufrufe in C
quelle: 3_rabs-c-intro.pdf, Folie 23

Bei Systemprogrammierung werden durch Systemaufrufe Funktionen der Betriebssystem-API genutzt. Dafür sind Kontextwechsel zwischen User Mode und Kernel Mode notwendig; die Library kapselt den Systemaufruf.

## Karte: Fehlerbehandlung bei Systemaufrufen
quelle: 3_rabs-c-intro.pdf, Folie 24

Die Fehlerbehandlung erfolgt über den Rückgabewert. Im Fehlerfall geben Systemaufrufe den Wert <code>-1</code> zurück. Weitere Informationen können aus der globalen Variable <code>errno</code> gelesen werden; dafür wird <code>&lt;errno.h&gt;</code> importiert.

## Karte: Dateizugriff mit FILE*
quelle: 3_rabs-c-intro.pdf, Folie 26

Das Datei-Beispiel nutzt ein weiteres Header-File mit den Funktionen für den Systemaufruf. Der Datentyp <code>FILE*</code> enthält einen Pointer auf eine Datei.

## Frage: Warum ist C laut Folien für Systemprogrammierung attraktiv?
id: 1ddy7zi
quelle: 3_rabs-c-intro.pdf, Folien 5 und 16

Wegen maschinennaher Programmierung im Kontext von UNIX; Pointer als direkte Speicheradress-Variablen sind dabei ein zentrales Konstrukt.

## Frage: Wie wird C laut Vergleich ausgeführt?
id: i2w21e
quelle: 3_rabs-c-intro.pdf, Folie 6

C wird direkt auf dem Betriebssystem ausgeführt.

## Frage: Woraus besteht eine Variable in C?
id: q01wfh
quelle: 3_rabs-c-intro.pdf, Folie 10

Aus einem Typ, einem Namen und einem Wert.

## Frage: Was ist ein Pointer?
id: 1iv29xs
quelle: 3_rabs-c-intro.pdf, Folie 16

Ein Pointer ist eine Variable, die direkt eine Speicheradresse enthält.

## Frage: Was liefern die Operatoren & und * bei Pointern?
id: w39k69
quelle: 3_rabs-c-intro.pdf, Folie 17

<code>&</code> (Adressoperator) liefert die Adresse eines Werts, <code>*</code> (Dereferenzierungsoperator) den Wert, auf den der Pointer zeigt.

## Frage: Welchen Wert hat c nach <code>char c = 65; char* p = &c; *p = 88;</code>?
id: 1h7gbvc
quelle: 3_rabs-c-intro.pdf, Folie 17

88, weil <code>p</code> auf <code>c</code> zeigt und <code>*p = 88</code> den Wert an dieser Adresse überschreibt.

## Frage: Was zeigt das Array-Beispiel zum Stack?
id: 1r89pjh
quelle: 3_rabs-c-intro.pdf, Folien 19-21

Dass fehlende Überwachung der Array-Grenzen dazu führen kann, dass über ein Array hinausgeschrieben und ein benachbartes Array überschrieben wird.

## Frage: Wie wird ein Fehler bei Systemaufrufen angezeigt?
id: 21vgxm
quelle: 3_rabs-c-intro.pdf, Folie 24

Im Fehlerfall geben Systemaufrufe den Wert -1 zurück; Details können über die globale errno-Variable gelesen werden.
