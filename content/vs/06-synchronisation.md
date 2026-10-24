---
id: synchronisation
title: JMM & Synchronisation
icon: 🔒
---

## Karte: Threads und Shared Memory
tag: wichtig
quelle: 03_ds-concept-threads-2.pdf, Folie 4

Threads teilen sich Ressourcen, die ihrem Prozess vom Betriebssystem zugewiesen werden, haben aber ihren eigenen Programmzähler und Aufrufstack. Threads kommunizieren über Shared Memory. Der verteilte Zugriff auf Variablen wird dadurch kompliziert, dass oft unklar ist, in welchem Speicherbereich die Variable gehalten wird.

## Karte: Java Memory Model (JMM)
tag: def
quelle: 03_ds-concept-threads-2.pdf, Folie 5

Das JMM beschreibt, welche Verhaltensweisen in Multithread-Code zulässig sind und wie Threads über den Speicher interagieren können. Es beschreibt die Beziehung zwischen Variablen im Programm und den Details, wie sie in einem realen Computersystem gespeichert und abgerufen werden. Auf eine Weise, die mit vielfältiger Hardware und Compileroptimierungen korrekt implementiert werden kann.

## Karte: Kritische Szenarien
tag: wichtig
quelle: 03_ds-concept-threads-2.pdf, Folien 6-7

In Multiprozessorarchitekturen gibt es neben dem globalen Hauptspeicher lokale Speicher (CPU-Register, Cache). Im Extremfall läuft jeder Thread auf seinem eigenen Prozessor; auf Register anderer CPUs kann nicht zugegriffen werden. Änderungen eines Threads können für andere unsichtbar sein. Zwei Hauptprobleme: <b>Sichtbarkeit</b> von Thread-Aktualisierungen in gemeinsam genutzten Variablen und <b>Race Conditions</b> beim Lesen, Prüfen und Schreiben von Shared-Variablen.

## Karte: Sichtbarkeitsproblem und volatile
tag: wichtig
quelle: 03_ds-concept-threads-2.pdf, Folie 9

Ein Thread kopiert das gemeinsam genutzte Objekt in seinen CPU-Cache und ändert es dort; die Änderung ist für Threads auf anderen CPUs nicht sichtbar, solange sie nicht in den Hauptspeicher zurückgeschrieben wurde. Das Schlüsselwort <code>volatile</code> sorgt dafür, dass geänderte Werte immer in den Hauptspeicher zurückgeschrieben werden.

## Karte: Race Conditions
tag: beispiel
quelle: 03_ds-concept-threads-2.pdf, Folie 10

Zwei Inkremente werden gleichzeitig ohne ordnungsgemäße Synchronisation ausgeführt: Unabhängig davon, welcher Thread seine aktualisierte Version in den Hauptspeicher zurückschreibt, ist der Wert trotz zwei Inkrementen nur um 1 höher. Semaphoren können durch synchronized-Blöcke eingefügt werden.

## Karte: Pitfalls: Reihenfolge nicht garantiert
tag: wichtig
quelle: 03_ds-concept-threads-2.pdf, Folie 11

In nicht-synchronisierten nebenläufigen Programmen kann die Reihenfolge der Anweisungen durch Compiler, Prozessor oder Laufzeitumgebung verändert werden. Hypothesen über die Ausführungsreihenfolge sind sehr unsicher. Compiler ordnen Anweisungen um; Variablen liegen in Registern statt im Hauptspeicher; Prozessoren arbeiten parallel oder in anderer Reihenfolge; Caches ändern die Schreib-Reihenfolge in den Hauptspeicher; lokale Cache-Werte sind für andere Prozessoren nicht sichtbar.

## Karte: Ziele des JMM
tag: def
quelle: 03_ds-concept-threads-2.pdf, Folie 12

<b>Atomizität:</b> Welche Methoden sind garantiert ununterbrechbar (z. B. Lesen und Schreiben geteilter Variablen)? <b>Sichtbarkeit:</b> Unter welchen Bedingungen sind die Auswirkungen eines Threads für andere sichtbar? <b>Reihenfolge:</b> Unter welchen Bedingungen erscheint die Ausführungsreihenfolge der Anweisungen fehlerhaft?

## Karte: Atomizität
tag: wichtig
quelle: 03_ds-concept-threads-2.pdf, Folien 13, 16, 20

Der Zugriff und das Schreiben auf Variablen der Basistypen (außer long und double) ist garantiert atomar; Atomizität gilt auch für volatile long und double. Durch atomare Zugriffe kann sichergestellt werden, dass es keine inkonsistenten Zustände gibt. Atomizität stellt Sichtbarkeit her. Achtung: Zusammengesetzte Operationen wie <code>++</code> sind auch auf volatilen Variablen nicht atomar!

## Karte: Sichtbarkeit: Bedingungen
tag: def
quelle: 03_ds-concept-threads-2.pdf, Folie 14

Änderungen an Variablen sind sichtbar bei: Erwerb und Rückgabe eines Locks; volatile Variablen werden vor weiteren Aktionen in den Hauptspeicher zurückgeschrieben (flushed) und vor fremdem Zugriff neu geladen; wenn ein Thread terminiert, werden alle veränderten Variablen in den Hauptspeicher geschrieben. Sichtbarkeitsfehler sind schwer zu reproduzieren.

