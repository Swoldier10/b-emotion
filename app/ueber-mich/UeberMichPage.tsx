"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { ParallaxSection } from "@/components/animations/ParallaxSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { User, Layers, Zap } from "lucide-react";

const values = [
  {
    icon: User,
    title: "PERSÖNLICH",
    text: "Kein Agentur-Karussell. Ich bin Ihr direkter Ansprechpartner — von der Idee bis zum fertigen Produkt.",
  },
  {
    icon: Layers,
    title: "VIELSEITIG",
    text: "Ein Ansprechpartner für alle Marketingbedürfnisse. Was ich nicht selbst mache, deckt mein Netzwerk ab.",
  },
  {
    icon: Zap,
    title: "FLEXIBEL",
    text: "Einzelprojekte oder Abo — Sie entscheiden, was zu Ihnen passt. Keine Mindestlaufzeiten, keine versteckten Kosten.",
  },
];

const timeline = [
  {
    num: "01",
    title: "KENNENLERNEN",
    desc: "Wir besprechen Ihre Ziele und Herausforderungen.",
  },
  {
    num: "02",
    title: "STRATEGIE",
    desc: "Ich entwickle einen massgeschneiderten Plan.",
  },
  {
    num: "03",
    title: "UMSETZUNG",
    desc: "Kreative Arbeit, transparent und effizient.",
  },
  {
    num: "04",
    title: "OPTIMIERUNG",
    desc: "Gemeinsam analysieren und verbessern wir laufend.",
  },
];

export function UeberMichPage() {
  return (
    <>
      <PageHero
        title="ÜBER MICH"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Über mich" }]}
      />

      {/* Personal Introduction */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ParallaxSection offset={30}>
            <div className="aspect-[3/4] bg-dark rounded-xl overflow-hidden relative">
              <Image
                src="/images/marc-baumann.avif"
                alt="Marc Baumann — Inhaber von b-emotion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ParallaxSection>

          <FadeIn direction="left">
            <div className="space-y-6 text-body-text text-lg leading-relaxed">
              <p>
                Mein Name ist Marc Baumann, und meine Leidenschaft für Grafik
                und Marketing begleitet mich bereits seit meiner Ausbildung zum
                Polygrafen EFZ (2003-2007).
              </p>
              <p>
                Mein beruflicher Weg führte mich von der Leitung einer
                Druckvorstufe über eine Position als Application Engineer in der
                IT- und Publishing-Branche schliesslich in eine grosse
                Autogarage, wo ich die gesamte Marketingverantwortung übernahm.
                Neben strategischen Aufgaben war ich direkt für die Umsetzung
                zuständig und konnte meine Expertise in der Contenterstellung
                kontinuierlich erweitern.
              </p>
              <p>
                In dieser Zeit habe ich wertvolle Erfahrungen im strategischen
                und operativen Marketing gesammelt und begann zunehmend, mein
                Wissen auch extern anzubieten — seit 2021 unter der Marke
                b-emotion.
              </p>
              <p>
                Seit dem 1. Januar 2025 widme ich mich vollständig b-emotion.
                Mein Ziel ist es, kleinen Unternehmen eine zentrale Anlaufstelle
                für Marketing zu bieten. Alle Aufgaben in meinem Fachgebiet
                übernehme ich persönlich, während ich bei spezifischen
                Anforderungen auf mein über Jahre gewachsenes Netzwerk aus
                Spezialisten zurückgreife.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading title="WARUM B-EMOTION?" />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="bg-dark border border-white/5 rounded-xl p-8 text-center h-full">
                <v.icon
                  size={40}
                  strokeWidth={1}
                  className="text-primary mx-auto mb-4"
                />
                <h4 className="text-lg font-black text-white uppercase mb-3">
                  {v.title}
                </h4>
                <p className="text-body-text text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading title="SO ARBEITE ICH" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div className="text-center">
                <span className="text-5xl font-black text-primary">
                  {step.num}
                </span>
                <h4 className="mt-4 text-sm font-bold text-white uppercase">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm text-body-text">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden bg-gradient-to-b from-[#050505] via-teal/[0.06] to-[#050505]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10">
          <SectionHeading title="BEREIT FÜR IHR PROJEKT?" />
          <MagneticButton href="/kontakt">Kontakt aufnehmen</MagneticButton>
        </div>
      </section>
    </>
  );
}
