import type { RawSubject } from "../../types/content";

const laa = {
  id: "laa",
  title: "LAA",
  subtitle: "Lineare Algebra und Analysis",
  icon: "📐",
  features: {
    math: true
  },
  topics: [
    {
      id: "funktionen",
      title: "Funktionen & Polynome",
      icon: "📈",
      cards: [
        {
          title: "Beschränkte Funktionen",
          body: "Eine Funktion \\(f: D \\to \\mathbb{R}\\) heißt beschränkt, wenn es Zahlen \\(M, N \\in \\mathbb{R}\\) gibt, sodass für alle \\(x \\in D\\) gilt: \\[M \\le f(x) \\le N\\] \\(M\\) heißt untere Schranke, \\(N\\) obere Schranke von \\(f\\). Gibt es solche \\(M\\) und \\(N\\) nicht, heißt \\(f\\) unbeschränkt.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 8"
        },
        {
          title: "Beschränktheit hängt vom Definitionsbereich ab",
          body: "\\(f_1(x) := \\text{konst}\\) ist beschränkt mit \\(M = N = \\text{konst}\\). \\(f_2: \\mathbb{R} \\to \\mathbb{R},\\; f_2(x) := x\\) ist unbeschränkt. Auf dem Definitionsbereich \\(D := [0, \\pi]\\) ist \\(f_2\\) jedoch beschränkt mit unterer Schranke \\(M = 0\\) und oberer Schranke \\(N = \\pi\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 9"
        },
        {
          title: "Monotone Funktionen",
          body: "\\(f: D \\to \\mathbb{R}\\) heißt monoton wachsend, wenn für alle \\(x_1, x_2 \\in D\\) mit \\(x_1 < x_2\\) gilt: \\(f(x_1) \\le f(x_2)\\). Sie heißt monoton fallend, wenn \\(f(x_1) \\ge f(x_2)\\) gilt. Gilt statt \\(\\le\\) bzw. \\(\\ge\\) sogar \\(<\\) bzw. \\(>\\), heißt \\(f\\) streng monoton wachsend bzw. streng monoton fallend. Beispiel: \\(f(x) := x^2\\) ist auf \\(]-\\infty, 0]\\) streng monoton fallend und auf \\([0, \\infty[\\) streng monoton wachsend.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 10-11"
        },
        {
          title: "Gerade und ungerade Funktionen",
          body: "\\(f: D \\to \\mathbb{R}\\) heißt gerade, wenn für alle \\(x \\in D\\) auch \\(-x \\in D\\) ist und \\(f(-x) = f(x)\\) gilt. \\(f\\) heißt ungerade, wenn für alle \\(x \\in D\\) auch \\(-x \\in D\\) ist und \\(f(-x) = -f(x)\\) gilt. Beispiel: \\(f(x) := x^2\\) ist gerade, \\(g(x) := x\\) ist ungerade.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 12-13"
        },
        {
          title: "Periodische Funktionen",
          body: "\\(f: \\mathbb{R} \\to \\mathbb{R}\\) heißt periodisch, wenn es eine Zahl \\(p \\in \\mathbb{R}^+ \\setminus \\{0\\}\\) gibt, sodass für alle \\(x \\in \\mathbb{R}\\) gilt: \\(f(x + p) = f(x)\\). Die kleinste dieser Zahlen \\(p\\) heißt Periode von \\(f\\). Beispiel: \\(\\sin x\\) und \\(\\cos x\\) sind periodisch mit der Periode \\(2\\pi\\), kurz \\(2\\pi\\)-periodisch.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 14-15"
        },
        {
          title: "Polynome",
          body: "Polynome sind Funktionen der Form \\[p(x) := \\sum_{k=0}^{n} a_k x^k = a_0 + a_1 x + a_2 x^2 + \\dots + a_n x^n\\] Die Koeffizienten \\(a_k\\) sind reelle Zahlen, \\(x\\) ist eine reelle Variable.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 17"
        },
        {
          title: "Monome und Grad",
          body: "Als Bausteine von Polynomen können die so genannten Monome \\(x^k\\) betrachtet werden. Der höchste auftretende Exponent (also \\(n\\), falls \\(a_n \\ne 0\\)) wird als der Grad von \\(p\\) bezeichnet.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 18"
        },
        {
          title: "Rationale Funktionen",
          body: "Der Bruch zweier Polynome \\(f(z) := \\frac{p(z)}{q(z)}\\) mit \\(q(z) \\ne 0\\) heißt rationale Funktion.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 21"
        },
        {
          title: "Nullstellen und Pole rationaler Funktionen",
          body: "Die Nullstellen von \\(f\\) sind identisch mit denen des Zählerpolynoms \\(p\\). An den Nullstellen des Nennerpolynoms \\(q\\) ist \\(f\\) nicht definiert — solche Punkte heißen Pole. Da sich Polynome ähnlich wie reelle Zahlen dividieren lassen (Polynomdivision), kann die Darstellung einer rationalen Funktion oft vereinfacht werden.",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 22"
        },
        {
          title: "Polynomdivision",
          body: "Beispiel von den Folien: \\[(x^3 + 2x^2 + 3x + 4) : (x - 1) = x^2 + 3x + 6 + \\frac{10}{x-1}\\] Gerechnet wird schrittweise: \\(-(x^3 - x^2)\\) liefert \\(3x^2 + 3x + 4\\), dann \\(-(3x^2 - 3x)\\) liefert \\(6x + 4\\), dann \\(-(6x - 6)\\) liefert den Rest \\(10\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 23"
        }
      ],
      questions: [
        {
          question: "Wann heißt eine Funktion beschränkt?",
          answer: "Wenn es Zahlen \\(M, N \\in \\mathbb{R}\\) gibt, sodass für alle \\(x \\in D\\) gilt: \\(M \\le f(x) \\le N\\). \\(M\\) heißt untere, \\(N\\) obere Schranke. Gibt es solche Zahlen nicht, heißt die Funktion unbeschränkt.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 8"
        },
        {
          question: "Wann heißt eine Funktion streng monoton wachsend?",
          answer: "Wenn für alle \\(x_1, x_2 \\in D\\) mit \\(x_1 < x_2\\) gilt: \\(f(x_1) < f(x_2)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 10"
        },
        {
          question: "Woran erkennt man gerade bzw. ungerade Funktionen?",
          answer: "Gerade: \\(f(-x) = f(x)\\) für alle \\(x \\in D\\) (mit \\(-x \\in D\\)). Ungerade: \\(f(-x) = -f(x)\\). Beispiele: \\(x^2\\) ist gerade, \\(x\\) ist ungerade.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 12-13"
        },
        {
          question: "Wann heißt eine Funktion periodisch und was ist die Periode?",
          answer: "Wenn es ein \\(p \\in \\mathbb{R}^+ \\setminus \\{0\\}\\) gibt mit \\(f(x + p) = f(x)\\) für alle \\(x \\in \\mathbb{R}\\). Die kleinste solche Zahl \\(p\\) heißt Periode.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 14"
        },
        {
          question: "Was ist ein Polynom und was ist sein Grad?",
          answer: "Eine Funktion der Form \\(p(x) := \\sum_{k=0}^{n} a_k x^k\\) mit reellen Koeffizienten \\(a_k\\). Der Grad ist der höchste auftretende Exponent \\(n\\) (falls \\(a_n \\ne 0\\)).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 17-18"
        },
        {
          question: "Was ist eine rationale Funktion?",
          answer: "Der Bruch zweier Polynome \\(f(z) := \\frac{p(z)}{q(z)}\\) mit \\(q(z) \\ne 0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 21"
        },
        {
          question: "Was sind die Pole einer rationalen Funktion?",
          answer: "Die Nullstellen des Nennerpolynoms \\(q\\). An diesen Punkten ist die rationale Funktion nicht definiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 22"
        },
        {
          question: "Wozu dient die Polynomdivision bei rationalen Funktionen?",
          answer: "In vielen Fällen ist die Darstellung einer rationalen Funktion unnötig kompliziert. Ähnlich wie reelle Zahlen können Polynome dividiert werden, um die Darstellung zu vereinfachen.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 22"
        }
      ],
      flashcards: [
        {
          front: "Wann heißt eine Funktion \\(f: D \\to \\mathbb{R}\\) beschränkt?",
          back: "Wenn es Zahlen \\(M, N \\in \\mathbb{R}\\) gibt, sodass für alle \\(x \\in D\\) gilt: \\(M \\le f(x) \\le N\\). Dabei heißt \\(M\\) untere Schranke und \\(N\\) obere Schranke von \\(f\\). Gibt es solche Zahlen nicht, heißt \\(f\\) unbeschränkt.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 8"
        },
        {
          front: "Was ist der Unterschied zwischen monoton wachsend und streng monoton wachsend?",
          back: "Monoton wachsend: Für alle \\(x_1, x_2 \\in D\\) mit \\(x_1 < x_2\\) gilt \\(f(x_1) \\le f(x_2)\\). Streng monoton wachsend: Es gilt sogar \\(f(x_1) < f(x_2)\\). Analog heißt \\(f\\) monoton fallend bei \\(f(x_1) \\ge f(x_2)\\) und streng monoton fallend bei \\(f(x_1) > f(x_2)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 10"
        },
        {
          front: "Wann heißt eine Funktion gerade?",
          back: "Wenn für alle \\(x \\in D\\) auch \\(-x \\in D\\) ist und \\(f(-x) = f(x)\\) gilt. Beispiel: \\(f(x) := x^2\\) ist gerade.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 12-13"
        },
        {
          front: "Wann heißt eine Funktion ungerade?",
          back: "Wenn für alle \\(x \\in D\\) auch \\(-x \\in D\\) ist und \\(f(-x) = -f(x)\\) gilt. Beispiel: \\(g(x) := x\\) ist ungerade.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 12-13"
        },
        {
          front: "Wann heißt eine Funktion periodisch, und was ist ihre Periode?",
          back: "Wenn es eine Zahl \\(p \\in \\mathbb{R}^+ \\setminus \\{0\\}\\) gibt, sodass für alle \\(x \\in \\mathbb{R}\\) gilt: \\(f(x + p) = f(x)\\). Die kleinste dieser Zahlen \\(p\\) heißt Periode von \\(f\\). Beispiel: \\(\\sin\\) und \\(\\cos\\) sind periodisch mit der Periode \\(2\\pi\\), kurz \\(2\\pi\\)-periodisch.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 14-15"
        },
        {
          front: "Wie sieht die allgemeine Form eines Polynoms aus, und was ist sein Grad?",
          back: "Polynome sind Funktionen der Form \\(p(x) = \\sum_{k=0}^{n} a_k x^k = a_0 + a_1 x + \\dots + a_n x^n\\) mit reellen Koeffizienten \\(a_k\\). Der höchste auftretende Exponent (also \\(n\\), falls \\(a_n \\ne 0\\)) heißt Grad von \\(p\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 17-18"
        },
        {
          front: "Was ist eine rationale Funktion?",
          back: "Der Bruch zweier Polynome: \\(f(z) := \\frac{p(z)}{q(z)}\\) mit \\(q(z) \\ne 0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 21"
        },
        {
          front: "Was sind die Pole einer rationalen Funktion?",
          back: "Die Nullstellen des Nennerpolynoms \\(q\\) — an diesen Punkten ist die rationale Funktion nicht definiert. Die Nullstellen von \\(f\\) selbst sind dagegen die Nullstellen des Zählerpolynoms \\(p\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 22"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 1",
          task: "Beweisen oder widerlegen Sie: Die Summe von zwei beschränkten Funktionen ist stets wieder beschränkt.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 1"
        },
        {
          ref: "Aufgabe 2",
          task: "Beweisen oder widerlegen Sie: Die Summe von zwei periodischen Funktionen ist stets wieder periodisch, wenn sie die gleiche Periode haben.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 2"
        },
        {
          ref: "Aufgabe 3",
          task: "Beweisen oder widerlegen Sie: Das Produkt von einer geraden und einer ungeraden Funktion ist stets ungerade.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 3"
        },
        {
          ref: "Aufgabe 4",
          task: "Beweisen oder widerlegen Sie: Das Produkt von zwei ungeraden Funktionen ist stets gerade.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 4"
        },
        {
          ref: "Aufgabe 5",
          task: "Führen Sie eine Polynomdivision mit den gegebenen Polynomen durch:<br>a) \\((x^3 - (1+2i)x^2 - (1-2i)x + 1) : (x - 1)\\)<br>b) \\((x^4 - 3x^3 + 3x^2 - 3x + 2) : (x^2 + 1)\\)",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 5"
        }
      ]
    },
    {
      id: "komplexe-zahlen",
      title: "Komplexe Zahlen",
      icon: "🌀",
      cards: [
        {
          title: "Komplexe Zahlen",
          body: "Komplexe Zahlen sind Zahlen der Form \\(a + b\\mathrm{i}\\) mit \\(a, b \\in \\mathbb{R}\\). Die Größe \\(\\mathrm{i}\\) ist durch die Gleichung \\(\\mathrm{i}^2 = -1\\) charakterisiert. \\(a\\) heißt Realteil und \\(b\\) Imaginärteil von \\(z := a + b\\mathrm{i}\\); kurz: \\(\\operatorname{Re} z := a\\) und \\(\\operatorname{Im} z := b\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 24"
        },
        {
          title: "Warum komplexe Zahlen?",
          body: "Das Quadrat einer reellen Zahl ist nie negativ. Um beispielsweise die Gleichung \\(x^2 = -1\\) zu lösen, braucht man eine Erweiterung der reellen Zahlen: die komplexen Zahlen \\(\\mathbb{C}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 25"
        },
        {
          title: "Real- und Imaginärteil sind reell",
          body: "Real- und Imaginärteil sind reelle Zahlen — was beim Imaginärteil gerne vergessen wird. Ist \\(b = 0\\), bleibt nur der Realteil übrig: \\(a + 0\\mathrm{i} = a \\in \\mathbb{R}\\).",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 26"
        },
        {
          title: "Addition und Subtraktion",
          body: "Wie bei reellen Zahlen, nur wird das Ergebnis wieder in der Form \\(a + b\\mathrm{i}\\) geschrieben: \\[(a + b\\mathrm{i}) + (c + d\\mathrm{i}) = (a + c) + (b + d)\\mathrm{i}\\] \\[(a + b\\mathrm{i}) - (c + d\\mathrm{i}) = (a - c) + (b - d)\\mathrm{i}\\]",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 27"
        },
        {
          title: "Multiplikation",
          body: "\\[(a + b\\mathrm{i})(c + d\\mathrm{i}) = (ac - bd) + (ad + bc)\\mathrm{i}\\] Dies entspricht dem gewöhnlichen Ausmultiplizieren von Klammern mit reellen Zahlen, wobei lediglich \\(\\mathrm{i}^2 = -1\\) eingesetzt wird.",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 28"
        },
        {
          title: "Division",
          body: "\\[\\frac{a + b\\mathrm{i}}{c + d\\mathrm{i}} = \\frac{(a + b\\mathrm{i})(c - d\\mathrm{i})}{(c + d\\mathrm{i})(c - d\\mathrm{i})} = \\frac{ac + bd}{c^2 + d^2} + \\frac{bc - ad}{c^2 + d^2}\\mathrm{i}\\]",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 29"
        },
        {
          title: "Komplexe Konjugation",
          body: "Dreht man das Vorzeichen des Imaginärteils einer komplexen Zahl \\(z\\) um, erhält man die komplex konjugierte Zahl \\(\\bar{z}\\): \\[z = a + b\\mathrm{i} \\;\\Rightarrow\\; \\bar{z} := a - b\\mathrm{i}\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 30"
        },
        {
          title: "Gauß'sche Zahlenebene",
          body: "Komplexe Zahlen werden in der Gauß'schen Zahlenebene dargestellt: \\(\\operatorname{Re} z\\) auf der einen Achse, \\(\\mathrm{i}\\operatorname{Im} z\\) auf der anderen. \\(z = a + b\\mathrm{i}\\) liegt bei \\((a, b)\\), die konjugierte Zahl \\(\\bar{z} = a - b\\mathrm{i}\\) bei \\((a, -b)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 31"
        },
        {
          title: "Betrag einer komplexen Zahl",
          body: "Der Betrag \\(|z|\\) ist der Abstand des Punktes vom Koordinatenursprung. Nach dem Satz von Pythagoras: \\[|z| := \\sqrt{a^2 + b^2}\\] Für reelle Zahlen \\(a\\) gibt diese Gleichung ebenfalls den Betrag an: \\(|a| = \\sqrt{a^2}\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 32"
        },
        {
          title: "Polarkoordinaten",
          body: "Alternative Beschreibung über den Abstand \\(r\\) vom Koordinatenursprung und den Winkel \\(\\varphi\\) von der positiven reellen Achse aus. Mit \\(a = r\\cos\\varphi\\) und \\(b = r\\sin\\varphi\\) gilt: \\[z = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 33-34"
        },
        {
          title: "Eulerformel",
          body: "\\[e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi\\] Damit ist eine kürzere Schreibweise möglich: \\(z = r e^{\\mathrm{i}\\varphi}\\). Jede Notation hat ihre Vor- und Nachteile — abhängig davon, was betrachtet wird, ist die eine oder andere hilfreich.",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 34-35"
        },
        {
          title: "Multiplikation in Polarform",
          body: "\\[z_1 \\cdot z_2 = r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = r_1 r_2\\, e^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}\\] Geometrische Bedeutung: Die Beträge multiplizieren sich und die Winkel addieren sich.",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 36"
        }
      ],
      questions: [
        {
          question: "Wie ist eine komplexe Zahl definiert und wodurch ist i charakterisiert?",
          answer: "Eine komplexe Zahl hat die Form \\(a + b\\mathrm{i}\\) mit \\(a, b \\in \\mathbb{R}\\). Die Größe \\(\\mathrm{i}\\) ist durch \\(\\mathrm{i}^2 = -1\\) charakterisiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 24"
        },
        {
          question: "Gibt es einen Zusammenhang zwischen reellen und komplexen Zahlen?",
          answer: "Die komplexen Zahlen sind eine Erweiterung der reellen Zahlen (nötig z. B. für \\(x^2 = -1\\)). Ist \\(b = 0\\), bleibt nur der Realteil übrig: \\(a + 0\\mathrm{i} = a \\in \\mathbb{R}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 25-26"
        },
        {
          question: "Wie lauten die Grundrechenregeln für komplexe Zahlen?",
          answer: "Addition/Subtraktion komponentenweise: \\((a+b\\mathrm{i}) \\pm (c+d\\mathrm{i}) = (a \\pm c) + (b \\pm d)\\mathrm{i}\\). Multiplikation: \\((a+b\\mathrm{i})(c+d\\mathrm{i}) = (ac-bd) + (ad+bc)\\mathrm{i}\\). Division: mit \\(c - d\\mathrm{i}\\) erweitern, Ergebnis \\(\\frac{ac+bd}{c^2+d^2} + \\frac{bc-ad}{c^2+d^2}\\mathrm{i}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 27-29"
        },
        {
          question: "Was ist komplexe Konjugation anschaulich?",
          answer: "Das Umdrehen des Vorzeichens des Imaginärteils: aus \\(z = a + b\\mathrm{i}\\) wird \\(\\bar{z} = a - b\\mathrm{i}\\). In der Gauß'schen Zahlenebene liegt \\(\\bar{z}\\) bei \\((a, -b)\\), also gespiegelt an der reellen Achse.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 30-31"
        },
        {
          question: "Wie ist der Betrag einer komplexen Zahl definiert?",
          answer: "Als Abstand des Punktes vom Koordinatenursprung; nach dem Satz von Pythagoras \\(|z| = \\sqrt{a^2 + b^2}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 32"
        },
        {
          question: "Geben Sie die Polarkoordinatendarstellung komplexer Zahlen an.",
          answer: "\\(z = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi) = r e^{\\mathrm{i}\\varphi}\\) mit Abstand \\(r\\) vom Ursprung und Winkel \\(\\varphi\\) von der positiven reellen Achse; dabei ist \\(a = r\\cos\\varphi\\), \\(b = r\\sin\\varphi\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 33-34"
        },
        {
          question: "Wie lautet die Eulerformel?",
          answer: "\\(e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi\\)",
          source: "VorlesungFolienLAA-2026.pdf, Folie 34"
        },
        {
          question: "Welche geometrische Bedeutung hat die Multiplikation komplexer Zahlen?",
          answer: "In Polarform gilt \\(z_1 z_2 = r_1 r_2 e^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}\\): Die Beträge multiplizieren sich, die Winkel addieren sich.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 36"
        },
        {
          question: "Warum gibt es so viele Darstellungen komplexer Zahlen?",
          answer: "Jede Notation hat ihre Vor- und Nachteile. Abhängig davon, was gerade betrachtet wird, ist die eine oder die andere Notation hilfreich.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 35"
        }
      ],
      flashcards: [
        {
          front: "Wodurch ist die imaginäre Einheit \\(\\mathrm{i}\\) charakterisiert?",
          back: "Durch die Gleichung \\(\\mathrm{i}^2 = -1\\). Komplexe Zahlen sind Zahlen der Form \\(z = a + b\\mathrm{i}\\) mit \\(a, b \\in \\mathbb{R}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 24"
        },
        {
          front: "Was sind Real- und Imaginärteil von \\(z = a + b\\mathrm{i}\\)?",
          back: "\\(\\operatorname{Re} z = a\\) und \\(\\operatorname{Im} z = b\\). Beide sind reelle Zahlen — was beim Imaginärteil gerne vergessen wird.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 24, 26"
        },
        {
          front: "Wie multipliziert man zwei komplexe Zahlen \\((a+b\\mathrm{i})\\) und \\((c+d\\mathrm{i})\\)?",
          back: "\\((a+b\\mathrm{i})(c+d\\mathrm{i}) = (ac - bd) + (ad + bc)\\mathrm{i}\\). Das entspricht dem gewöhnlichen Ausmultiplizieren von Klammern mit reellen Zahlen, wobei lediglich \\(\\mathrm{i}^2 = -1\\) eingesetzt wird.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 28"
        },
        {
          front: "Wie dividiert man zwei komplexe Zahlen?",
          back: "Man erweitert mit der konjugierten Zahl des Nenners: \\(\\frac{a+b\\mathrm{i}}{c+d\\mathrm{i}} = \\frac{(a+b\\mathrm{i})(c-d\\mathrm{i})}{(c+d\\mathrm{i})(c-d\\mathrm{i})} = \\frac{ac+bd}{c^2+d^2} + \\frac{bc-ad}{c^2+d^2}\\mathrm{i}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 29"
        },
        {
          front: "Was ist die komplex konjugierte Zahl \\(\\bar{z}\\)?",
          back: "Dreht man das Vorzeichen des Imaginärteils von \\(z\\) um, erhält man die komplex konjugierte Zahl: Aus \\(z = a + b\\mathrm{i}\\) wird \\(\\bar{z} = a - b\\mathrm{i}\\). In der Gauß'schen Zahlenebene liegt \\(\\bar{z}\\) bei \\((a, -b)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 30"
        },
        {
          front: "Wie ist der Betrag \\(|z|\\) einer komplexen Zahl definiert?",
          back: "Als Abstand des Punktes vom Koordinatenursprung in der Gauß'schen Zahlenebene. Nach dem Satz von Pythagoras gilt \\(|z| = \\sqrt{a^2 + b^2}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 32"
        },
        {
          front: "Wie lautet die Eulerformel?",
          back: "\\(e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi\\). Damit lässt sich eine komplexe Zahl in Polarkoordinaten kurz als \\(z = r e^{\\mathrm{i}\\varphi}\\) schreiben — mit dem Abstand \\(r\\) vom Ursprung und dem Winkel \\(\\varphi\\) von der positiven reellen Achse aus.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 34"
        },
        {
          front: "Was passiert geometrisch bei der Multiplikation komplexer Zahlen in Polarform?",
          back: "\\(z_1 \\cdot z_2 = r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = r_1 r_2\\, e^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}\\): Die Beträge multiplizieren sich und die Winkel addieren sich.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 36"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 6",
          task: "a) Sei \\(z_1 = 2 + 4\\mathrm{i}\\) und \\(z_2 = 3 + 7\\mathrm{i}\\). Bilden Sie \\(z_1 \\cdot z_2\\) sowie \\(\\frac{z_1}{z_2}\\) und zeichnen Sie die Zahlen \\(z_1\\) und \\(z_2\\) in die Gauß'sche Zahlenebene ein.<br>b) Sei \\(z_1 = 3e^{\\mathrm{i}\\pi}\\) und \\(z_2 = 12 e^{\\frac{3\\mathrm{i}\\pi}{2}}\\). Bestimmen Sie den Betrag des Produktes aus \\(z_1\\) und \\(z_2\\) und beschreiben Sie dessen Änderung, wenn man die Winkel in \\(z_1\\) und \\(z_2\\) mit 4 multipliziert.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 6"
        },
        {
          ref: "Aufgabe 8",
          task: "Berechnen Sie den Real- und Imaginärteil der folgenden Zahl: \\[z = \\frac{(-2 + 5\\mathrm{i}) \\cdot (1 + 3\\mathrm{i})}{2 + 3\\mathrm{i}} - \\left(\\frac{2}{13} - \\frac{3}{13}\\mathrm{i}\\right)\\]",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 8"
        }
      ]
    },
    {
      id: "trig-exp-log",
      title: "Sin, Cos, Exp & Log",
      icon: "📐",
      cards: [
        {
          title: "Sinus und Kosinus",
          body: "Schwingungsprozesse tauchen besonders in der Physik und den Ingenieurwissenschaften sehr häufig auf — die sie beschreibenden Funktionen heißen Sinus und Kosinus (\\(\\sin\\) und \\(\\cos\\)). Sie gehen durch Verschieben um \\(\\frac{\\pi}{2}\\) ineinander über und sind \\(2\\pi\\)-periodisch.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 37, 39"
        },
        {
          title: "Nullstellen von Sinus und Kosinus",
          body: "\\[\\sin t = 0 \\text{ für } t = k\\pi,\\; k \\in \\mathbb{Z}\\] \\[\\cos t = 0 \\text{ für } t = \\tfrac{\\pi}{2} + k\\pi,\\; k \\in \\mathbb{Z}\\]",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 39"
        },
        {
          title: "Arcussinus und Arcuskosinus",
          body: "Für die Umkehrfunktionen gilt: \\[\\arcsin := \\sin^{-1} \\quad\\text{und}\\quad \\arccos := \\cos^{-1}\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 40"
        },
        {
          title: "Tangens",
          body: "Aus Sinus und Kosinus wird eine neue Funktion konstruiert: \\[\\tan t := \\frac{\\sin t}{\\cos t}\\] Der Tangens hat die gleichen Nullstellen wie der Sinus. Das „gestückelte“ Bild des Tangens ergibt sich aus den bekannten Nullstellen des Kosinus.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 41, 43"
        },
        {
          title: "Exponentialfunktion",
          body: "\\(e^x\\) mit einem reellen Exponenten \\(x\\), dabei ist \\(e = 2{,}71828\\ldots\\) die Eulersche Zahl.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 44"
        },
        {
          title: "Natürlicher Logarithmus",
          body: "Die Umkehrfunktion der Exponentialfunktion \\(f(x) := e^x\\) ist der natürliche Logarithmus \\(f^{-1}(x) = \\ln x\\). Es gilt also: \\[e^{\\ln x} = x \\quad\\text{und}\\quad \\ln e^x = x\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 45"
        },
        {
          title: "Allgemeine Potenz",
          body: "Die allgemeine Potenz \\(a^x\\) mit \\(a > 0\\) wird über die Exponentialfunktion definiert: \\[a^x := e^{x \\ln a}\\] Die Umkehrfunktion von \\(a^x\\) ist der Logarithmus zur Basis \\(a\\), notiert als \\(\\log_a x\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 46"
        },
        {
          title: "Potenzregeln",
          body: "Seien \\(a, b > 0\\) und \\(r, s \\in \\mathbb{R}\\): \\[a^0 = 1 \\text{ (speziell auch } 0^0 = 1\\text{)}, \\quad a^{-s} = \\frac{1}{a^s}\\] \\[a^{r+s} = a^r a^s, \\quad a^{r-s} = \\frac{a^r}{a^s}\\] \\[(a^r)^s = a^{rs}, \\quad (ab)^r = a^r b^r\\]",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 47"
        },
        {
          title: "Logarithmusregeln",
          body: "Seien \\(a, x, y > 0\\): \\[\\log_a xy = \\log_a x + \\log_a y\\] \\[\\log_a x^y = y \\log_a x\\] \\[\\log_a \\frac{x}{y} = \\log_a x - \\log_a y\\]",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 48"
        }
      ],
      questions: [
        {
          question: "Erklären Sie den Zusammenhang zwischen Sinus, Kosinus und Tangens. Wo liegen die Nullstellen?",
          answer: "\\(\\tan t = \\frac{\\sin t}{\\cos t}\\). Sinus und Kosinus gehen durch Verschieben um \\(\\frac{\\pi}{2}\\) ineinander über. Nullstellen: \\(\\sin t = 0\\) für \\(t = k\\pi\\), \\(\\cos t = 0\\) für \\(t = \\frac{\\pi}{2} + k\\pi\\) (\\(k \\in \\mathbb{Z}\\)); der Tangens hat die gleichen Nullstellen wie der Sinus.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 39, 41"
        },
        {
          question: "Warum ist der Graph des Tangens „gestückelt“?",
          answer: "Wegen der Nullstellen des Kosinus im Nenner von \\(\\tan t = \\frac{\\sin t}{\\cos t}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 43"
        },
        {
          question: "Wie lautet der Zusammenhang zwischen Logarithmus und Exponentialfunktion?",
          answer: "Der natürliche Logarithmus ist die Umkehrfunktion der Exponentialfunktion: \\(e^{\\ln x} = x\\) und \\(\\ln e^x = x\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 45"
        },
        {
          question: "Wie wird die allgemeine Potenz definiert?",
          answer: "\\(a^x := e^{x \\ln a}\\) für \\(a > 0\\). Die Umkehrfunktion ist \\(\\log_a x\\), der Logarithmus zur Basis \\(a\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 46"
        },
        {
          question: "Wie lauten die Potenzregeln für \\(a^{r+s}\\) und \\((a^r)^s\\)?",
          answer: "\\(a^{r+s} = a^r a^s\\) und \\((a^r)^s = a^{rs}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 47"
        },
        {
          question: "Wie lauten die drei Logarithmusregeln?",
          answer: "\\(\\log_a xy = \\log_a x + \\log_a y\\); \\(\\log_a x^y = y \\log_a x\\); \\(\\log_a \\frac{x}{y} = \\log_a x - \\log_a y\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 48"
        },
        {
          question: "Was sind Arcussinus und Arcuskosinus?",
          answer: "Die Umkehrfunktionen von Sinus und Kosinus: \\(\\arcsin := \\sin^{-1}\\), \\(\\arccos := \\cos^{-1}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 40"
        }
      ],
      flashcards: [
        {
          front: "Wo liegen die Nullstellen des Sinus?",
          back: "Bei allen ganzzahligen Vielfachen von \\(\\pi\\): \\(\\sin t = 0\\) für \\(t = k\\pi\\) mit \\(k \\in \\mathbb{Z}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 39"
        },
        {
          front: "Wo liegen die Nullstellen des Kosinus?",
          back: "\\(\\cos t = 0\\) für \\(t = \\frac{\\pi}{2} + k\\pi\\) mit \\(k \\in \\mathbb{Z}\\). Sinus und Kosinus gehen durch Verschieben um \\(\\frac{\\pi}{2}\\) ineinander über.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 39"
        },
        {
          front: "Wie ist der Tangens definiert, und wo liegen seine Nullstellen?",
          back: "\\(\\tan t := \\frac{\\sin t}{\\cos t}\\). Der Tangens hat die gleichen Nullstellen wie der Sinus; sein „gestückeltes“ Bild ergibt sich aus den Nullstellen des Kosinus im Nenner.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 41, 43"
        },
        {
          front: "Was ist die Eulersche Zahl \\(e\\)?",
          back: "\\(e = 2{,}71828\\ldots\\) — die Basis der Exponentialfunktion \\(e^x\\) mit reellem Exponenten \\(x\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 44"
        },
        {
          front: "In welchem Zusammenhang stehen Exponentialfunktion und natürlicher Logarithmus?",
          back: "Der natürliche Logarithmus \\(\\ln x\\) ist die Umkehrfunktion der Exponentialfunktion \\(e^x\\). Es gilt daher \\(e^{\\ln x} = x\\) und \\(\\ln e^x = x\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 45"
        },
        {
          front: "Wie wird die allgemeine Potenz \\(a^x\\) definiert?",
          back: "Über die Exponentialfunktion: \\(a^x := e^{x \\ln a}\\) für \\(a > 0\\). Die Umkehrfunktion von \\(a^x\\) ist der Logarithmus zur Basis \\(a\\), notiert als \\(\\log_a x\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 46"
        },
        {
          front: "Wie lautet die Logarithmusregel für ein Produkt, also \\(\\log_a xy\\)?",
          back: "\\(\\log_a xy = \\log_a x + \\log_a y\\) — der Logarithmus eines Produkts ist die Summe der Logarithmen (für \\(a, x, y > 0\\)).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 48"
        },
        {
          front: "Wie lautet die Logarithmusregel für eine Potenz, also \\(\\log_a x^y\\)?",
          back: "\\(\\log_a x^y = y \\log_a x\\) — der Exponent darf vor den Logarithmus gezogen werden. Für Quotienten gilt außerdem \\(\\log_a \\frac{x}{y} = \\log_a x - \\log_a y\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 48"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 7",
          task: "Betrachten Sie den Einheitskreis. Verwenden Sie diesen, um mithilfe der Schuldefinition des Sinus nachzuweisen, dass die Sinuskurve die Ihnen bekannte Form hat.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 7"
        },
        {
          ref: "Aufgabe 10",
          task: "a) Lösen Sie die folgende Exponentialgleichung: \\(a^{2x+n} = \\frac{a^{3x+2n}}{a^{3n}}\\)<br>b) Vereinfachen Sie den folgenden Term: \\(\\frac{(p^2 - 16q^2)^{n+1}}{(p + 4q)^{n+1}}\\)<br>c) Lösen Sie die Klammern auf: \\((m - n)^{-2}\\)<br>d) \\(\\log_2 a - \\log_2 b\\)<br>e) \\(2 \\cdot \\log x + \\frac{1}{2}\\log x^4 - \\log x^2\\)",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 10"
        }
      ]
    },
    {
      id: "folgen-reihen",
      title: "Folgen & Reihen",
      icon: "♾️",
      cards: [
        {
          title: "Wozu Folgen?",
          body: "Folgen werden wesentlich verwendet, um sich um die Begriffe Konvergenz und Divergenz zu kümmern und Konsequenzen daraus abzuleiten. Später sind Folgen Hilfsmittel, um sich an bestimmte Werte „anzuschleichen“ — sie sind die Grundlage für Begriffe wie Stetigkeit und Differenzierbarkeit.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 49-50"
        },
        {
          title: "Folge",
          body: "Eine reelle bzw. komplexe Folge \\((x_n)\\) ist eine Abbildung von \\(\\mathbb{N}\\) nach \\(\\mathbb{R}\\) bzw. \\(\\mathbb{C}\\). Jedem Index \\(n \\in \\mathbb{N}\\) wird dabei eine reelle bzw. komplexe Zahl \\(x_n\\) zugeordnet. Schreibweise \\(\\mathbb{K}\\): gemeint ist \\(\\mathbb{R}\\) oder \\(\\mathbb{C}\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 51"
        },
        {
          title: "Schreibweise von Folgen",
          body: "Statt der Funktionsschreibweise \\(f(n) := 1 - \\frac{1}{n}\\) schreibt man \\(x_n := 1 - \\frac{1}{n}\\). Das ergibt eine Auflistung: \\(0, \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\ldots\\) Die Folge an sich wird in Klammern geschrieben \\(\\left(1 - \\frac{1}{n}\\right)\\); ohne Klammern sind die einzelnen Folgenglieder \\(x_n\\) gemeint. Der Indexname (\\(n\\), \\(k\\), \\(i\\), …) ist egal.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 52-53"
        },
        {
          title: "Konvergenz und Nullfolge",
          body: "Eine Folge \\((x_n)\\) in \\(\\mathbb{K}\\) heißt konvergent gegen einen Grenzwert \\(a \\in \\mathbb{K}\\), wenn es zu jedem \\(\\varepsilon > 0\\) ein \\(N \\in \\mathbb{N}\\) gibt, sodass für alle Indizes \\(n \\ge N\\) die Ungleichung \\(|x_n - a| < \\varepsilon\\) gilt. Schreibweise: \\(\\lim_{n \\to \\infty} x_n = a\\) oder \\(x_n \\to a\\). Eine Folge mit Grenzwert 0 heißt Nullfolge.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 54"
        },
        {
          title: "ε-Umgebung",
          body: "Die Ungleichung \\(|x_n - a| < \\varepsilon\\) lässt sich im Reellen umformulieren zu \\(x_n \\in \\,]a - \\varepsilon, a + \\varepsilon[\\), der so genannten \\(\\varepsilon\\)-Umgebung des Punktes \\(a\\) (stets \\(\\varepsilon > 0\\)). Eine Folge ist demnach konvergent gegen \\(a\\), wenn sich in jedem noch so kleinen Intervall um \\(a\\) fast alle (alle bis auf endlich viele) Folgenglieder befinden. Ist eine Folge konvergent, so ist ihr Grenzwert eindeutig.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 55-57"
        },
        {
          title: "Standardbeispiel: 1/n ist Nullfolge",
          body: "Es gilt \\(\\lim_{n \\to \\infty} \\frac{1}{n} = 0\\). Beweis: Zu beliebig kleinem \\(\\varepsilon > 0\\) wählt man \\(N \\in \\mathbb{N}\\) größer als \\(\\frac{1}{\\varepsilon}\\). Dann gilt für alle \\(n \\ge N\\): \\[|x_n - 0| = \\frac{1}{n} \\le \\frac{1}{N} < \\varepsilon\\] Das \\(N\\) lässt sich auch direkt berechnen: aus \\(\\frac{1}{n} < \\varepsilon\\) folgt \\(n > \\frac{1}{\\varepsilon}\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 58-59"
        },
        {
          title: "Divergenz und Häufungspunkte",
          body: "Nicht konvergente Folgen heißen divergent. Beispiel: \\(x_n := n\\) wächst immer weiter an, es kann keinen Grenzwert geben. Die Folge \\(x_n := (-1)^n\\) hat zwei so genannte Häufungspunkte: \\(-1\\) und \\(+1\\). Folgen wie \\(x_n := n^2\\), die betraglich über jede Grenze wachsen, notiert man als \\(\\lim_{n\\to\\infty} |x_n| = \\infty\\) bzw. \\(|x_n| \\to \\infty\\); bei reellen Folgen ggf. mit Vorzeichen: \\(x_n := -n \\to -\\infty\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 60-61"
        },
        {
          title: "Rechenregeln für konvergente Folgen",
          body: "Seien \\((x_n)\\), \\((y_n)\\) konvergent mit \\(\\lim x_n = a\\), \\(\\lim y_n = b\\) und \\(c \\in \\mathbb{R}\\): \\[\\lim_{n\\to\\infty}(x_n + y_n) = a + b\\] \\[\\lim_{n\\to\\infty}(x_n \\cdot y_n) = ab, \\qquad \\lim_{n\\to\\infty} c \\cdot x_n = ca\\] \\[\\lim_{n\\to\\infty} \\frac{x_n}{y_n} = \\frac{a}{b}, \\text{ falls } b \\ne 0\\]",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folie 62"
        },
        {
          title: "Grenzwerte berechnen durch Zerlegen und Kürzen",
          body: "Die Folge \\(\\left(\\frac{1}{1 + \\frac{1}{n}}\\right)\\) ist aus der konstanten Folge \\((1)\\) und der Nullfolge \\(\\left(\\frac{1}{n}\\right)\\) zusammengesetzt: Grenzwert \\(\\frac{1}{1+0} = 1\\). Bei \\(\\left(\\frac{n}{n+1}\\right)\\) ist Vorsicht geboten, denn \\((n)\\) ist nicht konvergent — hier hilft Kürzen: \\(\\frac{n}{n+1} = \\frac{1}{1 + \\frac{1}{n}}\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 63-64"
        },
        {
          title: "Wichtige Grenzwerte (zum Merken)",
          body: "1. Für \\(|b| < 1\\) gilt \\(b^n \\to 0\\)<br>2. \\(\\left(1 + \\frac{a}{n}\\right)^n \\to e^a\\)<br>3. Für positives \\(a\\) gilt \\(a^{1/n} \\to 1\\) und \\(n^{1/n} \\to 1\\)",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 66"
        },
        {
          title: "Partialsumme",
          body: "Für eine (reelle oder komplexe) Folge \\((a_k)\\) heißt \\[S_n := \\sum_{k=0}^{n} a_k\\] die \\(n\\)-te Partialsumme. Sie ist einfach die Summe der ersten \\(n\\) Folgenglieder.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 70, 73"
        },
        {
          title: "Reihe",
          body: "Die Folge der Partialsummen heißt Reihe, notiert als \\(\\sum_{k=0}^{\\infty} a_k\\). Falls die Folge der Partialsummen \\((S_n)\\) konvergiert, heißt die Reihe konvergent, und ihr Wert ist \\[\\sum_{k=0}^{\\infty} a_k := \\lim_{n\\to\\infty} \\sum_{k=0}^{n} a_k\\] Die Begriffe Konvergenz und Divergenz für Reihen werden so einfach von Folgen übernommen.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 71-72"
        },
        {
          title: "Geometrische Summe und geometrische Reihe",
          body: "Für die geometrische Summe gilt (\\(x \\ne 1\\)): \\[S_n(x) = \\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}\\] Wegen \\(x^{n+1} \\to 0\\) für \\(|x| < 1\\) ist die geometrische Reihe für \\(x \\in \\,]-1, 1[\\) definiert mit dem Ergebnis \\[\\sum_{k=0}^{\\infty} x^k = \\frac{1}{1 - x}\\]",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 74"
        },
        {
          title: "Der Läufer im Stadion",
          body: "Ein Läufer muss vom Start ins Ziel alle Teilabschnitte durchlaufen (200 m, 100 m, 50 m, …). Mit der geometrischen Reihe kommt er an: \\[200 + 100 + \\ldots = 200 \\cdot \\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n = 200 \\cdot \\frac{1}{1 - \\frac{1}{2}} = 400\\]",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 67, 75"
        }
      ],
      questions: [
        {
          question: "Was ist eine Folge? Nennen Sie Beispiele.",
          answer: "Eine Abbildung von \\(\\mathbb{N}\\) nach \\(\\mathbb{R}\\) bzw. \\(\\mathbb{C}\\); jedem Index \\(n\\) wird eine Zahl \\(x_n\\) zugeordnet. Beispiele von den Folien: \\(x_n := 1 - \\frac{1}{n}\\), \\(x_n := \\frac{1}{n}\\), \\(x_n := n\\), \\(x_n := (-1)^n\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 51-61"
        },
        {
          question: "Wie ist die Konvergenz einer Folge definiert?",
          answer: "\\((x_n)\\) konvergiert gegen \\(a\\), wenn es zu jedem \\(\\varepsilon > 0\\) ein \\(N \\in \\mathbb{N}\\) gibt, sodass für alle \\(n \\ge N\\) gilt: \\(|x_n - a| < \\varepsilon\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 54"
        },
        {
          question: "Was ist eine Nullfolge?",
          answer: "Eine Folge mit Grenzwert 0. Standardbeispiel: \\(x_n := \\frac{1}{n}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 54, 58"
        },
        {
          question: "Was ist eine ε-Umgebung eines Punktes?",
          answer: "Das Intervall \\(]a - \\varepsilon, a + \\varepsilon[\\) um den Punkt \\(a\\), mit \\(\\varepsilon > 0\\). Eine Folge konvergiert gegen \\(a\\), wenn in jeder noch so kleinen \\(\\varepsilon\\)-Umgebung fast alle (alle bis auf endlich viele) Folgenglieder liegen.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 55-57"
        },
        {
          question: "Ist der Grenzwert einer konvergenten Folge eindeutig?",
          answer: "Ja — ist eine Folge konvergent, so ist ihr Grenzwert eindeutig.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 57"
        },
        {
          question: "Nennen Sie drei wichtige Rechenregeln für konvergente Folgen.",
          answer: "Mit \\(\\lim x_n = a\\), \\(\\lim y_n = b\\): \\(\\lim(x_n + y_n) = a + b\\); \\(\\lim(x_n y_n) = ab\\); \\(\\lim \\frac{x_n}{y_n} = \\frac{a}{b}\\) falls \\(b \\ne 0\\) (außerdem \\(\\lim c\\,x_n = ca\\)).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 62"
        },
        {
          question: "Welche Grenzwerte sollte man sich laut Vorlesung merken?",
          answer: "Für \\(|b| < 1\\): \\(b^n \\to 0\\); \\(\\left(1 + \\frac{a}{n}\\right)^n \\to e^a\\); für positives \\(a\\): \\(a^{1/n} \\to 1\\) und \\(n^{1/n} \\to 1\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 66"
        },
        {
          question: "Definieren Sie den Begriff der Partialsumme.",
          answer: "\\(S_n := \\sum_{k=0}^{n} a_k\\) — die Summe der ersten \\(n\\) Folgenglieder der Folge \\((a_k)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 70"
        },
        {
          question: "Was ist der Zusammenhang zwischen Reihen und Folgen?",
          answer: "Eine Reihe ist die Folge der Partialsummen einer Folge. Konvergenz und Divergenz werden von Folgen übernommen: Der Wert einer Reihe ist der Grenzwert der Folge der Partialsummen.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 71-72"
        },
        {
          question: "Nennen Sie Beispiele für konvergente und divergente Reihen bzw. Folgen von den Folien.",
          answer: "Konvergent: die geometrische Reihe \\(\\sum x^k = \\frac{1}{1-x}\\) für \\(|x| < 1\\) (z. B. Läufer im Stadion: Wert 400). Divergent: die Folgen \\(x_n := n\\) und \\(x_n := (-1)^n\\) (zwei Häufungspunkte).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 60-61, 74-75"
        },
        {
          question: "Wie lautet der Wert der geometrischen Summe für beliebiges \\(x \\ne 1\\)?",
          answer: "\\(S_n(x) = \\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}\\)",
          source: "VorlesungFolienLAA-2026.pdf, Folie 74"
        }
      ],
      flashcards: [
        {
          front: "Wann konvergiert eine Folge \\((x_n)\\) gegen einen Grenzwert \\(a\\)?",
          back: "Wenn es zu jedem \\(\\varepsilon > 0\\) ein \\(N \\in \\mathbb{N}\\) gibt, sodass für alle Indizes \\(n \\ge N\\) die Ungleichung \\(|x_n - a| < \\varepsilon\\) gilt. Schreibweise: \\(\\lim_{n \\to \\infty} x_n = a\\) oder \\(x_n \\to a\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 54"
        },
        {
          front: "Was ist eine Nullfolge?",
          back: "Eine Folge mit dem Grenzwert 0. Standardbeispiel: \\(x_n := \\frac{1}{n}\\), denn es gilt \\(\\lim_{n \\to \\infty} \\frac{1}{n} = 0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 54, 58"
        },
        {
          front: "Was ist die \\(\\varepsilon\\)-Umgebung eines Punktes \\(a\\)?",
          back: "Das Intervall \\(]a - \\varepsilon, a + \\varepsilon[\\) um den Punkt \\(a\\) (stets \\(\\varepsilon > 0\\)). Eine Folge konvergiert gegen \\(a\\), wenn sich in jeder noch so kleinen \\(\\varepsilon\\)-Umgebung fast alle — also alle bis auf endlich viele — Folgenglieder befinden.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 55-57"
        },
        {
          front: "Welche Häufungspunkte hat die Folge \\(x_n := (-1)^n\\)?",
          back: "Die Folge ist divergent und hat die zwei so genannten Häufungspunkte \\(-1\\) und \\(+1\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 60-61"
        },
        {
          front: "Wogegen konvergiert \\(\\left(1 + \\frac{a}{n}\\right)^n\\) für \\(n \\to \\infty\\)?",
          back: "Gegen \\(e^a\\) — einer der wichtigen Grenzwerte zum Merken.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 66"
        },
        {
          front: "Wogegen konvergiert \\(b^n\\) für \\(|b| < 1\\)?",
          back: "Gegen 0. Weitere Merk-Grenzwerte: Für positives \\(a\\) gilt \\(a^{1/n} \\to 1\\) und \\(n^{1/n} \\to 1\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 66"
        },
        {
          front: "Was ist die \\(n\\)-te Partialsumme einer Folge \\((a_k)\\)?",
          back: "\\(S_n := \\sum_{k=0}^{n} a_k\\) — einfach die Summe der ersten \\(n\\) Folgenglieder.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 70"
        },
        {
          front: "Was ist eine Reihe, und wann heißt sie konvergent?",
          back: "Die Folge der Partialsummen, notiert als \\(\\sum_{k=0}^{\\infty} a_k\\). Konvergiert die Folge der Partialsummen \\((S_n)\\), heißt die Reihe konvergent, und ihr Wert ist \\(\\sum_{k=0}^{\\infty} a_k = \\lim_{n\\to\\infty} S_n\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 71-72"
        },
        {
          front: "Welchen Wert hat die geometrische Reihe \\(\\sum_{k=0}^{\\infty} x^k\\)?",
          back: "Für \\(x \\in \\,]-1, 1[\\) gilt \\(\\sum_{k=0}^{\\infty} x^k = \\frac{1}{1 - x}\\), denn \\(x^{n+1} \\to 0\\) für \\(|x| < 1\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 74"
        },
        {
          front: "Welchen Wert hat die geometrische Summe \\(\\sum_{k=0}^{n} x^k\\)?",
          back: "Für \\(x \\ne 1\\) gilt \\(S_n(x) = \\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 74"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 9",
          task: "Bestimmen Sie für beliebige \\(n \\in \\mathbb{N}\\) den Wert der Summe \\[\\sum_{k=1}^{n} \\ln\\left(1 + \\frac{1}{k}\\right)\\]",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 9"
        },
        {
          ref: "Aufgabe 11",
          task: "Beschreiben Sie den Verlauf der komplexen Folge \\(\\left(\\frac{1}{k} e^{\\mathrm{i}k}\\right)\\). Gegen welchen Grenzwert konvergiert die Folge? Begründen Sie Ihre Wahl.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 11"
        },
        {
          ref: "Aufgabe 12",
          task: "Denken Sie über die folgenden Fragen nach, rekapitulieren Sie den zugehörigen Stoff und lernen Sie, die Lösungen in der Übung frei vorzutragen:<br>a) Was ist eine Folge? Nennen Sie Beispiele.<br>b) Wie ist die Konvergenz einer Folge definiert?<br>c) Was ist eine Nullfolge?<br>d) Was ist eine \\(\\varepsilon\\)-Umgebung eines Punktes?<br>e) Welche Anzahl von Häufungspunkten hat eine konvergente Folge?<br>f) Nennen Sie drei wichtige Rechenregeln für konvergente Folgen.",
          note: "Die Theoriefragen sind auch im Modus „Fragen“ dieses Themas mit Folienbeleg enthalten.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 12"
        },
        {
          ref: "Aufgabe 13",
          task: "Berechnen Sie die folgenden Grenzwerte:<br>a) \\(\\lim_{n\\to\\infty} \\left(\\sqrt{n^2 + an + 1} - \\sqrt{n^2 + 1}\\right)\\)<br>b) \\(\\lim_{n\\to\\infty} (-1)^n \\cdot \\frac{23}{n}\\)<br>c) \\(\\lim_{n\\to\\infty} \\left(1 - \\frac{1}{n^2}\\right)^n\\)<br>d) \\(\\lim_{k\\to\\infty} \\frac{(k+1)(2k-3)(k+2)}{k^3}\\)",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 13"
        },
        {
          ref: "Aufgabe 14",
          task: "Ein Marathonläufer muss 42,195 km laufen, um ins Ziel zu kommen. Dazu muss er zuerst 4,2195 km laufen, danach 0,42195 km usf. Können Sie mathematisch beweisen, dass der Marathonläufer das Ziel erreicht?",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 14"
        },
        {
          ref: "Aufgabe 15",
          task: "Betrachten Sie die Reihe \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^2}\\). Bilden Sie den Betrag der Differenz zwischen der 7. und 6. Partialsumme und den Betrag der Differenz der 8. und 7. Partialsumme. Welcher der Beträge ist größer? Können Sie Ihre Antwort begründen?",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 15"
        },
        {
          ref: "Aufgabe 16",
          task: "Die Explosion einer Atombombe: Ein Neutron spaltet einen Plutoniumkern, wobei drei weitere Neutronen entstehen (1. Zerfallsstufe). Jedes der drei erzeugten Neutronen spaltet einen weiteren Kern und es entstehen insgesamt neun Neutronen (2. Zerfallsstufe). Dieses Spiel setzt sich fort, bis alle Plutoniumkerne zerfallen sind (Kettenreaktion). Wie lange dauert der vollständige Zerfall eines Plutoniumstücks mit \\(N = 7{,}85 \\cdot 10^{26}\\) Kernen, wenn die Dauer einer Zerfallsstufe \\(\\tau\\) beträgt?",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 16"
        },
        {
          ref: "Aufgabe 17",
          task: "Wiederholungsfragen zum frei Vortragen in der Übung — u. a.: Was ist die geometrische Summe (Wert für beliebiges \\(x \\in \\mathbb{R}\\), \\(n \\in \\mathbb{N}\\))? Imaginär- und Realteil einer komplexen Zahl? Grundrechenregeln für komplexe Zahlen? Polarkoordinatendarstellung? Was ist ein Polynom, wie funktioniert Polynomdivision? Zusammenhang Sinus/Kosinus/Tangens mit Nullstellen? Zusammenhang Logarithmus/Exponentialfunktion? Was ist eine Folge, \\(\\varepsilon\\)-Umgebung, Zusammenhang Reihen/Folgen, Partialsumme, konvergente/divergente Reihen? Definition Stetigkeit und lokales Minimum? Was sind Sekante und Tangente (mit Skizzen)?",
          note: "Umfasst den Stoff der Kapitel Funktionen bis Differenzierbarkeit (Aufgabenteile a–v im Übungsblatt).",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 17"
        }
      ]
    },
    {
      id: "stetigkeit",
      title: "Stetigkeit & Extrema",
      icon: "✏️",
      cards: [
        {
          title: "Anschauliche Idee der Stetigkeit",
          body: "Wenn etwas „stetig“ verläuft, gibt es umgangssprachlich keine Brüche, Sprünge oder Risse. Diese Vorstellung findet sich beim Verlauf einer Funktion wieder: Der Funktionsgraph soll für ein bestimmtes Intervall in einem Zug gezeichnet werden können.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 76"
        },
        {
          title: "Stetigkeit",
          body: "Sei \\(f: D \\to \\mathbb{R}\\), \\(D \\subset \\mathbb{R}\\) der Definitionsbereich und \\(\\tilde{x} \\in D\\). \\(f\\) heißt in \\(\\tilde{x}\\) stetig, falls der Grenzwert \\(\\lim_{x \\to \\tilde{x}} f(x)\\) existiert und \\[\\lim_{x \\to \\tilde{x}} f(x) = f(\\tilde{x})\\] gilt. Ist \\(f\\) in allen Punkten des Definitionsbereichs stetig, so heißt \\(f\\) stetig auf ganz \\(D\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 77"
        },
        {
          title: "Wichtige stetige Funktionen",
          body: "Diverse wichtige Funktionen sind auf ganz \\(\\mathbb{R}\\) stetig: Polynome, die Exponentialfunktion \\(e^x\\), der Logarithmus \\(\\ln x\\) sowie Sinus und Kosinus. Die Funktion \\(f(x) := \\frac{1}{x}\\) ist in \\(x = 0\\) nicht definiert, sonst aber überall stetig.",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 80"
        },
        {
          title: "Kombinationen stetiger Funktionen",
          body: "Summen, Differenzen, Produkte, Quotienten und Kompositionen stetiger Funktionen sind (dort wo definiert) stetig. Damit wird nochmals deutlich, dass Polynome stetig sind — und auch rationale Funktionen, denn diese sind der Quotient von Polynomen.",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folien 81-82"
        },
        {
          title: "Globales Maximum und Minimum",
          body: "Sei \\(f: D \\to \\mathbb{R}\\). \\(f\\) nimmt in \\(\\tilde{x} \\in D\\) das (globale) Maximum an, wenn gilt: \\[f(\\tilde{x}) \\ge f(x) \\text{ für alle } x \\in D\\] Schreibweise: \\(f(\\tilde{x}) = \\max_{x \\in D} f(x)\\). Gilt sogar \\(>\\) anstelle von \\(\\ge\\), spricht man von einem strengen Maximum. Analog wird das Minimum (\\(\\min\\)) definiert.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 83"
        },
        {
          title: "Lokales Maximum und Minimum",
          body: "Sei \\(f: D \\to \\mathbb{R}\\). \\(f\\) nimmt in \\(\\tilde{x} \\in D\\) das lokale Maximum an, falls ein \\(\\varepsilon > 0\\) existiert, sodass gilt: \\[f(\\tilde{x}) \\ge f(x) \\text{ für alle } x \\in D \\text{ mit } |x - \\tilde{x}| < \\varepsilon\\] Analog wird das lokale Minimum definiert.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 84"
        }
      ],
      questions: [
        {
          question: "Definieren Sie Stetigkeit.",
          answer: "\\(f\\) heißt in \\(\\tilde{x} \\in D\\) stetig, falls \\(\\lim_{x \\to \\tilde{x}} f(x)\\) existiert und \\(\\lim_{x \\to \\tilde{x}} f(x) = f(\\tilde{x})\\) gilt. Ist das in allen Punkten von \\(D\\) erfüllt, heißt \\(f\\) stetig auf ganz \\(D\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 77"
        },
        {
          question: "Wann sind Kompositionen von Funktionen sicher stetig?",
          answer: "Summen, Differenzen, Produkte, Quotienten und Kompositionen stetiger Funktionen sind (dort wo definiert) stetig.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 81"
        },
        {
          question: "Welche wichtigen Funktionen sind auf ganz \\(\\mathbb{R}\\) stetig?",
          answer: "Polynome, die Exponentialfunktion, der Logarithmus sowie Sinus und Kosinus. \\(\\frac{1}{x}\\) ist in \\(x = 0\\) nicht definiert, sonst überall stetig.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 80"
        },
        {
          question: "Warum sind rationale Funktionen stetig?",
          answer: "Weil sie Quotienten von Polynomen sind und Quotienten stetiger Funktionen (dort wo definiert) stetig sind.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 82"
        },
        {
          question: "Definieren Sie den Begriff des lokalen Minimums.",
          answer: "\\(f\\) nimmt in \\(\\tilde{x}\\) ein lokales Minimum an, falls ein \\(\\varepsilon > 0\\) existiert, sodass \\(f(\\tilde{x}) \\le f(x)\\) für alle \\(x \\in D\\) mit \\(|x - \\tilde{x}| < \\varepsilon\\) (analog zur Definition des lokalen Maximums mit \\(\\ge\\)).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 84"
        },
        {
          question: "Was unterscheidet globale und lokale Maxima?",
          answer: "Globales Maximum: \\(f(\\tilde{x}) \\ge f(x)\\) für alle \\(x \\in D\\). Lokales Maximum: Die Bedingung muss nur für alle \\(x \\in D\\) mit \\(|x - \\tilde{x}| < \\varepsilon\\) für ein \\(\\varepsilon > 0\\) gelten.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 83-84"
        }
      ],
      flashcards: [
        {
          front: "Wann heißt eine Funktion \\(f\\) im Punkt \\(\\tilde{x}\\) stetig?",
          back: "Wenn der Grenzwert \\(\\lim_{x \\to \\tilde{x}} f(x)\\) existiert und \\(\\lim_{x \\to \\tilde{x}} f(x) = f(\\tilde{x})\\) gilt. Ist \\(f\\) in allen Punkten des Definitionsbereichs stetig, heißt \\(f\\) stetig auf ganz \\(D\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 77"
        },
        {
          front: "Was ist die anschauliche Vorstellung von Stetigkeit?",
          back: "Es gibt keine Brüche, Sprünge oder Risse: Der Funktionsgraph soll sich für ein bestimmtes Intervall in einem Zug zeichnen lassen.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 76"
        },
        {
          front: "Welche wichtigen Funktionen sind auf ganz \\(\\mathbb{R}\\) stetig?",
          back: "Polynome, die Exponentialfunktion \\(e^x\\), der Logarithmus \\(\\ln x\\) sowie Sinus und Kosinus. Die Funktion \\(\\frac{1}{x}\\) ist in \\(x = 0\\) nicht definiert, sonst aber überall stetig.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 80"
        },
        {
          front: "Was gilt für Summen, Produkte, Quotienten und Kompositionen stetiger Funktionen?",
          back: "Sie sind (dort, wo sie definiert sind) wieder stetig. Deshalb sind auch rationale Funktionen stetig — sie sind Quotienten von Polynomen.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 81-82"
        },
        {
          front: "Wann nimmt \\(f\\) in \\(\\tilde{x}\\) das globale Maximum an?",
          back: "Wenn \\(f(\\tilde{x}) \\ge f(x)\\) für alle \\(x \\in D\\) gilt; Schreibweise \\(f(\\tilde{x}) = \\max_{x \\in D} f(x)\\). Gilt sogar \\(>\\) anstelle von \\(\\ge\\), spricht man von einem strengen Maximum. Analog wird das Minimum definiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 83"
        },
        {
          front: "Wann nimmt \\(f\\) in \\(\\tilde{x}\\) ein lokales Maximum an?",
          back: "Wenn ein \\(\\varepsilon > 0\\) existiert, sodass \\(f(\\tilde{x}) \\ge f(x)\\) für alle \\(x \\in D\\) mit \\(|x - \\tilde{x}| < \\varepsilon\\) gilt. Die Bedingung muss also nur in einer Umgebung von \\(\\tilde{x}\\) gelten, nicht auf ganz \\(D\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 84"
        }
      ],
      exercises: []
    },
    {
      id: "differenzialrechnung",
      title: "Differenzialrechnung",
      icon: "🎢",
      cards: [
        {
          title: "Von der Sekante zur Tangente",
          body: "Die Steigung der Sekante zwischen zwei Punkten am Funktionsgraphen ist \\(\\frac{\\Delta f}{\\Delta x}\\) mit \\(\\Delta f := f(x) - f(x_0)\\) und \\(\\Delta x := x - x_0\\); sie gibt die Änderung von \\(f\\) pro \\(\\Delta x\\) an. Für die Steigung der Tangente in \\(x_0\\) muss \\(\\Delta x\\) immer kleiner werden: Im Grenzwertprozess \\(x \\to x_0\\) gehen die Sekanten in die Tangente über.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 86-88"
        },
        {
          title: "Differenzierbarkeit und Differenzialquotient",
          body: "Sei \\(f: I \\to \\mathbb{R}\\) auf einem Intervall \\(I \\subseteq \\mathbb{R}\\) definiert. \\(f\\) ist in \\(x_0 \\in I\\) differenzierbar, wenn der Grenzwert \\[f'(x_0) := \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}\\] (Differenzialquotient) existiert; \\(f'(x_0)\\) heißt dann Ableitung von \\(f\\) in \\(x_0\\). \\(f\\) heißt differenzierbar auf \\(I\\), wenn \\(f\\) in allen \\(x_0 \\in I\\) differenzierbar ist.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 89"
        },
        {
          title: "Bedeutung der Ableitung",
          body: "Die Ableitung gibt die Steigung von \\(f\\) im betrachteten Punkt an und beschreibt somit die lokale Änderung von \\(f\\).",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 90"
        },
        {
          title: "Alternative h-Schreibweise",
          body: "Mit ihr lässt sich zumeist etwas besser rechnen: \\[f'(x) := \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}\\] Nichts von Substanz ändert sich: Der betrachtete Punkt heißt \\(x\\) statt \\(x_0\\), der Abstand \\(h\\).",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 91-92"
        },
        {
          title: "Notationen der Ableitung",
          body: "Statt \\(f'(x)\\) schreibt man häufig \\(\\frac{df(x)}{dx}\\) oder — wenn \\(f\\) von der Zeit abhängt — \\(\\dot{f}(t)\\) (bei Physikern beliebt). Das Intervall \\(I\\) wird zumeist als offen angenommen, weil das in der Theorie Vorteile bringt.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 94"
        },
        {
          title: "Ableitung von x² über den Differenzialquotienten",
          body: "Sei \\(f(x) := x^2\\). Es gilt \\[\\frac{f(x+h) - f(x)}{h} = \\frac{(x+h)^2 - x^2}{h} = \\frac{2hx + h^2}{h} = 2x + h\\] und somit \\(f'(x) = \\lim_{h \\to 0}(2x + h) = 2x\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 95"
        },
        {
          title: "Nicht jede Funktion ist differenzierbar",
          body: "Die Funktion \\(f(x) := |x|\\) ist im Punkt 0 nicht differenzierbar, denn \\[\\frac{|0 + h| - |0|}{h} = \\frac{|h|}{h}\\] ist für \\(h \\to 0\\) nicht konvergent. Die behandelten Standardfunktionen (Exponentialfunktion, Polynome, Sinus, …) sind dagegen auf ihrem Definitionsbereich differenzierbar.",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 96-97"
        },
        {
          title: "Ableitungsregeln",
          body: "Sind \\(f\\) und \\(g\\) differenzierbar (und die Ausdrücke definiert), gilt mit konstantem \\(c \\in \\mathbb{R}\\): \\[(f + g)'(x) = f'(x) + g'(x), \\quad (c \\cdot f)'(x) = c \\cdot f'(x) \\;\\text{(Linearität)}\\] \\[(f \\cdot g)'(x) = f'(x)g(x) + f(x)g'(x) \\;\\text{(Produktregel)}\\] \\[\\left(\\frac{f}{g}\\right)'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)} \\;\\text{(Quotientenregel)}\\] \\[(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x) \\;\\text{(Kettenregel)}\\]",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          title: "Wichtige Ableitungen (zum Merken)",
          body: "\\[(x^s)' = s \\cdot x^{s-1} \\;(s \\in \\mathbb{R}), \\qquad (\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}\\] \\[(a_0 + a_1 x + \\ldots + a_n x^n)' = a_1 + 2a_2 x + \\ldots + n a_n x^{n-1}\\] \\[(e^x)' = e^x, \\qquad (\\ln|x|)' = \\frac{1}{x}\\] \\[(\\sin x)' = \\cos x, \\qquad (\\cos x)' = -\\sin x\\] \\[(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x\\] Bitte die jeweiligen Definitionsbereiche beachten!",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 99"
        },
        {
          title: "Ableitung von x^x",
          body: "Für \\(f: \\,]0, \\infty[ \\to \\mathbb{R},\\; x \\mapsto x^x\\) gilt: \\[f'(x) = \\frac{d}{dx}\\left(e^{\\ln(x^x)}\\right) = \\frac{d}{dx}\\left(e^{x \\ln x}\\right) = e^{x \\ln x} \\cdot \\frac{d}{dx}(x \\ln x) = x^x(\\ln x + 1)\\]",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 100"
        },
        {
          title: "Differenzierbar ⇒ stetig",
          body: "Für differenzierbares \\(f\\) gilt \\[\\lim_{x \\to x_0}(f(x) - f(x_0)) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} \\cdot \\lim_{x \\to x_0}(x - x_0) = f'(x_0) \\cdot 0 = 0\\] Das sagt uns: Jede differenzierbare Funktion ist stetig.",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folie 102"
        },
        {
          title: "Höhere Ableitungen",
          body: "Ist die Ableitung \\(f'\\) wiederum differenzierbar, erhält man die zweite Ableitung \\(f'' := (f')' = \\frac{d^2 f}{dx^2}\\). Ist \\(f\\) insgesamt \\(k\\)-mal differenzierbar, erhält man die \\(k\\)-te Ableitung \\[f^{(k)} = \\frac{d^k f}{dx^k}\\] Die 0-te Ableitung ist \\(f^{(0)} := f\\), die Funktion selbst. Achtung: \\(f^k\\) statt \\(f^{(k)}\\) zu schreiben ist falsch — die Klammern vermeiden die Verwechselung mit der \\(k\\)-ten Potenz.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 103-105"
        },
        {
          title: "Geschwindigkeit und Beschleunigung",
          body: "Ist \\(x(t)\\) eine zweimal differenzierbare Ortsfunktion eines Teilchens, so heißt die erste Ableitung Geschwindigkeit \\(v(t) = \\dot{x}(t)\\) und die zweite Ableitung Beschleunigung \\(a(t) = \\dot{v}(t) = \\ddot{x}(t)\\). Die Formelzeichen kommen von velocity und acceleration.",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 106"
        },
        {
          title: "Notwendige Bedingung für lokale Extrema",
          body: "Sei \\(f: D \\to \\mathbb{R}\\) differenzierbar und \\(O \\subseteq D\\) eine \\(\\varepsilon\\)-Umgebung von \\(x_0\\). Hat \\(f\\) in \\(x_0\\) ein lokales Minimum oder Maximum, dann gilt \\(f'(x_0) = 0\\).",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folie 108"
        },
        {
          title: "Hinreichendes Kriterium über die n-te Ableitung",
          body: "Sei \\(f\\) \\(n\\)-mal differenzierbar und \\(x_0\\) mit \\[f'(x_0) = \\ldots = f^{(n-1)}(x_0) = 0, \\quad f^{(n)}(x_0) \\ne 0\\] Ist \\(n\\) gerade: \\(f\\) nimmt in \\(x_0\\) ein lokales Maximum an, falls \\(f^{(n)}(x_0) < 0\\), und ein lokales Minimum, falls \\(f^{(n)}(x_0) > 0\\). Ist \\(n\\) ungerade, nimmt \\(f\\) in \\(x_0\\) weder Minimum noch Maximum an.",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folie 109"
        },
        {
          title: "Beispiel: Extrema von x² − 2x + 5 auf [−2, 2]",
          body: "\\(f'(x) = 2x - 2\\), \\(f''(x) = 2\\). Einzige Nullstelle der Ableitung: \\(x = 1\\) mit \\(f''(1) = 2 > 0\\) — dort liegt ein lokales Minimum mit \\(f(1) = 4\\). An den Rändern gilt \\(f(-2) = 13\\), \\(f(2) = 5\\); da \\(f\\) auf \\([-2, 1[\\) streng monoton fällt und auf \\(]1, 2]\\) streng monoton steigt, liegen bei \\(x = \\pm 2\\) lokale Maxima. Vergleich der Funktionswerte: globales Minimum \\(y = 4\\) bei \\(x = 1\\), globales Maximum \\(y = 13\\) bei \\(x = -2\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 110-111"
        },
        {
          title: "Warnung: Das Schulkriterium ist nicht die ganze Weisheit",
          body: "In der Schule wurde oft gelehrt: kritische Stellen über die Nullstellen der ersten Ableitung finden und in die zweite Ableitung einsetzen; je nach Vorzeichen liegt ein Maximum oder Minimum vor. Das funktioniert manchmal, ist aber nach dem Kriterium über die \\(n\\)-te Ableitung nicht die ganze Weisheit (Gegenbeispiel aus der Vorlesung: \\(f(x) = x^4\\)).",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 112"
        },
        {
          title: "Taylor-Formel und Taylor-Polynom",
          body: "Sei \\(I \\subset \\mathbb{R}\\) ein Intervall, \\(x_0, x \\in I\\) und \\(f: I \\to \\mathbb{R}\\) \\(n\\)-mal differenzierbar. Dann gilt: \\[f(x) = \\sum_{i=0}^{n} \\frac{f^{(i)}(x_0)}{i!}(x - x_0)^i + R^{n,x_0}_f(x)\\] Die gesamte Gleichung heißt Taylor-Formel, die Summe Taylor-Polynom \\(T^{n,x_0}_f\\) \\(n\\)-ter Ordnung von \\(f\\) mit Entwicklungspunkt \\(x_0\\), der letzte Term Restglied \\(R^{n,x_0}_f\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 113"
        },
        {
          title: "Bedeutung des Taylor-Polynoms",
          body: "Das Taylor-Polynom stellt eine Approximation (Näherung) einer geeigneten Funktion durch Polynome dar. Das Restglied gibt den Fehler an, der bei dieser Näherung gemacht wird.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 114"
        },
        {
          title: "Taylor-Polynom der Exponentialfunktion",
          body: "Für \\(f(x) = e^x\\) um den Entwicklungspunkt \\(x_0 = 0\\): Beim Ableiten ändert sich die Funktion nicht, daher ist \\(f^{(i)}(0) = e^0 = 1\\) für alle \\(i \\in \\mathbb{N}\\) und \\[T^{n,0}_f(x) = \\sum_{i=0}^{n} \\frac{f^{(i)}(0)}{i!}(x - 0)^i = \\sum_{i=0}^{n} \\frac{1}{i!} x^i\\]",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 115"
        }
      ],
      questions: [
        {
          question: "Was ist eine Sekante, was eine Tangente?",
          answer: "Die Sekante verbindet zwei Punkte am Funktionsgraphen; ihre Steigung \\(\\frac{\\Delta f}{\\Delta x}\\) gibt die Änderung von \\(f\\) pro \\(\\Delta x\\) an. Lässt man \\(\\Delta x\\) immer kleiner werden (\\(x \\to x_0\\)), gehen die Sekanten in die Tangente in \\(x_0\\) über, deren Steigung die Ableitung ist.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 86-88"
        },
        {
          question: "Wie ist die Differenzierbarkeit von f in x₀ definiert?",
          answer: "\\(f\\) ist in \\(x_0\\) differenzierbar, wenn der Differenzialquotient \\(f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}\\) existiert; \\(f'(x_0)\\) heißt dann Ableitung von \\(f\\) in \\(x_0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 89"
        },
        {
          question: "Wie lauten Produkt-, Quotienten- und Kettenregel?",
          answer: "Produktregel: \\((fg)' = f'g + fg'\\). Quotientenregel: \\(\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}\\). Kettenregel: \\((f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          question: "Welche Ableitungen haben \\(e^x\\), \\(\\ln|x|\\), \\(\\sin x\\), \\(\\cos x\\) und \\(\\tan x\\)?",
          answer: "\\((e^x)' = e^x\\); \\((\\ln|x|)' = \\frac{1}{x}\\); \\((\\sin x)' = \\cos x\\); \\((\\cos x)' = -\\sin x\\); \\((\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 99"
        },
        {
          question: "Ist jede differenzierbare Funktion stetig? Gilt auch die Umkehrung?",
          answer: "Jede differenzierbare Funktion ist stetig (Rechnung über den Differenzialquotienten). Die Umkehrung gilt nicht: \\(f(x) = |x|\\) ist im Punkt 0 nicht differenzierbar, da \\(\\frac{|h|}{h}\\) für \\(h \\to 0\\) nicht konvergiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 96, 102"
        },
        {
          question: "Was ist die 0-te Ableitung und warum schreibt man f⁽ᵏ⁾ mit Klammern?",
          answer: "\\(f^{(0)} := f\\), also die Funktion selbst. Die Klammern um \\(k\\) vermeiden die Verwechselung mit der \\(k\\)-ten Potenz — \\(f^k\\) zu schreiben ist grob verwirrend und falsch.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 105"
        },
        {
          question: "Welche notwendige Bedingung gilt für lokale Extrema differenzierbarer Funktionen?",
          answer: "Hat \\(f\\) in \\(x_0\\) ein lokales Minimum oder Maximum, dann gilt \\(f'(x_0) = 0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 108"
        },
        {
          question: "Wie lautet das hinreichende Kriterium für Extrema über die n-te Ableitung?",
          answer: "Gilt \\(f'(x_0) = \\ldots = f^{(n-1)}(x_0) = 0\\) und \\(f^{(n)}(x_0) \\ne 0\\): Bei geradem \\(n\\) liegt ein lokales Maximum vor, falls \\(f^{(n)}(x_0) < 0\\), ein lokales Minimum, falls \\(f^{(n)}(x_0) > 0\\). Bei ungeradem \\(n\\) liegt weder Minimum noch Maximum vor.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 109"
        },
        {
          question: "Was besagt die Taylor-Formel?",
          answer: "\\(f(x) = \\sum_{i=0}^{n} \\frac{f^{(i)}(x_0)}{i!}(x - x_0)^i + R^{n,x_0}_f(x)\\). Die Summe ist das Taylor-Polynom \\(n\\)-ter Ordnung mit Entwicklungspunkt \\(x_0\\) (eine Näherung von \\(f\\) durch Polynome), das Restglied gibt den Fehler der Näherung an.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 113-114"
        },
        {
          question: "Wie heißen erste und zweite Ableitung der Ortsfunktion x(t) in der Physik?",
          answer: "Erste Ableitung: Geschwindigkeit \\(v(t) = \\dot{x}(t)\\). Zweite Ableitung: Beschleunigung \\(a(t) = \\dot{v}(t) = \\ddot{x}(t)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 106"
        }
      ],
      flashcards: [
        {
          front: "Wie ist die Ableitung \\(f'(x_0)\\) über den Differenzialquotienten definiert?",
          back: "\\(f'(x_0) := \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}\\). Existiert dieser Grenzwert, heißt \\(f\\) in \\(x_0\\) differenzierbar und \\(f'(x_0)\\) Ableitung von \\(f\\) in \\(x_0\\). Die Ableitung gibt die Steigung von \\(f\\) im betrachteten Punkt an.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 89-90"
        },
        {
          front: "Wie lautet die h-Schreibweise der Ableitung?",
          back: "\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\). Inhaltlich ändert sich nichts — der betrachtete Punkt heißt \\(x\\) statt \\(x_0\\) und der Abstand \\(h\\); mit dieser Form lässt sich zumeist etwas besser rechnen.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 91-92"
        },
        {
          front: "Wie lautet die Produktregel?",
          back: "Für differenzierbare Funktionen \\(f\\) und \\(g\\) gilt: \\((f \\cdot g)'(x) = f'(x)g(x) + f(x)g'(x)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          front: "Wie lautet die Quotientenregel?",
          back: "\\(\\left(\\frac{f}{g}\\right)'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)}\\) — dort, wo der Ausdruck definiert ist.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          front: "Wie lautet die Kettenregel?",
          back: "Für die Komposition differenzierbarer Funktionen gilt: \\((f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 98"
        },
        {
          front: "Wie lauten die Ableitungen von \\(x^s\\) und \\(\\sqrt{x}\\)?",
          back: "\\((x^s)' = s \\cdot x^{s-1}\\) für \\(s \\in \\mathbb{R}\\) und \\((\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}\\) — dabei die jeweiligen Definitionsbereiche beachten.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 99"
        },
        {
          front: "Wie lauten die Ableitungen von \\(\\sin x\\), \\(\\cos x\\) und \\(\\tan x\\)?",
          back: "\\((\\sin x)' = \\cos x\\), \\((\\cos x)' = -\\sin x\\) und \\((\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 99"
        },
        {
          front: "Welcher Zusammenhang besteht zwischen Differenzierbarkeit und Stetigkeit?",
          back: "Jede differenzierbare Funktion ist stetig. Die Umkehrung gilt nicht: \\(f(x) := |x|\\) ist im Punkt 0 nicht differenzierbar, denn \\(\\frac{|h|}{h}\\) ist für \\(h \\to 0\\) nicht konvergent.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 96, 102"
        },
        {
          front: "Welche notwendige Bedingung gilt für lokale Extrema differenzierbarer Funktionen?",
          back: "Hat \\(f\\) in \\(x_0\\) ein lokales Minimum oder Maximum, dann gilt \\(f'(x_0) = 0\\). Für hinreichende Aussagen dient das Kriterium über die \\(n\\)-te Ableitung.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 108-109"
        },
        {
          front: "Wie ist das Taylor-Polynom \\(n\\)-ter Ordnung definiert?",
          back: "\\(T^{n,x_0}_f(x) = \\sum_{i=0}^{n} \\frac{f^{(i)}(x_0)}{i!}(x - x_0)^i\\) mit Entwicklungspunkt \\(x_0\\). Es stellt eine Näherung der Funktion durch Polynome dar; das Restglied \\(R^{n,x_0}_f\\) gibt den Fehler dieser Näherung an.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 113-114"
        },
        {
          front: "Wie lautet das Taylor-Polynom von \\(e^x\\) um den Entwicklungspunkt 0?",
          back: "\\(T^{n,0}_f(x) = \\sum_{i=0}^{n} \\frac{x^i}{i!}\\), denn beim Ableiten ändert sich die Exponentialfunktion nicht und damit ist \\(f^{(i)}(0) = e^0 = 1\\) für alle \\(i\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 115"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 18",
          task: "Zeigen Sie, dass die Ableitung einer geraden Funktion ungerade ist, und dass die Ableitung einer ungeraden Funktion gerade ist.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 18"
        },
        {
          ref: "Aufgabe 19",
          task: "a) Differenzieren Sie die Funktion \\(h(x) := x \\cdot \\cos x \\cdot e^x\\).<br>b) Leiten Sie \\(h'\\) ein weiteres Mal ab.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 19"
        },
        {
          ref: "Aufgabe 20",
          task: "Betrachten Sie \\(f(x) := 3x^3 + x\\). Bilden Sie die Ableitung dieser Funktion unter Verwendung des Differentialquotienten.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 20"
        },
        {
          ref: "Aufgabe 21",
          task: "Differenzieren Sie die Funktionen \\[f_1(x) := \\sqrt{1 - \\cos x}, \\quad f_2(x) := \\ln\\sqrt{x}, \\quad f_3(x) := e^{(e^x)}\\] und geben Sie zuvor den jeweiligen Definitionsbereich an.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 21"
        },
        {
          ref: "Aufgabe 22",
          task: "Bestimmen Sie sämtliche lokalen Extrema von \\[f: \\,]0, \\infty[ \\to \\mathbb{R}, \\quad f(x) := \\frac{1}{x} \\ln x\\]",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 22"
        },
        {
          ref: "Aufgabe 23",
          task: "Betrachten Sie \\(f(x) = 3x^3 + 2x^2 + 2x + 2\\). Bilden Sie \\(T^{3}_{f,0}(x)\\). Sind Sie vom Ergebnis überrascht?",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 23"
        },
        {
          ref: "Aufgabe 24",
          task: "Betrachten Sie \\(f(x) = \\sin x\\). Berechnen Sie \\(T^{1}_{f,0}(x)\\), \\(T^{2}_{f,0}(x)\\) und \\(T^{3}_{f,0}(x)\\) und zusätzlich \\(T^{1}_{f,1}(x)\\), \\(T^{2}_{f,1}(x)\\) und \\(T^{3}_{f,1}(x)\\). Skizzieren Sie alle Taylorpolynome zusammen mit der Sinusfunktion auf \\([-\\pi, \\pi]\\). Stellen Sie etwas fest?",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 24"
        }
      ]
    },
    {
      id: "integralrechnung",
      title: "Integralrechnung",
      icon: "📊",
      cards: [
        {
          title: "Grundidee der Integration",
          body: "Die Fläche zwischen einer Funktion und der x-Achse wird von oben und unten durch Rechtecke approximiert. Ist der Graph eine Gerade, lässt sich die Fläche einfach durch Dreiecke und Rechtecke zusammensetzen — bei komplizierteren Funktionen ist das nicht so einfach.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 116-117"
        },
        {
          title: "Zerlegung des Intervalls",
          body: "Das Intervall \\([a, b]\\) wird in \\(n\\) gleich große Teile mit Randpunkten \\(a =: x_0 < x_1 < \\ldots < x_n := b\\) unterteilt. Die Grundseiten der Rechtecke sind jeweils \\(\\Delta x := \\frac{b-a}{n}\\), die Randpunkte \\(x_k = a + k\\Delta x\\) \\((k = 0, \\ldots, n)\\) und die Flächen der \\(n\\) Rechtecke \\(F_k = f(x_{k-1})\\Delta x\\). Die gesamte Rechtecksfläche ist \\[F(n) = \\sum_{k=1}^{n} F_k\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 118-119"
        },
        {
          title: "Das bestimmte Integral",
          body: "Für stetige (oder monotone) Funktionen \\(f: [a, b] \\to \\mathbb{R}\\) existiert der Grenzwert von \\(F(n)\\) und \\[\\int_a^b f(x)\\,dx := \\lim_{n\\to\\infty} F(n)\\] ist das Integral von \\(f\\) über \\([a, b]\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 120"
        },
        {
          title: "Rechenregeln für Integrale",
          body: "\\[\\int_a^a f(x)\\,dx = 0, \\qquad \\int_b^a f(x)\\,dx := -\\int_a^b f(x)\\,dx\\] \\[\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx = \\int_a^c f(x)\\,dx\\] Linearität: \\[\\int_a^b (f(x) + g(x))\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx, \\quad \\int_a^b \\lambda f(x)\\,dx = \\lambda \\int_a^b f(x)\\,dx\\] Abschätzungen: \\[\\int_a^b f(x)\\,dx \\le \\int_a^b |f(x)|\\,dx, \\qquad \\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx \\text{ falls } f(x) \\le g(x) \\text{ für alle } x \\in \\,]a,b[\\]",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 121"
        },
        {
          title: "Stammfunktion",
          body: "Sei \\(f: [a, b] \\to \\mathbb{R}\\). Eine differenzierbare Funktion \\(F: [a, b] \\to \\mathbb{R}\\) heißt Stammfunktion von \\(f\\), wenn gilt: \\(F' = f\\). Ist \\(F\\) eine Stammfunktion von \\(f\\), dann auch \\(F + c\\) für eine beliebige Konstante \\(c \\in \\mathbb{R}\\), denn \\((F + c)' = F' + 0 = F'\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 122"
        },
        {
          title: "Unbestimmtes Integral",
          body: "Um sich nicht auf eine bestimmte Stammfunktion einigen zu müssen, schreibt man \\[\\int f(x)\\,dx = F(x) + c\\] ohne Grenzen am Integralsymbol; \\(\\int f(x)\\,dx\\) heißt unbestimmtes Integral von \\(f\\). Anders ausgedrückt: Das unbestimmte Integral bezeichnet die Gesamtheit aller Stammfunktionen.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 123"
        },
        {
          title: "Die Bedeutung der Integrationskonstanten",
          body: "Die Konstante \\(c\\) wird oft gleich Null gesetzt — ohne Schaden aber nur, wenn lediglich Interesse an einer möglichen Stammfunktion besteht. Beispiel 2. Newton'sches Gesetz mit \\(\\ddot{x}(t) = a\\): Stammfunktionen liefern \\(\\dot{x}(t) = at + v_0\\) und \\(x(t) = \\frac{a}{2}t^2 + v_0 t + x_0\\). Werden die Konstanten vernachlässigt, verschwinden plötzlich Anfangsort \\(x_0\\) und Anfangsgeschwindigkeit \\(v_0\\)!",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folien 124-126"
        },
        {
          title: "Hauptsatz der Differential- und Integralrechnung",
          body: "Sei \\(f: [a, b] \\to \\mathbb{R}\\) eine stetige Funktion, dann gibt es eine Stammfunktion \\(F\\) zu \\(f\\) und \\[\\int_a^b f(x)\\,dx = F(b) - F(a)\\] Der Hauptsatz verbindet also bestimmtes und unbestimmtes Integral und liefert die Berechnung des bestimmten Integrals. Übliche Kurzschreibweisen: \\(F(x)\\big|_a^b\\) bzw. \\([F(x)]_a^b\\).",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folien 127-128"
        },
        {
          title: "Beispiel: Fläche unter x² auf [−1, 1]",
          body: "\\[\\int_{-1}^{1} x^2\\,dx = \\left[\\frac{x^3}{3} + c\\right]_{-1}^{1} = \\left(\\frac{1}{3} + c\\right) - \\left(\\frac{-1}{3} + c\\right) = \\frac{2}{3}\\] Die Konstante der Stammfunktion spielt bei der Berechnung keine Rolle — das bestimmte Integral ist unabhängig von der Wahl der Stammfunktion.",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 129-130"
        },
        {
          title: "Partielle Integration",
          body: "Seien \\(f, g\\) auf \\([a, b]\\) stetig differenzierbar. Aus der Produktregel \\((f \\cdot g)' = f'g + fg'\\) und dem Hauptsatz folgt: \\[\\int_a^b f'(x) g(x)\\,dx = f(x)g(x)\\Big|_a^b - \\int_a^b f(x) g'(x)\\,dx\\] Oft auch in der Form \\[\\int_a^b f(x) g(x)\\,dx = F(x)g(x)\\Big|_a^b - \\int_a^b F(x) g'(x)\\,dx\\]",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folien 131-132"
        },
        {
          title: "Beispiel zur partiellen Integration",
          body: "Bei der Integration von \\(x \\cdot e^x\\) wählt man \\(f(x) := x\\) und \\(g'(x) := e^x\\): \\[\\int_a^b x e^x\\,dx = x e^x\\Big|_a^b - \\int_a^b 1 \\cdot e^x\\,dx = (x - 1)e^x\\Big|_a^b\\]",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 133"
        }
      ],
      questions: [
        {
          question: "Was ist die Grundidee bei der Berechnung von bestimmten Integralen?",
          answer: "Die Fläche zwischen Funktion und x-Achse wird von oben und unten durch Rechtecke approximiert. Verkleinert man die Grundseiten (\\(n \\to \\infty\\)), erhält man im Grenzwert das Integral: \\(\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty} F(n)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 116-120"
        },
        {
          question: "Für welche Funktionen existiert das Integral laut Vorlesung?",
          answer: "Für stetige (oder monotone) Funktionen \\(f: [a, b] \\to \\mathbb{R}\\) existiert der Grenzwert von \\(F(n)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 120"
        },
        {
          question: "Was ist eine Stammfunktion?",
          answer: "Eine differenzierbare Funktion \\(F\\) mit \\(F' = f\\). Mit \\(F\\) ist auch \\(F + c\\) für jede Konstante \\(c \\in \\mathbb{R}\\) eine Stammfunktion.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 122"
        },
        {
          question: "Was bezeichnet das unbestimmte Integral?",
          answer: "Die Gesamtheit aller Stammfunktionen: \\(\\int f(x)\\,dx = F(x) + c\\), geschrieben ohne Grenzen am Integralsymbol.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 123"
        },
        {
          question: "Was besagt der Hauptsatz der Differential- und Integralrechnung?",
          answer: "Zu jeder stetigen Funktion \\(f: [a,b] \\to \\mathbb{R}\\) gibt es eine Stammfunktion \\(F\\), und es gilt \\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 127"
        },
        {
          question: "Warum darf die Integrationskonstante nicht immer vernachlässigt werden?",
          answer: "Nur wenn lediglich eine mögliche Stammfunktion interessiert, kann \\(c = 0\\) gesetzt werden. In physikalischen Anwendungen haben die Konstanten große Bedeutung — beim Newton-Beispiel sind sie Anfangsgeschwindigkeit \\(v_0\\) und Anfangsort \\(x_0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 124-126"
        },
        {
          question: "Wie lautet die Formel der partiellen Integration und woraus wird sie hergeleitet?",
          answer: "\\(\\int_a^b f'g\\,dx = fg\\big|_a^b - \\int_a^b fg'\\,dx\\). Sie folgt aus der Produktregel \\((fg)' = f'g + fg'\\) zusammen mit dem Hauptsatz der Differenzial- und Integralrechnung.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 131-132"
        },
        {
          question: "Warum ist das bestimmte Integral unabhängig von der Wahl der Stammfunktion?",
          answer: "Beim Auswerten \\(F(b) - F(a)\\) hebt sich die Konstante weg, wie das Folienbeispiel \\(\\int_{-1}^1 x^2 dx = (\\frac{1}{3} + c) - (-\\frac{1}{3} + c) = \\frac{2}{3}\\) zeigt.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 130"
        }
      ],
      flashcards: [
        {
          front: "Wie ist das bestimmte Integral \\(\\int_a^b f(x)\\,dx\\) definiert?",
          back: "Als Grenzwert der Rechteckssummen: \\(\\int_a^b f(x)\\,dx := \\lim_{n\\to\\infty} F(n)\\). Für stetige (oder monotone) Funktionen \\(f: [a, b] \\to \\mathbb{R}\\) existiert dieser Grenzwert.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 120"
        },
        {
          front: "Was ergeben \\(\\int_a^a f(x)\\,dx\\) und \\(\\int_b^a f(x)\\,dx\\)?",
          back: "\\(\\int_a^a f(x)\\,dx = 0\\), und beim Vertauschen der Grenzen dreht sich das Vorzeichen um: \\(\\int_b^a f(x)\\,dx := -\\int_a^b f(x)\\,dx\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 121"
        },
        {
          front: "Was ist eine Stammfunktion?",
          back: "Eine differenzierbare Funktion \\(F: [a, b] \\to \\mathbb{R}\\) mit \\(F' = f\\). Mit \\(F\\) ist auch \\(F + c\\) für jede Konstante \\(c \\in \\mathbb{R}\\) eine Stammfunktion, denn \\((F + c)' = F' + 0 = F'\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 122"
        },
        {
          front: "Was bezeichnet das unbestimmte Integral?",
          back: "Die Gesamtheit aller Stammfunktionen: \\(\\int f(x)\\,dx = F(x) + c\\), geschrieben ohne Grenzen am Integralsymbol.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 123"
        },
        {
          front: "Was besagt der Hauptsatz der Differential- und Integralrechnung?",
          back: "Zu jeder stetigen Funktion \\(f: [a, b] \\to \\mathbb{R}\\) gibt es eine Stammfunktion \\(F\\), und es gilt \\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\). Der Hauptsatz verbindet damit bestimmtes und unbestimmtes Integral.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 127-128"
        },
        {
          front: "Wie lautet die Formel der partiellen Integration?",
          back: "\\(\\int_a^b f'(x)g(x)\\,dx = f(x)g(x)\\big|_a^b - \\int_a^b f(x)g'(x)\\,dx\\) für auf \\([a, b]\\) stetig differenzierbare \\(f, g\\). Sie folgt aus der Produktregel zusammen mit dem Hauptsatz.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 131-132"
        },
        {
          front: "Wie berechnet man \\(\\int_a^b x e^x\\,dx\\) mit partieller Integration?",
          back: "Man wählt \\(f(x) := x\\) und \\(g'(x) := e^x\\): \\(\\int_a^b x e^x\\,dx = x e^x\\big|_a^b - \\int_a^b 1 \\cdot e^x\\,dx = (x - 1)e^x\\big|_a^b\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 133"
        },
        {
          front: "Warum darf die Integrationskonstante nicht immer vernachlässigt werden?",
          back: "Nur wenn lediglich eine mögliche Stammfunktion interessiert, kann \\(c = 0\\) gesetzt werden. Beim Newton-Beispiel \\(\\ddot{x}(t) = a\\) sind die Konstanten die Anfangsgeschwindigkeit \\(v_0\\) und der Anfangsort \\(x_0\\) — vernachlässigt man sie, verschwinden diese Informationen.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 124-126"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 25",
          task: "a) Was ist die Grundidee bei der Berechnung von bestimmten Integralen? Fertigen Sie Skizzen an.<br>b) Sind differenzierbare Funktionen integrierbar?<br>c) Was besagt der Hauptsatz der Differenzial- und Integralrechnung?",
          note: "Die Theoriefragen sind auch im Modus „Fragen“ dieses Themas mit Folienbeleg enthalten.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 25"
        },
        {
          ref: "Aufgabe 26",
          task: "Begründen Sie durch eine allgemeine Rechnung (unter Verwendung von bestimmten und unbestimmten Integralen), warum die Integrationskonstante bei der Flächenberechnung vernachlässigt werden kann.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 26"
        },
        {
          ref: "Aufgabe 27",
          task: "Berechnen Sie folgende Stammfunktionen: \\[\\int \\frac{1}{x^3}\\,dx, \\quad \\int \\cos x \\sin x\\,dx, \\quad \\int x \\sin x\\,dx, \\quad \\int \\cos^2 x\\,dx\\]",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 27"
        }
      ]
    },
    {
      id: "vektorraeume",
      title: "Vektorräume",
      icon: "➡️",
      cards: [
        {
          title: "Der Vektorraum Rⁿ",
          body: "Der \\(\\mathbb{R}^n\\) ist ein so genannter Vektorraum. Seine Vektoren haben die Gestalt \\[\\vec{x} := \\begin{pmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{pmatrix}, \\quad x_1, \\ldots, x_n \\in \\mathbb{R}\\] Die Zahlen \\(x_i\\) heißen Koordinaten von \\(\\vec{x}\\). Die natürliche Zahl \\(n\\) im Exponenten von \\(\\mathbb{R}^n\\) gibt die Anzahl der Koordinaten seiner Vektoren an.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 135"
        },
        {
          title: "Nullvektor und Vektoraddition",
          body: "Ein spezieller Vektor ist der Nullvektor \\(\\vec{0}\\), dessen Koordinaten alle 0 sind. Addition von Vektoren erfolgt koordinatenweise: \\[\\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} + \\begin{pmatrix} y_1 \\\\ \\vdots \\\\ y_n \\end{pmatrix} := \\begin{pmatrix} x_1 + y_1 \\\\ \\vdots \\\\ x_n + y_n \\end{pmatrix}\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 136"
        },
        {
          title: "Multiplikation mit einem Skalar",
          body: "\\[\\lambda \\cdot \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{pmatrix} := \\begin{pmatrix} \\lambda x_1 \\\\ \\vdots \\\\ \\lambda x_n \\end{pmatrix}\\] Zahlenbeispiel von den Folien: \\[2 \\cdot \\begin{pmatrix} 3 \\\\ 2 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 4 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 5 \\\\ 2 \\end{pmatrix}\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 137-138"
        },
        {
          title: "Linearkombination",
          body: "Ein Vektor \\(\\vec{v} \\in \\mathbb{R}^n\\) heißt Linearkombination der Vektoren \\(\\vec{v}_1, \\ldots, \\vec{v}_k \\in \\mathbb{R}^n\\), wenn er sich mit \\(\\lambda_1, \\ldots, \\lambda_k \\in \\mathbb{R}\\) darstellen lässt als \\[\\vec{v} = \\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k =: \\sum_{i=1}^{k} \\lambda_i \\vec{v}_i\\] Sprechweise: \\(\\vec{v}\\) lässt sich aus \\(\\vec{v}_1, \\ldots, \\vec{v}_k\\) linear kombinieren.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 139"
        },
        {
          title: "Beispiel einer Linearkombination",
          body: "\\(\\vec{v} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}\\) soll aus \\(\\vec{v}_1 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\) und \\(\\vec{v}_2 = \\begin{pmatrix} 6 \\\\ 0 \\end{pmatrix}\\) linear kombiniert werden: \\[\\vec{v} = 5 \\vec{v}_1 + \\tfrac{1}{3} \\vec{v}_2, \\quad \\text{also } \\lambda_1 = 5,\\; \\lambda_2 = \\tfrac{1}{3}\\] Gegenbeispiel: \\((0, 0, 1)^T\\) ist aus \\((1, 0, 0)^T\\) und \\((0, 1, 0)^T\\) nicht linear kombinierbar — die dritte Koordinate liefert die unerfüllbare Gleichung \\(1 = 0\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 140-141"
        },
        {
          title: "Lineare Abhängigkeit und Unabhängigkeit",
          body: "Die Vektoren \\(\\vec{v}_1, \\ldots, \\vec{v}_k \\in \\mathbb{R}^n\\) heißen linear abhängig, wenn es \\(\\lambda_1, \\ldots, \\lambda_k \\in \\mathbb{R}\\) gibt, von denen mindestens eines ungleich Null ist, mit \\[\\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k = \\vec{0}\\] Es gibt dann eine Linearkombination, in der sich die Vektoren genau gegeneinander aufheben. Die Vektoren heißen linear unabhängig, wenn aus dieser Gleichung folgt, dass \\(\\lambda_1 = \\ldots = \\lambda_k = 0\\) gilt.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 143"
        },
        {
          title: "Basis und Dimension",
          body: "Eine minimale Menge von Vektoren des \\(\\mathbb{R}^n\\) heißt Basis, wenn sich mit ihnen durch Linearkombinationen jeder andere Vektor des \\(\\mathbb{R}^n\\) bilden lässt. Die Anzahl der Vektoren in einer Basis heißt Dimension.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 144"
        },
        {
          title: "Standardbasis",
          body: "Die Vektoren \\(\\vec{e}_1 = (1, 0, \\ldots, 0)^T\\), \\(\\vec{e}_2 = (0, 1, 0, \\ldots)^T\\), …, \\(\\vec{e}_n = (0, \\ldots, 0, 1)^T\\) bilden die so genannte Standardbasis des \\(\\mathbb{R}^n\\), was den \\(\\mathbb{R}^n\\) zu einem \\(n\\)-dimensionalen Vektorraum macht.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 145"
        }
      ],
      questions: [
        {
          question: "Definieren Sie den Vektorraum der reellen Zahlen (Rⁿ).",
          answer: "Der \\(\\mathbb{R}^n\\) ist ein Vektorraum mit Vektoren \\(\\vec{x} = (x_1, \\ldots, x_n)^T\\), \\(x_i \\in \\mathbb{R}\\). Die \\(x_i\\) heißen Koordinaten, \\(n\\) gibt deren Anzahl an. Addition und Skalarmultiplikation erfolgen koordinatenweise.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 135-137"
        },
        {
          question: "Wann ist ein Vektor eine Linearkombination anderer Vektoren?",
          answer: "Wenn er sich als \\(\\vec{v} = \\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k\\) mit \\(\\lambda_i \\in \\mathbb{R}\\) darstellen lässt.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 139"
        },
        {
          question: "Definieren Sie den Begriff der linearen Unabhängigkeit.",
          answer: "\\(\\vec{v}_1, \\ldots, \\vec{v}_k\\) heißen linear unabhängig, wenn aus \\(\\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k = \\vec{0}\\) folgt, dass \\(\\lambda_1 = \\ldots = \\lambda_k = 0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 143"
        },
        {
          question: "Wann heißen Vektoren linear abhängig?",
          answer: "Wenn es \\(\\lambda_1, \\ldots, \\lambda_k\\) gibt, von denen mindestens eines ungleich Null ist, sodass \\(\\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k = \\vec{0}\\) — es gibt also eine Linearkombination, in der sich die Vektoren genau gegeneinander aufheben.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 143"
        },
        {
          question: "Was ist eine Basis und was ist die Dimension?",
          answer: "Eine Basis ist eine minimale Menge von Vektoren, mit denen sich durch Linearkombinationen jeder andere Vektor des \\(\\mathbb{R}^n\\) bilden lässt. Die Anzahl der Vektoren in einer Basis heißt Dimension.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 144"
        },
        {
          question: "Was ist die Standardbasis des Rⁿ?",
          answer: "Die \\(n\\) Vektoren \\(\\vec{e}_1, \\ldots, \\vec{e}_n\\), bei denen jeweils genau eine Koordinate 1 und alle anderen 0 sind. Sie macht den \\(\\mathbb{R}^n\\) zu einem \\(n\\)-dimensionalen Vektorraum.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 145"
        }
      ],
      flashcards: [
        {
          front: "Was sind die Koordinaten eines Vektors im \\(\\mathbb{R}^n\\)?",
          back: "Die Zahlen \\(x_1, \\ldots, x_n\\) im Vektor \\(\\vec{x} = (x_1, \\ldots, x_n)^T\\). Die natürliche Zahl \\(n\\) im Exponenten von \\(\\mathbb{R}^n\\) gibt die Anzahl der Koordinaten seiner Vektoren an.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 135"
        },
        {
          front: "Wie werden Vektoren addiert und mit einem Skalar multipliziert?",
          back: "Beides erfolgt koordinatenweise: Bei der Addition werden die Koordinaten einzeln addiert (\\((\\vec{x} + \\vec{y})_i = x_i + y_i\\)), bei der Multiplikation mit einem Skalar wird jede Koordinate mit \\(\\lambda\\) multipliziert (\\((\\lambda\\vec{x})_i = \\lambda x_i\\)).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 136-137"
        },
        {
          front: "Wann heißt ein Vektor \\(\\vec{v}\\) Linearkombination der Vektoren \\(\\vec{v}_1, \\ldots, \\vec{v}_k\\)?",
          back: "Wenn er sich mit Zahlen \\(\\lambda_1, \\ldots, \\lambda_k \\in \\mathbb{R}\\) darstellen lässt als \\(\\vec{v} = \\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k\\). Sprechweise: \\(\\vec{v}\\) lässt sich aus \\(\\vec{v}_1, \\ldots, \\vec{v}_k\\) linear kombinieren.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 139"
        },
        {
          front: "Wann heißen Vektoren linear unabhängig, wann linear abhängig?",
          back: "Linear unabhängig, wenn aus \\(\\lambda_1 \\vec{v}_1 + \\ldots + \\lambda_k \\vec{v}_k = \\vec{0}\\) folgt, dass \\(\\lambda_1 = \\ldots = \\lambda_k = 0\\). Linear abhängig, wenn es eine solche Linearkombination gibt, bei der mindestens ein \\(\\lambda_i\\) ungleich Null ist — die Vektoren heben sich dann genau gegeneinander auf.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 143"
        },
        {
          front: "Was ist eine Basis des \\(\\mathbb{R}^n\\)?",
          back: "Eine minimale Menge von Vektoren, mit denen sich durch Linearkombinationen jeder andere Vektor des \\(\\mathbb{R}^n\\) bilden lässt.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 144"
        },
        {
          front: "Was ist die Dimension?",
          back: "Die Anzahl der Vektoren in einer Basis. Der \\(\\mathbb{R}^n\\) ist wegen der Standardbasis aus \\(n\\) Vektoren ein \\(n\\)-dimensionaler Vektorraum.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 144-145"
        },
        {
          front: "Was ist die Standardbasis des \\(\\mathbb{R}^n\\)?",
          back: "Die Vektoren \\(\\vec{e}_1 = (1, 0, \\ldots, 0)^T\\) bis \\(\\vec{e}_n = (0, \\ldots, 0, 1)^T\\) — bei jedem ist genau eine Koordinate 1 und alle anderen sind 0.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 145"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 28",
          task: "Finden Sie diejenigen Zahlen \\(\\alpha \\in \\mathbb{R}\\), für die folgende Vektoren eine Basis des \\(\\mathbb{R}^3\\) bilden: \\[\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\quad \\begin{pmatrix} 2 \\\\ 0 \\\\ -2 \\end{pmatrix}, \\quad \\begin{pmatrix} 0 \\\\ \\alpha + 1 \\\\ 1 \\end{pmatrix}\\]",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 28"
        }
      ]
    },
    {
      id: "matrizen",
      title: "Matrizen",
      icon: "🔢",
      cards: [
        {
          title: "Matrix",
          body: "Für \\(a_{ij} \\in \\mathbb{R}\\), \\(i \\in \\{1, \\ldots, m\\}\\), \\(j \\in \\{1, \\ldots, n\\}\\) heißt \\[A := \\begin{pmatrix} a_{11} & a_{12} & \\ldots & a_{1n} \\\\ a_{21} & a_{22} & \\ldots & a_{2n} \\\\ \\vdots & & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\ldots & a_{mn} \\end{pmatrix} =: (a_{ij})\\] eine Matrix vom Format \\((m \\times n)\\) mit Einträgen aus \\(\\mathbb{R}\\). Der erste Index \\(i\\) heißt Zeilenindex, der zweite Spaltenindex. Die Menge aller \\((m \\times n)\\)-Matrizen wird als \\(M(m \\times n)\\) notiert.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 146-147"
        },
        {
          title: "Einheitsmatrix",
          body: "Eine sehr wichtige Matrix ist die Einheitsmatrix \\(E_n \\in M(n \\times n)\\) mit Einsen auf der Diagonalen und Nullen sonst. Beim Multiplizieren mit Matrizen übernimmt sie die Rolle, die die 1 bei den reellen Zahlen hat. Statt \\(E_n\\) wird häufig einfach \\(E\\) geschrieben, wenn \\(n\\) klar ist; in der Literatur findet sich auch \\(I_n\\) bzw. \\(I\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 148-149"
        },
        {
          title: "Multiplikation von Matrizen",
          body: "Seien \\(A := (a_{ij}) \\in M(m \\times n)\\) und \\(B := (b_{jk}) \\in M(n \\times p)\\). Dann ist das Matrixprodukt definiert als \\[AB := \\left(\\sum_{j=1}^{n} a_{ij} b_{jk}\\right)_{i = 1 \\ldots m,\\; k = 1 \\ldots p}\\] Anschaulich: Die Zeilen der linken Matrix werden auf die Spalten der rechten Matrix „gelegt“, aufeinanderliegende Einträge multipliziert und die Ergebnisse addiert.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 150-151"
        },
        {
          title: "Matrixprodukt für (2×2)-Matrizen",
          body: "\\[\\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} \\begin{pmatrix} b_{11} & b_{12} \\\\ b_{21} & b_{22} \\end{pmatrix} = \\begin{pmatrix} a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\\\ a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22} \\end{pmatrix}\\]",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 152"
        },
        {
          title: "Matrix-Vektor-Produkt",
          body: "Das Matrix-Vektor-Produkt \\(A\\vec{v}\\) ist als Spezialfall des Matrixproduktes erklärt, indem \\(\\vec{v}\\) als \\((n \\times 1)\\)-Matrix aufgefasst wird: \\[\\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} \\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = \\begin{pmatrix} a_{11}v_1 + a_{12}v_2 \\\\ a_{21}v_1 + a_{22}v_2 \\end{pmatrix}\\]",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 150, 153"
        },
        {
          title: "Matrizenmultiplikation ist nicht kommutativ",
          body: "Achtung: Die Matrizenmultiplikation ist allgemein nicht kommutativ!",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 155"
        },
        {
          title: "Rang einer Matrix",
          body: "Der Rang einer Matrix \\(A\\) (geschrieben Rang \\(A\\) oder rang \\(A\\)) ist die Anzahl ihrer linear unabhängigen Spaltenvektoren, was wiederum gleich der Anzahl ihrer linear unabhängigen Zeilenvektoren ist. Diese Aussage kann als Satz und Definition aufgefasst werden.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 154"
        },
        {
          title: "Matrixsumme und Multiplikation mit Skalaren",
          body: "Seien \\(A := (a_{ij})\\), \\(B := (b_{ij}) \\in M(m \\times n)\\) und \\(\\lambda \\in \\mathbb{R}\\): \\[A + B := (a_{ij} + b_{ij}), \\qquad \\lambda A := (\\lambda a_{ij})\\] Beispiel: \\(-\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} -1 & -2 \\\\ -3 & -4 \\end{pmatrix}\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 156-157"
        },
        {
          title: "Diagonal- und Dreiecksmatrizen",
          body: "Bei quadratischen Matrizen aus \\(M(n \\times n)\\): Eine Diagonalmatrix hat nur auf der Diagonalen Einträge \\(a_{ii}\\), sonst Nullen. Bei der oberen Dreiecksmatrix stehen beliebige Zahlen auf und über der Diagonalen (darunter Nullen), bei der unteren Dreiecksmatrix entsprechend auf und unter der Diagonalen.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 158"
        },
        {
          title: "Transponierte und inverse Matrix",
          body: "Aus \\(A := (a_{ij})\\) ergibt sich die transponierte Matrix durch \\(A^T := (a_{ji})\\) — Zeilen und Spalten werden vertauscht. Es gilt \\((AB)^T = B^T A^T\\). Eine quadratische Matrix \\(A\\) heißt invertierbar, wenn ein \\(B \\in M(n \\times n)\\) existiert mit \\(AB = E_n\\, (= BA)\\). Für \\(B\\) wird dann \\(A^{-1}\\) geschrieben; sie heißt Inverse von \\(A\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 159"
        },
        {
          title: "Symmetrische Matrix",
          body: "\\(A \\in M(n \\times n)\\) heißt symmetrisch, falls gilt: \\[A = A^T, \\quad \\text{d. h. } (a_{ij}) = (a_{ji})\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 160"
        }
      ],
      questions: [
        {
          question: "Was bedeutet das Format (m × n) einer Matrix und wie heißen die Indizes?",
          answer: "\\(m\\) Zeilen und \\(n\\) Spalten mit Einträgen \\(a_{ij}\\); der erste Index ist der Zeilenindex, der zweite der Spaltenindex.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 146"
        },
        {
          question: "Wie ist das Matrixprodukt definiert und wann ist es überhaupt bildbar?",
          answer: "Für \\(A \\in M(m \\times n)\\) und \\(B \\in M(n \\times p)\\): \\(AB = \\left(\\sum_{j=1}^n a_{ij}b_{jk}\\right)\\). Zeilen der linken Matrix werden auf die Spalten der rechten gelegt, multipliziert und addiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 150-151"
        },
        {
          question: "Ist die Matrizenmultiplikation kommutativ?",
          answer: "Nein — die Matrizenmultiplikation ist allgemein nicht kommutativ.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 155"
        },
        {
          question: "Was ist der Rang einer Matrix?",
          answer: "Die Anzahl ihrer linear unabhängigen Spaltenvektoren, was gleich der Anzahl ihrer linear unabhängigen Zeilenvektoren ist.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 154"
        },
        {
          question: "Welche besonderen Typen von Matrizen kennen Sie?",
          answer: "Einheitsmatrix, Diagonalmatrix, obere und untere Dreiecksmatrix, transponierte Matrix \\(A^T\\), invertierbare Matrizen mit Inverser \\(A^{-1}\\) und symmetrische Matrizen (\\(A = A^T\\)).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 148, 158-160"
        },
        {
          question: "Wann heißt eine Matrix invertierbar?",
          answer: "Eine quadratische Matrix \\(A\\) heißt invertierbar, wenn ein \\(B \\in M(n \\times n)\\) existiert mit \\(AB = E_n = BA\\); \\(B\\) heißt dann Inverse \\(A^{-1}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 159"
        },
        {
          question: "Welche Rolle spielt die Einheitsmatrix bei der Multiplikation?",
          answer: "Sie übernimmt die Rolle, die die 1 bei den reellen Zahlen übernimmt.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 149"
        },
        {
          question: "Wie lautet die Transponierungsregel für ein Produkt?",
          answer: "\\((AB)^T = B^T A^T\\)",
          source: "VorlesungFolienLAA-2026.pdf, Folie 159"
        }
      ],
      flashcards: [
        {
          front: "Was bedeutet das Format \\((m \\times n)\\) einer Matrix?",
          back: "Die Matrix hat \\(m\\) Zeilen und \\(n\\) Spalten mit Einträgen \\(a_{ij}\\). Der erste Index \\(i\\) heißt Zeilenindex, der zweite Index \\(j\\) Spaltenindex. Die Menge aller \\((m \\times n)\\)-Matrizen wird als \\(M(m \\times n)\\) notiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 146-147"
        },
        {
          front: "Wie ist das Matrixprodukt \\(AB\\) definiert?",
          back: "Für \\(A \\in M(m \\times n)\\) und \\(B \\in M(n \\times p)\\) gilt \\(AB = \\left(\\sum_{j=1}^{n} a_{ij} b_{jk}\\right)\\). Anschaulich: Die Zeilen der linken Matrix werden auf die Spalten der rechten Matrix „gelegt“, aufeinanderliegende Einträge multipliziert und die Ergebnisse addiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 150-151"
        },
        {
          front: "Gilt für Matrizen \\(AB = BA\\)?",
          back: "Nein — die Matrizenmultiplikation ist allgemein nicht kommutativ.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 155"
        },
        {
          front: "Was ist der Rang einer Matrix?",
          back: "Die Anzahl ihrer linear unabhängigen Spaltenvektoren — was gleich der Anzahl ihrer linear unabhängigen Zeilenvektoren ist.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 154"
        },
        {
          front: "Was ist die transponierte Matrix \\(A^T\\)?",
          back: "\\(A^T := (a_{ji})\\) — Zeilen und Spalten werden vertauscht. Für Produkte gilt die Regel \\((AB)^T = B^T A^T\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 159"
        },
        {
          front: "Wann heißt eine Matrix invertierbar?",
          back: "Eine quadratische Matrix \\(A\\) heißt invertierbar, wenn ein \\(B \\in M(n \\times n)\\) existiert mit \\(AB = E_n = BA\\). Für \\(B\\) schreibt man dann \\(A^{-1}\\); sie heißt Inverse von \\(A\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 159"
        },
        {
          front: "Wann heißt eine Matrix symmetrisch?",
          back: "Wenn \\(A = A^T\\) gilt, d. h. \\(a_{ij} = a_{ji}\\) für alle Einträge.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 160"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 29",
          task: "Bestimmen Sie die Formate folgender Matrizen und berechnen Sie alle möglichen Produkte von je zwei dieser Matrizen: \\[A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\end{pmatrix}, \\quad C = \\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\\\ 3 & 1 \\end{pmatrix}\\] Fassen Sie kurz zusammen, was mit einem Vektor geschieht, wenn er mit der Matrix \\(A\\) multipliziert wird.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 29"
        },
        {
          ref: "Aufgabe 30",
          task: "Für welche reellen Werte von \\(\\alpha\\) ist die Matrix \\[A = \\begin{pmatrix} 2 & \\alpha \\\\ 1 & 3 \\end{pmatrix}\\] symmetrisch?",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 30"
        }
      ],
      walkthroughs: [
        {
          id: "matrixprodukt-2x2",
          title: "Matrixprodukt Schritt für Schritt",
          source: "VorlesungFolienLAA-2026.pdf, Folien 150-152",
          intro: "Die Zeilen der linken Matrix werden auf die Spalten der rechten Matrix gelegt; aufeinanderliegende Einträge werden multipliziert und addiert.",
          visual: {
            kind: "matrix",
            operators: ["×", "="],
            matrices: [
              {
                id: "A",
                label: "Matrix A",
                values: [
                  [2, 1],
                  [0, 3]
                ]
              },
              {
                id: "B",
                label: "Matrix B",
                values: [
                  [4, 5],
                  [6, 7]
                ]
              },
              {
                id: "C",
                label: "Matrix C = AB",
                values: [
                  [null, null],
                  [null, null]
                ]
              }
            ]
          },
          steps: [
            {
              title: "Erster Anteil für C11",
              text: "Für C11 wird die erste Zeile von A mit der ersten Spalte von B kombiniert.",
              highlights: [
                { kind: "matrix-row", matrix: "A", row: 0, role: "active" },
                { kind: "matrix-col", matrix: "B", col: 0, role: "active" },
                { kind: "matrix-cell", matrix: "A", row: 0, col: 0, role: "factor" },
                { kind: "matrix-cell", matrix: "B", row: 0, col: 0, role: "factor" },
                { kind: "matrix-cell", matrix: "C", row: 0, col: 0, role: "target" }
              ],
              values: [{ kind: "matrix-cell", matrix: "C", row: 0, col: 0, value: 8 }],
              formula: "C11 = 2 * 4 + 1 * 6",
              product: "2 * 4 = 8",
              sum: "8"
            },
            {
              title: "C11 fertig addieren",
              text: "Der zweite Anteil wird addiert; damit ist C11 berechnet.",
              highlights: [
                { kind: "matrix-row", matrix: "A", row: 0, role: "active" },
                { kind: "matrix-col", matrix: "B", col: 0, role: "active" },
                { kind: "matrix-cell", matrix: "A", row: 0, col: 1, role: "factor" },
                { kind: "matrix-cell", matrix: "B", row: 1, col: 0, role: "factor" },
                { kind: "matrix-cell", matrix: "C", row: 0, col: 0, role: "target" }
              ],
              values: [{ kind: "matrix-cell", matrix: "C", row: 0, col: 0, value: 14 }],
              formula: "C11 = 2 * 4 + 1 * 6",
              product: "1 * 6 = 6",
              sum: "8 + 6 = 14"
            },
            {
              title: "Erster Anteil für C12",
              text: "Für C12 bleibt die erste Zeile von A aktiv, aber jetzt wird die zweite Spalte von B verwendet.",
              highlights: [
                { kind: "matrix-row", matrix: "A", row: 0, role: "active" },
                { kind: "matrix-col", matrix: "B", col: 1, role: "active" },
                { kind: "matrix-cell", matrix: "A", row: 0, col: 0, role: "factor" },
                { kind: "matrix-cell", matrix: "B", row: 0, col: 1, role: "factor" },
                { kind: "matrix-cell", matrix: "C", row: 0, col: 1, role: "target" }
              ],
              values: [{ kind: "matrix-cell", matrix: "C", row: 0, col: 1, value: 10 }],
              formula: "C12 = 2 * 5 + 1 * 7",
              product: "2 * 5 = 10",
              sum: "10"
            },
            {
              title: "C12 fertig addieren",
              text: "Der zweite Anteil der Zeile-Spalte-Kombination wird ergänzt.",
              highlights: [
                { kind: "matrix-row", matrix: "A", row: 0, role: "active" },
                { kind: "matrix-col", matrix: "B", col: 1, role: "active" },
                { kind: "matrix-cell", matrix: "A", row: 0, col: 1, role: "factor" },
                { kind: "matrix-cell", matrix: "B", row: 1, col: 1, role: "factor" },
                { kind: "matrix-cell", matrix: "C", row: 0, col: 1, role: "target" }
              ],
              values: [{ kind: "matrix-cell", matrix: "C", row: 0, col: 1, value: 17 }],
              formula: "C12 = 2 * 5 + 1 * 7",
              product: "1 * 7 = 7",
              sum: "10 + 7 = 17"
            },
            {
              title: "Erster Anteil für C21",
              text: "Für C21 wird die zweite Zeile von A mit der ersten Spalte von B kombiniert.",
              highlights: [
                { kind: "matrix-row", matrix: "A", row: 1, role: "active" },
                { kind: "matrix-col", matrix: "B", col: 0, role: "active" },
                { kind: "matrix-cell", matrix: "A", row: 1, col: 0, role: "factor" },
                { kind: "matrix-cell", matrix: "B", row: 0, col: 0, role: "factor" },
                { kind: "matrix-cell", matrix: "C", row: 1, col: 0, role: "target" }
              ],
              values: [{ kind: "matrix-cell", matrix: "C", row: 1, col: 0, value: 0 }],
              formula: "C21 = 0 * 4 + 3 * 6",
              product: "0 * 4 = 0",
              sum: "0"
            },
            {
              title: "C21 fertig addieren",
              text: "Der zweite Anteil liefert den eigentlichen Wert von C21.",
              highlights: [
                { kind: "matrix-row", matrix: "A", row: 1, role: "active" },
                { kind: "matrix-col", matrix: "B", col: 0, role: "active" },
                { kind: "matrix-cell", matrix: "A", row: 1, col: 1, role: "factor" },
                { kind: "matrix-cell", matrix: "B", row: 1, col: 0, role: "factor" },
                { kind: "matrix-cell", matrix: "C", row: 1, col: 0, role: "target" }
              ],
              values: [{ kind: "matrix-cell", matrix: "C", row: 1, col: 0, value: 18 }],
              formula: "C21 = 0 * 4 + 3 * 6",
              product: "3 * 6 = 18",
              sum: "0 + 18 = 18"
            },
            {
              title: "Erster Anteil für C22",
              text: "Für C22 wird die zweite Zeile von A mit der zweiten Spalte von B kombiniert.",
              highlights: [
                { kind: "matrix-row", matrix: "A", row: 1, role: "active" },
                { kind: "matrix-col", matrix: "B", col: 1, role: "active" },
                { kind: "matrix-cell", matrix: "A", row: 1, col: 0, role: "factor" },
                { kind: "matrix-cell", matrix: "B", row: 0, col: 1, role: "factor" },
                { kind: "matrix-cell", matrix: "C", row: 1, col: 1, role: "target" }
              ],
              values: [{ kind: "matrix-cell", matrix: "C", row: 1, col: 1, value: 0 }],
              formula: "C22 = 0 * 5 + 3 * 7",
              product: "0 * 5 = 0",
              sum: "0"
            },
            {
              title: "C22 fertig addieren",
              text: "Nach dem zweiten Anteil ist die Ergebnismatrix vollständig.",
              highlights: [
                { kind: "matrix-row", matrix: "A", row: 1, role: "active" },
                { kind: "matrix-col", matrix: "B", col: 1, role: "active" },
                { kind: "matrix-cell", matrix: "A", row: 1, col: 1, role: "factor" },
                { kind: "matrix-cell", matrix: "B", row: 1, col: 1, role: "factor" },
                { kind: "matrix-cell", matrix: "C", row: 1, col: 1, role: "target" }
              ],
              values: [{ kind: "matrix-cell", matrix: "C", row: 1, col: 1, value: 21 }],
              formula: "C22 = 0 * 5 + 3 * 7",
              product: "3 * 7 = 21",
              sum: "0 + 21 = 21"
            }
          ]
        }
      ]
    },
    {
      id: "lgs",
      title: "Lineare Gleichungssysteme",
      icon: "⚖️",
      cards: [
        {
          title: "Lineares Gleichungssystem",
          body: "Ein System der Form \\[\\begin{aligned} a_{11}x_1 + a_{12}x_2 + \\ldots + a_{1n}x_n &= b_1 \\\\ &\\;\\;\\vdots \\\\ a_{m1}x_1 + a_{m2}x_2 + \\ldots + a_{mn}x_n &= b_m \\end{aligned}\\] mit \\(a_{jk}, b_j \\in \\mathbb{R}\\) heißt lineares Gleichungssystem mit \\(m\\) Gleichungen und \\(n\\) Unbekannten (Variablen). Die \\(b_j\\) heißen Inhomogenitäten, die \\(a_{jk}\\) Koeffizienten. Sind alle \\(b_j = 0\\), heißt das LGS homogen, sonst inhomogen.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 171"
        },
        {
          title: "Matrixschreibweise Ax = b",
          body: "Die linke Seite lässt sich als Matrix-Vektor-Produkt schreiben: \\(A\\vec{x} = \\vec{b}\\). Die Matrix \\(A := (a_{jk})\\) heißt Koeffizientenmatrix, der Vektor \\(\\vec{b}\\) Inhomogenitätsvektor. Da alle wichtigen Informationen in \\(A\\) und \\(\\vec{b}\\) stehen, verzichtet man beim Rechnen gerne auf \\(\\vec{x}\\): Übrig bleibt die so genannte erweiterte Koeffizientenmatrix \\((A|\\vec{b})\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 172-173"
        },
        {
          title: "Lösungsvektor und Lösungsmenge",
          body: "Der Vektor \\(\\vec{x}\\) heißt Lösungsvektor des LGSs, wenn seine Komponenten \\(x_1, \\ldots, x_n\\) alle Gleichungen des LGSs erfüllen. Die Menge aller Lösungsvektoren heißt Lösungsmenge des LGSs.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 174"
        },
        {
          title: "Elementare Zeilenoperationen",
          body: "Beim Lösen sind gestattet: Tauschen von Zeilen; Addition eines (ggf. negativen) Vielfachen einer Zeile zu einer anderen; Multiplikation einer Zeile mit einer Zahl ungleich Null. Diese Operationen ändern die Lösungsmenge nicht und genügen, um jedes lösbare LGS zu lösen — sie sind der Kern des Gauß-Algorithmus.",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folien 165-166"
        },
        {
          title: "Beispiel: Gauß-Algorithmus",
          body: "Das System \\(2x_1 + 2x_2 = 2\\), \\(-x_1 + 6x_2 = -1\\) wird als erweiterte Koeffizientenmatrix umgeformt: Zeilen tauschen, zu Zeile 2 zweimal Zeile 1 addieren, Zeile 2 durch 14 teilen (normieren), von Zeile 1 sechsmal Zeile 2 subtrahieren, Zeile 1 mit \\((-1)\\) multiplizieren. Ergebnis: \\[\\left(\\begin{array}{cc|c} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{array}\\right) \\;\\Rightarrow\\; x_1 = 1,\\; x_2 = 0\\]",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 162-164"
        },
        {
          title: "Der Idealfall",
          body: "Ein LGS mit \\(m\\) Gleichungen und \\(m\\) Variablen kann unter gewissen Voraussetzungen in die Form mit der Einheitsmatrix im linken Teil überführt werden. Daran kann die eindeutige Lösung \\(x_1 = c_1, \\ldots, x_m = c_m\\) direkt abgelesen werden. Dieser Idealfall sollte als zu erstrebendes Ziel nie aus den Augen verloren werden.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 167, 175"
        },
        {
          title: "Unendlich viele Lösungen",
          body: "Beispiel: \\(3x_1 + 6x_2 = 9\\), \\(4x_1 + 8x_2 = 12\\) führt nach Umformungen auf eine Nullzeile \\(0 = 0\\) — eine wahre Aussage, die die Lösungsmenge nicht einschränkt. Es verbleibt \\(x_1 + 2x_2 = 3\\) mit unendlich vielen Lösungen in der Abhängigkeit \\(x_1 = 3 - 2x_2\\): Eine konkrete Lösung ergibt sich durch konkretes Wählen von \\(x_2\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 168-169"
        },
        {
          title: "Keine Lösung",
          body: "Ergibt sich nach Umformungen eine Zeile der Form \\[\\left(\\begin{array}{cc|c} 1 & 0 & 1 \\\\ 0 & 0 & 1 \\end{array}\\right)\\] so bedeutet die letzte Zeile \\(0 = 1\\): Das ursprüngliche LGS hat keine Lösung.",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 170"
        },
        {
          title: "Lösungsraum homogener LGS",
          body: "Die Lösungsmenge eines homogenen LGS ist ein Vektorraum, daher spricht man von einem Lösungsraum. Satz: Linearkombinationen von Lösungen eines homogenen LGSs \\(A\\vec{x} = \\vec{0}\\) sind wieder Lösungen.",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folien 176-177"
        },
        {
          title: "Struktur der Lösungsmenge inhomogener LGS",
          body: "Sei \\(\\vec{x}_P\\) eine beliebige Lösung des inhomogenen LGSs \\(A\\vec{x} = \\vec{b}\\) und \\(L_H\\) der Lösungsraum des zugehörigen homogenen LGSs \\(A\\vec{x} = \\vec{0}\\). Dann ist \\[\\vec{x}_P + L_H := \\{\\vec{x}_P + \\vec{x}_H \\,|\\, \\vec{x}_H \\in L_H\\}\\] die gesamte Lösungsmenge des inhomogenen LGSs. \\(\\vec{x}_P\\) heißt auch partikuläre Lösung; man schreibt auch \\(\\vec{x}_S\\) und spricht von der speziellen Lösung.",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folien 178-179"
        },
        {
          title: "Dokumentation der Gauß-Schritte",
          body: "Die Schritte beim Gauß-Algorithmus werden dokumentiert, indem über den Pfeil geschrieben wird, was getan wird; die Zeilen bekommen römische Ziffern. Beispiel: \\(2 \\cdot \\mathrm{II} - 3 \\cdot \\mathrm{I}\\) bedeutet „zwei mal zweite Zeile minus drei mal erste Zeile“.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 180"
        }
      ],
      questions: [
        {
          question: "Was ist ein inhomogenes lineares Gleichungssystem?",
          answer: "Ein LGS \\(A\\vec{x} = \\vec{b}\\), bei dem nicht alle Inhomogenitäten \\(b_j\\) gleich 0 sind. Sind alle \\(b_j = 0\\), heißt das LGS homogen.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 171"
        },
        {
          question: "Welche Operationen sind beim Gauß-Algorithmus gestattet?",
          answer: "Tauschen von Zeilen; Addition eines (ggf. negativen) Vielfachen einer Zeile zu einer anderen; Multiplikation einer Zeile mit einer Zahl ungleich Null.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 165"
        },
        {
          question: "Warum ändern die elementaren Zeilenoperationen die Lösungen nicht?",
          answer: "Die Folien halten fest: Diese Operationen ändern die Lösungsmenge des Gleichungssystems nicht und genügen, um jedes lösbare LGS zu lösen.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 166"
        },
        {
          question: "Was ist die erweiterte Koeffizientenmatrix?",
          answer: "\\((A|\\vec{b})\\) — die Koeffizientenmatrix mit angehängtem Inhomogenitätsvektor. Auf \\(\\vec{x}\\) wird verzichtet, da alle wichtigen Informationen in \\(A\\) und \\(\\vec{b}\\) stehen.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 173"
        },
        {
          question: "Woran erkennt man bei den Umformungen, dass ein LGS keine Lösung hat?",
          answer: "An einer Zeile, die eine falsche Aussage wie \\(0 = 1\\) bedeutet.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 170"
        },
        {
          question: "Woran erkennt man unendlich viele Lösungen und wie gibt man sie an?",
          answer: "Eine Nullzeile \\(0 = 0\\) schränkt die Lösungsmenge nicht ein. Es verbleiben Gleichungen mit Abhängigkeiten (z. B. \\(x_1 = 3 - 2x_2\\)); konkrete Lösungen ergeben sich durch konkretes Wählen der freien Variablen.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 168-169"
        },
        {
          question: "Welche Struktur hat die Lösungsmenge eines inhomogenen LGS?",
          answer: "\\(\\vec{x}_P + L_H\\): eine partikuläre Lösung plus der Lösungsraum des zugehörigen homogenen Systems.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 178"
        },
        {
          question: "Was gilt für Linearkombinationen von Lösungen eines homogenen LGS?",
          answer: "Sie sind wieder Lösungen — die Lösungsmenge eines homogenen LGS ist ein Vektorraum (Lösungsraum).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 176-177"
        }
      ],
      flashcards: [
        {
          front: "Wann heißt ein lineares Gleichungssystem homogen, wann inhomogen?",
          back: "Homogen, wenn alle Inhomogenitäten \\(b_j = 0\\) sind; sonst inhomogen. Die \\(a_{jk}\\) heißen Koeffizienten, die \\(b_j\\) Inhomogenitäten.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 171"
        },
        {
          front: "Wie schreibt man ein LGS in Matrixform?",
          back: "\\(A\\vec{x} = \\vec{b}\\) mit der Koeffizientenmatrix \\(A\\) und dem Inhomogenitätsvektor \\(\\vec{b}\\). Beim Rechnen verzichtet man gern auf \\(\\vec{x}\\), da alle wichtigen Informationen in \\(A\\) und \\(\\vec{b}\\) stehen — übrig bleibt die erweiterte Koeffizientenmatrix \\((A|\\vec{b})\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 172-173"
        },
        {
          front: "Welche drei elementaren Zeilenoperationen sind beim Gauß-Algorithmus gestattet?",
          back: "1. Tauschen von Zeilen, 2. Addition eines (ggf. negativen) Vielfachen einer Zeile zu einer anderen, 3. Multiplikation einer Zeile mit einer Zahl ungleich Null. Diese Operationen ändern die Lösungsmenge nicht.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 165-166"
        },
        {
          front: "Was ist der Idealfall beim Gauß-Algorithmus?",
          back: "Die erweiterte Koeffizientenmatrix wird so umgeformt, dass im linken Teil die Einheitsmatrix steht. Daran kann die eindeutige Lösung \\(x_1 = c_1, \\ldots, x_m = c_m\\) direkt abgelesen werden.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 167, 175"
        },
        {
          front: "Was bedeutet eine Nullzeile „\\(0 = 0\\)“ nach den Umformungen?",
          back: "Sie ist eine wahre Aussage und schränkt die Lösungsmenge nicht ein. Es verbleiben Gleichungen mit Abhängigkeiten (z. B. \\(x_1 = 3 - 2x_2\\)) — das LGS hat dann unendlich viele Lösungen, und eine konkrete Lösung ergibt sich durch konkretes Wählen der freien Variablen.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 168-169"
        },
        {
          front: "Was bedeutet eine Zeile „\\(0 = 1\\)“ nach den Umformungen?",
          back: "Eine falsche Aussage — das ursprüngliche LGS hat keine Lösung.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 170"
        },
        {
          front: "Wie ist die Lösungsmenge eines inhomogenen LGS aufgebaut?",
          back: "\\(\\vec{x}_P + L_H = \\{\\vec{x}_P + \\vec{x}_H \\,|\\, \\vec{x}_H \\in L_H\\}\\): eine partikuläre (auch: spezielle) Lösung \\(\\vec{x}_P\\) plus der Lösungsraum \\(L_H\\) des zugehörigen homogenen LGSs \\(A\\vec{x} = \\vec{0}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 178-179"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 31",
          task: "Berechnen Sie mithilfe des Gauß-Algorithmus sämtliche Lösungen des homogenen und des inhomogenen linearen Gleichungssystems \\[\\begin{aligned} -x - 2y &= 0 \\\\ 2x + 4y &= 0 \\end{aligned} \\qquad , \\qquad \\begin{aligned} -x - 2y &= -1 \\\\ 2x + 4y &= 2 \\end{aligned}\\] und zeichnen Sie alle Lösungsmengen in ein Koordinatensystem.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 31"
        },
        {
          ref: "Aufgabe 32",
          task: "Für welche Werte von \\(\\alpha \\in \\mathbb{R}\\) hat das lineare Gleichungssystem \\[\\begin{aligned} x + y + z &= 2 \\\\ x + 2y - 2z &= 2 \\\\ 3x + y + \\alpha^2 z &= 2\\alpha \\end{aligned}\\] keine, eine bzw. unendlich viele Lösungen?",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 32"
        }
      ]
    },
    {
      id: "determinante",
      title: "Determinante",
      icon: "📦",
      cards: [
        {
          title: "Vektoren als Matrix — wozu die Determinante?",
          body: "Mehrere Vektoren (meist eine Basis) lassen sich zu einer Matrix zusammenfassen, indem jeder Vektor in eine Spalte geschrieben wird — so wird z. B. aus der Standardbasis des \\(\\mathbb{R}^3\\) die \\((3 \\times 3)\\)-Einheitsmatrix. Aus der Berechnung einer einzigen Größe, der Determinante, lässt sich eine Vielzahl von Eigenschaften ableiten. Interessant sind dabei: lineare Unabhängigkeit (einfachere Prüfung als bisher) und Volumenberechnung (Volumen eines Quaders im \\(\\mathbb{R}^n\\), dessen Kanten durch \\(n\\) Vektoren gegeben sind).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 181-183"
        },
        {
          title: "Streichungsmatrix",
          body: "Sei \\(A \\in M(n \\times n)\\) mit \\(n > 1\\). Durch Streichen der \\(i\\)-ten Zeile und \\(j\\)-ten Spalte kann aus \\(A\\) die so genannte Streichungsmatrix \\(S_{ij}(A) \\in M(n-1 \\times n-1)\\) gewonnen werden.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 184"
        },
        {
          title: "Determinante (Laplace'scher Entwicklungssatz)",
          body: "Sei \\(n > 1\\). Die Determinante \\(\\det: M(n \\times n) \\to \\mathbb{R}\\) ist definiert durch \\[\\det A = \\sum_{k=1}^{n} (-1)^{i+k} a_{ik} \\det S_{ik}(A) \\;\\text{(Entwicklung nach der } i\\text{-ten Zeile)}\\] \\[\\det A = \\sum_{i=1}^{n} (-1)^{i+k} a_{ik} \\det S_{ik}(A) \\;\\text{(Entwicklung nach der } k\\text{-ten Spalte)}\\] Für \\(A = (a_{11}) \\in M(1 \\times 1)\\) gilt \\(\\det A := a_{11}\\). Die Determinante ist also rekursiv über Determinanten kleinerer Matrizen definiert. Statt \\(\\det(\\cdot)\\) werden oft Betragsstriche um die Matrix geschrieben.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 185-187"
        },
        {
          title: "Strategie: Zeile oder Spalte mit vielen Nullen wählen",
          body: "Der Vorteil des Entwicklungssatzes: Man darf sich die Zeile oder Spalte aussuchen, die am wenigsten Rechenaufwand verspricht — typischerweise die mit den meisten Nullen, denn so entfallen viele Determinantenberechnungen für die Streichungsmatrizen. Enthält eine quadratische Matrix eine Nullzeile oder -spalte, ist ihre Determinante Null.",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folien 188-189"
        },
        {
          title: "Determinante von (2×2)-Matrizen",
          body: "Entwicklung nach der ersten Spalte liefert die Formel \\[\\det \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} = a_{11}a_{22} - a_{21}a_{12}\\] (Hauptdiagonale minus Nebendiagonale).",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 191-192"
        },
        {
          title: "Regel von Sarrus für (3×3)-Matrizen",
          body: "Die ersten beiden Spalten werden noch einmal hinten an die Matrix geschrieben. Die Terme zu den schräg nach unten zeigenden Pfeilen werden addiert, jene zu den schräg nach oben zeigenden subtrahiert; entlang der Pfeile wird multipliziert. Diese Determinantenberechnung heißt Regel von Sarrus.",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 193"
        },
        {
          title: "Determinante von Dreiecksmatrizen",
          body: "Die Determinante von (oberen wie unteren) Dreiecksmatrizen ist das Produkt der Diagonaleinträge: \\[\\det = a_{11} \\cdot a_{22} \\cdot \\ldots \\cdot a_{nn}\\] (Als Übung zum Laplace'schen Entwicklungssatz eigenständig nachprüfen — und wie ist das für Diagonalmatrizen?)",
          tag: "formel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 194"
        },
        {
          title: "Determinante und lineare Abhängigkeit in der Ebene",
          body: "Vektoren der Ebene sind genau dann linear abhängig, wenn sie Vielfache voneinander sind; andernfalls spannen sie die gesamte Ebene auf. Eine \\((2 \\times 2)\\)-Matrix mit linear abhängigen Spaltenvektoren hat Determinante Null: \\[\\begin{vmatrix} a & \\lambda a \\\\ b & \\lambda b \\end{vmatrix} = a \\lambda b - b \\lambda a = 0\\]",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 196"
        },
        {
          title: "Der große Äquivalenzsatz",
          body: "Sei \\(A \\in M(n \\times n)\\). Dann gelten folgende Äquivalenzen: \\[\\det A \\ne 0\\] \\[\\Leftrightarrow \\text{Die Spalten (Zeilen) von } A \\text{ sind linear unabhängig}\\] \\[\\Leftrightarrow \\operatorname{Rang} A = n\\] \\[\\Leftrightarrow A^{-1} \\text{ existiert}\\]",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folie 197"
        }
      ],
      questions: [
        {
          question: "Was besagt der Laplace'sche Entwicklungssatz?",
          answer: "Die Determinante lässt sich nach einer beliebigen Zeile oder Spalte entwickeln: \\(\\det A = \\sum_k (-1)^{i+k} a_{ik} \\det S_{ik}(A)\\) (Zeile) bzw. \\(\\sum_i (-1)^{i+k} a_{ik} \\det S_{ik}(A)\\) (Spalte), mit den Streichungsmatrizen \\(S_{ik}(A)\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 185"
        },
        {
          question: "Was ist die Streichungsmatrix?",
          answer: "\\(S_{ij}(A) \\in M(n-1 \\times n-1)\\) entsteht aus \\(A\\), indem die \\(i\\)-te Zeile und die \\(j\\)-te Spalte gestrichen werden.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 184"
        },
        {
          question: "Für welche Anwendungen lässt sich die Determinante verwenden und welche geometrische Interpretation gibt es?",
          answer: "Prüfung auf lineare Unabhängigkeit und Volumenberechnung: Welches Volumen hat ein Quader im \\(\\mathbb{R}^n\\), dessen Kanten durch \\(n\\) Vektoren gegeben sind?",
          source: "VorlesungFolienLAA-2026.pdf, Folie 183"
        },
        {
          question: "Wie berechnet man mit der Regel von Sarrus die Determinante von (3×3)-Matrizen?",
          answer: "Die ersten beiden Spalten hinten an die Matrix anschreiben; entlang der schräg nach unten zeigenden Pfeile multiplizieren und addieren, entlang der schräg nach oben zeigenden multiplizieren und subtrahieren.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 193"
        },
        {
          question: "Was können Sie folgern, wenn die Determinante einer Matrix A ungleich Null ist?",
          answer: "Die Spalten (Zeilen) von \\(A\\) sind linear unabhängig, \\(\\operatorname{Rang} A = n\\) und \\(A^{-1}\\) existiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 197"
        },
        {
          question: "Welche Zeile oder Spalte wählt man zur Entwicklung am besten und warum?",
          answer: "Die mit den meisten Nullen, denn so entfallen viele Determinantenberechnungen für die Streichungsmatrizen.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 188"
        },
        {
          question: "Was ist die Determinante einer Matrix mit einer Nullzeile oder Nullspalte?",
          answer: "Null — bei Entwicklung nach dieser Zeile bzw. Spalte verschwinden alle Summanden.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 189"
        },
        {
          question: "Wie berechnet sich die Determinante einer Dreiecksmatrix?",
          answer: "Als Produkt der Diagonaleinträge: \\(a_{11} \\cdot a_{22} \\cdot \\ldots \\cdot a_{nn}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 194"
        }
      ],
      flashcards: [
        {
          front: "Wie berechnet man die Determinante einer \\((2 \\times 2)\\)-Matrix?",
          back: "\\(\\det \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} = a_{11}a_{22} - a_{21}a_{12}\\) — Hauptdiagonale minus Nebendiagonale.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 191-192"
        },
        {
          front: "Was ist die Determinante einer \\((1 \\times 1)\\)-Matrix?",
          back: "\\(\\det(a_{11}) = a_{11}\\) — der Eintrag selbst. Das ist der Startpunkt der rekursiven Definition: Die Determinante größerer Matrizen ist über Determinanten kleinerer Matrizen definiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 185"
        },
        {
          front: "Was ist die Streichungsmatrix \\(S_{ij}(A)\\)?",
          back: "Die \\((n-1 \\times n-1)\\)-Matrix, die aus \\(A\\) durch Streichen der \\(i\\)-ten Zeile und der \\(j\\)-ten Spalte entsteht.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 184"
        },
        {
          front: "Wie lautet die Entwicklung nach der \\(i\\)-ten Zeile im Laplace'schen Entwicklungssatz?",
          back: "\\(\\det A = \\sum_{k=1}^{n} (-1)^{i+k} a_{ik} \\det S_{ik}(A)\\) — mit dem Vorzeichenfaktor \\((-1)^{i+k}\\) und den Streichungsmatrizen \\(S_{ik}(A)\\). Man wählt am besten die Zeile oder Spalte mit den meisten Nullen.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 185, 188"
        },
        {
          front: "Wie berechnet sich die Determinante einer Dreiecksmatrix?",
          back: "Als Produkt der Diagonaleinträge: \\(\\det = a_{11} \\cdot a_{22} \\cdot \\ldots \\cdot a_{nn}\\) — bei oberen wie unteren Dreiecksmatrizen.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 194"
        },
        {
          front: "Was ist die Determinante einer Matrix mit einer Nullzeile oder Nullspalte?",
          back: "Null — entwickelt man nach dieser Zeile bzw. Spalte, verschwinden alle Summanden.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 189"
        },
        {
          front: "Zu welchen Aussagen ist \\(\\det A \\ne 0\\) äquivalent?",
          back: "Die Spalten (Zeilen) von \\(A\\) sind linear unabhängig, es gilt \\(\\operatorname{Rang} A = n\\), und die Inverse \\(A^{-1}\\) existiert (der große Äquivalenzsatz).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 197"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 33",
          task: "Berechnen Sie die Determinanten folgender Matrizen:<br>a) \\(A = \\begin{pmatrix} -4 & -3 & -2 \\\\ -1 & 0 & 1 \\\\ 2 & 3 & 4 \\end{pmatrix}\\)<br>b) \\(B = \\begin{pmatrix} 1 & 2 & 0 & 3 \\\\ 2 & 2 & 3 & 0 \\\\ 3 & 1 & 0 & 2 \\\\ 0 & 3 & 1 & 6 \\end{pmatrix}\\)",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 33"
        },
        {
          ref: "Aufgabe 34",
          task: "Überprüfen Sie mithilfe von Determinanten, ob die Vektoren \\[\\vec{v}_1 = \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}, \\quad \\vec{v}_2 = \\begin{pmatrix} 3 \\\\ -1 \\\\ 0 \\end{pmatrix}, \\quad \\vec{v}_3 = \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}\\] linear abhängig oder linear unabhängig sind.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 34"
        },
        {
          ref: "Aufgabe 35",
          task: "Gegeben ist die Matrix \\(A = \\begin{pmatrix} 1 & -2 & 3 \\\\ 2 & -1 & 0 \\\\ 1 & 2 & 3 \\end{pmatrix}\\).<br>a) Ist die Matrix \\(A\\) invertierbar? Begründen Sie Ihre Antwort.<br>b) Welchen Rang hat \\(A\\)?",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 35"
        }
      ]
    },
    {
      id: "vektorgeometrie",
      title: "Kreuzprodukt, Norm & Skalarprodukt",
      icon: "📏",
      cards: [
        {
          title: "Kreuzprodukt — nur im R³",
          body: "Das Kreuzprodukt gibt eine Möglichkeit, zwei Vektoren miteinander zu multiplizieren. Es ist allerdings nur für Vektoren des \\(\\mathbb{R}^3\\) definiert, bietet dort aber eine schöne geometrische Interpretation. Das Skalarprodukt ist ein weiteres Produkt von Vektoren, das gänzlich anders aussieht.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 198"
        },
        {
          title: "Definition des Kreuzprodukts",
          body: "Seien \\(\\vec{x}, \\vec{y} \\in \\mathbb{R}^3\\). Dann ist das Kreuzprodukt definiert durch \\[\\vec{x} \\times \\vec{y} := \\begin{pmatrix} x_2 y_3 - x_3 y_2 \\\\ x_3 y_1 - x_1 y_3 \\\\ x_1 y_2 - x_2 y_1 \\end{pmatrix}\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 199"
        },
        {
          title: "Eigenschaften des Kreuzprodukts",
          body: "\\(\\vec{x} \\times \\vec{y}\\) steht senkrecht auf \\(\\vec{x}\\) und \\(\\vec{y}\\); das Kreuzprodukt ist in beiden Eingängen linear; \\((\\vec{x}, \\vec{y}, \\vec{x} \\times \\vec{y})\\) genügen der Rechte-Hand-Regel.",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 200"
        },
        {
          title: "Kreuzprodukt in der Physik",
          body: "Bekannte Beispiele sind die Winkelgeschwindigkeit \\(\\vec{\\omega}\\) mit der Gleichung \\(\\vec{v} = \\vec{\\omega} \\times \\vec{r}\\) sowie die Lorentz-Kraft \\(\\vec{F} = q(\\vec{v} \\times \\vec{B})\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 202"
        },
        {
          title: "Standardnorm",
          body: "Die so genannte Standardnorm auf dem \\(\\mathbb{R}^n\\) ist definiert als \\[\\lVert\\vec{x}\\rVert := \\left(x_1^2 + \\ldots + x_n^2\\right)^{\\frac{1}{2}}\\] Mit der Norm lassen sich Untersuchungen in normierten Vektorräumen durchführen (Längenmessung).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 204-205"
        },
        {
          title: "Standardskalarprodukt",
          body: "Das so genannte Standardskalarprodukt auf dem \\(\\mathbb{R}^n\\) ist definiert als \\[\\langle\\vec{x}, \\vec{y}\\rangle = x_1 y_1 + \\ldots + x_n y_n\\] Jedes Skalarprodukt induziert eine Norm (aber nicht umgekehrt).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 205-206"
        },
        {
          title: "Skalarprodukt, Norm und Winkel",
          body: "Es gilt \\(\\langle\\vec{x}, \\vec{x}\\rangle = x_1^2 + \\ldots + x_n^2\\), also \\[\\lVert\\vec{x}\\rVert = \\sqrt{\\langle\\vec{x}, \\vec{x}\\rangle}\\] Die Standardnorm wird vom Standardskalarprodukt induziert. Ferner gilt \\[\\langle\\vec{v}, \\vec{w}\\rangle = \\lVert\\vec{v}\\rVert \\lVert\\vec{w}\\rVert \\cos\\sphericalangle(\\vec{v}, \\vec{w})\\] mit dem Winkel zwischen den Vektoren \\(\\vec{v}\\) und \\(\\vec{w}\\).",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folie 207"
        },
        {
          title: "Orthogonalbasis und Orthonormalbasis",
          body: "Eine Basis \\(\\{\\vec{b}_1, \\ldots, \\vec{b}_n\\}\\) des \\(\\mathbb{R}^n\\) heißt Orthogonalbasis, wenn \\(\\langle\\vec{b}_i, \\vec{b}_j\\rangle = 0\\) für \\(i \\ne j\\). Sie heißt Orthonormalbasis (ONB), wenn \\(\\langle\\vec{b}_i, \\vec{b}_j\\rangle = 1\\) für \\(i = j\\) und \\(0\\) für \\(i \\ne j\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 208"
        },
        {
          title: "Orthogonalität",
          body: "Sind \\(\\vec{v}, \\vec{w}\\) orthogonal zueinander, schreibt man \\(\\vec{v} \\perp \\vec{w}\\). Die Bedingung lautet: \\[\\vec{x} \\perp \\vec{y} \\;\\Leftrightarrow\\; \\langle\\vec{x}, \\vec{y}\\rangle = 0\\] Beispiel im \\(\\mathbb{R}^2\\): \\(\\vec{x} = (1, 0)^T\\), \\(\\vec{y} = (0, 1)^T\\) mit \\(\\langle\\vec{x}, \\vec{y}\\rangle = 1 \\cdot 0 + 0 \\cdot 1 = 0\\) — die Vektoren sind bezüglich des Standardskalarproduktes senkrecht zueinander.",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folien 209-210"
        }
      ],
      questions: [
        {
          question: "Wie wird das Kreuzprodukt definiert und für welche Vektoren?",
          answer: "Nur für \\(\\vec{x}, \\vec{y} \\in \\mathbb{R}^3\\): \\(\\vec{x} \\times \\vec{y} = (x_2y_3 - x_3y_2,\\; x_3y_1 - x_1y_3,\\; x_1y_2 - x_2y_1)^T\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 198-199"
        },
        {
          question: "Welche Eigenschaften hat das Kreuzprodukt?",
          answer: "\\(\\vec{x} \\times \\vec{y}\\) steht senkrecht auf \\(\\vec{x}\\) und \\(\\vec{y}\\); es ist in beiden Eingängen linear; \\((\\vec{x}, \\vec{y}, \\vec{x} \\times \\vec{y})\\) genügen der Rechte-Hand-Regel.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 200"
        },
        {
          question: "Wie lautet das Standardskalarprodukt auf dem Rⁿ und wie erhält man daraus die Standardnorm?",
          answer: "\\(\\langle\\vec{x}, \\vec{y}\\rangle = x_1y_1 + \\ldots + x_ny_n\\); wegen \\(\\langle\\vec{x}, \\vec{x}\\rangle = x_1^2 + \\ldots + x_n^2\\) gilt \\(\\lVert\\vec{x}\\rVert = \\sqrt{\\langle\\vec{x}, \\vec{x}\\rangle}\\) — die Standardnorm wird vom Standardskalarprodukt induziert.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 204-207"
        },
        {
          question: "Wie lassen sich Winkel zwischen Elementen des Rⁿ berechnen?",
          answer: "Über \\(\\langle\\vec{v}, \\vec{w}\\rangle = \\lVert\\vec{v}\\rVert \\lVert\\vec{w}\\rVert \\cos\\sphericalangle(\\vec{v}, \\vec{w})\\); der in den Kosinus eingesetzte Winkel ist der zwischen \\(\\vec{v}\\) und \\(\\vec{w}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 207"
        },
        {
          question: "Wann sind zwei Vektoren orthogonal?",
          answer: "\\(\\vec{x} \\perp \\vec{y} \\Leftrightarrow \\langle\\vec{x}, \\vec{y}\\rangle = 0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 209"
        },
        {
          question: "Was ist eine Orthonormalbasis?",
          answer: "Eine Basis mit \\(\\langle\\vec{b}_i, \\vec{b}_j\\rangle = 1\\) für \\(i = j\\) und \\(0\\) für \\(i \\ne j\\) — also paarweise orthogonale Vektoren der Länge 1.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 208"
        },
        {
          question: "Wo kommt das Kreuzprodukt in der Physik vor?",
          answer: "Bei der Winkelgeschwindigkeit (\\(\\vec{v} = \\vec{\\omega} \\times \\vec{r}\\)) und der Lorentz-Kraft (\\(\\vec{F} = q(\\vec{v} \\times \\vec{B})\\)).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 202"
        }
      ],
      flashcards: [
        {
          front: "Wie ist das Kreuzprodukt definiert, und für welche Vektoren existiert es?",
          back: "Nur für Vektoren des \\(\\mathbb{R}^3\\): \\(\\vec{x} \\times \\vec{y} := \\begin{pmatrix} x_2y_3 - x_3y_2 \\\\ x_3y_1 - x_1y_3 \\\\ x_1y_2 - x_2y_1 \\end{pmatrix}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 198-199"
        },
        {
          front: "In welche Richtung zeigt der Vektor \\(\\vec{x} \\times \\vec{y}\\)?",
          back: "Er steht senkrecht auf \\(\\vec{x}\\) und auf \\(\\vec{y}\\); \\((\\vec{x}, \\vec{y}, \\vec{x} \\times \\vec{y})\\) genügen der Rechte-Hand-Regel. Außerdem ist das Kreuzprodukt in beiden Eingängen linear.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 200"
        },
        {
          front: "Wie ist die Standardnorm auf dem \\(\\mathbb{R}^n\\) definiert?",
          back: "\\(\\lVert\\vec{x}\\rVert := \\sqrt{x_1^2 + \\ldots + x_n^2}\\). Mit der Norm lassen sich Untersuchungen in normierten Vektorräumen durchführen (Längenmessung).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 204-205"
        },
        {
          front: "Wie ist das Standardskalarprodukt auf dem \\(\\mathbb{R}^n\\) definiert?",
          back: "\\(\\langle\\vec{x}, \\vec{y}\\rangle = x_1y_1 + \\ldots + x_ny_n\\) — die Koordinaten werden paarweise multipliziert und die Produkte addiert.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 205-206"
        },
        {
          front: "Welcher Zusammenhang besteht zwischen Norm und Skalarprodukt?",
          back: "Wegen \\(\\langle\\vec{x}, \\vec{x}\\rangle = x_1^2 + \\ldots + x_n^2\\) gilt \\(\\lVert\\vec{x}\\rVert = \\sqrt{\\langle\\vec{x}, \\vec{x}\\rangle}\\) — die Standardnorm wird vom Standardskalarprodukt induziert. Jedes Skalarprodukt induziert eine Norm, aber nicht umgekehrt.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 205-207"
        },
        {
          front: "Wie berechnet man den Winkel zwischen zwei Vektoren?",
          back: "Über die Formel \\(\\langle\\vec{v}, \\vec{w}\\rangle = \\lVert\\vec{v}\\rVert \\lVert\\vec{w}\\rVert \\cos\\sphericalangle(\\vec{v}, \\vec{w})\\); darin ist \\(\\sphericalangle(\\vec{v}, \\vec{w})\\) der Winkel zwischen den Vektoren \\(\\vec{v}\\) und \\(\\vec{w}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 207"
        },
        {
          front: "Wann heißen zwei Vektoren orthogonal?",
          back: "Wenn ihr Skalarprodukt Null ist: \\(\\vec{x} \\perp \\vec{y} \\Leftrightarrow \\langle\\vec{x}, \\vec{y}\\rangle = 0\\). Beispiel im \\(\\mathbb{R}^2\\): \\((1, 0)^T\\) und \\((0, 1)^T\\) mit \\(\\langle\\vec{x}, \\vec{y}\\rangle = 1 \\cdot 0 + 0 \\cdot 1 = 0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 209-210"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 36",
          task: "Bilden Sie mit den Vektoren \\(\\vec{u} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}\\), \\(\\vec{v} = \\begin{pmatrix} -3 \\\\ 0 \\\\ 4 \\end{pmatrix}\\) und \\(\\vec{w} = \\begin{pmatrix} 4 \\\\ 10 \\\\ -2 \\end{pmatrix}\\) den Vektor \\((\\vec{w} \\times \\vec{v}) \\times \\vec{u}\\).",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 36"
        },
        {
          ref: "Aufgabe 37",
          task: "a) Normieren Sie die folgenden Vektoren: \\[\\vec{v}_1 = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}, \\quad \\vec{v}_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\vec{v}_3 = \\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}\\]<br>b) Berechnen Sie den Winkel zwischen den Vektoren \\(\\vec{v} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}\\) und \\(\\vec{w} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix}\\).",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 37"
        }
      ]
    },
    {
      id: "eigenwerte",
      title: "Eigenwerte & Eigenvektoren",
      icon: "🎯",
      cards: [
        {
          title: "Eigenwert und Eigenvektor",
          body: "Sei \\(A\\) eine quadratische Matrix, aufgefasst als Abbildung von \\(\\mathbb{R}^n\\) nach \\(\\mathbb{R}^n\\). Eine Zahl \\(\\lambda\\) heißt Eigenwert (EW) von \\(A\\) zum Eigenvektor (EV) \\(\\vec{v} \\ne \\vec{0}\\), wenn \\(\\vec{v}\\) durch \\(A\\) auf das \\(\\lambda\\)-Fache von sich selbst abgebildet wird: \\[A\\vec{v} = \\lambda\\vec{v} \\quad \\text{(Eigenwertgleichung)}\\]",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 211"
        },
        {
          title: "Warum wird der Nullvektor ausgenommen?",
          body: "Der Nullvektor würde die Eigenwertgleichung für jedes \\(\\lambda\\) erfüllen. Für die nachfolgende Theorie ist es jedoch wichtig, dass jedem Eigenvektor ein eindeutiger Eigenwert zugeordnet werden kann.",
          tag: "wichtig",
          source: "VorlesungFolienLAA-2026.pdf, Folie 212"
        },
        {
          title: "Umformung der Eigenwertgleichung",
          body: "Die Eigenwertgleichung ist ein lineares Gleichungssystem. Umgestellt: \\[A\\vec{v} = \\lambda\\vec{v} \\;\\Leftrightarrow\\; A\\vec{v} - \\lambda\\vec{v} = \\vec{0} \\;\\Leftrightarrow\\; (A - \\lambda E)\\vec{v} = \\vec{0}\\] Im letzten Schritt muss die Einheitsmatrix \\(E\\) hinzugefügt werden, damit der Term innerhalb der Klammern definiert ist.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 213-214"
        },
        {
          title: "Bedingung für Eigenwerte",
          body: "Gesucht sind jene \\(\\lambda\\), für welche \\((A - \\lambda E)\\vec{v} = \\vec{0}\\) eine Lösung hat, die nicht nur aus dem Nullvektor besteht. Dies ist äquivalent zu \\[\\det(A - \\lambda E) = 0\\]",
          tag: "satz",
          source: "VorlesungFolienLAA-2026.pdf, Folie 215"
        },
        {
          title: "Charakteristisches Polynom",
          body: "Der Determinantenterm \\(P_A(\\lambda) := \\det(A - \\lambda E)\\) wird charakteristisches Polynom genannt. Er liefert nach dem Ausrechnen ein Polynom \\(n\\)-ten Grades in \\(\\lambda\\). Die Nullstellen des charakteristischen Polynoms liefern die Eigenwerte von \\(A\\).",
          tag: "def",
          source: "VorlesungFolienLAA-2026.pdf, Folie 216"
        },
        {
          title: "Beispiel: Eigenwerte berechnen",
          body: "Für \\(A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\): \\[\\det(A - \\lambda E) = \\begin{vmatrix} -\\lambda & 1 \\\\ 1 & -\\lambda \\end{vmatrix} = \\lambda^2 - 1\\] Die Nullstellen — und damit die Eigenwerte — sind \\(\\lambda_{1,2} = \\pm 1\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 217"
        },
        {
          title: "Eigenvektoren berechnen",
          body: "Ist ein Eigenwert \\(\\lambda\\) gefunden, so berechnen sich die zugehörigen Eigenvektoren über das LGS \\((A - \\lambda E)\\vec{v} = \\vec{0}\\). Beispiel: Für \\(A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\) und \\(\\lambda_1 = +1\\) liefert der Gauß-Algorithmus Lösungen der Form \\(x = y\\), also \\(\\vec{v} = x\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\). Eigenvektor: \\(\\vec{v}_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\) bzw. alle Vielfachen davon.",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folien 218-219"
        },
        {
          title: "Komplexe Eigenwerte",
          body: "Das charakteristische Polynom von \\(A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\) ist \\(\\lambda^2 + 1\\). Im Reellen ist dies nicht zu faktorisieren und es gibt keine Eigenwerte. Im Komplexen hingegen ist \\(\\lambda^2 + 1 = (\\lambda + \\mathrm{i})(\\lambda - \\mathrm{i})\\) und \\(A\\) hat die komplexen Eigenwerte \\(\\lambda_{1,2} = \\pm\\mathrm{i}\\).",
          tag: "beispiel",
          source: "VorlesungFolienLAA-2026.pdf, Folie 220"
        }
      ],
      questions: [
        {
          question: "Wie lautet die Eigenwertgleichung?",
          answer: "\\(A\\vec{v} = \\lambda\\vec{v}\\) mit \\(\\vec{v} \\ne \\vec{0}\\): Der Eigenvektor wird durch \\(A\\) auf das \\(\\lambda\\)-Fache von sich selbst abgebildet.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 211"
        },
        {
          question: "Warum wird der Nullvektor als Eigenvektor ausgeschlossen?",
          answer: "Er würde die Eigenwertgleichung für jedes \\(\\lambda\\) erfüllen; für die Theorie ist aber wichtig, dass jedem Eigenvektor ein eindeutiger Eigenwert zugeordnet werden kann.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 212"
        },
        {
          question: "Wie wird das charakteristische Polynom berechnet und woher kommt die dazu verwendete Gleichung?",
          answer: "\\(P_A(\\lambda) := \\det(A - \\lambda E)\\). Die Gleichung kommt aus der Umformung der Eigenwertgleichung: \\(A\\vec{v} = \\lambda\\vec{v} \\Leftrightarrow (A - \\lambda E)\\vec{v} = \\vec{0}\\); nichttriviale Lösungen existieren genau für \\(\\det(A - \\lambda E) = 0\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folien 213-216"
        },
        {
          question: "Wie erhält man aus dem charakteristischen Polynom die Eigenwerte?",
          answer: "Die Nullstellen des charakteristischen Polynoms sind die Eigenwerte von \\(A\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 216"
        },
        {
          question: "Wie berechnet man zu einem Eigenwert die zugehörigen Eigenvektoren?",
          answer: "Über das LGS \\((A - \\lambda E)\\vec{v} = \\vec{0}\\), z. B. mit dem Gauß-Algorithmus.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 218"
        },
        {
          question: "Kann eine reelle Matrix komplexe Eigenwerte haben?",
          answer: "Ja. Beispiel: Das charakteristische Polynom \\(\\lambda^2 + 1\\) hat im Reellen keine Nullstellen; im Komplexen faktorisiert es zu \\((\\lambda + \\mathrm{i})(\\lambda - \\mathrm{i})\\) mit den Eigenwerten \\(\\pm\\mathrm{i}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 220"
        },
        {
          question: "Welchen Grad hat das charakteristische Polynom einer (n × n)-Matrix?",
          answer: "Es ist ein Polynom \\(n\\)-ten Grades in \\(\\lambda\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 216"
        }
      ],
      flashcards: [
        {
          front: "Wie lautet die Eigenwertgleichung?",
          back: "\\(A\\vec{v} = \\lambda\\vec{v}\\) mit \\(\\vec{v} \\ne \\vec{0}\\): Der Eigenvektor \\(\\vec{v}\\) wird durch \\(A\\) auf das \\(\\lambda\\)-Fache von sich selbst abgebildet; \\(\\lambda\\) heißt Eigenwert von \\(A\\) zum Eigenvektor \\(\\vec{v}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 211"
        },
        {
          front: "Unter welcher Bedingung ist \\(\\lambda\\) ein Eigenwert von \\(A\\)?",
          back: "Wenn \\(\\det(A - \\lambda E) = 0\\) gilt — genau dann hat das Gleichungssystem \\((A - \\lambda E)\\vec{v} = \\vec{0}\\) eine Lösung, die nicht nur aus dem Nullvektor besteht.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 215"
        },
        {
          front: "Was ist das charakteristische Polynom?",
          back: "\\(P_A(\\lambda) := \\det(A - \\lambda E)\\) — nach dem Ausrechnen ein Polynom \\(n\\)-ten Grades in \\(\\lambda\\). Seine Nullstellen liefern die Eigenwerte von \\(A\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 216"
        },
        {
          front: "Wie berechnet man die Eigenvektoren zu einem gefundenen Eigenwert \\(\\lambda\\)?",
          back: "Als Lösungen des linearen Gleichungssystems \\((A - \\lambda E)\\vec{v} = \\vec{0}\\), z. B. mit dem Gauß-Algorithmus.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 218"
        },
        {
          front: "Warum wird der Nullvektor als Eigenvektor ausgeschlossen?",
          back: "Der Nullvektor würde die Eigenwertgleichung für jedes \\(\\lambda\\) erfüllen. Für die Theorie ist aber wichtig, dass jedem Eigenvektor ein eindeutiger Eigenwert zugeordnet werden kann.",
          source: "VorlesungFolienLAA-2026.pdf, Folie 212"
        },
        {
          front: "Welche Eigenwerte hat die Matrix \\(\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\)?",
          back: "Das charakteristische Polynom ist \\(\\lambda^2 - 1\\) mit den Nullstellen \\(\\lambda_{1,2} = \\pm 1\\). Eigenvektor zu \\(\\lambda_1 = +1\\): \\(\\vec{v}_1 = (1, 1)^T\\) bzw. alle Vielfachen davon.",
          source: "VorlesungFolienLAA-2026.pdf, Folien 217, 219"
        },
        {
          front: "Welche Eigenwerte hat die Matrix \\(\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\)?",
          back: "Das charakteristische Polynom \\(\\lambda^2 + 1\\) ist im Reellen nicht zu faktorisieren — es gibt keine reellen Eigenwerte. Im Komplexen gilt \\(\\lambda^2 + 1 = (\\lambda + \\mathrm{i})(\\lambda - \\mathrm{i})\\), und \\(A\\) hat die komplexen Eigenwerte \\(\\lambda_{1,2} = \\pm\\mathrm{i}\\).",
          source: "VorlesungFolienLAA-2026.pdf, Folie 220"
        }
      ],
      exercises: [
        {
          ref: "Aufgabe 38",
          task: "Bestimmen Sie von \\[A = \\begin{pmatrix} 1 & 2 \\\\ 3 & -1 \\end{pmatrix}, \\qquad B = \\begin{pmatrix} 1 & 0 & 3 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & -1 \\end{pmatrix}\\] die Eigenwerte.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 38"
        },
        {
          ref: "Aufgabe 39",
          task: "Wiederholungsfragen zur linearen Algebra — u. a.: Definition des Vektorraums der reellen Zahlen und der linearen Unabhängigkeit; Rang einer Matrix; besondere Matrizentypen; inhomogene LGS; erlaubte Operationen beim Gauß-Algorithmus; Laplace'scher Entwicklungssatz; Anwendungen und geometrische Interpretation der Determinante; Regel von Sarrus; Folgerungen aus \\(\\det A \\ne 0\\); Rechenregeln für Determinanten; Definition des Kreuzprodukts; Standardskalarprodukt und Standardnorm; Winkelberechnung im \\(\\mathbb{R}^n\\); Eigenwertgleichung und charakteristisches Polynom.",
          note: "Umfasst den Stoff der Kapitel Vektorräume bis Eigenwerte (Aufgabenteile a–q im Übungsblatt). Die Theoriefragen sind in den Modi „Fragen“ der jeweiligen Themen mit Folienbeleg enthalten.",
          source: "ÜbungsaufgabenLAA.pdf, Aufgabe 39"
        }
      ]
    }
  ]
} satisfies RawSubject;
export default laa;
