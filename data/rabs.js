window.APP_SUBJECTS = window.APP_SUBJECTS || {};

window.APP_SUBJECTS.rabs = {
  id: "rabs",
  title: "RABS",
  subtitle: "Rechnerarchitektur & Betriebssysteme",
  icon: "🖥️",
  features: { math: false },
  topics: [
    {
      id: "einordnung-historie",
      title: "Einordnung & Historie",
      icon: "🧭",
      cards: [
        {
          title: "Ziel der Vorlesung",
          body: "Der Rechner ist das zentrale Handwerkszeug des Informatikers. Die Vorlesung zielt darauf, Möglichkeiten und Grenzen der Hardware, das Verhalten komplexer Systeme, das Laufzeitverhalten von Programmen und den Blick unter die Haube besser zu verstehen.",
          tag: "wichtig",
          source: "01_rabs_intro-01.pdf, Folie 4"
        },
        {
          title: "Sicht auf Computer",
          body: "Ein Rechnersystem wird über Eingabe-/Ausgabegeräte, Betriebssystem, Anwendungen aus der Softwareentwicklung und Hardware betrachtet. Die Folien stellen dazu ausdrücklich die Frage, was ein Betriebssystem ist und welche Funktionen es hat.",
          source: "01_rabs_intro-01.pdf, Folien 6-7"
        },
        {
          title: "Eingebettete Systeme",
          body: "Eingebettete Systeme sind in größere technische Komponenten eingebettet, häufig für einen bestimmten Zweck ausgelegt, interagieren in der Regel nicht über Tastatur oder Touchscreen und arbeiten hardwarenah.",
          source: "01_rabs_intro-01.pdf, Folie 8"
        },
        {
          title: "Rechnerarchitektur nach Amdahl, Brooks und Blaauw",
          body: "Rechnerarchitektur beschreibt Eigenschaften und Verhalten eines Computers aus Sicht des Programmierers. Dazu gehören Befehlssatz, Befehlsformate, OP-Codes, Adressierungsarten sowie Register und Speicher, die ein Maschinensprachenprogrammierer direkt verändern kann.",
          tag: "def",
          source: "01_rabs_intro-01.pdf, Folie 10"
        },
        {
          title: "Warum Rechnerarchitektur wichtig ist",
          body: "Grundverständnis der Rechnerarchitektur wird für Geräteauswahl, Fehlersuche, Leistungsoptimierung, Benchmarkentwürfe, Zuverlässigkeitsanalysen, Systementwurf, Compiler-Codeoptimierung und Sicherheitsfragen benötigt.",
          source: "01_rabs_intro-01.pdf, Folie 11"
        },
        {
          title: "Bestandteile eines Rechnersystems",
          body: "Die Folien unterscheiden Anwendungssoftware, Systemsoftware und Hardware. Zur Systemsoftware zählen unter anderem Compiler, Betriebssystem und Dateimanager; zur Hardware unter anderem CPU, RAM, SSD, HDD, PCIe, USB sowie Netzwerk-, Grafik- und Soundkarten.",
          source: "01_rabs_intro-01.pdf, Folie 23"
        },
        {
          title: "Ebenen eines Rechnersystems",
          body: "Die Ebenen reichen von Anwendungsebene und Assemblerebene über Betriebssystem und Instruction Set Architecture bis zu Mikroarchitektur, digital-logischer Ebene und Transistorebene.",
          source: "01_rabs_intro-01.pdf, Folie 25"
        },
        {
          title: "Klassifikation von Rechnerarchitekturen",
          body: "Nach Rechenprinzip nennt die Vorlesung Von-Neumann-Architektur, Harvard-Architektur, Datenfluss, Reduktion und objektorientierte Architektur. Nach Architekturgrundkonzept werden Vektorrechner, Array-Computer und Assoziativ-Rechner genannt.",
          source: "01_rabs_intro-01.pdf, Folie 28"
        }
      ],
      questions: [
        {
          question: "Welche Ziele verfolgt die RABS-Vorlesung laut Einführung?",
          answer: "Sie soll Möglichkeiten und Grenzen der Hardware, das Verhalten komplexer Systeme, das Laufzeitverhalten von Programmen und den Blick unter die Haube verständlicher machen.",
          source: "01_rabs_intro-01.pdf, Folie 4"
        },
        {
          question: "Wie definieren Amdahl, Brooks und Blaauw Rechnerarchitektur?",
          answer: "Als Eigenschaften und Verhalten eines Computers, wie dieser von einem Programmierer gesehen wird, einschließlich Befehlssatz, Befehlsformaten, OP-Codes, Adressierungsarten, Registern und direkt veränderbaren Speichern.",
          source: "01_rabs_intro-01.pdf, Folie 10"
        },
        {
          question: "Welche drei großen Bestandteile eines Rechnersystems zeigen die Folien?",
          answer: "Anwendungssoftware, Systemsoftware und Hardware.",
          source: "01_rabs_intro-01.pdf, Folie 23"
        },
        {
          question: "Welche Ebenen liegen zwischen Anwendungsebene und Transistorebene?",
          answer: "Assemblerebene, Betriebssystem, Instruction Set Architecture, Mikroarchitektur und digital-logische Ebene.",
          source: "01_rabs_intro-01.pdf, Folie 25"
        },
        {
          question: "Was kennzeichnet eingebettete Systeme in den Folien?",
          answer: "Sie sind in größere technische Komponenten eingebettet, häufig zweckgebunden, interagieren meist nicht über Tastatur oder Touchscreen und sind hardwarenah.",
          source: "01_rabs_intro-01.pdf, Folie 8"
        }
      ],
      flashcards: [
        {
          front: "Rechnerarchitektur",
          back: "Eigenschaften und Verhalten eines Computers aus Sicht des Programmierers.",
          source: "01_rabs_intro-01.pdf, Folie 10"
        },
        {
          front: "Systemsoftware: Beispiele",
          back: "Compiler, Betriebssystem, Dateimanager.",
          source: "01_rabs_intro-01.pdf, Folie 23"
        },
        {
          front: "Eingebettetes System",
          back: "In größere technische Komponenten eingebettet, häufig zweckgebunden und hardwarenah.",
          source: "01_rabs_intro-01.pdf, Folie 8"
        },
        {
          front: "Klassifikation nach Rechenprinzip",
          back: "Von-Neumann, Harvard, Datenfluss, Reduktion, objektorientiert.",
          source: "01_rabs_intro-01.pdf, Folie 28"
        }
      ]
    },
    {
      id: "architektur-cpu",
      title: "Architektur, CPU & E/A",
      icon: "🖥️",
      cards: [
        {
          title: "Von-Neumann-Komponenten",
          body: "Die Von-Neumann-Architektur besteht aus ALU, Control Unit, Memory, I/O-Unit und Bus-System. Die ALU führt Rechenoperationen und logische Verknüpfungen aus, die Control Unit interpretiert Anweisungen und steuert die Befehlsabfolge.",
          tag: "def",
          source: "02_rabs_vna1.pdf, Folie 5"
        },
        {
          title: "Von-Neumann-Flaschenhals",
          body: "Befehle und Daten werden im Speicher gehalten. Die Verbindung und Datenübertragung zwischen CPU und Speicher über den Systembus wird zum Von-Neumann-Flaschenhals, weil jeglicher Datenverkehr von und zur CPU über den internen Bus läuft.",
          tag: "wichtig",
          source: "01_rabs_grundlagen.pdf, Folie 4"
        },
        {
          title: "Harvard-Architektur",
          body: "Die Harvard-Architektur trennt Befehls- und Datenspeicher logisch und physisch. Dadurch können Befehle und Daten gleichzeitig geladen beziehungsweise geschrieben werden.",
          tag: "def",
          source: "01_rabs_grundlagen.pdf, Folien 5-6"
        },
        {
          title: "Nachteile der Harvard-Architektur",
          body: "Freier Programmspeicher kann nicht für Daten genutzt werden, freier Datenspeicher nicht für Programme. Selbstmodifizierender Code ist nicht möglich. Moderne Prozessoren verwenden eine Mischform aus Harvard- und Von-Neumann-Architektur.",
          source: "01_rabs_grundlagen.pdf, Folie 6"
        },
        {
          title: "CPU und ihre Komponenten",
          body: "Die CPU führt Programme aus, deren Anweisungen im Hauptspeicher liegen. Zu ihren Komponenten gehören Steuerwerk, ALU, Register, Befehlszähler (PC) und Instruction Register (IR).",
          source: "02_rabs_vna1.pdf, Folien 13-14"
        },
        {
          title: "Fetch-Decode-Execute-Zyklus",
          body: "Der Zyklus lädt den nächsten Befehl in das Befehlsregister, erhöht den Programmzähler, bestimmt den Befehlstyp, lädt Operanden, führt den Befehl aus und beginnt danach erneut.",
          source: "01_rabs_grundlagen.pdf, Folie 19"
        },
        {
          title: "Pipeline, superskalar und Mehrkern",
          body: "Pipeline-Prozessoren besitzen getrennte Hol-, Dekodier- und Ausführungseinheiten und können mehrere Befehle parallel bearbeiten. Superskalare Prozessoren besitzen mehrere Ausführungseinheiten. Mehrkern-Prozessoren enthalten mehrere komplette Prozessoren.",
          source: "02_rabs_vna1.pdf, Folien 18-20"
        },
        {
          title: "Speicherhierarchie und Cache",
          body: "Speicher soll sehr schnell, sehr groß und billig sein; keine Technologie erfüllt alles zugleich. Caches speichern häufig benötigte Daten in schnellem Speicher. L1-Cache liegt typischerweise innerhalb der CPU, L2-Cache ist größer und langsamer.",
          source: "02_rabs_vna1.pdf, Folien 22-24"
        },
        {
          title: "Controller und E/A-Geräte",
          body: "Controller steuern Geräte weitgehend autonom, besitzen Register für Kommandos, Daten und Status und können Interrupts an die CPU senden. E/A-Geräte werden in zeichenorientierte und blockorientierte Geräte unterschieden.",
          source: "02_rabs_vna1.pdf, Folien 26-28"
        },
        {
          title: "Kernmodus, Benutzermodus und Interrupts",
          body: "CPUs besitzen Kernmodus und Benutzermodus; der Modus wird im Programmstatuswort durch ein Bit festgehalten. Privilegierte Befehle im Benutzermodus führen zu einer Exception. Interrupts reagieren auf externe asynchrone Ereignisse.",
          tag: "wichtig",
          source: "02_rabs_vna1.pdf, Folien 30-34"
        }
      ],
      questions: [
        {
          question: "Welche Komponenten nennt die Von-Neumann-Architektur?",
          answer: "ALU, Control Unit, Memory, I/O-Unit und Bus-System.",
          source: "02_rabs_vna1.pdf, Folie 5"
        },
        {
          question: "Was ist der Von-Neumann-Flaschenhals?",
          answer: "Der gesamte Datenverkehr von und zur CPU läuft über den internen Bus zwischen CPU und Speicher; dessen Transfergeschwindigkeit ist langsamer als die Verarbeitungsgeschwindigkeit der CPU.",
          source: "01_rabs_grundlagen.pdf, Folie 4"
        },
        {
          question: "Welche Idee verfolgt die Harvard-Architektur?",
          answer: "Sie trennt Befehls- und Datenspeicher logisch und physisch, sodass Befehle und Daten gleichzeitig geladen oder geschrieben werden können.",
          source: "01_rabs_grundlagen.pdf, Folien 5-6"
        },
        {
          question: "Wie läuft der Fetch-Decode-Execute-Zyklus ab?",
          answer: "Befehl laden, Programmzähler hochzählen, Befehlstyp bestimmen, Operanden laden, Befehl ausführen und von vorne beginnen.",
          source: "01_rabs_grundlagen.pdf, Folie 19"
        },
        {
          question: "Worin unterscheiden sich Kernmodus und Benutzermodus?",
          answer: "Im Kernmodus hat das Betriebssystem unbeschränkten Zugriff auf Rechnerkomponenten. Im Benutzermodus ist der Zugriff eingeschränkt, Speicher ist nur über Adressabbildung zugreifbar und privilegierte Befehle sind nicht erlaubt.",
          source: "02_rabs_vna1.pdf, Folie 30"
        },
        {
          question: "Was ist die Hauptanwendung von Interrupts laut Folien?",
          answer: "Ein-/Ausgabe; der Prozessor kann auf externe asynchrone Ereignisse reagieren und in eine Unterbrechungsbehandlungsroutine verzweigen.",
          source: "02_rabs_vna1.pdf, Folie 33"
        }
      ],
      flashcards: [
        {
          front: "ALU",
          back: "Arithmetic Logic Unit; führt Rechenoperationen und logische Verknüpfungen aus.",
          source: "02_rabs_vna1.pdf, Folie 5"
        },
        {
          front: "PC",
          back: "Program Counter beziehungsweise Befehlszähler.",
          source: "02_rabs_vna1.pdf, Folie 14"
        },
        {
          front: "Harvard-Architektur",
          back: "Logische und physische Trennung von Befehls- und Datenspeicher.",
          source: "01_rabs_grundlagen.pdf, Folie 5"
        },
        {
          front: "Exception",
          back: "Ausführung eines privilegierten Befehls im Benutzermodus führt zu einer Ausnahme.",
          source: "02_rabs_vna1.pdf, Folie 31"
        },
        {
          front: "Unterbrechungsvektor",
          back: "Tabelle von Adressen, über die Interrupts Behandlungsroutinen zugewiesen werden.",
          source: "02_rabs_vna1.pdf, Folie 34"
        }
      ]
    },
    {
      id: "betriebssystem-grundlagen",
      title: "Betriebssystem-Grundlagen",
      icon: "⚙️",
      cards: [
        {
          title: "Betriebssystem nach DIN 44300",
          body: "Ein Betriebssystem sind die Programme eines digitalen Rechensystems, die zusammen mit den Eigenschaften der Rechenanlage die Basis der möglichen Betriebsarten bilden und insbesondere die Abwicklung von Programmen steuern und überwachen.",
          tag: "def",
          source: "01_rabs_grundlagen-04.pdf, Folie 5"
        },
        {
          title: "Arten von Betriebssystemen",
          body: "Die Folien nennen unter anderem Mainframe-, Server-, Multiprozessor-, PC-, Smartphone-, eingebettete und Echtzeit-Betriebssysteme. Die Beispiele reichen von z/OS und BS2000 über Windows, Linux, iOS, Android, QNX, VxWorks bis RTOS.",
          source: "01_rabs_grundlagen-04.pdf, Folie 6"
        },
        {
          title: "Entwicklung: Stapelbetrieb",
          body: "In der zweiten Generation (1955-1965) stehen Transistoren und Stapelverarbeitung im Vordergrund. Jobs werden nacheinander verarbeitet; der Stapelbetrieb wird vom Betriebssystem verwaltet.",
          source: "01_rabs_grundlagen-04.pdf, Folie 10"
        },
        {
          title: "Entwicklung: Multiprogrammierung",
          body: "In der dritten Generation (1965-1980) treten integrierte Schaltkreise und Multiprogrammierung auf. OS/360 wird als erstes Betriebssystem mit Multiprogramming genannt; Mehrprogrammbetrieb verbessert die CPU-Nutzung, verlangt aber Betriebsmittelverwaltung und Schutz.",
          source: "01_rabs_grundlagen-04.pdf, Folie 11"
        },
        {
          title: "OS-Konzepte im Überblick",
          body: "Zu den Betriebssystemkonzepten zählen Prozesse, Adressräume, Dateisystem, Eingabe/Ausgabe, Schutz der Daten und Kommandozeilen-Interpreter.",
          source: "01_rabs_grundlagen-04.pdf, Folie 15"
        },
        {
          title: "Betriebssystemstruktur",
          body: "Ein Betriebssystem ist ein großes, komplexes Softwaresystem, modularisiert in Komponenten und Subsysteme. Der Kernel umfasst kritische Funktionen; Systemprogramme werden nach Bedarf geladen. Daemons erfüllen Service-Funktionen und werden durch Ereignisse aufgeweckt.",
          source: "01_rabs_grundlagen-04.pdf, Folie 16"
        },
        {
          title: "Monolithische Systeme",
          body: "Monolithische Betriebssysteme kapseln Betriebssystemdienste in einem großen Kern. Dienste werden im Systemmodus ausgeführt; der Systemcall entspricht bei prozedurorientierter Sicht einem Prozeduraufruf.",
          source: "01_rabs_grundlagen-04.pdf, Folien 17-19"
        },
        {
          title: "Mikrokern-Architektur",
          body: "Ziel ist die Minimierung der privilegiert ablaufenden Funktionalität. Betriebssystemkomponenten laufen als Server-Prozesse im nichtprivilegierten Modus und interagieren über Nachrichten. Nur der Mikrokern läuft im Systemmodus.",
          source: "01_rabs_grundlagen-05.pdf, Folien 4-6"
        },
        {
          title: "Virtuelle Maschinen",
          body: "Auf der Hardware läuft ein Basis-Betriebssystem beziehungsweise Virtual Machine Monitor. Darauf laufen virtuelle Maschinen in Form verschiedener Betriebssysteme; Isolation und Unabhängigkeit werden konsequent fortgeführt.",
          source: "01_rabs_grundlagen-05.pdf, Folien 7-8"
        },
        {
          title: "Aufgaben eines Betriebssystems",
          body: "Ein Betriebssystem leistet Erweiterung oder Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln. Beispiele sind Dateiabstraktion, faire Ressourcenzuteilung und Schutz zwischen Anwendungen.",
          tag: "wichtig",
          source: "01_rabs_grundlagen-05.pdf, Folien 9-16"
        },
        {
          title: "Starten des Computers",
          body: "Beim Start läuft das BIOS an, prüft Speicher und wichtige Geräte, durchsucht PCIe/PCI, bestimmt das Bootgerät, kopiert dessen ersten Sektor in den Speicher und lädt danach über Bootloader und Betriebssystem Gerätetreiber, Tabellen, Hintergrundprozesse und Login oder GUI.",
          source: "01_rabs_grundlagen-05.pdf, Folien 20-21"
        }
      ],
      questions: [
        {
          question: "Welche drei Aufgaben eines Betriebssystems nennt der Foliensatz?",
          answer: "Erweiterung/Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln.",
          source: "01_rabs_grundlagen-05.pdf, Folie 9"
        },
        {
          question: "Was ist der Unterschied zwischen monolithischem Kern und Mikrokern?",
          answer: "Beim monolithischen System sind Betriebssystemdienste in einem großen Kern gekapselt und laufen im Systemmodus. Beim Mikrokern läuft nur der Mikrokern im Systemmodus; andere Komponenten laufen als Server-Prozesse im nichtprivilegierten Modus.",
          source: "01_rabs_grundlagen-04.pdf, Folien 17-19; 01_rabs_grundlagen-05.pdf, Folien 4-6"
        },
        {
          question: "Welche Konzepte nennt der Überblick zu Betriebssystemen?",
          answer: "Prozesse, Adressräume, Dateisystem, Eingabe/Ausgabe, Schutz der Daten und Kommandozeilen-Interpreter.",
          source: "01_rabs_grundlagen-04.pdf, Folie 15"
        },
        {
          question: "Welche Rolle hat das BIOS beim Starten des Computers?",
          answer: "Es startet nach dem Einschalten, prüft Speicher und wichtige Geräte, durchsucht Bussysteme, bestimmt das Bootgerät und kopiert dessen ersten Sektor in den Speicher.",
          source: "01_rabs_grundlagen-05.pdf, Folie 20"
        },
        {
          question: "Was ist der Nachteil der Mikrokern-Architektur laut Folien?",
          answer: "Schlechtere Performance durch Nachrichtenaustausch anstatt Systemcalls.",
          source: "01_rabs_grundlagen-05.pdf, Folie 6"
        }
      ],
      flashcards: [
        {
          front: "Drei OS-Aufgaben",
          back: "Veredelung, Abstraktion, Betriebsmittelverwaltung.",
          source: "01_rabs_grundlagen-05.pdf, Folie 9"
        },
        {
          front: "Kernel",
          back: "Umfasst kritische Funktionen des Betriebssystems.",
          source: "01_rabs_grundlagen-04.pdf, Folie 16"
        },
        {
          front: "Daemon",
          back: "Hilfsprozess mit Service-Funktion, der durch Ereignisse aufgeweckt wird.",
          source: "01_rabs_grundlagen-04.pdf, Folie 16"
        },
        {
          front: "Mikrokern: Vorteil",
          back: "Deutlich weniger Source Lines of Code als monolithische Kernel.",
          source: "01_rabs_grundlagen-05.pdf, Folie 6"
        },
        {
          front: "Virtual Machine Monitor",
          back: "Basis-System auf der Hardware, auf dem virtuelle Maschinen als Betriebssysteme laufen.",
          source: "01_rabs_grundlagen-05.pdf, Folie 7"
        }
      ]
    },
    {
      id: "syscalls-schutz-shell",
      title: "Systemaufrufe, Schutz & Shell",
      icon: "🛡️",
      cards: [
        {
          title: "Systemaufrufe",
          body: "Systemaufrufe bilden die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem. Sie sind meist in Bibliotheksfunktionen gekapselt, hardwareabhängig und in der Regel durchnummeriert; die Nummer wird vor dem TRAP-Befehl in ein festes Register geschrieben.",
          tag: "def",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          title: "Ablauf eines Systemaufrufs",
          body: "Das Betriebssystem sichert zunächst den vollständigen Prozessorstatus in der Thread- beziehungsweise Prozesstabelle. Der aufrufende Thread kann blockiert werden; die Rückkehr aus dem Betriebssystem erfolgt über den Scheduler.",
          source: "04_rabs-os-konzepte.pdf, Folie 8"
        },
        {
          title: "Beispiel read()",
          body: "<code>read()</code> wird mit Dateihandler, Buffer und Anzahl der Zeichen parametrisiert. Die Funktion liefert die Zahl der tatsächlich gelesenen Zeichen zurück; im Fehlerfall wird der Wert auf <code>-1</code> gesetzt und sollte geprüft werden.",
          source: "04_rabs-os-konzepte.pdf, Folie 9"
        },
        {
          title: "Typische Systemaufrufe",
          body: "Zum Prozessmanagement gehören unter anderem <code>fork()</code>, <code>waitpid()</code>, <code>execve()</code> und <code>exit()</code>. Zum Dateimanagement gehören <code>open()</code>, <code>close()</code>, <code>read()</code>, <code>write()</code> und <code>lseek()</code>.",
          source: "04_rabs-os-konzepte.pdf, Folie 10"
        },
        {
          title: "Principle of Least Authority",
          body: "Programme, Benutzer und Systeme sollen nur so viele Privilegien bekommen, wie unbedingt notwendig ist, um ihre Jobs zu erledigen.",
          tag: "wichtig",
          source: "04_rabs-os-konzepte.pdf, Folie 21"
        },
        {
          title: "UNIX-Zugriffskontrolle",
          body: "UNIX führt Benutzer und Benutzergruppen ein; <code>root</code> ist Administrator. Prozesse und Dateien haben Eigentümer und Eigentümergruppe. Dateizugriff wird über 9 Rechtebits festgelegt: je 3 Bits für Eigentümer, Gruppe und alle anderen.",
          source: "04_rabs-os-konzepte.pdf, Folien 22-23"
        },
        {
          title: "ACLs und Capabilities",
          body: "UNIX und Windows nutzen eine Mischform aus ACLs und Capabilities. Rechte an Objekten werden über ACLs spezifiziert, die Prüfung erfolgt beim Öffnen; Datei- oder Geräte-Handles wirken anschließend als Capability.",
          source: "04_rabs-os-konzepte.pdf, Folie 26"
        },
        {
          title: "Textuelle Shell",
          body: "Eine textuelle Shell ist ein Command Line Interface. Sie ist komplexer als graphische Shells, aber zuverlässiger, erlaubt einfache Automatisierung mit Skripten oder Batch-Dateien und unterstützt sicheren Fernzugriff via SSH.",
          source: "04_rabs-os-konzepte.pdf, Folie 28"
        },
        {
          title: "Pipes und Umleitungen in der Shell",
          body: "Die Shell unterstützt Eingabe- und Ausgabeumleitung, Hintergrundausführung und Pipes. Mit Pipes dient die Ausgabe eines Prozesses als Eingabe des nächsten; die UNIX-Philosophie kombiniert viele kleine Kommandos über Pipes.",
          source: "04_rabs-os-konzepte.pdf, Folien 30-31"
        },
        {
          title: "Graphische Benutzungsschnittstellen",
          body: "Graphische Benutzungsschnittstellen nutzen visuelle Interaktion über Tastatur und Zeigegerät. Elemente sind Windows, Icons, Menus und Pointers. Sie sind intuitiver, bilden aber nicht alle Systemaufgaben ab und erschweren Automatisierung.",
          source: "04_rabs-os-konzepte.pdf, Folie 34"
        }
      ],
      questions: [
        {
          question: "Was sind Systemaufrufe?",
          answer: "Die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem; meist in Bibliotheksfunktionen gekapselt und hardwareabhängig.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          question: "Warum kehrt ein Systemaufruf nicht unbedingt sofort zum aufrufenden Thread zurück?",
          answer: "Weil der aufrufende Thread blockiert werden kann und die Rückkehr aus dem Betriebssystem über den Scheduler erfolgt, der den nächsten fortzuführenden Thread bestimmt.",
          source: "04_rabs-os-konzepte.pdf, Folie 8"
        },
        {
          question: "Wie funktionieren UNIX-Rechtebits grundsätzlich?",
          answer: "Es gibt je drei Bits für Eigentümer, Eigentümergruppe und alle anderen; literale Rechte sind r, w und x, oktal 4, 2 und 1.",
          source: "04_rabs-os-konzepte.pdf, Folien 22-23"
        },
        {
          question: "Was ist eine Pipe in der Shell?",
          answer: "Ein Mechanismus, bei dem die Ausgabe eines Prozesses als Eingabe des nächsten dient.",
          source: "04_rabs-os-konzepte.pdf, Folie 30"
        },
        {
          question: "Was bedeutet POLA?",
          answer: "Programme, Benutzer und Systeme erhalten nur so viele Privilegien, wie für ihre Aufgabe notwendig sind.",
          source: "04_rabs-os-konzepte.pdf, Folie 21"
        }
      ],
      flashcards: [
        {
          front: "System Call",
          back: "Schnittstelle zwischen Benutzerprogramm und Betriebssystem.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          front: "POLA",
          back: "Principle of Least Authority: nur notwendige Privilegien vergeben.",
          source: "04_rabs-os-konzepte.pdf, Folie 21"
        },
        {
          front: "UNIX-Rechte oktal",
          back: "Lesen = 4, Schreiben = 2, Ausführen = 1.",
          source: "04_rabs-os-konzepte.pdf, Folie 22"
        },
        {
          front: "Shell",
          back: "Kein Teil des Betriebssystems, nutzt aber dessen Eigenschaften.",
          source: "04_rabs-os-konzepte.pdf, Folie 28"
        },
        {
          front: "WIMP",
          back: "Windows, Icons, Menus, Pointers.",
          source: "04_rabs-os-konzepte.pdf, Folie 34"
        }
      ]
    },
    {
      id: "c-systemprogrammierung",
      title: "C & Systemprogrammierung",
      icon: "💻",
      cards: [
        {
          title: "C im Kontext von UNIX",
          body: "C entstand im Kontext von UNIX. Die Sprache ist laut Folien bis heute für Systemprogrammierung und maschinennahe Programmierung attraktiv; ihre Bedeutung für Anwendungsentwicklung ist dagegen stark zurückgegangen.",
          source: "3_rabs-c-intro.pdf, Folie 5"
        },
        {
          title: "C und Java im Vergleich",
          body: "C steht in den Folien für maschinennahe und prozedurale Programmierung, Quelltext-Kompatibilität und direkte Ausführung auf dem Betriebssystem. Java steht für Anwendungsprogrammierung, Objektorientierung, Bytecode-Kompatibilität und Ausführung auf einer JVM.",
          source: "3_rabs-c-intro.pdf, Folie 6"
        },
        {
          title: "Hello-World-Struktur",
          body: "Header Files ermöglichen den Zugriff auf Bibliotheksfunktionen. Ein C-Programm nutzt eine <code>main()</code>-Methode, Blöcke in geschweiften Klammern, Kommentare, <code>printf()</code>, Strings in Anführungszeichen und ein <code>return</code>-Statement.",
          source: "3_rabs-c-intro.pdf, Folie 7"
        },
        {
          title: "Variablen",
          body: "Eine Variable besteht aus Typ, Name und Wert. Durch Deklaration wird ihr Typ festgelegt und damit, wie sie im Speicher repräsentiert wird. Der Wert wird durch Zuweisungen verändert.",
          tag: "def",
          source: "3_rabs-c-intro.pdf, Folie 10"
        },
        {
          title: "Funktionen",
          body: "Eine Funktion ist ein benannter Code-Block mit Eingabeparametern und Rückgabewerten. In der Funktionsdefinition werden Name, Parameterliste und Rückgabetyp vereinbart.",
          tag: "def",
          source: "3_rabs-c-intro.pdf, Folie 14"
        },
        {
          title: "Pointer",
          body: "Pointer sind Variablen, die direkt Speicheradressen enthalten. Die Folien nennen Pointer als Konstrukt, das C für Systemprogrammierung attraktiv macht.",
          tag: "wichtig",
          source: "3_rabs-c-intro.pdf, Folie 16"
        },
        {
          title: "Array-Grenzen und Stack",
          body: "Im Beispiel werden zwei <code>char</code>-Arrays nebeneinander auf dem Stack angelegt. Beim Angriff wird über die Grenzen des Arrays hinausgeschrieben und der Inhalt von <code>password</code> überschrieben. C-Style-Arrays bieten nur teilweise Container-Abstraktion.",
          source: "3_rabs-c-intro.pdf, Folien 19-21"
        },
        {
          title: "Systemaufrufe in C",
          body: "Bei Systemprogrammierung werden durch Systemaufrufe Funktionen der Betriebssystem-API genutzt. Dafür sind Kontextwechsel zwischen User Mode und Kernel Mode notwendig; die Library kapselt den Systemaufruf.",
          source: "3_rabs-c-intro.pdf, Folie 23"
        },
        {
          title: "Fehlerbehandlung bei Systemaufrufen",
          body: "Die Fehlerbehandlung erfolgt über den Rückgabewert. Im Fehlerfall geben Systemaufrufe den Wert <code>-1</code> zurück. Weitere Informationen können aus der globalen Variable <code>errno</code> gelesen werden; dafür wird <code>&lt;errno.h&gt;</code> importiert.",
          source: "3_rabs-c-intro.pdf, Folie 24"
        }
      ],
      questions: [
        {
          question: "Warum ist C laut Folien für Systemprogrammierung attraktiv?",
          answer: "Wegen maschinennaher Programmierung im Kontext von UNIX; Pointer als direkte Speicheradress-Variablen sind dabei ein zentrales Konstrukt.",
          source: "3_rabs-c-intro.pdf, Folien 5 und 16"
        },
        {
          question: "Woraus besteht eine Variable in C?",
          answer: "Aus einem Typ, einem Namen und einem Wert.",
          source: "3_rabs-c-intro.pdf, Folie 10"
        },
        {
          question: "Was ist ein Pointer?",
          answer: "Eine Variable, die direkt eine Speicheradresse enthält.",
          source: "3_rabs-c-intro.pdf, Folie 16"
        },
        {
          question: "Was zeigt das Array-Beispiel zum Stack?",
          answer: "Dass fehlende Überwachung der Array-Grenzen dazu führen kann, dass über ein Array hinausgeschrieben und ein benachbartes Array überschrieben wird.",
          source: "3_rabs-c-intro.pdf, Folien 19-21"
        },
        {
          question: "Wie wird ein Fehler bei Systemaufrufen angezeigt?",
          answer: "Im Fehlerfall geben Systemaufrufe den Wert -1 zurück; Details können über die globale errno-Variable gelesen werden.",
          source: "3_rabs-c-intro.pdf, Folie 24"
        }
      ],
      flashcards: [
        {
          front: "C: Ausführung",
          back: "Wird direkt auf dem Betriebssystem ausgeführt.",
          source: "3_rabs-c-intro.pdf, Folie 6"
        },
        {
          front: "Variable",
          back: "Typ, Name und Wert.",
          source: "3_rabs-c-intro.pdf, Folie 10"
        },
        {
          front: "Pointer",
          back: "Variable, die direkt eine Speicheradresse enthält.",
          source: "3_rabs-c-intro.pdf, Folie 16"
        },
        {
          front: "Systemaufruf-Fehler",
          back: "Rückgabewert -1, Details über errno.",
          source: "3_rabs-c-intro.pdf, Folie 24"
        }
      ]
    },
    {
      id: "speicherverwaltung",
      title: "Speicherverwaltung",
      icon: "🧠",
      cards: [
        {
          title: "Ziele der Speicherverwaltung",
          body: "Speicherverwaltung soll effizienten Zugriff auf physikalischen Arbeitsspeicher bereitstellen, Adressräume von Betriebssystem und Prozessen gegen illegale Zugriffe schützen und eine Schnittstelle für gemeinsame Speichernutzung bieten.",
          tag: "wichtig",
          source: "02_rabs_speicher.pdf, Folie 5"
        },
        {
          title: "Probleme der Speicherverwaltung",
          body: "Das Betriebssystem muss Speicherbereiche an Prozesse zuteilen, genug Speicher finden, zusätzliche Speicheranforderungen behandeln, Programme trotz Adressen verschiebbar machen, Prozesse schützen, begrenzten Hauptspeicher verwalten und Transparenz für Anwendungen bieten.",
          source: "02_rabs_speicher.pdf, Folie 6"
        },
        {
          title: "Speicherhierarchie",
          body: "Der Prozessor greift direkt auf Register und internen Hauptspeicher zu. Registerzugriffe liegen innerhalb eines Taktzyklus, RAM-Zugriffe dauern länger, externe Speichermedien noch länger. Deshalb nutzt man eine Hierarchie verschieden schneller und verschieden großer Speicher.",
          source: "02_rabs_speicher.pdf, Folie 8"
        },
        {
          title: "Zeitliche und räumliche Lokalität",
          body: "Caching funktioniert, weil gut strukturierte Programme zuletzt verwendete Adressen wahrscheinlich erneut verwenden (zeitliche Lokalität) und häufig auf Adressen in der Nähe vorheriger Zugriffe zugreifen (räumliche Lokalität).",
          source: "02_rabs_speicher.pdf, Folie 9"
        },
        {
          title: "Prozessor-Caches",
          body: "L1-Cache speichert häufig benötigte Befehle und Daten. L2-Cache speichert Daten des RAM. L3-Cache wird bei Multicore-Prozessoren zur Sicherstellung des Cache-Kohärenz-Protokolls und zum Abgleich der Caches aller Kerne genutzt.",
          source: "02_rabs_speicher.pdf, Folie 11"
        },
        {
          title: "Cache-Hit und Cache-Miss",
          body: "Bei einem Cache-Hit befinden sich die Daten im Cache beziehungsweise auf der obersten Cache-Ebene. Bei einem Cache-Miss müssen Daten von einer unteren Speicherebene nachgeladen werden; Trefferzeit ist deutlich kleiner als Fehlschlagszeit.",
          tag: "def",
          source: "02_rabs_speicher.pdf, Folie 13"
        },
        {
          title: "MMU und Adressumsetzung",
          body: "Bei Mehrprogrammbetrieb schützt die MMU Betriebssystem und Programme voneinander und erlaubt das Laden an unterschiedlichen Adressen. Virtuelle Adressen werden durch Hardware-MMU auf physische Adressen umgesetzt, wobei Zugriffsrechte geprüft werden.",
          source: "02_rabs_speicher.pdf, Folie 19"
        },
        {
          title: "Adressraum",
          body: "Ein Adressraum ist die Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann. Jeder Prozess erhält einen eigenen Adressraum; eine reale Adresse ergibt sich in der einfachen Variante aus Basisadresse plus Adresse im Adressraum.",
          tag: "def",
          source: "02_rabs_speicher.pdf, Folie 20"
        },
        {
          title: "Basis- und Limit-Register",
          body: "Das Basis-Register hält die kleinste Adresse, auf die der Prozess Zugriff hat. Das Limit-Register enthält die Größe des Adressraums. Zugriffe außerhalb dieses Bereichs führen zu einem Ausnahmefehler beziehungsweise Trap.",
          source: "02_rabs_speicher.pdf, Folie 22"
        },
        {
          title: "Swapping",
          body: "Beim Swapping wird ein Prozess komplett in den Speicher geladen, kann eine Zeit laufen und wird dann komplett ausgelagert. Ein Teil der Festplatte dient dazu, gerade nicht ausgeführte Prozesse aus dem Hauptspeicher auszulagern.",
          source: "02_rabs_speicher.pdf, Folien 24-26"
        },
        {
          title: "Virtueller Speicher und Paging",
          body: "Virtueller Speicher bricht den Adressraum in Seiten auf. MMU und Betriebssystem bilden virtuelle auf physische Adressen ab. Paging teilt physischen Speicher in Frames und logischen Adressraum in gleich große Pages; die Seitentabelle enthält das Mapping und ein Present-/Absent-Bit.",
          tag: "wichtig",
          source: "02_rabs_speicher.pdf, Folien 28-33"
        },
        {
          title: "Page Fault",
          body: "Führt eine virtuelle Adresse auf eine ausgelagerte Seite, entsteht ein Seitenfehler. Das Betriebssystem lagert einen wenig benutzten Seitenrahmen aus, lädt die angeforderte Seite, aktualisiert die Seitentabelle und führt den auslösenden Befehl erneut aus.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          title: "Seitengröße und TLB",
          body: "Große Seiten bedeuten mehr Treffer pro Seitenaufruf und weniger Einlagerungen, aber mehr interne Fragmentierung. Kleine Seiten führen zu langen Seitentabellen. Der Translation Lookaside Buffer ist spezielle Hardwareunterstützung, im Prinzip ein Teil der MMU.",
          source: "02_rabs_speicher.pdf, Folie 35"
        },
        {
          title: "Windows-Speicherbereiche",
          body: "Die Windows-Beispiele nennen unter anderem für Hardware reservierten Speicher, verwendeten Speicher, geänderte Seiten, freien Speicher, Auslagerungsdatei, ausgelagerten Pool und nicht ausgelagerten Pool.",
          source: "02_rabs_speicher.pdf, Folien 38-46"
        }
      ],
      questions: [
        {
          question: "Welche drei Ziele hat Speicherverwaltung laut Folien?",
          answer: "Effizienter Zugriff auf physikalischen Arbeitsspeicher, Schutz der Adressräume gegen illegale Zugriffe und eine Schnittstelle für gemeinsame Speichernutzung.",
          source: "02_rabs_speicher.pdf, Folie 5"
        },
        {
          question: "Warum funktioniert Caching?",
          answer: "Wegen zeitlicher Lokalität und räumlicher Lokalität gut strukturierter Programme.",
          source: "02_rabs_speicher.pdf, Folie 9"
        },
        {
          question: "Was macht die MMU?",
          answer: "Sie setzt virtuelle Adressen auf physische Adressen um und prüft Zugriffsrechte.",
          source: "02_rabs_speicher.pdf, Folie 19"
        },
        {
          question: "Was passiert bei einem Page Fault?",
          answer: "Das Betriebssystem lädt die ausgelagerte Seite in den Speicher, aktualisiert die Seitentabelle und führt den auslösenden Befehl erneut aus; dafür kann ein wenig benutzter Seitenrahmen ausgelagert werden.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          question: "Welche Nachteile haben große beziehungsweise kleine Seiten?",
          answer: "Große Seiten verursachen mehr interne Fragmentierung; kleine Seiten führen zu langen Seitentabellen.",
          source: "02_rabs_speicher.pdf, Folie 35"
        }
      ],
      flashcards: [
        {
          front: "Cache-Hit",
          back: "Daten liegen im Cache beziehungsweise auf der obersten Cache-Ebene.",
          source: "02_rabs_speicher.pdf, Folie 13"
        },
        {
          front: "Cache-Miss",
          back: "Daten müssen von einer unteren Speicherebene nachgeladen werden.",
          source: "02_rabs_speicher.pdf, Folie 13"
        },
        {
          front: "Adressraum",
          back: "Menge der Adressen, die ein Prozess zur Speicheradressierung benutzen kann.",
          source: "02_rabs_speicher.pdf, Folie 20"
        },
        {
          front: "Swapping",
          back: "Prozess komplett einlagern, laufen lassen und wieder komplett auslagern.",
          source: "02_rabs_speicher.pdf, Folie 24"
        },
        {
          front: "Present-/Absent-Bit",
          back: "Seitentabelleneintrag zeigt, ob eine Seite im Speicher liegt oder ausgelagert ist.",
          source: "02_rabs_speicher.pdf, Folie 33"
        }
      ]
    },
    {
      id: "dateisysteme",
      title: "Dateien & Dateisysteme",
      icon: "🗂️",
      cards: [
        {
          title: "Datei-Konzept",
          body: "Eine Datei ist das Konzept zur dauerhaften, persistenten Speicherung von Daten, Informationen und Programmen auf Platten oder anderen externen Speichermedien. Sie abstrahiert physikalische Speichereigenschaften als logische Speichereinheit.",
          tag: "def",
          source: "03_rabs_dateisystem.pdf, Folie 4"
        },
        {
          title: "Speichermedien",
          body: "Festplatten erlauben blockorientierten und wahlfreien Zugriff. USB-Sticks und SSDs nutzen Flash-EEPROMs oder SDRAM, haben keine beweglichen Teile und kürzere Zugriffszeiten; Magnetband bietet nur sequenziellen Zugriff und dient heute vor allem Datenspeicherung und Archivierung.",
          source: "03_rabs_dateisystem.pdf, Folien 7-11"
        },
        {
          title: "Dateisysteme",
          body: "Dateisysteme speichern Daten und Programme persistent in Dateien. Sie sind eine Betriebssystemabstraktion zur Nutzung von Hintergrundspeichern und bestehen aus Dateien, Verzeichnissen und Partitionen.",
          source: "03_rabs_dateisystem.pdf, Folie 19"
        },
        {
          title: "Anforderungen an Dateisysteme",
          body: "Dateisysteme sollen Persistenz, flexible Benennung, mehrere Namen für eine Datei, geschützte oder gemeinsame Benutzung, verschiedene Zugriffsmuster und wenig Overhead für Verwaltungs- und Metadaten bieten.",
          source: "03_rabs_dateisystem.pdf, Folie 20"
        },
        {
          title: "Dateien als unstrukturierte Bytefolge",
          body: "Bei heutigen PC- und Server-Betriebssystemen sind Dateien meist unstrukturierte Folgen von Bytes; das Betriebssystem kennt die Struktur nicht. In Mainframe-Systemen können Dateien auch Datensätze fester Struktur mit Index enthalten.",
          source: "03_rabs_dateisystem.pdf, Folie 24"
        },
        {
          title: "Dateiattribute",
          body: "Dateiattribute sind Metadaten. Beispiele sind Name, Flags, interne ID, Typ, Location, Größe, Protection, Zeitpunkte des Erstellens, der letzten Veränderung und der letzten Verwendung sowie Owner.",
          source: "03_rabs_dateisystem.pdf, Folien 29-30"
        },
        {
          title: "Spezialdateien",
          body: "Periphere Geräte werden als Spezialdateien repräsentiert und können wie Dateien mit Lese- und Schreiboperationen angesprochen werden. Es gibt blockorientierte Spezialdateien und zeichenorientierte Spezialdateien.",
          source: "03_rabs_dateisystem.pdf, Folie 31"
        },
        {
          title: "Typische Dateioperationen",
          body: "Typische Operationen sind Create, Delete, Open, Close, Rename, Read, Write, Append, Seek sowie Get und Set Attributes.",
          source: "03_rabs_dateisystem.pdf, Folien 32-33"
        },
        {
          title: "Verzeichnisse und Pfadnamen",
          body: "Verzeichnisse organisieren Dateien hierarchisch, sind selbst spezielle Dateien und benennen Dateien über Pfadnamen. Absolute Pfadnamen beginnen beim Wurzelverzeichnis, relative beim aktuellen Arbeitsverzeichnis.",
          source: "03_rabs_dateisystem.pdf, Folie 36"
        },
        {
          title: "Links und Mounten",
          body: "Links erlauben, dass eine Datei oder ein Verzeichnis in mehr als einem Verzeichnis auftritt, physisch aber nur einmal vorhanden ist. Beim Mounten wird ein Dateisystem in den bestehenden UNIX-Dateibaum eingehängt.",
          source: "03_rabs_dateisystem.pdf, Folien 38-39"
        },
        {
          title: "Datenträgerorganisation",
          body: "Datenträger können in Partitionen eingeteilt werden; eine Partition wird als Folge logischer Blöcke betrachtet. Aufgaben sind Formatieren, Lesen und Schreiben von Blöcken, Verwaltung freier Blöcke und Verwaltung defekter Blöcke.",
          source: "03_rabs_dateisystem.pdf, Folien 42-43"
        },
        {
          title: "Speichern von Dateien auf Blöcken",
          body: "Für Dateien, die größer als ein Block sind, nennen die Folien kontinuierliche Speicherung, verkettete Speicherung und indizierte Speicherung. Kontinuierliche Speicherung ermöglicht schnellen Zugriff, führt aber zu Fragmentierung und Problemen bei wachsender Datei.",
          source: "03_rabs_dateisystem.pdf, Folien 44-47"
        },
        {
          title: "FAT und UNIX-Dateisystem",
          body: "VFAT/FAT32 nutzt einfache, unstrukturierte Bytefolgen und Laufwerksbuchstaben. UFS nutzt ebenfalls unstrukturierte Bytefolgen, aber UNIX-Verzeichnisse sind Knoten, Blätter sind Links, und ein Prozess hat ein Current Working Directory.",
          source: "03_rabs_dateisystem.pdf, Folien 50-52"
        },
        {
          title: "Backups",
          body: "Ein Komplett-Backup sichert alle Daten. Ein inkrementelles Backup sichert Änderungen ab einem Zeitpunkt, sodass der alte Stand aus Komplett-Backup und inkrementellen Backups wiederherstellbar ist. Ein differenzielles Backup sichert Änderungen bezogen auf das letzte Komplett-Backup.",
          source: "03_rabs_dateisystem.pdf, Folie 53"
        },
        {
          title: "3-2-1-Regel",
          body: "Die ideale Datensicherung besteht aus drei Kopien der Daten inklusive Original, auf mindestens zwei unterschiedlichen Datenträgern, wobei mindestens ein Backup außer Haus aufbewahrt wird.",
          tag: "wichtig",
          source: "03_rabs_dateisystem.pdf, Folie 54"
        }
      ],
      questions: [
        {
          question: "Was ist eine Datei laut Dateisystem-Folien?",
          answer: "Ein Konzept zur persistenten Speicherung von Daten, Informationen und Programmen auf externen Speichermedien.",
          source: "03_rabs_dateisystem.pdf, Folie 4"
        },
        {
          question: "Aus welchen Bestandteilen bestehen Dateisysteme?",
          answer: "Aus Dateien, Verzeichnissen/Katalogen und Partitionen.",
          source: "03_rabs_dateisystem.pdf, Folie 19"
        },
        {
          question: "Welche typischen Dateioperationen nennt die Vorlesung?",
          answer: "Create, Delete, Open, Close, Rename, Read, Write, Append, Seek sowie Get und Set Attributes.",
          source: "03_rabs_dateisystem.pdf, Folien 32-33"
        },
        {
          question: "Was ist Mounten im UNIX-Dateibaum?",
          answer: "Ein anderes Dateisystem wird mit dem Befehl mount in das bestehende System hineinmontiert; das root file system bildet die Wurzel des Gesamtsystems.",
          source: "03_rabs_dateisystem.pdf, Folie 39"
        },
        {
          question: "Was sagt die 3-2-1-Regel für Backups?",
          answer: "Drei Kopien inklusive Original, auf mindestens zwei unterschiedlichen Datenträgern, davon mindestens ein Backup außer Haus.",
          source: "03_rabs_dateisystem.pdf, Folie 54"
        }
      ],
      flashcards: [
        {
          front: "Dateisystem",
          back: "OS-Abstraktion zur Nutzung von Hintergrundspeichern, bestehend aus Dateien, Verzeichnissen und Partitionen.",
          source: "03_rabs_dateisystem.pdf, Folie 19"
        },
        {
          front: "Absolute Pfadnamen",
          back: "Beginnen beim Wurzelverzeichnis.",
          source: "03_rabs_dateisystem.pdf, Folie 36"
        },
        {
          front: "Verkettete Speicherung",
          back: "Blöcke der Datei sind durch Adressen der Folgeblöcke verkettet.",
          source: "03_rabs_dateisystem.pdf, Folie 46"
        },
        {
          front: "FAT",
          back: "Variante verketteter Speicherung mit Verkettung in speziellen Plattenblöcken.",
          source: "03_rabs_dateisystem.pdf, Folie 47"
        },
        {
          front: "Komplett-Backup",
          back: "Sichert alle Daten, also die komplette Platte.",
          source: "03_rabs_dateisystem.pdf, Folie 53"
        }
      ]
    },
    {
      id: "prozesse",
      title: "Prozesse",
      icon: "🔄",
      cards: [
        {
          title: "Motivation Multiprogrammbetrieb",
          body: "Im Multiprogrammbetrieb laufen mehrere Programme quasi-parallel. Zu jedem Zeitpunkt läuft nur ein Programm auf der CPU; die CPU wechselt nach etwa 10 bis 100 Millisekunden Rechenzeit von Programm zu Programm.",
          source: "05_rabs-process.pdf, Folie 4"
        },
        {
          title: "Prozessverwaltung",
          body: "Die Folien nennen Konzepte zur Virtualisierung der CPU, prozessindividuelle Adressräume, Datenstrukturen wie Deskriptoren, Tabellen und Warteschlangen sowie Operationen wie Scheduling und Prozesserzeugung.",
          source: "05_rabs-process.pdf, Folie 6"
        },
        {
          title: "Prozessdefinition",
          body: "Ein Prozess ist ein Programm in Ausführung mit zusätzlicher Kontextinformation. Jeder Prozess besitzt einen eigenen Adressraum und durchläuft Zustände wie rechnend, wartend auf E/A oder wartend auf CPU.",
          tag: "def",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          title: "Programm versus Prozess",
          body: "Ein Programm ist eine Folge von Anweisungen und zugehörigen Daten. Ein Prozess ist ein Programm in Ausführung mit aktuellen Daten wie Programmzähler, Registerinhalten und Variablenbelegung.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          title: "Prozesskontrollblock",
          body: "Der PCB beschreibt den Kontext eines Prozesses. Er enthält unter anderem Prozess-ID, Benutzer und Gruppen, Prozesszustand, Warteereignis, Scheduling-Informationen, Registerinhalte, Accounting-Information, Prozesshierarchie sowie Speicher- und Dateiverwaltungsinformationen.",
          tag: "wichtig",
          source: "05_rabs-process.pdf, Folie 12"
        },
        {
          title: "Prozesserzeugung allgemein",
          body: "Prozesse entstehen bei Systeminitialisierung, durch Systemaufruf eines anderen Prozesses, durch Benutzeranfrage oder bei Initiierung einer Stapelverarbeitung.",
          source: "05_rabs-process.pdf, Folie 17"
        },
        {
          title: "fork unter UNIX",
          body: "<code>fork()</code> erzeugt einen exakten Klon des aufrufenden Prozesses. Eltern- und Kindprozess laufen danach unabhängig weiter; der Kindprozess erbt Speicherabbild, offene Dateien und weitere Ressourcen.",
          source: "05_rabs-process.pdf, Folie 18"
        },
        {
          title: "exec unter UNIX",
          body: "Um das Speicherabbild zu ändern und ein neues Programm auszuführen, muss der Kindprozess zum Beispiel <code>execl()</code> ausführen. Dadurch wird der aktuelle Programmcode durch eine Binärdatei ersetzt; es entsteht kein neuer Prozess.",
          source: "05_rabs-process.pdf, Folie 21"
        },
        {
          title: "CreateProcess unter Windows",
          body: "<code>CreateProcess</code> behandelt Prozesserzeugung und Laden des korrekten Programms zusammen. Es erzeugt keine Prozesshierarchie und keine Vater-Kind-Relation, sondern legt einen neuen Adressraum an.",
          source: "05_rabs-process.pdf, Folie 22"
        },
        {
          title: "Prozesszustände",
          body: "Die Folien nennen erzeugt, bereit, laufend, blockiert und beendet. Blockiert bedeutet, dass ein Prozess auf ein Ereignis wartet, etwa E/A-Fertigstellung, Betriebsmittelzuteilung oder Nachricht.",
          tag: "def",
          source: "05_rabs-process.pdf, Folie 26"
        },
        {
          title: "Prozessumschaltung",
          body: "Context Switch bedeutet Wechsel von der Ausführung eines Prozesses zu einem anderen. Der Scheduler teilt Rechenzeit zu, der Dispatcher führt den Wechsel aus.",
          source: "05_rabs-process.pdf, Folie 29"
        },
        {
          title: "Ablauf des Context Switch",
          body: "Der gesamte Prozesszustand wird gespeichert: Register inklusive Programmzähler im PCB des aktiven Prozesses. Danach wird ein neuer Prozess ausgewählt, seine Ablaufumgebung hergestellt und seine gesicherten Register geladen.",
          source: "05_rabs-process.pdf, Folie 32"
        },
        {
          title: "Prozess-Warteschlangen",
          body: "Das Betriebssystem führt Ready-Queues für rechenbereite Prozesse und Warteschlangen für verschiedene Ereignisse. Blockierte Prozesse liegen typischerweise in eigenen Warteschlangen für E/A-Geräte wie Platte oder Terminal.",
          source: "05_rabs-process.pdf, Folie 37"
        },
        {
          title: "Beendigung von Prozessen",
          body: "Prozesse können normal freiwillig enden, freiwillig wegen Fehlern enden, unfreiwillig wegen schwerwiegender Fehler beendet werden oder durch einen anderen Prozess beendet werden, sofern dieser die Rechte besitzt.",
          source: "05_rabs-process.pdf, Folien 39-41"
        },
        {
          title: "UNIX-Prozesskommandos",
          body: "Die Folien nennen unter anderem <code>ps</code>, <code>top</code>, <code>pstree</code>, <code>pgrep</code>, <code>nice</code> und <code>kill</code> zur Prozessbeobachtung und -verwaltung.",
          source: "05_rabs-process.pdf, Folie 43"
        }
      ],
      questions: [
        {
          question: "Wie definiert die Vorlesung einen Prozess?",
          answer: "Als Programm in Ausführung mit zusätzlicher Kontextinformation; jeder Prozess besitzt einen eigenen Adressraum.",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          question: "Worin unterscheiden sich Programm und Prozess?",
          answer: "Ein Programm ist eine Folge von Anweisungen und Daten. Ein Prozess ist dieses Programm in Ausführung mit aktuellen Daten wie Programmzähler, Registerinhalten und Variablenbelegung.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          question: "Was enthält ein Prozesskontrollblock?",
          answer: "Unter anderem Prozess-ID, Benutzer- und Gruppeninformationen, Zustand, Warteereignis, Scheduling-Informationen, Registerinhalte, Accounting, Prozesshierarchie sowie Speicher- und Dateiverwaltungsinformationen.",
          source: "05_rabs-process.pdf, Folie 12"
        },
        {
          question: "Was macht fork() unter UNIX?",
          answer: "Es erzeugt einen exakten Klon des aufrufenden Prozesses; Kind und Elternprozess laufen danach unabhängig weiter.",
          source: "05_rabs-process.pdf, Folie 18"
        },
        {
          question: "Was passiert bei einem Context Switch?",
          answer: "Der Zustand des laufenden Prozesses wird im PCB gespeichert, ein neuer Prozess wird ausgewählt, seine Ablaufumgebung hergestellt und seine Register werden geladen.",
          source: "05_rabs-process.pdf, Folie 32"
        }
      ],
      flashcards: [
        {
          front: "Prozess",
          back: "Programm in Ausführung mit zusätzlicher Kontextinformation.",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          front: "PCB",
          back: "Process Control Block; beschreibt den Kontext eines Prozesses.",
          source: "05_rabs-process.pdf, Folie 12"
        },
        {
          front: "fork()",
          back: "Erzeugt einen exakten Klon des aufrufenden Prozesses.",
          source: "05_rabs-process.pdf, Folie 18"
        },
        {
          front: "exec",
          back: "Ersetzt den aktuellen Programmcode durch eine Binärdatei, ohne neuen Prozess zu erzeugen.",
          source: "05_rabs-process.pdf, Folie 21"
        },
        {
          front: "Dispatcher",
          back: "Führt den Prozesswechsel durch.",
          source: "05_rabs-process.pdf, Folie 29"
        }
      ]
    },
    {
      id: "threads",
      title: "Threads",
      icon: "🧵",
      cards: [
        {
          title: "Threaddefinition",
          body: "Threads sind parallele Kontrollflüsse innerhalb eines Prozesses. Sie sind nicht voneinander abgeschottet, weil sie gemeinsame Ressourcen, insbesondere Speicher, teilen. Ein Prozessende beendet auch alle Threads.",
          tag: "def",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          title: "Gründe für Threads",
          body: "Threads erlauben parallele Aktivitäten in einem Adressraum, sind leichter zu erzeugen und zu zerstören als Prozesse, können bei nebenläufiger Ein-/Ausgabe Performance bringen und auf mehrere Prozessoren verteilt echte Parallelität ermöglichen.",
          source: "06_rabs-threads.pdf, Folie 7"
        },
        {
          title: "Vorteile von Threads",
          body: "Threads vereinfachen bei quasi-parallelen Ausführungssträngen das Programmiermodell, ermöglichen sehr schnellen Datenaustausch durch gemeinsame Daten und sind schneller zu erzeugen und zu terminieren als Prozesse.",
          source: "06_rabs-threads.pdf, Folie 8"
        },
        {
          title: "Webserver-Beispiel",
          body: "Im Webserver-Beispiel nimmt ein Dispatcher-Thread Anfragen aus dem Netz an und leitet sie an Worker-Threads weiter. Ein Worker kann bei Plattenzugriff blockieren, während andere Threads weiterarbeiten.",
          source: "06_rabs-threads.pdf, Folie 10"
        },
        {
          title: "Thread-Charakteristika",
          body: "Ein Thread besitzt eigene Identität, eigenen Programmzähler, eigenes Registerset, eigenen Stack und eigenen Zustand wie blockiert, rechenbereit oder rechnend.",
          source: "06_rabs-threads.pdf, Folie 12"
        },
        {
          title: "Threads und Adressräume",
          body: "Threads desselben Prozesses teilen den gemeinsamen Prozessadressraum und Ressourcen. Jeder Thread kann auf Speicheradressen des Prozesses und anderer Threads dieses Prozesses zugreifen.",
          tag: "wichtig",
          source: "06_rabs-threads.pdf, Folie 15"
        },
        {
          title: "Multithreading und Hyperthreading",
          body: "Multithreading bezeichnet gleichzeitiges Abarbeiten mehrerer Threads innerhalb eines Prozesses oder Tasks. Hyperthreading ist hardwareseitiges Multithreading in Intel-Prozessoren, bei dem ein Prozessorkern zwei Threads parallel bearbeiten kann.",
          source: "06_rabs-threads.pdf, Folien 17-18"
        },
        {
          title: "Thread-Bibliotheksfunktionen",
          body: "Die Folien nennen <code>thread_create</code>, <code>thread_exit</code>, <code>thread_join</code> und <code>thread_yield</code>. <code>thread_yield</code> erlaubt freiwillige Abgabe von Rechenzeit an einen anderen Thread.",
          source: "06_rabs-threads.pdf, Folie 19"
        },
        {
          title: "User-Level-Threads",
          body: "User-Level-Threads werden ohne Wissen des Betriebssystems erzeugt, synchronisiert und vernichtet. Der Kernel verwaltet nur Prozesse; die Threading-Bibliothek verwaltet pro Prozess eine Threadtabelle und bietet Scheduling für Threads des Prozesses.",
          source: "06_rabs-threads.pdf, Folie 22"
        },
        {
          title: "Probleme und Vorteile von User-Level-Threads",
          body: "Vorteile sind keine notwendige Betriebssystemunterstützung, schnelle Threaderzeugung und schnelle Threadwechsel ohne Kerneintritt. Nachteile sind blockierende Systemaufrufe, die alle Threads eines Prozesses blockieren, und freiwillige CPU-Abgabe.",
          source: "06_rabs-threads.pdf, Folien 23-25"
        },
        {
          title: "Kernel-Level-Threads",
          body: "Beim Kernel-Level-Modell verwaltet der Kernel Threads in Thread-Tabellen; Threadoperationen sind Kernel-Aufrufe. Vorteile sind andere Threads desselben Prozesses bei Blockierung und echte Parallelität auf Mehrprozessorsystemen. Nachteil ist höherer Overhead.",
          source: "06_rabs-threads.pdf, Folien 26-28"
        },
        {
          title: "Threads in Linux",
          body: "Ab Kernel 2.0 gab es die Bibliothek LinuxThreads. Ab 2002 entwickelte sich die Native POSIX Thread Library (NPTL), voll POSIX-kompatibel, ohne Limitierung der Thread-Anzahl und mit 1:1-Implementierung.",
          source: "06_rabs-threads.pdf, Folie 35"
        }
      ],
      questions: [
        {
          question: "Was ist ein Thread?",
          answer: "Ein paralleler Kontrollfluss innerhalb eines Prozesses, der gemeinsame Ressourcen, insbesondere Speicher, mit anderen Threads des Prozesses teilt.",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          question: "Welche eigenen Bestandteile hat ein Thread?",
          answer: "Thread-ID, Programmzähler, Registerset, Stack und Zustand.",
          source: "06_rabs-threads.pdf, Folie 12"
        },
        {
          question: "Was ist der zentrale Nachteil von User-Level-Threads bei blockierenden Systemaufrufen?",
          answer: "Ein blockierender Systemaufruf blockiert alle User-Level-Threads des Prozesses.",
          source: "06_rabs-threads.pdf, Folie 23"
        },
        {
          question: "Was ist der Vorteil von Kernel-Level-Threads bei Blockierung?",
          answer: "Wenn ein Thread blockiert, kann das Betriebssystem einen anderen Thread desselben Prozesses auswählen.",
          source: "06_rabs-threads.pdf, Folie 28"
        },
        {
          question: "Was bedeutet 1:1-Implementierung bei Threads?",
          answer: "Jedem Benutzer-Thread ist genau eine Kernel-Aktivität beziehungsweise ein Kernel-Thread zugeordnet.",
          source: "06_rabs-threads.pdf, Folien 26 und 35"
        }
      ],
      flashcards: [
        {
          front: "Thread",
          back: "Paralleler Kontrollfluss innerhalb eines Prozesses.",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          front: "Thread_create",
          back: "Start-Thread kann neue Threads erzeugen.",
          source: "06_rabs-threads.pdf, Folie 19"
        },
        {
          front: "User-Level-Threads",
          back: "Kernel weiß nichts von ihnen; Threading-Bibliothek verwaltet sie.",
          source: "06_rabs-threads.pdf, Folie 22"
        },
        {
          front: "Kernel-Level-Threads",
          back: "Kernel verwaltet Threads, Operationen sind Kernel-Aufrufe.",
          source: "06_rabs-threads.pdf, Folie 26"
        },
        {
          front: "NPTL",
          back: "Native POSIX Thread Library, 1:1-Implementierung unter Linux.",
          source: "06_rabs-threads.pdf, Folie 35"
        }
      ]
    },
    {
      id: "scheduling",
      title: "Scheduling",
      icon: "⏱️",
      cards: [
        {
          title: "Scheduling",
          body: "Scheduling ist die zeitliche Zuordnung von Aktivitäten zu Ressourcen. Im Betriebssystembereich ist meist die Zuteilung von CPU-Ressourcen gemeint; die Scheduling-Strategie kann die Leistung eines Rechnersystems beträchtlich beeinflussen.",
          tag: "def",
          source: "07_rabs-scheduling.pdf, Folie 5"
        },
        {
          title: "Scheduler und Dispatcher",
          body: "Der Scheduler ist für die Prozessauswahl verantwortlich. Der Dispatcher führt den Prozesskontextwechsel durch, entzieht dem aktuellen Prozess die CPU und teilt sie dem ausgewählten Prozess zu.",
          source: "07_rabs-scheduling.pdf, Folien 6 und 8"
        },
        {
          title: "Scheduling-Kriterien",
          body: "Kriterien sind hohe Effizienz, geringe Antwortzeit, hoher Durchsatz, Fairness, Pünktlichkeit, Prioritäten und gleichmäßige Ressourcenauslastung. Keine Scheduling-Strategie ist für jedes System optimal.",
          source: "07_rabs-scheduling.pdf, Folie 9"
        },
        {
          title: "Ziele nach Systemtyp",
          body: "Alle Systeme verlangen Fairness, Policy Enforcement und Balance. Stapelverarbeitung priorisiert Durchsatz, Turnaround-Zeit und CPU-Belegung. Interaktive Systeme priorisieren Antwortzeit und Proportionalität. Echtzeitsysteme priorisieren Deadline und vorhersagbares Verhalten.",
          source: "07_rabs-scheduling.pdf, Folie 10"
        },
        {
          title: "Nicht-präemptiv und präemptiv",
          body: "Nicht-präemptives Scheduling lässt einen zugewiesenen Prozess bis zur Fertigstellung oder freiwilligen Abgabe laufen. Präemptives Scheduling kann einem Prozess die CPU vor seiner Fertigstellung entziehen, verursacht aber höheren Overhead.",
          tag: "wichtig",
          source: "07_rabs-scheduling.pdf, Folien 11-12"
        },
        {
          title: "FCFS",
          body: "First Come First Serve beziehungsweise FIFO arbeitet in Ankunftsreihenfolge. Die Folien nutzen FCFS als einen der grundlegenden Scheduling-Algorithmen im Vergleich.",
          source: "07_rabs-scheduling.pdf, Folien 13-18"
        },
        {
          title: "SJF",
          body: "Shortest Job First wählt den Prozess mit der kürzesten Bedienzeit bis zum Ende oder zur freiwilligen Aufgabe. SJF ist nicht-unterbrechend, optimal bei gleichzeitig verfügbaren Aufträgen, benötigt aber Kenntnis der Bedienzeit und kann längere Prozesse verhungern lassen.",
          source: "07_rabs-scheduling.pdf, Folie 19"
        },
        {
          title: "Round Robin",
          body: "Round Robin bearbeitet Prozesse in Ankunftsreihenfolge. Nach Ablauf eines festgesetzten Quantums wird verdrängt; neue und verdrängte Prozesse gehen ans Ende der Warteschlange. RR ist präemptiv und eignet sich für interaktive Systeme.",
          source: "07_rabs-scheduling.pdf, Folie 22"
        },
        {
          title: "Zeitquantum bei Round Robin",
          body: "Ein sinnvolles Zeitquantum ist entscheidend: Ist es zu kurz, entstehen viele Prozesswechsel und hoher Overhead. Ist es zu lang, geht Gleichzeitigkeit verloren und das System hängt oder ruckelt.",
          source: "07_rabs-scheduling.pdf, Folie 23"
        },
        {
          title: "Priority Scheduling",
          body: "Nicht-präemptives Priority Scheduling ordnet Neuankömmlinge nach Priorität in die Bereitliste ein; der Prozessorbesitz bleibt bis Ende oder freiwilliger Aufgabe. Präemptives Priority Scheduling verdrängt den laufenden Prozess, wenn ein Neuankömmling höhere Priorität hat.",
          source: "07_rabs-scheduling.pdf, Folien 29 und 32"
        },
        {
          title: "Multilevel-Priority-Queues",
          body: "MPQ gruppiert Prozesse in Prioritätsklassen und nutzt pro Klasse eine eigene Bereitliste. In den Bereitlisten können unterschiedliche Algorithmen genutzt werden; Round Robin ist verbreitet. Niedrige Prioritäten laufen erst, wenn höhere Queues leer sind.",
          source: "07_rabs-scheduling.pdf, Folie 35"
        },
        {
          title: "Echtzeit und RMS/EDF",
          body: "Harte Echtzeit verlangt feste Deadlines, weiche Echtzeit soll Fristen einhalten. RMS ist prioritätsbasiert für unterbrechbare periodische Jobs. EDF sortiert Prozesse nach der kürzesten Deadline und kann einen laufenden Prozess bei kürzerer neuer Deadline unterbrechen.",
          source: "07_rabs-scheduling.pdf, Folien 38-44"
        },
        {
          title: "Strategie und Mechanismus",
          body: "Die Zusammenfassung trennt Strategie und Mechanismus: Strategie entscheidet prinzipiell, welcher Prozess wann die CPU nutzen darf; Mechanismus beschreibt, wie diese Strategie durchgesetzt wird.",
          source: "07_rabs-scheduling.pdf, Folie 47"
        }
      ],
      questions: [
        {
          question: "Was bedeutet Scheduling im Betriebssystemkontext?",
          answer: "Die zeitliche Zuordnung von CPU-Ressourcen zu Prozessen beziehungsweise Aktivitäten.",
          source: "07_rabs-scheduling.pdf, Folie 5"
        },
        {
          question: "Was ist der Unterschied zwischen Scheduler und Dispatcher?",
          answer: "Der Scheduler wählt den Prozess aus; der Dispatcher führt den Prozesskontextwechsel durch.",
          source: "07_rabs-scheduling.pdf, Folien 6 und 8"
        },
        {
          question: "Was unterscheidet präemptives von nicht-präemptivem Scheduling?",
          answer: "Beim präemptiven Scheduling kann einem Prozess die CPU vor Fertigstellung entzogen werden; beim nicht-präemptiven behält er sie bis Fertigstellung oder freiwilliger Abgabe.",
          source: "07_rabs-scheduling.pdf, Folien 11-12"
        },
        {
          question: "Warum ist das Zeitquantum bei Round Robin wichtig?",
          answer: "Zu kurze Quanten erzeugen viele Prozesswechsel und Overhead; zu lange Quanten lassen Gleichzeitigkeit verloren gehen.",
          source: "07_rabs-scheduling.pdf, Folie 23"
        },
        {
          question: "Wie arbeitet Earliest Deadline First?",
          answer: "Prozesse kündigen Präsenz und Deadline an; der Scheduler sortiert nach kürzester Deadline und unterbricht laufende Prozesse, wenn ein neuer Prozess mit kürzerer Deadline auftaucht.",
          source: "07_rabs-scheduling.pdf, Folie 44"
        }
      ],
      flashcards: [
        {
          front: "Scheduler",
          back: "Komponente zur Prozessauswahl.",
          source: "07_rabs-scheduling.pdf, Folie 6"
        },
        {
          front: "Dispatcher",
          back: "Führt den Prozesskontextwechsel durch.",
          source: "07_rabs-scheduling.pdf, Folie 8"
        },
        {
          front: "SJF",
          back: "Shortest Job First: kürzeste Bedienzeit zuerst.",
          source: "07_rabs-scheduling.pdf, Folie 19"
        },
        {
          front: "Round Robin",
          back: "Präemptives Scheduling mit festem Zeitquantum.",
          source: "07_rabs-scheduling.pdf, Folie 22"
        },
        {
          front: "EDF",
          back: "Earliest Deadline First: kürzeste Deadline zuerst.",
          source: "07_rabs-scheduling.pdf, Folie 44"
        }
      ]
    },
    {
      id: "synchronisation",
      title: "Synchronisation",
      icon: "🔐",
      cards: [
        {
          title: "Prozessinteraktion",
          body: "Prozesse als Teile komplexer Programmsysteme müssen Daten austauschen, sich aufrufen, aufeinander warten, sich auslösen und sich abstimmen. Operationen zur Prozessinteraktion sind neben Prozessverwaltung ein wesentlicher Aufgabenbereich eines Betriebssystemkerns.",
          source: "08_rabs-synchro-1.pdf, Folien 4-6"
        },
        {
          title: "Zeitlicher und funktionaler Aspekt",
          body: "Prozessinteraktion besitzt einen zeitlichen Aspekt, nämlich Ablaufabstimmung beziehungsweise Koordination und Synchronisation, und einen funktionalen Aspekt, nämlich Informationsaustausch beziehungsweise Kommunikation und Kooperation.",
          source: "08_rabs-synchro-1.pdf, Folie 7"
        },
        {
          title: "Nebenläufigkeit",
          body: "Mehrere Abläufe heißen nebenläufig, wenn sie parallel oder quasi-parallel ausgeführt werden und inhaltlich zusammenwirken, also voneinander abhängig sind und sich gegenseitig beeinflussen können: Nebenläufigkeit = Parallelität + Abhängigkeit.",
          tag: "def",
          source: "08_rabs-synchro-1.pdf, Folien 12-13"
        },
        {
          title: "Zentrale Konzepte der Nebenläufigkeit",
          body: "Zentrale Konzepte sind Kommunikation zwischen Prozessen, gemeinsame Nutzung von Ressourcen, Wettbewerb um Ressourcen, Synchronisierung der Aktivitäten mehrerer Prozesse und Zuteilung von Prozessorzeit.",
          source: "08_rabs-synchro-1.pdf, Folie 14"
        },
        {
          title: "Gemeinsame Ressourcen",
          body: "Nebenläufige Prozesse können sich über gemeinsamen Adressbereich oder gemeinsame Ressourcen wie Dateien und Geräte beeinflussen. Dateninkonsistenzen können entstehen; Ergebnisse können von der Ausführungsreihenfolge abhängen.",
          tag: "wichtig",
          source: "08_rabs-synchro-1.pdf, Folie 15"
        },
        {
          title: "Atomare Operationen und DMA",
          body: "Im Mehrprozessorsystem bietet RAM über den Bus atomare Lese-/Schreiboperationen an. DMA-fähige Geräte zerlegen Kopiervorgänge in kleine Teile; für jeden Teil erhält das Gerät den Bus atomar, damit Wartezeiten anderer Geräte und CPUs nicht zu lang werden.",
          source: "08_rabs-synchro-1.pdf, Folien 17-18"
        },
        {
          title: "Allgemeine Bemerkung zur Fehlersuche",
          body: "Threads können sich wegen Pausen überholen und unterschiedliche Geschwindigkeiten haben. Gibt es eine einzige Konstellation, die zu einem Fehler führt, ist die Software fehlerhaft, selbst wenn die Wahrscheinlichkeit minimal ist.",
          source: "08_rabs-synchro-1.pdf, Folie 19"
        },
        {
          title: "Mutual-Exclusion-Problem",
          body: "Das Mutual-Exclusion-Problem fordert die Garantie, dass exklusiver Zugriff auf eine gemeinsam genutzte Ressource sichergestellt wird. Zugriffscode heißt kritischer Abschnitt; Ziel ist die Vermeidung von Race Conditions durch Synchronisation.",
          tag: "def",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          title: "Race Condition",
          body: "Eine Race Condition ist eine Situation, in der mehrere Prozesse konkurrierend auf gemeinsame Daten zugreifen und mindestens einer sie manipuliert. Der letztendliche Wert hängt von der Reihenfolge der Zugriffe ab und kann inkorrekt sein.",
          tag: "wichtig",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          title: "Ziel der Synchronisation",
          body: "Synchronisation bringt Aktivitäten verschiedener nebenläufiger Prozesse in eine Reihenfolge. Durch wechselseitigen Ausschluss wird Zugriff auf gemeinsam benutzte Betriebsmittel so abgestimmt, dass Datenkonsistenz und Korrektheit erreicht werden.",
          source: "08_rabs-synchro-1.pdf, Folie 33"
        },
        {
          title: "Kritischer Abschnitt",
          body: "Ein kritischer Abschnitt ist ein Programmabschnitt, der Zugriffe auf ein gemeinsam genutztes Objekt enthält. Zur Vermeidung von Inkonsistenzen muss er geschützt werden; zu jeder Zeit darf nur ein Prozess die Aktivität ausführen.",
          tag: "def",
          source: "08_rabs-synchro-1.pdf, Folie 34"
        },
        {
          title: "Anforderungen an wechselseitigen Ausschluss",
          body: "Die Lösung darf keine Annahmen über Geschwindigkeit oder CPU-Anzahl machen. Sie muss Mutual Exclusion, Progress ohne Deadlock, Bounded Waiting ohne Starvation, Nicht-Behinderung durch Prozesse außerhalb des kritischen Abschnitts und sofortigen Zugang bei freiem Abschnitt sicherstellen.",
          source: "08_rabs-synchro-1.pdf, Folien 36-37"
        },
        {
          title: "Aktives Warten: typische Fehler",
          body: "Interruptsperren blockieren E/A, nehmen dem Betriebssystem Kontrolle und funktionieren nur auf Einprozessorsystemen. Eine einfache Sperrvariable leidet an Race Conditions. Strikter Wechsel verletzt Anforderungen, weil Prozesse abwechseln müssen. Erst belegen, dann prüfen kann zur Verklemmung führen.",
          source: "08_rabs-synchro-1.pdf, Folien 38-41"
        }
      ],
      questions: [
        {
          question: "Was bedeutet Nebenläufigkeit laut Definition?",
          answer: "Parallel oder quasi-parallel ausgeführte Abläufe, die inhaltlich zusammenwirken, voneinander abhängig sind und sich gegenseitig beeinflussen können.",
          source: "08_rabs-synchro-1.pdf, Folie 13"
        },
        {
          question: "Was ist eine Race Condition?",
          answer: "Mehrere Prozesse greifen konkurrierend auf gemeinsame Daten zu, mindestens einer manipuliert sie, und das Ergebnis hängt von der Zugriffsreihenfolge ab.",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          question: "Was ist ein kritischer Abschnitt?",
          answer: "Ein Programmabschnitt, der Zugriffe auf ein gemeinsam genutztes Objekt beziehungsweise eine kritische Ressource enthält.",
          source: "08_rabs-synchro-1.pdf, Folie 34"
        },
        {
          question: "Welche drei Grundformen der Interaktion stehen in Beziehung?",
          answer: "Koordination, Kommunikation und Kooperation; Koordination ist elementar, weil Kommunikation und Kooperation zeitliche Abstimmung benötigen.",
          source: "08_rabs-synchro-1.pdf, Folien 7-8"
        },
        {
          question: "Warum ist eine einfache Sperrvariable problematisch?",
          answer: "Sie kann selbst eine Race Condition erzeugen, weil Prüfung und Setzen nicht atomar geschützt sind.",
          source: "08_rabs-synchro-1.pdf, Folie 39"
        }
      ],
      flashcards: [
        {
          front: "Nebenläufigkeit",
          back: "Parallelität plus Abhängigkeit.",
          source: "08_rabs-synchro-1.pdf, Folie 13"
        },
        {
          front: "Mutual Exclusion",
          back: "Exklusiver Zugriff auf eine gemeinsam genutzte Ressource wird garantiert.",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          front: "Race Condition",
          back: "Ergebnis gemeinsamer Datenzugriffe hängt von der Zugriffsreihenfolge ab.",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          front: "Bounded Waiting",
          back: "Kein Prozess soll ewig warten müssen, bis er in den kritischen Abschnitt eintreten darf.",
          source: "08_rabs-synchro-1.pdf, Folie 37"
        },
        {
          front: "DMA",
          back: "Kopiervorgänge werden in kleine Teile zerlegt; jeder Teil erhält den Bus atomar.",
          source: "08_rabs-synchro-1.pdf, Folie 18"
        }
      ]
    },
    {
      id: "semaphore-deadlocks",
      title: "Semaphore & Deadlocks",
      icon: "🚦",
      cards: [
        {
          title: "Semaphore",
          body: "Semaphore sind ein allgemeines Synchronisationskonstrukt nach Dijkstra. Sie lösen das Mutual-Exclusion-Problem auf Basis von Sperren ohne aktives Warten und erlauben neben wechselseitigem Ausschluss auch Reihenfolgensynchronisation.",
          tag: "def",
          source: "09_rabs-synchro-2.pdf, Folie 5"
        },
        {
          title: "Aufbau eines Semaphors",
          body: "Ein Semaphor besteht aus Semaphorzähler und Warteschlange für Prozesse oder Threads, die am Eingang eines kritischen Abschnitts warten müssen. Zähler und Warteschlange sind geschützt und nur über Semaphoroperationen manipulierbar.",
          source: "09_rabs-synchro-2.pdf, Folie 6"
        },
        {
          title: "Wait und Signal",
          body: "<code>Wait()</code>, auch <code>P()</code> oder <code>down()</code>, dekrementiert den Zähler; bei negativem Wert blockiert der Prozess. <code>Signal()</code>, auch <code>V()</code> oder <code>up()</code>, inkrementiert den Zähler und entblockt gegebenenfalls einen wartenden Prozess.",
          tag: "wichtig",
          source: "09_rabs-synchro-2.pdf, Folien 8-9"
        },
        {
          title: "Semaphor-Funktionsweise",
          body: "Semaphoroperationen sind atomar, damit Warteschlange und Zähler konsistent bleiben. Zähler größer oder gleich 0 bedeutet Anzahl freier Ressourcen; Zähler kleiner 0 bedeutet Anzahl wartender Prozesse. Es gibt kein aktives Warten.",
          source: "09_rabs-synchro-2.pdf, Folie 10"
        },
        {
          title: "Mutex-Semaphor",
          body: "Für wechselseitigen Ausschluss wird ein Semaphor mit 1 initialisiert. Ein Prozess tritt mit <code>Wait()</code> in den kritischen Abschnitt ein und verlässt ihn mit <code>Signal()</code>.",
          source: "09_rabs-synchro-2.pdf, Folie 12"
        },
        {
          title: "Reihenfolgensynchronisation",
          body: "Soll Prozess 1 eine Datei erst lesen, nachdem Prozess 0 sie erzeugt hat, wird der Semaphor mit 0 vorbelegt. Prozess 1 blockiert bei <code>Wait()</code>, bis Prozess 0 mit <code>Signal()</code> die Wartebedingung erfüllt.",
          source: "09_rabs-synchro-2.pdf, Folie 14"
        },
        {
          title: "Realisierung von Semaphoren",
          body: "Bei Kernel-Threads werden Semaphore im Betriebssystemkern realisiert; Operationen sind Systemaufrufe. Atomare Ausführung wird durch Interrupt-Sperre und gegebenenfalls Spinlocks gesichert.",
          source: "09_rabs-synchro-2.pdf, Folie 15"
        },
        {
          title: "Deadlock",
          body: "Ein Deadlock ist eine Situation, in der sich Prozesse gegenseitig sperren, weil sie auf Ereignisse warten, die von einem anderen wartenden Prozess nicht freigegeben werden können. Alle beteiligten Prozesse warten ewig; im OS-Kontext ist das Ereignis meist die Freigabe einer Ressource.",
          tag: "def",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          title: "Livelock",
          body: "Ein Livelock ist eine spezielle Art von Verklemmung, in der Prozesse nicht in einem Wartezustand verharren, sondern ständig zwischen sich wiederholenden Zuständen wechseln, aus denen kein Entkommen möglich ist.",
          source: "09_rabs-synchro-2.pdf, Folie 21"
        },
        {
          title: "Entziehbare und nichtentziehbare Betriebsmittel",
          body: "Entziehbare Betriebsmittel können einem Prozess ohne Schaden wieder entzogen werden, etwa Prozessor oder Hauptspeicher. Nichtentziehbare Betriebsmittel können nicht entzogen werden, ohne dass die Ausführung fehlschlägt, etwa ein CD-Brenner.",
          source: "09_rabs-synchro-2.pdf, Folie 22"
        },
        {
          title: "Coffman-Bedingungen",
          body: "Die vier Deadlock-Bedingungen sind wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit und zyklisches Warten. Alle vier Bedingungen zusammen sind notwendig und hinreichend für eine Verklemmung.",
          tag: "wichtig",
          source: "09_rabs-synchro-2.pdf, Folien 30-31"
        },
        {
          title: "Belegungsanforderungsgraph",
          body: "Im Belegungsanforderungsgraphen liegt ein Deadlock genau dann vor, wenn der Graph einen Zyklus enthält.",
          source: "09_rabs-synchro-2.pdf, Folie 32"
        },
        {
          title: "Strategien gegen Deadlocks",
          body: "Die Folien nennen Ignorieren, Erkennen und Beheben, Vermeidung sowie Verhinderung. Vermeidung lässt Anforderungen nicht zu, wenn dadurch ein Deadlock entstehen könnte; Verhinderung macht eine der vier Bedingungen unerfüllbar.",
          source: "09_rabs-synchro-2.pdf, Folie 50"
        }
      ],
      questions: [
        {
          question: "Was ist ein Semaphor?",
          answer: "Ein allgemeines Synchronisationskonstrukt mit Zähler und Warteschlange, das ohne aktives Warten wechselseitigen Ausschluss und Reihenfolgensynchronisation ermöglichen kann.",
          source: "09_rabs-synchro-2.pdf, Folien 5-6"
        },
        {
          question: "Was passiert bei Wait() auf einem Semaphor?",
          answer: "Der Zähler wird dekrementiert; ist er danach negativ, wird der Prozess blockiert und in die Warteschlange eingereiht.",
          source: "09_rabs-synchro-2.pdf, Folie 8"
        },
        {
          question: "Was ist ein Deadlock?",
          answer: "Eine Situation, in der Prozesse gegenseitig auf Ereignisse oder Ressourcen warten, die von anderen wartenden Prozessen nicht freigegeben werden können.",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          question: "Welche vier Coffman-Bedingungen nennt die Vorlesung?",
          answer: "Wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit und zyklisches Warten.",
          source: "09_rabs-synchro-2.pdf, Folie 30"
        },
        {
          question: "Welche vier Strategien zur Deadlock-Behandlung werden genannt?",
          answer: "Ignorieren, Erkennen und Beheben, Vermeidung und Verhinderung.",
          source: "09_rabs-synchro-2.pdf, Folie 50"
        }
      ],
      flashcards: [
        {
          front: "Wait()",
          back: "Dekrementiert Semaphorzähler; blockiert bei negativem Wert.",
          source: "09_rabs-synchro-2.pdf, Folie 8"
        },
        {
          front: "Signal()",
          back: "Inkrementiert Semaphorzähler und entblockt ggf. einen wartenden Prozess.",
          source: "09_rabs-synchro-2.pdf, Folie 9"
        },
        {
          front: "Semaphorzähler < 0",
          back: "Anzahl wartender Prozesse.",
          source: "09_rabs-synchro-2.pdf, Folie 10"
        },
        {
          front: "Deadlock",
          back: "Prozesse warten ewig auf Ereignisse, die andere wartende Prozesse nicht freigeben können.",
          source: "09_rabs-synchro-2.pdf, Folie 19"
        },
        {
          front: "Coffman-Bedingungen",
          back: "Mutual Exclusion, Hold and Wait, Non-Preemption, Cyclic Waiting.",
          source: "09_rabs-synchro-2.pdf, Folie 30"
        }
      ]
    },
    {
      id: "ipc",
      title: "IPC & Kooperation",
      icon: "📡",
      cards: [
        {
          title: "Kommunikation und Kooperation",
          body: "Prozessinteraktion hat einen zeitlichen Aspekt der Ablaufabstimmung und einen funktionalen Aspekt des Informationsaustauschs. Kommunikation und Kooperation benötigen zeitliche Abstimmung zwischen den Interaktionspartnern.",
          source: "10_rabs-ipc.pdf, Folien 4-5"
        },
        {
          title: "Kommunikation und Synchronisation",
          body: "Durch das Kausalitätsprinzip sind Kommunikation und Synchronisation verbunden: Wenn A eine Information von B benötigt, muss A warten, bis B diese Information bereitstellt. Nachrichtenbasierte Kommunikation impliziert daher Synchronisation.",
          tag: "wichtig",
          source: "10_rabs-ipc.pdf, Folie 7"
        },
        {
          title: "Nachrichtenbasierte und speicherbasierte Kommunikation",
          body: "Nachrichtenbasierte Kommunikation sendet und empfängt Nachrichten über das Betriebssystem und ist auch über Rechnergrenzen hinweg möglich; Synchronisation ist implizit. Speicherbasierte Kommunikation nutzt gemeinsamen Speicher; Synchronisation muss explizit programmiert werden.",
          source: "10_rabs-ipc.pdf, Folie 8"
        },
        {
          title: "send und receive",
          body: "Nachrichtenaustausch wird abstrakt durch <code>send(Ziel, Nachricht)</code> und <code>receive(Quelle, Nachricht)</code> beschrieben. Ein Empfang ist erst nach dem Senden möglich; <code>receive</code> blockiert, bis eine Nachricht vorhanden ist.",
          tag: "def",
          source: "10_rabs-ipc.pdf, Folie 10"
        },
        {
          title: "Producer/Consumer mit Nachrichten",
          body: "Typisch puffert das Betriebssystem Nachrichten bis zum Empfang. Die Puffergröße wird vom Betriebssystem bestimmt und ist meist konfigurierbar. Ist der Puffer voll, wird der Sender in <code>send()</code> blockiert.",
          source: "10_rabs-ipc.pdf, Folie 11"
        },
        {
          title: "Direkte und indirekte Kommunikation",
          body: "Bei direkter Kommunikation wird die Nachricht unmittelbar aus dem Speicherbereich des Senders in einen Speicherbereich des Empfängers geschrieben. Bei indirekter Kommunikation über Mailboxen realisiert das Betriebssystem eine Warteschlange.",
          source: "10_rabs-ipc.pdf, Folien 14-15"
        },
        {
          title: "Mailbox und Port",
          body: "Eine Mailbox ist eine Warteschlange im Speicherbereich des Betriebssystems und realisiert n:m-Kommunikation. Ein Port ist eine Mailbox, die einem einzelnen Empfänger zugeordnet ist, realisiert m:1-Kommunikation und wird besonders für Client-Server-Kommunikation eingesetzt.",
          source: "10_rabs-ipc.pdf, Folien 15-16"
        },
        {
          title: "Zeitliche Kopplung",
          body: "Synchrones Senden blockiert den Sender, bis der Empfänger die Information entgegengenommen hat. Asynchrones Senden setzt sofort fort. Synchrones Empfangen blockiert bis zum Eintreffen der Information; asynchrones Empfangen prüft, ob etwas empfangen wurde, und arbeitet weiter.",
          source: "10_rabs-ipc.pdf, Folie 18"
        },
        {
          title: "Pipes",
          body: "Pipes übertragen Sequenzen von Bytes in FIFO-Reihenfolge zwischen Prozessen. Sie haben keine Nachrichtengrenzen oder Längenbeschränkungen. Eine Pipe ist ein unidirektionaler Datenstrom.",
          tag: "def",
          source: "10_rabs-ipc.pdf, Folien 26-28"
        },
        {
          title: "Pipes in der Shell",
          body: "Der Pipe-Operator unter Linux ist <code>|</code>. Beispiele sind <code>cat foo.txt | lpr -Php1320</code> und <code>set | grep PATH</code>, bei denen Ausgabe eines Prozesses an den nächsten Prozess übergeben wird.",
          source: "10_rabs-ipc.pdf, Folie 31"
        },
        {
          title: "Sockets",
          body: "Sockets sind eine allgemeine Schnittstelle zur Interprozesskommunikation, nicht auf lokale Mechanismen beschränkt. Sie realisieren protokollunabhängigen Zugriff auf Dienste, die normalerweise von einem Transportprotokoll bereitgestellt werden.",
          source: "10_rabs-ipc.pdf, Folien 32-34"
        },
        {
          title: "Shared Memory",
          body: "Shared Memory muss beim Betriebssystem von Sender und Empfänger explizit angefordert werden. Die Adresse des gemeinsamen Speichersegments wird in den Prozessadressraum integriert; Sender und Empfänger müssen denselben Datentyp nutzen und synchronisiert zugreifen.",
          tag: "wichtig",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        },
        {
          title: "Shared Memory in UNIX",
          body: "UNIX verwendet <code>shmget</code> zum Anfordern oder Erzeugen, <code>shmat</code> zum Einbinden, <code>shmdt</code> zum Entfernen und <code>shmctl</code> für Steuerfunktionen. Mit <code>IPC_RMID</code> wird das Segment gelöscht.",
          source: "10_rabs-ipc.pdf, Folie 44"
        }
      ],
      questions: [
        {
          question: "Warum sind Kommunikation und Synchronisation verbunden?",
          answer: "Wenn ein Prozess eine Information von einem anderen benötigt, muss er warten, bis diese Information bereitgestellt ist.",
          source: "10_rabs-ipc.pdf, Folie 7"
        },
        {
          question: "Was unterscheidet nachrichtenbasierte von speicherbasierter Kommunikation?",
          answer: "Nachrichtenbasierte Kommunikation läuft über das Betriebssystem und synchronisiert implizit; speicherbasierte Kommunikation nutzt gemeinsamen Speicher und erfordert explizite Synchronisation.",
          source: "10_rabs-ipc.pdf, Folie 8"
        },
        {
          question: "Was ist eine Mailbox?",
          answer: "Eine Warteschlange im Speicherbereich des Betriebssystems, über die mehrere Sender und Empfänger n:m kommunizieren können.",
          source: "10_rabs-ipc.pdf, Folie 15"
        },
        {
          question: "Was ist eine Pipe?",
          answer: "Ein unidirektionaler Datenstrom, der Bytes in FIFO-Reihenfolge zwischen Prozessen überträgt.",
          source: "10_rabs-ipc.pdf, Folien 26-28"
        },
        {
          question: "Welche UNIX-Funktionen nennt der Foliensatz für Shared Memory?",
          answer: "<code>shmget</code>, <code>shmat</code>, <code>shmdt</code> und <code>shmctl</code>.",
          source: "10_rabs-ipc.pdf, Folie 44"
        }
      ],
      flashcards: [
        {
          front: "send/receive",
          back: "Abstrakte Primitive für Nachrichtenaustausch.",
          source: "10_rabs-ipc.pdf, Folie 10"
        },
        {
          front: "Mailbox",
          back: "OS-Warteschlange für n:m-Kommunikation.",
          source: "10_rabs-ipc.pdf, Folie 15"
        },
        {
          front: "Port",
          back: "Mailbox, die einem einzelnen Empfänger zugeordnet ist; m:1-Kommunikation.",
          source: "10_rabs-ipc.pdf, Folie 16"
        },
        {
          front: "Pipe",
          back: "Unidirektionaler FIFO-Bytestrom zwischen Prozessen.",
          source: "10_rabs-ipc.pdf, Folien 26-28"
        },
        {
          front: "Shared Memory",
          back: "Gemeinsamer Speicher im Prozessadressraum; Zugriff muss synchronisiert werden.",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        }
      ]
    }
  ]
};
