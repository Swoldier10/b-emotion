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
      "Umfassende Content-Produktion fur die Weinhandlung VinoDiverso — von dynamischen Social-Media-Reels bis hin zu professioneller Produktfotografie fur den Online-Auftritt.",
    period: "2024",
    categories: ["VIDEO", "FOTO"],
    projects: [
      {
        title: "Social-Media-Reel",
        category: "VIDEO",
        excerpt: "Social-Media-Reel fur die Weinhandlung VinoDiverso.",
        description:
          "Fur VinoDiverso haben wir ein dynamisches Reel produziert, das die Vielfalt des Weinsortiments in Szene setzt. Vom Konzept uber den Dreh bis zum Schnitt — alles aus einer Hand.",
        services: ["Videoproduktion", "Schnitt", "Social-Media-Optimierung"],
      },
      {
        title: "Produktfotografie",
        category: "FOTO",
        excerpt: "Professionelle Produktbilder fur den Online-Auftritt.",
        description:
          "Hochwertige Produktfotografie fur das gesamte Weinsortiment von VinoDiverso. Die Bilder werden fur den Online-Shop, Social Media und Printmaterialien eingesetzt.",
        services: ["Produktfotografie", "Bildbearbeitung", "Styling"],
      },
    ],
  },
  {
    slug: "folienzuschnitt",
    client: "Folienzuschnitt.ch",
    description:
      "Von Eventdokumentation uber Firmenprasentationen bis hin zum visuellen Markenauftritt — eine langjahrige Partnerschaft mit vielfaltigen Leistungen.",
    period: "2023-2024",
    categories: ["VIDEO", "GRAFIK & DESIGN"],
    projects: [
      {
        title: "Event-Video",
        category: "VIDEO",
        excerpt: "Eventdokumentation und Zusammenfassung als Video.",
        description:
          "Professionelle Videodokumentation eines Firmenevents von Folienzuschnitt.ch. Das Video dient als Ruckblick und Werbemittel fur zukunftige Veranstaltungen.",
        services: ["Videoproduktion", "Eventdokumentation", "Schnitt"],
      },
      {
        title: "Firmenprasentation",
        category: "GRAFIK & DESIGN",
        excerpt: "Professionelle Firmenprasentation fur Kundentermine.",
        description:
          "Eine massgeschneiderte Firmenprasentation fur Folienzuschnitt.ch, die bei Kundenterminen und Messen eingesetzt wird.",
        services: ["Prasentationsdesign", "Corporate Design"],
      },
    ],
  },
  {
    slug: "signvision",
    client: "Signvision Werbetechnik AG",
    description:
      "Laufende Marketingunterstutzung uber mehrere Jahre — von Social-Media-Content uber Grafikdesign bis hin zu Fotoproduktionen. Ein Paradebeispiel fur das b-emotion Digitalpaket.",
    period: "2022-2024",
    categories: ["SOCIAL MEDIA", "GRAFIK & DESIGN", "FOTO"],
    projects: [
      {
        title: "Social Media Management",
        category: "SOCIAL MEDIA",
        excerpt: "Laufende Social-Media-Betreuung und Content-Erstellung.",
        description:
          "Regelmasssige Erstellung von Social-Media-Content, Community Management und strategische Betreuung der Kanale.",
        services: ["Content-Erstellung", "Community Management", "Strategie"],
      },
      {
        title: "Grafikdesign",
        category: "GRAFIK & DESIGN",
        excerpt: "Werbemittel und Grafiken fur Print und Digital.",
        description:
          "Gestaltung von Werbemitteln, Flyern und digitalen Grafiken fur diverse Kampagnen und den taglichen Einsatz.",
        services: ["Grafikdesign", "Flyer", "Digitale Werbemittel"],
      },
      {
        title: "Fotoproduktion",
        category: "FOTO",
        excerpt: "Produktfotografie und Teamfotos fur den Markenauftritt.",
        description:
          "Professionelle Fotoproduktionen fur den visuellen Markenauftritt — von Produktfotos bis Teambilder.",
        services: ["Produktfotografie", "Teamfotos", "Bildbearbeitung"],
      },
    ],
  },
  {
    slug: "vinato",
    client: "Vinato",
    description:
      "Gestaltung der kompletten Werbematerialien fur ein exklusives Wein-Event — von Flyern uber Social-Media-Grafiken bis hin zu Plakaten.",
    period: "2024",
    categories: ["GRAFIK & DESIGN"],
    projects: [
      {
        title: "Event-Werbung",
        category: "GRAFIK & DESIGN",
        excerpt: "Werbematerialien fur ein exklusives Wein-Event.",
        description:
          "Gestaltung der kompletten Werbematerialien fur ein Vinato-Event — von Flyern uber Social-Media-Grafiken bis hin zu Plakaten.",
        services: ["Flyer-Design", "Social-Media-Grafiken", "Plakatgestaltung"],
      },
    ],
  },
  {
    slug: "grueblerei",
    client: "GRUEBLEREI",
    description:
      "Zum Jubilaum der GRUEBLEREI wurde eine hochwertige Broschure gestaltet, die die Geschichte und Meilensteine des Unternehmens erzahlt.",
    period: "2023",
    categories: ["GRAFIK & DESIGN"],
    projects: [
      {
        title: "Jubilaumsbroschure",
        category: "GRAFIK & DESIGN",
        excerpt: "Gestaltung einer hochwertigen Jubilaumsbroschure.",
        description:
          "Zum Jubilaum der GRUEBLEREI wurde eine hochwertige Broschure gestaltet, die die Geschichte und Meilensteine des Unternehmens erzahlt.",
        services: ["Broschuren-Design", "Layout", "Druckvorbereitung"],
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
          "Die b-emotion Website wurde als Premium-Scrollytelling-Erlebnis entwickelt — mit animierten Sektionen, interaktivem Abo-Konfigurator und SEO-Optimierung fur den Schweizer Markt.",
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
