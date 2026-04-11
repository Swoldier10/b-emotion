"use client";

import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

const clients = [
  "Folienzuschnitt.ch",
  "VinoDiverso",
  "Vinato",
  "GRUEBLEREI",
  "Signvision Werbetechnik AG",
];

const caseStudies = [
  {
    client: "VinoDiverso",
    desc: "Social-Media-Reels und Produktfotografie, die den Online-Auftritt komplett erneuert haben.",
    slug: "vinodiverso",
  },
  {
    client: "GRUEBLEREI",
    desc: "Eine hochwertige Jubiläumsbroschüre, die Geschichte und Tradition verbindet.",
    slug: "grueblerei",
  },
  {
    client: "Folienzuschnitt.ch",
    desc: "Professionelle Event-Videos und Firmenpräsentation für Kundentermine.",
    slug: "folienzuschnitt",
  },
];

export function ReferenzenPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://b-emotion.ch/" },
      { "@type": "ListItem", position: 2, name: "Referenzen", item: "https://b-emotion.ch/referenzen" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHero
        title="REFERENZEN"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Referenzen" }]}
        subtitle="Was meine Kunden sagen."
      />

      {/* Client Logos */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="hidden md:block absolute top-0 right-[10%] w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[160px] pointer-events-none" />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <StaggerItem key={client}>
              <div className="bg-[#111111] border border-white/[0.04] rounded-xl p-6 flex items-center justify-center h-24 hover:border-teal/20 transition-all cursor-default">
                <span className="text-sm font-bold text-white/50 hover:text-white/80 transition-colors text-center">
                  {client}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      <Testimonials />

      {/* Mini Case Studies */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="hidden md:block absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-teal/[0.06] rounded-full blur-[180px] pointer-events-none" />
        <SectionHeading title="AUSGEWÄHLTE PROJEKTE" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.slug} delay={i * 0.1}>
              <Link
                href={`/projekte/${cs.slug}`}
                className="group block bg-[#111111] border border-white/[0.04] rounded-2xl p-8 hover:border-teal/20 transition-all h-full"
              >
                <span className="text-xs font-bold text-primary uppercase">
                  {cs.client}
                </span>
                <p className="mt-3 text-body-text text-sm leading-relaxed">
                  {cs.desc}
                </p>
                <span className="mt-4 inline-block text-primary text-xs uppercase tracking-wide font-semibold group-hover:underline underline-offset-4">
                  Projekt ansehen &rarr;
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden bg-gradient-to-b from-[#050505] via-teal/[0.06] to-[#050505]">
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10">
          <SectionHeading title="IHR PROJEKT KÖNNTE DAS NÄCHSTE SEIN." />
          <MagneticButton href="/kontakt">Kontakt aufnehmen</MagneticButton>
        </div>
      </section>
    </>
  );
}
