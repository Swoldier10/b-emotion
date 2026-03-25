"use client";

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
    title: "PERSONLICH",
    text: "Kein Agentur-Karussell. Ich bin Ihr direkter Ansprechpartner — von der Idee bis zum fertigen Produkt.",
  },
  {
    icon: Layers,
    title: "VIELSEITIG",
    text: "Ein Ansprechpartner fur alle Marketingbedurfnisse. Was ich nicht selbst mache, deckt mein Netzwerk ab.",
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
      <PageHero title="UBER MICH" />

      {/* Personal Introduction */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ParallaxSection offset={30}>
            <div className="aspect-[3/4] bg-dark rounded-xl overflow-hidden">
              <img
                src="/images/marc-baumann.avif"
                alt="Marc Baumann — Inhaber von b-emotion"
                className="w-full h-full object-cover"
              />
            </div>
          </ParallaxSection>

          <FadeIn direction="left">
            <div className="space-y-6 text-body-text text-lg leading-relaxed">
              <p>
                Mein Name ist Marc Baumann, und meine Leidenschaft fur Grafik
                und Marketing begleitet mich bereits seit meiner Ausbildung zum
                Polygrafen EFZ (2003-2007).
              </p>
              <p>
                Mein beruflicher Weg fuhrte mich von der Leitung einer
                Druckvorstufe uber eine Position als Application Engineer in der
                IT- und Publishing-Branche schliesslich in eine grosse
                Autogarage, wo ich die gesamte Marketingverantwortung ubernahm.
                Neben strategischen Aufgaben war ich direkt fur die Umsetzung
                zustandig und konnte meine Expertise in der Contenterstellung
                kontinuierlich erweitern.
              </p>
              <p>
                In dieser Zeit habe ich wertvolle Erfahrungen im strategischen
                und operativen Marketing gesammelt und begann zunehmend, mein
                Wissen auch extern anzubieten — seit 2021 unter der Marke
                b-emotion.
              </p>
              <p>
                Seit dem 1. Januar 2025 widme ich mich vollstandig b-emotion.
                Mein Ziel ist es, kleinen Unternehmen eine zentrale Anlaufstelle
                fur Marketing zu bieten. Alle Aufgaben in meinem Fachgebiet
                ubernehme ich personlich, wahrend ich bei spezifischen
                Anforderungen auf mein uber Jahre gewachsenes Netzwerk aus
                Spezialisten zuruckgreife.
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
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-center">
        <SectionHeading title="BEREIT FUR IHR PROJEKT?" />
        <MagneticButton href="/kontakt">Kontakt aufnehmen</MagneticButton>
      </section>
    </>
  );
}
