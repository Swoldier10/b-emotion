import { ScrollCanvas } from "@/components/hero/ScrollCanvas";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MarqueeText } from "@/components/ui/MarqueeText";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { AboTeaser } from "@/components/sections/AboTeaser";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { HomeFAQ } from "@/components/sections/HomeFAQ";

export default function HomePage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "b-emotion",
    url: "https://b-emotion.ch",
    description:
      "Content, Grafik & Digital — Marketing-Agentur für KMU in der Schweiz",
    publisher: {
      "@type": "Organization",
      name: "b-emotion",
      url: "https://b-emotion.ch",
      logo: "https://b-emotion.ch/og-image.png",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist b-emotion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "b-emotion ist eine Marketing-Agentur für Schweizer KMU mit Sitz in Arnegg SG. Gegründet von Marc Baumann, bietet b-emotion Grafik & Design, Foto & Video, Social Media, Websites und laufende Begleitung — alles aus einer Hand, auch im flexiblen Abo.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Leistungen bietet b-emotion an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "b-emotion bietet sechs Kernleistungen: Beratung & Strategie, Grafik & Design, Foto & Video (inkl. Drohne), Social Media Management, Websites & Newsletter sowie laufende Begleitung als externer Marketing-Partner.",
        },
      },
      {
        "@type": "Question",
        name: "Wie funktioniert das Abo-Modell von b-emotion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das flexible Abo-Modell von b-emotion hat keine Mindestlaufzeit und ist monatlich kündbar. Sie wählen die Leistungen, die Sie benötigen, und erhalten einen festen Ansprechpartner mit monatlichen Abstimmungen und priorisierter Bearbeitung.",
        },
      },
      {
        "@type": "Question",
        name: "Für wen ist b-emotion geeignet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "b-emotion richtet sich an kleine und mittlere Unternehmen (KMU) in der Schweiz, die einen zentralen Ansprechpartner für ihr gesamtes Marketing suchen — ohne Agentur-Karussell, mit persönlicher Betreuung.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SSR-visible content for search engines and LLM crawlers */}
      <section className="sr-only">
        <h1>b-emotion — Ihr komplettes Digitalpaket für KMU in der Schweiz</h1>
        <p>
          b-emotion ist Ihre Marketing-Agentur für Grafik & Design, Foto & Video,
          Social Media, Websites und Newsletter. Alles aus einer Hand, auch im
          flexiblen Abo — ohne Mindestlaufzeit. Persönliche Betreuung durch Marc
          Baumann in Arnegg SG.
        </p>
      </section>

      <ScrollCanvas />

      {/* Content wrapper — slides up OVER the hero like a curtain */}
      <div className="relative z-10 -mt-[30vh] md:-mt-[50vh]">
        {/* Gradient fade from transparent (hero peeks through) to page bg */}
        <div className="h-[200px] bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] pointer-events-none" />

        <div className="bg-[#050505]">
          <ClientLogos />
          {/* Transition divider: gold → teal */}
          <div className="h-[1px] mx-auto w-2/5 bg-gradient-to-r from-primary/20 via-transparent to-teal/20 pointer-events-none" />
          <ServicesGrid />
          <AboTeaser />
          <ProjectsShowcase />
          {/* Transition divider: teal */}
          <div className="h-[1px] mx-auto w-1/3 bg-gradient-to-r from-transparent via-teal/15 to-transparent pointer-events-none" />
          <AboutTeaser />
          <Testimonials />
          <CtaBanner />
          <MarqueeText />
          <StatsCounter />
          <HomeFAQ />
        </div>
      </div>
    </>
  );
}
