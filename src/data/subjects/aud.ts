import type { RawSubject } from "../../types/content";

const aud = {
  id: "aud",
  title: "AuD",
  subtitle: "Algorithmen und Datenstrukturen",
  icon: "🧮",
  topics: [
    {
      id: "einfuehrung",
      title: "Einführung",
      icon: "🧭",
      cards: [
        {
          title: "Computational Thinking",
          body: "„Informatisches Denken“: Beschreibt Denkprozesse, bei denen die Problembeschreibung und Lösungsfindung so erfolgt bzw. beschrieben wird, dass die Lösung auch effektiv durch andere (Personen oder Computer) durchgeführt werden kann. Ist eine allgemeine Denkschule und unabhängig von Computern & Programmierung.",
          tag: "def",
          source: "01_introduction.pdf, Folie 4"
        },
        {
          title: "Kernkonzepte des Computational Thinking",
          body: "Abstraktion, Dekomposition, Mustererkennung, Algorithmisierung.",
          tag: "wichtig",
          source: "01_introduction.pdf, Folie 6"
        },
        {
          title: "Dekomposition",
          body: "Ziel: Zerlegung eines komplexen Problems in kleinere, überschaubare Teile. Verwandtes Prinzip: Teile und Herrsche (Divide & Conquer). Beispiele: Tagesablauf in Abschnitte unterteilen, Aufgabenstellung erfassen und aufteilen.",
          tag: "def",
          source: "01_introduction.pdf, Folie 7"
        },
        {
          title: "Mustererkennung",
          body: "Ziel: Identifikation von wiederkehrenden Gemeinsamkeiten und Unterschieden. Beispiel: Muster und Regelmäßigkeiten in Zahlenreihen erkennen (2, 4, 8, 16, … / 1, 4, 9, 16, … / 1, 1, 2, 3, 5, …).",
          tag: "def",
          source: "01_introduction.pdf, Folie 8"
        },
        {
          title: "Abstraktion und Modellbildung",
          body: "Ziel: Reduktion von Informationen auf die zur Lösung wesentlichen. Fokussieren auf wesentliche Details, um Komplexität zu reduzieren; z. T. Nutzung von Modellen und Diagrammen. Beispiel: Windkanaltests von Autos — wichtig ist die Karosserie, Motor etc. können weggelassen werden.",
          tag: "def",
          source: "01_introduction.pdf, Folie 9"
        },
        {
          title: "Algorithmisierung",
          body: "„Eine eindeutig festgelegte Abfolge von Schritten oder Regeln zur Lösung eines Problems.“ Endet nach endlich vielen Schritten. Deterministisch: bei gleicher Eingabe erhält man das gleiche Ergebnis. Große Bedeutung im alltäglichen Leben (Beispiel: Tür öffnen).",
          tag: "def",
          source: "01_introduction.pdf, Folie 10"
        },
        {
          title: "Algorithmus",
          body: "Ein Algorithmus ist eine Abfolge eindeutiger Anweisungen zur Lösung eines Problems, d. h. zur Erzeugung eines gewünschten Ergebnisses, für jede zulässige Eingabe, innerhalb einer endlichen Zeitspanne.",
          tag: "def",
          source: "01_introduction.pdf, Folie 14"
        },
        {
          title: "Arten von Problemen",
          body: "<b>Berechnungsproblem:</b> berechne Ausgabedaten aus Eingabedaten. <b>Entscheidungsproblem:</b> gibt es eine Lösung mit bestimmtem Wert? (Ja/Nein-Antwort). <b>Optimierungsproblem:</b> bestimme den Wert der optimalen Lösung (beste unter vielen möglichen Lösungen) oder gib die optimale Lösung zurück (Suchproblem).",
          tag: "wichtig",
          source: "01_introduction.pdf, Folie 15"
        },
        {
          title: "Eigenschaften eines Algorithmus",
          body: "<b>Endlichkeit:</b> muss nach einer endlichen Anzahl von Schritten immer beendet sein. <b>Bestimmtheit:</b> jeder Schritt muss genau definiert sein; die auszuführenden Aktionen müssen für jeden Fall streng und eindeutig festgelegt sein. <b>Eingabe:</b> null oder mehr Eingaben aus einer festgelegten Menge von Objekten. <b>Ausgabe:</b> eine oder mehrere Ausgaben, die in einer festgelegten Beziehung zu den Eingaben stehen. <b>Wirksamkeit:</b> alle Operationen müssen so einfach sein, dass sie exakt und in endlicher Zeit durchgeführt werden können.",
          tag: "wichtig",
          source: "01_introduction.pdf, Folie 16"
        },
        {
          title: "Darstellungsformen eines Algorithmus",
          body: "<b>Natürliche Sprache:</b> meist umständlich und mehrdeutig. <b>Flussdiagramme:</b> vermeiden die meisten Mehrdeutigkeiten; ohne spezielle Werkzeuge schwer anzupassen; weitgehend standardisiert (Beispiel: Programmablaufplan, PAP). <b>Pseudo-Code:</b> vermeidet ebenfalls die meisten Mehrdeutigkeiten; ähnelt vage gängigen Elementen von Programmiersprachen; keine einheitliche Übereinkunft hinsichtlich der Syntax. <b>Programmiersprache:</b> erfordert i. d. R. Details auf niedriger Ebene, die für ein Verständnis auf hoher Ebene nicht notwendig sind.",
          source: "01_introduction.pdf, Folie 17"
        },
        {
          title: "Pseudocode-Konstrukte",
          body: "<b>Methodendeklaration:</b> Algorithm name(param1, param2, …). <b>Methodenrückgabe:</b> return value. <b>Zuweisungsoperator:</b> count <- 0 (initialer Wert), count <- count + 1 (berechneter Wert). <b>Boolescher Ausdruck:</b> num = 1 definiert eine Bedingung (true/false). <b>Auswahl:</b> if bedingung then wahr-Aktion [else falsch-Aktion]. <b>Iteration:</b> while bedingung do Aktionen od; repeat Aktionen until Bedingung; for variable-increment-definition do Aktionen od.",
          source: "01_introduction.pdf, Folien 18-20"
        },
        {
          title: "Algorithmisches Problem und Lösung",
          body: "Ein algorithmisches Problem besteht aus der Spezifikation der Eingabe und der Spezifikation der Ausgabe als Funktion der Eingabe. Es gibt unendlich viele mögliche Eingabeinstanzen, die die Spezifikation erfüllen. Ein Algorithmus beschreibt die Schritte, die an der Eingabeinstanz durchgeführt werden. Für dasselbe algorithmische Problem kann es viele korrekte Algorithmen geben.",
          source: "01_introduction.pdf, Folien 23-24"
        },
        {
          title: "Modell zur Problemlösung",
          body: "Vier Phasen: <b>Analyse</b> (Problemdaten analysieren → Problemdefinition), <b>Suche</b> nach existierenden Lösungen, <b>Entwurf</b> der Lösung (Datenstrukturen und Algorithmen), <b>Implementierung</b> (Programm).",
          tag: "wichtig",
          source: "01_introduction.pdf, Folien 25-26"
        },
        {
          title: "Datenstruktur, Algorithmus, Programm",
          body: "<b>Datenstruktur:</b> eine systematische Art und Weise, Daten zu organisieren und darauf zuzugreifen. <b>Algorithmus:</b> eine systematische Art und Weise, um die Lösung für ein Problem/eine Fragestellung zu finden. <b>Programm:</b> Implementierung eines Algorithmus in einer Programmiersprache.",
          tag: "def",
          source: "01_introduction.pdf, Folie 27"
        },
        {
          title: "Entwurfsziele",
          body: "<b>Korrektheit:</b> für alle möglichen Eingaben funktionieren, auf die man in einer bestimmten Domäne (z. B. Wertebereich, Datentyp) stoßen könnte. <b>Effizienz:</b> schnell sein und nicht mehr Ressourcen des Computers beanspruchen, als unbedingt nötig ist.",
          tag: "wichtig",
          source: "01_introduction.pdf, Folien 28-29"
        },
        {
          title: "Implementierungsziele",
          body: "<b>Robustheit:</b> Eingaben verarbeiten können, die für den Anwendungsbereich nicht explizit definiert sind. <b>Anpassbarkeit:</b> sich im Laufe der Zeit an veränderte Umweltbedingungen anpassen können. <b>Wiederverwendbarkeit:</b> denselben Code in einer Komponente verschiedener Systeme verwenden können.",
          tag: "wichtig",
          source: "01_introduction.pdf, Folien 30-31"
        },
        {
          title: "Vorbedingung, Nachbedingung, Sonderfälle",
          body: "<b>Vorbedingung:</b> Was erhält der Algorithmus als Eingabe? <b>Nachbedingung:</b> Was gibt der Algorithmus als Ausgabe aus? <b>Sonderfälle:</b> leere Menge, Zahl 0, Zeiger nil, …",
          tag: "def",
          source: "01_introduction.pdf, Folie 36"
        },
        {
          title: "Effizienz: experimentelle Untersuchungen",
          body: "Untersuchung der Laufzeit durch Ausführung an verschiedenen Testdaten und Erfassung der benötigten Zeit bei jeder Ausführung; die Laufzeit steigt mit der Größe der Eingabedaten. <b>Einschränkungen:</b> Experimente nur mit begrenzter Anzahl von Testdaten möglich; Vergleich zweier Algorithmen schwierig, sofern die Experimente nicht auf derselben Hardware und Software durchgeführt wurden; der Algorithmus muss implementiert und ausgeführt werden, um seine Laufzeit zu untersuchen.",
          source: "01_introduction.pdf, Folie 38"
        },
        {
          title: "Zeitkomplexität",
          body: "Die Anzahl der Schritte, die ein Algorithmus benötigt, um ein Problem der Größe n zu lösen. Grundoperationen, die unabhängig von der Programmiersprache sind: eine arithmetische Operation (z. B. +, *), eine Zuweisung (z. B. x <- 0), eine Überprüfung (z. B. x = 0), ein Zugriff auf Index (z. B. x[i]).",
          tag: "def",
          source: "01_introduction.pdf, Folie 39"
        },
        {
          title: "Beispiel: Effizienz des Mittelwert-Algorithmus",
          body: "Zählen der Grundoperationen im Algorithmus average(DATA): 4 Zuweisungen zu Beginn, n Bedingungsprüfungen der for-Schleife, pro Durchlauf 2 + 3 Operationen (Zuweisung, Summieren; Zuweisung, Summieren, Indexzugriff), dazu Bedingung, Zuweisung mit Division und Rückgabe: T(n) = 4 + n + n·(2+3) + 1 + 2 + 1 = 6n + 8 = O(n).",
          tag: "beispiel",
          source: "01_introduction.pdf, Folie 40"
        }
      ],
      questions: [
        {
          question: "Was beschreibt Computational Thinking?",
          answer: "Denkprozesse, bei denen die Problembeschreibung und Lösungsfindung so erfolgt bzw. beschrieben wird, dass die Lösung auch effektiv durch andere (Personen oder Computer) durchgeführt werden kann. Es ist eine allgemeine Denkschule, unabhängig von Computern und Programmierung.",
          source: "01_introduction.pdf, Folie 4"
        },
        {
          question: "Nennen Sie die vier Kernkonzepte des Computational Thinking.",
          answer: "Abstraktion, Dekomposition, Mustererkennung, Algorithmisierung.",
          source: "01_introduction.pdf, Folie 6"
        },
        {
          question: "Welche fünf Eigenschaften muss ein Algorithmus besitzen?",
          answer: "Endlichkeit (endet nach endlich vielen Schritten), Bestimmtheit (jeder Schritt genau definiert), Eingabe (null oder mehr Eingaben aus festgelegter Menge), Ausgabe (eine oder mehrere Ausgaben in festgelegter Beziehung zu den Eingaben), Wirksamkeit (alle Operationen exakt und in endlicher Zeit durchführbar).",
          source: "01_introduction.pdf, Folie 16"
        },
        {
          question: "Welche Arten von Problemen unterscheiden die Folien?",
          answer: "Berechnungsproblem (Ausgabedaten aus Eingabedaten berechnen), Entscheidungsproblem (gibt es eine Lösung mit bestimmtem Wert? Ja/Nein) und Optimierungsproblem (Wert der optimalen Lösung bestimmen bzw. die optimale Lösung zurückgeben — Suchproblem).",
          source: "01_introduction.pdf, Folie 15"
        },
        {
          question: "Auf welche Weisen kann ein Algorithmus dargestellt werden, und was sind die jeweiligen Nachteile?",
          answer: "Natürliche Sprache (umständlich, mehrdeutig), Flussdiagramme (kaum Mehrdeutigkeiten, aber ohne Werkzeuge schwer anzupassen), Pseudo-Code (kaum Mehrdeutigkeiten, aber keine einheitliche Syntax) und Programmiersprache (erfordert Details auf niedriger Ebene, die für das Verständnis nicht nötig sind).",
          source: "01_introduction.pdf, Folie 17"
        },
        {
          question: "Aus welchen Phasen besteht das Modell zur Problemlösung?",
          answer: "Analyse (Problemdefinition), Suche nach existierenden Lösungen, Entwurf (Datenstrukturen und Algorithmen), Implementierung (Programm).",
          source: "01_introduction.pdf, Folien 25-26"
        },
        {
          question: "Welche Ziele gelten in der Entwurfsphase, welche in der Implementierung?",
          answer: "Entwurfsziele: Korrektheit und Effizienz. Implementierungsziele: Robustheit, Anpassungsfähigkeit und Wiederverwendbarkeit.",
          source: "01_introduction.pdf, Folien 28-31"
        },
        {
          question: "Was versteht man unter der Zeitkomplexität eines Algorithmus?",
          answer: "Die Anzahl der Schritte, die ein Algorithmus benötigt, um ein Problem der Größe n zu lösen — gezählt in Grundoperationen, die unabhängig von der Programmiersprache sind (arithmetische Operation, Zuweisung, Überprüfung, Indexzugriff).",
          source: "01_introduction.pdf, Folie 39"
        },
        {
          question: "Welche Einschränkungen haben experimentelle Untersuchungen der Laufzeit?",
          answer: "Nur eine begrenzte Anzahl von Testdaten möglich; der Vergleich zweier Algorithmen ist schwierig, wenn die Experimente nicht auf derselben Hardware und Software liefen; der Algorithmus muss implementiert und ausgeführt werden.",
          source: "01_introduction.pdf, Folie 38"
        }
      ],
      flashcards: [
        {
          front: "Algorithmus (Definition)",
          back: "Abfolge eindeutiger Anweisungen zur Lösung eines Problems: erzeugt ein gewünschtes Ergebnis, für jede zulässige Eingabe, innerhalb einer endlichen Zeitspanne.",
          source: "01_introduction.pdf, Folie 14"
        },
        {
          front: "4 Kernkonzepte des Computational Thinking",
          back: "Abstraktion, Dekomposition, Mustererkennung, Algorithmisierung.",
          source: "01_introduction.pdf, Folie 6"
        },
        {
          front: "5 Eigenschaften eines Algorithmus",
          back: "Endlichkeit, Bestimmtheit, Eingabe, Ausgabe, Wirksamkeit.",
          source: "01_introduction.pdf, Folie 16"
        },
        {
          front: "Dekomposition",
          back: "Zerlegung eines komplexen Problems in kleinere, überschaubare Teile. Verwandt: Teile und Herrsche (Divide & Conquer).",
          source: "01_introduction.pdf, Folie 7"
        },
        {
          front: "Datenstruktur (Definition)",
          back: "Eine systematische Art und Weise, Daten zu organisieren und darauf zuzugreifen.",
          source: "01_introduction.pdf, Folie 27"
        },
        {
          front: "Entwurfsziele vs. Implementierungsziele",
          back: "Entwurf: Korrektheit, Effizienz. Implementierung: Robustheit, Anpassungsfähigkeit, Wiederverwendbarkeit.",
          source: "01_introduction.pdf, Folien 28-31"
        },
        {
          front: "Zeitkomplexität",
          back: "Anzahl der Schritte (Grundoperationen), die ein Algorithmus benötigt, um ein Problem der Größe n zu lösen.",
          source: "01_introduction.pdf, Folie 39"
        }
      ]
    },
    {
      id: "adt",
      title: "Abstrakte Datentypen",
      icon: "📦",
      cards: [
        {
          title: "Menge vs. Liste",
          body: "<b>Menge:</b> ungeordnete Sammlung von Elementen (Werten); jedes Element kommt einmal vor (keine Duplikate). <b>Liste:</b> Aneinanderreihung/Kette von gleichartigen Elementen/Werten; Elemente können mehrfach auftreten.",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folie 3"
        },
        {
          title: "Liste (rekursive Definition)",
          body: "Eine Liste ist eine leere Liste ([ ]) oder ein Listenelement gefolgt von einer Liste. Die Reihenfolge der Elemente hat eine Bedeutung, das gleiche Element kann mehrfach vorkommen. Sequentielles Durchlaufen der Listenelemente.",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folie 4"
        },
        {
          title: "Listenoperationen",
          body: "(Leere) Liste erzeugen, Element anhängen, Element einfügen (an bestimmter Stelle), Element suchen, Element löschen, zum vorherigen/nächsten Element gehen, herausfinden, ob ein weiteres Element existiert (an nächster Position).",
          source: "02_abstract_data_types.pdf, Folie 5"
        },
        {
          title: "Mengenoperationen",
          body: "Einfügen eines Elements, Entfernen eines Elements, Prüfen ob Element enthalten ist, Vereinigung von zwei Mengen, Schnittmenge zweier Mengen, Differenzmenge zweier Mengen, Prüfen ob Menge leer ist, Anzahl der Elemente der Menge.",
          source: "02_abstract_data_types.pdf, Folie 7"
        },
        {
          title: "Sammlung (Collection)",
          body: "Auch Container oder Behälter: fasst eine Gruppe von Objekten zusammen (i. d. R. vom selben Typ). Eine Sammlung ist selbst ein Objekt; sie speichert andere Objekte, manipuliert diese gemeinsam und gibt Sammlungen von Objekten weiter. Die Sammlung enthält die Referenzen auf ihre enthaltenen Objekte, nicht die Objekte selbst.",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folie 8"
        },
        {
          title: "Reihenfolge und Duplikate",
          body: "Reihenfolge: keine definiert, benutzerdefiniert oder automatisch. Duplikate: erlaubt oder nicht erlaubt. Kombinationen: <b>Duplikate zugelassen:</b> Multimenge (Reihenfolge irrelevant), Liste (nutzerdefiniert), Sorted List (automatisch sortiert). <b>Duplikate nicht zugelassen:</b> Menge, Ordered Set, Sorted Set.",
          tag: "wichtig",
          source: "02_abstract_data_types.pdf, Folie 9"
        },
        {
          title: "Java: Set- und List-Implementierungen",
          body: "<b>HashSet:</b> verwendet eine Hashtabelle, um Hashes und Elemente zu speichern und Duplikate auszuschließen. <b>LinkedHashSet:</b> Erweiterung um doppelt verkettete Liste in Einfügereihenfolge (vorhersehbare Iterationsreihenfolge). <b>TreeSet:</b> verwendet binären Suchbaum. <b>ArrayList:</b> implementiert die Liste als Array und verschiebt Elemente innerhalb des Arrays. <b>LinkedList:</b> speichert Elemente in Knoten mit Zeiger auf Vorgänger und Nachfolger; Durchlaufen verfolgt die Zeiger, Hinzufügen/Löschen durch Anpassen der Zeiger.",
          source: "02_abstract_data_types.pdf, Folien 13, 15"
        },
        {
          title: "Gleichheit vs. Identität",
          body: "<b>Identität:</b> 2 Referenzen auf dasselbe Objekt. <b>Gleichheit:</b> gleiche Werte in allen Instanzvariablen. Die Methode equals verlangt per Default Identität (via Hashcode); equals wird anwendungsbezogen überschrieben, um Gleichheit statt Identität zu prüfen.",
          tag: "wichtig",
          source: "02_abstract_data_types.pdf, Folie 18"
        },
        {
          title: "Array als Darstellung einer Sequenz",
          body: "Sequenz: eine geordnete Folge von Elementen. Die gängigste Darstellung ist ein Array. <b>Vorteile:</b> einfacher und effizienter Zugriff auf jedes Element (item[i] liefert das Element an Position i, Zugriff in konstanter Zeit — Direktzugriff); sehr kompakt. <b>Nachteile:</b> anfängliche Array-Größe muss festgelegt und bei Bedarf angepasst werden; es ist schwierig, Elemente an beliebigen Positionen einzufügen oder zu löschen; kann Speicherplatz verschwenden, wenn Positionen leer sind.",
          tag: "wichtig",
          source: "02_abstract_data_types.pdf, Folie 24"
        },
        {
          title: "Verkettete Liste (Linked List)",
          body: "Speichert eine Folge von Elementen in separaten Knoten. Jeder Knoten enthält ein einzelnes Element und einen „Link“ (Verweis) auf den Knoten mit dem nächsten Element. Der letzte Knoten (tail) hat den Verweiswert „null“. Die Liste als Ganzes wird durch eine Variable mit Verweis auf den ersten Knoten dargestellt (head).",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folie 26"
        },
        {
          title: "Verkettete Liste: Operationen an Kopf und Ende",
          body: "<b>Einfügen am Kopf:</b> neuen Knoten erzeugen und auf den bisherigen head verlinken, dann head auf den neuen Knoten setzen. <b>Entfernen am Kopf:</b> head auf den nächsten Knoten der Liste setzen, der bisherige erste Knoten entfällt. <b>Einfügen am Ende:</b> neuen Knoten mit Verweis null erzeugen, den bisherigen tail auf ihn verlinken und tail auf den neuen Knoten setzen.",
          source: "02_abstract_data_types.pdf, Folien 30-35"
        },
        {
          title: "Verkettete Liste: Vor- und Nachteile",
          body: "<b>Vorteile:</b> kann unbegrenzt wachsen (genug Speicher vorausgesetzt); Einfügen/Löschen ist einfach — kein Verschieben anderer Elemente nötig, nur die Links werden angepasst. <b>Nachteile:</b> kein Direktzugriff (man muss die Liste „entlanglaufen“); die Links belegen zusätzlichen Speicher; Entfernen am Ende einer einfach verketteten Liste ist nicht effizient — es gibt keinen Weg in konstanter Zeit, tail auf den Vorgängerknoten zu setzen.",
          tag: "wichtig",
          source: "02_abstract_data_types.pdf, Folien 36-37"
        },
        {
          title: "Doppelt verkettete Liste (Doubly Linked List)",
          body: "Speichert eine Folge von Elementen in separaten Knoten. Jeder Knoten enthält ein einzelnes Element, einen Link auf den vorherigen und einen Link auf den nächsten Knoten. Es gibt zwei „Dummy“-Knoten: header (erster Knoten) und trailer (letzter Knoten). Einfügen und Entfernen erfolgt durch Umverlinken der Nachbarn.",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folien 39-42"
        },
        {
          title: "Abstrakter Datentyp (ADT)",
          body: "Ein Modell einer Datenstruktur, das die Eigenschaften der Datensammlung und die Operationen festlegt, die auf der Sammlung durchgeführt werden können. Es ist abstrakt, da nicht festgelegt ist, wie der ADT implementiert wird. Ein ADT kann durch ein interface beschrieben werden (spezifiziert WAS jede Operation macht, aber nicht WIE) und durch eine class realisiert werden (spezifiziert WIE die Operationen ausgeführt werden).",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folie 44"
        },
        {
          title: "List ADT: Operationen",
          body: "<b>getItem(i):</b> liefert das Element mit Index i. <b>addItem(item, i):</b> fügt ein neues Element an Index i ein und verschiebt alle nachfolgenden Elemente einen Index nach hinten; liefert einen Boolean, ob i im Bereich [0, length()] liegt. <b>removeItem(i):</b> entfernt und liefert das Element an Index i, verschiebt nachfolgende Elemente einen Index nach vorn. <b>length():</b> Anzahl der Elemente. <b>isFull():</b> Boolean, ob die Liste bereits die maximale Anzahl von Elementen hat.",
          source: "02_abstract_data_types.pdf, Folie 47"
        },
        {
          title: "Effizienz der Listen-Implementierungen",
          body: "getItem(i): ArrayList O(1), LinkedLList O(1). addItem als letztes Element: ArrayList O(1), LinkedLList O(n); als erstes Element: ArrayList O(n), LinkedLList O(1). removeItem letztes Element: ArrayList O(1), LinkedLList O(n); erstes Element: ArrayList O(n), LinkedLList O(1). length() und isFull(): jeweils O(1).",
          tag: "formel",
          source: "02_abstract_data_types.pdf, Folie 88"
        },
        {
          title: "Warum ein Iterator?",
          body: "Problem: Für LinkedLList-Objekte startet jeder Aufruf von getItem() am Anfang der Liste und traversiert zu Element i — bei length = n werden insgesamt 1 + 2 + … + n Knoten zugegriffen = O(n²). Macht man die Zähl-Methode zur Methode der Liste, wird jeder Knoten nur einmal besucht (O(n)) — aber man kann nicht alle Operationen vorhersehen, die Benutzer ausführen möchten. Lösung: ein Iterator.",
          tag: "wichtig",
          source: "02_abstract_data_types.pdf, Folien 90-91"
        },
        {
          title: "Iterator",
          body: "Ein Iterator ist ein Objekt, das es ermöglicht, eine Liste zu durchlaufen, ohne die Kapselung zu verletzen. Interface ListIterator: <b>hasNext()</b> — hat der Iterator weitere Elemente zu besuchen? <b>next()</b> — liefert das nächste Element und setzt den Iterator weiter (macht immer zwei Dinge auf einmal: Element zurückliefern und Iterator weitersetzen).",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folien 96-98"
        },
        {
          title: "Stack (Stapel)",
          body: "Ein Stack ist eine Folge von Elementen, in der Elemente nur an einem Ende (dem Anfang) hinzugefügt oder entfernt werden können und man nur auf das Element zugreifen kann, das sich gerade am Anfang befindet. Last in, first out (LIFO). Operationen: <b>push(e)</b> fügt e oben auf den Stapel ein (Boolean), <b>pop()</b> entfernt und liefert das oberste Element (oder null, wenn leer), <b>top()</b> liefert das oberste Element ohne es zu entfernen (oder null), <b>isFull()</b>, <b>isEmpty()</b>.",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folien 108, 148"
        },
        {
          title: "Stack: Kapselung",
          body: "Die Schnittstelle bietet keine Möglichkeit, an einer beliebigen Position auf ein Element zuzugreifen, es einzufügen oder zu löschen. Durch Kapselung wird sichergestellt, dass Stacks nur auf eine Weise manipuliert werden, die mit dem Wesen eines Stacks vereinbar ist.",
          tag: "wichtig",
          source: "02_abstract_data_types.pdf, Folie 110"
        },
        {
          title: "Stack-Implementierungen und Effizienz",
          body: "<b>ArrayStack:</b> generisches Array items plus Index top (initial -1); push erhöht top und speichert das Element, pop liefert items[top], setzt die Position auf null und verringert top. <b>LinkedLStack:</b> nur eine Instanzvariable (Verweis auf den ersten Knoten mit dem obersten Element); oberstes Element ist ganz links; kein Dummy-Knoten nötig, da immer am Anfang eingefügt wird. Effizienz: push, pop, top, isEmpty, isFull alle O(1) in beiden Implementierungen. Platzbedarf: ArrayStack O(m) (m = erwartete maximale Anzahl von Elementen), LinkedLStack O(n) (n = Anzahl der Elemente, die sich derzeit auf dem Stapel befinden).",
          tag: "formel",
          source: "02_abstract_data_types.pdf, Folien 112-128"
        },
        {
          title: "Anwendungen von Stacks",
          body: "Einen rekursiven Algorithmus in einen iterativen umwandeln (Stack emuliert den Laufzeit-Stack). Sicherstellen, dass Klammern paarweise vorhanden sind: offene (linke) Klammern auf den Stack legen; bei einer schließenden (rechten) Klammer ein Element vom Stack nehmen und prüfen, ob es passt. Eine Datenfolge umkehren: alle Elemente pushen, dann der Reihe nach poppen.",
          tag: "beispiel",
          source: "02_abstract_data_types.pdf, Folien 130-146"
        },
        {
          title: "Queue (Warteschlange)",
          body: "Eine Queue ist eine Folge von Elementen, in der Elemente hinten hinzugefügt und vorne entfernt werden: first in, first out (FIFO) — im Gegensatz zum Stack (LIFO). Man kann nur auf das Element zugreifen, das gerade an erster Stelle steht. Operationen: <b>enqueue(e)</b> fügt e am Ende hinzu, <b>dequeue()</b> entfernt und liefert das erste Element (oder null, wenn leer), <b>first()</b> liefert das erste Element ohne Entfernen, <b>size()</b>, <b>isFull()</b>, <b>isEmpty()</b>.",
          tag: "def",
          source: "02_abstract_data_types.pdf, Folie 148"
        },
        {
          title: "Ringwarteschlange (Circular Queue)",
          body: "Problem: Erreicht man das Ende des Arrays, müssten Elemente nach links verschoben werden, um weitere einzufügen. Lösung: Ringwarteschlange — am Ende des Arrays springt man wieder an den Anfang. Die Indizes werden mit dem Modulo-Operator verschoben: front = (front + 1) % items.length; rear = (rear + 1) % items.length. Beispiel: items.length = 8, rear = 7 → rear = (7 + 1) % 8 = 0.",
          tag: "wichtig",
          source: "02_abstract_data_types.pdf, Folien 151-153"
        },
        {
          title: "ArrayQueue: leer oder voll?",
          body: "Die Warteschlange ist leer, wenn rear eine Position „hinter“ front liegt: ((rear + 1) % items.length) == front. Problem: Nutzt man alle Positionen im Array, trifft diese Überprüfung auch zu, wenn die Warteschlange voll ist. Deshalb wird die Variable numItems eingeführt: isEmpty() liefert numItems == 0, isFull() liefert numItems == items.length.",
          tag: "wichtig",
          source: "02_abstract_data_types.pdf, Folien 154-155"
        },
        {
          title: "Queue-Implementierungen und Effizienz",
          body: "<b>ArrayQueue:</b> Array items mit Indizes front und rear (initial front = 0, rear = -1) und Zähler numItems; enqueue erhöht rear modulo Arraylänge, dequeue liefert items[front] und erhöht front modulo Arraylänge. <b>LinkedLQueue:</b> Verweise front und rear; da eine verkettete Liste an beiden Enden leicht geändert werden kann, ist kein Verschieben nötig. Effizienz: enqueue, dequeue, peek alle O(1). Platzbedarf: ArrayQueue O(m), LinkedLQueue O(n).",
          tag: "formel",
          source: "02_abstract_data_types.pdf, Folien 157-186"
        },
        {
          title: "Anwendungen von Queues",
          body: "First-in-first-out (FIFO) Inventory Control; OS-Scheduling (Prozesse, Druckaufträge, Pakete etc.); Simulationen von Banken, Supermärkten, Flughäfen etc.; Breitensuche in einem Graphen bzw. Level-Order-Traversierung eines Binärbaums.",
          tag: "beispiel",
          source: "02_abstract_data_types.pdf, Folie 188"
        }
      ],
      questions: [
        {
          question: "Was ist der Unterschied zwischen einer Menge und einer Liste?",
          answer: "Menge: ungeordnete Sammlung, jedes Element kommt nur einmal vor (keine Duplikate). Liste: Aneinanderreihung gleichartiger Elemente, die Reihenfolge hat Bedeutung und Elemente können mehrfach vorkommen.",
          source: "02_abstract_data_types.pdf, Folien 3-4"
        },
        {
          question: "Was ist ein abstrakter Datentyp (ADT)?",
          answer: "Ein Modell einer Datenstruktur, das die Eigenschaften der Datensammlung und die darauf möglichen Operationen festlegt. Abstrakt, weil nicht festgelegt ist, wie der ADT implementiert wird — das Interface spezifiziert WAS jede Operation macht, die Klasse WIE.",
          source: "02_abstract_data_types.pdf, Folie 44"
        },
        {
          question: "Welche Vorteile und Nachteile hat ein Array zur Darstellung einer Sequenz?",
          answer: "Vorteile: Direktzugriff — item[i] liefert das Element an Position i in konstanter Zeit; sehr kompakt. Nachteile: anfängliche Größe muss festgelegt und ggf. angepasst werden; Einfügen/Löschen an beliebigen Positionen ist schwierig; möglicher Speicherverschnitt bei leeren Positionen.",
          source: "02_abstract_data_types.pdf, Folie 24"
        },
        {
          question: "Welche Vorteile und Nachteile hat eine verkettete Liste?",
          answer: "Vorteile: kann unbegrenzt wachsen; Einfügen/Löschen ohne Verschieben anderer Elemente (nur Links anpassen). Nachteile: kein Direktzugriff (Liste muss durchlaufen werden), Links belegen zusätzlichen Speicher, Entfernen am Ende ist bei einfacher Verkettung nicht effizient.",
          source: "02_abstract_data_types.pdf, Folien 36-37"
        },
        {
          question: "Warum ist das Entfernen am Ende einer einfach verketteten Liste nicht effizient?",
          answer: "Es gibt keine Möglichkeit, in konstanter Zeit den tail-Verweis auf den Vorgängerknoten zu setzen — man müsste die Liste durchlaufen.",
          source: "02_abstract_data_types.pdf, Folie 37"
        },
        {
          question: "Wie unterscheidet sich eine doppelt verkettete Liste von einer einfach verketteten?",
          answer: "Jeder Knoten hat zusätzlich einen Link auf den vorherigen Knoten (prev und next). Außerdem gibt es zwei Dummy-Knoten: header am Anfang und trailer am Ende.",
          source: "02_abstract_data_types.pdf, Folie 39"
        },
        {
          question: "Was ist ein Stack und nach welchem Prinzip arbeitet er?",
          answer: "Eine Folge von Elementen, in der Elemente nur an einem Ende (dem Anfang) hinzugefügt oder entfernt werden können; Zugriff nur auf das oberste Element. Prinzip: last in, first out (LIFO). Operationen: push, pop, top, isFull, isEmpty.",
          source: "02_abstract_data_types.pdf, Folien 108, 148"
        },
        {
          question: "Was ist eine Queue und nach welchem Prinzip arbeitet sie?",
          answer: "Eine Folge von Elementen, in der hinten hinzugefügt und vorne entfernt wird; Zugriff nur auf das erste Element. Prinzip: first in, first out (FIFO). Operationen: enqueue, dequeue, first, size, isFull, isEmpty.",
          source: "02_abstract_data_types.pdf, Folie 148"
        },
        {
          question: "Warum verwendet man bei der ArrayQueue eine Ringwarteschlange, und wie werden die Indizes verschoben?",
          answer: "Weil sonst beim Erreichen des Array-Endes alle Elemente nach links verschoben werden müssten. Bei der Ringwarteschlange springt man am Ende wieder an den Anfang; die Indizes werden modulo der Arraylänge erhöht: front = (front + 1) % items.length und rear = (rear + 1) % items.length.",
          source: "02_abstract_data_types.pdf, Folien 151-153"
        },
        {
          question: "Warum braucht die ArrayQueue die Variable numItems?",
          answer: "Die Leer-Prüfung ((rear + 1) % items.length) == front trifft auch zu, wenn die Warteschlange voll ist. Mit numItems gilt eindeutig: isEmpty bei numItems == 0, isFull bei numItems == items.length.",
          source: "02_abstract_data_types.pdf, Folien 154-155"
        },
        {
          question: "Welches Problem löst ein Iterator, und welche Methoden bietet er?",
          answer: "Wiederholte getItem(i)-Aufrufe auf einer verketteten Liste traversieren jedes Mal vom Anfang (insgesamt O(n²)). Ein Iterator erlaubt das Durchlaufen der Liste, ohne die Kapselung zu verletzen: hasNext() prüft, ob weitere Elemente zu besuchen sind; next() liefert das nächste Element und setzt den Iterator weiter.",
          source: "02_abstract_data_types.pdf, Folien 90-96"
        },
        {
          question: "Nennen Sie Anwendungen von Stacks und Queues.",
          answer: "Stacks: rekursive Algorithmen in iterative umwandeln, Klammerpaare prüfen, Datenfolgen umkehren. Queues: FIFO Inventory Control, OS-Scheduling, Simulationen (Banken, Supermärkte, Flughäfen), Breitensuche in Graphen / Level-Order-Traversierung von Binärbäumen.",
          source: "02_abstract_data_types.pdf, Folien 130, 188"
        },
        {
          question: "Wie effizient sind addItem und removeItem bei ArrayList und LinkedLList?",
          answer: "addItem als letztes Element: ArrayList O(1), LinkedLList O(n); als erstes Element: ArrayList O(n), LinkedLList O(1). removeItem: letztes Element ArrayList O(1), LinkedLList O(n); erstes Element ArrayList O(n), LinkedLList O(1).",
          source: "02_abstract_data_types.pdf, Folie 88"
        }
      ],
      flashcards: [
        {
          front: "ADT (Abstract Data Type)",
          back: "Modell einer Datenstruktur: legt Eigenschaften der Datensammlung und mögliche Operationen fest, aber nicht die Implementierung.",
          source: "02_abstract_data_types.pdf, Folie 44"
        },
        {
          front: "LIFO vs. FIFO",
          back: "Stack: last in, first out (LIFO). Queue: first in, first out (FIFO).",
          source: "02_abstract_data_types.pdf, Folie 148"
        },
        {
          front: "Stack-Operationen",
          back: "push(e), pop(), top(), isFull(), isEmpty().",
          source: "02_abstract_data_types.pdf, Folie 108"
        },
        {
          front: "Queue-Operationen",
          back: "enqueue(e), dequeue(), first(), size(), isFull(), isEmpty().",
          source: "02_abstract_data_types.pdf, Folie 148"
        },
        {
          front: "Direktzugriff",
          back: "Eigenschaft von Arrays: item[i] liefert das Element an Position i in konstanter Zeit.",
          source: "02_abstract_data_types.pdf, Folie 24"
        },
        {
          front: "head und tail",
          back: "head: Variable mit Verweis auf den ersten Knoten der verketteten Liste. tail: letzter Knoten, hat den Verweiswert null.",
          source: "02_abstract_data_types.pdf, Folie 26"
        },
        {
          front: "header und trailer",
          back: "Die zwei Dummy-Knoten der doppelt verketteten Liste: header ist der erste, trailer der letzte Knoten.",
          source: "02_abstract_data_types.pdf, Folie 39"
        },
        {
          front: "Ringwarteschlange: Index-Formel",
          back: "front = (front + 1) % items.length; rear = (rear + 1) % items.length.",
          source: "02_abstract_data_types.pdf, Folie 153"
        },
        {
          front: "ListIterator-Interface",
          back: "hasNext(): weitere Elemente zu besuchen? next(): liefert das nächste Element und setzt den Iterator weiter.",
          source: "02_abstract_data_types.pdf, Folie 96"
        },
        {
          front: "Platzbedarf Stack-Implementierungen",
          back: "ArrayStack: O(m), m = erwartete maximale Anzahl von Elementen. LinkedLStack: O(n), n = Anzahl der Elemente derzeit auf dem Stapel.",
          source: "02_abstract_data_types.pdf, Folie 128"
        }
      ],
      walkthroughs: [
        {
          id: "stack-operationen",
          title: "Stack: Operationsfolge",
          source: "02_abstract_data_types.pdf, Folie 109",
          intro: "Die Operationsfolge von Folie 109, dargestellt als Array mit Index 0 als unterstem Element.",
          visual: {
            kind: "array",
            label: "Stack (unten = Index 0)",
            values: ["", ""]
          },
          steps: [
            {
              title: "push(5)",
              text: "Rückgabewert true. Inhalt des Stacks: (5).",
              values: [{ kind: "array-index", index: 0, value: 5 }],
              highlights: [{ kind: "array-index", index: 0, role: "active" }]
            },
            {
              title: "push(3)",
              text: "Rückgabewert true. Inhalt des Stacks: (3, 5).",
              values: [{ kind: "array-index", index: 1, value: 3 }],
              highlights: [{ kind: "array-index", index: 1, role: "active" }]
            },
            {
              title: "isFull()",
              text: "Rückgabewert false. Inhalt des Stacks unverändert: (3, 5).",
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" }
              ]
            },
            {
              title: "pop()",
              text: "Rückgabewert 3. Das oberste Element wird entfernt, Inhalt: (5).",
              values: [{ kind: "array-index", index: 1, value: "" }],
              highlights: [{ kind: "array-index", index: 0, role: "active" }]
            },
            {
              title: "isEmpty()",
              text: "Rückgabewert false. Inhalt: (5).",
              highlights: [{ kind: "array-index", index: 0, role: "done" }]
            },
            {
              title: "pop()",
              text: "Rückgabewert 5. Der Stack ist jetzt leer: ().",
              values: [{ kind: "array-index", index: 0, value: "" }]
            },
            {
              title: "isEmpty()",
              text: "Rückgabewert true. Inhalt: ().",
            },
            {
              title: "push(7)",
              text: "Rückgabewert true. Inhalt: (7).",
              values: [{ kind: "array-index", index: 0, value: 7 }],
              highlights: [{ kind: "array-index", index: 0, role: "active" }]
            },
            {
              title: "push(9)",
              text: "Rückgabewert true. Inhalt: (9, 7).",
              values: [{ kind: "array-index", index: 1, value: 9 }],
              highlights: [{ kind: "array-index", index: 1, role: "active" }]
            },
            {
              title: "top()",
              text: "Rückgabewert 9. Das oberste Element wird nur gelesen, nicht entfernt: (9, 7).",
              highlights: [{ kind: "array-index", index: 1, role: "compare" }]
            }
          ]
        }
      ]
    },
    {
      id: "suchen-sortieren",
      title: "Suchen & Sortieren",
      icon: "🔎",
      cards: [
        {
          title: "Lineare Suche",
          body: "Eingabe: eine Sequenz von unsortierten Elementen und ein Zielwert; Ausgabe: Position des Zielwertes. Standardansatz: eine Schleife, in der jedes Element untersucht wird, bis entweder das Ziel gefunden oder der Datensatz erschöpft ist. Bei Suchalgorithmen zählt man die Vergleichsoperationen: C(n) = Anzahl der Vergleiche, n = Anzahl der Elemente im Array.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folien 4, 12"
        },
        {
          title: "Lineare Suche: Zeitanalyse",
          body: "Best case: C(1). Worst case: C(n). Average case (nicht gefunden): C(n). Average case (gefunden): C((n+1)/2) — bei gleichmäßig verteiltem Array hat jeder Vergleich die gleiche Wahrscheinlichkeit: 1/n·(1 + 2 + … + n) = (n+1)/2.",
          tag: "formel",
          source: "03_fundamental-algorithms.pdf, Folie 13"
        },
        {
          title: "Binäre Suche",
          body: "Eingabe: eine Sequenz von <b>sortierten</b> Elementen und ein Zielwert. Grundidee: 1. Vergleiche den Zielwert target mit dem Wert des mittleren Elements (median): Wenn target = median, gib den Index zurück; wenn target < median, suche in der unteren Hälfte weiter; wenn target > median, suche in der oberen Hälfte weiter. 2. Wiederhole Schritt 1 für das Teilarray.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folien 15-22"
        },
        {
          title: "Binäre Suche: Zeitanalyse",
          body: "Best case: C(1). Worst case und average case: C(log₂n + 1). Begründung: Nach jeder Iteration halbiert sich die Anzahl der Elemente — nach der 1. Iteration bleiben n/2, nach der 2. n/4, nach der k. Iteration n/2ᵏ Elemente übrig.",
          tag: "formel",
          source: "03_fundamental-algorithms.pdf, Folie 25"
        },
        {
          title: "Reihenfolge der Funktionen",
          body: "n² wächst stärker als n·log₂n; n·log₂n wächst stärker als n; n wächst stärker als log₂n.",
          tag: "wichtig",
          source: "03_fundamental-algorithms.pdf, Folie 26"
        },
        {
          title: "Laufzeit messen: Grenzen der experimentellen Algorithmik",
          body: "Laufzeit messen (mehrere Durchläufe, Mittelwerte) ist nur vergleichbar auf gleichem Computer, abhängig von der Geschicklichkeit des Programmierenden und vom Computer (z. B. viel vs. wenig RAM bei hohem Speicherbedarf) — und vergleicht nur Programme, nicht die Algorithmen!",
          tag: "wichtig",
          source: "03_fundamental-algorithms.pdf, Folie 28"
        },
        {
          title: "O-Notation (Landau-Notation)",
          body: "Wird in der Informatik v. a. in der Komplexitätstheorie eingesetzt; beschreibt das asymptotische Verhalten von Funktionen und Folgen. Unterscheidung von Zeitkomplexität (asymptotische Laufzeitanalyse) und Platzkomplexität („zusätzlicher“ Speicherbedarf). Ziel: Vergleich von Problemen und Algorithmen danach, wie aufwendig sie zu berechnen sind; Einteilung in Komplexitätsklassen. Die Komplexitätsklasse gibt <b>keine</b> Aussage über die absolut benötigte Zeit, sondern über die Änderung der benötigten Zeit (bzw. des Speichers) in Abhängigkeit von der Änderung der Eingabegröße.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folie 29"
        },
        {
          title: "Wichtige Komplexitätsklassen",
          body: "<b>O(1)</b> konstant (Bestimmung, ob Binärzahl gerade oder ungerade ist). <b>O(log n)</b> logarithmisch (binäre Suche). <b>O(n)</b> linear (Element in unsortierter Liste finden). <b>O(n log n)</b> linearithmisch (gute Sortierverfahren, z. B. Mergesort). <b>O(n²)</b> quadratisch (einfache Sortierverfahren, z. B. Selection Sort). <b>O(nᶜ)</b> für c ≥ 1 polynomial („einfache“ Algorithmen). <b>O(cⁿ)</b> für c ≥ 1 exponentiell (Erzeugen der Potenzmenge). <b>O(n!)</b> faktoriell (Traveling Salesman Problem, brute force).",
          tag: "wichtig",
          source: "03_fundamental-algorithms.pdf, Folie 30"
        },
        {
          title: "Landau-Symbole",
          body: "<b>Groß O:</b> asymptotische obere Schranke. <b>Groß Omega:</b> asymptotische untere Schranke. <b>Groß Theta:</b> beides. Am häufigsten wird die Worst-case-Laufzeitkomplexität betrachtet: die Laufzeit T(n), die maximal benötigt wird. Beispiel: T(n) in O(n²) — der Algorithmus benötigt höchstens quadratisch viele Schritte, muss aber nicht tatsächlich quadratisch viele benötigen.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folie 36"
        },
        {
          title: "Zählt nur der Worst-case?",
          body: "Der Worst-case genügt nicht immer. <b>Average Case:</b> interessant, wenn der Worst-case sehr selten eintritt; insb. geeignet für randomisierte Algorithmen (Wahrscheinlichkeitsrechnung für den Erwartungswert; Beispiel: Quicksort mit randomisiertem Pivot, average case O(n log n)). <b>Amortisierte Analyse:</b> geeignet für Verfahren, in denen sich teure Operationen mit günstigen „aufrechnen“.",
          source: "03_fundamental-algorithms.pdf, Folie 37"
        },
        {
          title: "Schritte zur Bestimmung der Laufzeitkomplexität",
          body: "Grundvoraussetzung: Algorithmus verstehen! 1. Schleifen mit Bezug zur Eingabelänge n (eine Schleife über alle Elemente mit O(1)-Operationen: O(n)). 2. Schachtelung von Schleifen → Multiplikation (drei geschachtelte Schleifen über n: O(n³)). 3. Komponenten/Schleifen nacheinander → Addition (zwei Schleifen: O(n + n) = O(2n) = O(n)). 4. Das stärkste Wachstum dominiert („streiche alle Summanden bis auf den, der am stärksten wächst“: O(n) + O(n²) + O(n³) ⇒ O(n³)). 5. Konstante Faktoren weglassen (drei Teile in O(n): O(n + n + n) ⇒ O(3·n) ⇒ O(n)). Beispiel für 4. und 5. zusammen: O(n² + 2n + 1000 + 3n⁴ + 5) ⇒ O(n⁴).",
          tag: "wichtig",
          source: "03_fundamental-algorithms.pdf, Folien 38-44"
        },
        {
          title: "Beispiel: Minimum berechnen",
          body: "<b>minNaive:</b> pro Zahl mit (bis zu) allen anderen vergleichen (brute force) — O(n²). <b>minSmart:</b> bisheriges Minimum merken und mit dem nächsten Element vergleichen — O(n). Linear: Verdopplung von n → ungefähre Verdopplung des Aufwands; quadratisch: Verdopplung von n → ungefähre Vervierfachung.",
          tag: "beispiel",
          source: "03_fundamental-algorithms.pdf, Folien 31-32"
        },
        {
          title: "Sortieren: Grundlagen",
          body: "Die betrachteten Elemente müssen eine Ordnung haben (numerisch, alphanumerisch, …). Effizientes Sortieren ist eine wichtige Voraussetzung für die Effizienz anderer Verfahren (z. B. Suchen in Listen, Mergen von Listen). Vergleichsbasiertes Sortieren: viele Verfahren basieren auf dem paarweisen Vergleich der Elemente (<, > oder =). Grundregeln: aufsteigend sortieren, „in situ“ (nur wenig zusätzlicher Speicherplatz). Ziel: Minimiere die Anzahl der Vergleiche C und der Verschiebungen M (Verschiebung = Kopieren eines Elements an eine andere Position).",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folien 47-48"
        },
        {
          title: "Stabile Sortieralgorithmen",
          body: "Ein Sortieralgorithmus ist stabil, wenn immer dann, wenn es zwei Datensätze R und S mit demselben Schlüssel gibt und R in der ursprünglichen Liste vor S steht, R auch in der sortierten Liste vor S steht. Schlüssel: der Teil der Daten, der für die Sortierung verwendet wird. Beispiel [ (2, x), (1, b), (1, a) ]: sortiert als [ (1, b), (1, a), (2, x) ] stabil, als [ (1, a), (1, b), (2, x) ] instabil.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folie 49"
        },
        {
          title: "Selection Sort",
          body: "Grundidee: 1. Betrachte die Elemente im Array von links nach rechts. 2. Finde das kleinste Element. 3. Tausche das kleinste Element mit dem Element, das derzeit an erster Stelle steht. Implementierung: äußere Schleife i von 0 bis n-2, innere Schleife sucht indexMin in i+1 bis n-1, dann Tausch.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folie 53"
        },
        {
          title: "Selection Sort: Zeitanalyse und Stabilität",
          body: "n-1 Durchläufe: beim 1. Durchlauf n-1 Vergleiche, beim 2. n-2, …, beim (n-1). Durchlauf 1 Vergleich. C(n) = 1 + 2 + … + (n-1) = (n-1)·n/2 = n²/2 − n/2 = O(n²) Vergleiche. Verschiebungen: n-1 Tauschvorgänge mit je 3 Verschiebungen, M(n) = 3(n-1) = O(n). Zeitkomplexität: best, average und worst case O(n²). <b>Instabil:</b> Durch den Tausch von arr[indexMin] und arr[i] kann sich die Reihenfolge gleicher Schlüssel ändern.",
          tag: "formel",
          source: "03_fundamental-algorithms.pdf, Folien 102-107"
        },
        {
          title: "Insertion Sort",
          body: "Grundidee: 1. Gehe von links nach rechts. 2. Füge jedes Element unter Berücksichtigung der links davon liegenden Elemente an die richtige Stelle ein und „gleite“ dabei über andere Elemente, um Platz zu schaffen. Implementierung: toInsert = arr[i]; solange das linke Nachbarelement größer ist, wird es nach rechts geschoben; dann wird toInsert eingesetzt.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folie 109"
        },
        {
          title: "Insertion Sort: Zeitanalyse und Stabilität",
          body: "Die Anzahl der Operationen hängt vom Inhalt des Arrays ab. Best case (Array bereits sortiert): C(n) = n − 1 = O(n), M(n) = 0. Worst case (umgekehrt sortiert): C(n) = 1 + 2 + … + (n-1) = O(n²), ebenso M(n) = O(n²). Average case (unsortiert, Gleichverteilung): O(n²). Insertion Sort ist <b>stabil</b> und eignet sich am besten für fast sortierte Arrays.",
          tag: "formel",
          source: "03_fundamental-algorithms.pdf, Folien 135-137, 421"
        },
        {
          title: "Insertion Sort: Verbesserungen",
          body: "<b>Shell Sort</b> (Donald Shell, 1959): nutzt aus, dass Insertion Sort schnell ist, wenn ein Array fast sortiert ist; beseitigt den Nachteil, dass weit entfernte Elemente viele kleine Verschiebungen brauchen. Idee: zunächst Paare weit voneinander entfernter Elemente sortieren, dann den Abstand schrittweise verringern; instabil. <b>Binäre Suche</b> kann verwendet werden, um die richtige Einfügeposition zu finden.",
          source: "03_fundamental-algorithms.pdf, Folie 138"
        },
        {
          title: "Bubble Sort",
          body: "Grundidee: 1. Führe eine Reihe von Durchläufen durch das Array durch. 2. Bei jedem Durchlauf: Gehe von links nach rechts und tausche benachbarte Elemente, wenn sie nicht in der richtigen Reihenfolge stehen. Die äußere Schleife steuert die Anzahl der Durchläufe und den Endpunkt jedes Durchlaufs; die innere Schleife führt einen einzelnen Durchlauf aus.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folie 140"
        },
        {
          title: "Bubble Sort: Zeitanalyse und Stabilität",
          body: "Best case (bereits sortiert): C(n) = n − 1 = O(n), M(n) = 0. Worst case (umgekehrt sortiert): C(n) = M(n) = 1 + 2 + … + (n-1) = O(n²). Average case: O(n²). Bubble Sort ist <b>stabil</b>.",
          tag: "formel",
          source: "03_fundamental-algorithms.pdf, Folien 209-211"
        },
        {
          title: "Quicksort",
          body: "Rekursiver „Teile und herrsche“-Algorithmus (divide & conquer). <b>Divide:</b> Ordne die Elemente so neu an, dass zwei Teilarrays entstehen, wobei jedes Element im linken Array <= jedem Element im rechten Array ist. <b>Conquer:</b> Wende Quicksort rekursiv auf die Teilarrays an; höre auf, sobald ein Teilarray nur noch ein Element enthält. <b>Combine:</b> nichts zu tun — das Kriterium der Teilarray-Bildung sorgt bereits dafür.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folie 215"
        },
        {
          title: "Quicksort: Partitionierung",
          body: "Die Neuanordnung erfolgt mithilfe eines Wertes, der als <b>Pivot</b> bezeichnet wird: linkes Teilarray alle Werte <= Pivot, rechtes Teilarray alle Werte >= Pivot. Vorgehen: 1. Pivot-Element wählen. 2. „Fehl am Platz“ stehende Elemente finden: von links nach rechts (i = 0, 1, …) bis arr[i] >= p; von rechts nach links (j = n-1, …) bis arr[j] <= p. 3. arr[i] und arr[j] tauschen und ab Schritt 2 wiederholen, bis i > j.",
          tag: "wichtig",
          source: "03_fundamental-algorithms.pdf, Folien 216-218"
        },
        {
          title: "Quicksort: Pivot-Wahl",
          body: "Mögliche Pivot-Werte: erstes oder letztes Element (riskant, kann zu Worst-case-Verhalten führen), mittleres Element, zufällig gewähltes Element, Median aus drei Elementen (links, Mitte, rechts oder drei zufällige — verringert die Wahrscheinlichkeit eines schlechten Pivots).",
          tag: "wichtig",
          source: "03_fundamental-algorithms.pdf, Folie 327"
        },
        {
          title: "Quicksort: Zeitanalyse und Stabilität",
          body: "Die Partitionierung erfordert n Vergleiche (jedes Element wird mit dem Pivot verglichen). <b>Best case</b> (Array wird immer halbiert): log₂n Ebenen mit je n Vergleichen, C(n) = n·log₂n. <b>Worst case</b> (Pivot ist immer größter oder kleinster Wert; ein Teilarray hat immer 1 Element): C(n) = n + (n-1) + … + 2 = O(n²). <b>Average case:</b> C(n) > n·log₂n, aber immer noch O(n·log₂n). Quicksort ist <b>instabil</b>. Bei einer vernünftigen Wahl des Pivots tritt das Worst-Case-Szenario nur selten auf.",
          tag: "formel",
          source: "03_fundamental-algorithms.pdf, Folien 328-331, 421"
        },
        {
          title: "Mergesort: Zusammenführen sortierter Arrays",
          body: "Mergesort benötigt ein zusätzliches temporäres Array derselben Größe wie das ursprüngliche: O(n) zusätzlicher Speicherplatz (andere bisher betrachtete Verfahren sortieren an Ort und Stelle). Merge zweier sortierter Arrays A und B nach C mit drei Indizes i, j, k: wiederholt A[i] und B[j] vergleichen, den kleineren Wert nach C[k] kopieren, den Index des kopierten Arrays und k erhöhen.",
          tag: "wichtig",
          source: "03_fundamental-algorithms.pdf, Folien 333-343"
        },
        {
          title: "Mergesort",
          body: "Rekursiver Teile-und-Herrsche-Algorithmus. 1. <b>Teile:</b> das Array in zwei Hälften teilen. 2. <b>Herrsche:</b> Mergesort rekursiv auf die Teilarrays anwenden; aufhören, sobald ein Teilarray nur noch ein Element enthält. 3. <b>Kombiniere:</b> die sortierten Teilarrays zusammenführen.",
          tag: "def",
          source: "03_fundamental-algorithms.pdf, Folien 344-350"
        },
        {
          title: "Mergesort: Zeitanalyse",
          body: "Das Zusammenführen zweier Hälften eines Arrays der Größe n erfordert 2n Schritte. Mergesort teilt das Array wiederholt in zwei Hälften; auf allen Ebenen (außer der letzten) gibt es 2n Verschiebungen, und es gibt log₂n Ebenen mit Vergleichen: C(n) = n·log₂n. Mergesort ist <b>stabil</b> und hat die beste Komplexität im Worst-Case-Szenario, benötigt jedoch zusätzlichen Speicher und Datentransfers zum und vom temporären Array.",
          tag: "formel",
          source: "03_fundamental-algorithms.pdf, Folien 420-421"
        },
        {
          title: "Sortierverfahren im Vergleich",
          body: "Stabilität: Selection Sort <b>instabil</b>, Insertion Sort <b>stabil</b>, Bubble Sort <b>stabil</b>, Quicksort <b>instabil</b>, Mergesort <b>stabil</b>. Insertion Sort eignet sich am besten für fast sortierte Arrays. Quicksort und Mergesort sind rekursive Teile-und-herrsche-Algorithmen. Mergesort hat die beste Worst-Case-Komplexität, braucht aber zusätzlichen Speicher; Quicksort ist im Durchschnitt mit Mergesort vergleichbar.",
          tag: "wichtig",
          source: "03_fundamental-algorithms.pdf, Folie 421"
        }
      ],
      questions: [
        {
          question: "Wie viele Vergleiche benötigt die lineare Suche im besten, schlechtesten und durchschnittlichen Fall?",
          answer: "Best case C(1), worst case C(n), average case nicht gefunden C(n), average case gefunden C((n+1)/2).",
          source: "03_fundamental-algorithms.pdf, Folie 13"
        },
        {
          question: "Was setzt die binäre Suche voraus, und wie funktioniert sie?",
          answer: "Eine sortierte Elementfolge. Der Zielwert wird mit dem mittleren Element (median) verglichen: bei Gleichheit Index zurückgeben, bei target < median in der unteren Hälfte weitersuchen, bei target > median in der oberen — wiederholt für das jeweilige Teilarray.",
          source: "03_fundamental-algorithms.pdf, Folien 15-22"
        },
        {
          question: "Wie viele Vergleiche benötigt die binäre Suche im schlechtesten Fall, und warum?",
          answer: "C(log₂n + 1): Nach jeder Iteration halbiert sich die Anzahl der verbleibenden Elemente (nach der k. Iteration bleiben n/2ᵏ Elemente übrig).",
          source: "03_fundamental-algorithms.pdf, Folie 25"
        },
        {
          question: "Warum reicht es nicht, die Laufzeit von Algorithmen einfach zu messen?",
          answer: "Messungen sind nur auf gleichem Computer vergleichbar, hängen von der Geschicklichkeit des Programmierenden und vom Computer ab (z. B. RAM) — und sie vergleichen nur Programme, nicht die Algorithmen.",
          source: "03_fundamental-algorithms.pdf, Folie 28"
        },
        {
          question: "Was sagt eine Komplexitätsklasse aus — und was nicht?",
          answer: "Sie gibt die Größenordnung des Aufwands in Abhängigkeit von der Datenmenge n an, also wie sich die benötigte Zeit (bzw. der Speicher) mit der Eingabegröße ändert. Sie macht keine Aussage über die absolut benötigte Zeit.",
          source: "03_fundamental-algorithms.pdf, Folie 29"
        },
        {
          question: "Wofür stehen die Landau-Symbole Groß O, Groß Omega und Groß Theta?",
          answer: "Groß O: asymptotische obere Schranke. Groß Omega: asymptotische untere Schranke. Groß Theta: beides.",
          source: "03_fundamental-algorithms.pdf, Folie 36"
        },
        {
          question: "Nennen Sie die fünf Schritte zur Bestimmung der Laufzeitkomplexität.",
          answer: "1. Schleifen mit Bezug zur Eingabelänge n, 2. Schachtelung von Schleifen (Multiplikation), 3. Komponenten/Schleifen nacheinander (Addition), 4. das stärkste Wachstum dominiert, 5. konstante Faktoren weglassen. Grundvoraussetzung: den Algorithmus verstehen.",
          source: "03_fundamental-algorithms.pdf, Folie 38"
        },
        {
          question: "Wann ist ein Sortieralgorithmus stabil?",
          answer: "Wenn für je zwei Datensätze R und S mit demselben Schlüssel gilt: Steht R in der ursprünglichen Liste vor S, dann steht R auch in der sortierten Liste vor S.",
          source: "03_fundamental-algorithms.pdf, Folie 49"
        },
        {
          question: "Wie funktioniert Selection Sort, und welche Komplexität hat es?",
          answer: "Von links nach rechts: jeweils das kleinste Element im unsortierten Bereich finden und mit dem Element an der ersten unsortierten Stelle tauschen. C(n) = n²/2 − n/2 = O(n²) Vergleiche in jedem Fall (best = average = worst), M(n) = 3(n-1) = O(n) Verschiebungen. Instabil.",
          source: "03_fundamental-algorithms.pdf, Folien 53, 102-107"
        },
        {
          question: "In welchem Fall ist Insertion Sort besonders schnell?",
          answer: "Wenn das Array bereits (fast) sortiert ist: best case C(n) = n − 1 = O(n) und M(n) = 0. Insertion Sort eignet sich am besten für fast sortierte Arrays.",
          source: "03_fundamental-algorithms.pdf, Folien 135, 421"
        },
        {
          question: "Wie läuft die Partitionierung bei Quicksort ab?",
          answer: "Ein Pivot wird gewählt. Von links nach rechts läuft Index i, bis arr[i] >= Pivot; von rechts nach links läuft Index j, bis arr[j] <= Pivot; dann werden arr[i] und arr[j] getauscht. Das wiederholt sich, bis i > j. Ergebnis: links alle Werte <= Pivot, rechts alle Werte >= Pivot.",
          source: "03_fundamental-algorithms.pdf, Folien 216-218"
        },
        {
          question: "Wann tritt bei Quicksort der Worst Case ein, und welche Komplexität hat er?",
          answer: "Wenn das Pivotelement immer der größte oder kleinste Wert ist — ein Teilarray hat dann immer 1 Element, das andere n-1. C(n) = n + (n-1) + … + 2 = O(n²). Deshalb ist die Pivot-Wahl (erstes/letztes Element riskant) wichtig.",
          source: "03_fundamental-algorithms.pdf, Folien 327-329"
        },
        {
          question: "Welche Vor- und Nachteile hat Mergesort gegenüber Quicksort?",
          answer: "Mergesort hat die beste Komplexität im Worst-Case-Szenario und ist stabil, benötigt aber O(n) zusätzlichen Speicher und Datentransfers zum und vom temporären Array. Quicksort ist im Durchschnitt mit Mergesort vergleichbar; bei vernünftiger Pivot-Wahl tritt sein Worst Case nur selten auf, aber es ist instabil.",
          source: "03_fundamental-algorithms.pdf, Folie 421"
        },
        {
          question: "Welche der behandelten Sortierverfahren sind stabil, welche instabil?",
          answer: "Stabil: Insertion Sort, Bubble Sort, Mergesort. Instabil: Selection Sort, Quicksort (auch Shell Sort ist instabil).",
          source: "03_fundamental-algorithms.pdf, Folien 138, 421"
        }
      ],
      flashcards: [
        {
          front: "Lineare Suche: worst case",
          back: "C(n) — jedes Element wird untersucht, bis das Ziel gefunden oder der Datensatz erschöpft ist.",
          source: "03_fundamental-algorithms.pdf, Folie 13"
        },
        {
          front: "Binäre Suche: worst case",
          back: "C(log₂n + 1) — nach jeder Iteration bleibt die Hälfte der Elemente übrig.",
          source: "03_fundamental-algorithms.pdf, Folie 25"
        },
        {
          front: "Komplexitätsklassen (aufsteigend)",
          back: "O(1) konstant, O(log n) logarithmisch, O(n) linear, O(n log n) linearithmisch, O(n²) quadratisch, O(nᶜ) polynomial, O(cⁿ) exponentiell, O(n!) faktoriell.",
          source: "03_fundamental-algorithms.pdf, Folie 30"
        },
        {
          front: "Groß O / Omega / Theta",
          back: "O: obere Schranke, Omega: untere Schranke, Theta: beides (asymptotisch).",
          source: "03_fundamental-algorithms.pdf, Folie 36"
        },
        {
          front: "Stabiles Sortieren",
          back: "Datensätze mit gleichem Schlüssel behalten ihre ursprüngliche Reihenfolge.",
          source: "03_fundamental-algorithms.pdf, Folie 49"
        },
        {
          front: "Selection Sort: Komplexität",
          back: "Vergleiche O(n²) in jedem Fall, Verschiebungen M(n) = 3(n-1) = O(n). Instabil.",
          source: "03_fundamental-algorithms.pdf, Folien 105-107"
        },
        {
          front: "Insertion Sort: Komplexität",
          back: "Best case O(n) (sortiertes Array, M(n) = 0), worst/average case O(n²). Stabil.",
          source: "03_fundamental-algorithms.pdf, Folien 135-137"
        },
        {
          front: "Bubble Sort: Prinzip",
          back: "Mehrere Durchläufe; je Durchlauf benachbarte Elemente tauschen, wenn sie in falscher Reihenfolge stehen. Best O(n), worst/average O(n²). Stabil.",
          source: "03_fundamental-algorithms.pdf, Folien 140, 209-211"
        },
        {
          front: "Quicksort: Komplexität",
          back: "Best case n·log₂n, average O(n·log₂n), worst case O(n²) (Pivot immer größter/kleinster Wert). Instabil.",
          source: "03_fundamental-algorithms.pdf, Folien 328-331"
        },
        {
          front: "Mergesort: Komplexität",
          back: "C(n) = n·log₂n (log₂n Ebenen, je 2n Verschiebungen); O(n) zusätzlicher Speicher. Stabil.",
          source: "03_fundamental-algorithms.pdf, Folien 333, 420-421"
        },
        {
          front: "Quicksort: Pivot-Strategien",
          back: "Erstes/letztes Element (riskant), mittleres Element, Zufallselement, Median aus drei.",
          source: "03_fundamental-algorithms.pdf, Folie 327"
        }
      ],
      walkthroughs: [
        {
          id: "lineare-suche",
          title: "Lineare Suche: Zielwert 23",
          source: "03_fundamental-algorithms.pdf, Folien 5-11",
          intro: "find(arr, 23): Jedes Element wird der Reihe nach untersucht, bis das Ziel gefunden ist.",
          visual: {
            kind: "array",
            values: [4, 8, 15, 16, 23, 42, 45, 52, 55, 70, 72, 80]
          },
          steps: [
            {
              title: "i = 0",
              text: "arr[0] = 4 wird mit dem Zielwert 23 verglichen — kein Treffer.",
              highlights: [{ kind: "array-index", index: 0, role: "active" }]
            },
            {
              title: "i = 1",
              text: "arr[1] = 8 — kein Treffer.",
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "active" }
              ]
            },
            {
              title: "i = 2",
              text: "arr[2] = 15 — kein Treffer.",
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "active" }
              ]
            },
            {
              title: "i = 3",
              text: "arr[3] = 16 — kein Treffer.",
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "active" }
              ]
            },
            {
              title: "i = 4: gefunden",
              text: "arr[4] = 23 stimmt mit dem Zielwert überein — return 4.",
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "target" }
              ]
            }
          ]
        },
        {
          id: "binaere-suche",
          title: "Binäre Suche: Zielwert 70",
          source: "03_fundamental-algorithms.pdf, Folien 16-22",
          intro: "Das sortierte Array wird wiederholt am mittleren Element (median) geteilt.",
          visual: {
            kind: "array",
            values: [4, 8, 15, 16, 23, 42, 45, 52, 55, 70, 72, 80]
          },
          steps: [
            {
              title: "median = arr[5] = 42",
              text: "Suchbereich 0-11, mid = (0+11)/2 = 5. 70 > 42 → weiter in der oberen Hälfte.",
              highlights: [{ kind: "array-index", index: 5, role: "active" }]
            },
            {
              title: "median = arr[8] = 55",
              text: "Suchbereich 6-11, mid = (6+11)/2 = 8. 70 > 55 → weiter in der oberen Hälfte.",
              highlights: [
                { kind: "array-index", index: 5, role: "done" },
                { kind: "array-index", index: 8, role: "active" }
              ]
            },
            {
              title: "median = arr[10] = 72",
              text: "Suchbereich 9-11, mid = (9+11)/2 = 10. 70 < 72 → weiter in der unteren Hälfte.",
              highlights: [
                { kind: "array-index", index: 8, role: "done" },
                { kind: "array-index", index: 10, role: "active" }
              ]
            },
            {
              title: "median = arr[9] = 70: gefunden",
              text: "Suchbereich 9-9, mid = 9. 70 = 70 → return 9. Nach jeder Iteration blieb nur die Hälfte der Elemente übrig.",
              highlights: [
                { kind: "array-index", index: 10, role: "done" },
                { kind: "array-index", index: 9, role: "target" }
              ]
            }
          ]
        },
        {
          id: "insertion-sort",
          title: "Insertion Sort",
          source: "03_fundamental-algorithms.pdf, Folien 110-133",
          intro: "Jedes Element wird an die richtige Stelle im bereits sortierten linken Bereich eingefügt.",
          visual: {
            kind: "array",
            bars: true,
            values: [4, 3, 1, 9, 2, 10, 6, 8, 7, 5]
          },
          steps: [
            {
              title: "3 einfügen",
              text: "3 < 4: die 4 gleitet nach rechts, 3 wird an Position 0 eingefügt → 3 4 1 9 2 10 6 8 7 5.",
              values: [
                { kind: "array-index", index: 0, value: 3 },
                { kind: "array-index", index: 1, value: 4 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "active" },
                { kind: "array-index", index: 1, role: "done" }
              ]
            },
            {
              title: "1 einfügen",
              text: "1 ist kleiner als 3 und 4: beide gleiten nach rechts → 1 3 4 9 2 10 6 8 7 5.",
              values: [
                { kind: "array-index", index: 0, value: 1 },
                { kind: "array-index", index: 1, value: 3 },
                { kind: "array-index", index: 2, value: 4 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "active" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" }
              ]
            },
            {
              title: "9 bleibt",
              text: "9 ist größer als 4 — keine Verschiebung nötig → 1 3 4 9 2 10 6 8 7 5.",
              highlights: [{ kind: "array-index", index: 3, role: "active" }]
            },
            {
              title: "2 einfügen",
              text: "2 wird zwischen 1 und 3 eingefügt → 1 2 3 4 9 10 6 8 7 5.",
              values: [
                { kind: "array-index", index: 1, value: 2 },
                { kind: "array-index", index: 2, value: 3 },
                { kind: "array-index", index: 3, value: 4 },
                { kind: "array-index", index: 4, value: 9 }
              ],
              highlights: [
                { kind: "array-index", index: 1, role: "active" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "done" }
              ]
            },
            {
              title: "10 bleibt",
              text: "10 ist größer als 9 — keine Verschiebung → 1 2 3 4 9 10 6 8 7 5.",
              highlights: [{ kind: "array-index", index: 5, role: "active" }]
            },
            {
              title: "6 einfügen",
              text: "6 wird zwischen 4 und 9 eingefügt → 1 2 3 4 6 9 10 8 7 5.",
              values: [
                { kind: "array-index", index: 4, value: 6 },
                { kind: "array-index", index: 5, value: 9 },
                { kind: "array-index", index: 6, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 4, role: "active" },
                { kind: "array-index", index: 5, role: "done" },
                { kind: "array-index", index: 6, role: "done" }
              ]
            },
            {
              title: "8 einfügen",
              text: "8 wird zwischen 6 und 9 eingefügt → 1 2 3 4 6 8 9 10 7 5.",
              values: [
                { kind: "array-index", index: 5, value: 8 },
                { kind: "array-index", index: 6, value: 9 },
                { kind: "array-index", index: 7, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 5, role: "active" },
                { kind: "array-index", index: 6, role: "done" },
                { kind: "array-index", index: 7, role: "done" }
              ]
            },
            {
              title: "7 einfügen",
              text: "7 wird zwischen 6 und 8 eingefügt → 1 2 3 4 6 7 8 9 10 5.",
              values: [
                { kind: "array-index", index: 5, value: 7 },
                { kind: "array-index", index: 6, value: 8 },
                { kind: "array-index", index: 7, value: 9 },
                { kind: "array-index", index: 8, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 5, role: "active" },
                { kind: "array-index", index: 6, role: "done" },
                { kind: "array-index", index: 7, role: "done" },
                { kind: "array-index", index: 8, role: "done" }
              ]
            },
            {
              title: "5 einfügen: fertig",
              text: "5 wird zwischen 4 und 6 eingefügt → 1 2 3 4 5 6 7 8 9 10. Das Array ist sortiert.",
              values: [
                { kind: "array-index", index: 4, value: 5 },
                { kind: "array-index", index: 5, value: 6 },
                { kind: "array-index", index: 6, value: 7 },
                { kind: "array-index", index: 7, value: 8 },
                { kind: "array-index", index: 8, value: 9 },
                { kind: "array-index", index: 9, value: 10 }
              ],
              highlights: [{ kind: "array-index", index: 4, role: "active" }]
            }
          ]
        },
        {
          id: "bubble-sort-durchlauf",
          title: "Bubble Sort: erster Durchlauf",
          source: "03_fundamental-algorithms.pdf, Folien 141-158",
          intro: "Im ersten Durchlauf wandert das größte Element (10) durch Nachbartausche ans Ende.",
          visual: {
            kind: "array",
            bars: true,
            values: [4, 3, 1, 9, 2, 10, 6, 8, 7, 5]
          },
          steps: [
            {
              title: "4 und 3 tauschen",
              text: "4 > 3 → Tausch: 3 4 1 9 2 10 6 8 7 5.",
              explanation: {
                action: "Vergleiche die benachbarten Werte 4 und 3.",
                rule: "Bubble Sort tauscht Nachbarn, wenn der linke Wert größer ist.",
                decision: "4 > 3, daher werden beide Werte vertauscht."
              },
              values: [
                { kind: "array-index", index: 0, value: 3 },
                { kind: "array-index", index: 1, value: 4 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "active" },
                { kind: "array-index", index: 1, role: "active" }
              ]
            },
            {
              title: "4 und 1 tauschen",
              text: "4 > 1 → Tausch: 3 1 4 9 2 10 6 8 7 5.",
              explanation: {
                action: "Vergleiche das nächste Nachbarpaar 4 und 1.",
                rule: "Bei falscher Reihenfolge wird das größere Element nach rechts geschoben.",
                decision: "4 > 1, daher wandert 4 eine Position weiter nach rechts."
              },
              values: [
                { kind: "array-index", index: 1, value: 1 },
                { kind: "array-index", index: 2, value: 4 }
              ],
              highlights: [
                { kind: "array-index", index: 1, role: "active" },
                { kind: "array-index", index: 2, role: "active" }
              ]
            },
            {
              title: "9 und 2 tauschen",
              text: "4 < 9: kein Tausch. Dann 9 > 2 → Tausch: 3 1 4 2 9 10 6 8 7 5.",
              explanation: {
                action: "Prüfe weiter von links nach rechts.",
                rule: "Paare in richtiger Reihenfolge bleiben unverändert; falsche Paare werden getauscht.",
                decision: "4 < 9 bleibt, aber 9 > 2 wird vertauscht."
              },
              values: [
                { kind: "array-index", index: 3, value: 2 },
                { kind: "array-index", index: 4, value: 9 }
              ],
              highlights: [
                { kind: "array-index", index: 3, role: "active" },
                { kind: "array-index", index: 4, role: "active" }
              ]
            },
            {
              title: "10 und 6 tauschen",
              text: "9 < 10: kein Tausch. Dann 10 > 6 → Tausch: 3 1 4 2 9 6 10 8 7 5.",
              explanation: {
                action: "Vergleiche weiter bis zum nächsten falschen Nachbarpaar.",
                rule: "Das größere Element wandert im Durchlauf schrittweise nach rechts.",
                decision: "10 > 6, daher wird 10 nach rechts geschoben."
              },
              values: [
                { kind: "array-index", index: 5, value: 6 },
                { kind: "array-index", index: 6, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 5, role: "active" },
                { kind: "array-index", index: 6, role: "active" }
              ]
            },
            {
              title: "10 und 8 tauschen",
              text: "10 > 8 → Tausch: 3 1 4 2 9 6 8 10 7 5.",
              explanation: {
                action: "Vergleiche 10 und 8.",
                rule: "Ist links größer als rechts, wird getauscht.",
                decision: "10 > 8, also wandert 10 weiter nach rechts."
              },
              values: [
                { kind: "array-index", index: 6, value: 8 },
                { kind: "array-index", index: 7, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 6, role: "active" },
                { kind: "array-index", index: 7, role: "active" }
              ]
            },
            {
              title: "10 und 7 tauschen",
              text: "10 > 7 → Tausch: 3 1 4 2 9 6 8 7 10 5.",
              explanation: {
                action: "Vergleiche 10 und 7.",
                rule: "Der gleiche Nachbarvergleich wird bis zum Ende des Bereichs wiederholt.",
                decision: "10 > 7, deshalb folgt der nächste Tausch."
              },
              values: [
                { kind: "array-index", index: 7, value: 7 },
                { kind: "array-index", index: 8, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 7, role: "active" },
                { kind: "array-index", index: 8, role: "active" }
              ]
            },
            {
              title: "10 und 5 tauschen: Durchlauf fertig",
              text: "10 > 5 → Tausch: 3 1 4 2 9 6 8 7 5 10. Das größte Element steht am Ende; weitere Durchläufe sortieren den Rest.",
              explanation: {
                action: "Vergleiche das letzte Nachbarpaar des Durchlaufs.",
                rule: "Nach einem vollständigen Durchlauf steht das größte Element am rechten Rand.",
                decision: "10 > 5, nach dem Tausch ist 10 am Ende fixiert."
              },
              values: [
                { kind: "array-index", index: 8, value: 5 },
                { kind: "array-index", index: 9, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 8, role: "active" },
                { kind: "array-index", index: 9, role: "done" }
              ]
            }
          ]
        },
        {
          id: "selection-sort",
          title: "Selection Sort",
          source: "03_fundamental-algorithms.pdf, Folien 53-100",
          intro: "In jedem Durchlauf wird das kleinste Element (rot) im unsortierten Bereich gesucht und an die erste unsortierte Stelle getauscht; der sortierte Bereich (grün) wächst von links.",
          visual: {
            kind: "array",
            bars: true,
            values: [4, 3, 1, 9, 2, 10, 6, 8, 7, 5]
          },
          steps: [
            {
              title: "Durchlauf 1: Minimum 1",
              text: "Das kleinste Element im Bereich 0-9 ist 1 (Position 2) — Tausch mit Position 0.",
              explanation: {
                action: "Suche das Minimum im gesamten noch unsortierten Bereich 0-9.",
                rule: "Selection Sort setzt das kleinste gefundene Element an die erste unsortierte Position.",
                decision: "1 ist das Minimum und wird mit Position 0 getauscht."
              },
              values: [
                { kind: "array-index", index: 0, value: 1 },
                { kind: "array-index", index: 2, value: 4 }
              ],
              highlights: [{ kind: "array-index", index: 0, role: "target" }]
            },
            {
              title: "Durchlauf 2: Minimum 2",
              text: "Das kleinste Element im Bereich 1-9 ist 2 (Position 4) — Tausch mit Position 1.",
              explanation: {
                action: "Suche das Minimum im restlichen Bereich 1-9.",
                rule: "Der linke sortierte Bereich bleibt fixiert und wird nicht erneut verändert.",
                decision: "2 ist das Minimum des Restbereichs und kommt an Position 1."
              },
              values: [
                { kind: "array-index", index: 1, value: 2 },
                { kind: "array-index", index: 4, value: 3 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "target" }
              ]
            },
            {
              title: "Durchlauf 3: Minimum 3",
              text: "Das kleinste Element im Bereich 2-9 ist 3 (Position 4) — Tausch mit Position 2.",
              explanation: {
                action: "Suche das Minimum im Bereich 2-9.",
                rule: "Nach jedem Durchlauf wächst der sortierte Bereich links um eine Position.",
                decision: "3 ist das nächste Minimum und wird an Position 2 gesetzt."
              },
              values: [
                { kind: "array-index", index: 2, value: 3 },
                { kind: "array-index", index: 4, value: 4 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "target" }
              ]
            },
            {
              title: "Durchlauf 4: Minimum 4",
              text: "Das kleinste Element im Bereich 3-9 ist 4 (Position 4) — Tausch mit Position 3.",
              explanation: {
                action: "Suche das Minimum im Bereich 3-9.",
                rule: "Das gefundene Minimum wird an den Anfang des unsortierten Bereichs getauscht.",
                decision: "4 wird an Position 3 gesetzt; die ersten vier Werte sind sortiert."
              },
              values: [
                { kind: "array-index", index: 3, value: 4 },
                { kind: "array-index", index: 4, value: 9 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "target" }
              ]
            },
            {
              title: "Durchlauf 5: Minimum 5",
              text: "Das kleinste Element im Bereich 4-9 ist 5 (Position 9) — Tausch mit Position 4.",
              explanation: {
                action: "Suche das Minimum im Bereich 4-9.",
                rule: "Nur der unsortierte Bereich wird durchsucht.",
                decision: "5 liegt am Ende des Restbereichs und wird nach Position 4 getauscht."
              },
              values: [
                { kind: "array-index", index: 4, value: 5 },
                { kind: "array-index", index: 9, value: 9 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "target" }
              ]
            },
            {
              title: "Durchlauf 6: Minimum 6",
              text: "Das kleinste Element im Bereich 5-9 ist 6 (Position 6) — Tausch mit Position 5.",
              explanation: {
                action: "Suche das Minimum im Bereich 5-9.",
                rule: "Der kleinste Wert des Restbereichs besetzt die nächste freie sortierte Position.",
                decision: "6 ist das Minimum und wird an Position 5 gesetzt."
              },
              values: [
                { kind: "array-index", index: 5, value: 6 },
                { kind: "array-index", index: 6, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "done" },
                { kind: "array-index", index: 5, role: "target" }
              ]
            },
            {
              title: "Durchlauf 7: Minimum 7",
              text: "Das kleinste Element im Bereich 6-9 ist 7 (Position 8) — Tausch mit Position 6.",
              explanation: {
                action: "Suche das Minimum im Bereich 6-9.",
                rule: "Die Auswahlregel bleibt in jedem Durchlauf gleich.",
                decision: "7 wird mit Position 6 getauscht."
              },
              values: [
                { kind: "array-index", index: 6, value: 7 },
                { kind: "array-index", index: 8, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "done" },
                { kind: "array-index", index: 5, role: "done" },
                { kind: "array-index", index: 6, role: "target" }
              ]
            },
            {
              title: "Durchlauf 8: Minimum 8",
              text: "Das kleinste Element im Bereich 7-9 ist 8 — es steht bereits an Position 7.",
              explanation: {
                action: "Suche das Minimum im Bereich 7-9.",
                rule: "Wenn das Minimum bereits vorne steht, ist kein Tausch nötig.",
                decision: "8 bleibt an Position 7."
              },
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "done" },
                { kind: "array-index", index: 5, role: "done" },
                { kind: "array-index", index: 6, role: "done" },
                { kind: "array-index", index: 7, role: "target" }
              ]
            },
            {
              title: "Durchlauf 9: Minimum 9 — fertig",
              text: "Das kleinste Element im Bereich 8-9 ist 9 (Position 9) — Tausch mit Position 8. Nach n−1 Durchläufen ist das Array sortiert: 1 2 3 4 5 6 7 8 9 10.",
              explanation: {
                action: "Bearbeite den letzten unsortierten Bereich.",
                rule: "Nach n−1 Durchläufen ist jedes Element an seiner sortierten Position.",
                decision: "9 und 10 werden in die endgültige Reihenfolge gebracht."
              },
              values: [
                { kind: "array-index", index: 8, value: 9 },
                { kind: "array-index", index: 9, value: 10 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "done" },
                { kind: "array-index", index: 5, role: "done" },
                { kind: "array-index", index: 6, role: "done" },
                { kind: "array-index", index: 7, role: "done" },
                { kind: "array-index", index: 8, role: "done" },
                { kind: "array-index", index: 9, role: "done" }
              ]
            }
          ]
        },
        {
          id: "quicksort-partitionierung",
          title: "Quicksort: Partitionierung",
          source: "03_fundamental-algorithms.pdf, Folien 216-257",
          intro: "Pivot ist das letzte Element (rot). Index i (blau) läuft von links, Index j (pink) von rechts; „fehl am Platz“ stehende Elemente werden getauscht.",
          visual: {
            kind: "array",
            bars: true,
            values: [4, 3, 1, 9, 2, 10, 6, 8, 7, 5]
          },
          steps: [
            {
              title: "Pivot wählen",
              text: "Als Pivot dient das letzte Element: p = 5.",
              highlights: [{ kind: "array-index", index: 9, role: "target" }]
            },
            {
              title: "i läuft von links",
              text: "4, 3 und 1 sind kleiner als der Pivot; i stoppt bei Position 3, denn 9 >= 5.",
              highlights: [
                { kind: "array-index", index: 3, role: "active" },
                { kind: "array-index", index: 9, role: "target" }
              ]
            },
            {
              title: "j läuft von rechts",
              text: "j stoppt sofort bei Position 9, denn 5 <= 5. Die Elemente an i und j stehen „fehl am Platz“.",
              highlights: [
                { kind: "array-index", index: 3, role: "active" },
                { kind: "array-index", index: 9, role: "compare" }
              ]
            },
            {
              title: "Tausch 9 ↔ 5",
              text: "arr[i] und arr[j] werden getauscht: 4 3 1 5 2 10 6 8 7 9.",
              values: [
                { kind: "array-index", index: 3, value: 5 },
                { kind: "array-index", index: 9, value: 9 }
              ],
              highlights: [
                { kind: "array-index", index: 3, role: "active" },
                { kind: "array-index", index: 9, role: "compare" }
              ]
            },
            {
              title: "Weiter ab Schritt 2",
              text: "i läuft weiter und stoppt bei Position 5 (10 >= 5); j läuft nach links und stoppt bei Position 4 (2 <= 5).",
              highlights: [
                { kind: "array-index", index: 5, role: "active" },
                { kind: "array-index", index: 4, role: "compare" }
              ]
            },
            {
              title: "i > j: Partitionierung fertig",
              text: "Mit i = 5 und j = 4 ist i > j — der Vorgang endet. Links stehen alle Werte <= 5, rechts alle Werte >= 5; Quicksort wird nun rekursiv auf beide Teilarrays angewendet.",
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "done" }
              ]
            }
          ]
        },
        {
          id: "merge-sortierter-arrays",
          title: "Mergesort: Zusammenführen",
          source: "03_fundamental-algorithms.pdf, Folien 333-343",
          intro: "Die sortierten Arrays A = [2, 8, 14, 24] und B = [5, 7, 9, 11] werden zu C zusammengeführt: A[i] und B[j] vergleichen, den kleineren Wert kopieren.",
          visual: {
            kind: "array",
            label: "Merging",
            values: ["", "", "", "", "", "", "", ""],
            arrays: [
              { id: "a", label: "A", values: [2, 8, 14, 24] },
              { id: "b", label: "B", values: [5, 7, 9, 11] },
              { id: "c", label: "C", values: ["", "", "", "", "", "", "", ""] }
            ]
          },
          steps: [
            {
              title: "2 < 5",
              text: "A[0] = 2 ist kleiner als B[0] = 5 → C[0] = 2; i wird erhöht.",
              explanation: {
                action: "Vergleiche die aktuellen Köpfe A[i] und B[j].",
                rule: "Beim Merge wird der kleinere der beiden Werte in C[k] kopiert.",
                decision: "2 < 5, also wird A[0] nach C[0] übernommen."
              },
              values: [{ kind: "array-index", array: "c", index: 0, value: 2 }],
              highlights: [
                { kind: "array-index", array: "a", index: 0, role: "active" },
                { kind: "array-index", array: "b", index: 0, role: "compare" },
                { kind: "array-index", array: "c", index: 0, role: "target" }
              ]
            },
            {
              title: "8 > 5",
              text: "A[1] = 8 ist größer als B[0] = 5 → C[1] = 5; j wird erhöht.",
              explanation: {
                action: "Vergleiche A[1] mit B[0].",
                rule: "Nach dem Kopieren wird nur der Zeiger des gewählten Arrays erhöht.",
                decision: "5 ist kleiner als 8, also wird B[0] nach C[1] kopiert."
              },
              values: [{ kind: "array-index", array: "c", index: 1, value: 5 }],
              highlights: [
                { kind: "array-index", array: "a", index: 0, role: "done" },
                { kind: "array-index", array: "a", index: 1, role: "compare" },
                { kind: "array-index", array: "b", index: 0, role: "active" },
                { kind: "array-index", array: "c", index: 0, role: "done" },
                { kind: "array-index", array: "c", index: 1, role: "target" }
              ]
            },
            {
              title: "8 > 7",
              text: "B[1] = 7 ist kleiner → C[2] = 7.",
              explanation: {
                action: "Vergleiche A[1] mit B[1].",
                rule: "Der kleinere Kopf wandert in die nächste freie C-Position.",
                decision: "7 ist kleiner als 8, daher wird B[1] nach C[2] kopiert."
              },
              values: [{ kind: "array-index", array: "c", index: 2, value: 7 }],
              highlights: [
                { kind: "array-index", array: "a", index: 1, role: "compare" },
                { kind: "array-index", array: "b", index: 0, role: "done" },
                { kind: "array-index", array: "b", index: 1, role: "active" },
                { kind: "array-index", array: "c", index: 0, role: "done" },
                { kind: "array-index", array: "c", index: 1, role: "done" },
                { kind: "array-index", array: "c", index: 2, role: "target" }
              ]
            },
            {
              title: "8 < 9",
              text: "Jetzt ist A[1] = 8 kleiner als B[2] = 9 → C[3] = 8.",
              explanation: {
                action: "Vergleiche A[1] mit B[2].",
                rule: "Die sortierten Teilarrays bleiben sichtbar; nur C wächst schrittweise.",
                decision: "8 ist kleiner als 9, also wird A[1] nach C[3] kopiert."
              },
              values: [{ kind: "array-index", array: "c", index: 3, value: 8 }],
              highlights: [
                { kind: "array-index", array: "a", index: 0, role: "done" },
                { kind: "array-index", array: "a", index: 1, role: "active" },
                { kind: "array-index", array: "b", index: 0, role: "done" },
                { kind: "array-index", array: "b", index: 1, role: "done" },
                { kind: "array-index", array: "b", index: 2, role: "compare" },
                { kind: "array-index", array: "c", index: 0, role: "done" },
                { kind: "array-index", array: "c", index: 1, role: "done" },
                { kind: "array-index", array: "c", index: 2, role: "done" },
                { kind: "array-index", array: "c", index: 3, role: "target" }
              ]
            },
            {
              title: "14 > 9",
              text: "B[2] = 9 ist kleiner → C[4] = 9.",
              explanation: {
                action: "Vergleiche A[2] mit B[2].",
                rule: "Der Merge-Schritt entscheidet immer nur zwischen den aktuellen Kopfwerten.",
                decision: "9 ist kleiner als 14 und wird nach C[4] kopiert."
              },
              values: [{ kind: "array-index", array: "c", index: 4, value: 9 }],
              highlights: [
                { kind: "array-index", array: "a", index: 2, role: "compare" },
                { kind: "array-index", array: "b", index: 2, role: "active" },
                { kind: "array-index", array: "c", index: 0, role: "done" },
                { kind: "array-index", array: "c", index: 1, role: "done" },
                { kind: "array-index", array: "c", index: 2, role: "done" },
                { kind: "array-index", array: "c", index: 3, role: "done" },
                { kind: "array-index", array: "c", index: 4, role: "target" }
              ]
            },
            {
              title: "14 > 11",
              text: "B[3] = 11 ist kleiner → C[5] = 11. Damit ist B erschöpft.",
              explanation: {
                action: "Vergleiche A[2] mit B[3].",
                rule: "Wenn ein Teilarray erschöpft ist, wird der Rest des anderen Arrays kopiert.",
                decision: "11 ist kleiner als 14; danach gibt es in B keinen weiteren Wert."
              },
              values: [{ kind: "array-index", array: "c", index: 5, value: 11 }],
              highlights: [
                { kind: "array-index", array: "a", index: 2, role: "compare" },
                { kind: "array-index", array: "b", index: 3, role: "active" },
                { kind: "array-index", array: "c", index: 0, role: "done" },
                { kind: "array-index", array: "c", index: 1, role: "done" },
                { kind: "array-index", array: "c", index: 2, role: "done" },
                { kind: "array-index", array: "c", index: 3, role: "done" },
                { kind: "array-index", array: "c", index: 4, role: "done" },
                { kind: "array-index", array: "c", index: 5, role: "target" }
              ]
            },
            {
              title: "Rest von A kopieren: fertig",
              text: "Da B erschöpft ist (j >= Länge von B), werden die restlichen Werte von A übernommen: C = [2, 5, 7, 8, 9, 11, 14, 24].",
              values: [
                { kind: "array-index", array: "c", index: 6, value: 14 },
                { kind: "array-index", array: "c", index: 7, value: 24 }
              ],
              explanation: {
                action: "Kopiere die übrigen Werte aus A.",
                rule: "Sobald ein Teilarray leer ist, muss nicht mehr verglichen werden.",
                decision: "14 und 24 werden direkt nach C[6] und C[7] übernommen."
              },
              highlights: [
                { kind: "array-index", array: "a", index: 2, role: "active" },
                { kind: "array-index", array: "a", index: 3, role: "active" },
                { kind: "array-index", array: "b", index: 0, role: "done" },
                { kind: "array-index", array: "b", index: 1, role: "done" },
                { kind: "array-index", array: "b", index: 2, role: "done" },
                { kind: "array-index", array: "b", index: 3, role: "done" },
                { kind: "array-index", array: "c", index: 0, role: "done" },
                { kind: "array-index", array: "c", index: 1, role: "done" },
                { kind: "array-index", array: "c", index: 2, role: "done" },
                { kind: "array-index", array: "c", index: 3, role: "done" },
                { kind: "array-index", array: "c", index: 4, role: "done" },
                { kind: "array-index", array: "c", index: 5, role: "done" },
                { kind: "array-index", array: "c", index: 6, role: "target" },
                { kind: "array-index", array: "c", index: 7, role: "target" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "baeume",
      title: "Bäume",
      icon: "🌳",
      cards: [
        {
          title: "Baum ADT",
          body: "Abstrakter Datentyp für die Abbildung hierarchischer Strukturen. Ein Baum besteht aus einer Menge von Knoten und einer Menge von Kanten, wobei jede Kante ein Paar von Knoten verbindet. Jeder Knoten kann ein oder mehrere Datenelemente enthalten; jedes Datenelement besteht aus einem oder mehreren Feldern. <b>Schlüsselfeld:</b> das Feld, das bei der Suche verwendet wird; mehrere Datenelemente mit demselben Schlüssel heißen Duplikate.",
          tag: "def",
          source: "04_tree_structures.pdf, Folien 3-4"
        },
        {
          title: "Beziehungen zwischen Knoten",
          body: "<b>Eltern und Kinder:</b> Ist ein Knoten N mit Knoten direkt unter ihm verbunden, ist N deren Elternknoten und diese seine Kinderknoten; jeder Knoten ist Kind von höchstens einem Elternknoten. <b>Geschwister (siblings):</b> Knoten mit dem gleichen Elternknoten. <b>Vorfahren (ancestors):</b> Elternknoten, dessen Elternknoten usw. <b>Nachkommen:</b> Kinder, deren Kinder usw.",
          tag: "def",
          source: "04_tree_structures.pdf, Folien 5-10"
        },
        {
          title: "Blattknoten und innere Knoten",
          body: "<b>Blattknoten (leaf node):</b> ein Knoten ohne Kinder. <b>Innerer Knoten (interior node):</b> ein Knoten mit einem oder mehreren Kinderknoten.",
          tag: "def",
          source: "04_tree_structures.pdf, Folie 11"
        },
        {
          title: "Baum als rekursive Datenstruktur",
          body: "Jeder Knoten im Baum ist die Wurzel eines kleineren Baumes; solche Bäume werden als Teilbaum (subtree) bezeichnet, um sie vom Gesamtbaum zu unterscheiden.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folie 12"
        },
        {
          title: "Pfad, Tiefe, Ebene und Höhe",
          body: "Es gibt genau einen <b>Pfad</b> (eine Folge von Kanten), der jeden Knoten mit der Wurzel verbindet. <b>Tiefe (depth)</b> eines Knotens = Anzahl der Kanten auf dem Weg von ihm zur Wurzel. Knoten mit derselben Tiefe bilden eine <b>Ebene (level)</b> des Baums. Die <b>Höhe (height)</b> eines Baums entspricht der maximalen Tiefe seiner Knoten.",
          tag: "def",
          source: "04_tree_structures.pdf, Folien 13-18"
        },
        {
          title: "Binärbaum",
          body: "Ein geordneter Baum mit folgenden Eigenschaften: Jeder Knoten hat höchstens zwei Kinder; jeder Kinderknoten wird entweder als linkes oder als rechtes Kind gekennzeichnet; ein linkes Kind steht in der Reihenfolge der Kinder vor einem rechten Kind. Ein Baum ist <b>strikt (proper)</b>, wenn jeder Knoten entweder null oder zwei Kinder hat.",
          tag: "def",
          source: "04_tree_structures.pdf, Folien 21-22"
        },
        {
          title: "Binärbaum: rekursive Definition",
          body: "Ein Binärbaum ist entweder ein leerer Baum oder ein nicht-leerer Baum mit einem Knoten, der ein oder mehrere Datenelemente hat, ein linkes Kind hat, welches selbst die Wurzel eines Binärbaumes ist, und ein rechtes Kind hat, welches selbst die Wurzel eines Binärbaumes ist.",
          tag: "def",
          source: "04_tree_structures.pdf, Folie 23"
        },
        {
          title: "Binärbaum: Operationen und Darstellung",
          body: "Darstellung mithilfe verknüpfter Knoten: Jeder Knoten hat item, parent, left und right. Funktionen: <b>getRoot()</b> gibt die Wurzel zurück (folgt den parent-Verweisen, bis isRoot: parent == null). <b>addLeft(T)</b> entfernt das linke Kind und fügt den Baum T als neues linkes Kind ein; gibt das alte linke Kind oder null zurück. <b>addRight(T)</b> analog für das rechte Kind.",
          source: "04_tree_structures.pdf, Folien 24-29"
        },
        {
          title: "Binärbaum: maximale Knoten pro Ebene",
          body: "Ebene 0: 1 Knoten, Ebene 1: 2 Knoten, Ebene 2: 4 Knoten, Ebene 3: 8 Knoten, …",
          tag: "formel",
          source: "04_tree_structures.pdf, Folie 30"
        },
        {
          title: "Traversierung eines Binärbaumes",
          body: "Das Durchlaufen eines Baums bedeutet, alle Knoten des Baums zu besuchen (einen Knoten besuchen = seine Daten auf irgendeine Weise verarbeiten). Es gibt vier Arten von Traversierungen, bei denen die Knoten in unterschiedlicher Reihenfolge besucht werden. Hilfreich ist die rekursive Definition des Binärbaums: jeder Knoten ist die Wurzel eines Teilbaums.",
          tag: "def",
          source: "04_tree_structures.pdf, Folien 32-33"
        },
        {
          title: "Preorder Traversierung",
          body: "Für den Baum mit Wurzel N: 1. Besuche den Wurzelknoten N. 2. Führe rekursiv eine Preorder-Traversierung des linken Teilbaums durch. 3. Führe rekursiv eine Preorder-Traversierung des rechten Teilbaums durch. Beispielbaum (Wurzel 7, darunter 5 und 9; unter 5: 2 und 6, unter 2 rechts: 3; unter 9 links: 8): 7 5 2 3 6 9 8.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folien 37-48"
        },
        {
          title: "Postorder Traversierung",
          body: "Für den Baum mit Wurzel N: 1. Rekursive Postorder-Traversierung des linken Teilbaums. 2. Rekursive Postorder-Traversierung des rechten Teilbaums. 3. Besuche den Wurzelknoten N. Beispielbaum: 3 2 6 5 8 9 7.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folien 64-76"
        },
        {
          title: "Inorder Traversierung",
          body: "Für den Baum mit Wurzel N: 1. Rekursive Inorder-Traversierung des linken Teilbaums. 2. Besuche den Wurzelknoten N. 3. Rekursive Inorder-Traversierung des rechten Teilbaums. Beispielbaum: 2 3 5 6 7 8 9.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folien 92-103"
        },
        {
          title: "Level-Order Traversierung",
          body: "Die Knoten werden nacheinander besucht, von oben nach unten und von links nach rechts. Beispielbaum: 7 5 9 2 6 8 3. Implementierung mit einer Queue: Wurzel enqueuen; solange die Queue nicht leer ist, ersten Knoten dequeuen, verarbeiten und seine Kinder (links, rechts) enqueuen.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folien 119-126"
        },
        {
          title: "Traversierungen: Zusammenfassung",
          body: "<b>preorder:</b> Wurzel, linker Teilbaum, rechter Teilbaum. <b>postorder:</b> linker Teilbaum, rechter Teilbaum, Wurzel. <b>inorder:</b> linker Teilbaum, Wurzel, rechter Teilbaum. <b>level-order:</b> von oben nach unten und links nach rechts.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folie 127"
        },
        {
          title: "Binärbaum für algebraische Ausdrücke",
          body: "Vollständig geklammerte Ausdrücke mit den binären Operatoren +, −, *, /: Blattknoten sind Variablen oder Konstanten, Innenknoten sind Operatoren; jeder Knoten hat entweder zwei Kinder oder gar keine. <b>Inorder-Traversierung</b> liefert die übliche algebraische Notation (mit „(“ vor dem linken und „)“ nach dem rechten rekursiven Aufruf), z. B. ((a + (b * c)) − (d / e)). <b>Preorder-Traversierung</b> liefert die funktionale Notation, z. B. subtr(add(a, mult(b, c)), divide(d, e)).",
          tag: "beispiel",
          source: "04_tree_structures.pdf, Folien 128-130"
        },
        {
          title: "Binärer Suchbaum",
          body: "Für jeden Knoten k gilt: Alle Knoten im linken Teilbaum von k sind kleiner als k, alle Knoten im rechten Teilbaum von k sind größer als k.",
          tag: "def",
          source: "04_tree_structures.pdf, Folien 131-132"
        },
        {
          title: "Binärer Suchbaum: Suche",
          body: "Suche nach einem Element mit Schlüssel k: Stimmt k mit dem Schlüssel des Wurzelknotens überein, ist die Suche beendet. Andernfalls, wenn k kleiner als der Schlüssel des Wurzelknotens ist, wird der linke Teilbaum durchsucht; sonst der rechte Teilbaum.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folien 136-139"
        },
        {
          title: "Binärer Suchbaum: Einfügen",
          body: "Einfügen eines Elements mit Schlüssel k: Suche nach einem Knoten mit dem Schlüssel k. Wird ein Knoten mit Schlüssel k gefunden, wird das Element des Knotens geändert. Andernfalls wird der zuletzt gefundene Knoten zum Elternknoten P des neuen Knotens: Ist k < Schlüssel von P, wird der neue Knoten linkes Kind von P, sonst rechtes Kind.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folien 142-146"
        },
        {
          title: "Binärer Suchbaum: Löschen",
          body: "<b>Fall 1 — Knoten x hat keine Kinder:</b> x entfernen, indem die Referenz seines Elternknotens auf null gesetzt wird. <b>Fall 2 — x hat ein Kind:</b> der Verweis des Elternteils auf x zeigt stattdessen auf das Kind von x. <b>Fall 3 — x hat zwei Kinder:</b> x kann nicht einfach gelöscht werden; ersetze x durch den kleinsten Knoten y in x' rechtem Teilbaum. Nachdem der Inhalt von y in x kopiert wurde, wird y gemäß Fall 1 oder 2 gelöscht.",
          tag: "wichtig",
          source: "04_tree_structures.pdf, Folien 149-161"
        },
        {
          title: "Binärer Suchbaum: Effizienz",
          body: "Die drei wichtigsten Operationen (Suchen, Einfügen, Löschen) haben dieselbe Zeitkomplexität — Einfügen und Löschen beinhalten eine Suche plus eine konstante Anzahl zusätzlicher Operationen. Zeitkomplexität der Suche: best case O(1), worst case O(h), average case O(h), mit h als Höhe des Baumes.",
          tag: "formel",
          source: "04_tree_structures.pdf, Folie 163"
        }
      ],
      questions: [
        {
          question: "Was sind Tiefe, Ebene und Höhe in einem Baum?",
          answer: "Tiefe eines Knotens = Anzahl der Kanten auf dem Weg zur Wurzel. Knoten mit derselben Tiefe bilden eine Ebene. Die Höhe eines Baums ist die maximale Tiefe seiner Knoten.",
          source: "04_tree_structures.pdf, Folien 14-18"
        },
        {
          question: "Was ist ein Binärbaum, und wann ist er strikt (proper)?",
          answer: "Ein geordneter Baum, in dem jeder Knoten höchstens zwei Kinder hat und jedes Kind als linkes oder rechtes Kind gekennzeichnet ist (das linke steht vor dem rechten). Strikt ist er, wenn jeder Knoten entweder null oder zwei Kinder hat.",
          source: "04_tree_structures.pdf, Folien 21-22"
        },
        {
          question: "In welcher Reihenfolge besuchen preorder, inorder, postorder und level-order die Knoten?",
          answer: "Preorder: Wurzel, linker Teilbaum, rechter Teilbaum. Inorder: linker Teilbaum, Wurzel, rechter Teilbaum. Postorder: linker Teilbaum, rechter Teilbaum, Wurzel. Level-Order: von oben nach unten und links nach rechts.",
          source: "04_tree_structures.pdf, Folie 127"
        },
        {
          question: "Wie wird die Level-Order-Traversierung implementiert?",
          answer: "Mit einer Queue: die Wurzel enqueuen; solange die Queue nicht leer ist, den ersten Knoten dequeuen, verarbeiten und sein linkes und rechtes Kind enqueuen.",
          source: "04_tree_structures.pdf, Folie 126"
        },
        {
          question: "Welche Eigenschaft definiert einen binären Suchbaum?",
          answer: "Für jeden Knoten k sind alle Knoten im linken Teilbaum kleiner als k und alle Knoten im rechten Teilbaum größer als k.",
          source: "04_tree_structures.pdf, Folie 132"
        },
        {
          question: "Wie löscht man aus einem binären Suchbaum einen Knoten mit zwei Kindern?",
          answer: "Man ersetzt den Knoten x durch den kleinsten Knoten y in x' rechtem Teilbaum: Inhalt von y nach x kopieren, dann y gemäß Fall 1 (kein Kind) oder Fall 2 (ein Kind) löschen.",
          source: "04_tree_structures.pdf, Folien 156-161"
        },
        {
          question: "Welche Zeitkomplexität hat die Suche in einem binären Suchbaum?",
          answer: "Best case O(1), worst case und average case O(h), wobei h die Höhe des Baumes ist. Einfügen und Löschen haben dieselbe Komplexität, da sie eine Suche plus konstant viele Zusatzoperationen beinhalten.",
          source: "04_tree_structures.pdf, Folie 163"
        },
        {
          question: "Welche Traversierung eines Ausdrucksbaums liefert die übliche algebraische Notation, welche die funktionale?",
          answer: "Die Inorder-Traversierung liefert die algebraische Notation (z. B. ((a + (b * c)) − (d / e))), die Preorder-Traversierung die funktionale Notation (z. B. subtr(add(a, mult(b, c)), divide(d, e))).",
          source: "04_tree_structures.pdf, Folien 129-130"
        },
        {
          question: "Was ist der Unterschied zwischen Blattknoten und inneren Knoten?",
          answer: "Ein Blattknoten hat keine Kinder; ein innerer Knoten hat ein oder mehrere Kinderknoten.",
          source: "04_tree_structures.pdf, Folie 11"
        }
      ],
      flashcards: [
        {
          front: "Tiefe / Ebene / Höhe",
          back: "Tiefe: Kanten bis zur Wurzel. Ebene: Knoten gleicher Tiefe. Höhe: maximale Tiefe der Knoten.",
          source: "04_tree_structures.pdf, Folien 14-18"
        },
        {
          front: "Blattknoten",
          back: "Knoten ohne Kinder (innerer Knoten: mit einem oder mehreren Kindern).",
          source: "04_tree_structures.pdf, Folie 11"
        },
        {
          front: "Strikter (proper) Binärbaum",
          back: "Jeder Knoten hat entweder null oder zwei Kinder.",
          source: "04_tree_structures.pdf, Folie 22"
        },
        {
          front: "Preorder",
          back: "Wurzel → linker Teilbaum → rechter Teilbaum.",
          source: "04_tree_structures.pdf, Folie 127"
        },
        {
          front: "Inorder",
          back: "Linker Teilbaum → Wurzel → rechter Teilbaum.",
          source: "04_tree_structures.pdf, Folie 127"
        },
        {
          front: "Postorder",
          back: "Linker Teilbaum → rechter Teilbaum → Wurzel.",
          source: "04_tree_structures.pdf, Folie 127"
        },
        {
          front: "Level-Order",
          back: "Von oben nach unten, links nach rechts — implementiert mit einer Queue.",
          source: "04_tree_structures.pdf, Folien 126-127"
        },
        {
          front: "Binärer Suchbaum (Eigenschaft)",
          back: "Linker Teilbaum von k: alle Knoten < k. Rechter Teilbaum: alle Knoten > k.",
          source: "04_tree_structures.pdf, Folie 132"
        },
        {
          front: "BST: Suche worst case",
          back: "O(h) — h ist die Höhe des Baumes.",
          source: "04_tree_structures.pdf, Folie 163"
        }
      ],
      walkthroughs: [
        {
          id: "bst-suche",
          title: "Binärer Suchbaum: Suche nach 7",
          source: "04_tree_structures.pdf, Folien 136-139",
          intro: "In jedem Schritt wird der Schlüssel 7 mit dem aktuellen Knoten verglichen.",
          visual: {
            kind: "tree",
            root: "26",
            nodes: [
              { id: "26", value: 26, left: "12", right: "32" },
              { id: "12", value: 12, left: "4", right: "18" },
              { id: "32", value: 32, right: "38" },
              { id: "4", value: 4, right: "7" },
              { id: "18", value: 18 },
              { id: "38", value: 38 },
              { id: "7", value: 7 }
            ]
          },
          steps: [
            {
              title: "Vergleich mit der Wurzel 26",
              text: "7 stimmt nicht mit 26 überein und ist kleiner — der linke Teilbaum wird durchsucht.",
              highlights: [
                { kind: "tree-node", node: "26", role: "active" },
                { kind: "tree-edge", from: "26", to: "12", role: "active" }
              ]
            },
            {
              title: "Vergleich mit 12",
              text: "7 < 12 — weiter im linken Teilbaum.",
              values: [{ kind: "tree-node", node: "26", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "12", role: "active" },
                { kind: "tree-edge", from: "12", to: "4", role: "active" }
              ]
            },
            {
              title: "Vergleich mit 4",
              text: "7 > 4 — der rechte Teilbaum wird durchsucht.",
              values: [{ kind: "tree-node", node: "12", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "4", role: "active" },
                { kind: "tree-edge", from: "4", to: "7", role: "active" }
              ]
            },
            {
              title: "7 gefunden",
              text: "Der Schlüssel 7 stimmt mit dem Knoten überein — die Suche ist beendet.",
              values: [{ kind: "tree-node", node: "4", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "7", role: "target" }]
            }
          ]
        },
        {
          id: "bst-einfuegen",
          title: "Binärer Suchbaum: Füge 35 ein",
          source: "04_tree_structures.pdf, Folien 142-146",
          intro: "Zuerst wird nach 35 gesucht; der zuletzt besuchte Knoten wird Elternknoten des neuen Knotens.",
          visual: {
            kind: "tree",
            root: "26",
            nodes: [
              { id: "26", value: 26, left: "12", right: "32" },
              { id: "12", value: 12, left: "4", right: "18" },
              { id: "32", value: 32, right: "38" },
              { id: "4", value: 4, right: "7" },
              { id: "18", value: 18 },
              { id: "38", value: 38, left: "35" },
              { id: "7", value: 7 },
              { id: "35", value: 35, hidden: true }
            ]
          },
          steps: [
            {
              title: "Suche ab der Wurzel 26",
              text: "35 > 26 — weiter im rechten Teilbaum.",
              highlights: [
                { kind: "tree-node", node: "26", role: "active" },
                { kind: "tree-edge", from: "26", to: "32", role: "active" }
              ]
            },
            {
              title: "Vergleich mit 32",
              text: "35 > 32 — weiter im rechten Teilbaum.",
              values: [{ kind: "tree-node", node: "26", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "32", role: "active" },
                { kind: "tree-edge", from: "32", to: "38", role: "active" }
              ]
            },
            {
              title: "Vergleich mit 38",
              text: "35 < 38, und 38 hat kein linkes Kind — 38 wird Elternknoten P des neuen Knotens.",
              values: [{ kind: "tree-node", node: "32", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "38", role: "active" }]
            },
            {
              title: "35 als linkes Kind einfügen",
              text: "Da 35 < Schlüssel des Elternknotens ist, wird der neue Knoten linkes Kind von 38.",
              values: [
                { kind: "tree-node", node: "38", mark: "done" },
                { kind: "tree-node", node: "35", hidden: false }
              ],
              highlights: [{ kind: "tree-node", node: "35", role: "target" }]
            }
          ]
        },
        {
          id: "preorder-traversierung",
          title: "Preorder-Traversierung",
          source: "04_tree_structures.pdf, Folien 37-48",
          intro: "Wurzel besuchen, dann rekursiv den linken, dann den rechten Teilbaum — Ergebnis: 7 5 2 3 6 9 8.",
          visual: {
            kind: "tree",
            root: "7",
            nodes: [
              { id: "7", value: 7, left: "5", right: "9" },
              { id: "5", value: 5, left: "2", right: "6" },
              { id: "9", value: 9, left: "8" },
              { id: "2", value: 2, right: "3" },
              { id: "6", value: 6 },
              { id: "3", value: 3 },
              { id: "8", value: 8 }
            ]
          },
          steps: [
            {
              title: "Besuche die Wurzel 7",
              text: "Preorder beginnt mit dem Wurzelknoten: Ausgabe 7.",
              values: [{ kind: "tree-node", node: "7", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "7", role: "active" }]
            },
            {
              title: "Linker Teilbaum: besuche 5",
              text: "Rekursiver Aufruf für das linke Kind von 7: Ausgabe 7 5.",
              values: [{ kind: "tree-node", node: "5", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "5", role: "active" },
                { kind: "tree-edge", from: "7", to: "5", role: "active" }
              ]
            },
            {
              title: "Besuche 2",
              text: "Wieder zuerst der linke Teilbaum: Ausgabe 7 5 2.",
              values: [{ kind: "tree-node", node: "2", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "2", role: "active" },
                { kind: "tree-edge", from: "5", to: "2", role: "active" }
              ]
            },
            {
              title: "Besuche 3",
              text: "2 hat kein linkes Kind; das rechte Kind 3 folgt: Ausgabe 7 5 2 3.",
              values: [{ kind: "tree-node", node: "3", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "3", role: "active" },
                { kind: "tree-edge", from: "2", to: "3", role: "active" }
              ]
            },
            {
              title: "Besuche 6",
              text: "Der linke Teilbaum von 5 ist fertig; das rechte Kind 6 folgt: Ausgabe 7 5 2 3 6.",
              values: [{ kind: "tree-node", node: "6", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "6", role: "active" },
                { kind: "tree-edge", from: "5", to: "6", role: "active" }
              ]
            },
            {
              title: "Rechter Teilbaum: besuche 9",
              text: "Der linke Teilbaum der Wurzel ist fertig; rekursiver Aufruf für 9: Ausgabe 7 5 2 3 6 9.",
              values: [{ kind: "tree-node", node: "9", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "9", role: "active" },
                { kind: "tree-edge", from: "7", to: "9", role: "active" }
              ]
            },
            {
              title: "Besuche 8: fertig",
              text: "Das linke Kind von 9 wird besucht — die Preorder-Reihenfolge ist 7 5 2 3 6 9 8.",
              values: [{ kind: "tree-node", node: "8", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "8", role: "active" },
                { kind: "tree-edge", from: "9", to: "8", role: "active" }
              ]
            }
          ]
        },
        {
          id: "postorder-traversierung",
          title: "Postorder-Traversierung",
          source: "04_tree_structures.pdf, Folien 64-76",
          intro: "Erst linker Teilbaum, dann rechter Teilbaum, dann Wurzel — Ergebnis: 3 2 6 5 8 9 7.",
          visual: {
            kind: "tree",
            root: "7",
            nodes: [
              { id: "7", value: 7, left: "5", right: "9" },
              { id: "5", value: 5, left: "2", right: "6" },
              { id: "9", value: 9, left: "8" },
              { id: "2", value: 2, right: "3" },
              { id: "6", value: 6 },
              { id: "3", value: 3 },
              { id: "8", value: 8 }
            ]
          },
          steps: [
            {
              title: "Besuche 3",
              text: "Postorder verarbeitet zuerst den linken Teilbaum so tief wie möglich: Ausgabe 3.",
              explanation: {
                action: "Linker Teilbaum von 7, dann von 5, dann rechter Teilbaum von 2.",
                rule: "Links, rechts, Wurzel.",
                decision: "3 hat keine Kinder und kann besucht werden."
              },
              values: [{ kind: "tree-node", node: "3", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "3", role: "active" },
                { kind: "tree-edge", from: "2", to: "3", role: "active" }
              ]
            },
            {
              title: "Besuche 2",
              text: "Der rechte Teilbaum von 2 ist fertig; jetzt wird 2 besucht: Ausgabe 3 2.",
              explanation: {
                action: "Teilbaum mit Wurzel 2 abschließen.",
                rule: "Die Wurzel kommt erst nach ihren Teilbäumen.",
                decision: "2 hat kein linkes Kind und der rechte Teilbaum 3 ist fertig."
              },
              values: [{ kind: "tree-node", node: "2", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "2", role: "active" }]
            },
            {
              title: "Besuche 6",
              text: "Im rechten Teilbaum von 5 ist 6 ein Blatt: Ausgabe 3 2 6.",
              explanation: {
                action: "Rechten Teilbaum von 5 verarbeiten.",
                rule: "Links, rechts, Wurzel.",
                decision: "6 hat keine Kinder und kann direkt besucht werden."
              },
              values: [{ kind: "tree-node", node: "6", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "6", role: "active" },
                { kind: "tree-edge", from: "5", to: "6", role: "active" }
              ]
            },
            {
              title: "Besuche 5",
              text: "Beide Teilbäume von 5 sind fertig; jetzt folgt 5: Ausgabe 3 2 6 5.",
              explanation: {
                action: "Teilbaum mit Wurzel 5 abschließen.",
                rule: "Die Wurzel wird nach linkem und rechtem Teilbaum besucht.",
                decision: "2 und 6 sind bereits besucht."
              },
              values: [{ kind: "tree-node", node: "5", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "5", role: "active" }]
            },
            {
              title: "Besuche 8",
              text: "Im rechten Teilbaum der Wurzel wird zuerst der linke Teilbaum von 9 besucht: Ausgabe 3 2 6 5 8.",
              explanation: {
                action: "Linken Teilbaum von 9 verarbeiten.",
                rule: "Auch im rechten Hauptteilbaum gilt links, rechts, Wurzel.",
                decision: "8 ist ein Blatt."
              },
              values: [{ kind: "tree-node", node: "8", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "8", role: "active" },
                { kind: "tree-edge", from: "9", to: "8", role: "active" }
              ]
            },
            {
              title: "Besuche 9",
              text: "Der linke Teilbaum von 9 ist fertig, ein rechter fehlt; Ausgabe 3 2 6 5 8 9.",
              explanation: {
                action: "Teilbaum mit Wurzel 9 abschließen.",
                rule: "Wurzel nach den Teilbäumen.",
                decision: "8 ist besucht und 9 hat kein rechtes Kind."
              },
              values: [{ kind: "tree-node", node: "9", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "9", role: "active" }]
            },
            {
              title: "Besuche 7: fertig",
              text: "Linker und rechter Teilbaum der Wurzel sind fertig; Postorder ist 3 2 6 5 8 9 7.",
              explanation: {
                action: "Gesamten Baum abschließen.",
                rule: "Die Wurzel des Gesamtbaums kommt zuletzt.",
                decision: "Teilbaum 5 und Teilbaum 9 sind vollständig besucht."
              },
              values: [{ kind: "tree-node", node: "7", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "7", role: "active" }]
            }
          ]
        },
        {
          id: "inorder-traversierung",
          title: "Inorder-Traversierung",
          source: "04_tree_structures.pdf, Folien 92-103",
          intro: "Erst linker Teilbaum, dann Wurzel, dann rechter Teilbaum — Ergebnis: 2 3 5 6 7 8 9.",
          visual: {
            kind: "tree",
            root: "7",
            nodes: [
              { id: "7", value: 7, left: "5", right: "9" },
              { id: "5", value: 5, left: "2", right: "6" },
              { id: "9", value: 9, left: "8" },
              { id: "2", value: 2, right: "3" },
              { id: "6", value: 6 },
              { id: "3", value: 3 },
              { id: "8", value: 8 }
            ]
          },
          steps: [
            {
              title: "Besuche 2",
              text: "Der linke Teilbaum von 5 beginnt bei 2: Ausgabe 2.",
              explanation: {
                action: "Ganz nach links gehen.",
                rule: "Links, Wurzel, rechts.",
                decision: "2 hat kein linkes Kind und wird besucht."
              },
              values: [{ kind: "tree-node", node: "2", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "2", role: "active" },
                { kind: "tree-edge", from: "5", to: "2", role: "active" }
              ]
            },
            {
              title: "Besuche 3",
              text: "Nach der Wurzel 2 folgt ihr rechter Teilbaum: Ausgabe 2 3.",
              explanation: {
                action: "Rechten Teilbaum von 2 verarbeiten.",
                rule: "Nach der Wurzel kommt der rechte Teilbaum.",
                decision: "3 ist ein Blatt."
              },
              values: [{ kind: "tree-node", node: "3", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "3", role: "active" },
                { kind: "tree-edge", from: "2", to: "3", role: "active" }
              ]
            },
            {
              title: "Besuche 5",
              text: "Der linke Teilbaum von 5 ist fertig; jetzt wird 5 besucht: Ausgabe 2 3 5.",
              explanation: {
                action: "Zur Wurzel des Teilbaums zurückkehren.",
                rule: "Wurzel zwischen linkem und rechtem Teilbaum.",
                decision: "Teilbaum 2 ist vollständig besucht."
              },
              values: [{ kind: "tree-node", node: "5", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "5", role: "active" }]
            },
            {
              title: "Besuche 6",
              text: "Nach 5 folgt ihr rechter Teilbaum: Ausgabe 2 3 5 6.",
              explanation: {
                action: "Rechten Teilbaum von 5 verarbeiten.",
                rule: "Links, Wurzel, rechts.",
                decision: "6 ist ein Blatt."
              },
              values: [{ kind: "tree-node", node: "6", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "6", role: "active" },
                { kind: "tree-edge", from: "5", to: "6", role: "active" }
              ]
            },
            {
              title: "Besuche 7",
              text: "Der linke Hauptteilbaum ist fertig; jetzt folgt die Wurzel 7: Ausgabe 2 3 5 6 7.",
              explanation: {
                action: "Zur Wurzel des Gesamtbaums zurückkehren.",
                rule: "Die Wurzel steht zwischen linkem und rechtem Hauptteilbaum.",
                decision: "Teilbaum 5 ist vollständig besucht."
              },
              values: [{ kind: "tree-node", node: "7", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "7", role: "active" }]
            },
            {
              title: "Besuche 8",
              text: "Im rechten Teilbaum von 7 wird zuerst der linke Teilbaum von 9 besucht: Ausgabe 2 3 5 6 7 8.",
              explanation: {
                action: "Linken Teilbaum von 9 verarbeiten.",
                rule: "Links vor Wurzel.",
                decision: "8 ist ein Blatt."
              },
              values: [{ kind: "tree-node", node: "8", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "8", role: "active" },
                { kind: "tree-edge", from: "9", to: "8", role: "active" }
              ]
            },
            {
              title: "Besuche 9: fertig",
              text: "Nach dem linken Teilbaum von 9 folgt 9; Inorder ist 2 3 5 6 7 8 9.",
              explanation: {
                action: "Rechten Hauptteilbaum abschließen.",
                rule: "Wurzel nach linkem Teilbaum.",
                decision: "8 ist besucht und 9 hat kein rechtes Kind."
              },
              values: [{ kind: "tree-node", node: "9", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "9", role: "active" }]
            }
          ]
        },
        {
          id: "level-order-traversierung",
          title: "Level-Order-Traversierung",
          source: "04_tree_structures.pdf, Folien 119-126",
          intro: "Von oben nach unten und links nach rechts; umgesetzt mit einer Queue — Ergebnis: 7 5 9 2 6 8 3.",
          visual: {
            kind: "tree",
            root: "7",
            nodes: [
              { id: "7", value: 7, left: "5", right: "9" },
              { id: "5", value: 5, left: "2", right: "6" },
              { id: "9", value: 9, left: "8" },
              { id: "2", value: 2, right: "3" },
              { id: "6", value: 6 },
              { id: "3", value: 3 },
              { id: "8", value: 8 }
            ]
          },
          steps: [
            {
              title: "Besuche 7",
              text: "Die Wurzel wird aus der Queue genommen; ihre Kinder 5 und 9 werden eingereiht: Ausgabe 7.",
              explanation: {
                action: "Start mit der Wurzel.",
                rule: "Queue: entnehmen, besuchen, Kinder links nach rechts einfügen.",
                decision: "Queue danach: 5, 9."
              },
              values: [{ kind: "tree-node", node: "7", mark: "done" }],
              highlights: [{ kind: "tree-node", node: "7", role: "active" }]
            },
            {
              title: "Besuche 5",
              text: "5 wird entnommen; 2 und 6 kommen ans Queue-Ende: Ausgabe 7 5.",
              explanation: {
                action: "Vorderstes Queue-Element verarbeiten.",
                rule: "Kinder werden links vor rechts eingereiht.",
                decision: "Queue danach: 9, 2, 6."
              },
              values: [{ kind: "tree-node", node: "5", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "5", role: "active" },
                { kind: "tree-edge", from: "7", to: "5", role: "active" }
              ]
            },
            {
              title: "Besuche 9",
              text: "9 wird entnommen; 8 kommt ans Queue-Ende: Ausgabe 7 5 9.",
              explanation: {
                action: "Nächsten Knoten derselben Ebene verarbeiten.",
                rule: "Level-Order läuft Ebene für Ebene.",
                decision: "Queue danach: 2, 6, 8."
              },
              values: [{ kind: "tree-node", node: "9", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "9", role: "active" },
                { kind: "tree-edge", from: "7", to: "9", role: "active" }
              ]
            },
            {
              title: "Besuche 2",
              text: "Die nächste Ebene beginnt links mit 2; sein rechtes Kind 3 wird eingereiht: Ausgabe 7 5 9 2.",
              explanation: {
                action: "Ersten Knoten der nächsten Ebene verarbeiten.",
                rule: "Queue-Reihenfolge bestimmt die Besuchsfolge.",
                decision: "Queue danach: 6, 8, 3."
              },
              values: [{ kind: "tree-node", node: "2", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "2", role: "active" },
                { kind: "tree-edge", from: "5", to: "2", role: "active" }
              ]
            },
            {
              title: "Besuche 6",
              text: "6 wird entnommen und hat keine Kinder: Ausgabe 7 5 9 2 6.",
              explanation: {
                action: "Nächstes Queue-Element besuchen.",
                rule: "Knoten ohne Kinder fügen nichts hinzu.",
                decision: "Queue danach: 8, 3."
              },
              values: [{ kind: "tree-node", node: "6", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "6", role: "active" },
                { kind: "tree-edge", from: "5", to: "6", role: "active" }
              ]
            },
            {
              title: "Besuche 8",
              text: "8 wird entnommen und hat keine Kinder: Ausgabe 7 5 9 2 6 8.",
              explanation: {
                action: "Letzten Knoten aus dieser Queue-Phase besuchen.",
                rule: "Weiter strikt in Queue-Reihenfolge.",
                decision: "Queue danach: 3."
              },
              values: [{ kind: "tree-node", node: "8", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "8", role: "active" },
                { kind: "tree-edge", from: "9", to: "8", role: "active" }
              ]
            },
            {
              title: "Besuche 3: fertig",
              text: "3 ist das letzte Queue-Element; Level-Order ist 7 5 9 2 6 8 3.",
              explanation: {
                action: "Queue leeren.",
                rule: "Wenn die Queue leer ist, ist die Traversierung beendet.",
                decision: "Alle Knoten wurden besucht."
              },
              values: [{ kind: "tree-node", node: "3", mark: "done" }],
              highlights: [
                { kind: "tree-node", node: "3", role: "active" },
                { kind: "tree-edge", from: "2", to: "3", role: "active" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "balancierte-baeume",
      title: "Balancierte Bäume",
      icon: "⚖️",
      cards: [
        {
          title: "Eigenschaft des Höhenausgleichs",
          body: "Die Höhe h(T) eines Baumes T ist die maximale Tiefe seiner Knoten. Das Gleichgewicht bal(T) eines Baumes T ist der Unterschied (Differenz) zwischen der Höhe der beiden Teilbäume: bal(T) = h(T_RIGHT) − h(T_LEFT).",
          tag: "def",
          source: "05_balanced_trees.pdf, Folie 6"
        },
        {
          title: "AVL-Baum",
          body: "Nach den Erfindern benannt: Adelson-Velskii und Landis. Ein binärer Suchbaum T wird als AVL-Baum bezeichnet, wenn für jeden Knoten N des Baums T gilt: bal(N) ∈ {−1, 0, +1}. Für jede interne Position p unterscheiden sich die Höhen der Teilbäume T_RIGHT und T_LEFT um höchstens 1.",
          tag: "def",
          source: "05_balanced_trees.pdf, Folie 7"
        },
        {
          title: "Ausgeglichener binärer Suchbaum",
          body: "Für einen ausgeglichenen binären Suchbaum mit n Knoten gilt: Höhe = O(log₂n). Das ergibt im schlechtesten Fall eine logarithmische Zeitkomplexität O(log₂n) — die beste Worst-Case-Zeit für binäre Suchbäume.",
          tag: "wichtig",
          source: "05_balanced_trees.pdf, Folie 8"
        },
        {
          title: "Degeneration unausgeglichener Suchbäume",
          body: "Bei einem binären Suchbaum lässt sich nicht gewährleisten, dass der Baum ausgeglichen bleibt — er kann zu einem Zeitaufwand von O(n) degenerieren. Extremfall: Der Baum entspricht einer verketteten Liste mit Höhe n − 1 und Worst-Case-Zeitkomplexität O(n).",
          tag: "wichtig",
          source: "05_balanced_trees.pdf, Folien 9-12"
        },
        {
          title: "Rotation",
          body: "Ein untergeordnetes Element wird so getauscht, dass es über seinem übergeordneten Element liegt; damit lässt sich die linke Formation in die rechte oder die rechte in die linke umwandeln. <b>Einfache Rotation:</b> ein Tausch genügt (z. B. Kette 3-5-8 wird zu 5 mit Kindern 3 und 8). <b>Doppelrotation:</b> zwei Tausche nötig (z. B. Kette 3-8-5: erst 5 über 8, dann 5 über 3).",
          tag: "def",
          source: "05_balanced_trees.pdf, Folien 14-19"
        },
        {
          title: "Trinode-Umstrukturierung: restructure(x)",
          body: "Eingabe: eine Position x mit Elternknoten y und Großelternknoten z. Ablauf: Seien a, b, c eine Inorder-Auflistung der Positionen x, y, z und T1-T4 eine Inorder-Auflistung ihrer vier Teilbäume. Ersetze den Teilbaum mit Wurzel z durch einen neuen Teilbaum mit Wurzel b; a wird linkes Kind von b (mit T1 und T2 als Teilbäumen), c wird rechtes Kind von b (mit T3 und T4).",
          tag: "wichtig",
          source: "05_balanced_trees.pdf, Folien 20-29"
        },
        {
          title: "Mehrwegebäume",
          body: "Ein geordneter Baum T mit folgenden Eigenschaften: Jeder interne Knoten hat mindestens zwei Kinder; ein Knoten mit d Kindern wird d-Knoten genannt. Jeder Knoten enthält d−1 Datenelemente der Form (key, element). Die Schlüssel bilden einen Suchbaum.",
          tag: "def",
          source: "05_balanced_trees.pdf, Folien 30-31"
        },
        {
          title: "(2,4)-Baum",
          body: "Ein ausgeglichener Mehrwegebaum, bei dem alle Knoten Teilbäume gleicher Höhe haben (perfekte Ausgeglichenheit) und jeder Knoten entweder ein 2-Knoten (ein Datenelement, 0 oder 2 Kinder), ein 3-Knoten (zwei Datenelemente, 0 oder 3 Kinder) oder ein 4-Knoten (drei Datenelemente, 0 oder 4 Kinder) ist. Die Schlüssel bilden einen Suchbaum. Die Suche funktioniert genau wie bei einem standardmäßigen binären Suchbaum.",
          tag: "def",
          source: "05_balanced_trees.pdf, Folien 36-37"
        },
        {
          title: "(2,4)-Baum: Einfügen",
          body: "Suche nach k, aber höre nicht auf, bis ein Blattknoten L erreicht ist. Ist L ein 2- oder 3-Knoten: füge k zu L hinzu (L wird 3- bzw. 4-Knoten). Ist L ein 4-Knoten: teile L in zwei Knoten auf — einen 3-Knoten mit den Schlüsseln k1 und k2 und einen 2-Knoten mit dem Schlüssel k4; ist L Wurzelknoten, erstelle einen neuen Wurzelknoten K mit Schlüssel k3, andernfalls wandert k3 in den Elternknoten.",
          tag: "wichtig",
          source: "05_balanced_trees.pdf, Folien 39-41"
        },
        {
          title: "(2,4)-Baum: Analyse des Einfügens",
          body: "Sei T ein (2,4)-Baum mit n Elementen: T hat eine Höhe von O(log₂n). Das Finden der Einfügeposition dauert O(log₂n) (wir besuchen O(log₂n) Knoten), das Einfügen O(1), die Behandlung von Überläufen O(log₂n) (jede Teilung O(1), im schlimmsten Fall O(log₂n) Teilungen). Insgesamt: O(log₂n).",
          tag: "formel",
          source: "05_balanced_trees.pdf, Folie 53"
        },
        {
          title: "(2,4)-Baum: Löschen",
          body: "Suche nach k bis zum Blattknoten L. Ist L ein 4- oder 3-Knoten: lösche k aus L (L wird 3- bzw. 2-Knoten). Ist L ein 2-Knoten (<b>Unterlaufbedingung</b>): Sind die benachbarten Geschwister 4- oder 3-Knoten, führe eine Übertragungsoperation (transfer) durch; sind sie 2-Knoten, führe eine Fusionsoperation durch. Analyse: Höhe O(log₂n), Finden der Löschposition O(log₂n), Unterlaufbehandlung durch O(log₂n) Fusionen plus höchstens eine Übertragung (je O(1)) — insgesamt O(log₂n).",
          tag: "wichtig",
          source: "05_balanced_trees.pdf, Folien 54-73"
        },
        {
          title: "B-Bäume: Motivation",
          body: "Die bisher behandelten ausgeglichenen Bäume eignen sich nicht gut für externe Speicherung (Data Dictionary auf Festplatte). Fakten zu Festplatten: Daten werden in Blöcken (i. d. R. 4 oder 8 KB) übertragen; Festplattenzugriffe sind langsam — das Lesen eines Blocks dauert etwa 10 Millisekunden, das Lesen aus dem Arbeitsspeicher etwa 10 Nanosekunden; in 10 ms kann eine moderne CPU Millionen von Operationen ausführen.",
          tag: "wichtig",
          source: "05_balanced_trees.pdf, Folien 74-75"
        },
        {
          title: "B-Baum",
          body: "Ein B-Baum der Ordnung m ist ein Baum, in dem jeder Knoten höchstens 2m Einträge (interne Knoten: 2m + 1 Nachkommen) und mindestens m Einträge (interne Knoten: m + 1 Nachkommen) aufweist; Ausnahme: der Wurzelknoten kann nur einen Eintrag enthalten. Ein (2,3)-Baum ist im Wesentlichen ein B-Baum der Ordnung 1. Um Festplattenzugriffe zu minimieren, wählt man m so groß wie möglich: der Baum wird kürzer, die Suche braucht weniger Lesezugriffe. Für reine (volatile) Speicherbäume ist großes m nicht sinnvoll (viele Schlüsselvergleiche pro Knoten).",
          tag: "def",
          source: "05_balanced_trees.pdf, Folie 76"
        },
        {
          title: "B-Baum: Einfügen",
          body: "Suche nach k bis zum Blattknoten L. Enthält L weniger als 2m Elemente, füge das Element zum Blattknoten hinzu. Sonst teile den Knoten entsprechend den 2m + 1 Elementen auf: die kleinsten m Elemente verbleiben im ursprünglichen Knoten, die größten m Elemente kommen in einen neuen Knoten, der mittlere Eintrag wandert nach oben in den Elternknoten.",
          tag: "wichtig",
          source: "05_balanced_trees.pdf, Folie 79"
        },
        {
          title: "B-Baum: Analyse",
          body: "Sei T ein B-Baum mit n Elementen: Alle internen Knoten haben mindestens m (genauer: mindestens m+1) Kinder. Der Baum hat eine Höhe von O(log_m n). Suche und Einfügen dauern O(log_m n); das Löschen ist knifflig, erfolgt aber dennoch logarithmisch.",
          tag: "formel",
          source: "05_balanced_trees.pdf, Folie 106"
        },
        {
          title: "Ausgeglichene Suchbäume: Schlussfolgerungen",
          body: "Binäre Suchbäume können O(log₂n) erreichen, aber auf O(n) zurückfallen, wenn sie unausgewogen sind. (2,4)-Bäume und B-Bäume sind ausgewogene Suchbäume, die O(log₂n) garantieren. Bei Daten auf der Festplatte ist die Reduzierung der Festplattenzugriffe der wichtigste Leistungsaspekt — B-Bäume bieten verbesserte Leistung für Data Dictionaries auf der Festplatte.",
          tag: "wichtig",
          source: "05_balanced_trees.pdf, Folie 108"
        }
      ],
      questions: [
        {
          question: "Wie ist das Gleichgewicht bal(T) eines Baumes definiert?",
          answer: "bal(T) = h(T_RIGHT) − h(T_LEFT): die Differenz zwischen der Höhe des rechten und des linken Teilbaums. Die Höhe h(T) ist die maximale Tiefe der Knoten.",
          source: "05_balanced_trees.pdf, Folie 6"
        },
        {
          question: "Wann ist ein binärer Suchbaum ein AVL-Baum?",
          answer: "Wenn für jeden Knoten N gilt: bal(N) ∈ {−1, 0, +1} — die Höhen der Teilbäume jeder internen Position unterscheiden sich um höchstens 1.",
          source: "05_balanced_trees.pdf, Folie 7"
        },
        {
          question: "Warum braucht man ausgeglichene Suchbäume?",
          answer: "Ein gewöhnlicher binärer Suchbaum bleibt nicht garantiert ausgeglichen und kann zu O(n) degenerieren (Extremfall: verkettete Liste mit Höhe n−1). Ein ausgeglichener Suchbaum hat Höhe O(log₂n) und garantiert damit logarithmische Worst-Case-Zeit.",
          source: "05_balanced_trees.pdf, Folien 8-12"
        },
        {
          question: "Was passiert bei der Trinode-Umstrukturierung restructure(x)?",
          answer: "Mit x, Elternknoten y und Großelternknoten z: a, b, c sind die Inorder-Auflistung von x, y, z und T1-T4 ihre vier Teilbäume. Der Teilbaum mit Wurzel z wird durch einen neuen Teilbaum mit Wurzel b ersetzt; a wird linkes Kind von b (T1, T2), c rechtes Kind von b (T3, T4).",
          source: "05_balanced_trees.pdf, Folien 20-29"
        },
        {
          question: "Welche Knotentypen hat ein (2,4)-Baum?",
          answer: "2-Knoten (ein Datenelement, 0 oder 2 Kinder), 3-Knoten (zwei Datenelemente, 0 oder 3 Kinder), 4-Knoten (drei Datenelemente, 0 oder 4 Kinder). Alle Knoten haben Teilbäume gleicher Höhe (perfekte Ausgeglichenheit).",
          source: "05_balanced_trees.pdf, Folie 36"
        },
        {
          question: "Was passiert beim Einfügen in einen (2,4)-Baum, wenn das Blatt ein 4-Knoten ist?",
          answer: "Der 4-Knoten wird in zwei Knoten aufgeteilt: ein 3-Knoten mit den Schlüsseln k1 und k2 und ein 2-Knoten mit k4. Der Schlüssel k3 wandert in den Elternknoten; ist der geteilte Knoten die Wurzel, wird ein neuer Wurzelknoten mit k3 erstellt.",
          source: "05_balanced_trees.pdf, Folien 40-41"
        },
        {
          question: "Wie wird ein Unterlauf beim Löschen aus einem (2,4)-Baum behandelt?",
          answer: "Ist das betroffene Blatt ein 2-Knoten: Sind die benachbarten Geschwister 4- oder 3-Knoten, wird eine Übertragungsoperation (transfer) durchgeführt; sind die Geschwister 2-Knoten, eine Fusionsoperation.",
          source: "05_balanced_trees.pdf, Folie 55"
        },
        {
          question: "Wie ist ein B-Baum der Ordnung m definiert?",
          answer: "Jeder Knoten hat höchstens 2m Einträge (interne Knoten: 2m+1 Nachkommen) und mindestens m Einträge (interne Knoten: m+1 Nachkommen); nur der Wurzelknoten darf einen einzigen Eintrag enthalten. Ein (2,3)-Baum ist im Wesentlichen ein B-Baum der Ordnung 1.",
          source: "05_balanced_trees.pdf, Folie 76"
        },
        {
          question: "Warum wählt man bei B-Bäumen für Festplatten ein großes m?",
          answer: "Jeder Lesezugriff auf die Festplatte bringt mehr Elemente ein und der Baum wird kürzer, sodass die Suche weniger Festplattenzugriffe braucht. Die zusätzlichen Schlüsselvergleiche pro Knoten sind viel billiger als Festplattenzugriffe (Block lesen ~10 ms vs. RAM ~10 ns).",
          source: "05_balanced_trees.pdf, Folien 75-76"
        },
        {
          question: "Wie hoch ist ein B-Baum mit n Elementen, und wie schnell sind Suche und Einfügen?",
          answer: "Die Höhe ist O(log_m n); Suche und Einfügen dauern O(log_m n). Das Löschen ist knifflig, erfolgt aber ebenfalls logarithmisch.",
          source: "05_balanced_trees.pdf, Folie 106"
        }
      ],
      flashcards: [
        {
          front: "bal(T)",
          back: "h(T_RIGHT) − h(T_LEFT) — Differenz der Teilbaumhöhen.",
          source: "05_balanced_trees.pdf, Folie 6"
        },
        {
          front: "AVL-Bedingung",
          back: "Für jeden Knoten N: bal(N) ∈ {−1, 0, +1}.",
          source: "05_balanced_trees.pdf, Folie 7"
        },
        {
          front: "Höhe eines ausgeglichenen BST",
          back: "O(log₂n) — beste Worst-Case-Zeit für binäre Suchbäume.",
          source: "05_balanced_trees.pdf, Folie 8"
        },
        {
          front: "Degenerierter BST",
          back: "Entspricht einer verketteten Liste: Höhe n−1, worst case O(n).",
          source: "05_balanced_trees.pdf, Folie 12"
        },
        {
          front: "Rotation",
          back: "Untergeordnetes Element über sein übergeordnetes tauschen; einfach (1 Tausch) oder doppelt (2 Tausche).",
          source: "05_balanced_trees.pdf, Folien 14-19"
        },
        {
          front: "(2,4)-Baum: Knotentypen",
          back: "2-Knoten: 1 Element, 0/2 Kinder. 3-Knoten: 2 Elemente, 0/3 Kinder. 4-Knoten: 3 Elemente, 0/4 Kinder.",
          source: "05_balanced_trees.pdf, Folie 36"
        },
        {
          front: "(2,4)-Baum: Operationen-Komplexität",
          back: "Einfügen und Löschen jeweils O(log₂n).",
          source: "05_balanced_trees.pdf, Folien 53, 73"
        },
        {
          front: "B-Baum der Ordnung m",
          back: "Höchstens 2m, mindestens m Einträge pro Knoten (Ausnahme Wurzel); Höhe O(log_m n).",
          source: "05_balanced_trees.pdf, Folien 76, 106"
        },
        {
          front: "Transfer vs. Fusion",
          back: "Unterlauf beim (2,4)-Löschen: Geschwister 3-/4-Knoten → Übertragung; Geschwister 2-Knoten → Fusion.",
          source: "05_balanced_trees.pdf, Folie 55"
        }
      ]
    },
    {
      id: "heaps-hashing",
      title: "Heaps & Hashing",
      icon: "🗂️",
      cards: [
        {
          title: "Vollständiger Binärbaum",
          body: "Ein Binärbaum der Höhe h(T) ist vollständig, wenn die Ebenen 0 bis h−1 vollständig belegt sind und es links von einem Knoten in der Ebene h keine „Lücken“ gibt.",
          tag: "def",
          source: "06_heaps_hash-tables.pdf, Folien 3-5"
        },
        {
          title: "Vollständiger Binärbaum als Array",
          body: "Ein vollständiger Binärbaum lässt sich einfach als Array darstellen: Die Knoten werden in der Reihenfolge gespeichert, in der sie bei einer Level-Order-Traversierung besucht werden (von oben nach unten, von links nach rechts). Navigation: Wurzel = a[0]; für den Knoten a[i] liegt das linke Kind in a[2·i+1], das rechte Kind in a[2·i+2] und der Elternknoten in a[(i−1)/2].",
          tag: "formel",
          source: "06_heaps_hash-tables.pdf, Folien 6-10"
        },
        {
          title: "Heap (Halde)",
          body: "Ein vollständiger Binärbaum, bei dem jeder innere Knoten bei <b>max-at-top</b> Heaps größer oder gleich, bei <b>min-at-top</b> Heaps kleiner oder gleich seinen Kindern ist. Die verwendeten Heaps sind min-at-top: Der kleinste Wert befindet sich immer an der Wurzel; der größte Wert kann in jedem beliebigen Blatt vorkommen.",
          tag: "def",
          source: "06_heaps_hash-tables.pdf, Folie 12"
        },
        {
          title: "Heap: Operationen",
          body: "<b>insert(e):</b> fügt e in den nächsten freien Platz ein (erweitert das Array bei Bedarf) und „verschiebt“ das neue Element nach oben (shiftUp), bis es <= seinen Kindern ist oder Wurzel wird. <b>remove():</b> entfernt das Wurzelelement und gibt es zurück; versetzt das letzte Element an die Wurzel und „verschiebt“ es nach unten (shiftDown), bis die Heap-Bedingung wieder gilt. <b>makeHeap():</b> wandelt ein Array in einen Heap um — shiftDown wird vom Elternknoten des letzten Elements (parentOfLast = (last−1)/2) rückwärts bis zur Wurzel aufgerufen.",
          tag: "wichtig",
          source: "06_heaps_hash-tables.pdf, Folien 13, 34-35"
        },
        {
          title: "Heap: Zeitkomplexität",
          body: "Ein Heap mit n Elementen hat eine Höhe von <= log₂n. Daher haben sowohl Entfernen als auch Einfügen eine Zeitkomplexität von O(log₂n): Beim Herab- bzw. Hochsuchen werden höchstens log₂n Ebenen durchlaufen, mit konstant vielen Operationen pro Ebene. Die Erstellung eines Heaps aus einem Array (makeHeap) beträgt O(n).",
          tag: "formel",
          source: "06_heaps_hash-tables.pdf, Folie 49"
        },
        {
          title: "Heapsort",
          body: "Selection Sort ermittelt wiederholt das größte verbleibende Element per linearem Durchlauf — O(n) Schritte pro Durchlauf, insgesamt O(n²). Heapsort ermittelt wiederholt das kleinste verbleibende Element und setzt es an seinen Platz: Das Array wird in einen Heap umgewandelt, sodass das kleinste verbleibende Element in O(log₂n) Schritten gefunden und entfernt werden kann — insgesamt O(n·log₂n). Ablauf: heap.remove() liefert das kleinste Element, das ans Ende des unsortierten Bereichs gesetzt wird.",
          tag: "def",
          source: "06_heaps_hash-tables.pdf, Folien 50-52"
        },
        {
          title: "Heapsort im Vergleich",
          body: "Heapsort: best, average und worst case O(n·log₂n), <b>instabil</b>. Heapsort erreicht die gleiche Worst-Case-Zeitkomplexität wie Mergesort, hat aber eine bessere Raumkomplexität. Insertion Sort eignet sich nach wie vor am besten für fast sortierte Arrays — Heapsort mischt ein fast sortiertes Array vor dem Sortieren durcheinander. Quicksort ist im Durchschnitt in der Regel immer noch am schnellsten.",
          tag: "wichtig",
          source: "06_heaps_hash-tables.pdf, Folie 68"
        },
        {
          title: "Hashing: Idee",
          body: "Die optimale Such- und Einfügeleistung wird erreicht, wenn der Schlüssel als Index in einem Array behandelt werden kann (Beispiel Trikotnummer: Suche und Einfügen in O(1)). Hashing: eine Hash-Funktion wandelt die Schlüssel in Array-Indizes um; der Bereich der möglichen Hash-Werte muss der Größe des Arrays entsprechen; Techniken behandeln Fälle, in denen mehreren Elementen derselbe Hash-Wert zugewiesen wird. Die resultierende Datenstruktur heißt Hash-Tabelle.",
          tag: "def",
          source: "06_heaps_hash-tables.pdf, Folien 69-71"
        },
        {
          title: "Hash-Funktion und Kollision",
          body: "Für eine Hash-Tabelle der Größe n definiert die Hash-Funktion eine Abbildung von der Menge der möglichen Schlüsselwerte auf die ganzen Zahlen von 0 bis n−1; h(key) wird als Hash-Code bezeichnet. Eine <b>Kollision</b> tritt auf, wenn Elementen mit unterschiedlichen Schlüsselwerten derselbe Hash-Code zugewiesen wird.",
          tag: "def",
          source: "06_heaps_hash-tables.pdf, Folie 72"
        },
        {
          title: "Kollisionen I: Separate Verkettung",
          body: "Elemente mit demselben Hash-Code werden „verkettet“: Jede Position der Hash-Tabelle dient als „Bucket“ für mehrere Datenelemente. Implementierung 1 — jeder Bucket ist ein Array: große Buckets können Speicher verschwenden, ein Bucket kann voll werden (Überlauf beim Hinzufügen zu einem vollen Bucket). Implementierung 2 — jeder Bucket ist eine verkettete Liste: die Verweise in den Knoten beanspruchen zusätzlichen Speicherplatz.",
          tag: "wichtig",
          source: "06_heaps_hash-tables.pdf, Folien 73-74"
        },
        {
          title: "Kollisionen II: Offene Adressierung",
          body: "Ist die von der Hash-Funktion zugewiesene Position belegt, wird eine andere freie Position gesucht — dieser Vorgang heißt Sondieren (Probing). Auch die Suche nach einem Element sondiert: Sie kann erst beendet werden, wenn eine freie Position erreicht wird. Drei Verfahren: lineare Sondierung, quadratische Sondierung, doppeltes Hashing.",
          tag: "def",
          source: "06_heaps_hash-tables.pdf, Folie 75"
        },
        {
          title: "Lineare Sondierung",
          body: "Ablauf: h(key), h(key)+1, h(key)+2, …, wobei bei Bedarf ein Sprung an den Anfang erfolgt. <b>Vorteil:</b> Wenn eine freie Position vorhanden ist, wird sie irgendwann gefunden. <b>Nachteil:</b> Es bilden sich „Cluster“ belegter Positionen, wodurch die Längen nachfolgender Sondierungen tendenziell zunehmen (Sondierungslänge = Anzahl der betrachteten Positionen).",
          tag: "wichtig",
          source: "06_heaps_hash-tables.pdf, Folien 76-79"
        },
        {
          title: "Quadratische Sondierung",
          body: "Die Offsets sind perfekte Quadrate: h + 1², h + 2², h + 3², … (mit Sprung an den Anfang bei Bedarf). <b>Vorteil:</b> reduziert Clustering. <b>Nachteil:</b> Es kann vorkommen, dass keine offene Stelle gefunden wird, obwohl eine existiert.",
          tag: "wichtig",
          source: "06_heaps_hash-tables.pdf, Folien 80-83"
        },
        {
          title: "Doppeltes Hashing",
          body: "Verwendet zwei Hash-Funktionen: h1 berechnet den Hash-Code, h2 den Schrittwert für die Suche. Kombiniert die Vorteile der linearen und der quadratischen Sondierung: verringert die Häufung und findet eine freie Position, sofern eine vorhanden ist — vorausgesetzt, die Tabellengröße ist eine Primzahl.",
          tag: "wichtig",
          source: "06_heaps_hash-tables.pdf, Folien 84-86"
        },
        {
          title: "Offene Adressierung: Elemente entfernen",
          body: "Beim einfachen Entfernen würden spätere Suchen fälschlich abbrechen (die Suche stoppt bei einer freien Position, obwohl das gesuchte Element weiter hinten liegt). Deshalb wird an der Position ein spezieller Wert hinterlassen: Es gibt drei Arten von Positionen — belegt, leer, entfernt. Die Suche endet bei einer leeren Position, nicht jedoch bei einer entfernten; eingefügt werden kann in leere oder entfernte Positionen.",
          tag: "wichtig",
          source: "06_heaps_hash-tables.pdf, Folien 87-90"
        },
        {
          title: "Überlauf und Auslastungsgrad",
          body: "Überlauf = es kann kein Platz für ein Element gefunden werden. Um Überlauf zu vermeiden und Suchzeiten zu verkürzen, sollte die Hash-Tabelle vergrößert werden, wenn der Prozentsatz belegter Positionen zu hoch wird. Auslastungsgrad = Anzahl der Schlüssel / Größe der Tabelle. Richtwerte: offene Adressierung unter ½, separate Verkettung unter 1. Problem: ggf. muss für alle vorhandenen Elemente der Hash-Code neu berechnet werden.",
          tag: "formel",
          source: "06_heaps_hash-tables.pdf, Folie 96"
        },
        {
          title: "Eigenschaften einer guten Hash-Funktion",
          body: "1. effizient zu berechnen; 2. nutzt den gesamten Schlüssel (die Änderung eines beliebigen Zeichens sollte den Hash-Code ändern); 3. verteilt die Schlüssel mehr oder weniger gleichmäßig über die Tabelle; 4. muss eine Funktion sein. Mit dem Modulo-Operator wird ein valider Index erzeugt: index = h(k) % table_size. In Java hat jedes Objekt eine hashCode()-Methode (Default basiert auf dem Speicherort; Klassen können sie überschreiben).",
          tag: "wichtig",
          source: "06_heaps_hash-tables.pdf, Folie 97"
        },
        {
          title: "Hash-Funktionen für Zeichenketten",
          body: "<b>Version 1 — Summe der Unicode-Werte:</b> z. B. h('eat') = 101 + 97 + 116 = 314. Achtung: Alle Permutationen eines Zeichensatzes erhalten den gleichen Code (h('tea') = h('eat')). <b>Version 2 — gewichtete Summe der Unicode-Werte</b> mit Potenzen einer Konstante b: Die Positionen der Zeichen beeinflussen den Hash-Code, verschiedene Permutationen erhalten unterschiedliche Codes. Java verwendet b = 31 in der hashCode()-Methode der String-Klasse.",
          tag: "beispiel",
          source: "06_heaps_hash-tables.pdf, Folie 98"
        },
        {
          title: "Hash-Tabelle: Effizienz",
          body: "Im besten Fall sind Suche und Einfügen O(1). Im schlimmsten Fall linear: offene Adressierung O(m) mit m = Größe der Hash-Tabelle, separate Verkettung O(n) mit n = Anzahl der Schlüssel. Bei guter Wahl von Hash-Funktion und Tabellengröße ist die Komplexität im Allgemeinen besser als O(log n) und nähert sich O(1). Zeit-Raum-Tradeoff: Größere Tabellen haben eine bessere Leistung, verbrauchen aber mehr Speicher.",
          tag: "formel",
          source: "06_heaps_hash-tables.pdf, Folie 99"
        }
      ],
      questions: [
        {
          question: "Wann ist ein Binärbaum vollständig?",
          answer: "Wenn die Ebenen 0 bis h−1 vollständig belegt sind und es links von einem Knoten in der Ebene h keine Lücken gibt.",
          source: "06_heaps_hash-tables.pdf, Folien 3-5"
        },
        {
          question: "Wo liegen im Array-dargestellten vollständigen Binärbaum die Kinder und der Elternknoten von a[i]?",
          answer: "Linkes Kind: a[2·i+1], rechtes Kind: a[2·i+2], Elternknoten: a[(i−1)/2]. Die Wurzel ist a[0].",
          source: "06_heaps_hash-tables.pdf, Folie 10"
        },
        {
          question: "Was ist ein min-at-top Heap?",
          answer: "Ein vollständiger Binärbaum, bei dem jeder innere Knoten kleiner oder gleich seinen Kindern ist. Der kleinste Wert steht immer an der Wurzel; der größte Wert kann in jedem beliebigen Blatt vorkommen.",
          source: "06_heaps_hash-tables.pdf, Folie 12"
        },
        {
          question: "Wie funktioniert remove() bei einem Heap, und welche Komplexität hat es?",
          answer: "Das Wurzelelement wird entfernt und zurückgegeben; das letzte Element des Heaps wird an die Wurzel versetzt und per shiftDown nach unten verschoben, bis die Heap-Bedingung wieder gilt. Komplexität O(log₂n), da höchstens log₂n Ebenen durchlaufen werden.",
          source: "06_heaps_hash-tables.pdf, Folien 13, 49"
        },
        {
          question: "Warum ist Heapsort effizienter als Selection Sort?",
          answer: "Selection Sort findet das jeweils kleinste/größte verbleibende Element per linearem Durchlauf (O(n) pro Durchlauf, insgesamt O(n²)). Heapsort wandelt das Array in einen Heap um und kann das kleinste verbleibende Element in O(log₂n) Schritten finden und entfernen — insgesamt O(n·log₂n).",
          source: "06_heaps_hash-tables.pdf, Folien 50-51"
        },
        {
          question: "Wie schneidet Heapsort im Vergleich zu Mergesort und Quicksort ab?",
          answer: "Heapsort erreicht wie Mergesort O(n·log₂n) im Worst Case, hat aber eine bessere Raumkomplexität; es ist instabil. Quicksort ist im Durchschnitt in der Regel am schnellsten. Für fast sortierte Arrays bleibt Insertion Sort am besten — Heapsort mischt ein fast sortiertes Array vor dem Sortieren durcheinander.",
          source: "06_heaps_hash-tables.pdf, Folie 68"
        },
        {
          question: "Was ist eine Kollision beim Hashing?",
          answer: "Wenn Elementen mit unterschiedlichen Schlüsselwerten derselbe Hash-Code zugewiesen wird.",
          source: "06_heaps_hash-tables.pdf, Folie 72"
        },
        {
          question: "Welche zwei grundlegenden Strategien zur Kollisionsbehandlung gibt es?",
          answer: "Separate Verkettung (jede Position ist ein Bucket — als Array oder verkettete Liste — für mehrere Elemente) und offene Adressierung (bei belegter Position wird per Sondieren eine andere freie Position gesucht: linear, quadratisch oder doppeltes Hashing).",
          source: "06_heaps_hash-tables.pdf, Folien 73-75"
        },
        {
          question: "Was ist der Nachteil der linearen Sondierung, und wie helfen quadratische Sondierung und doppeltes Hashing?",
          answer: "Bei linearer Sondierung bilden sich Cluster belegter Positionen, die nachfolgende Sondierungen verlängern. Quadratische Sondierung (Offsets 1², 2², 3², …) reduziert Clustering, findet aber evtl. keine offene Stelle. Doppeltes Hashing (h1 = Hash-Code, h2 = Schrittwert) kombiniert beide Vorteile und findet eine freie Position, sofern die Tabellengröße eine Primzahl ist.",
          source: "06_heaps_hash-tables.pdf, Folien 76-86"
        },
        {
          question: "Warum braucht man bei offener Adressierung den Zustand „entfernt“?",
          answer: "Die Suche endet bei einer leeren Position. Würde ein Element einfach gelöscht, könnte die Suche nach einem später einsortierten Element fälschlich abbrechen. Deshalb gibt es drei Positionsarten: belegt, leer, entfernt — die Suche läuft über entfernte Positionen hinweg, eingefügt werden darf in leere und entfernte.",
          source: "06_heaps_hash-tables.pdf, Folien 87-90"
        },
        {
          question: "Wie ist der Auslastungsgrad definiert, und welche Richtwerte gelten?",
          answer: "Auslastungsgrad = Anzahl der Schlüssel in der Tabelle / Größe der Tabelle. Bei offener Adressierung sollte er unter ½ bleiben, bei separater Verkettung unter 1.",
          source: "06_heaps_hash-tables.pdf, Folie 96"
        },
        {
          question: "Warum ist die Summe der Unicode-Werte keine gute Hash-Funktion für Strings?",
          answer: "Alle Permutationen eines Zeichensatzes erhalten den gleichen Code (h('tea') = h('eat')). Besser ist eine gewichtete Summe mit Potenzen einer Konstante b, sodass die Zeichenpositionen den Code beeinflussen — Java nutzt b = 31 in String.hashCode().",
          source: "06_heaps_hash-tables.pdf, Folie 98"
        }
      ],
      flashcards: [
        {
          front: "Vollständiger Binärbaum",
          back: "Ebenen 0 bis h−1 voll belegt, keine Lücken links auf Ebene h.",
          source: "06_heaps_hash-tables.pdf, Folien 3-5"
        },
        {
          front: "Heap-Navigation im Array",
          back: "Linkes Kind: a[2i+1], rechtes Kind: a[2i+2], Eltern: a[(i−1)/2].",
          source: "06_heaps_hash-tables.pdf, Folie 10"
        },
        {
          front: "Min-at-top Heap",
          back: "Vollständiger Binärbaum; jeder innere Knoten <= seinen Kindern; Minimum an der Wurzel.",
          source: "06_heaps_hash-tables.pdf, Folie 12"
        },
        {
          front: "Heap: Komplexitäten",
          back: "insert und remove O(log₂n), makeHeap O(n), Höhe <= log₂n.",
          source: "06_heaps_hash-tables.pdf, Folie 49"
        },
        {
          front: "Heapsort: Komplexität",
          back: "O(n·log₂n) in allen Fällen; instabil; bessere Raumkomplexität als Mergesort.",
          source: "06_heaps_hash-tables.pdf, Folie 68"
        },
        {
          front: "Hash-Funktion",
          back: "Bildet Schlüsselwerte auf ganze Zahlen 0 bis n−1 ab; h(key) = Hash-Code.",
          source: "06_heaps_hash-tables.pdf, Folie 72"
        },
        {
          front: "Kollision",
          back: "Unterschiedliche Schlüssel erhalten denselben Hash-Code.",
          source: "06_heaps_hash-tables.pdf, Folie 72"
        },
        {
          front: "Sondierungsverfahren",
          back: "Linear: +1, +2, … Quadratisch: +1², +2², … Doppeltes Hashing: Schrittwert aus h2.",
          source: "06_heaps_hash-tables.pdf, Folien 76-86"
        },
        {
          front: "Auslastungsgrad-Richtwerte",
          back: "Offene Adressierung: < ½. Separate Verkettung: < 1.",
          source: "06_heaps_hash-tables.pdf, Folie 96"
        },
        {
          front: "Hash-Tabelle: worst case",
          back: "Offene Adressierung O(m) (Tabellengröße), separate Verkettung O(n) (Anzahl Schlüssel); best case O(1).",
          source: "06_heaps_hash-tables.pdf, Folie 99"
        }
      ],
      walkthroughs: [
        {
          id: "heapsort",
          title: "Heapsort",
          source: "06_heaps_hash-tables.pdf, Folien 52-67",
          intro: "Min-at-top Heap: remove() liefert wiederholt das kleinste Element, das ans Ende des unsortierten Bereichs gesetzt wird.",
          visual: {
            kind: "array",
            bars: true,
            values: [13, 6, 45, 10, 3, 22, 5]
          },
          steps: [
            {
              title: "Heap aufbauen",
              text: "new Heap(arr) wandelt das Array per makeHeap in einen min-at-top Heap um: 3 6 5 10 13 22 45.",
              values: [
                { kind: "array-index", index: 0, value: 3 },
                { kind: "array-index", index: 1, value: 6 },
                { kind: "array-index", index: 2, value: 5 },
                { kind: "array-index", index: 3, value: 10 },
                { kind: "array-index", index: 4, value: 13 },
                { kind: "array-index", index: 5, value: 22 },
                { kind: "array-index", index: 6, value: 45 }
              ],
              highlights: [{ kind: "array-index", index: 0, role: "active" }]
            },
            {
              title: "remove() → 3",
              text: "Das kleinste Element 3 wird entfernt und an Position 6 gesetzt; der Heap ordnet sich neu: 5 6 22 10 13 45 | 3.",
              values: [
                { kind: "array-index", index: 0, value: 5 },
                { kind: "array-index", index: 1, value: 6 },
                { kind: "array-index", index: 2, value: 22 },
                { kind: "array-index", index: 3, value: 10 },
                { kind: "array-index", index: 4, value: 13 },
                { kind: "array-index", index: 5, value: 45 },
                { kind: "array-index", index: 6, value: 3 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "active" },
                { kind: "array-index", index: 6, role: "done" }
              ]
            },
            {
              title: "remove() → 5",
              text: "Das kleinste Element 5 wird entfernt und an Position 5 gesetzt: 6 10 22 45 13 | 5 3.",
              values: [
                { kind: "array-index", index: 0, value: 6 },
                { kind: "array-index", index: 1, value: 10 },
                { kind: "array-index", index: 2, value: 22 },
                { kind: "array-index", index: 3, value: 45 },
                { kind: "array-index", index: 4, value: 13 },
                { kind: "array-index", index: 5, value: 5 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "active" },
                { kind: "array-index", index: 5, role: "done" },
                { kind: "array-index", index: 6, role: "done" }
              ]
            },
            {
              title: "Restliche remove()-Aufrufe",
              text: "Die Schleife läuft weiter, bis der unsortierte Bereich leer ist. Ergebnis: 45 22 13 10 6 5 3 — mit dem min-at-top Heap entsteht die absteigende Reihenfolge.",
              values: [
                { kind: "array-index", index: 0, value: 45 },
                { kind: "array-index", index: 1, value: 22 },
                { kind: "array-index", index: 2, value: 13 },
                { kind: "array-index", index: 3, value: 10 },
                { kind: "array-index", index: 4, value: 6 },
                { kind: "array-index", index: 5, value: 5 },
                { kind: "array-index", index: 6, value: 3 }
              ],
              highlights: [
                { kind: "array-index", index: 0, role: "done" },
                { kind: "array-index", index: 1, role: "done" },
                { kind: "array-index", index: 2, role: "done" },
                { kind: "array-index", index: 3, role: "done" },
                { kind: "array-index", index: 4, role: "done" },
                { kind: "array-index", index: 5, role: "done" },
                { kind: "array-index", index: 6, role: "done" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "graphen",
      title: "Graphen",
      icon: "🕸️",
      cards: [
        {
          title: "Graph",
          body: "Ein Graph besteht aus einer Menge von Knoten V (auch Eckpunkte genannt; englisch: Vertices) und einer Menge von Kanten E (auch Bögen genannt; englisch: Edges), von denen jede ein Paar von Knoten verbindet. Graphdatenmodell: G = (V, E).",
          tag: "def",
          source: "07_graphs.pdf, Folien 3-4"
        },
        {
          title: "Gewichteter Graph",
          body: "Ein Graph, bei dem mit jeder Kante Kosten verbunden sind. Beispiel Autobahn-Graph: Knoten repräsentieren Städte, Kanten Autobahnen, die Kosten bezeichnen die Entfernung in Kilometern. Graphalgorithmen beantworten Fragen wie „Was ist die kürzeste Strecke von Berlin nach Hannover?“.",
          tag: "def",
          source: "07_graphs.pdf, Folie 5"
        },
        {
          title: "Adjazenz und Nachbarn",
          body: "Zwei Knoten sind benachbart (adjazent), wenn sie durch eine einzelne Kante verbunden sind. Die Ansammlung der zu einem Knoten v benachbarten Knoten wird als Nachbarn von v bezeichnet.",
          tag: "def",
          source: "07_graphs.pdf, Folie 6"
        },
        {
          title: "Pfad, zusammenhängend, vollständig",
          body: "Ein <b>Pfad</b> ist eine Folge von Kanten, die zwei Knoten verbindet. Ein Graph ist <b>zusammenhängend (connected)</b>, wenn es einen Pfad zwischen zwei beliebigen Knoten gibt. Ein Graph ist <b>vollständig (complete)</b>, wenn es zwischen jedem Paar von Knoten eine Kante gibt.",
          tag: "def",
          source: "07_graphs.pdf, Folien 7-8"
        },
        {
          title: "Gerichtete Graphen",
          body: "Jede Kante weist eine Richtung auf (dargestellt durch einen Pfeil) und hat einen ausgehenden und einen eingehenden Knoten. Kanten werden oft als geordnete Paare (Startknoten, Endknoten) dargestellt: (a,b) kann eine Kante sein, ohne dass (b,a) eine ist. Ein Pfad in einem gerichteten Graphen ist eine Folge von Kanten, bei der der Endknoten der Kante i mit dem Startknoten der Kante i+1 identisch sein muss — {(a,b),(b,e),(e,f)} ist valide, {(a,b),(c,b),(c,a)} nicht.",
          tag: "def",
          source: "07_graphs.pdf, Folien 9-12"
        },
        {
          title: "Baum vs. Graph",
          body: "Ein Baum ist ein spezieller Typ eines Graphen: Er ist zusammenhängend und ungerichtet und er ist azyklisch — es gibt keinen Pfad mit unterschiedlichen Kanten, der am selben Knoten beginnt und endet. Normalerweise wird einer der Knoten als Wurzel bezeichnet, obwohl die Graphentheorie dies nicht verlangt.",
          tag: "wichtig",
          source: "07_graphs.pdf, Folien 13-14"
        },
        {
          title: "Spannbaum (Spanning Tree)",
          body: "Eine Teilmenge eines zusammenhängenden Graphen, die alle Knoten und eine Teilmenge der Kanten enthält, die einen Baum bilden.",
          tag: "def",
          source: "07_graphs.pdf, Folie 15"
        },
        {
          title: "Darstellung: Kantenliste und Knotenliste",
          body: "<b>Kantenliste:</b> eine Liste oder ein Array zur Darstellung der Kanten, z. B. int[] edgelist = {Anzahl Knoten, Anzahl Kanten, dann je Kante Start- und Endknoten}. <b>Knotenliste:</b> stellt die Nachbarschaften der Knoten dar — pro Knoten die Anzahl seiner Kanten gefolgt von den Nachbarn; alternativ zwei Arrays neighborhoods und nodeNhd, wobei die Nachbarschaft von Knoten i in den Positionen nodeNhd[i-1] bis nodeNhd[i]−1 liegt.",
          source: "07_graphs.pdf, Folien 16-19"
        },
        {
          title: "Darstellung: Adjazenz-Matrix",
          body: "Ein zweidimensionales Array zur Darstellung der Kanten: edge[r][c] = die Kante zwischen den Knoten r und c bzw. die Kosten für den Weg von r nach c. Ein Spezialwert zeigt an, dass man nicht von r nach c gelangen kann — bei ungewichteten Graphen 0, bei gewichteten Graphen darf 0 nicht verwendet werden, da es tatsächlich Kosten von 0 geben kann. Gut geeignet für <b>dichte</b> Graphen (viele Kanten pro Knoten); verschwendet Speicherplatz bei <b>spärlichen</b> Graphen.",
          tag: "wichtig",
          source: "07_graphs.pdf, Folien 20-23"
        },
        {
          title: "Darstellung: Adjazenz-Liste",
          body: "Eine Liste (Array oder verkettete Liste) von verketteten Listen zur Darstellung der Kanten und ggf. Kosten. Für nicht vorhandene Kanten wird kein Speicher zugewiesen, aber die Verweise in den verketteten Listen beanspruchen zusätzlichen Speicherplatz. Eignet sich gut für spärliche Graphen, verschwendet jedoch Speicherplatz, wenn der Graph dicht ist.",
          tag: "wichtig",
          source: "07_graphs.pdf, Folien 24-26"
        },
        {
          title: "Traversierung eines Graphen",
          body: "Man beginnt an einem Knoten und besucht alle Knoten, die von diesem aus erreichbar sind (besuchen = Daten verarbeiten). <b>Tiefensuche:</b> so weit wie möglich einen bestimmten Pfad entlang gehen, bevor man zurückgeht. <b>Breitensuche:</b> einen Knoten besuchen, dann alle seine Nachbarn, dann alle noch nicht besuchten Knoten zwei Kanten entfernt, dann drei Kanten usw. Anwendungen: Ermittlung erreichbarer Knoten, Zustandsraum-Suche, Webcrawler (Knoten = Seiten, Kanten = Links).",
          tag: "def",
          source: "07_graphs.pdf, Folie 29"
        },
        {
          title: "Tiefensuche (Algorithmus)",
          body: "depthFirstTrav(v): besuche Knoten v und markiere ihn als besucht; für jeden Knoten w in v's Nachbarschaft: wenn w noch nicht besucht wurde, rufe depthFirstTrav(w) rekursiv auf. Beispielgraph der Folien: depthFirstTrav(1) besucht die Knoten in der Reihenfolge 1 3 7 5 4 6 8 2.",
          tag: "wichtig",
          source: "07_graphs.pdf, Folien 30-47"
        },
        {
          title: "Prüfung auf Zyklen",
          body: "In einem ungerichteten Graphen: eine Tiefensuche durchführen und die Knoten als besucht markieren; stößt man bei den Nachbarn eines besuchten Knotens auf einen bereits besuchten Knoten, muss ein Zyklus vorliegen. Werden keine Zyklen gefunden, ist der Graph azyklisch. Für gerichtete Graphen funktioniert das nicht (Beispiel: c ist Nachbar von a und b, ohne dass ein Zyklus existiert).",
          tag: "wichtig",
          source: "07_graphs.pdf, Folie 59"
        },
        {
          title: "Breitensuche (Algorithmus)",
          body: "breadthFirstTrav(v): Füge Knoten v in eine Queue ein und markiere ihn als besucht. Solange die Queue nicht leer ist: entferne Knoten w aus der Queue, besuche ihn, und füge jeden noch nicht besuchten Knoten x aus w's Nachbarschaft in die Queue ein (als besucht markiert). Beispielgraph der Folien: breadthFirstTrav(1) besucht 1 3 6 8 7 4 5 2.",
          tag: "wichtig",
          source: "07_graphs.pdf, Folien 60-73"
        },
        {
          title: "Spannbäume durch Traversierung",
          body: "Sowohl Tiefensuche als auch Breitensuche erzeugen einen Spannbaum des Graphen. Beispiel Autobahn-Graph von Berlin (Kanten je Nachbarschaftsliste nach steigenden Kosten sortiert): Die Tiefensuche liefert eine Kette Berlin-Potsdam-Magdeburg-Leipzig-Dresden-Hannover-Bremen-Hamburg; die Breitensuche einen flachen Baum mit Berlin als Wurzel und den Ebenen Potsdam/Magdeburg/Hamburg, dann Dresden/Leipzig/Hannover/Bremen.",
          tag: "beispiel",
          source: "07_graphs.pdf, Folien 48-58, 74-83"
        }
      ],
      questions: [
        {
          question: "Woraus besteht ein Graph?",
          answer: "Aus einer Menge von Knoten V (Vertices) und einer Menge von Kanten E (Edges), von denen jede ein Paar von Knoten verbindet: G = (V, E).",
          source: "07_graphs.pdf, Folien 3-4"
        },
        {
          question: "Wann ist ein Graph zusammenhängend, wann vollständig?",
          answer: "Zusammenhängend, wenn es zwischen zwei beliebigen Knoten einen Pfad gibt. Vollständig, wenn es zwischen jedem Paar von Knoten eine Kante gibt.",
          source: "07_graphs.pdf, Folie 8"
        },
        {
          question: "Was unterscheidet einen Baum von einem allgemeinen Graphen?",
          answer: "Ein Baum ist ein spezieller Graph: zusammenhängend, ungerichtet und azyklisch (kein Pfad mit unterschiedlichen Kanten, der am selben Knoten beginnt und endet).",
          source: "07_graphs.pdf, Folie 13"
        },
        {
          question: "Wann ist ein Pfad in einem gerichteten Graphen gültig?",
          answer: "Wenn der Endknoten der Kante i mit dem Startknoten der Kante i+1 identisch ist — z. B. ist {(a,b),(b,e),(e,f)} valide, {(a,b),(c,b),(c,a)} nicht.",
          source: "07_graphs.pdf, Folien 10-12"
        },
        {
          question: "Wann eignet sich die Adjazenz-Matrix, wann die Adjazenz-Liste?",
          answer: "Die Adjazenz-Matrix eignet sich für dichte Graphen (viele Kanten pro Knoten), verschwendet aber Speicher bei spärlichen Graphen. Die Adjazenz-Liste eignet sich für spärliche Graphen, verschwendet aber Speicher bei dichten.",
          source: "07_graphs.pdf, Folien 23-25"
        },
        {
          question: "Warum kann man bei gewichteten Graphen in der Adjazenz-Matrix nicht 0 als „keine Kante“ verwenden?",
          answer: "Weil es tatsächlich Kanten mit Kosten 0 geben kann — es muss ein anderer spezieller Wert verwendet werden.",
          source: "07_graphs.pdf, Folie 22"
        },
        {
          question: "Wie unterscheiden sich Tiefensuche und Breitensuche?",
          answer: "Tiefensuche geht so weit wie möglich einen Pfad entlang, bevor sie zurückgeht (rekursiv). Breitensuche besucht erst alle Nachbarn, dann alle Knoten zwei Kanten entfernt usw. — implementiert mit einer Queue.",
          source: "07_graphs.pdf, Folien 29, 30-73"
        },
        {
          question: "Wie prüft man einen ungerichteten Graphen auf Zyklen?",
          answer: "Tiefensuche mit Besucht-Markierung: Stößt man bei den Nachbarn eines besuchten Knotens auf einen bereits besuchten Knoten, liegt ein Zyklus vor. Für gerichtete Graphen funktioniert dieses Verfahren nicht.",
          source: "07_graphs.pdf, Folie 59"
        },
        {
          question: "Nennen Sie Anwendungen der Graph-Traversierung.",
          answer: "Ermittlung der von einem Knoten aus erreichbaren Knoten, Zustandsraum-Suche, Webcrawler (Knoten = Seiten, Kanten = Links).",
          source: "07_graphs.pdf, Folie 29"
        }
      ],
      flashcards: [
        {
          front: "Graph G",
          back: "G = (V, E): Menge von Knoten (Vertices) und Menge von Kanten (Edges).",
          source: "07_graphs.pdf, Folie 4"
        },
        {
          front: "Adjazent",
          back: "Zwei Knoten sind benachbart, wenn sie durch eine einzelne Kante verbunden sind.",
          source: "07_graphs.pdf, Folie 6"
        },
        {
          front: "Zusammenhängend / vollständig",
          back: "Zusammenhängend: Pfad zwischen beliebigen Knoten. Vollständig: Kante zwischen jedem Knotenpaar.",
          source: "07_graphs.pdf, Folie 8"
        },
        {
          front: "Spannbaum",
          back: "Teilmenge eines zusammenhängenden Graphen: alle Knoten + Kanten-Teilmenge, die einen Baum bildet.",
          source: "07_graphs.pdf, Folie 15"
        },
        {
          front: "Adjazenz-Matrix vs. -Liste",
          back: "Matrix: gut für dichte Graphen. Liste: gut für spärliche Graphen.",
          source: "07_graphs.pdf, Folien 23-25"
        },
        {
          front: "Tiefensuche",
          back: "Rekursiv: Knoten besuchen, markieren, dann für jeden unbesuchten Nachbarn rekursiv weitersuchen.",
          source: "07_graphs.pdf, Folien 30-47"
        },
        {
          front: "Breitensuche",
          back: "Mit Queue: Startknoten einfügen; wiederholt entnehmen, besuchen und unbesuchte Nachbarn einfügen.",
          source: "07_graphs.pdf, Folien 60-73"
        },
        {
          front: "Baum (graphentheoretisch)",
          back: "Zusammenhängender, ungerichteter, azyklischer Graph.",
          source: "07_graphs.pdf, Folie 13"
        }
      ],
      walkthroughs: [
        {
          id: "breitensuche",
          title: "Breitensuche von Knoten 1",
          source: "07_graphs.pdf, Folien 60-73",
          intro: "Knoten werden mit einer Queue verwaltet: besuchen, dann alle unbesuchten Nachbarn einreihen. Ergebnis: 1 3 6 8 7 4 5 2.",
          visual: {
            kind: "graph",
            nodes: [
              { id: "1", x: 20, y: 12 },
              { id: "3", x: 45, y: 12 },
              { id: "2", x: 28, y: 40 },
              { id: "8", x: 53, y: 40 },
              { id: "7", x: 78, y: 40 },
              { id: "4", x: 38, y: 58 },
              { id: "6", x: 20, y: 78 },
              { id: "5", x: 53, y: 78 }
            ],
            edges: [
              { from: "1", to: "3" },
              { from: "1", to: "6" },
              { from: "1", to: "8" },
              { from: "2", to: "8" },
              { from: "3", to: "7" },
              { from: "4", to: "5" },
              { from: "4", to: "6" },
              { from: "5", to: "6" },
              { from: "5", to: "7" },
              { from: "5", to: "8" }
            ]
          },
          steps: [
            {
              title: "Besuche 1",
              text: "Knoten 1 wird aus der Queue entfernt und besucht; die unbesuchten Nachbarn 3, 6 und 8 kommen in die Queue. Queue: 3, 6, 8.",
              values: [{ kind: "graph-node", node: "1", mark: "done" }],
              highlights: [
                { kind: "graph-node", node: "1", role: "active" },
                { kind: "graph-edge", from: "1", to: "3", role: "active" },
                { kind: "graph-edge", from: "1", to: "6", role: "active" },
                { kind: "graph-edge", from: "1", to: "8", role: "active" },
                { kind: "graph-node", node: "3", role: "compare" },
                { kind: "graph-node", node: "6", role: "compare" },
                { kind: "graph-node", node: "8", role: "compare" }
              ]
            },
            {
              title: "Besuche 3",
              text: "Der unbesuchte Nachbar 7 kommt in die Queue. Queue: 6, 8, 7.",
              values: [{ kind: "graph-node", node: "3", mark: "done" }],
              highlights: [
                { kind: "graph-node", node: "3", role: "active" },
                { kind: "graph-edge", from: "3", to: "7", role: "active" },
                { kind: "graph-node", node: "7", role: "compare" }
              ]
            },
            {
              title: "Besuche 6",
              text: "Die unbesuchten Nachbarn 4 und 5 kommen in die Queue. Queue: 8, 7, 4, 5.",
              values: [{ kind: "graph-node", node: "6", mark: "done" }],
              highlights: [
                { kind: "graph-node", node: "6", role: "active" },
                { kind: "graph-edge", from: "4", to: "6", role: "active" },
                { kind: "graph-edge", from: "5", to: "6", role: "active" },
                { kind: "graph-node", node: "4", role: "compare" },
                { kind: "graph-node", node: "5", role: "compare" }
              ]
            },
            {
              title: "Besuche 8",
              text: "Der unbesuchte Nachbar 2 kommt in die Queue. Queue: 7, 4, 5, 2.",
              values: [{ kind: "graph-node", node: "8", mark: "done" }],
              highlights: [
                { kind: "graph-node", node: "8", role: "active" },
                { kind: "graph-edge", from: "2", to: "8", role: "active" },
                { kind: "graph-node", node: "2", role: "compare" }
              ]
            },
            {
              title: "Besuche 7",
              text: "Alle Nachbarn von 7 sind bereits besucht oder in der Queue. Queue: 4, 5, 2.",
              values: [{ kind: "graph-node", node: "7", mark: "done" }],
              highlights: [{ kind: "graph-node", node: "7", role: "active" }]
            },
            {
              title: "Besuche 4",
              text: "Keine neuen Nachbarn. Queue: 5, 2.",
              values: [{ kind: "graph-node", node: "4", mark: "done" }],
              highlights: [{ kind: "graph-node", node: "4", role: "active" }]
            },
            {
              title: "Besuche 5",
              text: "Keine neuen Nachbarn. Queue: 2.",
              values: [{ kind: "graph-node", node: "5", mark: "done" }],
              highlights: [{ kind: "graph-node", node: "5", role: "active" }]
            },
            {
              title: "Besuche 2: fertig",
              text: "Die Queue ist leer — Besuchsreihenfolge: 1 3 6 8 7 4 5 2.",
              values: [{ kind: "graph-node", node: "2", mark: "done" }],
              highlights: [{ kind: "graph-node", node: "2", role: "active" }]
            }
          ]
        }
      ]
    },
    {
      id: "graphalgorithmen",
      title: "Graphalgorithmen",
      icon: "🧭",
      cards: [
        {
          title: "Topologische Ordnung",
          body: "Topologisches Sortieren wird verwendet, um die Knoten in einem gerichteten azyklischen Graphen (directed acyclic graph, DAG) zu ordnen. Topologische Ordnung: eine Ordnung der Knoten, bei der a vor b kommt, wenn eine gerichtete Kante von a nach b existiert. Anwendungsbeispiele: To-Do-Listen, sich anziehen. Es kann mehr als eine topologische Ordnung geben.",
          tag: "def",
          source: "08_graph-algorithms.pdf, Folien 4-5"
        },
        {
          title: "Topologisches Sortieren (rückwärts)",
          body: "Ein Nachfolger eines Knotens v ist ein Knoten w, sodass (v, w) eine Kante ist. Grundgedanke: Knoten ohne (unbesuchte) Nachfolger finden und rückwärts gehen. Algorithmus: Solange es unbesuchte Knoten gibt, finde einen noch nicht besuchten Knoten w ohne unbesuchte Nachfolger, markiere ihn als besucht und lege ihn auf einen Stack. Nimmt man die Knoten vom Stack ab, erhält man eine mögliche topologische Ordnung — im Folienbeispiel: 2 1 8 5 4 7 6 3.",
          tag: "wichtig",
          source: "08_graph-algorithms.pdf, Folien 6-22"
        },
        {
          title: "Topologisches Sortieren (vorwärts)",
          body: "Füge jeden Knoten ohne eingehende Kanten in eine Queue ein. Solange die Queue nicht leer ist: entferne Knoten w, markiere ihn als besucht; für jeden Knoten x mit einer Kante (w, x): entferne die Kante aus dem Graphen, und wenn x keine eingehenden Kanten mehr hat, füge x in die Queue ein. Wenn am Ende immer noch Kanten existieren, ist der Graph zyklisch.",
          tag: "wichtig",
          source: "08_graph-algorithms.pdf, Folien 23-46"
        },
        {
          title: "Minimaler Spannbaum (MST)",
          body: "Der Spannbaum mit den geringsten Gesamtkosten unter allen möglichen Spannbäumen. Wenn keine zwei Kanten denselben Kostenwert haben, gibt es genau einen MST; bei gleichen Kostenwerten kann es mehrere geben. Anwendungen: das kürzeste Autobahnnetz für eine Gruppe von Städten, die kürzeste Kabellänge zur Verbindung eines Computernetzwerks.",
          tag: "def",
          source: "08_graph-algorithms.pdf, Folie 48"
        },
        {
          title: "MST: wichtige Erkenntnis",
          body: "Unterteilt man die Knoten in zwei disjunkte Teilmengen A und B, dann muss die kostengünstigste Kante, die einen Knoten aus A mit einem Knoten aus B verbindet, Teil des MST sein.",
          tag: "satz",
          source: "08_graph-algorithms.pdf, Folie 49"
        },
        {
          title: "Prim-Jarnik-Algorithmus",
          body: "Eingabe: ein ungerichteter, gewichteter, zusammenhängender Graph G und ein Startknoten; Ausgabe: ein minimaler Spannbaum. Ablauf: Für jeden Knoten v: v.kosten = unendlich; Startknoten.kosten = 0. Solange es noch nicht finalisierte Knoten mit Kosten < unendlich gibt: finde den nicht finalisierten Knoten w mit den minimalen Kosten und markiere ihn als finalisiert; für jeden nicht finalisierten Nachbarknoten x von w: wenn kanten_kosten(w, x) < x.kosten, dann x.kosten = kanten_kosten(w, x) und x.Eltern = w.",
          tag: "wichtig",
          source: "08_graph-algorithms.pdf, Folie 50"
        },
        {
          title: "MST enthält nicht den kürzesten Weg",
          body: "Der minimale Spannbaum ist der Spannbaum mit den geringsten Gesamtkosten der Kanten — er enthält aber nicht unbedingt den Weg mit den geringsten Kosten zwischen zwei Knoten. Beispiel: Der kürzeste Weg von Hamburg nach Berlin verläuft entlang der einzigen direkten Kante zwischen beiden Städten; diese Kante ist nicht im minimalen Spannbaum.",
          tag: "wichtig",
          source: "08_graph-algorithms.pdf, Folie 99"
        },
        {
          title: "Dijkstra-Algorithmus",
          body: "Dijkstra löst das Kürzeste-Weg-Problem für gewichtete Graphen mit nicht-negativen Kantengewichten. Er findet vom Startknoten aus die kürzesten Wege zu allen erreichbaren Knoten. Grundidee: Schätzwerte für die kürzesten Wege und ihre Kosten merken und diese Schätzwerte während der Durchquerung schrittweise verfeinern.",
          tag: "wichtig",
          source: "08_graph-algorithms.pdf, Folien 102-103"
        }
      ],
      questions: [
        {
          question: "Was ist eine topologische Ordnung, und für welche Graphen ist sie definiert?",
          answer: "Eine Ordnung der Knoten eines gerichteten azyklischen Graphen (DAG), bei der a vor b kommt, wenn eine gerichtete Kante von a nach b existiert. Es kann mehr als eine topologische Ordnung geben.",
          source: "08_graph-algorithms.pdf, Folien 4-5"
        },
        {
          question: "Wie funktioniert der Rückwärts-Algorithmus zum topologischen Sortieren?",
          answer: "Wiederholt einen unbesuchten Knoten ohne unbesuchte Nachfolger finden, als besucht markieren und auf einen Stack legen. Das Abnehmen der Knoten vom Stack ergibt eine topologische Ordnung.",
          source: "08_graph-algorithms.pdf, Folien 6-22"
        },
        {
          question: "Wie erkennt der Vorwärts-Algorithmus zum topologischen Sortieren einen Zyklus?",
          answer: "Knoten ohne eingehende Kanten kommen in eine Queue; beim Abarbeiten werden die ausgehenden Kanten entfernt und neue Knoten ohne eingehende Kanten eingefügt. Existieren am Ende noch Kanten, ist der Graph zyklisch.",
          source: "08_graph-algorithms.pdf, Folien 23-46"
        },
        {
          question: "Was ist ein minimaler Spannbaum, und wann ist er eindeutig?",
          answer: "Der Spannbaum mit den geringsten Gesamtkosten aller Kanten. Er ist eindeutig, wenn keine zwei Kanten denselben Kostenwert haben; sonst kann es mehrere geben.",
          source: "08_graph-algorithms.pdf, Folie 48"
        },
        {
          question: "Auf welcher Erkenntnis beruht die MST-Konstruktion?",
          answer: "Teilt man die Knoten in zwei disjunkte Teilmengen A und B, muss die kostengünstigste Kante zwischen A und B Teil des MST sein.",
          source: "08_graph-algorithms.pdf, Folie 49"
        },
        {
          question: "Beschreiben Sie den Prim-Jarnik-Algorithmus.",
          answer: "Alle Knotenkosten auf unendlich setzen, Startknoten auf 0. Wiederholt den nicht finalisierten Knoten w mit minimalen Kosten finalisieren und für jeden nicht finalisierten Nachbarn x prüfen: sind die Kantenkosten (w, x) kleiner als x.kosten, werden x.kosten und x.Eltern aktualisiert. Ergebnis ist ein minimaler Spannbaum.",
          source: "08_graph-algorithms.pdf, Folie 50"
        },
        {
          question: "Enthält der minimale Spannbaum immer den kürzesten Weg zwischen zwei Knoten?",
          answer: "Nein. Der MST minimiert die Gesamtkosten aller Kanten, nicht die Kosten einzelner Verbindungen — z. B. liegt die direkte (kürzeste) Kante Hamburg-Berlin nicht im MST des Folienbeispiels.",
          source: "08_graph-algorithms.pdf, Folie 99"
        },
        {
          question: "Worin unterscheidet sich Dijkstra von Prim-Jarnik bei der Kostenaktualisierung?",
          answer: "Dijkstra aktualisiert mit den kumulierten Kosten über den aktuellen Knoten: kosten_via_w = w.kosten + kanten_kosten(w, x). Prim-Jarnik vergleicht nur die einzelne Kantenkosten für den MST.",
          source: "08_graph-algorithms.pdf, Folien 50, 103"
        }
      ],
      flashcards: [
        {
          front: "Topologische Ordnung",
          back: "Knotenordnung eines DAG: existiert Kante a → b, kommt a vor b.",
          source: "08_graph-algorithms.pdf, Folie 5"
        },
        {
          front: "Topologisch sortieren: 2 Verfahren",
          back: "Rückwärts: Knoten ohne unbesuchte Nachfolger auf Stack. Vorwärts: Knoten ohne eingehende Kanten in Queue, Kanten entfernen.",
          source: "08_graph-algorithms.pdf, Folien 6-46"
        },
        {
          front: "MST",
          back: "Spannbaum mit den geringsten Gesamtkosten; eindeutig, wenn alle Kantenkosten verschieden sind.",
          source: "08_graph-algorithms.pdf, Folie 48"
        },
        {
          front: "MST-Schnitteigenschaft",
          back: "Die günstigste Kante zwischen zwei disjunkten Knotenmengen A und B gehört zum MST.",
          source: "08_graph-algorithms.pdf, Folie 49"
        },
        {
          front: "Prim-Jarnik: Eingabe/Ausgabe",
          back: "Eingabe: ungerichteter, gewichteter, zusammenhängender Graph + Startknoten. Ausgabe: minimaler Spannbaum.",
          source: "08_graph-algorithms.pdf, Folie 50"
        },
        {
          front: "MST vs. kürzester Pfad",
          back: "Der MST enthält nicht unbedingt den kostengünstigsten Weg zwischen zwei Knoten.",
          source: "08_graph-algorithms.pdf, Folie 99"
        },
        {
          front: "Dijkstra",
          back: "Kürzeste Wege vom Startknoten zu allen erreichbaren Knoten in einem Graphen mit nicht-negativen Kantengewichten.",
          source: "08_graph-algorithms.pdf, Folien 102-103"
        }
      ],
      walkthroughs: [
        {
          id: "prim-jarnik",
          title: "Prim-Jarnik von Knoten 1",
          source: "08_graph-algorithms.pdf, Folien 50-85",
          intro: "Über jedem Knoten stehen seine aktuellen Kosten. In jedem Schritt wird der günstigste nicht finalisierte Knoten finalisiert; grüne Kanten gehören zum minimalen Spannbaum.",
          visual: {
            kind: "graph",
            nodes: [
              { id: "1", x: 20, y: 12, note: "0" },
              { id: "3", x: 45, y: 12, note: "∞" },
              { id: "2", x: 28, y: 40, note: "∞" },
              { id: "8", x: 53, y: 40, note: "∞" },
              { id: "7", x: 78, y: 40, note: "∞" },
              { id: "4", x: 38, y: 58, note: "∞" },
              { id: "6", x: 20, y: 78, note: "∞" },
              { id: "5", x: 53, y: 78, note: "∞" }
            ],
            edges: [
              { from: "1", to: "3", label: "20" },
              { from: "1", to: "6", label: "50" },
              { from: "1", to: "8", label: "39" },
              { from: "2", to: "8", label: "20" },
              { from: "3", to: "7", label: "33" },
              { from: "4", to: "5", label: "10" },
              { from: "4", to: "6", label: "27" },
              { from: "5", to: "6", label: "30" },
              { from: "5", to: "7", label: "33" },
              { from: "5", to: "8", label: "25" }
            ]
          },
          steps: [
            {
              title: "Initialisierung",
              text: "Alle Knotenkosten werden auf unendlich gesetzt, der Startknoten 1 auf 0.",
              highlights: [{ kind: "graph-node", node: "1", role: "active" }]
            },
            {
              title: "Finalisiere 1 (Kosten 0)",
              text: "Die Nachbarn von 1 werden aktualisiert: 3 auf 20, 8 auf 39, 6 auf 50 (Eltern jeweils 1).",
              values: [
                { kind: "graph-node", node: "1", mark: "done" },
                { kind: "graph-node", node: "3", note: "20" },
                { kind: "graph-node", node: "8", note: "39" },
                { kind: "graph-node", node: "6", note: "50" }
              ],
              highlights: [
                { kind: "graph-node", node: "1", role: "active" },
                { kind: "graph-node", node: "3", role: "compare" },
                { kind: "graph-node", node: "8", role: "compare" },
                { kind: "graph-node", node: "6", role: "compare" }
              ]
            },
            {
              title: "Finalisiere 3 (Kosten 20)",
              text: "3 hat die minimalen Kosten — die Kante (1, 3) kommt in den Spannbaum. Nachbar 7 wird auf 33 gesetzt.",
              values: [
                { kind: "graph-node", node: "3", mark: "done" },
                { kind: "graph-edge", from: "1", to: "3", mark: "done" },
                { kind: "graph-node", node: "7", note: "33" }
              ],
              highlights: [
                { kind: "graph-node", node: "3", role: "active" },
                { kind: "graph-node", node: "7", role: "compare" }
              ]
            },
            {
              title: "Finalisiere 7 (Kosten 33)",
              text: "Kante (3, 7) kommt in den Spannbaum. Nachbar 5 wird auf 33 gesetzt.",
              values: [
                { kind: "graph-node", node: "7", mark: "done" },
                { kind: "graph-edge", from: "3", to: "7", mark: "done" },
                { kind: "graph-node", node: "5", note: "33" }
              ],
              highlights: [
                { kind: "graph-node", node: "7", role: "active" },
                { kind: "graph-node", node: "5", role: "compare" }
              ]
            },
            {
              title: "Finalisiere 5 (Kosten 33)",
              text: "Kante (7, 5) kommt in den Spannbaum. Die Nachbarn von 5 werden verbessert: 8 auf 25, 4 auf 10, 6 auf 30.",
              values: [
                { kind: "graph-node", node: "5", mark: "done" },
                { kind: "graph-edge", from: "5", to: "7", mark: "done" },
                { kind: "graph-node", node: "8", note: "25" },
                { kind: "graph-node", node: "4", note: "10" },
                { kind: "graph-node", node: "6", note: "30" }
              ],
              highlights: [
                { kind: "graph-node", node: "5", role: "active" },
                { kind: "graph-node", node: "8", role: "compare" },
                { kind: "graph-node", node: "4", role: "compare" },
                { kind: "graph-node", node: "6", role: "compare" }
              ]
            },
            {
              title: "Finalisiere 4 (Kosten 10)",
              text: "Kante (5, 4) kommt in den Spannbaum. Nachbar 6 wird auf 27 verbessert.",
              values: [
                { kind: "graph-node", node: "4", mark: "done" },
                { kind: "graph-edge", from: "4", to: "5", mark: "done" },
                { kind: "graph-node", node: "6", note: "27" }
              ],
              highlights: [
                { kind: "graph-node", node: "4", role: "active" },
                { kind: "graph-node", node: "6", role: "compare" }
              ]
            },
            {
              title: "Finalisiere 8 (Kosten 25)",
              text: "Kante (5, 8) kommt in den Spannbaum. Nachbar 2 wird auf 20 gesetzt.",
              values: [
                { kind: "graph-node", node: "8", mark: "done" },
                { kind: "graph-edge", from: "5", to: "8", mark: "done" },
                { kind: "graph-node", node: "2", note: "20" }
              ],
              highlights: [
                { kind: "graph-node", node: "8", role: "active" },
                { kind: "graph-node", node: "2", role: "compare" }
              ]
            },
            {
              title: "Finalisiere 2 (Kosten 20)",
              text: "Kante (8, 2) kommt in den Spannbaum.",
              values: [
                { kind: "graph-node", node: "2", mark: "done" },
                { kind: "graph-edge", from: "2", to: "8", mark: "done" }
              ],
              highlights: [{ kind: "graph-node", node: "2", role: "active" }]
            },
            {
              title: "Finalisiere 6 (Kosten 27): fertig",
              text: "Kante (4, 6) kommt in den Spannbaum. Alle Knoten sind finalisiert — die grünen Kanten bilden den minimalen Spannbaum.",
              values: [
                { kind: "graph-node", node: "6", mark: "done" },
                { kind: "graph-edge", from: "4", to: "6", mark: "done" }
              ],
              highlights: [{ kind: "graph-node", node: "6", role: "active" }]
            }
          ]
        },
        {
          id: "dijkstra-kuerzeste-wege",
          title: "Dijkstra: kürzeste Wege ab 1",
          source: "08_graph-algorithms.pdf, Folien 103-139",
          intro: "Über jedem Knoten steht die aktuell beste bekannte Distanz vom Startknoten 1. Grün markierte Kanten bilden den endgültigen Vorgängerpfad.",
          visual: {
            kind: "graph",
            nodes: [
              { id: "1", x: 20, y: 12, note: "0" },
              { id: "3", x: 45, y: 12, note: "∞" },
              { id: "2", x: 28, y: 40, note: "∞" },
              { id: "8", x: 53, y: 40, note: "∞" },
              { id: "7", x: 78, y: 40, note: "∞" },
              { id: "4", x: 38, y: 58, note: "∞" },
              { id: "6", x: 20, y: 78, note: "∞" },
              { id: "5", x: 53, y: 78, note: "∞" }
            ],
            edges: [
              { from: "1", to: "3", label: "20" },
              { from: "1", to: "6", label: "50" },
              { from: "1", to: "8", label: "39" },
              { from: "2", to: "8", label: "20" },
              { from: "3", to: "7", label: "33" },
              { from: "4", to: "5", label: "10" },
              { from: "4", to: "6", label: "27" },
              { from: "5", to: "6", label: "30" },
              { from: "5", to: "7", label: "33" },
              { from: "5", to: "8", label: "25" }
            ]
          },
          steps: [
            {
              title: "Initialisierung",
              text: "Alle Distanzen stehen auf unendlich; der Startknoten 1 hat Distanz 0.",
              explanation: {
                action: "Distanzschätzungen vorbereiten.",
                rule: "Startknoten.kosten = 0, alle anderen Knoten.kosten = unendlich.",
                decision: "Der erste finale Knoten wird 1 sein."
              },
              highlights: [{ kind: "graph-node", node: "1", role: "active" }]
            },
            {
              title: "Finalisiere 1",
              text: "Von 1 aus entstehen die Schätzwerte 3 = 20, 8 = 39 und 6 = 50.",
              explanation: {
                action: "Nachbarn von 1 aktualisieren.",
                rule: "kosten_via_w = w.kosten + kanten_kosten(w, x).",
                decision: "20, 39 und 50 sind besser als unendlich."
              },
              values: [
                { kind: "graph-node", node: "1", mark: "done" },
                { kind: "graph-node", node: "3", note: "20" },
                { kind: "graph-node", node: "8", note: "39" },
                { kind: "graph-node", node: "6", note: "50" }
              ],
              highlights: [
                { kind: "graph-node", node: "1", role: "active" },
                { kind: "graph-edge", from: "1", to: "3", role: "active" },
                { kind: "graph-edge", from: "1", to: "8", role: "active" },
                { kind: "graph-edge", from: "1", to: "6", role: "active" },
                { kind: "graph-node", node: "3", role: "compare" },
                { kind: "graph-node", node: "8", role: "compare" },
                { kind: "graph-node", node: "6", role: "compare" }
              ]
            },
            {
              title: "Finalisiere 3",
              text: "3 hat mit 20 die kleinste offene Distanz. Über 3 erreicht man 7 mit 20 + 33 = 53.",
              explanation: {
                action: "Knoten 3 festlegen und Nachbar 7 prüfen.",
                rule: "Der kleinste nicht finalisierte Schätzwert wird endgültig.",
                decision: "53 ist besser als unendlich."
              },
              values: [
                { kind: "graph-node", node: "3", mark: "done" },
                { kind: "graph-edge", from: "1", to: "3", mark: "done" },
                { kind: "graph-node", node: "7", note: "53" }
              ],
              highlights: [
                { kind: "graph-node", node: "3", role: "active" },
                { kind: "graph-edge", from: "1", to: "3", role: "done" },
                { kind: "graph-node", node: "7", role: "compare" },
                { kind: "graph-edge", from: "3", to: "7", role: "active" }
              ]
            },
            {
              title: "Finalisiere 8",
              text: "8 hat mit 39 die kleinste offene Distanz. Über 8 entstehen 2 = 59 und 5 = 64.",
              explanation: {
                action: "Knoten 8 festlegen und seine offenen Nachbarn aktualisieren.",
                rule: "39 + 20 = 59, 39 + 25 = 64.",
                decision: "Beide Werte verbessern unendlich."
              },
              values: [
                { kind: "graph-node", node: "8", mark: "done" },
                { kind: "graph-edge", from: "1", to: "8", mark: "done" },
                { kind: "graph-node", node: "2", note: "59" },
                { kind: "graph-node", node: "5", note: "64" }
              ],
              highlights: [
                { kind: "graph-node", node: "8", role: "active" },
                { kind: "graph-edge", from: "1", to: "8", role: "done" },
                { kind: "graph-node", node: "2", role: "compare" },
                { kind: "graph-node", node: "5", role: "compare" },
                { kind: "graph-edge", from: "2", to: "8", role: "active" },
                { kind: "graph-edge", from: "5", to: "8", role: "active" }
              ]
            },
            {
              title: "Finalisiere 6",
              text: "6 hat mit 50 die kleinste offene Distanz. Über 6 wird 4 auf 77 gesetzt; 5 bleibt bei 64.",
              explanation: {
                action: "Nachbarn von 6 prüfen.",
                rule: "Nur kleinere kumulierte Kosten ersetzen alte Schätzwerte.",
                decision: "50 + 27 = 77 verbessert 4; 50 + 30 = 80 verbessert 5 nicht."
              },
              values: [
                { kind: "graph-node", node: "6", mark: "done" },
                { kind: "graph-edge", from: "1", to: "6", mark: "done" },
                { kind: "graph-node", node: "4", note: "77" }
              ],
              highlights: [
                { kind: "graph-node", node: "6", role: "active" },
                { kind: "graph-edge", from: "1", to: "6", role: "done" },
                { kind: "graph-node", node: "4", role: "compare" },
                { kind: "graph-node", node: "5", role: "compare" },
                { kind: "graph-edge", from: "4", to: "6", role: "active" },
                { kind: "graph-edge", from: "5", to: "6", role: "active" }
              ]
            },
            {
              title: "Finalisiere 7",
              text: "7 hat mit 53 die kleinste offene Distanz. Über 7 ergäbe sich 5 = 86, also bleibt 5 bei 64.",
              explanation: {
                action: "Nachbar 5 über 7 prüfen.",
                rule: "Nur echte Verbesserungen werden übernommen.",
                decision: "53 + 33 = 86 ist schlechter als 64."
              },
              values: [
                { kind: "graph-node", node: "7", mark: "done" },
                { kind: "graph-edge", from: "3", to: "7", mark: "done" }
              ],
              highlights: [
                { kind: "graph-node", node: "7", role: "active" },
                { kind: "graph-edge", from: "3", to: "7", role: "done" },
                { kind: "graph-node", node: "5", role: "compare" },
                { kind: "graph-edge", from: "5", to: "7", role: "active" }
              ]
            },
            {
              title: "Finalisiere 2",
              text: "2 hat mit 59 die kleinste offene Distanz. Es entstehen keine besseren Schätzwerte.",
              explanation: {
                action: "Knoten 2 festlegen.",
                rule: "Finalisierte Knoten werden nicht erneut verbessert.",
                decision: "Die einzige offene relevante Verbindung führt zurück zu 8."
              },
              values: [
                { kind: "graph-node", node: "2", mark: "done" },
                { kind: "graph-edge", from: "2", to: "8", mark: "done" }
              ],
              highlights: [
                { kind: "graph-node", node: "2", role: "active" },
                { kind: "graph-edge", from: "2", to: "8", role: "done" }
              ]
            },
            {
              title: "Finalisiere 5",
              text: "5 hat mit 64 die kleinste offene Distanz. Über 5 verbessert sich 4 von 77 auf 74.",
              explanation: {
                action: "Nachbarn von 5 prüfen.",
                rule: "64 + 10 = 74 ersetzt die bisherige 77.",
                decision: "Der Vorgänger von 4 wird 5."
              },
              values: [
                { kind: "graph-node", node: "5", mark: "done" },
                { kind: "graph-edge", from: "5", to: "8", mark: "done" },
                { kind: "graph-node", node: "4", note: "74" }
              ],
              highlights: [
                { kind: "graph-node", node: "5", role: "active" },
                { kind: "graph-edge", from: "5", to: "8", role: "done" },
                { kind: "graph-node", node: "4", role: "target" },
                { kind: "graph-edge", from: "4", to: "5", role: "active" }
              ]
            },
            {
              title: "Finalisiere 4: fertig",
              text: "4 wird mit Distanz 74 finalisiert. Alle erreichbaren Knoten haben nun ihre kürzeste Distanz ab 1.",
              explanation: {
                action: "Letzten offenen Knoten festlegen.",
                rule: "Wenn kein nicht finalisierter Knoten mit endlicher Distanz übrig ist, endet Dijkstra.",
                decision: "Enddistanzen: 1=0, 3=20, 8=39, 6=50, 7=53, 2=59, 5=64, 4=74."
              },
              values: [
                { kind: "graph-node", node: "4", mark: "done" },
                { kind: "graph-edge", from: "4", to: "5", mark: "done" }
              ],
              highlights: [
                { kind: "graph-node", node: "4", role: "active" },
                { kind: "graph-edge", from: "4", to: "5", role: "done" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "entwurfsverfahren",
      title: "Entwurfsverfahren",
      icon: "🧩",
      cards: [
        {
          title: "Vier Entwurfsverfahren für Algorithmen",
          body: "<b>Brute-Force:</b> alle Möglichkeiten systematisch prüfen. <b>Backtracking:</b> Irrwege erkennen, zurückgehen & neu probieren. <b>Greedy:</b> immer die lokal beste Wahl treffen. <b>Dynamische Programmierung:</b> Ergebnisse speichern und wiederverwenden.",
          tag: "wichtig",
          source: "09_algorithm-patterns.pdf, Folien 2, 70"
        },
        {
          title: "Brute-Force (erschöpfende Suche)",
          body: "Auch: Brute-Force-Suche (brute force = rohe Gewalt), exhaustive search. Ziel: eine korrekte Lösung finden. Einfachster Ansatz: alle möglichen Lösungen durchprobieren, bis die richtige gefunden ist — sehr aufwendig, manchmal aber das einzige Mittel der Wahl. Anwendungen: „Knacken“ von Passwörtern (Security), Spieltheorie (z. B. Computer-Schach).",
          tag: "def",
          source: "09_algorithm-patterns.pdf, Folie 4"
        },
        {
          title: "Türme von Hanoi",
          body: "Gegeben: 3 Pfosten mit n unterschiedlich großen Scheiben; alle Scheiben liegen nach Größe geordnet als Turm auf Pfosten 1; Ziel: alle n Scheiben nach Pfosten 3 legen. Restriktionen: immer nur die oberste Scheibe eines Pfostens nehmen; niemals eine größere auf eine kleinere Scheibe legen. Rekursives Muster für h Scheiben (von, nach, über): 1. (h−1) Scheiben (von, über, nach), 2. von → nach, 3. (h−1) Scheiben (über, nach, von). Zeitkomplexität O(2ⁿ) — zwei Möglichkeiten für jede Platte; zusätzlicher Platz O(n) für die Funktionsaufrufe (Stack).",
          tag: "beispiel",
          source: "09_algorithm-patterns.pdf, Folien 5-7"
        },
        {
          title: "Backtracking",
          body: "Prinzip: Versuch, eine Teillösung eines Problems systematisch zu einer Gesamtlösung auszubauen. Ist ein weiterer Ausbau nicht mehr möglich („Sackgasse“), werden eine oder mehrere der letzten Teilschritte rückgängig gemacht, und die reduzierte Teillösung wird auf einem anderen Weg ausgebaut — bis eine Lösung gefunden wird oder man erkennt, dass keine existiert. Bekannte Probleme: Springerproblem, Acht-Damenproblem, Labyrinthsuche.",
          tag: "def",
          source: "09_algorithm-patterns.pdf, Folie 8"
        },
        {
          title: "Damenproblem",
          body: "Platziere n Damen auf einem n×n-Schachbrett, sodass sie sich gegenseitig nicht bedrohen (Standard: n = 8). Schema: setzeDamen(n, Spielfeld) gibt bei n = 0 die Lösung aus; sonst wird die Dame auf alle gültigen (freien, nicht bedrohten) Felder gesetzt und rekursiv setzeDamen(n−1, …) aufgerufen.",
          tag: "beispiel",
          source: "09_algorithm-patterns.pdf, Folie 9"
        },
        {
          title: "Kombinatorische Optimierungsprobleme",
          body: "<b>Problem des Handlungsreisenden (TSP):</b> Wähle eine Reihenfolge für den Besuch mehrerer Orte, sodass keine Station außer der ersten mehr als einmal besucht wird, die gesamte Reisestrecke möglichst kurz und die erste Station gleich der letzten ist. <b>Rucksackproblem:</b> Aus einer Menge von Objekten mit Gewicht und Nutzwert soll eine Teilmenge gewählt werden, deren Gesamtgewicht eine Gewichtsschranke nicht überschreitet und deren Nutzwert maximal ist.",
          tag: "def",
          source: "09_algorithm-patterns.pdf, Folie 10"
        },
        {
          title: "Verbesserungen der erschöpfenden Suche",
          body: "<b>Suchraum begrenzen („Pruning“):</b> Branch and bound — alle Äste des Suchbaums abschneiden, für die sicher ist, dass dort keine optimale Lösung zu finden ist. <b>Approximation mittels Greedy:</b> dem Optimum annähern, z. B. Objekte absteigend nach Nutzen/Kosten-Faktor sortieren. <b>Dynamische Programmierung:</b> ganzzahlige Gewichte gegen Objekte in einer Matrix abtragen; jede Zelle enthält den maximalen Nutzwert für ein Teilproblem.",
          tag: "wichtig",
          source: "09_algorithm-patterns.pdf, Folie 11"
        },
        {
          title: "Rucksackproblem (Definition)",
          body: "Gegeben ein Rucksack mit maximaler Kapazität cmax und eine Menge S aus n Gegenständen; jedes Element i hat ein Gewicht wi und einen Nutzwert bi (alle Werte ganzzahlig). Frage: Wie wird der Rucksack gepackt, um den maximalen Gesamtwert zu erreichen? Folienbeispiel: Elemente 1-5 mit Gewichten 1, 2, 2, 5, 6 und Nutzwerten 3, 6, 3, 4, 6.",
          tag: "def",
          source: "09_algorithm-patterns.pdf, Folie 13"
        },
        {
          title: "Rucksack: Greedy-Strategie",
          body: "In jeder Phase das tun, was „lokal“ am besten ist — bezogen auf den maximalen Nutzwert bi [€], das minimale Gewicht wi [kg] oder den maximalen Profit pi [€/kg]. Beispiel mit cmax = 12: nach maximalem Nutzwert Elemente 2, 5, 1, 3 (Wert 18, Gewicht 11); nach minimalem Gewicht Elemente 1, 2, 3, 4 (Wert 16, Gewicht 10); nach maximalem Profit Elemente 1, 2, 3, 5 (Wert 18, Gewicht 11). <b>Keine Garantie, dass die optimale Konfiguration erreicht wird</b> — die Lösung hängt vom Entscheidungskriterium ab; oft findet man schnell „gute“ Konfigurationen, meist wird nur ein lokales Optimum erreicht.",
          tag: "wichtig",
          source: "09_algorithm-patterns.pdf, Folien 14-18"
        },
        {
          title: "Dynamische Programmierung",
          body: "Eingeführt von Richard Bellman (1940er) — „dynamische Programmierung“ ist nur der Name, nicht dynamisch. Prinzip: das wiederholte Berechnen bereits bekannter Teillösungen vermeiden; mit der Lösung kleiner Teilprobleme beginnen und diese iterativ auf immer größere Teilprobleme ausweiten. Gefundene Teillösungen muss man sich mindestens so lange merken, wie sie noch benötigt werden. Häufiges Einsatzgebiet: Optimierungsprobleme; auch nützlich für Fibonacci-Zahlen. Weitere Probleme: n-te Fibonacci-Zahl, Sequenz-Alignment, Rucksackproblem mit ganzzahligen Gewichten.",
          tag: "def",
          source: "09_algorithm-patterns.pdf, Folien 19, 69"
        },
        {
          title: "Fibonacci-Zahlen",
          body: "Unendliche Folge natürlicher Zahlen: Jede Zahl ist die Summe der beiden Vorgänger — 0, 1, 1, 2, 3, 5, 8, 13, 21, … Definition: fib(0) = 0, fib(1) = 1, fib(n) = fib(n−1) + fib(n−2) für n > 1. Beschreibt u. a. Wachstumsvorgänge in der Natur (Kaninchen-Beispiel).",
          tag: "def",
          source: "09_algorithm-patterns.pdf, Folie 20"
        },
        {
          title: "Fibonacci: Rekursion vs. dynamische Programmierung",
          body: "Der rekursive Algorithmus berechnet sich überschneidende Teilprobleme mehrfach: fib(3) braucht 5 Funktionsaufrufe, fib(5) 15, fib(10) schon 177. Mit dynamischer Programmierung wird jedes Teilproblem nur einmal gelöst: iterativ mit Array (Teilergebnisse speichern, T(n) = O(n), zusätzlicher Speicher O(n)) oder speicheroptimiert mit nur zwei Variablen für die letzten beiden Werte.",
          tag: "wichtig",
          source: "09_algorithm-patterns.pdf, Folien 21-23"
        },
        {
          title: "Rucksack: dynamische Programmierung",
          body: "Rekursive Formel für Teilprobleme: S_benefit[0, w] = 0 für alle w <= cmax. S_benefit[k, w] = S_benefit[k−1, w], falls wk > w (Element k kann nicht Teil der Lösung sein); sonst max{ S_benefit[k−1, w], S_benefit[k−1, w−wk] + bk }. Die beste Teilmenge von Sk mit Gesamtgewicht w ist also entweder die beste Teilmenge von Sk−1 mit Gewicht w, oder die beste Teilmenge von Sk−1 mit Gewicht w−wk plus Element k. Laufzeit: O(n·cmax). Der Algorithmus liefert nur den höchstmöglichen Wert (S_benefit[n, cmax]); um die Gegenstände zu ermitteln, wird die Tabelle rückwärts durchlaufen: Ist S_benefit[i, w] ≠ S_benefit[i−1, w], gehört Element i in den Rucksack (w = w − wk), sonst nur i = i − 1.",
          tag: "formel",
          source: "09_algorithm-patterns.pdf, Folien 24-28, 56"
        },
        {
          title: "Edit-Distanz",
          body: "Gegeben zwei Strings s1 und s2: Der Editabstand ist die minimale Anzahl der notwendigen Edit-Operationen (Einfügen, Löschen oder Ersetzen eines Zeichens), um s1 in s2 zu konvertieren. Editabstandsfunktion d(i, j): d(0, 0) = 0, d(i, 0) = i (Löschoperationen), d(0, j) = j (Einfügeoperationen); d(i, j) = min{ d(i, j−1) + 1, d(i−1, j) + 1, d(i−1, j−1) + t(i, j) } mit t(i, j) = 1, wenn s1,i ≠ s2,j, sonst 0. Beispiel: d(HASE, RASEN) = 2.",
          tag: "formel",
          source: "09_algorithm-patterns.pdf, Folien 63-64"
        },
        {
          title: "Edit-Distanz mit dynamischer Programmierung",
          body: "Der rein rekursive Ansatz führt zu zahlreichen Mehrfachberechnungen der Teillösungen — besser: dynamische Programmierung mit einer Abstandsmatrix: Teillösungen speichern, mit festen Werten d(i, 0) und d(0, j) initialisieren, dann d(i, j) sukzessive mit steigenden i, j berechnen. Beispiel RASEN/HASE: Edit-Abstand 2, String-Ähnlichkeit 1 − 2/max(5; 4) = 0,6. <b>Traceback:</b> die Matrix rückwärts durchlaufen — diagonal = Match/Mismatch, vertikal = Einfügung, horizontal = Löschung.",
          tag: "wichtig",
          source: "09_algorithm-patterns.pdf, Folien 65-68"
        }
      ],
      questions: [
        {
          question: "Nennen Sie die vier behandelten Entwurfsverfahren mit ihrem Grundprinzip.",
          answer: "Brute-Force: alle Möglichkeiten systematisch prüfen. Backtracking: Irrwege erkennen, zurückgehen und neu probieren. Greedy: immer die lokal beste Wahl treffen. Dynamische Programmierung: Ergebnisse speichern und wiederverwenden.",
          source: "09_algorithm-patterns.pdf, Folie 2"
        },
        {
          question: "Welche Zeit- und Platzkomplexität hat die rekursive Lösung der Türme von Hanoi?",
          answer: "Zeitkomplexität O(2ⁿ) — zwei Möglichkeiten für jede Platte (2·2·…·2, n-mal). Zusätzlicher Platz O(n) für die Funktionsaufrufe auf dem Stack.",
          source: "09_algorithm-patterns.pdf, Folie 7"
        },
        {
          question: "Wie funktioniert das Backtracking-Verfahren?",
          answer: "Eine Teillösung wird systematisch zur Gesamtlösung ausgebaut. In einer Sackgasse werden die letzten Teilschritte rückgängig gemacht und die reduzierte Teillösung auf einem anderen Weg ausgebaut — bis eine Lösung gefunden wird oder feststeht, dass keine existiert.",
          source: "09_algorithm-patterns.pdf, Folie 8"
        },
        {
          question: "Warum liefert die Greedy-Strategie beim Rucksackproblem nicht unbedingt das Optimum?",
          answer: "Sie trifft in jeder Phase nur die lokal beste Wahl (nach Nutzwert, Gewicht oder Profit) — die Lösung hängt vom Entscheidungskriterium ab, und meist wird nur ein lokales Optimum erreicht. Dafür findet man oft schnell gute Konfigurationen.",
          source: "09_algorithm-patterns.pdf, Folie 18"
        },
        {
          question: "Was ist die Grundidee der dynamischen Programmierung?",
          answer: "Das wiederholte Berechnen bekannter Teillösungen vermeiden: mit kleinen Teilproblemen beginnen, die Lösungen speichern (so lange sie benötigt werden) und iterativ auf größere Teilprobleme ausweiten.",
          source: "09_algorithm-patterns.pdf, Folie 19"
        },
        {
          question: "Warum ist die naive rekursive Fibonacci-Berechnung ineffizient?",
          answer: "Sich überschneidende Teilprobleme werden mehrfach berechnet — fib(5) braucht bereits 15 Funktionsaufrufe, fib(10) 177. Mit dynamischer Programmierung wird jedes Teilproblem nur einmal gelöst (O(n)).",
          source: "09_algorithm-patterns.pdf, Folien 21-23"
        },
        {
          question: "Wie lautet die rekursive Formel der dynamischen Programmierung für das Rucksackproblem?",
          answer: "S_benefit[0, w] = 0 für alle w <= cmax. S_benefit[k, w] = S_benefit[k−1, w], falls wk > w; sonst max{ S_benefit[k−1, w], S_benefit[k−1, w−wk] + bk }. Laufzeit O(n·cmax).",
          source: "09_algorithm-patterns.pdf, Folien 24-25, 56"
        },
        {
          question: "Wie ermittelt man nach der DP-Berechnung, welche Gegenstände im Rucksack sind?",
          answer: "Rückwärts durch die Tabelle: Mit i = n und w = cmax prüfen, ob S_benefit[i, w] ≠ S_benefit[i−1, w] — dann gehört Element i in den Rucksack und w wird um wk verringert; andernfalls nur i verringern.",
          source: "09_algorithm-patterns.pdf, Folie 56"
        },
        {
          question: "Was ist der Editabstand zweier Strings, und welche Operationen sind erlaubt?",
          answer: "Die minimale Anzahl der Edit-Operationen (Einfügen, Löschen, Ersetzen eines Zeichens), um s1 in s2 zu konvertieren. Beispiel: d(HASE, RASEN) = 2.",
          source: "09_algorithm-patterns.pdf, Folie 63"
        },
        {
          question: "Wofür stehen die Richtungen beim Traceback in der Editier-Matrix?",
          answer: "Diagonal: Match/Mismatch. Vertikal: Einfügung. Horizontal: Löschung.",
          source: "09_algorithm-patterns.pdf, Folie 67"
        }
      ],
      flashcards: [
        {
          front: "Brute-Force",
          back: "Alle möglichen Lösungen durchprobieren, bis die richtige gefunden ist; aufwendig, manchmal einziges Mittel.",
          source: "09_algorithm-patterns.pdf, Folie 4"
        },
        {
          front: "Backtracking",
          back: "Teillösung ausbauen; in der Sackgasse letzte Schritte rückgängig machen und anders weiterprobieren.",
          source: "09_algorithm-patterns.pdf, Folie 8"
        },
        {
          front: "Greedy",
          back: "In jeder Phase die lokal beste Wahl; keine Garantie fürs globale Optimum.",
          source: "09_algorithm-patterns.pdf, Folien 14-18"
        },
        {
          front: "Dynamische Programmierung",
          back: "Teillösungen speichern und wiederverwenden; von kleinen zu großen Teilproblemen (Bellman, 1940er).",
          source: "09_algorithm-patterns.pdf, Folie 19"
        },
        {
          front: "Türme von Hanoi: Komplexität",
          back: "Zeit O(2ⁿ), zusätzlicher Platz O(n) (Aufruf-Stack).",
          source: "09_algorithm-patterns.pdf, Folie 7"
        },
        {
          front: "Fibonacci-Folge",
          back: "fib(0) = 0, fib(1) = 1, fib(n) = fib(n−1) + fib(n−2): 0, 1, 1, 2, 3, 5, 8, 13, 21, …",
          source: "09_algorithm-patterns.pdf, Folie 20"
        },
        {
          front: "Rucksack-DP: Formel",
          back: "S[k,w] = S[k−1,w] falls wk > w, sonst max{S[k−1,w], S[k−1,w−wk] + bk}; Laufzeit O(n·cmax).",
          source: "09_algorithm-patterns.pdf, Folien 24-25, 56"
        },
        {
          front: "Edit-Distanz: Rekursion",
          back: "d(i,j) = min{d(i,j−1)+1, d(i−1,j)+1, d(i−1,j−1)+t(i,j)}, t = 0 bei gleichen Zeichen, sonst 1.",
          source: "09_algorithm-patterns.pdf, Folie 64"
        },
        {
          front: "Traceback-Richtungen",
          back: "Diagonal: Match/Mismatch. Vertikal: Einfügung. Horizontal: Löschung.",
          source: "09_algorithm-patterns.pdf, Folie 67"
        }
      ],
      walkthroughs: [
        {
          id: "rucksack-dp",
          title: "Rucksack: DP-Tabelle",
          source: "09_algorithm-patterns.pdf, Folien 27-30",
          intro: "S_benefit[k, w] für die Elemente 1-5 (Gewichte 1, 2, 2, 5, 6; Nutzwerte 3, 6, 3, 4, 6) und cmax = 12. Zeilen = Elemente 0-5, Spalten = Gewicht 0-12.",
          visual: {
            kind: "matrix",
            matrices: [
              {
                id: "dp",
                label: "S_benefit[k, w]",
                layout: "table",
                cornerLabel: "k/w",
                rowLabels: [0, 1, 2, 3, 4, 5],
                colLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                values: [
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [null, null, null, null, null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null, null, null, null, null]
                ]
              }
            ]
          },
          steps: [
            {
              title: "Basisfall k = 0",
              text: "Ohne Elemente ist der Nutzwert für jedes Gewicht 0: S_benefit[0, w] = 0 für alle w <= cmax.",
              explanation: {
                action: "Initialisiere die Zeile k = 0.",
                rule: "Ohne verfügbare Elemente ist der erreichbare Nutzen für jedes Gewicht 0.",
                decision: "Alle Spalten der ersten Zeile bleiben 0."
              },
              highlights: [{ kind: "matrix-row", matrix: "dp", row: 0, role: "active" }]
            },
            {
              title: "Element 1 (w = 1, b = 3)",
              text: "Ab Gewicht 1 passt Element 1 in den Rucksack: der Nutzwert ist überall 3.",
              explanation: {
                action: "Berechne die Zeile für Element 1.",
                rule: "Wenn wk <= w gilt: max(S[k-1,w], S[k-1,w-wk] + bk).",
                decision: "Ab w = 1 ist Mitnehmen besser: 0 + 3 = 3."
              },
              values: [
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 0, value: 0 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 1, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 2, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 3, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 4, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 5, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 6, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 7, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 8, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 9, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 10, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 11, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 1, col: 12, value: 3 }
              ],
              highlights: [{ kind: "matrix-row", matrix: "dp", row: 1, role: "active" }]
            },
            {
              title: "Element 2 (w = 2, b = 6)",
              text: "Ab Gewicht 2 lohnt Element 2 (Wert 6), ab Gewicht 3 beide Elemente zusammen (Wert 9).",
              explanation: {
                action: "Berechne die Zeile für Element 2.",
                rule: "Pro Spalte wird zwischen Weglassen und Mitnehmen entschieden.",
                decision: "Bei w = 2 liefert Element 2 den Wert 6; ab w = 3 kommt Element 1 dazu."
              },
              values: [
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 0, value: 0 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 1, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 2, value: 6 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 3, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 4, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 5, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 6, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 7, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 8, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 9, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 10, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 11, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 2, col: 12, value: 9 }
              ],
              highlights: [{ kind: "matrix-row", matrix: "dp", row: 2, role: "active" }]
            },
            {
              title: "Element 3 (w = 2, b = 3)",
              text: "Ab Gewicht 5 passen die Elemente 1-3 zusammen: Wert 12.",
              explanation: {
                action: "Berechne die Zeile für Element 3.",
                rule: "Eine Zelle übernimmt entweder den alten Wert oder ergänzt Element 3.",
                decision: "Ab w = 5 verbessert die Kombination der Elemente 1-3 den Wert auf 12."
              },
              values: [
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 0, value: 0 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 1, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 2, value: 6 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 3, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 4, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 5, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 6, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 7, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 8, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 9, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 10, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 11, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 3, col: 12, value: 12 }
              ],
              highlights: [{ kind: "matrix-row", matrix: "dp", row: 3, role: "active" }]
            },
            {
              title: "Element 4 (w = 5, b = 4)",
              text: "Ab Gewicht 8 verbessert Element 4 die Lösung (13), ab Gewicht 10 sogar auf 16.",
              explanation: {
                action: "Berechne die Zeile für Element 4.",
                rule: "Element 4 zählt nur, wenn seine Gewichtsbeschränkung in der Spalte erfüllt ist.",
                decision: "Ab w = 8 verbessert Mitnehmen den Wert, sonst bleibt die vorherige Zeile maßgeblich."
              },
              values: [
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 0, value: 0 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 1, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 2, value: 6 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 3, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 4, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 5, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 6, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 7, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 8, value: 13 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 9, value: 13 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 10, value: 16 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 11, value: 16 },
                { kind: "matrix-cell", matrix: "dp", row: 4, col: 12, value: 16 }
              ],
              highlights: [{ kind: "matrix-row", matrix: "dp", row: 4, role: "active" }]
            },
            {
              title: "Element 5 (w = 6, b = 6)",
              text: "Die letzte Zeile liefert das Ergebnis: S_benefit[5, 12] = 18 ist der höchstmögliche Wert im Rucksack.",
              explanation: {
                action: "Berechne die letzte Zeile und lies die Zielzelle ab.",
                rule: "Die optimale Lösung für cmax steht in S_benefit[n, cmax].",
                decision: "Für 5 Elemente und Kapazität 12 ergibt sich der beste Nutzen 18."
              },
              values: [
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 0, value: 0 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 1, value: 3 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 2, value: 6 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 3, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 4, value: 9 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 5, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 6, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 7, value: 12 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 8, value: 13 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 9, value: 15 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 10, value: 16 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 11, value: 18 },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 12, value: 18 }
              ],
              highlights: [
                { kind: "matrix-row", matrix: "dp", row: 5, role: "active" },
                { kind: "matrix-cell", matrix: "dp", row: 5, col: 12, role: "target" }
              ]
            }
          ]
        }
      ]
    }
  ]
} satisfies RawSubject;

export default aud;
