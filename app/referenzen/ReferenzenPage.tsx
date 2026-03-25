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
    slug: "vinodiverso-reel",
  },
  {
    client: "GRUEBLEREI",
    desc: "Eine hochwertige Jubilaumsbroschure, die Geschichte und Tradition verbindet.",
    slug: "grueblerei-jubilaeumsbroschuere",
  },
  {
    client: "Folienzuschnitt.ch",
    desc: "Professionelle Event-Videos und Firmenprasentation fur Kundentermine.",
    slug: "folienzuschnitt-event-video",
  },
];

export function ReferenzenPage() {
  return (
    <>
      <PageHero
        title="REFERENZEN"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Referenzen" }]}
        subtitle="Was meine Kunden sagen."
      />

      {/* Client Logos */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <StaggerItem key={client}>
              <div className="bg-dark border border-white/5 rounded-xl p-6 flex items-center justify-center h-24 hover:border-primary/20 transition-all hover:scale-105 cursor-default">
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
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading title="AUSGEWAHLTE PROJEKTE" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.slug} delay={i * 0.1}>
              <Link
                href={`/projekte/${cs.slug}`}
                className="group block bg-dark border border-white/5 rounded-xl p-8 hover:border-primary/20 transition-all"
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
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-center">
        <SectionHeading title="IHR PROJEKT KONNTE DAS NACHSTE SEIN." />
        <MagneticButton href="/kontakt">Kontakt aufnehmen</MagneticButton>
      </section>
    </>
  );
}