## Karte: Happens-before-Relation
tag: def
quelle: 03_ds-concept-threads-2.pdf, Folie 18

Das JMM definiert eine partielle Ordnung namens happens-before auf allen Aktionen im Programm. Damit garantiert ist, dass Aktion B die Ergebnisse von Aktion A sieht (egal ob in verschiedenen Threads), muss eine happens-before-Beziehung zwischen A und B bestehen.

## Karte: Thread-Interferenz
tag: beispiel
quelle: 03_ds-concept-threads-2.pdf, Folien 22-23

Eine Counter-Klasse mit <code>increment()</code> (c++) und <code>value()</code>: Greifen mehrere Threads nebenläufig auf die Variable zu, resultieren unerwünschte Zustände. Intention im Beispiel: Nach Termination sollte der Zähler 200 sein; Beobachtung: Nach jeder Programmausführung hat er einen anderen Wert.

## Karte: synchronized
tag: wichtig
quelle: 03_ds-concept-threads-2.pdf, Folie 24

Zur Synchronisierung von Methoden gibt es das <code>synchronized</code>-Schlüsselwort. Das Interleaving von Methoden kann dadurch ausgeschlossen und Thread-Interferenz auf Methoden-Ebene unterbunden werden. Insbesondere wird die Sichtbarkeit der Variablen erreicht.

## Frage: Wie kommunizieren Threads miteinander?
id: ihv2oj
quelle: 03_ds-concept-threads-2.pdf, Folie 4

Threads kommunizieren über Shared Memory; jeder Thread hat einen eigenen Programmzähler und Stack, teilt aber Prozess-Ressourcen.

## Frage: Was beschreibt das Java Memory Model?
id: 611g4u
quelle: 03_ds-concept-threads-2.pdf, Folie 5

Welche Verhaltensweisen in Multithread-Code zulässig sind und wie Threads über den Speicher interagieren. Die Beziehung zwischen Programmvariablen und ihrer Speicherung/Abruf in realen Systemen, korrekt implementierbar über verschiedene Hardware und Compileroptimierungen.

## Frage: Welche zwei Hauptprobleme adressiert das JMM?
id: 17hiaxj
quelle: 03_ds-concept-threads-2.pdf, Folie 7

Sichtbarkeit von Thread-Aktualisierungen (Schreibvorgängen) in gemeinsam genutzte Variablen und Race Conditions beim Lesen, Prüfen und Schreiben von Shared-Variablen.

## Frage: Was bewirkt das Schlüsselwort volatile?
id: oa7j6g
quelle: 03_ds-concept-threads-2.pdf, Folien 9, 16

Geänderte Werte werden immer in den Hauptspeicher zurückgeschrieben (und vor Zugriff anderer Threads neu geladen). Aber: Zusammengesetzte Operationen wie ++ sind auch auf volatilen Variablen nicht atomar.

## Frage: Was ist eine Race Condition (Beispiel der Folien)?
id: vqxmey
quelle: 03_ds-concept-threads-2.pdf, Folie 10

Zwei gleichzeitige Inkremente ohne Synchronisation: Egal welcher Thread seinen Wert zurückschreibt, der Zähler ist trotz zweier Inkremente nur um 1 höher als der Ursprungswert.

## Frage: Welche drei Ziele verfolgen die Regeln des JMM?
id: 2hppg
quelle: 03_ds-concept-threads-2.pdf, Folie 12

Atomizität (welche Zugriffe sind ununterbrechbar), Sichtbarkeit (wann sind Auswirkungen sichtbar) und Reihenfolge (wann erscheint die Ausführungsreihenfolge fehlerhaft).

## Frage: Welche Zugriffe sind in Java garantiert atomar?
id: 1ci0lae
quelle: 03_ds-concept-threads-2.pdf, Folie 13

Lesen und Schreiben von Variablen der Basistypen. Außer long und double; für volatile long und double gilt Atomizität ebenfalls.

## Frage: Unter welchen Bedingungen sind Änderungen an Variablen sichtbar?
id: cdx7r
quelle: 03_ds-concept-threads-2.pdf, Folie 14

Bei Erwerb und Rückgabe eines Locks, bei volatilen Variablen (Flush in den Hauptspeicher und Neuladen) und wenn ein Thread terminiert (alle veränderten Variablen werden zurückgeschrieben).

## Frage: Was ist die happens-before-Relation?
id: 2g48tb
quelle: 03_ds-concept-threads-2.pdf, Folie 18

Eine vom JMM definierte partielle Ordnung auf allen Aktionen im Programm. B sieht die Ergebnisse von A nur garantiert, wenn zwischen A und B eine happens-before-Beziehung besteht.

## Frage: Wie wird Thread-Interferenz in Java unterbunden?
id: pi9cgn
quelle: 03_ds-concept-threads-2.pdf, Folie 24

Mit dem synchronized-Schlüsselwort: Das Interleaving von Methoden wird ausgeschlossen und die Sichtbarkeit der Variablen erreicht.
