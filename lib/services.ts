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
    tagline: "Strategische Beratung fur Ihren Erfolg",
    iconName: "lightbulb",
    description:
      "Ein klarer Plan ist der Schlussel zum Erfolg. Lassen Sie uns gemeinsam definieren, welche Ziele Sie erreichen mochten und wie ich Sie dabei unterstutzen kann — sei es als Einzelauftrag oder im flexiblen Abo.",
    longDescription:
      "Bevor Grafiken gestaltet, Videos gedreht oder Social-Media-Posts erstellt werden, braucht es eine klare Richtung. In der strategischen Beratung analysieren wir Ihre aktuelle Positionierung, definieren Ihre Zielgruppe und entwickeln einen massgeschneiderten Marketingplan.\n\nDabei geht es nicht nur um kurzfristige Massnahmen, sondern um eine nachhaltige Strategie, die alle Bereiche — von Grafik uber Content bis Digital — miteinander verbindet. So wird Ihr Marketing zum ganzheitlichen Paket.\n\nOb als einmaliger Workshop oder als laufende Begleitung im Abo: Ich stehe Ihnen als Sparring-Partner zur Seite und sorge dafur, dass jede Massnahme auf Ihre Ziele einzahlt.",
    highlights: [
      "Ganzheitlicher Blick auf Ihr Marketing",
      "Massgeschneiderte Strategie statt Standardlosung",
      "Verbindung aller Disziplinen im Digitalpaket",
      "Laufende Optimierung im Abo moglich",
    ],
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
    longDescription:
      "Gutes Design ist mehr als hubsche Bilder — es vermittelt Ihre Markenidentitat auf den ersten Blick. Ob Logo, Flyer, Broschure oder Social-Media-Grafik: Jedes Designelement wird so gestaltet, dass es zu Ihrer Gesamtstrategie passt und einen professionellen, einheitlichen Auftritt schafft.\n\nAls Teil des b-emotion Digitalpakets arbeitet Grafik & Design Hand in Hand mit Foto, Video und Social Media. So entstehen keine isolierten Einzelstucke, sondern ein stimmiges Gesamtbild uber alle Kanale hinweg.\n\nIm Abo profitieren Sie von laufendem Designsupport: Neue Grafiken fur Social Media, aktualisierte Drucksachen oder saisonale Kampagnen — alles aus einer Hand.",
    highlights: [
      "Einheitlicher Markenauftritt uber alle Kanale",
      "Print und Digital aus einer Hand",
      "Laufender Designsupport im Abo",
      "Abgestimmt auf Foto, Video und Social Media",
    ],
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
    longDescription:
      "Visueller Content ist das Herzstuck jeder modernen Marketingstrategie. Ob Produktfotografie fur Ihren Online-Shop, Eventdokumentation, Social-Media-Reels oder Imagefilme — ich produziere Content, der Ihre Zielgruppe anspricht und Ihre Marke authentisch in Szene setzt.\n\nDank Drohnenaufnahmen und professioneller Ausrustung entstehen Bilder und Videos auf hochstem Niveau. Und weil Foto & Video Teil des Gesamtpakets ist, wird jeder Inhalt direkt fur die richtigen Kanale optimiert — ob Instagram, Website oder Printmaterial.\n\nIm Abo planen wir regelmassige Produktionen, damit Ihr Content immer aktuell und relevant bleibt.",
    highlights: [
      "Professionelle Ausrustung inkl. Drohne",
      "Optimiert fur Social Media, Web und Print",
      "Regelmassige Produktion im Abo planbar",
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
    longDescription:
      "Social Media ist kein Nebenschauplatz — es ist der direkte Draht zu Ihren Kunden. Von der Content-Planung uber die Beitragserstellung bis hin zu Community Management und Reporting ubernehme ich den gesamten Prozess fur Sie.\n\nDer Vorteil im b-emotion Paket: Die Inhalte fur Social Media entstehen nicht isoliert, sondern werden zusammen mit Foto, Video und Design produziert. So erhalten Sie abgestimmten, hochwertigen Content ohne doppelten Aufwand.\n\nIm Abo erhalten Sie einen festen Redaktionsplan mit regelmassgien Posts, Stories und Kampagnen — alles abgestimmt auf Ihre Marketingstrategie.",
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
    longDescription:
      "Ihre Website ist Ihre digitale Visitenkarte — und Ihr Newsletter der direkte Kanal zu bestehenden Kunden. Ich erstelle moderne, schnelle Websites und professionelle Newsletter, die zu Ihrem Markenauftritt passen und Ergebnisse liefern.\n\nAls Teil des Digitalpakets werden Texte, Bilder und Videos direkt aus den anderen Leistungsbereichen ubernommen. So entsteht kein zusatzlicher Aufwand, und Ihre Online-Prasenz bleibt immer aktuell und konsistent.\n\nIm Abo ubernehme ich die laufende Pflege: Content-Updates, SEO-Optimierung und regelmasssige Newsletter-Versande — damit Sie sich auf Ihr Kerngeschaft konzentrieren konnen.",
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
    longDescription:
      "Marketing ist kein einmaliges Projekt — es ist ein laufender Prozess. Mit der Begleitung haben Sie einen festen Ansprechpartner, der Ihre Marke kennt, Ihre Ziele versteht und proaktiv an Ihrem Erfolg arbeitet.\n\nAls Ihr externer Marketing-Partner koordiniere ich alle Leistungen aus dem Digitalpaket: Grafik, Foto, Video, Social Media und Web. Sie haben einen einzigen Kontakt fur alles — ohne Koordinationsaufwand zwischen verschiedenen Dienstleistern.\n\nMonatliche Abstimmungen sorgen dafur, dass wir immer auf Kurs bleiben. Und dank des flexiblen Abo-Modells konnen Sie den Umfang jederzeit anpassen.",
    highlights: [
      "Ein Ansprechpartner fur alle Leistungen",
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
      "Laufende Marketing-Begleitung fur Schweizer KMU. Wie ein internes Teammitglied — flexibel, personlich und zuverlassig. Auch im Abo.",
  },
];

