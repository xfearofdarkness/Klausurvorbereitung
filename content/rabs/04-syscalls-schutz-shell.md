---
id: syscalls-schutz-shell
title: Systemaufrufe, Schutz & Shell
icon: 🛡️
---

## Karte: Systemaufrufe
tag: def
quelle: 04_rabs-os-konzepte.pdf, Folie 6

Systemaufrufe bilden die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem. Sie sind meist in Bibliotheksfunktionen gekapselt, hardwareabhängig und in der Regel durchnummeriert; die Nummer wird vor dem TRAP-Befehl in ein festes Register geschrieben.

## Karte: Ablauf eines Systemaufrufs
quelle: 04_rabs-os-konzepte.pdf, Folie 8

Das Betriebssystem sichert zunächst den vollständigen Prozessorstatus in der Thread- beziehungsweise Prozesstabelle. Der aufrufende Thread kann blockiert werden; die Rückkehr aus dem Betriebssystem erfolgt über den Scheduler.

## Karte: Beispiel read()
quelle: 04_rabs-os-konzepte.pdf, Folie 9

<code>read()</code> wird mit Dateihandler, Buffer und Anzahl der Zeichen parametrisiert. Die Funktion liefert die Zahl der tatsächlich gelesenen Zeichen zurück; im Fehlerfall wird der Wert auf <code>-1</code> gesetzt und sollte geprüft werden.

## Karte: Typische Systemaufrufe
quelle: 04_rabs-os-konzepte.pdf, Folie 10

Zum Prozessmanagement gehören unter anderem <code>fork()</code>, <code>waitpid()</code>, <code>execve()</code> und <code>exit()</code>. Zum Dateimanagement gehören <code>open()</code>, <code>close()</code>, <code>read()</code>, <code>write()</code> und <code>lseek()</code>.

## Karte: Verzeichnis- und sonstige Systemaufrufe
quelle: 04_rabs-os-konzepte.pdf, Folie 11

Zum Verzeichnismanagement gehören <code>mkdir()</code> (Verzeichnis erzeugen) und <code>mount()</code> (Datenträger in das Dateisystem einhängen). Weitere typische Aufrufe: <code>chdir()</code> (Arbeitsverzeichnis wechseln), <code>chmod()</code> (Zugriffsrechte ändern), <code>chown()</code> (Eigentümer ändern), <code>kill()</code> (Signal an einen Prozess senden) und <code>time()</code> (Uhrzeit).

## Karte: Systemaufrufe: Windows und UNIX
quelle: 04_rabs-os-konzepte.pdf, Folie 15

Windows-Programme sind normalerweise ereignisgesteuert. Unter UNIX gibt es praktisch eine 1:1-Abbildung zwischen Systemaufrufen und Bibliotheksfunktionen. Unter Windows sind beide entkoppelt: Die Win32-API bietet eine extrem große Zahl von Funktionen, viele arbeiten im Benutzermodus, und die Schnittstelle ist nicht konsistent, weil sie sich mit der Windows-Version ändert und Kompatibilität zu teils sehr alten Systemen hält.

## Karte: Aufgabenbereiche der Sicherheit
quelle: 04_rabs-os-konzepte.pdf, Folie 17

Zugriffskontrolle: Zugriff von Benutzern auf Gesamtsystem, Subsysteme und Daten sowie von Prozessen auf Ressourcen und Objekte. Kontrolle des Informationsflusses: keine Weitergabe vertraulicher Daten an Unautorisierte. Zertifizierung: Nachweis, dass das System die gewünschten Sicherheitseigenschaften durchsetzt.

## Karte: Sicherheit und Schutz
tag: def
quelle: 04_rabs-os-konzepte.pdf, Folie 18

Sicherheit (security) stellt sicher, dass Unautorisierte nicht auf Daten zugreifen können; sie schließt technische, administrative, rechtliche und politische Fragen ein. Schutz (protection) sind die spezifischen Betriebssystemmechanismen, mit denen Sicherheit gewährleistet wird. Die Begriffe sind nicht immer klar abgegrenzt.

