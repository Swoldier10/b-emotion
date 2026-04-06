"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { AboConfigurator } from "@/components/forms/AboConfigurator";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ChevronDown,
  CheckCircle,
  MessageSquare,
  Settings,
} from "lucide-react";
import { socialLinks } from "@/components/ui/SocialIcons";

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
    a: "Es gibt keine. Sie können monatlich kündigen.",
  },
  {
    q: "Kann ich den Umfang ändern?",
    a: "Ja, jederzeit zum Folgemonat.",
  },
  {
    q: "Was passiert mit ungenutztem Budget?",
    a: "Wir besprechen gemeinsam, wie wir die Ressourcen optimal einsetzen. Ungenutzte Kapazitäten können in den Folgemonat übertragen werden.",
  },
  {
    q: "Wie schnell kann ich starten?",
    a: "Nach einem kurzen Kennenlernen können wir in der Regel innerhalb einer Woche loslegen.",
  },
  {
    q: "Was kostet ein Abo?",
    a: "Die Kosten richten sich nach Ihren Bedürfnissen. Konfigurieren Sie Ihr Abo oben oder kontaktieren Sie mich für ein individuelles Angebot.",
  },
];

type Tab = "kontakt" | "abo";

export function KontaktPage({ defaultTab = "kontakt" }: { defaultTab?: Tab }) {
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://b-emotion.ch/" },
      { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://b-emotion.ch/kontakt" },
    ],
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title="LASSEN SIE UNS STARTEN"
        subtitle="Allgemeine Anfrage oder Abo konfigurieren — Sie entscheiden."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-12">
          {/* Left: Tabbed form area */}
          <div>
            {/* Tab selector */}
            <div className="flex gap-2 mb-8" role="tablist" aria-label="Kontakt-Optionen">
              <button
                onClick={() => setActiveTab("kontakt")}
                role="tab"
                id="tab-kontakt"
                aria-selected={activeTab === "kontakt"}
                aria-controls="panel-kontakt"
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-wide border transition-all ${
                  activeTab === "kontakt"
                    ? "bg-primary text-dark border-primary"
                    : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                <MessageSquare size={16} />
                Anfrage senden
              </button>
              <button
                onClick={() => setActiveTab("abo")}
                role="tab"
                id="tab-abo"
                aria-selected={activeTab === "abo"}
                aria-controls="panel-abo"
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-wide border transition-all ${
                  activeTab === "abo"
                    ? "bg-primary text-dark border-primary"
                    : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                <Settings size={16} />
                Abo konfigurieren
              </button>
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === "kontakt" && (
                <motion.div
                  key="kontakt"
                  id="panel-kontakt"
                  role="tabpanel"
                  aria-labelledby="tab-kontakt"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <ContactForm />
                </motion.div>
              )}
              {activeTab === "abo" && (
                <motion.div
                  key="abo"
                  id="panel-abo"
                  role="tabpanel"
                  aria-labelledby="tab-abo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <FadeIn>
                    <p className="text-body-text text-sm leading-relaxed mb-6">
                      Wählen Sie die Leistungen, die Sie benötigen, und
                      konfigurieren Sie Ihr massgeschneidertes Abo. Flexibel,
                      ohne Mindestlaufzeit.
                    </p>
                  </FadeIn>
                  <AboConfigurator />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Contact info sidebar */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn delay={0.2}>
              <div className="bg-[#111111] border border-white/[0.04] rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-teal/10 border border-teal/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-black text-primary">MB</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Marc Baumann</p>
                    <p className="text-body-text text-sm">
                      Inhaber, b-emotion
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:mail@b-emotion.ch"
                    className="flex items-center gap-3 text-teal hover:text-primary transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm">mail@b-emotion.ch</span>
                  </a>
                  <a
                    href="tel:+41765646273"
                    className="flex items-center gap-3 text-teal hover:text-primary transition-colors"
                  >
                    <Phone size={18} />
                    <span className="text-sm">+41 76 564 62 73</span>
                  </a>
                  <a
                    href="https://wa.me/41765646273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-500 hover:text-green-400 transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm">WhatsApp schreiben</span>
                  </a>
                  <div className="flex items-center gap-3 text-body-text">
                    <MapPin size={18} className="shrink-0" />
                    <span className="text-sm">
                      Bettenstrasse 19, 9212 Arnegg SG
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-6 border-t border-white/[0.04]">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading title="WARUM B-EMOTION?" />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <StaggerItem key={b}>
              <div className="flex items-center gap-3 bg-[#111111] border border-white/[0.04] rounded-lg p-5">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span className="text-white text-sm font-medium">{b}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-3xl mx-auto">
        <SectionHeading title="HÄUFIGE FRAGEN" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border border-white/[0.04] rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className="text-white text-sm font-semibold pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-primary shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key={`faq-${i}`}
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-body-text text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
