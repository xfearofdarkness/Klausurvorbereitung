---
id: synchronisation
title: Synchronisation
icon: 🔐
---

## Karte: Prozessinteraktion
quelle: 08_rabs-synchro-1.pdf, Folien 4-6

Prozesse als Teile komplexer Programmsysteme müssen Daten austauschen, sich aufrufen, aufeinander warten, sich auslösen und sich abstimmen. Operationen zur Prozessinteraktion sind neben Prozessverwaltung ein wesentlicher Aufgabenbereich eines Betriebssystemkerns.

## Karte: Zeitlicher und funktionaler Aspekt
quelle: 08_rabs-synchro-1.pdf, Folie 7

Prozessinteraktion besitzt einen zeitlichen Aspekt, nämlich Ablaufabstimmung beziehungsweise Koordination und Synchronisation, und einen funktionalen Aspekt, nämlich Informationsaustausch beziehungsweise Kommunikation und Kooperation.

## Karte: Nebenläufigkeit
tag: def
quelle: 08_rabs-synchro-1.pdf, Folien 12-13

Mehrere Abläufe heißen nebenläufig, wenn sie parallel oder quasi-parallel ausgeführt werden und inhaltlich zusammenwirken, also voneinander abhängig sind und sich gegenseitig beeinflussen können: Nebenläufigkeit = Parallelität + Abhängigkeit.

## Karte: Zentrale Konzepte der Nebenläufigkeit
quelle: 08_rabs-synchro-1.pdf, Folie 14

Zentrale Konzepte sind Kommunikation zwischen Prozessen, gemeinsame Nutzung von Ressourcen, Wettbewerb um Ressourcen, Synchronisierung der Aktivitäten mehrerer Prozesse und Zuteilung von Prozessorzeit.

## Karte: Gemeinsame Ressourcen
tag: wichtig
quelle: 08_rabs-synchro-1.pdf, Folie 15

Nebenläufige Prozesse können sich über gemeinsamen Adressbereich oder gemeinsame Ressourcen wie Dateien und Geräte beeinflussen. Dateninkonsistenzen können entstehen; Ergebnisse können von der Ausführungsreihenfolge abhängen.

## Karte: Atomare Operationen und DMA
quelle: 08_rabs-synchro-1.pdf, Folien 17-18

Im Mehrprozessorsystem bietet RAM über den Bus atomare Lese-/Schreiboperationen an. DMA-fähige Geräte zerlegen Kopiervorgänge in kleine Teile; für jeden Teil erhält das Gerät den Bus atomar, damit Wartezeiten anderer Geräte und CPUs nicht zu lang werden.

## Karte: Allgemeine Bemerkung zur Fehlersuche
quelle: 08_rabs-synchro-1.pdf, Folie 19

Threads können sich wegen Pausen überholen und unterschiedliche Geschwindigkeiten haben. Gibt es eine einzige Konstellation, die zu einem Fehler führt, ist die Software fehlerhaft, selbst wenn die Wahrscheinlichkeit minimal ist.

## Karte: Too much milk: Problem
tag: beispiel
quelle: 08_rabs-synchro-1.pdf, Folien 22-25

Alice und Bob teilen einen Kühlschrank, es soll stets genug, aber nicht zu viel Milch da sein. Naive Lösung: Wer sieht, dass keine Milch da ist, geht welche kaufen. Das scheitert: Beide sehen, dass keine Milch da ist, und beide kaufen, also ist zu viel Milch im Kühlschrank. Ziel mit Notizen am Kühlschrank: Mindestens einer und höchstens einer kauft Milch, wenn keine da ist. Beide sehen sich nicht und kommunizieren nur über Notizen.

## Karte: Too much milk: Lösungsversuche
tag: beispiel
quelle: 08_rabs-synchro-1.pdf, Folien 26-31

1. Versuch: Wenn keine Notiz und keine Milch da ist, Notiz schreiben, kaufen, Notiz entfernen. Scheitert bei der Sequenz A1, A2, B1, B2: Beide prüfen, bevor einer die Notiz geschrieben hat. 2. Versuch mit zwei Notizen: Zuerst die eigene Notiz schreiben, dann nur kaufen, wenn keine Notiz des anderen da ist. Scheitert bei A1, B1, A2, B2, A5, B5: Beide sehen die Notiz des anderen, und niemand kauft. Die korrekte Lösung nutzt zusätzliche Notizen, um den Vorrang zu entscheiden, und wartet aktiv (<code>while … do skip</code>), bevor Milch geprüft und gekauft wird.

## Karte: Mutual-Exclusion-Problem
tag: def
quelle: 08_rabs-synchro-1.pdf, Folie 32

Das Mutual-Exclusion-Problem fordert die Garantie, dass exklusiver Zugriff auf eine gemeinsam genutzte Ressource sichergestellt wird. Zugriffscode heißt kritischer Abschnitt; Ziel ist die Vermeidung von Race Conditions durch Synchronisation.

## Karte: Race Condition
tag: wichtig
quelle: 08_rabs-synchro-1.pdf, Folie 32

Eine Race Condition ist eine Situation, in der mehrere Prozesse konkurrierend auf gemeinsame Daten zugreifen und mindestens einer sie manipuliert. Der letztendliche Wert hängt von der Reihenfolge der Zugriffe ab und kann inkorrekt sein.

