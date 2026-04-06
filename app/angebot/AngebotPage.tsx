"use client";

import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FadeIn } from "@/components/animations/FadeIn";

export function AngebotPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://b-emotion.ch/" },
      { "@type": "ListItem", position: 2, name: "Angebot", item: "https://b-emotion.ch/angebot" },
    ],
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marketing-Leistungen von b-emotion",
    numberOfItems: 6,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beratung", url: "https://b-emotion.ch/angebot/beratung" },
      { "@type": "ListItem", position: 2, name: "Grafik & Design", url: "https://b-emotion.ch/angebot/grafik-design" },
      { "@type": "ListItem", position: 3, name: "Foto & Video", url: "https://b-emotion.ch/angebot/foto-video" },
      { "@type": "ListItem", position: 4, name: "Social Media", url: "https://b-emotion.ch/angebot/social-media" },
      { "@type": "ListItem", position: 5, name: "Websites / Newsletter", url: "https://b-emotion.ch/angebot/websites-newsletter" },
      { "@type": "ListItem", position: 6, name: "Begleitung", url: "https://b-emotion.ch/angebot/begleitung" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <PageHero
        title="ANGEBOT"
        subtitle="Ein Paket für Ihre komplette Digitalisierung — im flexiblen Abo."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Angebot" }]}
      />
      <ServicesGrid showHeading={false} />
      <FadeIn className="text-center pb-20">
        <MagneticButton href="/abo">Jetzt Abo konfigurieren</MagneticButton>
      </FadeIn>
      <CtaBanner />
    </>
  );
}
