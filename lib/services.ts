export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  longDescription: string;
  highlights: string[];
  deliverables: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "beratung",
    title: "BERATUNG",
    tagline: "Strategische Beratung für Ihren Erfolg",
    iconName: "lightbulb",
    description:
      "Klare Strategie statt Zufall – wir definieren, was wirklich funktioniert.",
    longDescription:
      "Bevor gestaltet, produziert oder publiziert wird, braucht es eine klare Richtung. In der Beratung analysieren wir Ihre aktuelle Situation, schärfen die Positionierung, definieren Zielgruppen und entwickeln einen Plan, der zu Ihrem Unternehmen passt.\n\nDabei geht es nicht um einzelne Massnahmen, sondern um ein stimmiges Gesamtbild: von Grafik über Content bis zu digitalen Kanälen.\n\nOb als punktuelle Unterstützung oder laufend im Abo – wir begleiten Sie als Sparring-Partner mit Blick auf das, was wirklich Wirkung erzielt.",
    highlights: [
      "Ganzheitlicher Blick auf Ihr Marketing",
      "Massgeschneiderte Strategie statt Standardlösung",
      "Verbindung aller Disziplinen im Digitalpaket",
      "Laufende Optimierung im Abo möglich",
    ],
    deliverables: [
      "Marketing-Strategie",
      "Zielgruppenanalyse",
      "Content-Planung",
      "Markenpositionierung",
      "Wettbewerbsanalyse",
      "Coaching & Schulungen",
    ],
    metaTitle: "Beratung | b-emotion — Marketing-Strategie für KMU",
    metaDescription:
      "Strategische Marketing-Beratung für Schweizer KMU. Von der Zielgruppenanalyse bis zur Content-Planung — persönlich und flexibel. Jetzt Erstgespräch vereinbaren.",
  },
  {
    slug: "grafik-design",
    title: "GRAFIK & DESIGN",
    tagline: "Visuelles Design, das überzeugt",
    iconName: "palette",
    description:
      "Starker Auftritt – visuell klar, professionell und wiedererkennbar.",
    longDescription:
      "Ein durchdachtes Erscheinungsbild schafft Vertrauen und macht Ihre Marke erkennbar. Wir entwickeln Gestaltungslösungen, die nicht nur gut aussehen, sondern Ihre Botschaft klar transportieren.\n\nVom Logo über Flyer, Broschüren und Plakate bis hin zu digitalen Grafiken entsteht ein Auftritt, der zusammenpasst und professionell wirkt.\n\nSo wird Design nicht zur Dekoration, sondern zu einem wichtigen Teil Ihrer Kommunikation.",
    highlights: [
      "Einheitlicher Markenauftritt über alle Kanäle",
      "Print und Digital aus einer Hand",
      "Laufender Designsupport im Abo",
      "Abgestimmt auf Foto, Video und Social Media",
    ],
    deliverables: [
      "Logo-Design",
      "Corporate Identity",
      "Flyer & Broschüren",
      "Plakate",
      "Social-Media-Grafiken",
      "Präsentationen",
      "Verpackungsdesign",
    ],
    metaTitle: "Grafik & Design | b-emotion — Professionelles Design für KMU",
    metaDescription:
      "Logo-Design, Corporate Identity, Flyer, Social-Media-Grafiken und mehr. Durchdachtes Grafikdesign für Schweizer KMU aus Arnegg SG.",
  },
  {
    slug: "foto-video",
    title: "FOTO & VIDEO",
    tagline: "Visueller Content mit Wirkung",
    iconName: "camera",
    description:
      "Content, der auffällt, Emotionen weckt und Ihre Marke zeigt.",
    longDescription:
      "Bilder und Videos entscheiden oft in Sekunden über den ersten Eindruck. Wir produzieren visuellen Content, der Ihre Marke authentisch zeigt und Ihre Botschaft verständlich transportiert.\n\nOb Produktfotografie, Eventbegleitung, Unternehmensvideos oder Reels für Social Media – der Fokus liegt auf Inhalten, die professionell wirken und direkt eingesetzt werden können.\n\nSo entsteht Content, der nicht nur schön aussieht, sondern Aufmerksamkeit schafft und Vertrauen aufbaut.",
    highlights: [
      "Professionelle Ausrüstung inkl. Drohne",
      "Optimiert für Social Media, Web und Print",
      "Regelmässige Produktion im Abo planbar",
      "Nahtlos integriert ins Gesamtpaket",
    ],
    deliverables: [
      "Produktfotografie",
      "Eventfotografie",
      "Unternehmensvideos",
      "Social-Media-Reels",
      "Drohnenaufnahmen",
      "Imagefilme",
      "Behind-the-Scenes",
    ],
    metaTitle: "Foto & Video | b-emotion — Content-Produktion für KMU",
    metaDescription:
      "Professionelle Foto- und Videoproduktion inkl. Drohne für Schweizer KMU. Social-Media-Reels, Imagefilme und mehr. Jetzt anfragen.",
  },
  {
    slug: "social-media",
    title: "SOCIAL MEDIA",
    tagline: "Präsenz, die Vertrauen schafft",
    iconName: "share2",
    description:
      "Sichtbar werden, Vertrauen aufbauen und Kunden erreichen.",
    longDescription:
      "Social Media ist mehr als regelmässig etwas zu posten. Entscheidend ist, mit den richtigen Inhalten zur richtigen Zielgruppe sichtbar zu werden.\n\nWir unterstützen bei Strategie, Planung und Umsetzung – von der Content-Planung über Redaktionspläne bis zur Erstellung einzelner Beiträge oder Reels.\n\nSo entsteht ein Auftritt, der konsistent wirkt, Ihre Marke stärkt und echte Nähe zu Ihrer Community aufbaut.",
    highlights: [
      "Komplettes Social-Media-Management",
      "Content direkt aus dem Digitalpaket",
      "Fester Redaktionsplan im Abo",
      "Reporting und laufende Optimierung",
    ],
    deliverables: [
      "Content-Planung",
      "Redaktionsplan",
      "Beitragserstellung",
      "Community Management",
      "Reporting & Analyse",
      "Kampagnen",
      "Influencer-Kooperation",
    ],
    metaTitle: "Social Media | b-emotion — Social-Media-Management für KMU",
    metaDescription:
      "Social-Media-Management für Schweizer KMU: Strategie, Content-Erstellung, Community Management und Reporting. Auch im Abo verfügbar.",
  },
  {
    slug: "websites-newsletter",
    title: "WEBSITES / NEWSLETTER",
    tagline: "Ihre digitale Präsenz, professionell umgesetzt",
    iconName: "globe",
    description:
      "Professionelle Online-Präsenz, die überzeugt und funktioniert.",
    longDescription:
      "Ihre Website und Ihre Newsletter sind zentrale Kontaktpunkte Ihrer Marke. Wir entwickeln digitale Lösungen, die klar aufgebaut, modern gestaltet und auf Ihre Ziele abgestimmt sind.\n\nOb Website, Landing Page oder Newsletter – im Mittelpunkt stehen Struktur, Wirkung und Benutzerfreundlichkeit.\n\nDas Resultat ist ein Auftritt, der professionell wirkt, Inhalte klar vermittelt und Interessenten einfacher zu Kunden macht.",
    highlights: [
      "Moderne Websites ohne Programmierkenntnisse",
      "Content direkt aus dem Digitalpaket",
      "Laufende Pflege und SEO im Abo",
      "Newsletter-Design und E-Mail-Marketing",
    ],
    deliverables: [
      "Website-Erstellung",
      "Landing Pages",
      "Newsletter-Design",
      "E-Mail-Marketing",
      "SEO-Grundlagen",
      "Content-Pflege",
    ],
    metaTitle: "Websites & Newsletter | b-emotion — Webdesign für KMU",
    metaDescription:
      "Moderne Websites und Newsletter für Schweizer KMU. Effizient, professionell und mit massgeschneidertem Content. Jetzt Projekt starten.",
  },
  {
    slug: "begleitung",
    title: "BEGLEITUNG",
    tagline: "Ihr externer Marketing-Partner",
    iconName: "users",
    description:
      "Wie ein Teil Ihres Teams – flexibel, zuverlässig und nah dran.",
    longDescription:
      "Nicht jedes Unternehmen braucht für jede Aufgabe eine eigene Agentur oder interne Stelle. Oft ist es wertvoller, einen flexiblen Partner an der Seite zu haben, der mitdenkt, priorisiert und umsetzt.\n\nGenau hier setzt die Begleitung an: Wir unterstützen Sie laufend bei Planung, Abstimmung und Realisation Ihrer Marketingmassnahmen.\n\nOb im Abo oder projektbezogen – Sie profitieren von einer unkomplizierten Zusammenarbeit, kurzen Wegen und einer Begleitung, die sich an Ihren tatsächlichen Bedarf anpasst.",
    highlights: [
      "Ein Ansprechpartner für alle Leistungen",
      "Proaktive Betreuung statt reaktiver Support",
      "Monatliche Abstimmung und Priorisierung",
      "Flexibel anpassbar ohne Mindestlaufzeit",
    ],
    deliverables: [
      "Laufende Betreuung",
      "Monatliche Abstimmungen",
      "Flexibles Abo-Modell",
      "Priorisierung & Planung",
      "Netzwerk-Zugang",
      "Sparring-Partner",
    ],
    metaTitle: "Begleitung | b-emotion — Laufende Marketing-Betreuung",
    metaDescription:
      "Laufende Marketing-Begleitung für Schweizer KMU. Wie ein internes Teammitglied — flexibel, persönlich und zuverlässig. Auch im Abo.",
  },
];