## Karte: Ziel der Synchronisation
quelle: 08_rabs-synchro-1.pdf, Folie 33

Synchronisation bringt Aktivitäten verschiedener nebenläufiger Prozesse in eine Reihenfolge. Durch wechselseitigen Ausschluss wird Zugriff auf gemeinsam benutzte Betriebsmittel so abgestimmt, dass Datenkonsistenz und Korrektheit erreicht werden.

## Karte: Kritischer Abschnitt
tag: def
quelle: 08_rabs-synchro-1.pdf, Folie 34

Ein kritischer Abschnitt ist ein Programmabschnitt, der Zugriffe auf ein gemeinsam genutztes Objekt enthält. Zur Vermeidung von Inkonsistenzen muss er geschützt werden; zu jeder Zeit darf nur ein Prozess die Aktivität ausführen.

## Karte: Anforderungen an wechselseitigen Ausschluss
quelle: 08_rabs-synchro-1.pdf, Folien 36-37

Die Lösung darf keine Annahmen über Geschwindigkeit oder CPU-Anzahl machen. Sie muss Mutual Exclusion, Progress ohne Deadlock, Bounded Waiting ohne Starvation, Nicht-Behinderung durch Prozesse außerhalb des kritischen Abschnitts und sofortigen Zugang bei freiem Abschnitt sicherstellen.

## Karte: Aktives Warten: typische Fehler
quelle: 08_rabs-synchro-1.pdf, Folien 38-41

Interruptsperren blockieren E/A, nehmen dem Betriebssystem Kontrolle und funktionieren nur auf Einprozessorsystemen. Eine einfache Sperrvariable leidet an Race Conditions. Strikter Wechsel verletzt Anforderungen, weil Prozesse abwechseln müssen. Erst belegen, dann prüfen kann zur Verklemmung führen.

## Frage: Welche drei Grundformen der Interaktion stehen in Beziehung?
id: jiqqij
quelle: 08_rabs-synchro-1.pdf, Folien 7-8

Koordination, Kommunikation und Kooperation; Koordination ist elementar, weil Kommunikation und Kooperation zeitliche Abstimmung benötigen.

## Frage: Was bedeutet Nebenläufigkeit laut Definition?
id: 1m29jvw
quelle: 08_rabs-synchro-1.pdf, Folie 13

Parallel oder quasi-parallel ausgeführte Abläufe, die inhaltlich zusammenwirken, voneinander abhängig sind und sich gegenseitig beeinflussen können.

## Frage: Wie arbeitet DMA laut Folie?
id: 7o2xd6
quelle: 08_rabs-synchro-1.pdf, Folie 18

Bei DMA werden Kopiervorgänge in kleine Teile zerlegt; jeder Teil erhält den Bus atomar.

## Frage: Welche beiden Bedingungen muss die Too-much-milk-Lösung erfüllen?
id: skyv9p
quelle: 08_rabs-synchro-1.pdf, Folie 25

Wenn keine Milch da ist, geht mindestens eine und höchstens eine der beiden Personen Milch kaufen.

## Frage: Warum scheitert der 1. Lösungsversuch bei Too much milk?
id: 12y0xt7
quelle: 08_rabs-synchro-1.pdf, Folie 26

Bei der Sequenz A1, A2, B1, B2 prüfen beide auf Notiz und Milch, bevor einer seine Notiz geschrieben hat; beide kaufen.

## Frage: Warum scheitert der 2. Lösungsversuch bei Too much milk?
id: xn1lv4
quelle: 08_rabs-synchro-1.pdf, Folie 29

Bei der Sequenz A1, B1, A2, B2, A5, B5 schreiben beide ihre Notiz, sehen dann die des anderen und entfernen ihre eigene; niemand kauft Milch.

## Frage: Was ist eine Race Condition?
id: 1b81z5g
quelle: 08_rabs-synchro-1.pdf, Folie 32

Mehrere Prozesse greifen konkurrierend auf gemeinsame Daten zu, mindestens einer manipuliert sie, und das Ergebnis hängt von der Zugriffsreihenfolge ab.

## Frage: Was bedeutet Mutual Exclusion?
id: 1ta8o05
quelle: 08_rabs-synchro-1.pdf, Folie 32

Mutual Exclusion bedeutet, dass exklusiver Zugriff auf eine gemeinsam genutzte Ressource garantiert wird.

## Frage: Was ist ein kritischer Abschnitt?
id: 12z3125
quelle: 08_rabs-synchro-1.pdf, Folie 34

Ein Programmabschnitt, der Zugriffe auf ein gemeinsam genutztes Objekt beziehungsweise eine kritische Ressource enthält.

## Frage: Was fordert Bounded Waiting?
id: 1c0g8d3
quelle: 08_rabs-synchro-1.pdf, Folie 37

Bounded Waiting fordert, dass kein Prozess ewig warten muss, bis er in den kritischen Abschnitt eintreten darf.

## Frage: Warum ist eine einfache Sperrvariable problematisch?
id: g5dg1l
quelle: 08_rabs-synchro-1.pdf, Folie 39

Sie kann selbst eine Race Condition erzeugen, weil Prüfung und Setzen nicht atomar geschützt sind.
