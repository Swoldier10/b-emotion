"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { AboConfigurator } from "@/components/forms/AboConfigurator";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  ChevronDown,
  CheckCircle,
  Zap,
  Settings,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Zap,
    num: "01",
    title: "AUSWAHLEN",
    desc: "Wahlen Sie die Leistungen, die Sie benotigen.",
  },
  {
    icon: Settings,
    num: "02",
    title: "KONFIGURIEREN",
    desc: "Passen Sie Umfang und Frequenz an.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "LOSLEGEN",
    desc: "Starten Sie flexibel, ohne lange Vertragsbindung.",
  },
];

const benefits = [
  "Planbare Kosten",
  "Keine Mindestlaufzeit",
  "Fester Ansprechpartner",
  "Priorisierte Bearbeitung",
  "Monatliche Abstimmung",
  "Flexibel anpassbar",
];

const faqs = [
  {
    q: "Wie lange ist die Mindestlaufzeit?",
    a: "Es gibt keine. Sie konnen monatlich kundigen.",
  },
  {
    q: "Kann ich den Umfang andern?",
    a: "Ja, jederzeit zum Folgemonat.",
  },
  {
    q: "Was passiert mit ungenutztem Budget?",
    a: "Wir besprechen gemeinsam, wie wir die Ressourcen optimal einsetzen. Ungenutzte Kapazitaten konnen in den Folgemonat ubertragen werden.",
  },
  {
    q: "Wie schnell kann ich starten?",
    a: "Nach einem kurzen Kennenlernen konnen wir in der Regel innerhalb einer Woche loslegen.",
  },
  {
    q: "Was kostet ein Abo?",
    a: "Die Kosten richten sich nach Ihren Bedurfnissen. Konfigurieren Sie Ihr Abo oben oder kontaktieren Sie mich fur ein individuelles Angebot.",
  },
];

export function AboPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title="ALLES IM ABO"
        subtitle="FLEXIBEL & SKALIERBAR."
        titleClassName="!text-primary"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Abo" }]}
      />

      <FadeIn className="max-w-3xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <p className="text-body-text text-base md:text-lg leading-relaxed">
          Durch die Zusammenarbeit mit b-emotion profitieren kleine Unternehmen
          von einer kosteneffizienten, flexiblen und qualitativ hochwertigen
          Marketinglosung.
        </p>
      </FadeIn>

      {/* How it works */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading title="SO FUNKTIONIERT DAS ABO" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div className="text-center">
                <step.icon size={40} className="text-primary mx-auto mb-4" />
                <span className="text-4xl font-black text-primary">
                  {step.num}
                </span>
                <h4 className="mt-3 text-sm font-bold text-white uppercase">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm text-body-text">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Configurator */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-3xl mx-auto">
        <SectionHeading title="IHR MASSGESCHNEIDERTES ABO" />
        <AboConfigurator />
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading title="WARUM EIN ABO?" />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <StaggerItem key={b}>
              <div className="flex items-center gap-3 bg-dark border border-white/5 rounded-lg p-5">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span className="text-white text-sm font-medium">{b}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-3xl mx-auto">
        <SectionHeading title="HAUFIGE FRAGEN" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border border-white/5 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white text-sm font-semibold pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-primary shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-body-text text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[#0A0A0A] text-center">
        <SectionHeading title="NOCH FRAGEN? KONTAKTIEREN SIE MICH." />
        <MagneticButton href="/kontakt">Kontakt aufnehmen</MagneticButton>
      </section>
    </>
  );
}
