window.APP_SUBJECTS = window.APP_SUBJECTS || {};

window.APP_SUBJECTS.rabs = {
  id: "rabs",
  title: "RABS",
  subtitle: "Rechnerarchitektur & Betriebssysteme",
  icon: "🖥️",
  topics: [
    {
      id: "rechnerarchitektur",
      title: "Rechnerarchitektur",
      icon: "🖥️",
      cards: [
        {
          t: "Von-Neumann- und Harvard-Architektur",
          b: "Nachteile der VON-NEUMANN-Architektur: Befehle und Daten werden im Speicher gehalten. Die Verbindung und Datenübertragung zwischen CPU und Speicher über den Systembus wird zum VON-NEUMANN-FLASCHENHALS. Harvard-Architektur: logische und physische Trennung von Befehls- und Datenspeicher. Befehle und Daten können gleichzeitig geladen bzw. geschrieben werden.",
          source: "02_rabs_vna1.pdf, Folien 4-6"
        },
        {
          t: "fetch-decode-execute und Mikroarchitekturen",
          b: "fetch-decode-execute-Zyklus: Nächsten Befehl aus dem Speicher in das Befehlsregister laden, Programmzähler hochzählen, Typ des Befehls bestimmen, Operanden aus dem Speicher in ein Register laden, Befehl ausführen, wieder von vorne beginnen. Pipeline-Prozessoren besitzen mehrere getrennte Hol-, Dekodier- und Ausführungseinheiten. Superskalare Prozessoren besitzen mehrere Ausführungseinheiten.",
          source: "02_rabs_vna1.pdf, Folien 19-21"
        },
        {
          t: "Caching",
          b: "CPU speichert die am häufigsten benötigten Daten in einem kleinen, aber sehr schnellen Speicher: Cache. Bei Speicheranforderung überprüft die CPU, ob die Daten im Cache liegen. Moderne Prozessoren besitzen mindestens zwei Cache-Ebenen: L1-Cache und L2-Cache. L1-Cache typischerweise 16KB und innerhalb der CPU, L2-Cache typischerweise mehrere MB.",
          source: "02_rabs_vna1.pdf, Folie 25"
        },
        {
          t: "Ausführungsmodi, Systemaufruf und Interrupt",
          b: "CPUs besitzen zwei Ausführungsmodi: Kernmodus und Benutzermodus. Kernmodus: unbeschränkter Zugriff auf alle Rechnerkomponenten. Benutzermodus: keine privilegierten Befehle. Kontrollierter Moduswechsel mit speziellem Befehl: Systemaufruf, Trap, System Call. Interrupts reagieren auf externe, asynchrone Ereignisse; das Signal wird jeweils nach der Abarbeitung eines Befehls abgefragt.",
          source: "02_rabs_vna1.pdf, Folien 26, 31-33"
        },
        {
          t: "DMA",
          b: "Alle I/O-Geräte können per Direct Memory Access auf den RAM zugreifen und Interrupts senden. Für DMA-fähige Geräte wird der Vorgang des Kopierens von Blöcken in oder aus dem RAM in kleine Teile zerlegt. Für jeden Teil erhält das Gerät den Bus atomar.",
          source: "08_rabs-synchro-1.pdf, Folien 16-18"
        }
      ],
      questions: [
        {
          q: "Worin besteht der VON-NEUMANN-FLASCHENHALS und welche Idee verfolgt die Harvard-Architektur?",
          a: "Beim VON-NEUMANN-FLASCHENHALS wird jeglicher Datenverkehr von und zur CPU über den internen Bus abgewickelt. Die Harvard-Architektur trennt Befehls- und Datenspeicher logisch und physisch, so dass Befehle und Daten gleichzeitig geladen bzw. geschrieben werden können.",
          source: "02_rabs_vna1.pdf, Folien 4-6"
        },
        {
          q: "Wie läuft der fetch-decode-execute-Zyklus ab?",
          a: "Nächsten Befehl aus dem Speicher in das Befehlsregister laden, Programmzähler hochzählen, Typ des Befehls bestimmen, Operanden aus dem Speicher in ein Register laden, Befehl ausführen und wieder von vorne beginnen.",
          source: "02_rabs_vna1.pdf, Folie 19"
        },
        {
          q: "Was kennzeichnet Kernmodus, Benutzermodus und den kontrollierten Moduswechsel?",
          a: "Kernmodus bedeutet unbeschränkten Zugriff auf alle Rechnerkomponenten. Im Benutzermodus sind keine privilegierten Befehle erlaubt. Beim kontrollierten Moduswechsel mit Systemaufruf, Trap oder System Call sichert der Prozessor den PC, schaltet in den Systemmodus und verzweigt an eine vordefinierte Adresse im Betriebssystem.",
          source: "02_rabs_vna1.pdf, Folien 26, 31-32"
        }
      ],
      flashcards: [
        {
          front: "Harvard-Architektur",
          back: "Logische und physische Trennung von Befehls- und Datenspeicher; Befehle und Daten können gleichzeitig geladen bzw. geschrieben werden.",
          source: "02_rabs_vna1.pdf, Folien 5-6"
        },
        {
          front: "L1- und L2-Cache",
          back: "L1-Cache typischerweise 16KB und innerhalb der CPU. L2-Cache typischerweise mehrere MB.",
          source: "02_rabs_vna1.pdf, Folie 25"
        },
        {
          front: "DMA",
          back: "Kopieren in oder aus dem RAM wird in kleine Teile zerlegt; fuer jeden Teil erhaelt das Geraet den Bus atomar.",
          source: "08_rabs-synchro-1.pdf, Folien 17-18"
        }
      ]
    },
    {
      id: "bs-grundlagen",
      title: "BS-Grundlagen",
      icon: "⚙️",
      cards: [
        {
          t: "Aufgaben eines Betriebssystems",
          b: "Ein Betriebssystem leistet Erweiterung/Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln.",
          source: "01_rabs_grundlagen.pdf, Folie 9"
        },
        {
          t: "Erweiterung und Abstraktion",
          b: "Das Betriebssystem stellt komplexe Funktionen bereit, die die Anwendungsprogramme verwenden koennen. Folge: erhebliche Vereinfachung der Programmierung. Das Betriebssystem realisiert fuer Anwendungen eine einheitliche Sicht, eine abstrakte Maschine. Dateien abstrahieren externen Speicher.",
          source: "01_rabs_grundlagen.pdf, Folien 10-11"
        },
        {
          t: "HAL",
          b: "HAL = Hardware Abstraction Layer. Das ist die Schicht des Betriebssystems, die Betriebssystemkern und uebrige Software von der Hardware isoliert. Nur der HAL kann auf die Hardware zugreifen.",
          source: "01_rabs_grundlagen.pdf, Folie 13"
        },
        {
          t: "Mikrokern und Virtuelle Maschine",
          b: "Client/Server-Architektur mit Mikrokern: Nur der Mikrokern laeuft im Systemmodus, BS-Komponenten laufen als Server-Prozesse im nichtprivilegierten Modus. Virtuelle Maschine: Auf der Hardware laeuft ein Basis-Betriebssystem, der Virtual Machine Monitor; darauf laufen virtuelle Maschinen in Form verschiedener Betriebssysteme.",
          source: "01_rabs_grundlagen.pdf, Folien 4-8"
        }
      ],
      questions: [
        {
          q: "Welche drei Aufgaben nennt die Vorlesung fuer ein Betriebssystem?",
          a: "Erweiterung/Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln.",
          source: "01_rabs_grundlagen.pdf, Folie 9"
        },
        {
          q: "Was ist die HAL?",
          a: "Die HAL ist die Hardware Abstraction Layer. Sie isoliert Betriebssystemkern und uebrige Software von der Hardware. Nur der HAL kann auf die Hardware zugreifen.",
          source: "01_rabs_grundlagen.pdf, Folie 13"
        },
        {
          q: "Was kennzeichnet eine Mikrokern-Architektur?",
          a: "Ziel ist die Minimierung der im privilegierten Modus ablaufenden Funktionalitaet. BS-Komponenten laufen als Server-Prozesse im nichtprivilegierten Modus, nur der Mikrokern laeuft im Systemmodus. Die Kommunikation erfolgt ueber Nachrichten.",
          source: "01_rabs_grundlagen.pdf, Folien 4-6"
        }
      ],
      flashcards: [
        {
          front: "3 Aufgaben des Betriebssystems",
          back: "Erweiterung/Veredelung der Hardware, Abstraktion der Hardware, Verwaltung von Betriebsmitteln.",
          source: "01_rabs_grundlagen.pdf, Folie 9"
        },
        {
          front: "HAL",
          back: "Hardware Abstraction Layer; isoliert Kern und Software von der Hardware.",
          source: "01_rabs_grundlagen.pdf, Folie 13"
        },
        {
          front: "Virtuelle Maschine",
          back: "Auf der Hardware laeuft der Virtual Machine Monitor; darauf laufen virtuelle Maschinen in Form verschiedener Betriebssysteme.",
          source: "01_rabs_grundlagen.pdf, Folien 7-8"
        }
      ]
    },
    {
      id: "prozesse",
      title: "Prozesse",
      icon: "🔄",
      cards: [
        {
          t: "Prozessbegriff",
          b: "Ein Prozess ist ein Programm in Ausfuehrung mit zusaetzlicher Kontextinformation. Prozess ist das zentrale Konzept in jedem Betriebssystem. Jeder Prozess besitzt einen eigenen Adressraum. Prozess: Programm in Ausfuehrung und dessen aktuelle Daten.",
          source: "05_rabs-process.pdf, Folien 8-10"
        },
        {
          t: "Prozesskontrollblock",
          b: "Der Prozesskontrollblock beschreibt den Kontext eines Prozesses. Er enthaelt unter anderem eindeutigen Namen, Prozesszustand, Ereignis auf das gewartet wird, Scheduling-Informationen, Registerinhalte, Accounting-Information, Prozesshierarchie, Informationen fuer Speichermanagement und Dateiverwaltung.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          t: "fork unter UNIX",
          b: "fork erzeugt einen exakten Klon des aufrufenden Prozesses. Beide Prozesse sind ab da voneinander unabhaengig und laufen nach fork weiter. Der Kindprozess erbt vom Elternprozess das Speicherabbild (memory image - copy on write), die offenen Dateien und weitere Ressourcen.",
          source: "05_rabs-process.pdf, Folie 17"
        },
        {
          t: "Programmwechsel und Prozesshierarchie",
          b: "Um das Speicherabbild zu aendern und ein neues Programm auszufuehren, muss der Kindprozess z. B. execl ausfuehren. Das ersetzt den aktuellen Programmcode durch die Binaerdatei und erzeugt keinen neuen Prozess. UNIX bildet Prozesshierarchien; init ist als spezieller Prozess im Bootimage vorhanden und bildet die Wurzel.",
          source: "05_rabs-process.pdf, Folien 19, 21-22"
        },
        {
          t: "Prozesszustaende",
          b: "Ein Prozess befindet sich waehrend der Abarbeitung in einem der folgenden Zustaende: erzeugt, bereit, laufend, blockiert, beendet.",
          source: "05_rabs-process.pdf, Folie 24"
        }
      ],
      questions: [
        {
          q: "Wie definiert die Vorlesung einen Prozess?",
          a: "Ein Prozess ist ein Programm in Ausfuehrung mit zusaetzlicher Kontextinformation. Jeder Prozess besitzt einen eigenen Adressraum.",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          q: "Was leistet fork unter UNIX?",
          a: "fork erzeugt einen exakten Klon des aufrufenden Prozesses. Beide Prozesse laufen danach unabhaengig weiter. Der Kindprozess erbt das Speicherabbild, offene Dateien und weitere Ressourcen.",
          source: "05_rabs-process.pdf, Folie 17"
        },
        {
          q: "Welche Prozesszustaende nennt die Vorlesung?",
          a: "erzeugt, bereit, laufend, blockiert und beendet.",
          source: "05_rabs-process.pdf, Folie 24"
        }
      ],
      flashcards: [
        {
          front: "Prozess",
          back: "Programm in Ausfuehrung mit zusaetzlicher Kontextinformation.",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          front: "PCB",
          back: "Beschreibt den Kontext eines Prozesses und enthaelt u. a. Zustand, Register, Scheduling-Informationen und Prozesshierarchie.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          front: "fork",
          back: "Erzeugt exakten Klon des aufrufenden Prozesses; copy on write; Vater-Sohn-Relation.",
          source: "05_rabs-process.pdf, Folie 17"
        }
      ]
    },
    {
      id: "threads",
      title: "Threads",
      icon: "🧵",
      cards: [
        {
          t: "Definition Thread",
          b: "Threads sind parallele Kontrollfluesse innerhalb eines Prozesses, die nicht voneinander abgeschottet sind, da sie sich gemeinsame Ressourcen, insbesondere Speicher, teilen. Ein oder mehrere Threads pro Prozess sind moeglich.",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          t: "Grunde und Eigenschaften",
          b: "Gruende fuer Threads: parallele Ausfuehrung mehrerer Aktivitaeten, Threads sind leichtgewichtiger als Prozesse, Performanz und Verteilung der Threads auf mehrere Prozessoren. Ein Thread besitzt Thread-ID, Programmzaehler, Registersatz, Stack und Zustand.",
          source: "06_rabs-threads.pdf, Folien 7, 12"
        },
        {
          t: "Adressraum, Multithreading und Hyperthreading",
          b: "Threads des gleichen Prozesses teilen sich den gemeinsamen Prozessadressraum und gemeinsame Ressourcen. Multithreading bedeutet gleichzeitiges Abarbeiten mehrerer Threads innerhalb eines einzelnen Prozesses oder Tasks. Hyperthreading ist hardwareseitiges Multithreading in Intel-Prozessoren.",
          source: "06_rabs-threads.pdf, Folien 15, 17-18"
        },
        {
          t: "User-Level-Threads",
          b: "User-Level-Threads werden im User Mode ohne Intervention und Wissen des Betriebssystems erzeugt, synchronisiert und vernichtet. Vorteile: keine Betriebssystem-Unterstuetzung notwendig, schnelle Threaderzeugung und Threadwechsel. Nachteile: blockierender Systemaufruf blockiert alle Threads eines Prozesses, Threads muessen CPU freiwillig abgeben.",
          source: "06_rabs-threads.pdf, Folien 22-25"
        },
        {
          t: "Kernel-Level-Threads",
          b: "Kernel-Level-Threads werden vom Kernel verwaltet. Thread-Operationen wie Erzeugung und Terminierung sind Kernel-Aufrufe. Vorteile: Bei Blockierung eines Threads kann das Betriebssystem einen anderen Thread desselben Prozesses auswaehlen; echte Parallelitaet innerhalb eines Prozesses ist moeglich. Nachteil: hoher Overhead.",
          source: "06_rabs-threads.pdf, Folien 26-28"
        }
      ],
      questions: [
        {
          q: "Wie definiert die Vorlesung einen Thread?",
          a: "Ein Thread ist ein paralleler Kontrollfluss innerhalb eines Prozesses. Threads teilen sich die Ressourcen des Prozesses und damit auch den Prozessadressraum.",
          source: "06_rabs-threads.pdf, Folien 6, 15"
        },
        {
          q: "Was macht thread_yield?",
          a: "thread_yield erlaubt es dem Thread, freiwillig Rechenzeit abzugeben, um einen anderen Thread rechnen zu lassen.",
          source: "06_rabs-threads.pdf, Folie 19"
        },
        {
          q: "Wodurch unterscheiden sich User-Level-Threads und Kernel-Level-Threads?",
          a: "User-Level-Threads werden im User Mode durch eine Threading-Bibliothek verwaltet. Kernel-Level-Threads werden vom Kernel verwaltet; Erzeugung und Terminierung sind Kernel-Aufrufe. Bei User-Level-Threads blockiert ein blockierender Systemaufruf alle Threads des Prozesses, bei Kernel-Level-Threads kann das Betriebssystem einen anderen Thread desselben Prozesses auswaehlen.",
          source: "06_rabs-threads.pdf, Folien 22-28"
        }
      ],
      flashcards: [
        {
          front: "Thread",
          back: "Paralleler Kontrollfluss innerhalb eines Prozesses.",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          front: "thread_yield",
          back: "Freiwillige Abgabe von Rechenzeit, um einen anderen Thread rechnen zu lassen.",
          source: "06_rabs-threads.pdf, Folie 19"
        },
        {
          front: "Kernel-Level-Threads",
          back: "Vom Kernel verwaltet; echte Parallelitaet innerhalb eines Prozesses moeglich, aber hoher Overhead.",
          source: "06_rabs-threads.pdf, Folien 26-28"
        }
      ]
    },
    {
      id: "scheduling",
      title: "Scheduling",
      icon: "⏱️",
      cards: [
        {
          t: "First Come First Serve",
          b: "First Come First Serve oder First In First Out: Bearbeitung der Prozesse in der Reihenfolge ihrer Ankunft in der Bereitliste. Prozessorbesitz bis zum Ende oder zur freiwilligen Aufgabe. Simpelste Loesung. FCFS ist fair: Alle Prozesse werden beruecksichtigt.",
          source: "07_rabs-scheduling.pdf, Folien 15-17"
        },
        {
          t: "Shortest Job First",
          b: "Prozess mit der kuerzesten Bedienzeit wird als naechster bis zum Ende oder zur freiwilligen Aufgabe bearbeitet. Nicht-unterbrechender Scheduling-Algorithmus. Kenntnis der Bedienzeit wird benoetigt, die nur vom Benutzer in Form einer Schaetzung stammen kann. Laengere Prozesse koennen verhungern.",
          source: "07_rabs-scheduling.pdf, Folien 18-21"
        },
        {
          t: "Round Robin",
          b: "Nach Ablauf einer vorher festgesetzten Frist tau, der Zeitscheibe, findet eine Verdraengung statt. Neu ankommende und verdraengte Prozesse gehen an das Ende der Warteschlange. Die Zugriffszeit auf die CPU wird fair auf die Prozesse aufgeteilt. Round Robin eignet sich fuer interaktive Systeme.",
          source: "07_rabs-scheduling.pdf, Folien 22-23"
        },
        {
          t: "RMS und EDF",
          b: "Raten Monotones Scheduling ist ein prioritaetsbasiertes Scheduling-Verfahren fuer unterbrechbare, periodische Jobs. Prioritaet eines Prozesses entspricht seiner Aufrufperiode. Earliest Deadline First sortiert Prozesse nach der kuerzesten Deadline. EDF kann die CPU zu 100 Prozent auslasten.",
          source: "07_rabs-scheduling.pdf, Folien 36-45"
        }
      ],
      questions: [
        {
          q: "Wie arbeitet FCFS?",
          a: "FCFS bearbeitet Prozesse in der Reihenfolge ihrer Ankunft in der Bereitliste. Ein Prozess behaelt den Prozessor bis zum Ende oder bis zur freiwilligen Aufgabe.",
          source: "07_rabs-scheduling.pdf, Folie 15"
        },
        {
          q: "Welche Nachteile nennt die Vorlesung fuer SJF?",
          a: "SJF benoetigt die Kenntnis der Bedienzeit, die nur vom Benutzer in Form einer Schaetzung stammen kann. Laengere Prozesse koennen verhungern, wenn stets kuerzere vorhanden sind.",
          source: "07_rabs-scheduling.pdf, Folie 18"
        },
        {
          q: "Was sagt das Beispiel zu RMS und EDF?",
          a: "Im Beispiel ist die Auslastung 0,808. Damit ist kein Scheduling fuer RMS moeglich, weil 0,808 groesser als 0,78 ist. Bei EDF ist die CPU-Auslastung bis 100 Prozent moeglich.",
          source: "07_rabs-scheduling.pdf, Folien 44-45"
        }
      ],
      flashcards: [
        {
          front: "FCFS",
          back: "Bearbeitung in Ankunftsreihenfolge; nicht-unterbrechend; alle Prozesse werden beruecksichtigt.",
          source: "07_rabs-scheduling.pdf, Folien 15-17"
        },
        {
          front: "SJF",
          back: "Kuerzeste Bedienzeit zuerst; nicht-unterbrechend; Bedienzeit muss geschaetzt werden.",
          source: "07_rabs-scheduling.pdf, Folie 18"
        },
        {
          front: "Round Robin",
          back: "Zeitscheibe tau; faire Aufteilung der CPU-Zugriffszeit; geeignet fuer interaktive Systeme.",
          source: "07_rabs-scheduling.pdf, Folien 22-23"
        }
      ]
    },
    {
      id: "synchronisation",
      title: "Synchronisation",
      icon: "🔒",
      cards: [
        {
          t: "Race Condition und kritischer Abschnitt",
          b: "Race Condition: Mehrere Prozesse greifen konkurrierend auf gemeinsame Daten zu und mindestens einer manipuliert diese. Das Ergebnis ist nicht vorhersagbar und kann inkorrekt sein. Zugriffscode wird als kritischer Abschnitt bezeichnet.",
          source: "08_rabs-synchro-1.pdf, Folien 28-30"
        },
        {
          t: "Anforderungen an eine Loesung",
          b: "Keine Annahmen ueber Geschwindigkeit oder Anzahl der CPUs. Mutual exclusion. Progress - no deadlock. Bounded waiting - no starvation. Prozess ausserhalb des kritischen Abschnitts darf andere nicht behindern. Sofortiger Zugang zum kritischen Abschnitt, wenn kein anderer Prozess darin ist.",
          source: "08_rabs-synchro-1.pdf, Folien 36-37"
        },
        {
          t: "Fehlgeschlagene Loesungsversuche",
          b: "Sperren der Interrupts blockiert Ein-/Ausgabe und funktioniert nur auf Einprozessor-Rechnern. Die Sperrvariable scheitert an einer Race Condition. Beim strikten Wechsel muessen Prozesse abwechselnd in den kritischen Abschnitt. Beim Ansatz interested erst belegen, dann pruefen, kann Verklemmung auftreten.",
          source: "08_rabs-synchro-1.pdf, Folien 35, 39-41"
        },
        {
          t: "Semaphore",
          b: "Semaphore sind ein allgemeines Synchronisationskonstrukt. Wait dekrementiert den Zaehler; bei negativem Ergebnis wird der Prozess blockiert. Signal inkrementiert den Zaehler und entblockt gegebenenfalls einen Prozess. Semaphor-Operationen sind atomar und verursachen kein aktives Warten.",
          source: "09_rabs-synchro-2.pdf, Folien 8-10"
        },
        {
          t: "Mutex und Reihenfolgesynchronisation",
          b: "Beim wechselseitigen Ausschluss wird ein Semaphor mit 1 initialisiert. Fuer Reihenfolgesynchronisation wird ein Semaphor mit 0 vorbelegt. Wait steht an der Stelle, wo gewartet werden muss; Signal zeigt an, dass die Wartebedingung erfuellt ist.",
          source: "09_rabs-synchro-2.pdf, Folien 12-15"
        }
      ],
      questions: [
        {
          q: "Was ist eine Race Condition?",
          a: "Mehrere Prozesse greifen konkurrierend auf gemeinsame Daten zu und mindestens einer manipuliert diese. Das Ergebnis ist nicht vorhersagbar und kann inkorrekt sein.",
          source: "08_rabs-synchro-1.pdf, Folie 28"
        },
        {
          q: "Welche sechs Anforderungen nennt die Vorlesung fuer wechselseitigen Ausschluss?",
          a: "Keine Annahmen ueber Geschwindigkeit oder Anzahl der CPUs, mutual exclusion, progress - no deadlock, bounded waiting - no starvation, ein Prozess ausserhalb des kritischen Abschnitts darf andere nicht behindern, sofortiger Zugang wenn kein anderer Prozess im kritischen Abschnitt ist.",
          source: "08_rabs-synchro-1.pdf, Folien 36-37"
        },
        {
          q: "Wie arbeiten Wait und Signal?",
          a: "Wait dekrementiert den Zaehler. Ist der Zaehler danach kleiner als 0, wird der aufrufende Prozess blockiert und in die Warteschlange eingereiht. Signal inkrementiert den Zaehler und entblockt einen Prozess, falls die Warteschlange nicht leer ist.",
          source: "09_rabs-synchro-2.pdf, Folien 8-10"
        }
      ],
      flashcards: [
        {
          front: "Race Condition",
          back: "Konkurrierender Zugriff auf gemeinsame Daten; Ergebnis kann nicht vorhersagbar und inkorrekt sein.",
          source: "08_rabs-synchro-1.pdf, Folie 28"
        },
        {
          front: "Wait",
          back: "Zaehler wird dekrementiert; bei negativem Ergebnis wird der Prozess blockiert.",
          source: "09_rabs-synchro-2.pdf, Folie 8"
        },
        {
          front: "Signal",
          back: "Zaehler wird inkrementiert; falls noetig wird ein Prozess aus der Warteschlange entblockt.",
          source: "09_rabs-synchro-2.pdf, Folie 9"
        }
      ]
    },
    {
      id: "deadlocks",
      title: "Deadlocks",
      icon: "💀",
      cards: [
        {
          t: "Deadlock",
          b: "Deadlocks sind Situationen, in denen sich Prozesse gegenseitig sperren, weil sie auf Ereignisse warten, die von einem anderen wartenden Prozess nicht freigegeben werden koennen. Konsequenz: alle beteiligten Prozesse warten ewig. Im Betriebssystem-Kontext ist das Ereignis die Freigabe einer Ressource.",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          t: "Livelock und Betriebsmittel",
          b: "Livelock ist eine spezielle Art von Verklemmung, in der Prozesse nicht in einem Wartezustand verharren, sondern zwischen sich wiederholenden Zustaenden wechseln. Entziehbare Betriebsmittel koennen ohne Schaden entzogen werden; nichtentziehbare nicht.",
          source: "09_rabs-synchro-2.pdf, Folien 21-22"
        },
        {
          t: "Vier Bedingungen",
          b: "Wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit und zyklisches Warten. Alle vier Bedingungen zusammen sind notwendig und hinreichend fuer eine Verklemmung.",
          source: "09_rabs-synchro-2.pdf, Folien 30-31"
        },
        {
          t: "Graph und Strategien",
          b: "Ein Deadlock liegt genau dann vor, wenn der Belegungsanforderungsgraph einen Zyklus enthaelt. Vier Strategien zur Behandlung: Ignorieren, Erkennen und Beheben, Vermeidung, Verhinderung.",
          source: "09_rabs-synchro-2.pdf, Folien 32, 50"
        }
      ],
      questions: [
        {
          q: "Wie definiert die Vorlesung einen Deadlock?",
          a: "Prozesse sperren sich gegenseitig, weil sie auf Ereignisse warten, die von einem anderen wartenden Prozess nicht freigegeben werden koennen. Alle beteiligten Prozesse warten ewig.",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          q: "Welche vier Bedingungen nach Coffman nennt die Vorlesung?",
          a: "Wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit und zyklisches Warten.",
          source: "09_rabs-synchro-2.pdf, Folie 30"
        },
        {
          q: "Welche vier Strategien zur Behandlung von Deadlocks werden genannt?",
          a: "Ignorieren des Problems, Erkennen und Beheben, Vermeidung und Verhinderung.",
          source: "09_rabs-synchro-2.pdf, Folie 50"
        }
      ],
      flashcards: [
        {
          front: "Deadlock",
          back: "Alle beteiligten Prozesse warten ewig auf Ressourcen oder Ereignisse, die von anderen wartenden Prozessen gehalten werden.",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          front: "Livelock",
          back: "Prozesse verharren nicht im Wartezustand, wechseln aber fortlaufend zwischen wiederkehrenden Zustaenden ohne Fortschritt.",
          source: "09_rabs-synchro-2.pdf, Folie 21"
        },
        {
          front: "Zyklus im Belegungsanforderungsgraphen",
          back: "Ein Deadlock liegt genau dann vor, wenn der Graph einen Zyklus enthaelt.",
          source: "09_rabs-synchro-2.pdf, Folie 32"
        }
      ]
    },
    {
      id: "speicherverwaltung",
      title: "Speicherverwaltung",
      icon: "💾",
      cards: [
        {
          t: "Adressraum und virtueller Speicher",
          b: "Adressraum: Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann. Jeder Prozess besitzt einen eigenen Adressraum. Virtueller Speicher erlaubt das Aufbrechen des Adressraums eines Prozesses in Seiten.",
          source: "02_rabs_speicher.pdf, Folien 20, 28"
        },
        {
          t: "Paging",
          b: "Physikalischer Speicher wird in Seitenrahmen fester Groesse unterteilt. Logischer Adressraum wird in Seiten unterteilt. Die virtuelle Adresse wird durch die MMU in eine reale Adresse umgewandelt. Die Seitentabelle gibt das Mapping der Seiten auf Seitenrahmen an.",
          source: "02_rabs_speicher.pdf, Folien 31-33"
        },
        {
          t: "Page Fault",
          b: "Wenn eine virtuelle Adresse auf eine ausgelagerte Seite fuehrt, entsteht ein Systemaufruf Seitenfehler. Das Betriebssystem lagert einen wenig benutzten Seitenrahmen aus, laedt die angeforderte Seite, aktualisiert die Seitentabelle und fuehrt den Befehl noch einmal aus.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          t: "Seitengroesse, Ersetzung und TLB",
          b: "Grosse Seiten bedeuten weniger Einlagerungen, aber mehr interne Fragmentierung. Kleine Seiten bedeuten lange Seitentabellen. Genannte Seitenersetzungsstrategien: NRU, FIFO, LRU, Working-Set und WSClock. Der TLB ist ein spezieller Teil der MMU, der Teile der Seitentabelle cached.",
          source: "02_rabs_speicher.pdf, Folie 35"
        }
      ],
      questions: [
        {
          q: "Was ist ein Adressraum?",
          a: "Ein Adressraum ist die Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann.",
          source: "02_rabs_speicher.pdf, Folie 20"
        },
        {
          q: "Wie beschreibt die Vorlesung Paging?",
          a: "Physikalischer Speicher wird in Seitenrahmen fester Groesse unterteilt, der logische Adressraum in Seiten. Die MMU wandelt virtuelle Adressen in reale Adressen um, und die Seitentabelle liefert das Mapping auf Seitenrahmen.",
          source: "02_rabs_speicher.pdf, Folien 31-33"
        },
        {
          q: "Was ist der TLB?",
          a: "Der TLB ist ein spezieller Teil der MMU, der Teile der Seitentabelle cached.",
          source: "02_rabs_speicher.pdf, Folie 35"
        }
      ],
      flashcards: [
        {
          front: "Adressraum",
          back: "Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann.",
          source: "02_rabs_speicher.pdf, Folie 20"
        },
        {
          front: "Page Fault",
          back: "Virtuelle Adresse verweist auf ausgelagerte Seite; das Betriebssystem laedt die Seite nach und fuehrt den Befehl erneut aus.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          front: "TLB",
          back: "Spezieller Teil der MMU, der Teile der Seitentabelle cached.",
          source: "02_rabs_speicher.pdf, Folie 35"
        }
      ]
    },
    {
      id: "ipc-kommunikation",
      title: "IPC & Kommunikation",
      icon: "📡",
      cards: [
        {
          t: "Zeitliche Kopplung",
          b: "Synchrone Kommunikation: Der Sender wartet, bis der Empfaenger die Information entgegengenommen hat; die Empfangsoperation blockiert den Empfaenger bis Information eintrifft. Asynchrone Kommunikation: Der Sender setzt sofort seine Arbeit fort; der Empfaenger arbeitet auch dann weiter, wenn nichts empfangen wurde.",
          source: "10_rabs-ipc.pdf, Folie 18"
        },
        {
          t: "Pipes",
          b: "Pipes uebertragen einen Strom von Bytes in FIFO-Reihenfolge zwischen Prozessen. Eine unbenannte Pipe ist zunaechst nur dem erzeugenden Prozess bekannt; Dateideskriptoren werden an Kindprozesse vererbt. Eine benannte Pipe ist als spezielle Datei im Dateisystem sichtbar und wird mit mkfifo erzeugt.",
          source: "10_rabs-ipc.pdf, Folien 25-30"
        },
        {
          t: "Pipes in der Shell",
          b: "Pipe-Operator unter Linux: |. Beispiele: cat foo.txt | lpr -Php1320 oder set | grep PATH. Die Ausgabe eines Kommandos wird ueber eine Pipe an das naechste Kommando uebergeben.",
          source: "10_rabs-ipc.pdf, Folie 31"
        },
        {
          t: "Shared Memory",
          b: "Gemeinsamer Speicher muss beim Betriebssystem explizit angefordert werden, von Sender und Empfaenger gleichermassen. Die Adresse des gemeinsamen Speichersegments wird in den Prozessadressraum integriert. Sender und Empfaenger muessen denselben Datentyp benutzen und synchronisiert zugreifen.",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        },
        {
          t: "Shared Memory in UNIX",
          b: "Systemaufrufe: shmget zum Anfordern oder Erzeugen, shmat zum Einbinden, shmdt zum Entfernen und shmctl fuer Steuerfunktionen.",
          source: "10_rabs-ipc.pdf, Folie 44"
        }
      ],
      questions: [
        {
          q: "Was ist der Unterschied zwischen synchroner und asynchroner Kommunikation?",
          a: "Bei synchroner Kommunikation wartet der Sender, bis der Empfaenger die Information entgegengenommen hat. Bei asynchroner Kommunikation setzt der Sender nach dem Senden sofort seine Arbeit fort.",
          source: "10_rabs-ipc.pdf, Folie 18"
        },
        {
          q: "Wodurch unterscheiden sich unbenannte und benannte Pipes?",
          a: "Unbenannte Pipes sind zunaechst nur dem erzeugenden Prozess bekannt und ihre Dateideskriptoren werden an Kindprozesse vererbt. Benannte Pipes sind als spezielle Datei im Dateisystem sichtbar und werden mit mkfifo erzeugt.",
          source: "10_rabs-ipc.pdf, Folien 29-30"
        },
        {
          q: "Wie beschreibt die Vorlesung Shared Memory?",
          a: "Gemeinsamer Speicher muss beim Betriebssystem explizit angefordert werden. Die Adresse des gemeinsamen Speichersegments wird in den Prozessadressraum integriert. Sender und Empfaenger muessen denselben Datentyp benutzen und synchronisiert zugreifen.",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        }
      ],
      flashcards: [
        {
          front: "Asynchrone Kommunikation",
          back: "Sender setzt nach dem Senden sofort seine Arbeit fort.",
          source: "10_rabs-ipc.pdf, Folie 18"
        },
        {
          front: "Named Pipe",
          back: "Spezielle Datei im Dateisystem; Erzeugung mit mkfifo.",
          source: "10_rabs-ipc.pdf, Folie 30"
        },
        {
          front: "shmget, shmat, shmdt, shmctl",
          back: "Systemaufrufe fuer Shared Memory in UNIX.",
          source: "10_rabs-ipc.pdf, Folie 44"
        }
      ]
    },
    {
      id: "dateisysteme",
      title: "Dateisysteme",
      icon: "📁",
      cards: [
        {
          t: "Dateisysteme",
          b: "Dateisysteme speichern Daten und Programme persistent in Dateien. Sie bilden eine Betriebssystemabstraktion zur Nutzung von Hintergrundspeichern und bestehen aus Dateien, Verzeichnissen und Partitionen.",
          source: "03_rabs_dateisystem.pdf, Folie 18"
        },
        {
          t: "Unix I-Nodes",
          b: "Ein spezieller Plattenblock, der Indexblock, enthaelt alle Blocknummern der Datenbloecke einer Datei. Beispiel: Unix I-Nodes. Problem: Der Indexblock ist nur ein Plattenblock, die Kapazitaet ist begrenzt. Deshalb gibt es mehrere Indexstufen fuer groessere Dateien.",
          source: "03_rabs_dateisystem.pdf, Folie 47"
        },
        {
          t: "VFAT und UFS",
          b: "VFAT ist heute gebraeuchlich bei eingebetteten Systemen, Digitalkameras, MP3-Playern und USB-Sticks. UFS = UNIX File System. Dateien sind einfache, unstrukturierte Folgen von Bytes. Bei UFS sind Verzeichnisse baumfoermig strukturiert, Blaetter sind Verweise auf Dateien.",
          source: "03_rabs_dateisystem.pdf, Folien 50-52"
        },
        {
          t: "Backup",
          b: "Komplett-Backup sichert alle Daten, also die komplette Platte. Inkrementelles Backup sichert die Aenderungen ab einem bestimmten Zeitpunkt. Differenzielles Backup sichert die Aenderungen immer bezogen auf das letzte Komplett-Backup. Die 3-2-1-Regel fordert drei Kopien, zwei Datentraeger und ein Backup ausser Haus.",
          source: "03_rabs_dateisystem.pdf, Folien 53-54"
        }
      ],
      questions: [
        {
          q: "Woraus bestehen Dateisysteme laut Vorlesung?",
          a: "Aus Dateien, Verzeichnissen beziehungsweise Katalogen und Partitionen.",
          source: "03_rabs_dateisystem.pdf, Folie 18"
        },
        {
          q: "Was ist das Problem eines Unix I-Node-Indexblocks?",
          a: "Der Indexblock ist nur ein Plattenblock und seine Kapazitaet ist daher begrenzt. Fuer groessere Dateien werden mehrere Indexstufen benoetigt.",
          source: "03_rabs_dateisystem.pdf, Folie 47"
        },
        {
          q: "Wie unterscheiden sich Komplett-, inkrementelles und differenzielles Backup?",
          a: "Komplett-Backup sichert alle Daten. Inkrementelles Backup sichert die Aenderungen ab einem bestimmten Zeitpunkt. Differenzielles Backup sichert die Aenderungen immer bezogen auf das letzte Komplett-Backup.",
          source: "03_rabs_dateisystem.pdf, Folie 53"
        }
      ],
      flashcards: [
        {
          front: "Dateisysteme",
          back: "Speichern Daten und Programme persistent in Dateien.",
          source: "03_rabs_dateisystem.pdf, Folie 18"
        },
        {
          front: "Unix I-Nodes",
          back: "Indexblock mit Blocknummern; Kapazitaet eines einzelnen Indexblocks ist begrenzt.",
          source: "03_rabs_dateisystem.pdf, Folie 47"
        },
        {
          front: "3-2-1-Regel",
          back: "Drei Kopien der Daten, auf mindestens zwei unterschiedlichen Datentraegern, mindestens ein Backup ausser Haus.",
          source: "03_rabs_dateisystem.pdf, Folie 54"
        }
      ]
    },
    {
      id: "syscalls-shell",
      title: "Syscalls & Shell",
      icon: "🐚",
      cards: [
        {
          t: "Systemaufrufe",
          b: "Systemaufrufe sind die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem. Sie sind meist in Bibliotheksfunktionen gekapselt. Die Nummer des Systemaufrufs wird vor Ausfuehrung des TRAP-Befehls in ein festes Register geschrieben.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          t: "Ablauf eines Systemaufrufs",
          b: "Das Betriebssystem sichert zunaechst den vollstaendigen Prozessorstatus in der Threadtabelle oder Prozesstabelle. Der aufrufende Thread kann blockiert werden. Die Rueckkehr aus dem Betriebssystem erfolgt ueber den Scheduler und nicht unbedingt sofort zum aufrufenden Thread.",
          source: "04_rabs-os-konzepte.pdf, Folie 8"
        },
        {
          t: "Beispiel read und typische Aufrufe",
          b: "read ist mit Dateihandler, Buffer und Anzahl der Zeichen parametrisiert und liefert die Anzahl der tatsaechlich gelesenen Zeichen zurueck. Typische Systemaufrufe sind fork, waitpid, execve, exit, open, close, read, write, lseek, mkdir, mount, chdir, chmod, chown, kill und time.",
          source: "04_rabs-os-konzepte.pdf, Folien 9-11"
        },
        {
          t: "Shell",
          b: "Die Shell ist kein Teil des Betriebssystems, nutzt aber dessen Eigenschaften. Textuelle Shells ermoeglichen Kommandos, Ein- und Ausgabeumleitung, Pipes und Ausfuehrung im Hintergrund. UNIX-Philosophie: viele kleine Kommandos, die man ueber Pipes kombinieren kann.",
          source: "04_rabs-os-konzepte.pdf, Folien 28-31"
        }
      ],
      questions: [
        {
          q: "Was sind Systemaufrufe?",
          a: "Systemaufrufe sind die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem. Sie sind meist in Bibliotheksfunktionen gekapselt.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          q: "Was sagt die Vorlesung zum Ablauf eines Systemaufrufs?",
          a: "Das Betriebssystem sichert den vollstaendigen Prozessorstatus, der aufrufende Thread kann blockiert werden und die Rueckkehr erfolgt ueber den Scheduler.",
          source: "04_rabs-os-konzepte.pdf, Folie 8"
        },
        {
          q: "Welche Moeglichkeiten nennt die Vorlesung fuer die textuelle Shell?",
          a: "Kommandos zum Start neuer Prozesse, Ein- und Ausgabeumleitung, Pipes und Ausfuehrung im Hintergrund.",
          source: "04_rabs-os-konzepte.pdf, Folien 30-31"
        }
      ],
      flashcards: [
        {
          front: "Systemaufruf",
          back: "Schnittstelle zwischen Benutzerprogrammen und Betriebssystem.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          front: "read",
          back: "Liest Daten aus Datei in einen Puffer; Rueckgabewert ist die Anzahl der tatsaechlich gelesenen Zeichen.",
          source: "04_rabs-os-konzepte.pdf, Folie 9"
        },
        {
          front: "Shell",
          back: "Kein Teil des Betriebssystems; bietet Kommandos, Umleitung, Pipes und Hintergrundausfuehrung.",
          source: "04_rabs-os-konzepte.pdf, Folien 28-31"
        }
      ]
    }
  ]
};
