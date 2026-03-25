"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const testimonials = [
  {
    quote:
      "Marc hat unsere Marketingprasenz komplett transformiert. Professionell, kreativ und immer erreichbar.",
    name: "Thomas M.",
    company: "Folienzuschnitt.ch",
  },
  {
    quote:
      "Die Zusammenarbeit mit b-emotion ist unkompliziert und die Ergebnisse sprechen fur sich. Sehr empfehlenswert!",
    name: "Anna K.",
    company: "VinoDiverso",
  },
  {
    quote:
      "Endlich ein Ansprechpartner fur alles — von der Strategie bis zum fertigen Produkt. Top Qualitat!",
    name: "Stefan R.",
    company: "GRUEBLEREI",
  },
  {
    quote:
      "Marc versteht unser Business und liefert Content, der genau zu unserer Zielgruppe passt.",
    name: "Sabine W.",
    company: "Vinato",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative -my-16 py-32 md:-my-40 md:py-80 overflow-hidden">
      {/* Gradient: dark → teal-tinted → dark — oversized to bleed into adjacent sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0c1a1f] to-[#050505] pointer-events-none" />
      {/* Teal ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-teal/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <SectionHeading title="DAS SAGEN MEINE KUNDEN" />

        <FadeIn>
          <div className="relative mt-8">
            <div className="overflow-hidden min-h-[280px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-center px-4 md:px-16 w-full"
                >
                  {/* Large quote mark */}
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    className="text-primary/30 mx-auto mb-8"
                  >
                    <path
                      d="M14 24c-3.3 0-6-2.7-6-6s2.7-6 6-6c5 0 8 4 8 12 0 8-4 14-10 16l-1-2c4-2 7-6 7-10-1.3.6-2.6 1-4 1zm20 0c-3.3 0-6-2.7-6-6s2.7-6 6-6c5 0 8 4 8 12 0 8-4 14-10 16l-1-2c4-2 7-6 7-10-1.3.6-2.6 1-4 1z"
                      fill="currentColor"
                    />
                  </svg>

                  <blockquote className="text-xl md:text-3xl lg:text-4xl text-white/90 italic leading-snug font-light">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  <div className="mt-10">
                    <p className="text-white font-bold text-sm uppercase tracking-wider">
                      {testimonials[current].name}
                    </p>
                    <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">
                      {testimonials[current].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Vorheriges Testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === current
                        ? "bg-primary w-8"
                        : "bg-white/10 w-4 hover:bg-white/20"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Nachstes Testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