## Karte: Schutzziele (CIA)
tag: wichtig
quelle: 04_rabs-os-konzepte.pdf, Folie 19

1. Vertraulichkeit: Geheime Daten bleiben geheim; der Besitzer legt fest, wem sie zugänglich sind, das System garantiert die Zugriffskontrolle. 2. Integrität: Unautorisierte Benutzer oder Systemdienste können Daten nicht ohne Erlaubnis des Besitzers ändern, löschen oder verfälschen. 3. Verfügbarkeit: Niemand kann das System so stören, dass es nur eingeschränkt oder gar nicht benutzbar ist, z. B. durch Denial-of-Service; schwerer zu realisieren als 1 und 2. Englisch: confidentiality, integrity, availability.

## Karte: Datenschutz
quelle: 04_rabs-os-konzepte.pdf, Folie 20

Datenschutz (privacy) schützt Personen vor dem Missbrauch ihrer persönlichen Daten. Er ist das übergeordnete Ziel, dem sich die Schutz- und Sicherheitsmechanismen der Systeme unterordnen, und ein gesellschaftliches, rechtliches und moralisches Thema mit gesetzlichen Regelungen wie der DSGVO.

## Karte: Principle of Least Authority
tag: wichtig
quelle: 04_rabs-os-konzepte.pdf, Folie 21

Programme, Benutzer und Systeme sollen nur so viele Privilegien bekommen, wie unbedingt notwendig ist, um ihre Jobs zu erledigen.

## Karte: UNIX-Zugriffskontrolle
quelle: 04_rabs-os-konzepte.pdf, Folien 22-23

UNIX führt Benutzer und Benutzergruppen ein; <code>root</code> ist Administrator. Prozesse und Dateien haben Eigentümer und Eigentümergruppe. Dateizugriff wird über 9 Rechtebits festgelegt: je 3 Bits für Eigentümer, Gruppe und alle anderen.

## Karte: Schutzdomänen und Schutzmatrix
quelle: 04_rabs-os-konzepte.pdf, Folien 24-25

Objekte können in mehreren Schutzdomänen enthalten sein, mit gleichen oder unterschiedlichen Rechten. Die Schutzmatrix legt fest, wer welche Operationen auf welchen Objekten ausführen darf: Zeilen sind Domänen, Spalten Objekte, die Einträge die Rechte (z. B. Read, Write, Execute).

## Karte: ACLs und Capabilities
quelle: 04_rabs-os-konzepte.pdf, Folie 26

UNIX und Windows nutzen eine Mischform aus ACLs und Capabilities. Rechte an Objekten werden über ACLs spezifiziert, die Prüfung erfolgt beim Öffnen; Datei- oder Geräte-Handles wirken anschließend als Capability.

## Karte: Textuelle Shell
quelle: 04_rabs-os-konzepte.pdf, Folie 28

Eine textuelle Shell ist ein Command Line Interface. Sie ist komplexer als graphische Shells, aber zuverlässiger, erlaubt einfache Automatisierung mit Skripten oder Batch-Dateien und unterstützt sicheren Fernzugriff via SSH.

## Karte: Pipes und Umleitungen in der Shell
quelle: 04_rabs-os-konzepte.pdf, Folien 30-31

Die Shell unterstützt Eingabe- und Ausgabeumleitung, Hintergrundausführung und Pipes. Mit Pipes dient die Ausgabe eines Prozesses als Eingabe des nächsten; die UNIX-Philosophie kombiniert viele kleine Kommandos über Pipes.

## Karte: Shell-Skripte
quelle: 04_rabs-os-konzepte.pdf, Folie 33

Shell-Skripte ergänzen Kommandos um Elemente zur Ablaufsteuerung wie Bedingungen, Schleifen und Prozeduren. Beispiel der Folie: Für alle <code>.txt</code>-Dateien wird eine vorhandene Zieldatei zuerst nach <code>.bak</code> umbenannt und dann die Datei verschoben, sodass nichts überschrieben wird.

