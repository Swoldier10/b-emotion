export interface ProjectEntry {
  title: string;
  category: string;
  excerpt: string;
  description: string;
  services: string[];
}

export interface ClientProject {
  slug: string;
  client: string;
  description: string;
  period: string;
  categories: string[];
  projects: ProjectEntry[];
}

export const clientProjects: ClientProject[] = [
  {
    slug: "vinodiverso",
    client: "VinoDiverso",
    description:
      "Umfassende Content-Produktion für die Weinhandlung VinoDiverso — von dynamischen Social-Media-Reels bis hin zu professioneller Produktfotografie für den Online-Auftritt.",
    period: "2024",
    categories: ["VIDEO", "FOTO"],
    projects: [
      {
        title: "Social-Media-Reel",
        category: "VIDEO",
        excerpt: "Social-Media-Reel für die Weinhandlung VinoDiverso.",
        description:
          "Für VinoDiverso haben wir ein dynamisches Reel produziert, das die Vielfalt des Weinsortiments in Szene setzt. Vom Konzept über den Dreh bis zum Schnitt — alles aus einer Hand.",
        services: ["Videoproduktion", "Schnitt", "Social-Media-Optimierung"],
      },
      {
        title: "Produktfotografie",
        category: "FOTO",
        excerpt: "Professionelle Produktbilder für den Online-Auftritt.",
        description:
          "Hochwertige Produktfotografie für das gesamte Weinsortiment von VinoDiverso. Die Bilder werden für den Online-Shop, Social Media und Printmaterialien eingesetzt.",
        services: ["Produktfotografie", "Bildbearbeitung", "Styling"],
      },
    ],
  },
  {
    slug: "folienzuschnitt",
    client: "Folienzuschnitt.ch",
    description:
      "Von Eventdokumentation über Firmenpräsentationen bis hin zum visuellen Markenauftritt — eine langjährige Partnerschaft mit vielfältigen Leistungen.",
    period: "2023-2024",
    categories: ["VIDEO", "GRAFIK & DESIGN"],
    projects: [
      {
        title: "Event-Video",
        category: "VIDEO",
        excerpt: "Eventdokumentation und Zusammenfassung als Video.",
        description:
          "Professionelle Videodokumentation eines Firmenevents von Folienzuschnitt.ch. Das Video dient als Rückblick und Werbemittel für zukünftige Veranstaltungen.",
        services: ["Videoproduktion", "Eventdokumentation", "Schnitt"],
      },
      {
        title: "Firmenpräsentation",
        category: "GRAFIK & DESIGN",
        excerpt: "Professionelle Firmenpräsentation für Kundentermine.",
        description:
          "Eine massgeschneiderte Firmenpräsentation für Folienzuschnitt.ch, die bei Kundenterminen und Messen eingesetzt wird.",
        services: ["Präsentationsdesign", "Corporate Design"],
      },
    ],
  },
  {
    slug: "signvision",
    client: "Signvision Werbetechnik AG",
    description:
      "Laufende Marketingunterstützung über mehrere Jahre — von Social-Media-Content über Grafikdesign bis hin zu Fotoproduktionen. Ein Paradebeispiel für das b-emotion Digitalpaket.",
    period: "2022-2024",
    categories: ["SOCIAL MEDIA", "GRAFIK & DESIGN", "FOTO"],
    projects: [
      {
        title: "Social Media Management",
        category: "SOCIAL MEDIA",
        excerpt: "Laufende Social-Media-Betreuung und Content-Erstellung.",
        description:
          "Regelmässige Erstellung von Social-Media-Content, Community Management und strategische Betreuung der Kanäle.",
        services: ["Content-Erstellung", "Community Management", "Strategie"],
      },
      {
        title: "Grafikdesign",
        category: "GRAFIK & DESIGN",
        excerpt: "Werbemittel und Grafiken für Print und Digital.",
        description:
          "Gestaltung von Werbemitteln, Flyern und digitalen Grafiken für diverse Kampagnen und den täglichen Einsatz.",
        services: ["Grafikdesign", "Flyer", "Digitale Werbemittel"],
      },
      {
        title: "Fotoproduktion",
        category: "FOTO",
        excerpt: "Produktfotografie und Teamfotos für den Markenauftritt.",
        description:
          "Professionelle Fotoproduktionen für den visuellen Markenauftritt — von Produktfotos bis Teambilder.",
        services: ["Produktfotografie", "Teamfotos", "Bildbearbeitung"],
      },
    ],
  },
  {
    slug: "vinato",
    client: "Vinato",
    description:
      "Gestaltung der kompletten Werbematerialien für ein exklusives Wein-Event — von Flyern über Social-Media-Grafiken bis hin zu Plakaten.",
    period: "2024",
    categories: ["GRAFIK & DESIGN"],
    projects: [
      {
        title: "Event-Werbung",
        category: "GRAFIK & DESIGN",
        excerpt: "Werbematerialien für ein exklusives Wein-Event.",
        description:
          "Gestaltung der kompletten Werbematerialien für ein Vinato-Event — von Flyern über Social-Media-Grafiken bis hin zu Plakaten.",
        services: ["Flyer-Design", "Social-Media-Grafiken", "Plakatgestaltung"],
      },
    ],
  },
  {
    slug: "grueblerei",
    client: "GRUEBLEREI",
    description:
      "Zum Jubiläum der GRUEBLEREI wurde eine hochwertige Broschüre gestaltet, die die Geschichte und Meilensteine des Unternehmens erzählt.",
    period: "2023",
    categories: ["GRAFIK & DESIGN"],
    projects: [
      {
        title: "Jubiläumsbroschüre",
        category: "GRAFIK & DESIGN",
        excerpt: "Gestaltung einer hochwertigen Jubiläumsbroschüre.",
        description:
          "Zum Jubiläum der GRUEBLEREI wurde eine hochwertige Broschüre gestaltet, die die Geschichte und Meilensteine des Unternehmens erzählt.",
        services: ["Broschüren-Design", "Layout", "Druckvorbereitung"],
      },
    ],
  },
  {
    slug: "b-emotion",
    client: "b-emotion",
    description:
      "Die eigene Website als Referenzprojekt — ein Premium-Scrollytelling-Erlebnis mit animierten Sektionen, interaktivem Abo-Konfigurator und SEO-Optimierung.",
    period: "2025",
    categories: ["WEB"],
    projects: [
      {
        title: "Website",
        category: "WEB",
        excerpt: "Die eigene Website als Referenzprojekt.",
        description:
          "Die b-emotion Website wurde als Premium-Scrollytelling-Erlebnis entwickelt — mit animierten Sektionen, interaktivem Abo-Konfigurator und SEO-Optimierung für den Schweizer Markt.",
        services: ["Webdesign", "Entwicklung", "SEO", "Content"],
      },
    ],
  },
];

export const categories = [
  "ALLE",
  "GRAFIK & DESIGN",
  "FOTO",
  "VIDEO",
  "SOCIAL MEDIA",
  "WEB",
];
