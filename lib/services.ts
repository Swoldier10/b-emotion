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
      "Ein klarer Plan ist der Schlüssel zum Erfolg. Lassen Sie uns gemeinsam definieren, welche Ziele Sie erreichen möchten und wie ich Sie dabei unterstützen kann — sei es als Einzelauftrag oder im flexiblen Abo.",
    longDescription:
      "Bevor Grafiken gestaltet, Videos gedreht oder Social-Media-Posts erstellt werden, braucht es eine klare Richtung. In der strategischen Beratung analysieren wir Ihre aktuelle Positionierung, definieren Ihre Zielgruppe und entwickeln einen massgeschneiderten Marketingplan.\n\nDabei geht es nicht nur um kurzfristige Massnahmen, sondern um eine nachhaltige Strategie, die alle Bereiche — von Grafik über Content bis Digital — miteinander verbindet. So wird Ihr Marketing zum ganzheitlichen Paket.\n\nOb als einmaliger Workshop oder als laufende Begleitung im Abo: Ich stehe Ihnen als Sparring-Partner zur Seite und sorge dafür, dass jede Massnahme auf Ihre Ziele einzahlt.",
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
      "Von Logo-Design über Flyer, Broschüren und weiteren Drucksachen bis hin zu digitalen Grafiken — durchdachtes Design stärkt Ihre Botschaft, verleiht Ihrem Auftritt Professionalität und hinterlässt einen bleibenden Eindruck.",
    longDescription:
      "Gutes Design ist mehr als hübsche Bilder — es vermittelt Ihre Markenidentität auf den ersten Blick. Ob Logo, Flyer, Broschüre oder Social-Media-Grafik: Jedes Designelement wird so gestaltet, dass es zu Ihrer Gesamtstrategie passt und einen professionellen, einheitlichen Auftritt schafft.\n\nAls Teil des b-emotion Digitalpakets arbeitet Grafik & Design Hand in Hand mit Foto, Video und Social Media. So entstehen keine isolierten Einzelstücke, sondern ein stimmiges Gesamtbild über alle Kanäle hinweg.\n\nIm Abo profitieren Sie von laufendem Designsupport: Neue Grafiken für Social Media, aktualisierte Drucksachen oder saisonale Kampagnen — alles aus einer Hand.",
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
      "Foto- und Videoproduktionen (auch mit Drohne) bringen Ihre Marke authentisch zur Geltung. Für Social Media, Websites und weiteres erstelle ich Content, der Emotionen weckt und Ihre Botschaft klar vermittelt.",
    longDescription:
      "Visueller Content ist das Herzstück jeder modernen Marketingstrategie. Ob Produktfotografie für Ihren Online-Shop, Eventdokumentation, Social-Media-Reels oder Imagefilme — ich produziere Content, der Ihre Zielgruppe anspricht und Ihre Marke authentisch in Szene setzt.\n\nDank Drohnenaufnahmen und professioneller Ausrüstung entstehen Bilder und Videos auf höchstem Niveau. Und weil Foto & Video Teil des Gesamtpakets ist, wird jeder Inhalt direkt für die richtigen Kanäle optimiert — ob Instagram, Website oder Printmaterial.\n\nIm Abo planen wir regelmässige Produktionen, damit Ihr Content immer aktuell und relevant bleibt.",
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
      "Social Media ermöglicht direkten Kontakt zu Ihrer Zielgruppe. Mit der richtigen Strategie und attraktivem Content sind Sie nicht nur präsent, sondern schaffen Interaktionen, stärken Ihre Marke und gewinnen Vertrauen.",
    longDescription:
      "Social Media ist kein Nebenschauplatz — es ist der direkte Draht zu Ihren Kunden. Von der Content-Planung über die Beitragserstellung bis hin zu Community Management und Reporting übernehme ich den gesamten Prozess für Sie.\n\nDer Vorteil im b-emotion Paket: Die Inhalte für Social Media entstehen nicht isoliert, sondern werden zusammen mit Foto, Video und Design produziert. So erhalten Sie abgestimmten, hochwertigen Content ohne doppelten Aufwand.\n\nIm Abo erhalten Sie einen festen Redaktionsplan mit regelmässigen Posts, Stories und Kampagnen — alles abgestimmt auf Ihre Marketingstrategie.",
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
      "Effizient, modern und ohne unnötig komplexe Programmierung. Mit den richtigen Tools sorge ich für eine professionelle Online-Präsenz, die nicht nur überzeugt, sondern sich auch lohnt — inklusive massgeschneidertem Content.",
    longDescription:
      "Ihre Website ist Ihre digitale Visitenkarte — und Ihr Newsletter der direkte Kanal zu bestehenden Kunden. Ich erstelle moderne, schnelle Websites und professionelle Newsletter, die zu Ihrem Markenauftritt passen und Ergebnisse liefern.\n\nAls Teil des Digitalpakets werden Texte, Bilder und Videos direkt aus den anderen Leistungsbereichen übernommen. So entsteht kein zusätzlicher Aufwand, und Ihre Online-Präsenz bleibt immer aktuell und konsistent.\n\nIm Abo übernehme ich die laufende Pflege: Content-Updates, SEO-Optimierung und regelmässige Newsletter-Versände — damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
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
      "Ich begleite Sie, als wäre ich Teil Ihres Teams. Von der Planung bis zur Umsetzung und darüber hinaus, stehe ich an Ihrer Seite und setze mich für Ihren Erfolg ein — wie ein interner Partner, auf den Sie zählen können.",
    longDescription:
      "Marketing ist kein einmaliges Projekt — es ist ein laufender Prozess. Mit der Begleitung haben Sie einen festen Ansprechpartner, der Ihre Marke kennt, Ihre Ziele versteht und proaktiv an Ihrem Erfolg arbeitet.\n\nAls Ihr externer Marketing-Partner koordiniere ich alle Leistungen aus dem Digitalpaket: Grafik, Foto, Video, Social Media und Web. Sie haben einen einzigen Kontakt für alles — ohne Koordinationsaufwand zwischen verschiedenen Dienstleistern.\n\nMonatliche Abstimmungen sorgen dafür, dass wir immer auf Kurs bleiben. Und dank des flexiblen Abo-Modells können Sie den Umfang jederzeit anpassen.",
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