## Karte: Graphische Benutzungsschnittstellen
quelle: 04_rabs-os-konzepte.pdf, Folie 34

Graphische Benutzungsschnittstellen nutzen visuelle Interaktion über Tastatur und Zeigegerät. Elemente sind Windows, Icons, Menus und Pointers. Sie sind intuitiver, bilden aber nicht alle Systemaufgaben ab und erschweren Automatisierung.

## Frage: Was sind Systemaufrufe?
id: 1vlpkck
quelle: 04_rabs-os-konzepte.pdf, Folie 6

Die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem; meist in Bibliotheksfunktionen gekapselt und hardwareabhängig.

## Frage: Warum kehrt ein Systemaufruf nicht unbedingt sofort zum aufrufenden Thread zurück?
id: r1a8hz
quelle: 04_rabs-os-konzepte.pdf, Folie 8

Weil der aufrufende Thread blockiert werden kann und die Rückkehr aus dem Betriebssystem über den Scheduler erfolgt, der den nächsten fortzuführenden Thread bestimmt.

## Frage: Was unterscheidet Systemaufrufe unter UNIX und Windows?
id: mlcif
quelle: 04_rabs-os-konzepte.pdf, Folie 15

UNIX: praktisch 1:1-Abbildung zwischen Systemaufrufen und Bibliotheksfunktionen. Windows: beide entkoppelt; die Win32-API hat sehr viele Funktionen, viele im Benutzermodus, und keine konsistente Schnittstelle über die Versionen.

## Frage: Was unterscheidet Sicherheit von Schutz?
id: gubrfm
quelle: 04_rabs-os-konzepte.pdf, Folie 18

Sicherheit stellt sicher, dass Unautorisierte nicht auf Daten zugreifen können. Schutz sind die Betriebssystemmechanismen, mit denen Sicherheit gewährleistet wird.

## Frage: Welche drei Schutzziele nennt die Vorlesung?
id: 1k8j38i
quelle: 04_rabs-os-konzepte.pdf, Folie 19

Vertraulichkeit, Integrität und Verfügbarkeit (CIA: confidentiality, integrity, availability).

## Frage: Welches Schutzziel ist am schwersten zu realisieren und warum?
id: 1objz4d
quelle: 04_rabs-os-konzepte.pdf, Folie 19

Verfügbarkeit: Niemand darf das System so stören können, dass es nur eingeschränkt oder gar nicht benutzbar ist, z. B. durch Denial-of-Service-Angriffe.

## Frage: Was bedeutet POLA?
id: 1pnutl7
quelle: 04_rabs-os-konzepte.pdf, Folie 21

POLA steht für Principle of Least Authority: Programme, Benutzer und Systeme erhalten nur so viele Privilegien, wie für ihre Aufgabe notwendig sind.

## Frage: Wie funktionieren UNIX-Rechtebits grundsätzlich?
id: csix4l
quelle: 04_rabs-os-konzepte.pdf, Folien 22-23

Es gibt je drei Bits für Eigentümer, Eigentümergruppe und alle anderen; literale Rechte sind r, w und x, oktal 4, 2 und 1.

## Frage: Was legt eine Schutzmatrix fest?
id: 100nx7a
quelle: 04_rabs-os-konzepte.pdf, Folie 25

Wer (Domäne) welche Operationen auf welchen Objekten ausführen darf.

## Frage: Wie ist die Shell zum Betriebssystem einzuordnen?
id: vmu423
quelle: 04_rabs-os-konzepte.pdf, Folie 28

Die Shell ist kein Teil des Betriebssystems, nutzt aber dessen Eigenschaften.

## Frage: Was ist eine Pipe in der Shell?
id: 4761hs
quelle: 04_rabs-os-konzepte.pdf, Folie 30

Ein Mechanismus, bei dem die Ausgabe eines Prozesses als Eingabe des nächsten dient.

## Frage: Wofür steht WIMP?
id: 1jhzyd
quelle: 04_rabs-os-konzepte.pdf, Folie 34

WIMP steht für Windows, Icons, Menus und Pointers.
