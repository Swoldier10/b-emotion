export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  deliverables: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "beratung",
    title: "BERATUNG",
    tagline: "Strategische Beratung fur Ihren Erfolg",
    iconName: "lightbulb",
    description:
      "Ein klarer Plan ist der Schlussel zum Erfolg. Lassen Sie uns gemeinsam definieren, welche Ziele Sie erreichen mochten und wie ich Sie dabei unterstutzen kann — sei es als Einzelauftrag oder im flexiblen Abo.",
    deliverables: [
      "Marketing-Strategie",
      "Zielgruppenanalyse",
      "Content-Planung",
      "Markenpositionierung",
      "Wettbewerbsanalyse",
      "Coaching & Schulungen",
    ],
    metaTitle: "Beratung | b-emotion — Marketing-Strategie fur KMU",
    metaDescription:
      "Strategische Marketing-Beratung fur Schweizer KMU. Von der Zielgruppenanalyse bis zur Content-Planung — personlich und flexibel. Jetzt Erstgesprach vereinbaren.",
  },
  {
    slug: "grafik-design",
    title: "GRAFIK & DESIGN",
    tagline: "Visuelles Design, das uberzeugt",
    iconName: "palette",
    description:
      "Von Logo-Design uber Flyer, Broschuren und weiteren Drucksachen bis hin zu digitalen Grafiken — durchdachtes Design starkt Ihre Botschaft, verleiht Ihrem Auftritt Professionalitat und hinterlasst einen bleibenden Eindruck.",
    deliverables: [
      "Logo-Design",
      "Corporate Identity",
      "Flyer & Broschuren",
      "Plakate",
      "Social-Media-Grafiken",
      "Prasentationen",
      "Verpackungsdesign",
    ],
    metaTitle: "Grafik & Design | b-emotion — Professionelles Design fur KMU",
    metaDescription:
      "Logo-Design, Corporate Identity, Flyer, Social-Media-Grafiken und mehr. Durchdachtes Grafikdesign fur Schweizer KMU aus Arnegg SG.",
  },
  {
    slug: "foto-video",
    title: "FOTO & VIDEO",
    tagline: "Visueller Content mit Wirkung",
    iconName: "camera",
    description:
      "Foto- und Videoproduktionen (auch mit Drohne) bringen Ihre Marke authentisch zur Geltung. Fur Social Media, Websites und weiteres erstelle ich Content, der Emotionen weckt und Ihre Botschaft klar vermittelt.",
    deliverables: [
      "Produktfotografie",
      "Eventfotografie",
      "Unternehmensvideos",
      "Social-Media-Reels",
      "Drohnenaufnahmen",
      "Imagefilme",
      "Behind-the-Scenes",
    ],
    metaTitle: "Foto & Video | b-emotion — Content-Produktion fur KMU",
    metaDescription:
      "Professionelle Foto- und Videoproduktion inkl. Drohne fur Schweizer KMU. Social-Media-Reels, Imagefilme und mehr. Jetzt anfragen.",
  },
  {
    slug: "social-media",
    title: "SOCIAL MEDIA",
    tagline: "Prasenz, die Vertrauen schafft",
    iconName: "share2",
    description:
      "Social Media ermoglicht direkten Kontakt zu Ihrer Zielgruppe. Mit der richtigen Strategie und attraktivem Content sind Sie nicht nur prasent, sondern schaffen Interaktionen, starken Ihre Marke und gewinnen Vertrauen.",
    deliverables: [
      "Content-Planung",
      "Redaktionsplan",
      "Beitragserstellung",
      "Community Management",
      "Reporting & Analyse",
      "Kampagnen",
      "Influencer-Kooperation",
    ],
    metaTitle: "Social Media | b-emotion — Social-Media-Management fur KMU",
    metaDescription:
      "Social-Media-Management fur Schweizer KMU: Strategie, Content-Erstellung, Community Management und Reporting. Auch im Abo verfugbar.",
  },
  {
    slug: "websites-newsletter",
    title: "WEBSITES / NEWSLETTER",
    tagline: "Ihre digitale Prasenz, professionell umgesetzt",
    iconName: "globe",
    description:
      "Effizient, modern und ohne unnotig komplexe Programmierung. Mit den richtigen Tools sorge ich fur eine professionelle Online-Prasenz, die nicht nur uberzeugt, sondern sich auch lohnt — inklusive massgeschneidertem Content.",
    deliverables: [
      "Website-Erstellung",
      "Landing Pages",
      "Newsletter-Design",
      "E-Mail-Marketing",
      "SEO-Grundlagen",
      "Content-Pflege",
    ],
    metaTitle: "Websites & Newsletter | b-emotion — Webdesign fur KMU",
    metaDescription:
      "Moderne Websites und Newsletter fur Schweizer KMU. Effizient, professionell und mit massgeschneidertem Content. Jetzt Projekt starten.",
  },
  {
    slug: "begleitung",
    title: "BEGLEITUNG",
    tagline: "Ihr externer Marketing-Partner",
    iconName: "users",
    description:
      "Ich begleite Sie, als ware ich Teil Ihres Teams. Von der Planung bis zur Umsetzung und daruber hinaus, stehe ich an Ihrer Seite und setze mich fur Ihren Erfolg ein — wie ein interner Partner, auf den Sie zahlen konnen.",
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
      "Laufende Marketing-Begleitung fur Schweizer KMU. Wie ein internes Teammitglied — flexibel, personlich und zuverlassig. Auch im Abo.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
