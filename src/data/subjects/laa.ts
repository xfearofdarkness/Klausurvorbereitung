import type { RawSubject } from "../../types/content";

const laa = {
  "id": "laa",
  "title": "LAA",
  "subtitle": "Lineare Algebra und Analysis",
  "icon": "📐",
  "features": {
    "math": true
  },
  "topics": [
    {
      "id": "funktionen",
      "title": "Funktionen & Polynome",
      "icon": "📈",
      "cards": [
        {
          "t": "Beschränkte Funktionen",
          "b": "Eine Funktion \\(f: D \\to \\mathbb{R}\\) heißt beschränkt, wenn es Zahlen \\(M, N \\in \\mathbb{R}\\) gibt, sodass für alle \\(x \\in D\\) gilt: \\[M \\le f(x) \\le N\\] \\(M\\) heißt untere Schranke, \\(N\\) obere Schranke von \\(f\\). Gibt es solche \\(M\\) und \\(N\\) nicht, heißt \\(f\\) unbeschränkt.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 8"
        },
        {
          "t": "Beschränktheit hängt vom Definitionsbereich ab",
          "b": "\\(f_1(x) := \\text{konst}\\) ist beschränkt mit \\(M = N = \\text{konst}\\). \\(f_2: \\mathbb{R} \\to \\mathbb{R},\\; f_2(x) := x\\) ist unbeschränkt. Auf dem Definitionsbereich \\(D := [0, \\pi]\\) ist \\(f_2\\) jedoch beschränkt mit unterer Schranke \\(M = 0\\) und oberer Schranke \\(N = \\pi\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 9"
        },
        {
          "t": "Monotone Funktionen",
          "b": "\\(f: D \\to \\mathbb{R}\\) heißt monoton wachsend, wenn für alle \\(x_1, x_2 \\in D\\) mit \\(x_1 < x_2\\) gilt: \\(f(x_1) \\le f(x_2)\\). Sie heißt monoton fallend, wenn \\(f(x_1) \\ge f(x_2)\\) gilt. Gilt statt \\(\\le\\) bzw. \\(\\ge\\) sogar \\(<\\) bzw. \\(>\\), heißt \\(f\\) streng monoton wachsend bzw. streng monoton fallend. Beispiel: \\(f(x) := x^2\\) ist auf \\(]-\\infty, 0]\\) streng monoton fallend und auf \\([0, \\infty[\\) streng monoton wachsend.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 10-11"
        },
        {
          "t": "Gerade und ungerade Funktionen",
          "b": "\\(f: D \\to \\mathbb{R}\\) heißt gerade, wenn für alle \\(x \\in D\\) auch \\(-x \\in D\\) ist und \\(f(-x) = f(x)\\) gilt. \\(f\\) heißt ungerade, wenn für alle \\(x \\in D\\) auch \\(-x \\in D\\) ist und \\(f(-x) = -f(x)\\) gilt. Beispiel: \\(f(x) := x^2\\) ist gerade, \\(g(x) := x\\) ist ungerade.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 12-13"
        },
        {
          "t": "Periodische Funktionen",
          "b": "\\(f: \\mathbb{R} \\to \\mathbb{R}\\) heißt periodisch, wenn es eine Zahl \\(p \\in \\mathbb{R}^+ \\setminus \\{0\\}\\) gibt, sodass für alle \\(x \\in \\mathbb{R}\\) gilt: \\(f(x + p) = f(x)\\). Die kleinste dieser Zahlen \\(p\\) heißt Periode von \\(f\\). Beispiel: \\(\\sin x\\) und \\(\\cos x\\) sind periodisch mit der Periode \\(2\\pi\\), kurz \\(2\\pi\\)-periodisch.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 14-15"
        },
        {
          "t": "Polynome",
          "b": "Polynome sind Funktionen der Form \\[p(x) := \\sum_{k=0}^{n} a_k x^k = a_0 + a_1 x + a_2 x^2 + \\dots + a_n x^n\\] Die Koeffizienten \\(a_k\\) sind reelle Zahlen, \\(x\\) ist eine reelle Variable.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 17"
        },
        {
          "t": "Monome und Grad",
          "b": "Als Bausteine von Polynomen können die so genannten Monome \\(x^k\\) betrachtet werden. Der höchste auftretende Exponent (also \\(n\\), falls \\(a_n \\ne 0\\)) wird als der Grad von \\(p\\) bezeichnet.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 18"
        },
        {
          "t": "Rationale Funktionen",
          "b": "Der Bruch zweier Polynome \\(f(z) := \\frac{p(z)}{q(z)}\\) mit \\(q(z) \\ne 0\\) heißt rationale Funktion.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 21"
        },
        {
          "t": "Nullstellen und Pole rationaler Funktionen",
          "b": "Die Nullstellen von \\(f\\) sind identisch mit denen des Zählerpolynoms \\(p\\). An den Nullstellen des Nennerpolynoms \\(q\\) ist \\(f\\) nicht definiert — solche Punkte heißen Pole. Da sich Polynome ähnlich wie reelle Zahlen dividieren lassen (Polynomdivision), kann die Darstellung einer rationalen Funktion oft vereinfacht werden.",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 22"
        },
        {
          "t": "Polynomdivision",
          "b": "Beispiel von den Folien: \\[(x^3 + 2x^2 + 3x + 4) : (x - 1) = x^2 + 3x + 6 + \\frac{10}{x-1}\\] Gerechnet wird schrittweise: \\(-(x^3 - x^2)\\) liefert \\(3x^2 + 3x + 4\\), dann \\(-(3x^2 - 3x)\\) liefert \\(6x + 4\\), dann \\(-(6x - 6)\\) liefert den Rest \\(10\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 23"
        }
      ],
      "questions": [
        {
          "q": "Wann heißt eine Funktion beschränkt?",
          "a": "Wenn es Zahlen \\(M, N \\in \\mathbb{R}\\) gibt, sodass für alle \\(x \\in D\\) gilt: \\(M \\le f(x) \\le N\\). \\(M\\) heißt untere, \\(N\\) obere Schranke. Gibt es solche Zahlen nicht, heißt die Funktion unbeschränkt.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 8"
        },
        {
          "q": "Wann heißt eine Funktion streng monoton wachsend?",
          "a": "Wenn für alle \\(x_1, x_2 \\in D\\) mit \\(x_1 < x_2\\) gilt: \\(f(x_1) < f(x_2)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 10"
        },
        {
          "q": "Woran erkennt man gerade bzw. ungerade Funktionen?",
          "a": "Gerade: \\(f(-x) = f(x)\\) für alle \\(x \\in D\\) (mit \\(-x \\in D\\)). Ungerade: \\(f(-x) = -f(x)\\). Beispiele: \\(x^2\\) ist gerade, \\(x\\) ist ungerade.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 12-13"
        },
        {
          "q": "Wann heißt eine Funktion periodisch und was ist die Periode?",
          "a": "Wenn es ein \\(p \\in \\mathbb{R}^+ \\setminus \\{0\\}\\) gibt mit \\(f(x + p) = f(x)\\) für alle \\(x \\in \\mathbb{R}\\). Die kleinste solche Zahl \\(p\\) heißt Periode.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 14"
        },
        {
          "q": "Was ist ein Polynom und was ist sein Grad?",
          "a": "Eine Funktion der Form \\(p(x) := \\sum_{k=0}^{n} a_k x^k\\) mit reellen Koeffizienten \\(a_k\\). Der Grad ist der höchste auftretende Exponent \\(n\\) (falls \\(a_n \\ne 0\\)).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 17-18"
        },
        {
          "q": "Was ist eine rationale Funktion?",
          "a": "Der Bruch zweier Polynome \\(f(z) := \\frac{p(z)}{q(z)}\\) mit \\(q(z) \\ne 0\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 21"
        },
        {
          "q": "Was sind die Pole einer rationalen Funktion?",
          "a": "Die Nullstellen des Nennerpolynoms \\(q\\). An diesen Punkten ist die rationale Funktion nicht definiert.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 22"
        },
        {
          "q": "Wozu dient die Polynomdivision bei rationalen Funktionen?",
          "a": "In vielen Fällen ist die Darstellung einer rationalen Funktion unnötig kompliziert. Ähnlich wie reelle Zahlen können Polynome dividiert werden, um die Darstellung zu vereinfachen.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 22"
        }
      ],
      "flashcards": [
        {
          "front": "Bedingung: \\(f\\) beschränkt",
          "back": "\\(\\exists\\, M, N \\in \\mathbb{R}\\): \\(M \\le f(x) \\le N\\) für alle \\(x \\in D\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 8"
        },
        {
          "front": "Monoton wachsend vs. streng monoton wachsend",
          "back": "\\(x_1 < x_2 \\Rightarrow f(x_1) \\le f(x_2)\\) (monoton) bzw. \\(f(x_1) < f(x_2)\\) (streng)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 10"
        },
        {
          "front": "Gerade Funktion",
          "back": "\\(f(-x) = f(x)\\) — Beispiel: \\(x^2\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 12-13"
        },
        {
          "front": "Ungerade Funktion",
          "back": "\\(f(-x) = -f(x)\\) — Beispiel: \\(x\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 12-13"
        },
        {
          "front": "Periodische Funktion",
          "back": "\\(f(x + p) = f(x)\\) für alle \\(x\\); kleinste solche Zahl \\(p > 0\\) = Periode. \\(\\sin\\) und \\(\\cos\\) sind \\(2\\pi\\)-periodisch.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 14-15"
        },
        {
          "front": "Allgemeine Form eines Polynoms",
          "back": "\\(p(x) = \\sum_{k=0}^{n} a_k x^k = a_0 + a_1 x + \\dots + a_n x^n\\), \\(a_k \\in \\mathbb{R}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 17"
        },
        {
          "front": "Rationale Funktion",
          "back": "\\(f(z) = \\frac{p(z)}{q(z)}\\), Bruch zweier Polynome mit \\(q(z) \\ne 0\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 21"
        },
        {
          "front": "Pole einer rationalen Funktion",
          "back": "Nullstellen des Nennerpolynoms — dort ist \\(f\\) nicht definiert",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 22"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 1",
          "task": "Beweisen oder widerlegen Sie: Die Summe von zwei beschränkten Funktionen ist stets wieder beschränkt.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 1"
        },
        {
          "ref": "Aufgabe 2",
          "task": "Beweisen oder widerlegen Sie: Die Summe von zwei periodischen Funktionen ist stets wieder periodisch, wenn sie die gleiche Periode haben.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 2"
        },
        {
          "ref": "Aufgabe 3",
          "task": "Beweisen oder widerlegen Sie: Das Produkt von einer geraden und einer ungeraden Funktion ist stets ungerade.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 3"
        },
        {
          "ref": "Aufgabe 4",
          "task": "Beweisen oder widerlegen Sie: Das Produkt von zwei ungeraden Funktionen ist stets gerade.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 4"
        },
        {
          "ref": "Aufgabe 5",
          "task": "Führen Sie eine Polynomdivision mit den gegebenen Polynomen durch:<br>a) \\((x^3 - (1+2i)x^2 - (1-2i)x + 1) : (x - 1)\\)<br>b) \\((x^4 - 3x^3 + 3x^2 - 3x + 2) : (x^2 + 1)\\)",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 5"
        }
      ]
    },
    {
      "id": "komplexe-zahlen",
      "title": "Komplexe Zahlen",
      "icon": "🌀",
      "cards": [
        {
          "t": "Komplexe Zahlen",
          "b": "Komplexe Zahlen sind Zahlen der Form \\(a + b\\mathrm{i}\\) mit \\(a, b \\in \\mathbb{R}\\). Die Größe \\(\\mathrm{i}\\) ist durch die Gleichung \\(\\mathrm{i}^2 = -1\\) charakterisiert. \\(a\\) heißt Realteil und \\(b\\) Imaginärteil von \\(z := a + b\\mathrm{i}\\); kurz: \\(\\operatorname{Re} z := a\\) und \\(\\operatorname{Im} z := b\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 24"
        },
        {
          "t": "Warum komplexe Zahlen?",
          "b": "Das Quadrat einer reellen Zahl ist nie negativ. Um beispielsweise die Gleichung \\(x^2 = -1\\) zu lösen, braucht man eine Erweiterung der reellen Zahlen: die komplexen Zahlen \\(\\mathbb{C}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 25"
        },
        {
          "t": "Real- und Imaginärteil sind reell",
          "b": "Real- und Imaginärteil sind reelle Zahlen — was beim Imaginärteil gerne vergessen wird. Ist \\(b = 0\\), bleibt nur der Realteil übrig: \\(a + 0\\mathrm{i} = a \\in \\mathbb{R}\\).",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 26"
        },
        {
          "t": "Addition und Subtraktion",
          "b": "Wie bei reellen Zahlen, nur wird das Ergebnis wieder in der Form \\(a + b\\mathrm{i}\\) geschrieben: \\[(a + b\\mathrm{i}) + (c + d\\mathrm{i}) = (a + c) + (b + d)\\mathrm{i}\\] \\[(a + b\\mathrm{i}) - (c + d\\mathrm{i}) = (a - c) + (b - d)\\mathrm{i}\\]",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 27"
        },
        {
          "t": "Multiplikation",
          "b": "\\[(a + b\\mathrm{i})(c + d\\mathrm{i}) = (ac - bd) + (ad + bc)\\mathrm{i}\\] Dies entspricht dem gewöhnlichen Ausmultiplizieren von Klammern mit reellen Zahlen, wobei lediglich \\(\\mathrm{i}^2 = -1\\) eingesetzt wird.",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 28"
        },
        {
          "t": "Division",
          "b": "\\[\\frac{a + b\\mathrm{i}}{c + d\\mathrm{i}} = \\frac{(a + b\\mathrm{i})(c - d\\mathrm{i})}{(c + d\\mathrm{i})(c - d\\mathrm{i})} = \\frac{ac + bd}{c^2 + d^2} + \\frac{bc - ad}{c^2 + d^2}\\mathrm{i}\\]",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 29"
        },
        {
          "t": "Komplexe Konjugation",
          "b": "Dreht man das Vorzeichen des Imaginärteils einer komplexen Zahl \\(z\\) um, erhält man die komplex konjugierte Zahl \\(\\bar{z}\\): \\[z = a + b\\mathrm{i} \\;\\Rightarrow\\; \\bar{z} := a - b\\mathrm{i}\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 30"
        },
        {
          "t": "Gauß'sche Zahlenebene",
          "b": "Komplexe Zahlen werden in der Gauß'schen Zahlenebene dargestellt: \\(\\operatorname{Re} z\\) auf der einen Achse, \\(\\mathrm{i}\\operatorname{Im} z\\) auf der anderen. \\(z = a + b\\mathrm{i}\\) liegt bei \\((a, b)\\), die konjugierte Zahl \\(\\bar{z} = a - b\\mathrm{i}\\) bei \\((a, -b)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 31"
        },
        {
          "t": "Betrag einer komplexen Zahl",
          "b": "Der Betrag \\(|z|\\) ist der Abstand des Punktes vom Koordinatenursprung. Nach dem Satz von Pythagoras: \\[|z| := \\sqrt{a^2 + b^2}\\] Für reelle Zahlen \\(a\\) gibt diese Gleichung ebenfalls den Betrag an: \\(|a| = \\sqrt{a^2}\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 32"
        },
        {
          "t": "Polarkoordinaten",
          "b": "Alternative Beschreibung über den Abstand \\(r\\) vom Koordinatenursprung und den Winkel \\(\\varphi\\) von der positiven reellen Achse aus. Mit \\(a = r\\cos\\varphi\\) und \\(b = r\\sin\\varphi\\) gilt: \\[z = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 33-34"
        },
        {
          "t": "Eulerformel",
          "b": "\\[e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi\\] Damit ist eine kürzere Schreibweise möglich: \\(z = r e^{\\mathrm{i}\\varphi}\\). Jede Notation hat ihre Vor- und Nachteile — abhängig davon, was betrachtet wird, ist die eine oder andere hilfreich.",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 34-35"
        },
        {
          "t": "Multiplikation in Polarform",
          "b": "\\[z_1 \\cdot z_2 = r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = r_1 r_2\\, e^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}\\] Geometrische Bedeutung: Die Beträge multiplizieren sich und die Winkel addieren sich.",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 36"
        }
      ],
      "questions": [
        {
          "q": "Wie ist eine komplexe Zahl definiert und wodurch ist i charakterisiert?",
          "a": "Eine komplexe Zahl hat die Form \\(a + b\\mathrm{i}\\) mit \\(a, b \\in \\mathbb{R}\\). Die Größe \\(\\mathrm{i}\\) ist durch \\(\\mathrm{i}^2 = -1\\) charakterisiert.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 24"
        },
        {
          "q": "Gibt es einen Zusammenhang zwischen reellen und komplexen Zahlen?",
          "a": "Die komplexen Zahlen sind eine Erweiterung der reellen Zahlen (nötig z. B. für \\(x^2 = -1\\)). Ist \\(b = 0\\), bleibt nur der Realteil übrig: \\(a + 0\\mathrm{i} = a \\in \\mathbb{R}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 25-26"
        },
        {
          "q": "Wie lauten die Grundrechenregeln für komplexe Zahlen?",
          "a": "Addition/Subtraktion komponentenweise: \\((a+b\\mathrm{i}) \\pm (c+d\\mathrm{i}) = (a \\pm c) + (b \\pm d)\\mathrm{i}\\). Multiplikation: \\((a+b\\mathrm{i})(c+d\\mathrm{i}) = (ac-bd) + (ad+bc)\\mathrm{i}\\). Division: mit \\(c - d\\mathrm{i}\\) erweitern, Ergebnis \\(\\frac{ac+bd}{c^2+d^2} + \\frac{bc-ad}{c^2+d^2}\\mathrm{i}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 27-29"
        },
        {
          "q": "Was ist komplexe Konjugation anschaulich?",
          "a": "Das Umdrehen des Vorzeichens des Imaginärteils: aus \\(z = a + b\\mathrm{i}\\) wird \\(\\bar{z} = a - b\\mathrm{i}\\). In der Gauß'schen Zahlenebene liegt \\(\\bar{z}\\) bei \\((a, -b)\\), also gespiegelt an der reellen Achse.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 30-31"
        },
        {
          "q": "Wie ist der Betrag einer komplexen Zahl definiert?",
          "a": "Als Abstand des Punktes vom Koordinatenursprung; nach dem Satz von Pythagoras \\(|z| = \\sqrt{a^2 + b^2}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 32"
        },
        {
          "q": "Geben Sie die Polarkoordinatendarstellung komplexer Zahlen an.",
          "a": "\\(z = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi) = r e^{\\mathrm{i}\\varphi}\\) mit Abstand \\(r\\) vom Ursprung und Winkel \\(\\varphi\\) von der positiven reellen Achse; dabei ist \\(a = r\\cos\\varphi\\), \\(b = r\\sin\\varphi\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 33-34"
        },
        {
          "q": "Wie lautet die Eulerformel?",
          "a": "\\(e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 34"
        },
        {
          "q": "Welche geometrische Bedeutung hat die Multiplikation komplexer Zahlen?",
          "a": "In Polarform gilt \\(z_1 z_2 = r_1 r_2 e^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}\\): Die Beträge multiplizieren sich, die Winkel addieren sich.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 36"
        },
        {
          "q": "Warum gibt es so viele Darstellungen komplexer Zahlen?",
          "a": "Jede Notation hat ihre Vor- und Nachteile. Abhängig davon, was gerade betrachtet wird, ist die eine oder die andere Notation hilfreich.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 35"
        }
      ],
      "flashcards": [
        {
          "front": "\\(\\mathrm{i}^2 = \\;?\\)",
          "back": "\\(-1\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 24"
        },
        {
          "front": "\\(\\operatorname{Re} z\\) und \\(\\operatorname{Im} z\\) für \\(z = a + b\\mathrm{i}\\)",
          "back": "\\(\\operatorname{Re} z = a\\), \\(\\operatorname{Im} z = b\\) — beide sind reelle Zahlen!",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 24, 26"
        },
        {
          "front": "Multiplikationsformel \\((a+b\\mathrm{i})(c+d\\mathrm{i})\\)",
          "back": "\\((ac - bd) + (ad + bc)\\mathrm{i}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 28"
        },
        {
          "front": "Trick bei der Division komplexer Zahlen",
          "back": "Mit der konjugierten Zahl des Nenners erweitern: \\(\\frac{a+b\\mathrm{i}}{c+d\\mathrm{i}} = \\frac{(a+b\\mathrm{i})(c-d\\mathrm{i})}{(c+d\\mathrm{i})(c-d\\mathrm{i})}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 29"
        },
        {
          "front": "Komplex konjugierte Zahl \\(\\bar{z}\\)",
          "back": "\\(z = a + b\\mathrm{i} \\Rightarrow \\bar{z} = a - b\\mathrm{i}\\) (Vorzeichen des Imaginärteils umdrehen)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 30"
        },
        {
          "front": "Betrag \\(|z|\\)",
          "back": "\\(|z| = \\sqrt{a^2 + b^2}\\) (Abstand vom Ursprung, Pythagoras)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 32"
        },
        {
          "front": "Eulerformel",
          "back": "\\(e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi\\), damit \\(z = r e^{\\mathrm{i}\\varphi}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 34"
        },
        {
          "front": "Multiplikation in Polarform: Was passiert mit Beträgen und Winkeln?",
          "back": "Beträge multiplizieren sich, Winkel addieren sich: \\(z_1 z_2 = r_1 r_2 e^{\\mathrm{i}(\\varphi_1+\\varphi_2)}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 36"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 6",
          "task": "a) Sei \\(z_1 = 2 + 4\\mathrm{i}\\) und \\(z_2 = 3 + 7\\mathrm{i}\\). Bilden Sie \\(z_1 \\cdot z_2\\) sowie \\(\\frac{z_1}{z_2}\\) und zeichnen Sie die Zahlen \\(z_1\\) und \\(z_2\\) in die Gauß'sche Zahlenebene ein.<br>b) Sei \\(z_1 = 3e^{\\mathrm{i}\\pi}\\) und \\(z_2 = 12 e^{\\frac{3\\mathrm{i}\\pi}{2}}\\). Bestimmen Sie den Betrag des Produktes aus \\(z_1\\) und \\(z_2\\) und beschreiben Sie dessen Änderung, wenn man die Winkel in \\(z_1\\) und \\(z_2\\) mit 4 multipliziert.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 6"
        },
        {
          "ref": "Aufgabe 8",
          "task": "Berechnen Sie den Real- und Imaginärteil der folgenden Zahl: \\[z = \\frac{(-2 + 5\\mathrm{i}) \\cdot (1 + 3\\mathrm{i})}{2 + 3\\mathrm{i}} - \\left(\\frac{2}{13} - \\frac{3}{13}\\mathrm{i}\\right)\\]",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 8"
        }
      ]
    },
    {
      "id": "trig-exp-log",
      "title": "Sin, Cos, Exp & Log",
      "icon": "📐",
      "cards": [
        {
          "t": "Sinus und Kosinus",
          "b": "Schwingungsprozesse tauchen besonders in der Physik und den Ingenieurwissenschaften sehr häufig auf — die sie beschreibenden Funktionen heißen Sinus und Kosinus (\\(\\sin\\) und \\(\\cos\\)). Sie gehen durch Verschieben um \\(\\frac{\\pi}{2}\\) ineinander über und sind \\(2\\pi\\)-periodisch.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 37, 39"
        },
        {
          "t": "Nullstellen von Sinus und Kosinus",
          "b": "\\[\\sin t = 0 \\text{ für } t = k\\pi,\\; k \\in \\mathbb{Z}\\] \\[\\cos t = 0 \\text{ für } t = \\tfrac{\\pi}{2} + k\\pi,\\; k \\in \\mathbb{Z}\\]",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 39"
        },
        {
          "t": "Arcussinus und Arcuskosinus",
          "b": "Für die Umkehrfunktionen gilt: \\[\\arcsin := \\sin^{-1} \\quad\\text{und}\\quad \\arccos := \\cos^{-1}\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 40"
        },
        {
          "t": "Tangens",
          "b": "Aus Sinus und Kosinus wird eine neue Funktion konstruiert: \\[\\tan t := \\frac{\\sin t}{\\cos t}\\] Der Tangens hat die gleichen Nullstellen wie der Sinus. Das „gestückelte“ Bild des Tangens ergibt sich aus den bekannten Nullstellen des Kosinus.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 41, 43"
        },
        {
          "t": "Exponentialfunktion",
          "b": "\\(e^x\\) mit einem reellen Exponenten \\(x\\), dabei ist \\(e = 2{,}71828\\ldots\\) die Eulersche Zahl.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 44"
        },
        {
          "t": "Natürlicher Logarithmus",
          "b": "Die Umkehrfunktion der Exponentialfunktion \\(f(x) := e^x\\) ist der natürliche Logarithmus \\(f^{-1}(x) = \\ln x\\). Es gilt also: \\[e^{\\ln x} = x \\quad\\text{und}\\quad \\ln e^x = x\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 45"
        },
        {
          "t": "Allgemeine Potenz",
          "b": "Die allgemeine Potenz \\(a^x\\) mit \\(a > 0\\) wird über die Exponentialfunktion definiert: \\[a^x := e^{x \\ln a}\\] Die Umkehrfunktion von \\(a^x\\) ist der Logarithmus zur Basis \\(a\\), notiert als \\(\\log_a x\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 46"
        },
        {
          "t": "Potenzregeln",
          "b": "Seien \\(a, b > 0\\) und \\(r, s \\in \\mathbb{R}\\): \\[a^0 = 1 \\text{ (speziell auch } 0^0 = 1\\text{)}, \\quad a^{-s} = \\frac{1}{a^s}\\] \\[a^{r+s} = a^r a^s, \\quad a^{r-s} = \\frac{a^r}{a^s}\\] \\[(a^r)^s = a^{rs}, \\quad (ab)^r = a^r b^r\\]",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 47"
        },
        {
          "t": "Logarithmusregeln",
          "b": "Seien \\(a, x, y > 0\\): \\[\\log_a xy = \\log_a x + \\log_a y\\] \\[\\log_a x^y = y \\log_a x\\] \\[\\log_a \\frac{x}{y} = \\log_a x - \\log_a y\\]",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 48"
        }
      ],
      "questions": [
        {
          "q": "Erklären Sie den Zusammenhang zwischen Sinus, Kosinus und Tangens. Wo liegen die Nullstellen?",
          "a": "\\(\\tan t = \\frac{\\sin t}{\\cos t}\\). Sinus und Kosinus gehen durch Verschieben um \\(\\frac{\\pi}{2}\\) ineinander über. Nullstellen: \\(\\sin t = 0\\) für \\(t = k\\pi\\), \\(\\cos t = 0\\) für \\(t = \\frac{\\pi}{2} + k\\pi\\) (\\(k \\in \\mathbb{Z}\\)); der Tangens hat die gleichen Nullstellen wie der Sinus.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 39, 41"
        },
        {
          "q": "Warum ist der Graph des Tangens „gestückelt“?",
          "a": "Wegen der Nullstellen des Kosinus im Nenner von \\(\\tan t = \\frac{\\sin t}{\\cos t}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 43"
        },
        {
          "q": "Wie lautet der Zusammenhang zwischen Logarithmus und Exponentialfunktion?",
          "a": "Der natürliche Logarithmus ist die Umkehrfunktion der Exponentialfunktion: \\(e^{\\ln x} = x\\) und \\(\\ln e^x = x\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 45"
        },
        {
          "q": "Wie wird die allgemeine Potenz definiert?",
          "a": "\\(a^x := e^{x \\ln a}\\) für \\(a > 0\\). Die Umkehrfunktion ist \\(\\log_a x\\), der Logarithmus zur Basis \\(a\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 46"
        },
        {
          "q": "Wie lauten die Potenzregeln für \\(a^{r+s}\\) und \\((a^r)^s\\)?",
          "a": "\\(a^{r+s} = a^r a^s\\) und \\((a^r)^s = a^{rs}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 47"
        },
        {
          "q": "Wie lauten die drei Logarithmusregeln?",
          "a": "\\(\\log_a xy = \\log_a x + \\log_a y\\); \\(\\log_a x^y = y \\log_a x\\); \\(\\log_a \\frac{x}{y} = \\log_a x - \\log_a y\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 48"
        },
        {
          "q": "Was sind Arcussinus und Arcuskosinus?",
          "a": "Die Umkehrfunktionen von Sinus und Kosinus: \\(\\arcsin := \\sin^{-1}\\), \\(\\arccos := \\cos^{-1}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 40"
        }
      ],
      "flashcards": [
        {
          "front": "Nullstellen von \\(\\sin\\)",
          "back": "\\(t = k\\pi\\), \\(k \\in \\mathbb{Z}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 39"
        },
        {
          "front": "Nullstellen von \\(\\cos\\)",
          "back": "\\(t = \\frac{\\pi}{2} + k\\pi\\), \\(k \\in \\mathbb{Z}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 39"
        },
        {
          "front": "Definition Tangens",
          "back": "\\(\\tan t = \\frac{\\sin t}{\\cos t}\\) — gleiche Nullstellen wie der Sinus",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 41"
        },
        {
          "front": "Eulersche Zahl \\(e\\)",
          "back": "\\(e = 2{,}71828\\ldots\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 44"
        },
        {
          "front": "\\(e^{\\ln x}\\) und \\(\\ln e^x\\)",
          "back": "Beides ergibt \\(x\\) — der \\(\\ln\\) ist die Umkehrfunktion von \\(e^x\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 45"
        },
        {
          "front": "Allgemeine Potenz \\(a^x\\)",
          "back": "\\(a^x := e^{x \\ln a}\\) (für \\(a > 0\\))",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 46"
        },
        {
          "front": "\\(\\log_a xy = \\;?\\)",
          "back": "\\(\\log_a x + \\log_a y\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 48"
        },
        {
          "front": "\\(\\log_a x^y = \\;?\\)",
          "back": "\\(y \\log_a x\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 48"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 7",
          "task": "Betrachten Sie den Einheitskreis. Verwenden Sie diesen, um mithilfe der Schuldefinition des Sinus nachzuweisen, dass die Sinuskurve die Ihnen bekannte Form hat.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 7"
        },
        {
          "ref": "Aufgabe 10",
          "task": "a) Lösen Sie die folgende Exponentialgleichung: \\(a^{2x+n} = \\frac{a^{3x+2n}}{a^{3n}}\\)<br>b) Vereinfachen Sie den folgenden Term: \\(\\frac{(p^2 - 16q^2)^{n+1}}{(p + 4q)^{n+1}}\\)<br>c) Lösen Sie die Klammern auf: \\((m - n)^{-2}\\)<br>d) \\(\\log_2 a - \\log_2 b\\)<br>e) \\(2 \\cdot \\log x + \\frac{1}{2}\\log x^4 - \\log x^2\\)",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 10"
        }
      ]
    },
    {
      "id": "folgen-reihen",
      "title": "Folgen & Reihen",
      "icon": "♾️",
      "cards": [
        {
          "t": "Wozu Folgen?",
          "b": "Folgen werden wesentlich verwendet, um sich um die Begriffe Konvergenz und Divergenz zu kümmern und Konsequenzen daraus abzuleiten. Später sind Folgen Hilfsmittel, um sich an bestimmte Werte „anzuschleichen“ — sie sind die Grundlage für Begriffe wie Stetigkeit und Differenzierbarkeit.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 49-50"
        },
        {
          "t": "Folge",
          "b": "Eine reelle bzw. komplexe Folge \\((x_n)\\) ist eine Abbildung von \\(\\mathbb{N}\\) nach \\(\\mathbb{R}\\) bzw. \\(\\mathbb{C}\\). Jedem Index \\(n \\in \\mathbb{N}\\) wird dabei eine reelle bzw. komplexe Zahl \\(x_n\\) zugeordnet. Schreibweise \\(\\mathbb{K}\\): gemeint ist \\(\\mathbb{R}\\) oder \\(\\mathbb{C}\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 51"
        },
        {
          "t": "Schreibweise von Folgen",
          "b": "Statt der Funktionsschreibweise \\(f(n) := 1 - \\frac{1}{n}\\) schreibt man \\(x_n := 1 - \\frac{1}{n}\\). Das ergibt eine Auflistung: \\(0, \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\ldots\\) Die Folge an sich wird in Klammern geschrieben \\(\\left(1 - \\frac{1}{n}\\right)\\); ohne Klammern sind die einzelnen Folgenglieder \\(x_n\\) gemeint. Der Indexname (\\(n\\), \\(k\\), \\(i\\), …) ist egal.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 52-53"
        },
        {
          "t": "Konvergenz und Nullfolge",
          "b": "Eine Folge \\((x_n)\\) in \\(\\mathbb{K}\\) heißt konvergent gegen einen Grenzwert \\(a \\in \\mathbb{K}\\), wenn es zu jedem \\(\\varepsilon > 0\\) ein \\(N \\in \\mathbb{N}\\) gibt, sodass für alle Indizes \\(n \\ge N\\) die Ungleichung \\(|x_n - a| < \\varepsilon\\) gilt. Schreibweise: \\(\\lim_{n \\to \\infty} x_n = a\\) oder \\(x_n \\to a\\). Eine Folge mit Grenzwert 0 heißt Nullfolge.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 54"
        },
        {
          "t": "ε-Umgebung",
          "b": "Die Ungleichung \\(|x_n - a| < \\varepsilon\\) lässt sich im Reellen umformulieren zu \\(x_n \\in \\,]a - \\varepsilon, a + \\varepsilon[\\), der so genannten \\(\\varepsilon\\)-Umgebung des Punktes \\(a\\) (stets \\(\\varepsilon > 0\\)). Eine Folge ist demnach konvergent gegen \\(a\\), wenn sich in jedem noch so kleinen Intervall um \\(a\\) fast alle (alle bis auf endlich viele) Folgenglieder befinden. Ist eine Folge konvergent, so ist ihr Grenzwert eindeutig.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 55-57"
        },
        {
          "t": "Standardbeispiel: 1/n ist Nullfolge",
          "b": "Es gilt \\(\\lim_{n \\to \\infty} \\frac{1}{n} = 0\\). Beweis: Zu beliebig kleinem \\(\\varepsilon > 0\\) wählt man \\(N \\in \\mathbb{N}\\) größer als \\(\\frac{1}{\\varepsilon}\\). Dann gilt für alle \\(n \\ge N\\): \\[|x_n - 0| = \\frac{1}{n} \\le \\frac{1}{N} < \\varepsilon\\] Das \\(N\\) lässt sich auch direkt berechnen: aus \\(\\frac{1}{n} < \\varepsilon\\) folgt \\(n > \\frac{1}{\\varepsilon}\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 58-59"
        },
        {
          "t": "Divergenz und Häufungspunkte",
          "b": "Nicht konvergente Folgen heißen divergent. Beispiel: \\(x_n := n\\) wächst immer weiter an, es kann keinen Grenzwert geben. Die Folge \\(x_n := (-1)^n\\) hat zwei so genannte Häufungspunkte: \\(-1\\) und \\(+1\\). Folgen wie \\(x_n := n^2\\), die betraglich über jede Grenze wachsen, notiert man als \\(\\lim_{n\\to\\infty} |x_n| = \\infty\\) bzw. \\(|x_n| \\to \\infty\\); bei reellen Folgen ggf. mit Vorzeichen: \\(x_n := -n \\to -\\infty\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 60-61"
        },
        {
          "t": "Rechenregeln für konvergente Folgen",
          "b": "Seien \\((x_n)\\), \\((y_n)\\) konvergent mit \\(\\lim x_n = a\\), \\(\\lim y_n = b\\) und \\(c \\in \\mathbb{R}\\): \\[\\lim_{n\\to\\infty}(x_n + y_n) = a + b\\] \\[\\lim_{n\\to\\infty}(x_n \\cdot y_n) = ab, \\qquad \\lim_{n\\to\\infty} c \\cdot x_n = ca\\] \\[\\lim_{n\\to\\infty} \\frac{x_n}{y_n} = \\frac{a}{b}, \\text{ falls } b \\ne 0\\]",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 62"
        },
        {
          "t": "Grenzwerte berechnen durch Zerlegen und Kürzen",
          "b": "Die Folge \\(\\left(\\frac{1}{1 + \\frac{1}{n}}\\right)\\) ist aus der konstanten Folge \\((1)\\) und der Nullfolge \\(\\left(\\frac{1}{n}\\right)\\) zusammengesetzt: Grenzwert \\(\\frac{1}{1+0} = 1\\). Bei \\(\\left(\\frac{n}{n+1}\\right)\\) ist Vorsicht geboten, denn \\((n)\\) ist nicht konvergent — hier hilft Kürzen: \\(\\frac{n}{n+1} = \\frac{1}{1 + \\frac{1}{n}}\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 63-64"
        },
        {
          "t": "Wichtige Grenzwerte (zum Merken)",
          "b": "1. Für \\(|b| < 1\\) gilt \\(b^n \\to 0\\)<br>2. \\(\\left(1 + \\frac{a}{n}\\right)^n \\to e^a\\)<br>3. Für positives \\(a\\) gilt \\(a^{1/n} \\to 1\\) und \\(n^{1/n} \\to 1\\)",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 66"
        },
        {
          "t": "Partialsumme",
          "b": "Für eine (reelle oder komplexe) Folge \\((a_k)\\) heißt \\[S_n := \\sum_{k=0}^{n} a_k\\] die \\(n\\)-te Partialsumme. Sie ist einfach die Summe der ersten \\(n\\) Folgenglieder.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 70, 73"
        },
        {
          "t": "Reihe",
          "b": "Die Folge der Partialsummen heißt Reihe, notiert als \\(\\sum_{k=0}^{\\infty} a_k\\). Falls die Folge der Partialsummen \\((S_n)\\) konvergiert, heißt die Reihe konvergent, und ihr Wert ist \\[\\sum_{k=0}^{\\infty} a_k := \\lim_{n\\to\\infty} \\sum_{k=0}^{n} a_k\\] Die Begriffe Konvergenz und Divergenz für Reihen werden so einfach von Folgen übernommen.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 71-72"
        },
        {
          "t": "Geometrische Summe und geometrische Reihe",
          "b": "Für die geometrische Summe gilt (\\(x \\ne 1\\)): \\[S_n(x) = \\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}\\] Wegen \\(x^{n+1} \\to 0\\) für \\(|x| < 1\\) ist die geometrische Reihe für \\(x \\in \\,]-1, 1[\\) definiert mit dem Ergebnis \\[\\sum_{k=0}^{\\infty} x^k = \\frac{1}{1 - x}\\]",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 74"
        },
        {
          "t": "Der Läufer im Stadion",
          "b": "Ein Läufer muss vom Start ins Ziel alle Teilabschnitte durchlaufen (200 m, 100 m, 50 m, …). Mit der geometrischen Reihe kommt er an: \\[200 + 100 + \\ldots = 200 \\cdot \\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n = 200 \\cdot \\frac{1}{1 - \\frac{1}{2}} = 400\\]",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 67, 75"
        }
      ],
      "questions": [
        {
          "q": "Was ist eine Folge? Nennen Sie Beispiele.",
          "a": "Eine Abbildung von \\(\\mathbb{N}\\) nach \\(\\mathbb{R}\\) bzw. \\(\\mathbb{C}\\); jedem Index \\(n\\) wird eine Zahl \\(x_n\\) zugeordnet. Beispiele von den Folien: \\(x_n := 1 - \\frac{1}{n}\\), \\(x_n := \\frac{1}{n}\\), \\(x_n := n\\), \\(x_n := (-1)^n\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 51-61"
        },
        {
          "q": "Wie ist die Konvergenz einer Folge definiert?",
          "a": "\\((x_n)\\) konvergiert gegen \\(a\\), wenn es zu jedem \\(\\varepsilon > 0\\) ein \\(N \\in \\mathbb{N}\\) gibt, sodass für alle \\(n \\ge N\\) gilt: \\(|x_n - a| < \\varepsilon\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 54"
        },
        {
          "q": "Was ist eine Nullfolge?",
          "a": "Eine Folge mit Grenzwert 0. Standardbeispiel: \\(x_n := \\frac{1}{n}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 54, 58"
        },
        {
          "q": "Was ist eine ε-Umgebung eines Punktes?",
          "a": "Das Intervall \\(]a - \\varepsilon, a + \\varepsilon[\\) um den Punkt \\(a\\), mit \\(\\varepsilon > 0\\). Eine Folge konvergiert gegen \\(a\\), wenn in jeder noch so kleinen \\(\\varepsilon\\)-Umgebung fast alle (alle bis auf endlich viele) Folgenglieder liegen.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 55-57"
        },
        {
          "q": "Ist der Grenzwert einer konvergenten Folge eindeutig?",
          "a": "Ja — ist eine Folge konvergent, so ist ihr Grenzwert eindeutig.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 57"
        },
        {
          "q": "Nennen Sie drei wichtige Rechenregeln für konvergente Folgen.",
          "a": "Mit \\(\\lim x_n = a\\), \\(\\lim y_n = b\\): \\(\\lim(x_n + y_n) = a + b\\); \\(\\lim(x_n y_n) = ab\\); \\(\\lim \\frac{x_n}{y_n} = \\frac{a}{b}\\) falls \\(b \\ne 0\\) (außerdem \\(\\lim c\\,x_n = ca\\)).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 62"
        },
        {
          "q": "Welche Grenzwerte sollte man sich laut Vorlesung merken?",
          "a": "Für \\(|b| < 1\\): \\(b^n \\to 0\\); \\(\\left(1 + \\frac{a}{n}\\right)^n \\to e^a\\); für positives \\(a\\): \\(a^{1/n} \\to 1\\) und \\(n^{1/n} \\to 1\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 66"
        },
        {
          "q": "Definieren Sie den Begriff der Partialsumme.",
          "a": "\\(S_n := \\sum_{k=0}^{n} a_k\\) — die Summe der ersten \\(n\\) Folgenglieder der Folge \\((a_k)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 70"
        },
        {
          "q": "Was ist der Zusammenhang zwischen Reihen und Folgen?",
          "a": "Eine Reihe ist die Folge der Partialsummen einer Folge. Konvergenz und Divergenz werden von Folgen übernommen: Der Wert einer Reihe ist der Grenzwert der Folge der Partialsummen.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 71-72"
        },
        {
          "q": "Nennen Sie Beispiele für konvergente und divergente Reihen bzw. Folgen von den Folien.",
          "a": "Konvergent: die geometrische Reihe \\(\\sum x^k = \\frac{1}{1-x}\\) für \\(|x| < 1\\) (z. B. Läufer im Stadion: Wert 400). Divergent: die Folgen \\(x_n := n\\) und \\(x_n := (-1)^n\\) (zwei Häufungspunkte).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 60-61, 74-75"
        },
        {
          "q": "Wie lautet der Wert der geometrischen Summe für beliebiges \\(x \\ne 1\\)?",
          "a": "\\(S_n(x) = \\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 74"
        }
      ],
      "flashcards": [
        {
          "front": "Definition: \\((x_n)\\) konvergiert gegen \\(a\\)",
          "back": "Zu jedem \\(\\varepsilon > 0\\) gibt es ein \\(N \\in \\mathbb{N}\\), sodass \\(|x_n - a| < \\varepsilon\\) für alle \\(n \\ge N\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 54"
        },
        {
          "front": "Nullfolge",
          "back": "Folge mit Grenzwert 0, z. B. \\(\\left(\\frac{1}{n}\\right)\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 54, 58"
        },
        {
          "front": "\\(\\varepsilon\\)-Umgebung von \\(a\\)",
          "back": "\\(]a - \\varepsilon, a + \\varepsilon[\\) mit \\(\\varepsilon > 0\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 57"
        },
        {
          "front": "Häufungspunkte von \\(x_n := (-1)^n\\)",
          "back": "Zwei: \\(-1\\) und \\(+1\\) — die Folge ist divergent",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 60-61"
        },
        {
          "front": "\\(\\lim_{n\\to\\infty} \\left(1 + \\frac{a}{n}\\right)^n = \\;?\\)",
          "back": "\\(e^a\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 66"
        },
        {
          "front": "\\(b^n \\to \\;?\\) für \\(|b| < 1\\)",
          "back": "\\(0\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 66"
        },
        {
          "front": "\\(n\\)-te Partialsumme",
          "back": "\\(S_n = \\sum_{k=0}^{n} a_k\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 70"
        },
        {
          "front": "Was ist eine Reihe?",
          "back": "Die Folge der Partialsummen; ihr Wert ist \\(\\lim_{n\\to\\infty} S_n\\), falls dieser existiert",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 71-72"
        },
        {
          "front": "Geometrische Reihe \\(\\sum_{k=0}^{\\infty} x^k\\) für \\(|x| < 1\\)",
          "back": "\\(\\frac{1}{1 - x}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 74"
        },
        {
          "front": "Geometrische Summe \\(\\sum_{k=0}^{n} x^k\\) (\\(x \\ne 1\\))",
          "back": "\\(\\frac{1 - x^{n+1}}{1 - x}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 74"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 9",
          "task": "Bestimmen Sie für beliebige \\(n \\in \\mathbb{N}\\) den Wert der Summe \\[\\sum_{k=1}^{n} \\ln\\left(1 + \\frac{1}{k}\\right)\\]",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 9"
        },
        {
          "ref": "Aufgabe 11",
          "task": "Beschreiben Sie den Verlauf der komplexen Folge \\(\\left(\\frac{1}{k} e^{\\mathrm{i}k}\\right)\\). Gegen welchen Grenzwert konvergiert die Folge? Begründen Sie Ihre Wahl.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 11"
        },
        {
          "ref": "Aufgabe 12",
          "task": "Denken Sie über die folgenden Fragen nach, rekapitulieren Sie den zugehörigen Stoff und lernen Sie, die Lösungen in der Übung frei vorzutragen:<br>a) Was ist eine Folge? Nennen Sie Beispiele.<br>b) Wie ist die Konvergenz einer Folge definiert?<br>c) Was ist eine Nullfolge?<br>d) Was ist eine \\(\\varepsilon\\)-Umgebung eines Punktes?<br>e) Welche Anzahl von Häufungspunkten hat eine konvergente Folge?<br>f) Nennen Sie drei wichtige Rechenregeln für konvergente Folgen.",
          "note": "Die Theoriefragen sind auch im Modus „Fragen“ dieses Themas mit Folienbeleg enthalten.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 12"
        },
        {
          "ref": "Aufgabe 13",
          "task": "Berechnen Sie die folgenden Grenzwerte:<br>a) \\(\\lim_{n\\to\\infty} \\left(\\sqrt{n^2 + an + 1} - \\sqrt{n^2 + 1}\\right)\\)<br>b) \\(\\lim_{n\\to\\infty} (-1)^n \\cdot \\frac{23}{n}\\)<br>c) \\(\\lim_{n\\to\\infty} \\left(1 - \\frac{1}{n^2}\\right)^n\\)<br>d) \\(\\lim_{k\\to\\infty} \\frac{(k+1)(2k-3)(k+2)}{k^3}\\)",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 13"
        },
        {
          "ref": "Aufgabe 14",
          "task": "Ein Marathonläufer muss 42,195 km laufen, um ins Ziel zu kommen. Dazu muss er zuerst 4,2195 km laufen, danach 0,42195 km usf. Können Sie mathematisch beweisen, dass der Marathonläufer das Ziel erreicht?",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 14"
        },
        {
          "ref": "Aufgabe 15",
          "task": "Betrachten Sie die Reihe \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^2}\\). Bilden Sie den Betrag der Differenz zwischen der 7. und 6. Partialsumme und den Betrag der Differenz der 8. und 7. Partialsumme. Welcher der Beträge ist größer? Können Sie Ihre Antwort begründen?",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 15"
        },
        {
          "ref": "Aufgabe 16",
          "task": "Die Explosion einer Atombombe: Ein Neutron spaltet einen Plutoniumkern, wobei drei weitere Neutronen entstehen (1. Zerfallsstufe). Jedes der drei erzeugten Neutronen spaltet einen weiteren Kern und es entstehen insgesamt neun Neutronen (2. Zerfallsstufe). Dieses Spiel setzt sich fort, bis alle Plutoniumkerne zerfallen sind (Kettenreaktion). Wie lange dauert der vollständige Zerfall eines Plutoniumstücks mit \\(N = 7{,}85 \\cdot 10^{26}\\) Kernen, wenn die Dauer einer Zerfallsstufe \\(\\tau\\) beträgt?",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 16"
        },
        {
          "ref": "Aufgabe 17",
          "task": "Wiederholungsfragen zum frei Vortragen in der Übung — u. a.: Was ist die geometrische Summe (Wert für beliebiges \\(x \\in \\mathbb{R}\\), \\(n \\in \\mathbb{N}\\))? Imaginär- und Realteil einer komplexen Zahl? Grundrechenregeln für komplexe Zahlen? Polarkoordinatendarstellung? Was ist ein Polynom, wie funktioniert Polynomdivision? Zusammenhang Sinus/Kosinus/Tangens mit Nullstellen? Zusammenhang Logarithmus/Exponentialfunktion? Was ist eine Folge, \\(\\varepsilon\\)-Umgebung, Zusammenhang Reihen/Folgen, Partialsumme, konvergente/divergente Reihen? Definition Stetigkeit und lokales Minimum? Was sind Sekante und Tangente (mit Skizzen)?",
          "note": "Umfasst den Stoff der Kapitel Funktionen bis Differenzierbarkeit (Aufgabenteile a–v im Übungsblatt).",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 17"
        }
      ]
    },
    {
      "id": "stetigkeit",
      "title": "Stetigkeit & Extrema",
      "icon": "✏️",
      "cards": [
        {
          "t": "Anschauliche Idee der Stetigkeit",
          "b": "Wenn etwas „stetig“ verläuft, gibt es umgangssprachlich keine Brüche, Sprünge oder Risse. Diese Vorstellung findet sich beim Verlauf einer Funktion wieder: Der Funktionsgraph soll für ein bestimmtes Intervall in einem Zug gezeichnet werden können.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 76"
        },
        {
          "t": "Stetigkeit",
          "b": "Sei \\(f: D \\to \\mathbb{R}\\), \\(D \\subset \\mathbb{R}\\) der Definitionsbereich und \\(\\tilde{x} \\in D\\). \\(f\\) heißt in \\(\\tilde{x}\\) stetig, falls der Grenzwert \\(\\lim_{x \\to \\tilde{x}} f(x)\\) existiert und \\[\\lim_{x \\to \\tilde{x}} f(x) = f(\\tilde{x})\\] gilt. Ist \\(f\\) in allen Punkten des Definitionsbereichs stetig, so heißt \\(f\\) stetig auf ganz \\(D\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 77"
        },
        {
          "t": "Wichtige stetige Funktionen",
          "b": "Diverse wichtige Funktionen sind auf ganz \\(\\mathbb{R}\\) stetig: Polynome, die Exponentialfunktion \\(e^x\\), der Logarithmus \\(\\ln x\\) sowie Sinus und Kosinus. Die Funktion \\(f(x) := \\frac{1}{x}\\) ist in \\(x = 0\\) nicht definiert, sonst aber überall stetig.",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 80"
        },
        {
          "t": "Kombinationen stetiger Funktionen",
          "b": "Summen, Differenzen, Produkte, Quotienten und Kompositionen stetiger Funktionen sind (dort wo definiert) stetig. Damit wird nochmals deutlich, dass Polynome stetig sind — und auch rationale Funktionen, denn diese sind der Quotient von Polynomen.",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 81-82"
        },
        {
          "t": "Globales Maximum und Minimum",
          "b": "Sei \\(f: D \\to \\mathbb{R}\\). \\(f\\) nimmt in \\(\\tilde{x} \\in D\\) das (globale) Maximum an, wenn gilt: \\[f(\\tilde{x}) \\ge f(x) \\text{ für alle } x \\in D\\] Schreibweise: \\(f(\\tilde{x}) = \\max_{x \\in D} f(x)\\). Gilt sogar \\(>\\) anstelle von \\(\\ge\\), spricht man von einem strengen Maximum. Analog wird das Minimum (\\(\\min\\)) definiert.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 83"
        },
        {
          "t": "Lokales Maximum und Minimum",
          "b": "Sei \\(f: D \\to \\mathbb{R}\\). \\(f\\) nimmt in \\(\\tilde{x} \\in D\\) das lokale Maximum an, falls ein \\(\\varepsilon > 0\\) existiert, sodass gilt: \\[f(\\tilde{x}) \\ge f(x) \\text{ für alle } x \\in D \\text{ mit } |x - \\tilde{x}| < \\varepsilon\\] Analog wird das lokale Minimum definiert.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 84"
        }
      ],
      "questions": [
        {
          "q": "Definieren Sie Stetigkeit.",
          "a": "\\(f\\) heißt in \\(\\tilde{x} \\in D\\) stetig, falls \\(\\lim_{x \\to \\tilde{x}} f(x)\\) existiert und \\(\\lim_{x \\to \\tilde{x}} f(x) = f(\\tilde{x})\\) gilt. Ist das in allen Punkten von \\(D\\) erfüllt, heißt \\(f\\) stetig auf ganz \\(D\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 77"
        },
        {
          "q": "Wann sind Kompositionen von Funktionen sicher stetig?",
          "a": "Summen, Differenzen, Produkte, Quotienten und Kompositionen stetiger Funktionen sind (dort wo definiert) stetig.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 81"
        },
        {
          "q": "Welche wichtigen Funktionen sind auf ganz \\(\\mathbb{R}\\) stetig?",
          "a": "Polynome, die Exponentialfunktion, der Logarithmus sowie Sinus und Kosinus. \\(\\frac{1}{x}\\) ist in \\(x = 0\\) nicht definiert, sonst überall stetig.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 80"
        },
        {
          "q": "Warum sind rationale Funktionen stetig?",
          "a": "Weil sie Quotienten von Polynomen sind und Quotienten stetiger Funktionen (dort wo definiert) stetig sind.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 82"
        },
        {
          "q": "Definieren Sie den Begriff des lokalen Minimums.",
          "a": "\\(f\\) nimmt in \\(\\tilde{x}\\) ein lokales Minimum an, falls ein \\(\\varepsilon > 0\\) existiert, sodass \\(f(\\tilde{x}) \\le f(x)\\) für alle \\(x \\in D\\) mit \\(|x - \\tilde{x}| < \\varepsilon\\) (analog zur Definition des lokalen Maximums mit \\(\\ge\\)).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 84"
        },
        {
          "q": "Was unterscheidet globale und lokale Maxima?",
          "a": "Globales Maximum: \\(f(\\tilde{x}) \\ge f(x)\\) für alle \\(x \\in D\\). Lokales Maximum: Die Bedingung muss nur für alle \\(x \\in D\\) mit \\(|x - \\tilde{x}| < \\varepsilon\\) für ein \\(\\varepsilon > 0\\) gelten.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 83-84"
        }
      ],
      "flashcards": [
        {
          "front": "Stetigkeit in \\(\\tilde{x}\\)",
          "back": "\\(\\lim_{x \\to \\tilde{x}} f(x)\\) existiert und ist gleich \\(f(\\tilde{x})\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 77"
        },
        {
          "front": "Anschauliche Vorstellung von Stetigkeit",
          "back": "Keine Brüche, Sprünge oder Risse — der Graph lässt sich in einem Zug zeichnen",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 76"
        },
        {
          "front": "Auf ganz \\(\\mathbb{R}\\) stetige Standardfunktionen",
          "back": "Polynome, \\(e^x\\), \\(\\ln x\\), \\(\\sin x\\), \\(\\cos x\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 80"
        },
        {
          "front": "Satz über Kombinationen stetiger Funktionen",
          "back": "Summen, Differenzen, Produkte, Quotienten und Kompositionen stetiger Funktionen sind (wo definiert) stetig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 81"
        },
        {
          "front": "Globales Maximum in \\(\\tilde{x}\\)",
          "back": "\\(f(\\tilde{x}) \\ge f(x)\\) für alle \\(x \\in D\\); bei \\(>\\): strenges Maximum",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 83"
        },
        {
          "front": "Lokales Maximum in \\(\\tilde{x}\\)",
          "back": "Es gibt \\(\\varepsilon > 0\\) mit \\(f(\\tilde{x}) \\ge f(x)\\) für alle \\(x \\in D\\) mit \\(|x - \\tilde{x}| < \\varepsilon\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 84"
        }
      ],
      "exercises": []
    },
    {
      "id": "differenzialrechnung",
      "title": "Differenzialrechnung",
      "icon": "🎢",
      "cards": [
        {
          "t": "Von der Sekante zur Tangente",
          "b": "Die Steigung der Sekante zwischen zwei Punkten am Funktionsgraphen ist \\(\\frac{\\Delta f}{\\Delta x}\\) mit \\(\\Delta f := f(x) - f(x_0)\\) und \\(\\Delta x := x - x_0\\); sie gibt die Änderung von \\(f\\) pro \\(\\Delta x\\) an. Für die Steigung der Tangente in \\(x_0\\) muss \\(\\Delta x\\) immer kleiner werden: Im Grenzwertprozess \\(x \\to x_0\\) gehen die Sekanten in die Tangente über.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 86-88"
        },
        {
          "t": "Differenzierbarkeit und Differenzialquotient",
          "b": "Sei \\(f: I \\to \\mathbb{R}\\) auf einem Intervall \\(I \\subseteq \\mathbb{R}\\) definiert. \\(f\\) ist in \\(x_0 \\in I\\) differenzierbar, wenn der Grenzwert \\[f'(x_0) := \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}\\] (Differenzialquotient) existiert; \\(f'(x_0)\\) heißt dann Ableitung von \\(f\\) in \\(x_0\\). \\(f\\) heißt differenzierbar auf \\(I\\), wenn \\(f\\) in allen \\(x_0 \\in I\\) differenzierbar ist.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 89"
        },
        {
          "t": "Bedeutung der Ableitung",
          "b": "Die Ableitung gibt die Steigung von \\(f\\) im betrachteten Punkt an und beschreibt somit die lokale Änderung von \\(f\\).",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 90"
        },
        {
          "t": "Alternative h-Schreibweise",
          "b": "Mit ihr lässt sich zumeist etwas besser rechnen: \\[f'(x) := \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}\\] Nichts von Substanz ändert sich: Der betrachtete Punkt heißt \\(x\\) statt \\(x_0\\), der Abstand \\(h\\).",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 91-92"
        },
        {
          "t": "Notationen der Ableitung",
          "b": "Statt \\(f'(x)\\) schreibt man häufig \\(\\frac{df(x)}{dx}\\) oder — wenn \\(f\\) von der Zeit abhängt — \\(\\dot{f}(t)\\) (bei Physikern beliebt). Das Intervall \\(I\\) wird zumeist als offen angenommen, weil das in der Theorie Vorteile bringt.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 94"
        },
        {
          "t": "Ableitung von x² über den Differenzialquotienten",
          "b": "Sei \\(f(x) := x^2\\). Es gilt \\[\\frac{f(x+h) - f(x)}{h} = \\frac{(x+h)^2 - x^2}{h} = \\frac{2hx + h^2}{h} = 2x + h\\] und somit \\(f'(x) = \\lim_{h \\to 0}(2x + h) = 2x\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 95"
        },
        {
          "t": "Nicht jede Funktion ist differenzierbar",
          "b": "Die Funktion \\(f(x) := |x|\\) ist im Punkt 0 nicht differenzierbar, denn \\[\\frac{|0 + h| - |0|}{h} = \\frac{|h|}{h}\\] ist für \\(h \\to 0\\) nicht konvergent. Die behandelten Standardfunktionen (Exponentialfunktion, Polynome, Sinus, …) sind dagegen auf ihrem Definitionsbereich differenzierbar.",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 96-97"
        },
        {
          "t": "Ableitungsregeln",
          "b": "Sind \\(f\\) und \\(g\\) differenzierbar (und die Ausdrücke definiert), gilt mit konstantem \\(c \\in \\mathbb{R}\\): \\[(f + g)'(x) = f'(x) + g'(x), \\quad (c \\cdot f)'(x) = c \\cdot f'(x) \\;\\text{(Linearität)}\\] \\[(f \\cdot g)'(x) = f'(x)g(x) + f(x)g'(x) \\;\\text{(Produktregel)}\\] \\[\\left(\\frac{f}{g}\\right)'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)} \\;\\text{(Quotientenregel)}\\] \\[(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x) \\;\\text{(Kettenregel)}\\]",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          "t": "Wichtige Ableitungen (zum Merken)",
          "b": "\\[(x^s)' = s \\cdot x^{s-1} \\;(s \\in \\mathbb{R}), \\qquad (\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}\\] \\[(a_0 + a_1 x + \\ldots + a_n x^n)' = a_1 + 2a_2 x + \\ldots + n a_n x^{n-1}\\] \\[(e^x)' = e^x, \\qquad (\\ln|x|)' = \\frac{1}{x}\\] \\[(\\sin x)' = \\cos x, \\qquad (\\cos x)' = -\\sin x\\] \\[(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x\\] Bitte die jeweiligen Definitionsbereiche beachten!",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 99"
        },
        {
          "t": "Ableitung von x^x",
          "b": "Für \\(f: \\,]0, \\infty[ \\to \\mathbb{R},\\; x \\mapsto x^x\\) gilt: \\[f'(x) = \\frac{d}{dx}\\left(e^{\\ln(x^x)}\\right) = \\frac{d}{dx}\\left(e^{x \\ln x}\\right) = e^{x \\ln x} \\cdot \\frac{d}{dx}(x \\ln x) = x^x(\\ln x + 1)\\]",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 100"
        },
        {
          "t": "Differenzierbar ⇒ stetig",
          "b": "Für differenzierbares \\(f\\) gilt \\[\\lim_{x \\to x_0}(f(x) - f(x_0)) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} \\cdot \\lim_{x \\to x_0}(x - x_0) = f'(x_0) \\cdot 0 = 0\\] Das sagt uns: Jede differenzierbare Funktion ist stetig.",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 102"
        },
        {
          "t": "Höhere Ableitungen",
          "b": "Ist die Ableitung \\(f'\\) wiederum differenzierbar, erhält man die zweite Ableitung \\(f'' := (f')' = \\frac{d^2 f}{dx^2}\\). Ist \\(f\\) insgesamt \\(k\\)-mal differenzierbar, erhält man die \\(k\\)-te Ableitung \\[f^{(k)} = \\frac{d^k f}{dx^k}\\] Die 0-te Ableitung ist \\(f^{(0)} := f\\), die Funktion selbst. Achtung: \\(f^k\\) statt \\(f^{(k)}\\) zu schreiben ist falsch — die Klammern vermeiden die Verwechselung mit der \\(k\\)-ten Potenz.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 103-105"
        },
        {
          "t": "Geschwindigkeit und Beschleunigung",
          "b": "Ist \\(x(t)\\) eine zweimal differenzierbare Ortsfunktion eines Teilchens, so heißt die erste Ableitung Geschwindigkeit \\(v(t) = \\dot{x}(t)\\) und die zweite Ableitung Beschleunigung \\(a(t) = \\dot{v}(t) = \\ddot{x}(t)\\). Die Formelzeichen kommen von velocity und acceleration.",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 106"
        },
        {
          "t": "Notwendige Bedingung für lokale Extrema",
          "b": "Sei \\(f: D \\to \\mathbb{R}\\) differenzierbar und \\(O \\subseteq D\\) eine \\(\\varepsilon\\)-Umgebung von \\(x_0\\). Hat \\(f\\) in \\(x_0\\) ein lokales Minimum oder Maximum, dann gilt \\(f'(x_0) = 0\\).",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 108"
        },
        {
          "t": "Hinreichendes Kriterium über die n-te Ableitung",
          "b": "Sei \\(f\\) \\(n\\)-mal differenzierbar und \\(x_0\\) mit \\[f'(x_0) = \\ldots = f^{(n-1)}(x_0) = 0, \\quad f^{(n)}(x_0) \\ne 0\\] Ist \\(n\\) gerade: \\(f\\) nimmt in \\(x_0\\) ein lokales Maximum an, falls \\(f^{(n)}(x_0) < 0\\), und ein lokales Minimum, falls \\(f^{(n)}(x_0) > 0\\). Ist \\(n\\) ungerade, nimmt \\(f\\) in \\(x_0\\) weder Minimum noch Maximum an.",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 109"
        },
        {
          "t": "Beispiel: Extrema von x² − 2x + 5 auf [−2, 2]",
          "b": "\\(f'(x) = 2x - 2\\), \\(f''(x) = 2\\). Einzige Nullstelle der Ableitung: \\(x = 1\\) mit \\(f''(1) = 2 > 0\\) — dort liegt ein lokales Minimum mit \\(f(1) = 4\\). An den Rändern gilt \\(f(-2) = 13\\), \\(f(2) = 5\\); da \\(f\\) auf \\([-2, 1[\\) streng monoton fällt und auf \\(]1, 2]\\) streng monoton steigt, liegen bei \\(x = \\pm 2\\) lokale Maxima. Vergleich der Funktionswerte: globales Minimum \\(y = 4\\) bei \\(x = 1\\), globales Maximum \\(y = 13\\) bei \\(x = -2\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 110-111"
        },
        {
          "t": "Warnung: Das Schulkriterium ist nicht die ganze Weisheit",
          "b": "In der Schule wurde oft gelehrt: kritische Stellen über die Nullstellen der ersten Ableitung finden und in die zweite Ableitung einsetzen; je nach Vorzeichen liegt ein Maximum oder Minimum vor. Das funktioniert manchmal, ist aber nach dem Kriterium über die \\(n\\)-te Ableitung nicht die ganze Weisheit (Gegenbeispiel aus der Vorlesung: \\(f(x) = x^4\\)).",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 112"
        },
        {
          "t": "Taylor-Formel und Taylor-Polynom",
          "b": "Sei \\(I \\subset \\mathbb{R}\\) ein Intervall, \\(x_0, x \\in I\\) und \\(f: I \\to \\mathbb{R}\\) \\(n\\)-mal differenzierbar. Dann gilt: \\[f(x) = \\sum_{i=0}^{n} \\frac{f^{(i)}(x_0)}{i!}(x - x_0)^i + R^{n,x_0}_f(x)\\] Die gesamte Gleichung heißt Taylor-Formel, die Summe Taylor-Polynom \\(T^{n,x_0}_f\\) \\(n\\)-ter Ordnung von \\(f\\) mit Entwicklungspunkt \\(x_0\\), der letzte Term Restglied \\(R^{n,x_0}_f\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 113"
        },
        {
          "t": "Bedeutung des Taylor-Polynoms",
          "b": "Das Taylor-Polynom stellt eine Approximation (Näherung) einer geeigneten Funktion durch Polynome dar. Das Restglied gibt den Fehler an, der bei dieser Näherung gemacht wird.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 114"
        },
        {
          "t": "Taylor-Polynom der Exponentialfunktion",
          "b": "Für \\(f(x) = e^x\\) um den Entwicklungspunkt \\(x_0 = 0\\): Beim Ableiten ändert sich die Funktion nicht, daher ist \\(f^{(i)}(0) = e^0 = 1\\) für alle \\(i \\in \\mathbb{N}\\) und \\[T^{n,0}_f(x) = \\sum_{i=0}^{n} \\frac{f^{(i)}(0)}{i!}(x - 0)^i = \\sum_{i=0}^{n} \\frac{1}{i!} x^i\\]",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 115"
        }
      ],
      "questions": [
        {
          "q": "Was ist eine Sekante, was eine Tangente?",
          "a": "Die Sekante verbindet zwei Punkte am Funktionsgraphen; ihre Steigung \\(\\frac{\\Delta f}{\\Delta x}\\) gibt die Änderung von \\(f\\) pro \\(\\Delta x\\) an. Lässt man \\(\\Delta x\\) immer kleiner werden (\\(x \\to x_0\\)), gehen die Sekanten in die Tangente in \\(x_0\\) über, deren Steigung die Ableitung ist.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 86-88"
        },
        {
          "q": "Wie ist die Differenzierbarkeit von f in x₀ definiert?",
          "a": "\\(f\\) ist in \\(x_0\\) differenzierbar, wenn der Differenzialquotient \\(f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}\\) existiert; \\(f'(x_0)\\) heißt dann Ableitung von \\(f\\) in \\(x_0\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 89"
        },
        {
          "q": "Wie lauten Produkt-, Quotienten- und Kettenregel?",
          "a": "Produktregel: \\((fg)' = f'g + fg'\\). Quotientenregel: \\(\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}\\). Kettenregel: \\((f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          "q": "Welche Ableitungen haben \\(e^x\\), \\(\\ln|x|\\), \\(\\sin x\\), \\(\\cos x\\) und \\(\\tan x\\)?",
          "a": "\\((e^x)' = e^x\\); \\((\\ln|x|)' = \\frac{1}{x}\\); \\((\\sin x)' = \\cos x\\); \\((\\cos x)' = -\\sin x\\); \\((\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 99"
        },
        {
          "q": "Ist jede differenzierbare Funktion stetig? Gilt auch die Umkehrung?",
          "a": "Jede differenzierbare Funktion ist stetig (Rechnung über den Differenzialquotienten). Die Umkehrung gilt nicht: \\(f(x) = |x|\\) ist im Punkt 0 nicht differenzierbar, da \\(\\frac{|h|}{h}\\) für \\(h \\to 0\\) nicht konvergiert.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 96, 102"
        },
        {
          "q": "Was ist die 0-te Ableitung und warum schreibt man f⁽ᵏ⁾ mit Klammern?",
          "a": "\\(f^{(0)} := f\\), also die Funktion selbst. Die Klammern um \\(k\\) vermeiden die Verwechselung mit der \\(k\\)-ten Potenz — \\(f^k\\) zu schreiben ist grob verwirrend und falsch.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 105"
        },
        {
          "q": "Welche notwendige Bedingung gilt für lokale Extrema differenzierbarer Funktionen?",
          "a": "Hat \\(f\\) in \\(x_0\\) ein lokales Minimum oder Maximum, dann gilt \\(f'(x_0) = 0\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 108"
        },
        {
          "q": "Wie lautet das hinreichende Kriterium für Extrema über die n-te Ableitung?",
          "a": "Gilt \\(f'(x_0) = \\ldots = f^{(n-1)}(x_0) = 0\\) und \\(f^{(n)}(x_0) \\ne 0\\): Bei geradem \\(n\\) liegt ein lokales Maximum vor, falls \\(f^{(n)}(x_0) < 0\\), ein lokales Minimum, falls \\(f^{(n)}(x_0) > 0\\). Bei ungeradem \\(n\\) liegt weder Minimum noch Maximum vor.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 109"
        },
        {
          "q": "Was besagt die Taylor-Formel?",
          "a": "\\(f(x) = \\sum_{i=0}^{n} \\frac{f^{(i)}(x_0)}{i!}(x - x_0)^i + R^{n,x_0}_f(x)\\). Die Summe ist das Taylor-Polynom \\(n\\)-ter Ordnung mit Entwicklungspunkt \\(x_0\\) (eine Näherung von \\(f\\) durch Polynome), das Restglied gibt den Fehler der Näherung an.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 113-114"
        },
        {
          "q": "Wie heißen erste und zweite Ableitung der Ortsfunktion x(t) in der Physik?",
          "a": "Erste Ableitung: Geschwindigkeit \\(v(t) = \\dot{x}(t)\\). Zweite Ableitung: Beschleunigung \\(a(t) = \\dot{v}(t) = \\ddot{x}(t)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 106"
        }
      ],
      "flashcards": [
        {
          "front": "Differenzialquotient",
          "back": "\\(f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 89"
        },
        {
          "front": "h-Schreibweise der Ableitung",
          "back": "\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 91"
        },
        {
          "front": "Produktregel",
          "back": "\\((f \\cdot g)' = f'g + fg'\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          "front": "Quotientenregel",
          "back": "\\(\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          "front": "Kettenregel",
          "back": "\\((f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          "front": "\\((x^s)'\\) und \\((\\sqrt{x})'\\)",
          "back": "\\(s \\cdot x^{s-1}\\) bzw. \\(\\frac{1}{2\\sqrt{x}}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 99"
        },
        {
          "front": "\\((\\sin x)'\\), \\((\\cos x)'\\), \\((\\tan x)'\\)",
          "back": "\\(\\cos x\\); \\(-\\sin x\\); \\(\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 99"
        },
        {
          "front": "Zusammenhang differenzierbar / stetig",
          "back": "Jede differenzierbare Funktion ist stetig; Gegenbeispiel für die Umkehrung: \\(|x|\\) in 0",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 96, 102"
        },
        {
          "front": "Notwendige Bedingung lokales Extremum",
          "back": "\\(f'(x_0) = 0\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 108"
        },
        {
          "front": "Taylor-Polynom \\(n\\)-ter Ordnung",
          "back": "\\(T^{n,x_0}_f(x) = \\sum_{i=0}^{n} \\frac{f^{(i)}(x_0)}{i!}(x - x_0)^i\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 113"
        },
        {
          "front": "Taylor-Polynom von \\(e^x\\) um 0",
          "back": "\\(\\sum_{i=0}^{n} \\frac{x^i}{i!}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 115"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 18",
          "task": "Zeigen Sie, dass die Ableitung einer geraden Funktion ungerade ist, und dass die Ableitung einer ungeraden Funktion gerade ist.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 18"
        },
        {
          "ref": "Aufgabe 19",
          "task": "a) Differenzieren Sie die Funktion \\(h(x) := x \\cdot \\cos x \\cdot e^x\\).<br>b) Leiten Sie \\(h'\\) ein weiteres Mal ab.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 19"
        },
        {
          "ref": "Aufgabe 20",
          "task": "Betrachten Sie \\(f(x) := 3x^3 + x\\). Bilden Sie die Ableitung dieser Funktion unter Verwendung des Differentialquotienten.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 20"
        },
        {
          "ref": "Aufgabe 21",
          "task": "Differenzieren Sie die Funktionen \\[f_1(x) := \\sqrt{1 - \\cos x}, \\quad f_2(x) := \\ln\\sqrt{x}, \\quad f_3(x) := e^{(e^x)}\\] und geben Sie zuvor den jeweiligen Definitionsbereich an.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 21"
        },
        {
          "ref": "Aufgabe 22",
          "task": "Bestimmen Sie sämtliche lokalen Extrema von \\[f: \\,]0, \\infty[ \\to \\mathbb{R}, \\quad f(x) := \\frac{1}{x} \\ln x\\]",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 22"
        },
        {
          "ref": "Aufgabe 23",
          "task": "Betrachten Sie \\(f(x) = 3x^3 + 2x^2 + 2x + 2\\). Bilden Sie \\(T^{3}_{f,0}(x)\\). Sind Sie vom Ergebnis überrascht?",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 23"
        },
        {
          "ref": "Aufgabe 24",
          "task": "Betrachten Sie \\(f(x) = \\sin x\\). Berechnen Sie \\(T^{1}_{f,0}(x)\\), \\(T^{2}_{f,0}(x)\\) und \\(T^{3}_{f,0}(x)\\) und zusätzlich \\(T^{1}_{f,1}(x)\\), \\(T^{2}_{f,1}(x)\\) und \\(T^{3}_{f,1}(x)\\). Skizzieren Sie alle Taylorpolynome zusammen mit der Sinusfunktion auf \\([-\\pi, \\pi]\\). Stellen Sie etwas fest?",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 24"
        }
      ]
    },
    {
      "id": "integralrechnung",
      "title": "Integralrechnung",
      "icon": "📊",
      "cards": [
        {
          "t": "Grundidee der Integration",
          "b": "Die Fläche zwischen einer Funktion und der x-Achse wird von oben und unten durch Rechtecke approximiert. Ist der Graph eine Gerade, lässt sich die Fläche einfach durch Dreiecke und Rechtecke zusammensetzen — bei komplizierteren Funktionen ist das nicht so einfach.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 116-117"
        },
        {
          "t": "Zerlegung des Intervalls",
          "b": "Das Intervall \\([a, b]\\) wird in \\(n\\) gleich große Teile mit Randpunkten \\(a =: x_0 < x_1 < \\ldots < x_n := b\\) unterteilt. Die Grundseiten der Rechtecke sind jeweils \\(\\Delta x := \\frac{b-a}{n}\\), die Randpunkte \\(x_k = a + k\\Delta x\\) \\((k = 0, \\ldots, n)\\) und die Flächen der \\(n\\) Rechtecke \\(F_k = f(x_{k-1})\\Delta x\\). Die gesamte Rechtecksfläche ist \\[F(n) = \\sum_{k=1}^{n} F_k\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 118-119"
        },
        {
          "t": "Das bestimmte Integral",
          "b": "Für stetige (oder monotone) Funktionen \\(f: [a, b] \\to \\mathbb{R}\\) existiert der Grenzwert von \\(F(n)\\) und \\[\\int_a^b f(x)\\,dx := \\lim_{n\\to\\infty} F(n)\\] ist das Integral von \\(f\\) über \\([a, b]\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 120"
        },
        {
          "t": "Rechenregeln für Integrale",
          "b": "\\[\\int_a^a f(x)\\,dx = 0, \\qquad \\int_b^a f(x)\\,dx := -\\int_a^b f(x)\\,dx\\] \\[\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx = \\int_a^c f(x)\\,dx\\] Linearität: \\[\\int_a^b (f(x) + g(x))\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx, \\quad \\int_a^b \\lambda f(x)\\,dx = \\lambda \\int_a^b f(x)\\,dx\\] Abschätzungen: \\[\\int_a^b f(x)\\,dx \\le \\int_a^b |f(x)|\\,dx, \\qquad \\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx \\text{ falls } f(x) \\le g(x) \\text{ für alle } x \\in \\,]a,b[\\]",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 121"
        },
        {
          "t": "Stammfunktion",
          "b": "Sei \\(f: [a, b] \\to \\mathbb{R}\\). Eine differenzierbare Funktion \\(F: [a, b] \\to \\mathbb{R}\\) heißt Stammfunktion von \\(f\\), wenn gilt: \\(F' = f\\). Ist \\(F\\) eine Stammfunktion von \\(f\\), dann auch \\(F + c\\) für eine beliebige Konstante \\(c \\in \\mathbb{R}\\), denn \\((F + c)' = F' + 0 = F'\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 122"
        },
        {
          "t": "Unbestimmtes Integral",
          "b": "Um sich nicht auf eine bestimmte Stammfunktion einigen zu müssen, schreibt man \\[\\int f(x)\\,dx = F(x) + c\\] ohne Grenzen am Integralsymbol; \\(\\int f(x)\\,dx\\) heißt unbestimmtes Integral von \\(f\\). Anders ausgedrückt: Das unbestimmte Integral bezeichnet die Gesamtheit aller Stammfunktionen.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 123"
        },
        {
          "t": "Die Bedeutung der Integrationskonstanten",
          "b": "Die Konstante \\(c\\) wird oft gleich Null gesetzt — ohne Schaden aber nur, wenn lediglich Interesse an einer möglichen Stammfunktion besteht. Beispiel 2. Newton'sches Gesetz mit \\(\\ddot{x}(t) = a\\): Stammfunktionen liefern \\(\\dot{x}(t) = at + v_0\\) und \\(x(t) = \\frac{a}{2}t^2 + v_0 t + x_0\\). Werden die Konstanten vernachlässigt, verschwinden plötzlich Anfangsort \\(x_0\\) und Anfangsgeschwindigkeit \\(v_0\\)!",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 124-126"
        },
        {
          "t": "Hauptsatz der Differential- und Integralrechnung",
          "b": "Sei \\(f: [a, b] \\to \\mathbb{R}\\) eine stetige Funktion, dann gibt es eine Stammfunktion \\(F\\) zu \\(f\\) und \\[\\int_a^b f(x)\\,dx = F(b) - F(a)\\] Der Hauptsatz verbindet also bestimmtes und unbestimmtes Integral und liefert die Berechnung des bestimmten Integrals. Übliche Kurzschreibweisen: \\(F(x)\\big|_a^b\\) bzw. \\([F(x)]_a^b\\).",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 127-128"
        },
        {
          "t": "Beispiel: Fläche unter x² auf [−1, 1]",
          "b": "\\[\\int_{-1}^{1} x^2\\,dx = \\left[\\frac{x^3}{3} + c\\right]_{-1}^{1} = \\left(\\frac{1}{3} + c\\right) - \\left(\\frac{-1}{3} + c\\right) = \\frac{2}{3}\\] Die Konstante der Stammfunktion spielt bei der Berechnung keine Rolle — das bestimmte Integral ist unabhängig von der Wahl der Stammfunktion.",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 129-130"
        },
        {
          "t": "Partielle Integration",
          "b": "Seien \\(f, g\\) auf \\([a, b]\\) stetig differenzierbar. Aus der Produktregel \\((f \\cdot g)' = f'g + fg'\\) und dem Hauptsatz folgt: \\[\\int_a^b f'(x) g(x)\\,dx = f(x)g(x)\\Big|_a^b - \\int_a^b f(x) g'(x)\\,dx\\] Oft auch in der Form \\[\\int_a^b f(x) g(x)\\,dx = F(x)g(x)\\Big|_a^b - \\int_a^b F(x) g'(x)\\,dx\\]",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 131-132"
        },
        {
          "t": "Beispiel zur partiellen Integration",
          "b": "Bei der Integration von \\(x \\cdot e^x\\) wählt man \\(f(x) := x\\) und \\(g'(x) := e^x\\): \\[\\int_a^b x e^x\\,dx = x e^x\\Big|_a^b - \\int_a^b 1 \\cdot e^x\\,dx = (x - 1)e^x\\Big|_a^b\\]",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 133"
        }
      ],
      "questions": [
        {
          "q": "Was ist die Grundidee bei der Berechnung von bestimmten Integralen?",
          "a": "Die Fläche zwischen Funktion und x-Achse wird von oben und unten durch Rechtecke approximiert. Verkleinert man die Grundseiten (\\(n \\to \\infty\\)), erhält man im Grenzwert das Integral: \\(\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty} F(n)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 116-120"
        },
        {
          "q": "Für welche Funktionen existiert das Integral laut Vorlesung?",
          "a": "Für stetige (oder monotone) Funktionen \\(f: [a, b] \\to \\mathbb{R}\\) existiert der Grenzwert von \\(F(n)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 120"
        },
        {
          "q": "Was ist eine Stammfunktion?",
          "a": "Eine differenzierbare Funktion \\(F\\) mit \\(F' = f\\). Mit \\(F\\) ist auch \\(F + c\\) für jede Konstante \\(c \\in \\mathbb{R}\\) eine Stammfunktion.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 122"
        },
        {
          "q": "Was bezeichnet das unbestimmte Integral?",
          "a": "Die Gesamtheit aller Stammfunktionen: \\(\\int f(x)\\,dx = F(x) + c\\), geschrieben ohne Grenzen am Integralsymbol.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 123"
        },
        {
          "q": "Was besagt der Hauptsatz der Differential- und Integralrechnung?",
          "a": "Zu jeder stetigen Funktion \\(f: [a,b] \\to \\mathbb{R}\\) gibt es eine Stammfunktion \\(F\\), und es gilt \\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 127"
        },
        {
          "q": "Warum darf die Integrationskonstante nicht immer vernachlässigt werden?",
          "a": "Nur wenn lediglich eine mögliche Stammfunktion interessiert, kann \\(c = 0\\) gesetzt werden. In physikalischen Anwendungen haben die Konstanten große Bedeutung — beim Newton-Beispiel sind sie Anfangsgeschwindigkeit \\(v_0\\) und Anfangsort \\(x_0\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 124-126"
        },
        {
          "q": "Wie lautet die Formel der partiellen Integration und woraus wird sie hergeleitet?",
          "a": "\\(\\int_a^b f'g\\,dx = fg\\big|_a^b - \\int_a^b fg'\\,dx\\). Sie folgt aus der Produktregel \\((fg)' = f'g + fg'\\) zusammen mit dem Hauptsatz der Differenzial- und Integralrechnung.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 131-132"
        },
        {
          "q": "Warum ist das bestimmte Integral unabhängig von der Wahl der Stammfunktion?",
          "a": "Beim Auswerten \\(F(b) - F(a)\\) hebt sich die Konstante weg, wie das Folienbeispiel \\(\\int_{-1}^1 x^2 dx = (\\frac{1}{3} + c) - (-\\frac{1}{3} + c) = \\frac{2}{3}\\) zeigt.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 130"
        }
      ],
      "flashcards": [
        {
          "front": "Definition des bestimmten Integrals",
          "back": "\\(\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty} F(n)\\), Grenzwert der Rechteckssummen (für stetige oder monotone \\(f\\))",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 120"
        },
        {
          "front": "\\(\\int_a^a f(x)\\,dx\\) und \\(\\int_b^a f(x)\\,dx\\)",
          "back": "\\(0\\) bzw. \\(-\\int_a^b f(x)\\,dx\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 121"
        },
        {
          "front": "Stammfunktion",
          "back": "Differenzierbares \\(F\\) mit \\(F' = f\\); mit \\(F\\) auch \\(F + c\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 122"
        },
        {
          "front": "Unbestimmtes Integral",
          "back": "\\(\\int f(x)\\,dx = F(x) + c\\) — die Gesamtheit aller Stammfunktionen",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 123"
        },
        {
          "front": "Hauptsatz der Differential- und Integralrechnung",
          "back": "\\(f\\) stetig \\(\\Rightarrow\\) es gibt eine Stammfunktion \\(F\\) und \\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 127"
        },
        {
          "front": "Partielle Integration",
          "back": "\\(\\int_a^b f'g\\,dx = fg\\big|_a^b - \\int_a^b fg'\\,dx\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 131"
        },
        {
          "front": "\\(\\int_a^b x e^x\\,dx = \\;?\\)",
          "back": "\\((x - 1)e^x\\big|_a^b\\) (partielle Integration mit \\(f = x\\), \\(g' = e^x\\))",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 133"
        },
        {
          "front": "Newton-Beispiel: Bedeutung der Integrationskonstanten",
          "back": "\\(v_0\\) = Anfangsgeschwindigkeit, \\(x_0\\) = Anfangsort — vernachlässigt man sie, verschwinden diese Informationen",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 125-126"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 25",
          "task": "a) Was ist die Grundidee bei der Berechnung von bestimmten Integralen? Fertigen Sie Skizzen an.<br>b) Sind differenzierbare Funktionen integrierbar?<br>c) Was besagt der Hauptsatz der Differenzial- und Integralrechnung?",
          "note": "Die Theoriefragen sind auch im Modus „Fragen“ dieses Themas mit Folienbeleg enthalten.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 25"
        },
        {
          "ref": "Aufgabe 26",
          "task": "Begründen Sie durch eine allgemeine Rechnung (unter Verwendung von bestimmten und unbestimmten Integralen), warum die Integrationskonstante bei der Flächenberechnung vernachlässigt werden kann.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 26"
        },
        {
          "ref": "Aufgabe 27",
          "task": "Berechnen Sie folgende Stammfunktionen: \\[\\int \\frac{1}{x^3}\\,dx, \\quad \\int \\cos x \\sin x\\,dx, \\quad \\int x \\sin x\\,dx, \\quad \\int \\cos^2 x\\,dx\\]",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 27"
        }
      ]
    },
    {
      "id": "vektorraeume",
      "title": "Vektorräume",
      "icon": "➡️",
      "cards": [
        {
          "t": "Der Vektorraum Rⁿ",
          "b": "Der \\(\\mathbb{R}^n\\) ist ein so genannter Vektorraum. Seine Vektoren haben die Gestalt \\[\\vec{x} := \\begin{pmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{pmatrix}, \\quad x_1, \\ldots, x_n \\in \\mathbb{R}\\] Die Zahlen \\(x_i\\) heißen Koordinaten von \\(\\vec{x}\\). Die natürliche Zahl \\(n\\) im Exponenten von \\(\\mathbb{R}^n\\) gibt die Anzahl der Koordinaten seiner Vektoren an.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 135"
        },
        {
          "t": "Nullvektor und Vektoraddition",
          "b": "Ein spezieller Vektor ist der Nullvektor \\(\\vec{0}\\), dessen Koordinaten alle 0 sind. Addition von Vektoren erfolgt koordinatenweise: \\[\\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} + \\begin{pmatrix} y_1 \\\\ \\vdots \\\\ y_n \\end{pmatrix} := \\begin{pmatrix} x_1 + y_1 \\\\ \\vdots \\\\ x_n + y_n \\end{pmatrix}\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 136"
        },
        {
          "t": "Multiplikation mit einem Skalar",
          "b": "\\[\\lambda \\cdot \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} := \\begin{pmatrix} \\lambda x_1 \\\\ \\vdots \\\\ \\lambda x_n \\end{pmatrix}\\] Zahlenbeispiel von den Folien: \\[2 \\cdot \\begin{pmatrix} 3 \\\\ 2 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 4 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 5 \\\\ 2 \\end{pmatrix}\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 137-138"
        },
        {
          "t": "Linearkombination",
          "b": "Ein Vektor \\(\\vec{v} \\in \\mathbb{R}^n\\) heißt Linearkombination der Vektoren \\(\\vec{v}_1, \\ldots, \\vec{v}_k \\in \\mathbb{R}^n\\), wenn er sich mit \\(\\lambda_1, \\ldots, \\lambda_k \\in \\mathbb{R}\\) darstellen lässt als \\[\\vec{v} = \\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k =: \\sum_{i=1}^{k} \\lambda_i \\vec{v}_i\\] Sprechweise: \\(\\vec{v}\\) lässt sich aus \\(\\vec{v}_1, \\ldots, \\vec{v}_k\\) linear kombinieren.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 139"
        },
        {
          "t": "Beispiel einer Linearkombination",
          "b": "\\(\\vec{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}\\) soll aus \\(\\vec{v}_1 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\) und \\(\\vec{v}_2 = \\begin{pmatrix} 6 \\\\ 0 \\end{pmatrix}\\) linear kombiniert werden: \\[\\vec{v} = 5 \\vec{v}_1 + \\tfrac{1}{3} \\vec{v}_2, \\quad \\text{also } \\lambda_1 = 5,\\; \\lambda_2 = \\tfrac{1}{3}\\] Gegenbeispiel: \\((0, 0, 1)^T\\) ist aus \\((1, 0, 0)^T\\) und \\((0, 1, 0)^T\\) nicht linear kombinierbar — die dritte Koordinate liefert die unerfüllbare Gleichung \\(1 = 0\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 140-141"
        },
        {
          "t": "Lineare Abhängigkeit und Unabhängigkeit",
          "b": "Die Vektoren \\(\\vec{v}_1, \\ldots, \\vec{v}_k \\in \\mathbb{R}^n\\) heißen linear abhängig, wenn es \\(\\lambda_1, \\ldots, \\lambda_k \\in \\mathbb{R}\\) gibt, von denen mindestens eines ungleich Null ist, mit \\[\\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k = \\vec{0}\\] Es gibt dann eine Linearkombination, in der sich die Vektoren genau gegeneinander aufheben. Die Vektoren heißen linear unabhängig, wenn aus dieser Gleichung folgt, dass \\(\\lambda_1 = \\ldots = \\lambda_k = 0\\) gilt.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 143"
        },
        {
          "t": "Basis und Dimension",
          "b": "Eine minimale Menge von Vektoren des \\(\\mathbb{R}^n\\) heißt Basis, wenn sich mit ihnen durch Linearkombinationen jeder andere Vektor des \\(\\mathbb{R}^n\\) bilden lässt. Die Anzahl der Vektoren in einer Basis heißt Dimension.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 144"
        },
        {
          "t": "Standardbasis",
          "b": "Die Vektoren \\(\\vec{e}_1 = (1, 0, \\ldots, 0)^T\\), \\(\\vec{e}_2 = (0, 1, 0, \\ldots)^T\\), …, \\(\\vec{e}_n = (0, \\ldots, 0, 1)^T\\) bilden die so genannte Standardbasis des \\(\\mathbb{R}^n\\), was den \\(\\mathbb{R}^n\\) zu einem \\(n\\)-dimensionalen Vektorraum macht.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 145"
        }
      ],
      "questions": [
        {
          "q": "Definieren Sie den Vektorraum der reellen Zahlen (Rⁿ).",
          "a": "Der \\(\\mathbb{R}^n\\) ist ein Vektorraum mit Vektoren \\(\\vec{x} = (x_1, \\ldots, x_n)^T\\), \\(x_i \\in \\mathbb{R}\\). Die \\(x_i\\) heißen Koordinaten, \\(n\\) gibt deren Anzahl an. Addition und Skalarmultiplikation erfolgen koordinatenweise.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 135-137"
        },
        {
          "q": "Wann ist ein Vektor eine Linearkombination anderer Vektoren?",
          "a": "Wenn er sich als \\(\\vec{v} = \\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k\\) mit \\(\\lambda_i \\in \\mathbb{R}\\) darstellen lässt.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 139"
        },
        {
          "q": "Definieren Sie den Begriff der linearen Unabhängigkeit.",
          "a": "\\(\\vec{v}_1, \\ldots, \\vec{v}_k\\) heißen linear unabhängig, wenn aus \\(\\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k = \\vec{0}\\) folgt, dass \\(\\lambda_1 = \\ldots = \\lambda_k = 0\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 143"
        },
        {
          "q": "Wann heißen Vektoren linear abhängig?",
          "a": "Wenn es \\(\\lambda_1, \\ldots, \\lambda_k\\) gibt, von denen mindestens eines ungleich Null ist, sodass \\(\\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k = \\vec{0}\\) — es gibt also eine Linearkombination, in der sich die Vektoren genau gegeneinander aufheben.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 143"
        },
        {
          "q": "Was ist eine Basis und was ist die Dimension?",
          "a": "Eine Basis ist eine minimale Menge von Vektoren, mit denen sich durch Linearkombinationen jeder andere Vektor des \\(\\mathbb{R}^n\\) bilden lässt. Die Anzahl der Vektoren in einer Basis heißt Dimension.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 144"
        },
        {
          "q": "Was ist die Standardbasis des Rⁿ?",
          "a": "Die \\(n\\) Vektoren \\(\\vec{e}_1, \\ldots, \\vec{e}_n\\), bei denen jeweils genau eine Koordinate 1 und alle anderen 0 sind. Sie macht den \\(\\mathbb{R}^n\\) zu einem \\(n\\)-dimensionalen Vektorraum.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 145"
        }
      ],
      "flashcards": [
        {
          "front": "Koordinaten eines Vektors im \\(\\mathbb{R}^n\\)",
          "back": "Die Zahlen \\(x_1, \\ldots, x_n\\) in \\(\\vec{x} = (x_1, \\ldots, x_n)^T\\); \\(n\\) = Anzahl der Koordinaten",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 135"
        },
        {
          "front": "Vektoraddition und Skalarmultiplikation",
          "back": "Beides koordinatenweise: \\((\\vec{x} + \\vec{y})_i = x_i + y_i\\), \\((\\lambda\\vec{x})_i = \\lambda x_i\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 136-137"
        },
        {
          "front": "Linearkombination",
          "back": "\\(\\vec{v} = \\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k\\) mit \\(\\lambda_i \\in \\mathbb{R}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 139"
        },
        {
          "front": "Linear unabhängig",
          "back": "\\(\\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k = \\vec{0} \\;\\Rightarrow\\; \\lambda_1 = \\ldots = \\lambda_k = 0\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 143"
        },
        {
          "front": "Basis",
          "back": "Minimale Menge von Vektoren, aus denen sich jeder Vektor des \\(\\mathbb{R}^n\\) linear kombinieren lässt",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 144"
        },
        {
          "front": "Dimension",
          "back": "Anzahl der Vektoren in einer Basis",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 144"
        },
        {
          "front": "Standardbasis des \\(\\mathbb{R}^n\\)",
          "back": "\\(\\vec{e}_1, \\ldots, \\vec{e}_n\\) — je genau eine 1, sonst Nullen",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 145"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 28",
          "task": "Finden Sie diejenigen Zahlen \\(\\alpha \\in \\mathbb{R}\\), für die folgende Vektoren eine Basis des \\(\\mathbb{R}^3\\) bilden: \\[\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\quad \\begin{pmatrix} 2 \\\\ 0 \\\\ -2 \\end{pmatrix}, \\quad \\begin{pmatrix} 0 \\\\ \\alpha + 1 \\\\ 1 \\end{pmatrix}\\]",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 28"
        }
      ]
    },
    {
      "id": "matrizen",
      "title": "Matrizen",
      "icon": "🔢",
      "cards": [
        {
          "t": "Matrix",
          "b": "Für \\(a_{ij} \\in \\mathbb{R}\\), \\(i \\in \\{1, \\ldots, m\\}\\), \\(j \\in \\{1, \\ldots, n\\}\\) heißt \\[A := \\begin{pmatrix} a_{11} & a_{12} & \\ldots & a_{1n} \\\\ a_{21} & a_{22} & \\ldots & a_{2n} \\\\ \\vdots & & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\ldots & a_{mn} \\end{pmatrix} =: (a_{ij})\\] eine Matrix vom Format \\((m \\times n)\\) mit Einträgen aus \\(\\mathbb{R}\\). Der erste Index \\(i\\) heißt Zeilenindex, der zweite Spaltenindex. Die Menge aller \\((m \\times n)\\)-Matrizen wird als \\(M(m \\times n)\\) notiert.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 146-147"
        },
        {
          "t": "Einheitsmatrix",
          "b": "Eine sehr wichtige Matrix ist die Einheitsmatrix \\(E_n \\in M(n \\times n)\\) mit Einsen auf der Diagonalen und Nullen sonst. Beim Multiplizieren mit Matrizen übernimmt sie die Rolle, die die 1 bei den reellen Zahlen hat. Statt \\(E_n\\) wird häufig einfach \\(E\\) geschrieben, wenn \\(n\\) klar ist; in der Literatur findet sich auch \\(I_n\\) bzw. \\(I\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 148-149"
        },
        {
          "t": "Multiplikation von Matrizen",
          "b": "Seien \\(A := (a_{ij}) \\in M(m \\times n)\\) und \\(B := (b_{jk}) \\in M(n \\times p)\\). Dann ist das Matrixprodukt definiert als \\[AB := \\left(\\sum_{j=1}^{n} a_{ij} b_{jk}\\right)_{i = 1 \\ldots m,\\; k = 1 \\ldots p}\\] Anschaulich: Die Zeilen der linken Matrix werden auf die Spalten der rechten Matrix „gelegt“, aufeinanderliegende Einträge multipliziert und die Ergebnisse addiert.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 150-151"
        },
        {
          "t": "Matrixprodukt für (2×2)-Matrizen",
          "b": "\\[\\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} \\begin{pmatrix} b_{11} & b_{12} \\\\ b_{21} & b_{22} \\end{pmatrix} = \\begin{pmatrix} a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\\\ a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22} \\end{pmatrix}\\]",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 152"
        },
        {
          "t": "Matrix-Vektor-Produkt",
          "b": "Das Matrix-Vektor-Produkt \\(A\\vec{v}\\) ist als Spezialfall des Matrixproduktes erklärt, indem \\(\\vec{v}\\) als \\((n \\times 1)\\)-Matrix aufgefasst wird: \\[\\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} \\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = \\begin{pmatrix} a_{11}v_1 + a_{12}v_2 \\\\ a_{21}v_1 + a_{22}v_2 \\end{pmatrix}\\]",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 150, 153"
        },
        {
          "t": "Matrizenmultiplikation ist nicht kommutativ",
          "b": "Achtung: Die Matrizenmultiplikation ist allgemein nicht kommutativ!",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 155"
        },
        {
          "t": "Rang einer Matrix",
          "b": "Der Rang einer Matrix \\(A\\) (geschrieben Rang \\(A\\) oder rang \\(A\\)) ist die Anzahl ihrer linear unabhängigen Spaltenvektoren, was wiederum gleich der Anzahl ihrer linear unabhängigen Zeilenvektoren ist. Diese Aussage kann als Satz und Definition aufgefasst werden.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 154"
        },
        {
          "t": "Matrixsumme und Multiplikation mit Skalaren",
          "b": "Seien \\(A := (a_{ij})\\), \\(B := (b_{ij}) \\in M(m \\times n)\\) und \\(\\lambda \\in \\mathbb{R}\\): \\[A + B := (a_{ij} + b_{ij}), \\qquad \\lambda A := (\\lambda a_{ij})\\] Beispiel: \\(-\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} -1 & -2 \\\\ -3 & -4 \\end{pmatrix}\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 156-157"
        },
        {
          "t": "Diagonal- und Dreiecksmatrizen",
          "b": "Bei quadratischen Matrizen aus \\(M(n \\times n)\\): Eine Diagonalmatrix hat nur auf der Diagonalen Einträge \\(a_{ii}\\), sonst Nullen. Bei der oberen Dreiecksmatrix stehen beliebige Zahlen auf und über der Diagonalen (darunter Nullen), bei der unteren Dreiecksmatrix entsprechend auf und unter der Diagonalen.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 158"
        },
        {
          "t": "Transponierte und inverse Matrix",
          "b": "Aus \\(A := (a_{ij})\\) ergibt sich die transponierte Matrix durch \\(A^T := (a_{ji})\\) — Zeilen und Spalten werden vertauscht. Es gilt \\((AB)^T = B^T A^T\\). Eine quadratische Matrix \\(A\\) heißt invertierbar, wenn ein \\(B \\in M(n \\times n)\\) existiert mit \\(AB = E_n\\, (= BA)\\). Für \\(B\\) wird dann \\(A^{-1}\\) geschrieben; sie heißt Inverse von \\(A\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 159"
        },
        {
          "t": "Symmetrische Matrix",
          "b": "\\(A \\in M(n \\times n)\\) heißt symmetrisch, falls gilt: \\[A = A^T, \\quad \\text{d. h. } (a_{ij}) = (a_{ji})\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 160"
        }
      ],
      "questions": [
        {
          "q": "Was bedeutet das Format (m × n) einer Matrix und wie heißen die Indizes?",
          "a": "\\(m\\) Zeilen und \\(n\\) Spalten mit Einträgen \\(a_{ij}\\); der erste Index ist der Zeilenindex, der zweite der Spaltenindex.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 146"
        },
        {
          "q": "Wie ist das Matrixprodukt definiert und wann ist es überhaupt bildbar?",
          "a": "Für \\(A \\in M(m \\times n)\\) und \\(B \\in M(n \\times p)\\): \\(AB = \\left(\\sum_{j=1}^n a_{ij}b_{jk}\\right)\\). Zeilen der linken Matrix werden auf die Spalten der rechten gelegt, multipliziert und addiert.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 150-151"
        },
        {
          "q": "Ist die Matrizenmultiplikation kommutativ?",
          "a": "Nein — die Matrizenmultiplikation ist allgemein nicht kommutativ.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 155"
        },
        {
          "q": "Was ist der Rang einer Matrix?",
          "a": "Die Anzahl ihrer linear unabhängigen Spaltenvektoren, was gleich der Anzahl ihrer linear unabhängigen Zeilenvektoren ist.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 154"
        },
        {
          "q": "Welche besonderen Typen von Matrizen kennen Sie?",
          "a": "Einheitsmatrix, Diagonalmatrix, obere und untere Dreiecksmatrix, transponierte Matrix \\(A^T\\), invertierbare Matrizen mit Inverser \\(A^{-1}\\) und symmetrische Matrizen (\\(A = A^T\\)).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 148, 158-160"
        },
        {
          "q": "Wann heißt eine Matrix invertierbar?",
          "a": "Eine quadratische Matrix \\(A\\) heißt invertierbar, wenn ein \\(B \\in M(n \\times n)\\) existiert mit \\(AB = E_n = BA\\); \\(B\\) heißt dann Inverse \\(A^{-1}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 159"
        },
        {
          "q": "Welche Rolle spielt die Einheitsmatrix bei der Multiplikation?",
          "a": "Sie übernimmt die Rolle, die die 1 bei den reellen Zahlen übernimmt.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 149"
        },
        {
          "q": "Wie lautet die Transponierungsregel für ein Produkt?",
          "a": "\\((AB)^T = B^T A^T\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 159"
        }
      ],
      "flashcards": [
        {
          "front": "\\((m \\times n)\\)-Matrix",
          "back": "\\(m\\) Zeilen, \\(n\\) Spalten; Einträge \\(a_{ij}\\) mit Zeilenindex \\(i\\), Spaltenindex \\(j\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 146"
        },
        {
          "front": "Matrixprodukt \\(AB\\)",
          "back": "\\(\\left(\\sum_{j=1}^{n} a_{ij} b_{jk}\\right)\\) — Zeile mal Spalte",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 150"
        },
        {
          "front": "Ist \\(AB = BA\\)?",
          "back": "Allgemein nein — Matrizenmultiplikation ist nicht kommutativ",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 155"
        },
        {
          "front": "Rang einer Matrix",
          "back": "Anzahl der linear unabhängigen Spalten (= Anzahl der linear unabhängigen Zeilen)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 154"
        },
        {
          "front": "Transponierte \\(A^T\\)",
          "back": "\\((a_{ij})^T = (a_{ji})\\) — Zeilen und Spalten vertauscht; \\((AB)^T = B^T A^T\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 159"
        },
        {
          "front": "Invertierbare Matrix",
          "back": "Quadratisches \\(A\\) mit \\(AB = E_n = BA\\); \\(B = A^{-1}\\) heißt Inverse",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 159"
        },
        {
          "front": "Symmetrische Matrix",
          "back": "\\(A = A^T\\), d. h. \\(a_{ij} = a_{ji}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 160"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 29",
          "task": "Bestimmen Sie die Formate folgender Matrizen und berechnen Sie alle möglichen Produkte von je zwei dieser Matrizen: \\[A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\end{pmatrix}, \\quad C = \\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\\\ 3 & 1 \\end{pmatrix}\\] Fassen Sie kurz zusammen, was mit einem Vektor geschieht, wenn er mit der Matrix \\(A\\) multipliziert wird.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 29"
        },
        {
          "ref": "Aufgabe 30",
          "task": "Für welche reellen Werte von \\(\\alpha\\) ist die Matrix \\[A = \\begin{pmatrix} 2 & \\alpha \\\\ 1 & 3 \\end{pmatrix}\\] symmetrisch?",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 30"
        }
      ],
      "walkthroughs": [
        {
          "id": "matrixprodukt-2x2",
          "title": "Matrixprodukt Schritt für Schritt",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 150-152",
          "intro": "Die Zeilen der linken Matrix werden auf die Spalten der rechten Matrix gelegt; aufeinanderliegende Einträge werden multipliziert und addiert.",
          "visual": {
            "kind": "matrix",
            "matrices": [
              {
                "id": "A",
                "label": "Matrix A",
                "values": [
                  [2, 1],
                  [0, 3]
                ]
              },
              {
                "id": "B",
                "label": "Matrix B",
                "values": [
                  [4, 5],
                  [6, 7]
                ]
              },
              {
                "id": "C",
                "label": "Matrix C = AB",
                "values": [
                  [null, null],
                  [null, null]
                ]
              }
            ]
          },
          "steps": [
            {
              "title": "Erster Anteil für C11",
              "text": "Für C11 wird die erste Zeile von A mit der ersten Spalte von B kombiniert.",
              "highlights": [
                { "kind": "matrix-row", "matrix": "A", "row": 0, "role": "active" },
                { "kind": "matrix-col", "matrix": "B", "col": 0, "role": "active" },
                { "kind": "matrix-cell", "matrix": "A", "row": 0, "col": 0, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "B", "row": 0, "col": 0, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "C", "row": 0, "col": 0, "role": "target" }
              ],
              "values": [{ "kind": "matrix-cell", "matrix": "C", "row": 0, "col": 0, "value": 8 }],
              "formula": "C11 = 2 * 4 + 1 * 6",
              "product": "2 * 4 = 8",
              "sum": "8"
            },
            {
              "title": "C11 fertig addieren",
              "text": "Der zweite Anteil wird addiert; damit ist C11 berechnet.",
              "highlights": [
                { "kind": "matrix-row", "matrix": "A", "row": 0, "role": "active" },
                { "kind": "matrix-col", "matrix": "B", "col": 0, "role": "active" },
                { "kind": "matrix-cell", "matrix": "A", "row": 0, "col": 1, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "B", "row": 1, "col": 0, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "C", "row": 0, "col": 0, "role": "target" }
              ],
              "values": [{ "kind": "matrix-cell", "matrix": "C", "row": 0, "col": 0, "value": 14 }],
              "formula": "C11 = 2 * 4 + 1 * 6",
              "product": "1 * 6 = 6",
              "sum": "8 + 6 = 14"
            },
            {
              "title": "Erster Anteil für C12",
              "text": "Für C12 bleibt die erste Zeile von A aktiv, aber jetzt wird die zweite Spalte von B verwendet.",
              "highlights": [
                { "kind": "matrix-row", "matrix": "A", "row": 0, "role": "active" },
                { "kind": "matrix-col", "matrix": "B", "col": 1, "role": "active" },
                { "kind": "matrix-cell", "matrix": "A", "row": 0, "col": 0, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "B", "row": 0, "col": 1, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "C", "row": 0, "col": 1, "role": "target" }
              ],
              "values": [{ "kind": "matrix-cell", "matrix": "C", "row": 0, "col": 1, "value": 10 }],
              "formula": "C12 = 2 * 5 + 1 * 7",
              "product": "2 * 5 = 10",
              "sum": "10"
            },
            {
              "title": "C12 fertig addieren",
              "text": "Der zweite Anteil der Zeile-Spalte-Kombination wird ergänzt.",
              "highlights": [
                { "kind": "matrix-row", "matrix": "A", "row": 0, "role": "active" },
                { "kind": "matrix-col", "matrix": "B", "col": 1, "role": "active" },
                { "kind": "matrix-cell", "matrix": "A", "row": 0, "col": 1, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "B", "row": 1, "col": 1, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "C", "row": 0, "col": 1, "role": "target" }
              ],
              "values": [{ "kind": "matrix-cell", "matrix": "C", "row": 0, "col": 1, "value": 17 }],
              "formula": "C12 = 2 * 5 + 1 * 7",
              "product": "1 * 7 = 7",
              "sum": "10 + 7 = 17"
            },
            {
              "title": "Erster Anteil für C21",
              "text": "Für C21 wird die zweite Zeile von A mit der ersten Spalte von B kombiniert.",
              "highlights": [
                { "kind": "matrix-row", "matrix": "A", "row": 1, "role": "active" },
                { "kind": "matrix-col", "matrix": "B", "col": 0, "role": "active" },
                { "kind": "matrix-cell", "matrix": "A", "row": 1, "col": 0, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "B", "row": 0, "col": 0, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "C", "row": 1, "col": 0, "role": "target" }
              ],
              "values": [{ "kind": "matrix-cell", "matrix": "C", "row": 1, "col": 0, "value": 0 }],
              "formula": "C21 = 0 * 4 + 3 * 6",
              "product": "0 * 4 = 0",
              "sum": "0"
            },
            {
              "title": "C21 fertig addieren",
              "text": "Der zweite Anteil liefert den eigentlichen Wert von C21.",
              "highlights": [
                { "kind": "matrix-row", "matrix": "A", "row": 1, "role": "active" },
                { "kind": "matrix-col", "matrix": "B", "col": 0, "role": "active" },
                { "kind": "matrix-cell", "matrix": "A", "row": 1, "col": 1, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "B", "row": 1, "col": 0, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "C", "row": 1, "col": 0, "role": "target" }
              ],
              "values": [{ "kind": "matrix-cell", "matrix": "C", "row": 1, "col": 0, "value": 18 }],
              "formula": "C21 = 0 * 4 + 3 * 6",
              "product": "3 * 6 = 18",
              "sum": "0 + 18 = 18"
            },
            {
              "title": "Erster Anteil für C22",
              "text": "Für C22 wird die zweite Zeile von A mit der zweiten Spalte von B kombiniert.",
              "highlights": [
                { "kind": "matrix-row", "matrix": "A", "row": 1, "role": "active" },
                { "kind": "matrix-col", "matrix": "B", "col": 1, "role": "active" },
                { "kind": "matrix-cell", "matrix": "A", "row": 1, "col": 0, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "B", "row": 0, "col": 1, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "C", "row": 1, "col": 1, "role": "target" }
              ],
              "values": [{ "kind": "matrix-cell", "matrix": "C", "row": 1, "col": 1, "value": 0 }],
              "formula": "C22 = 0 * 5 + 3 * 7",
              "product": "0 * 5 = 0",
              "sum": "0"
            },
            {
              "title": "C22 fertig addieren",
              "text": "Nach dem zweiten Anteil ist die Ergebnismatrix vollständig.",
              "highlights": [
                { "kind": "matrix-row", "matrix": "A", "row": 1, "role": "active" },
                { "kind": "matrix-col", "matrix": "B", "col": 1, "role": "active" },
                { "kind": "matrix-cell", "matrix": "A", "row": 1, "col": 1, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "B", "row": 1, "col": 1, "role": "factor" },
                { "kind": "matrix-cell", "matrix": "C", "row": 1, "col": 1, "role": "target" }
              ],
              "values": [{ "kind": "matrix-cell", "matrix": "C", "row": 1, "col": 1, "value": 21 }],
              "formula": "C22 = 0 * 5 + 3 * 7",
              "product": "3 * 7 = 21",
              "sum": "0 + 21 = 21"
            }
          ]
        }
      ]
    },
    {
      "id": "lgs",
      "title": "Lineare Gleichungssysteme",
      "icon": "⚖️",
      "cards": [
        {
          "t": "Lineares Gleichungssystem",
          "b": "Ein System der Form \\[\\begin{aligned} a_{11}x_1 + a_{12}x_2 + \\ldots + a_{1n}x_n &= b_1 \\\\ &\\;\\;\\vdots \\\\ a_{m1}x_1 + a_{m2}x_2 + \\ldots + a_{mn}x_n &= b_m \\end{aligned}\\] mit \\(a_{jk}, b_j \\in \\mathbb{R}\\) heißt lineares Gleichungssystem mit \\(m\\) Gleichungen und \\(n\\) Unbekannten (Variablen). Die \\(b_j\\) heißen Inhomogenitäten, die \\(a_{jk}\\) Koeffizienten. Sind alle \\(b_j = 0\\), heißt das LGS homogen, sonst inhomogen.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 171"
        },
        {
          "t": "Matrixschreibweise Ax = b",
          "b": "Die linke Seite lässt sich als Matrix-Vektor-Produkt schreiben: \\(A\\vec{x} = \\vec{b}\\). Die Matrix \\(A := (a_{jk})\\) heißt Koeffizientenmatrix, der Vektor \\(\\vec{b}\\) Inhomogenitätsvektor. Da alle wichtigen Informationen in \\(A\\) und \\(\\vec{b}\\) stehen, verzichtet man beim Rechnen gerne auf \\(\\vec{x}\\): Übrig bleibt die so genannte erweiterte Koeffizientenmatrix \\((A|\\vec{b})\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 172-173"
        },
        {
          "t": "Lösungsvektor und Lösungsmenge",
          "b": "Der Vektor \\(\\vec{x}\\) heißt Lösungsvektor des LGSs, wenn seine Komponenten \\(x_1, \\ldots, x_n\\) alle Gleichungen des LGSs erfüllen. Die Menge aller Lösungsvektoren heißt Lösungsmenge des LGSs.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 174"
        },
        {
          "t": "Elementare Zeilenoperationen",
          "b": "Beim Lösen sind gestattet: Tauschen von Zeilen; Addition eines (ggf. negativen) Vielfachen einer Zeile zu einer anderen; Multiplikation einer Zeile mit einer Zahl ungleich Null. Diese Operationen ändern die Lösungsmenge nicht und genügen, um jedes lösbare LGS zu lösen — sie sind der Kern des Gauß-Algorithmus.",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 165-166"
        },
        {
          "t": "Beispiel: Gauß-Algorithmus",
          "b": "Das System \\(2x_1 + 2x_2 = 2\\), \\(-x_1 + 6x_2 = -1\\) wird als erweiterte Koeffizientenmatrix umgeformt: Zeilen tauschen, zu Zeile 2 zweimal Zeile 1 addieren, Zeile 2 durch 14 teilen (normieren), von Zeile 1 sechsmal Zeile 2 subtrahieren, Zeile 1 mit \\((-1)\\) multiplizieren. Ergebnis: \\[\\left(\\begin{array}{cc|c} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{array}\\right) \\;\\Rightarrow\\; x_1 = 1,\\; x_2 = 0\\]",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 162-164"
        },
        {
          "t": "Der Idealfall",
          "b": "Ein LGS mit \\(m\\) Gleichungen und \\(m\\) Variablen kann unter gewissen Voraussetzungen in die Form mit der Einheitsmatrix im linken Teil überführt werden. Daran kann die eindeutige Lösung \\(x_1 = c_1, \\ldots, x_m = c_m\\) direkt abgelesen werden. Dieser Idealfall sollte als zu erstrebendes Ziel nie aus den Augen verloren werden.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 167, 175"
        },
        {
          "t": "Unendlich viele Lösungen",
          "b": "Beispiel: \\(3x_1 + 6x_2 = 9\\), \\(4x_1 + 8x_2 = 12\\) führt nach Umformungen auf eine Nullzeile \\(0 = 0\\) — eine wahre Aussage, die die Lösungsmenge nicht einschränkt. Es verbleibt \\(x_1 + 2x_2 = 3\\) mit unendlich vielen Lösungen in der Abhängigkeit \\(x_1 = 3 - 2x_2\\): Eine konkrete Lösung ergibt sich durch konkretes Wählen von \\(x_2\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 168-169"
        },
        {
          "t": "Keine Lösung",
          "b": "Ergibt sich nach Umformungen eine Zeile der Form \\[\\left(\\begin{array}{cc|c} 1 & 0 & 1 \\\\ 0 & 0 & 1 \\end{array}\\right)\\] so bedeutet die letzte Zeile \\(0 = 1\\): Das ursprüngliche LGS hat keine Lösung.",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 170"
        },
        {
          "t": "Lösungsraum homogener LGS",
          "b": "Die Lösungsmenge eines homogenen LGS ist ein Vektorraum, daher spricht man von einem Lösungsraum. Satz: Linearkombinationen von Lösungen eines homogenen LGSs \\(A\\vec{x} = \\vec{0}\\) sind wieder Lösungen.",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 176-177"
        },
        {
          "t": "Struktur der Lösungsmenge inhomogener LGS",
          "b": "Sei \\(\\vec{x}_P\\) eine beliebige Lösung des inhomogenen LGSs \\(A\\vec{x} = \\vec{b}\\) und \\(L_H\\) der Lösungsraum des zugehörigen homogenen LGSs \\(A\\vec{x} = \\vec{0}\\). Dann ist \\[\\vec{x}_P + L_H := \\{\\vec{x}_P + \\vec{x}_H \\,|\\, \\vec{x}_H \\in L_H\\}\\] die gesamte Lösungsmenge des inhomogenen LGSs. \\(\\vec{x}_P\\) heißt auch partikuläre Lösung; man schreibt auch \\(\\vec{x}_S\\) und spricht von der speziellen Lösung.",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 178-179"
        },
        {
          "t": "Dokumentation der Gauß-Schritte",
          "b": "Die Schritte beim Gauß-Algorithmus werden dokumentiert, indem über den Pfeil geschrieben wird, was getan wird; die Zeilen bekommen römische Ziffern. Beispiel: \\(2 \\cdot \\mathrm{II} - 3 \\cdot \\mathrm{I}\\) bedeutet „zwei mal zweite Zeile minus drei mal erste Zeile“.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 180"
        }
      ],
      "questions": [
        {
          "q": "Was ist ein inhomogenes lineares Gleichungssystem?",
          "a": "Ein LGS \\(A\\vec{x} = \\vec{b}\\), bei dem nicht alle Inhomogenitäten \\(b_j\\) gleich 0 sind. Sind alle \\(b_j = 0\\), heißt das LGS homogen.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 171"
        },
        {
          "q": "Welche Operationen sind beim Gauß-Algorithmus gestattet?",
          "a": "Tauschen von Zeilen; Addition eines (ggf. negativen) Vielfachen einer Zeile zu einer anderen; Multiplikation einer Zeile mit einer Zahl ungleich Null.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 165"
        },
        {
          "q": "Warum ändern die elementaren Zeilenoperationen die Lösungen nicht?",
          "a": "Die Folien halten fest: Diese Operationen ändern die Lösungsmenge des Gleichungssystems nicht und genügen, um jedes lösbare LGS zu lösen.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 166"
        },
        {
          "q": "Was ist die erweiterte Koeffizientenmatrix?",
          "a": "\\((A|\\vec{b})\\) — die Koeffizientenmatrix mit angehängtem Inhomogenitätsvektor. Auf \\(\\vec{x}\\) wird verzichtet, da alle wichtigen Informationen in \\(A\\) und \\(\\vec{b}\\) stehen.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 173"
        },
        {
          "q": "Woran erkennt man bei den Umformungen, dass ein LGS keine Lösung hat?",
          "a": "An einer Zeile, die eine falsche Aussage wie \\(0 = 1\\) bedeutet.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 170"
        },
        {
          "q": "Woran erkennt man unendlich viele Lösungen und wie gibt man sie an?",
          "a": "Eine Nullzeile \\(0 = 0\\) schränkt die Lösungsmenge nicht ein. Es verbleiben Gleichungen mit Abhängigkeiten (z. B. \\(x_1 = 3 - 2x_2\\)); konkrete Lösungen ergeben sich durch konkretes Wählen der freien Variablen.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 168-169"
        },
        {
          "q": "Welche Struktur hat die Lösungsmenge eines inhomogenen LGS?",
          "a": "\\(\\vec{x}_P + L_H\\): eine partikuläre Lösung plus der Lösungsraum des zugehörigen homogenen Systems.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 178"
        },
        {
          "q": "Was gilt für Linearkombinationen von Lösungen eines homogenen LGS?",
          "a": "Sie sind wieder Lösungen — die Lösungsmenge eines homogenen LGS ist ein Vektorraum (Lösungsraum).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 176-177"
        }
      ],
      "flashcards": [
        {
          "front": "Homogenes vs. inhomogenes LGS",
          "back": "Homogen: alle \\(b_j = 0\\); inhomogen: sonst",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 171"
        },
        {
          "front": "Kurzschreibweise eines LGS",
          "back": "\\(A\\vec{x} = \\vec{b}\\) mit Koeffizientenmatrix \\(A\\) und Inhomogenitätsvektor \\(\\vec{b}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 172"
        },
        {
          "front": "Die 3 elementaren Zeilenoperationen",
          "back": "Zeilen tauschen; Vielfaches einer Zeile zu anderer addieren; Zeile mit Zahl \\(\\ne 0\\) multiplizieren",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 165"
        },
        {
          "front": "Idealfall des Gauß-Algorithmus",
          "back": "Einheitsmatrix im linken Teil — Lösung \\(x_1 = c_1, \\ldots, x_m = c_m\\) direkt ablesbar",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 167"
        },
        {
          "front": "Zeile „\\(0 = 0\\)“ nach Umformung",
          "back": "Wahre Aussage, schränkt die Lösungsmenge nicht ein — es können unendlich viele Lösungen bleiben",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 168"
        },
        {
          "front": "Zeile „\\(0 = 1\\)“ nach Umformung",
          "back": "Das LGS hat keine Lösung",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 170"
        },
        {
          "front": "Lösungsmenge des inhomogenen LGS",
          "back": "\\(\\vec{x}_P + L_H\\) — partikuläre Lösung plus homogener Lösungsraum",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 178"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 31",
          "task": "Berechnen Sie mithilfe des Gauß-Algorithmus sämtliche Lösungen des homogenen und des inhomogenen linearen Gleichungssystems \\[\\begin{aligned} -x - 2y &= 0 \\\\ 2x + 4y &= 0 \\end{aligned} \\qquad , \\qquad \\begin{aligned} -x - 2y &= -1 \\\\ 2x + 4y &= 2 \\end{aligned}\\] und zeichnen Sie alle Lösungsmengen in ein Koordinatensystem.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 31"
        },
        {
          "ref": "Aufgabe 32",
          "task": "Für welche Werte von \\(\\alpha \\in \\mathbb{R}\\) hat das lineare Gleichungssystem \\[\\begin{aligned} x + y + z &= 2 \\\\ x + 2y - 2z &= 2 \\\\ 3x + y + \\alpha^2 z &= 2\\alpha \\end{aligned}\\] keine, eine bzw. unendlich viele Lösungen?",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 32"
        }
      ]
    },
    {
      "id": "determinante",
      "title": "Determinante",
      "icon": "📦",
      "cards": [
        {
          "t": "Vektoren als Matrix — wozu die Determinante?",
          "b": "Mehrere Vektoren (meist eine Basis) lassen sich zu einer Matrix zusammenfassen, indem jeder Vektor in eine Spalte geschrieben wird — so wird z. B. aus der Standardbasis des \\(\\mathbb{R}^3\\) die \\((3 \\times 3)\\)-Einheitsmatrix. Aus der Berechnung einer einzigen Größe, der Determinante, lässt sich eine Vielzahl von Eigenschaften ableiten. Interessant sind dabei: lineare Unabhängigkeit (einfachere Prüfung als bisher) und Volumenberechnung (Volumen eines Quaders im \\(\\mathbb{R}^n\\), dessen Kanten durch \\(n\\) Vektoren gegeben sind).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 181-183"
        },
        {
          "t": "Streichungsmatrix",
          "b": "Sei \\(A \\in M(n \\times n)\\) mit \\(n > 1\\). Durch Streichen der \\(i\\)-ten Zeile und \\(j\\)-ten Spalte kann aus \\(A\\) die so genannte Streichungsmatrix \\(S_{ij}(A) \\in M(n-1 \\times n-1)\\) gewonnen werden.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 184"
        },
        {
          "t": "Determinante (Laplace'scher Entwicklungssatz)",
          "b": "Sei \\(n > 1\\). Die Determinante \\(\\det: M(n \\times n) \\to \\mathbb{R}\\) ist definiert durch \\[\\det A = \\sum_{k=1}^{n} (-1)^{i+k} a_{ik} \\det S_{ik}(A) \\;\\text{(Entwicklung nach der } i\\text{-ten Zeile)}\\] \\[\\det A = \\sum_{i=1}^{n} (-1)^{i+k} a_{ik} \\det S_{ik}(A) \\;\\text{(Entwicklung nach der } k\\text{-ten Spalte)}\\] Für \\(A = (a_{11}) \\in M(1 \\times 1)\\) gilt \\(\\det A := a_{11}\\). Die Determinante ist also rekursiv über Determinanten kleinerer Matrizen definiert. Statt \\(\\det(\\cdot)\\) werden oft Betragsstriche um die Matrix geschrieben.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 185-187"
        },
        {
          "t": "Strategie: Zeile oder Spalte mit vielen Nullen wählen",
          "b": "Der Vorteil des Entwicklungssatzes: Man darf sich die Zeile oder Spalte aussuchen, die am wenigsten Rechenaufwand verspricht — typischerweise die mit den meisten Nullen, denn so entfallen viele Determinantenberechnungen für die Streichungsmatrizen. Enthält eine quadratische Matrix eine Nullzeile oder -spalte, ist ihre Determinante Null.",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 188-189"
        },
        {
          "t": "Determinante von (2×2)-Matrizen",
          "b": "Entwicklung nach der ersten Spalte liefert die Formel \\[\\det \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} = a_{11}a_{22} - a_{21}a_{12}\\] (Hauptdiagonale minus Nebendiagonale).",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 191-192"
        },
        {
          "t": "Regel von Sarrus für (3×3)-Matrizen",
          "b": "Die ersten beiden Spalten werden noch einmal hinten an die Matrix geschrieben. Die Terme zu den schräg nach unten zeigenden Pfeilen werden addiert, jene zu den schräg nach oben zeigenden subtrahiert; entlang der Pfeile wird multipliziert. Diese Determinantenberechnung heißt Regel von Sarrus.",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 193"
        },
        {
          "t": "Determinante von Dreiecksmatrizen",
          "b": "Die Determinante von (oberen wie unteren) Dreiecksmatrizen ist das Produkt der Diagonaleinträge: \\[\\det = a_{11} \\cdot a_{22} \\cdot \\ldots \\cdot a_{nn}\\] (Als Übung zum Laplace'schen Entwicklungssatz eigenständig nachprüfen — und wie ist das für Diagonalmatrizen?)",
          "tag": "formel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 194"
        },
        {
          "t": "Determinante und lineare Abhängigkeit in der Ebene",
          "b": "Vektoren der Ebene sind genau dann linear abhängig, wenn sie Vielfache voneinander sind; andernfalls spannen sie die gesamte Ebene auf. Eine \\((2 \\times 2)\\)-Matrix mit linear abhängigen Spaltenvektoren hat Determinante Null: \\[\\begin{vmatrix} a & \\lambda a \\\\ b & \\lambda b \\end{vmatrix} = a \\lambda b - b \\lambda a = 0\\]",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 196"
        },
        {
          "t": "Der große Äquivalenzsatz",
          "b": "Sei \\(A \\in M(n \\times n)\\). Dann gelten folgende Äquivalenzen: \\[\\det A \\ne 0\\] \\[\\Leftrightarrow \\text{Die Spalten (Zeilen) von } A \\text{ sind linear unabhängig}\\] \\[\\Leftrightarrow \\operatorname{Rang} A = n\\] \\[\\Leftrightarrow A^{-1} \\text{ existiert}\\]",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 197"
        }
      ],
      "questions": [
        {
          "q": "Was besagt der Laplace'sche Entwicklungssatz?",
          "a": "Die Determinante lässt sich nach einer beliebigen Zeile oder Spalte entwickeln: \\(\\det A = \\sum_k (-1)^{i+k} a_{ik} \\det S_{ik}(A)\\) (Zeile) bzw. \\(\\sum_i (-1)^{i+k} a_{ik} \\det S_{ik}(A)\\) (Spalte), mit den Streichungsmatrizen \\(S_{ik}(A)\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 185"
        },
        {
          "q": "Was ist die Streichungsmatrix?",
          "a": "\\(S_{ij}(A) \\in M(n-1 \\times n-1)\\) entsteht aus \\(A\\), indem die \\(i\\)-te Zeile und die \\(j\\)-te Spalte gestrichen werden.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 184"
        },
        {
          "q": "Für welche Anwendungen lässt sich die Determinante verwenden und welche geometrische Interpretation gibt es?",
          "a": "Prüfung auf lineare Unabhängigkeit und Volumenberechnung: Welches Volumen hat ein Quader im \\(\\mathbb{R}^n\\), dessen Kanten durch \\(n\\) Vektoren gegeben sind?",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 183"
        },
        {
          "q": "Wie berechnet man mit der Regel von Sarrus die Determinante von (3×3)-Matrizen?",
          "a": "Die ersten beiden Spalten hinten an die Matrix anschreiben; entlang der schräg nach unten zeigenden Pfeile multiplizieren und addieren, entlang der schräg nach oben zeigenden multiplizieren und subtrahieren.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 193"
        },
        {
          "q": "Was können Sie folgern, wenn die Determinante einer Matrix A ungleich Null ist?",
          "a": "Die Spalten (Zeilen) von \\(A\\) sind linear unabhängig, \\(\\operatorname{Rang} A = n\\) und \\(A^{-1}\\) existiert.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 197"
        },
        {
          "q": "Welche Zeile oder Spalte wählt man zur Entwicklung am besten und warum?",
          "a": "Die mit den meisten Nullen, denn so entfallen viele Determinantenberechnungen für die Streichungsmatrizen.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 188"
        },
        {
          "q": "Was ist die Determinante einer Matrix mit einer Nullzeile oder Nullspalte?",
          "a": "Null — bei Entwicklung nach dieser Zeile bzw. Spalte verschwinden alle Summanden.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 189"
        },
        {
          "q": "Wie berechnet sich die Determinante einer Dreiecksmatrix?",
          "a": "Als Produkt der Diagonaleinträge: \\(a_{11} \\cdot a_{22} \\cdot \\ldots \\cdot a_{nn}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 194"
        }
      ],
      "flashcards": [
        {
          "front": "\\(\\det\\) einer \\((2 \\times 2)\\)-Matrix",
          "back": "\\(a_{11}a_{22} - a_{21}a_{12}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 191"
        },
        {
          "front": "\\(\\det\\) einer \\((1 \\times 1)\\)-Matrix",
          "back": "\\(\\det(a_{11}) = a_{11}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 185"
        },
        {
          "front": "Streichungsmatrix \\(S_{ij}(A)\\)",
          "back": "\\(A\\) ohne \\(i\\)-te Zeile und \\(j\\)-te Spalte",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 184"
        },
        {
          "front": "Vorzeichenfaktor beim Entwicklungssatz",
          "back": "\\((-1)^{i+k}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 185"
        },
        {
          "front": "Determinante einer Dreiecksmatrix",
          "back": "Produkt der Diagonaleinträge \\(a_{11} \\cdots a_{nn}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 194"
        },
        {
          "front": "Nullzeile oder Nullspalte in der Matrix",
          "back": "\\(\\det = 0\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 189"
        },
        {
          "front": "\\(\\det A \\ne 0\\) ist äquivalent zu …",
          "back": "Spalten/Zeilen linear unabhängig \\(\\Leftrightarrow\\) \\(\\operatorname{Rang} A = n\\) \\(\\Leftrightarrow\\) \\(A^{-1}\\) existiert",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 197"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 33",
          "task": "Berechnen Sie die Determinanten folgender Matrizen:<br>a) \\(A = \\begin{pmatrix} -4 & -3 & -2 \\\\ -1 & 0 & 1 \\\\ 2 & 3 & 4 \\end{pmatrix}\\)<br>b) \\(B = \\begin{pmatrix} 1 & 2 & 0 & 3 \\\\ 2 & 2 & 3 & 0 \\\\ 3 & 1 & 0 & 2 \\\\ 0 & 3 & 1 & 6 \\end{pmatrix}\\)",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 33"
        },
        {
          "ref": "Aufgabe 34",
          "task": "Überprüfen Sie mithilfe von Determinanten, ob die Vektoren \\[\\vec{v}_1 = \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}, \\quad \\vec{v}_2 = \\begin{pmatrix} 3 \\\\ -1 \\\\ 0 \\end{pmatrix}, \\quad \\vec{v}_3 = \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}\\] linear abhängig oder linear unabhängig sind.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 34"
        },
        {
          "ref": "Aufgabe 35",
          "task": "Gegeben ist die Matrix \\(A = \\begin{pmatrix} 1 & -2 & 3 \\\\ 2 & -1 & 0 \\\\ 1 & 2 & 3 \\end{pmatrix}\\).<br>a) Ist die Matrix \\(A\\) invertierbar? Begründen Sie Ihre Antwort.<br>b) Welchen Rang hat \\(A\\)?",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 35"
        }
      ]
    },
    {
      "id": "vektorgeometrie",
      "title": "Kreuzprodukt, Norm & Skalarprodukt",
      "icon": "📏",
      "cards": [
        {
          "t": "Kreuzprodukt — nur im R³",
          "b": "Das Kreuzprodukt gibt eine Möglichkeit, zwei Vektoren miteinander zu multiplizieren. Es ist allerdings nur für Vektoren des \\(\\mathbb{R}^3\\) definiert, bietet dort aber eine schöne geometrische Interpretation. Das Skalarprodukt ist ein weiteres Produkt von Vektoren, das gänzlich anders aussieht.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 198"
        },
        {
          "t": "Definition des Kreuzprodukts",
          "b": "Seien \\(\\vec{x}, \\vec{y} \\in \\mathbb{R}^3\\). Dann ist das Kreuzprodukt definiert durch \\[\\vec{x} \\times \\vec{y} := \\begin{pmatrix} x_2 y_3 - x_3 y_2 \\\\ x_3 y_1 - x_1 y_3 \\\\ x_1 y_2 - x_2 y_1 \\end{pmatrix}\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 199"
        },
        {
          "t": "Eigenschaften des Kreuzprodukts",
          "b": "\\(\\vec{x} \\times \\vec{y}\\) steht senkrecht auf \\(\\vec{x}\\) und \\(\\vec{y}\\); das Kreuzprodukt ist in beiden Eingängen linear; \\((\\vec{x}, \\vec{y}, \\vec{x} \\times \\vec{y})\\) genügen der Rechte-Hand-Regel.",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 200"
        },
        {
          "t": "Kreuzprodukt in der Physik",
          "b": "Bekannte Beispiele sind die Winkelgeschwindigkeit \\(\\vec{\\omega}\\) mit der Gleichung \\(\\vec{v} = \\vec{\\omega} \\times \\vec{r}\\) sowie die Lorentz-Kraft \\(\\vec{F} = q(\\vec{v} \\times \\vec{B})\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 202"
        },
        {
          "t": "Standardnorm",
          "b": "Die so genannte Standardnorm auf dem \\(\\mathbb{R}^n\\) ist definiert als \\[\\lVert\\vec{x}\\rVert := \\left(x_1^2 + \\ldots + x_n^2\\right)^{\\frac{1}{2}}\\] Mit der Norm lassen sich Untersuchungen in normierten Vektorräumen durchführen (Längenmessung).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 204-205"
        },
        {
          "t": "Standardskalarprodukt",
          "b": "Das so genannte Standardskalarprodukt auf dem \\(\\mathbb{R}^n\\) ist definiert als \\[\\langle\\vec{x}, \\vec{y}\\rangle = x_1 y_1 + \\ldots + x_n y_n\\] Jedes Skalarprodukt induziert eine Norm (aber nicht umgekehrt).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 205-206"
        },
        {
          "t": "Skalarprodukt, Norm und Winkel",
          "b": "Es gilt \\(\\langle\\vec{x}, \\vec{x}\\rangle = x_1^2 + \\ldots + x_n^2\\), also \\[\\lVert\\vec{x}\\rVert = \\sqrt{\\langle\\vec{x}, \\vec{x}\\rangle}\\] Die Standardnorm wird vom Standardskalarprodukt induziert. Ferner gilt \\[\\langle\\vec{v}, \\vec{w}\\rangle = \\lVert\\vec{v}\\rVert \\lVert\\vec{w}\\rVert \\cos\\sphericalangle(\\vec{v}, \\vec{w})\\] mit dem Winkel zwischen den Vektoren \\(\\vec{v}\\) und \\(\\vec{w}\\).",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 207"
        },
        {
          "t": "Orthogonalbasis und Orthonormalbasis",
          "b": "Eine Basis \\(\\{\\vec{b}_1, \\ldots, \\vec{b}_n\\}\\) des \\(\\mathbb{R}^n\\) heißt Orthogonalbasis, wenn \\(\\langle\\vec{b}_i, \\vec{b}_j\\rangle = 0\\) für \\(i \\ne j\\). Sie heißt Orthonormalbasis (ONB), wenn \\(\\langle\\vec{b}_i, \\vec{b}_j\\rangle = 1\\) für \\(i = j\\) und \\(0\\) für \\(i \\ne j\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 208"
        },
        {
          "t": "Orthogonalität",
          "b": "Sind \\(\\vec{v}, \\vec{w}\\) orthogonal zueinander, schreibt man \\(\\vec{v} \\perp \\vec{w}\\). Die Bedingung lautet: \\[\\vec{x} \\perp \\vec{y} \\;\\Leftrightarrow\\; \\langle\\vec{x}, \\vec{y}\\rangle = 0\\] Beispiel im \\(\\mathbb{R}^2\\): \\(\\vec{x} = (1, 0)^T\\), \\(\\vec{y} = (0, 1)^T\\) mit \\(\\langle\\vec{x}, \\vec{y}\\rangle = 1 \\cdot 0 + 0 \\cdot 1 = 0\\) — die Vektoren sind bezüglich des Standardskalarproduktes senkrecht zueinander.",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 209-210"
        }
      ],
      "questions": [
        {
          "q": "Wie wird das Kreuzprodukt definiert und für welche Vektoren?",
          "a": "Nur für \\(\\vec{x}, \\vec{y} \\in \\mathbb{R}^3\\): \\(\\vec{x} \\times \\vec{y} = (x_2y_3 - x_3y_2,\\; x_3y_1 - x_1y_3,\\; x_1y_2 - x_2y_1)^T\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 198-199"
        },
        {
          "q": "Welche Eigenschaften hat das Kreuzprodukt?",
          "a": "\\(\\vec{x} \\times \\vec{y}\\) steht senkrecht auf \\(\\vec{x}\\) und \\(\\vec{y}\\); es ist in beiden Eingängen linear; \\((\\vec{x}, \\vec{y}, \\vec{x} \\times \\vec{y})\\) genügen der Rechte-Hand-Regel.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 200"
        },
        {
          "q": "Wie lautet das Standardskalarprodukt auf dem Rⁿ und wie erhält man daraus die Standardnorm?",
          "a": "\\(\\langle\\vec{x}, \\vec{y}\\rangle = x_1y_1 + \\ldots + x_ny_n\\); wegen \\(\\langle\\vec{x}, \\vec{x}\\rangle = x_1^2 + \\ldots + x_n^2\\) gilt \\(\\lVert\\vec{x}\\rVert = \\sqrt{\\langle\\vec{x}, \\vec{x}\\rangle}\\) — die Standardnorm wird vom Standardskalarprodukt induziert.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 204-207"
        },
        {
          "q": "Wie lassen sich Winkel zwischen Elementen des Rⁿ berechnen?",
          "a": "Über \\(\\langle\\vec{v}, \\vec{w}\\rangle = \\lVert\\vec{v}\\rVert \\lVert\\vec{w}\\rVert \\cos\\sphericalangle(\\vec{v}, \\vec{w})\\); der in den Kosinus eingesetzte Winkel ist der zwischen \\(\\vec{v}\\) und \\(\\vec{w}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 207"
        },
        {
          "q": "Wann sind zwei Vektoren orthogonal?",
          "a": "\\(\\vec{x} \\perp \\vec{y} \\Leftrightarrow \\langle\\vec{x}, \\vec{y}\\rangle = 0\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 209"
        },
        {
          "q": "Was ist eine Orthonormalbasis?",
          "a": "Eine Basis mit \\(\\langle\\vec{b}_i, \\vec{b}_j\\rangle = 1\\) für \\(i = j\\) und \\(0\\) für \\(i \\ne j\\) — also paarweise orthogonale Vektoren der Länge 1.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 208"
        },
        {
          "q": "Wo kommt das Kreuzprodukt in der Physik vor?",
          "a": "Bei der Winkelgeschwindigkeit (\\(\\vec{v} = \\vec{\\omega} \\times \\vec{r}\\)) und der Lorentz-Kraft (\\(\\vec{F} = q(\\vec{v} \\times \\vec{B})\\)).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 202"
        }
      ],
      "flashcards": [
        {
          "front": "Kreuzprodukt \\(\\vec{x} \\times \\vec{y}\\)",
          "back": "\\(\\begin{pmatrix} x_2y_3 - x_3y_2 \\\\ x_3y_1 - x_1y_3 \\\\ x_1y_2 - x_2y_1 \\end{pmatrix}\\) — nur im \\(\\mathbb{R}^3\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 199"
        },
        {
          "front": "Richtung von \\(\\vec{x} \\times \\vec{y}\\)",
          "back": "Senkrecht auf \\(\\vec{x}\\) und \\(\\vec{y}\\), Rechte-Hand-Regel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 200"
        },
        {
          "front": "Standardnorm \\(\\lVert\\vec{x}\\rVert\\)",
          "back": "\\(\\sqrt{x_1^2 + \\ldots + x_n^2}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 204"
        },
        {
          "front": "Standardskalarprodukt \\(\\langle\\vec{x}, \\vec{y}\\rangle\\)",
          "back": "\\(x_1y_1 + \\ldots + x_ny_n\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 206"
        },
        {
          "front": "Zusammenhang Norm und Skalarprodukt",
          "back": "\\(\\lVert\\vec{x}\\rVert = \\sqrt{\\langle\\vec{x}, \\vec{x}\\rangle}\\) — jedes Skalarprodukt induziert eine Norm (nicht umgekehrt)",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 205, 207"
        },
        {
          "front": "Winkelformel",
          "back": "\\(\\langle\\vec{v}, \\vec{w}\\rangle = \\lVert\\vec{v}\\rVert \\lVert\\vec{w}\\rVert \\cos\\sphericalangle(\\vec{v}, \\vec{w})\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 207"
        },
        {
          "front": "Bedingung für Orthogonalität",
          "back": "\\(\\vec{x} \\perp \\vec{y} \\Leftrightarrow \\langle\\vec{x}, \\vec{y}\\rangle = 0\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 209"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 36",
          "task": "Bilden Sie mit den Vektoren \\(\\vec{u} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}\\), \\(\\vec{v} = \\begin{pmatrix} -3 \\\\ 0 \\\\ 4 \\end{pmatrix}\\) und \\(\\vec{w} = \\begin{pmatrix} 4 \\\\ 10 \\\\ -2 \\end{pmatrix}\\) den Vektor \\((\\vec{w} \\times \\vec{v}) \\times \\vec{u}\\).",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 36"
        },
        {
          "ref": "Aufgabe 37",
          "task": "a) Normieren Sie die folgenden Vektoren: \\[\\vec{v}_1 = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}, \\quad \\vec{v}_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\vec{v}_3 = \\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}\\]<br>b) Berechnen Sie den Winkel zwischen den Vektoren \\(\\vec{v} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}\\) und \\(\\vec{w} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix}\\).",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 37"
        }
      ]
    },
    {
      "id": "eigenwerte",
      "title": "Eigenwerte & Eigenvektoren",
      "icon": "🎯",
      "cards": [
        {
          "t": "Eigenwert und Eigenvektor",
          "b": "Sei \\(A\\) eine quadratische Matrix, aufgefasst als Abbildung von \\(\\mathbb{R}^n\\) nach \\(\\mathbb{R}^n\\). Eine Zahl \\(\\lambda\\) heißt Eigenwert (EW) von \\(A\\) zum Eigenvektor (EV) \\(\\vec{v} \\ne \\vec{0}\\), wenn \\(\\vec{v}\\) durch \\(A\\) auf das \\(\\lambda\\)-Fache von sich selbst abgebildet wird: \\[A\\vec{v} = \\lambda\\vec{v} \\quad \\text{(Eigenwertgleichung)}\\]",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 211"
        },
        {
          "t": "Warum wird der Nullvektor ausgenommen?",
          "b": "Der Nullvektor würde die Eigenwertgleichung für jedes \\(\\lambda\\) erfüllen. Für die nachfolgende Theorie ist es jedoch wichtig, dass jedem Eigenvektor ein eindeutiger Eigenwert zugeordnet werden kann.",
          "tag": "wichtig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 212"
        },
        {
          "t": "Umformung der Eigenwertgleichung",
          "b": "Die Eigenwertgleichung ist ein lineares Gleichungssystem. Umgestellt: \\[A\\vec{v} = \\lambda\\vec{v} \\;\\Leftrightarrow\\; A\\vec{v} - \\lambda\\vec{v} = \\vec{0} \\;\\Leftrightarrow\\; (A - \\lambda E)\\vec{v} = \\vec{0}\\] Im letzten Schritt muss die Einheitsmatrix \\(E\\) hinzugefügt werden, damit der Term innerhalb der Klammern definiert ist.",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 213-214"
        },
        {
          "t": "Bedingung für Eigenwerte",
          "b": "Gesucht sind jene \\(\\lambda\\), für welche \\((A - \\lambda E)\\vec{v} = \\vec{0}\\) eine Lösung hat, die nicht nur aus dem Nullvektor besteht. Dies ist äquivalent zu \\[\\det(A - \\lambda E) = 0\\]",
          "tag": "satz",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 215"
        },
        {
          "t": "Charakteristisches Polynom",
          "b": "Der Determinantenterm \\(P_A(\\lambda) := \\det(A - \\lambda E)\\) wird charakteristisches Polynom genannt. Er liefert nach dem Ausrechnen ein Polynom \\(n\\)-ten Grades in \\(\\lambda\\). Die Nullstellen des charakteristischen Polynoms liefern die Eigenwerte von \\(A\\).",
          "tag": "def",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 216"
        },
        {
          "t": "Beispiel: Eigenwerte berechnen",
          "b": "Für \\(A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\): \\[\\det(A - \\lambda E) = \\begin{vmatrix} -\\lambda & 1 \\\\ 1 & -\\lambda \\end{vmatrix} = \\lambda^2 - 1\\] Die Nullstellen — und damit die Eigenwerte — sind \\(\\lambda_{1,2} = \\pm 1\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 217"
        },
        {
          "t": "Eigenvektoren berechnen",
          "b": "Ist ein Eigenwert \\(\\lambda\\) gefunden, so berechnen sich die zugehörigen Eigenvektoren über das LGS \\((A - \\lambda E)\\vec{v} = \\vec{0}\\). Beispiel: Für \\(A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\) und \\(\\lambda_1 = +1\\) liefert der Gauß-Algorithmus Lösungen der Form \\(x = y\\), also \\(\\vec{v} = x\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\). Eigenvektor: \\(\\vec{v}_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\) bzw. alle Vielfachen davon.",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 218-219"
        },
        {
          "t": "Komplexe Eigenwerte",
          "b": "Das charakteristische Polynom von \\(A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\) ist \\(\\lambda^2 + 1\\). Im Reellen ist dies nicht zu faktorisieren und es gibt keine Eigenwerte. Im Komplexen hingegen ist \\(\\lambda^2 + 1 = (\\lambda + \\mathrm{i})(\\lambda - \\mathrm{i})\\) und \\(A\\) hat die komplexen Eigenwerte \\(\\lambda_{1,2} = \\pm\\mathrm{i}\\).",
          "tag": "beispiel",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 220"
        }
      ],
      "questions": [
        {
          "q": "Wie lautet die Eigenwertgleichung?",
          "a": "\\(A\\vec{v} = \\lambda\\vec{v}\\) mit \\(\\vec{v} \\ne \\vec{0}\\): Der Eigenvektor wird durch \\(A\\) auf das \\(\\lambda\\)-Fache von sich selbst abgebildet.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 211"
        },
        {
          "q": "Warum wird der Nullvektor als Eigenvektor ausgeschlossen?",
          "a": "Er würde die Eigenwertgleichung für jedes \\(\\lambda\\) erfüllen; für die Theorie ist aber wichtig, dass jedem Eigenvektor ein eindeutiger Eigenwert zugeordnet werden kann.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 212"
        },
        {
          "q": "Wie wird das charakteristische Polynom berechnet und woher kommt die dazu verwendete Gleichung?",
          "a": "\\(P_A(\\lambda) := \\det(A - \\lambda E)\\). Die Gleichung kommt aus der Umformung der Eigenwertgleichung: \\(A\\vec{v} = \\lambda\\vec{v} \\Leftrightarrow (A - \\lambda E)\\vec{v} = \\vec{0}\\); nichttriviale Lösungen existieren genau für \\(\\det(A - \\lambda E) = 0\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 213-216"
        },
        {
          "q": "Wie erhält man aus dem charakteristischen Polynom die Eigenwerte?",
          "a": "Die Nullstellen des charakteristischen Polynoms sind die Eigenwerte von \\(A\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 216"
        },
        {
          "q": "Wie berechnet man zu einem Eigenwert die zugehörigen Eigenvektoren?",
          "a": "Über das LGS \\((A - \\lambda E)\\vec{v} = \\vec{0}\\), z. B. mit dem Gauß-Algorithmus.",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 218"
        },
        {
          "q": "Kann eine reelle Matrix komplexe Eigenwerte haben?",
          "a": "Ja. Beispiel: Das charakteristische Polynom \\(\\lambda^2 + 1\\) hat im Reellen keine Nullstellen; im Komplexen faktorisiert es zu \\((\\lambda + \\mathrm{i})(\\lambda - \\mathrm{i})\\) mit den Eigenwerten \\(\\pm\\mathrm{i}\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 220"
        },
        {
          "q": "Welchen Grad hat das charakteristische Polynom einer (n × n)-Matrix?",
          "a": "Es ist ein Polynom \\(n\\)-ten Grades in \\(\\lambda\\).",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 216"
        }
      ],
      "flashcards": [
        {
          "front": "Eigenwertgleichung",
          "back": "\\(A\\vec{v} = \\lambda\\vec{v}\\), \\(\\vec{v} \\ne \\vec{0}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 211"
        },
        {
          "front": "Bedingung für Eigenwerte",
          "back": "\\(\\det(A - \\lambda E) = 0\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 215"
        },
        {
          "front": "Charakteristisches Polynom",
          "back": "\\(P_A(\\lambda) = \\det(A - \\lambda E)\\), Polynom \\(n\\)-ten Grades; Nullstellen = Eigenwerte",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 216"
        },
        {
          "front": "Eigenvektoren zu gefundenem \\(\\lambda\\)",
          "back": "Lösungen des LGS \\((A - \\lambda E)\\vec{v} = \\vec{0}\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 218"
        },
        {
          "front": "Warum \\(\\vec{v} \\ne \\vec{0}\\)?",
          "back": "Der Nullvektor erfüllt die Gleichung für jedes \\(\\lambda\\) — der Eigenwert wäre nicht eindeutig",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 212"
        },
        {
          "front": "Eigenwerte von \\(\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\)",
          "back": "\\(\\lambda_{1,2} = \\pm 1\\) (aus \\(\\lambda^2 - 1 = 0\\)); EV zu \\(+1\\): \\((1, 1)^T\\)",
          "source": "VorlesungFolienLAA-2026.pdf, Folien 217, 219"
        },
        {
          "front": "Eigenwerte von \\(\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\)",
          "back": "Reell: keine; komplex: \\(\\lambda_{1,2} = \\pm\\mathrm{i}\\) (aus \\(\\lambda^2 + 1 = 0\\))",
          "source": "VorlesungFolienLAA-2026.pdf, Folie 220"
        }
      ],
      "exercises": [
        {
          "ref": "Aufgabe 38",
          "task": "Bestimmen Sie von \\[A = \\begin{pmatrix} 1 & 2 \\\\ 3 & -1 \\end{pmatrix}, \\qquad B = \\begin{pmatrix} 1 & 0 & 3 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & -1 \\end{pmatrix}\\] die Eigenwerte.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 38"
        },
        {
          "ref": "Aufgabe 39",
          "task": "Wiederholungsfragen zur linearen Algebra — u. a.: Definition des Vektorraums der reellen Zahlen und der linearen Unabhängigkeit; Rang einer Matrix; besondere Matrizentypen; inhomogene LGS; erlaubte Operationen beim Gauß-Algorithmus; Laplace'scher Entwicklungssatz; Anwendungen und geometrische Interpretation der Determinante; Regel von Sarrus; Folgerungen aus \\(\\det A \\ne 0\\); Rechenregeln für Determinanten; Definition des Kreuzprodukts; Standardskalarprodukt und Standardnorm; Winkelberechnung im \\(\\mathbb{R}^n\\); Eigenwertgleichung und charakteristisches Polynom.",
          "note": "Umfasst den Stoff der Kapitel Vektorräume bis Eigenwerte (Aufgabenteile a–q im Übungsblatt). Die Theoriefragen sind in den Modi „Fragen“ der jeweiligen Themen mit Folienbeleg enthalten.",
          "source": "ÜbungsaufgabenLAA.pdf, Aufgabe 39"
        }
      ]
    }
  ]
} satisfies RawSubject;

export default laa;
