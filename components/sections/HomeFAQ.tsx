"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Was ist b-emotion?",
    a: "b-emotion ist eine Marketing-Agentur für Schweizer KMU mit Sitz in Arnegg SG. Gegründet von Marc Baumann, bietet b-emotion Grafik & Design, Foto & Video, Social Media, Websites und laufende Begleitung — alles aus einer Hand, auch im flexiblen Abo.",
  },
  {
    q: "Welche Leistungen bietet b-emotion an?",
    a: "b-emotion bietet sechs Kernleistungen: Beratung & Strategie, Grafik & Design, Foto & Video (inkl. Drohne), Social Media Management, Websites & Newsletter sowie laufende Begleitung als externer Marketing-Partner.",
  },
  {
    q: "Wie funktioniert das Abo-Modell?",
    a: "Das flexible Abo-Modell hat keine Mindestlaufzeit und ist monatlich kündbar. Sie wählen die Leistungen, die Sie benötigen, und erhalten einen festen Ansprechpartner mit monatlichen Abstimmungen und priorisierter Bearbeitung.",
  },
  {
    q: "Für wen ist b-emotion geeignet?",
    a: "b-emotion richtet sich an kleine und mittlere Unternehmen (KMU) in der Schweiz, die einen zentralen Ansprechpartner für ihr gesamtes Marketing suchen — ohne Agentur-Karussell, mit persönlicher Betreuung.",
  },
];

export function HomeFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
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
                aria-controls={`home-faq-panel-${i}`}
                id={`home-faq-btn-${i}`}
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
                    key={`home-faq-${i}`}
                    id={`home-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`home-faq-btn-${i}`}
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
  );
}
