window.APP_SUBJECTS = window.APP_SUBJECTS || {};

window.APP_SUBJECTS["fach-id"] = {
  id: "fach-id",
  title: "Fachname",
  subtitle: "Untertitel des Fachs",
  icon: "📘",
  topics: [
    {
      id: "thema-1",
      title: "Thema 1",
      icon: "🧠",
      cards: [
        {
          title: "Begriff oder Konzept",
          body: "Kurze, präzise Erklärung. Einfache HTML-Tags wie <b>, <br> und <code> sind okay."
        }
      ],
      questions: [
        {
          question: "Typische Klausurfrage?",
          answer: "Kurze, präzise Antwort."
        }
      ],
      flashcards: [
        {
          front: "Stichwort oder Frage",
          back: "Merksatz oder Antwort"
        }
      ]
    }
  ]
};
