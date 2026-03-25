export interface ProjectData {
  slug: string;
  title: string;
  client: string;
  category: string;
  excerpt: string;
  description: string;
  services: string[];
  period: string;
}

export const projects: ProjectData[] = [
  {
    slug: "vinodiverso-reel",
    title: "VinoDiverso — REEL",
    client: "VinoDiverso",
    category: "VIDEO",
    excerpt: "Social-Media-Reel fur die Weinhandlung VinoDiverso.",
    description:
      "Fur VinoDiverso haben wir ein dynamisches Reel produziert, das die Vielfalt des Weinsortiments in Szene setzt. Vom Konzept uber den Dreh bis zum Schnitt — alles aus einer Hand.",
    services: ["Videoproduktion", "Schnitt", "Social-Media-Optimierung"],
    period: "2024",
  },
  {
    slug: "vinodiverso-produktfotografie",
    title: "VinoDiverso — Produktfotografie",
    client: "VinoDiverso",
    category: "FOTO",
    excerpt: "Professionelle Produktbilder fur den Online-Auftritt.",
    description:
      "Hochwertige Produktfotografie fur das gesamte Weinsortiment von VinoDiverso. Die Bilder werden fur den Online-Shop, Social Media und Printmaterialien eingesetzt.",
    services: ["Produktfotografie", "Bildbearbeitung", "Styling"],
    period: "2024",
  },
  {
    slug: "vinato-event-werbung",
    title: "Vinato — Event-Werbung",
    client: "Vinato",
    category: "GRAFIK & DESIGN",
    excerpt: "Werbematerialien fur ein exklusives Wein-Event.",
    description:
      "Gestaltung der kompletten Werbematerialien fur ein Vinato-Event — von Flyern uber Social-Media-Grafiken bis hin zu Plakaten.",
    services: ["Flyer-Design", "Social-Media-Grafiken", "Plakatgestaltung"],
    period: "2024",
  },
  {
    slug: "folienzuschnitt-event-video",
    title: "Folienzuschnitt.ch — Event-Video",
    client: "Folienzuschnitt.ch",
    category: "VIDEO",
    excerpt: "Eventdokumentation und Zusammenfassung als Video.",
    description:
      "Professionelle Videodokumentation eines Firmenevents von Folienzuschnitt.ch. Das Video dient als Ruckblick und Werbemittel fur zukunftige Veranstaltungen.",
    services: ["Videoproduktion", "Eventdokumentation", "Schnitt"],
    period: "2023",
  },
  {
    slug: "grueblerei-jubilaeumsbroschuere",
    title: "GRUEBLEREI — Jubilaumsbroschure",
    client: "GRUEBLEREI",
    category: "GRAFIK & DESIGN",
    excerpt: "Gestaltung einer hochwertigen Jubilaumsbroschure.",
    description:
      "Zum Jubilaum der GRUEBLEREI wurde eine hochwertige Broschure gestaltet, die die Geschichte und Meilensteine des Unternehmens erzahlt.",
    services: ["Broschuren-Design", "Layout", "Druckvorbereitung"],
    period: "2023",
  },
  {
    slug: "b-emotion-website",
    title: "b-emotion — Website",
    client: "b-emotion",
    category: "WEB",
    excerpt: "Die eigene Website als Referenzprojekt.",
    description:
      "Die b-emotion Website wurde als Premium-Scrollytelling-Erlebnis entwickelt — mit animierten Sektionen, interaktivem Abo-Konfigurator und SEO-Optimierung fur den Schweizer Markt.",
    services: ["Webdesign", "Entwicklung", "SEO", "Content"],
    period: "2025",
  },
  {
    slug: "folienzuschnitt-firmenpraesentation",
    title: "Folienzuschnitt.ch — Firmenprasentation",
    client: "Folienzuschnitt.ch",
    category: "GRAFIK & DESIGN",
    excerpt: "Professionelle Firmenprasentation fur Kundentermine.",
    description:
      "Eine massgeschneiderte Firmenprasentation fur Folienzuschnitt.ch, die bei Kundenterminen und Messen eingesetzt wird.",
    services: ["Prasentationsdesign", "Corporate Design"],
    period: "2023",
  },
  {
    slug: "signvision-werbetechnik",
    title: "Signvision Werbetechnik AG",
    client: "Signvision Werbetechnik AG",
    category: "GRAFIK & DESIGN",
    excerpt: "Umfassende Marketingunterstutzung fur die Werbetechnik-Firma.",
    description:
      "Laufende Marketingunterstutzung fur Signvision Werbetechnik AG — von Social-Media-Content uber Grafikdesign bis hin zu Fotoproduktionen.",
    services: ["Social Media", "Grafikdesign", "Fotografie"],
    period: "2022-2024",
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

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
