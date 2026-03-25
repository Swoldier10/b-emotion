"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

export function AboTeaser() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section ref={ref} className="py-4 md:py-8 px-4 md:px-0">
      <motion.div
        className="bg-primary overflow-hidden"
        style={{ scale, borderRadius }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <p className="text-dark/40 text-xs uppercase tracking-[0.3em] font-bold mb-4">
                Flexibel & skalierbar
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-dark leading-[0.9]">
                ALLES
                <br />
                IM ABO.
              </h2>
              <p className="mt-8 text-dark/60 text-lg max-w-lg leading-relaxed">
                Durch die Zusammenarbeit mit b-emotion profitieren kleine
                Unternehmen von einer kosteneffizienten, flexiblen und
                qualitativ hochwertigen Marketinglosung, die Ihre Ressourcen
                schont und ihre Ziele effektiv unterstutzt.
              </p>
              <div className="mt-10">
                <Link
                  href="/abo"
                  className="inline-flex items-center justify-center bg-dark text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full text-sm hover:bg-black transition-colors"
                >
                  Abo-Modelle entdecken
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2 flex items-center justify-center">
            <FadeIn direction="left">
              <div className="relative">
                {/* Decorative geometric shapes */}
                <div className="w-40 h-40 md:w-56 md:h-56 bg-dark/[0.06] rounded-3xl rotate-12" />
                <div className="absolute top-6 left-6 w-40 h-40 md:w-56 md:h-56 bg-dark/[0.06] rounded-3xl -rotate-6" />
                <div className="absolute top-12 left-12 w-40 h-40 md:w-56 md:h-56 bg-dark/[0.08] rounded-3xl rotate-3 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-black text-dark/[0.12]">
                    b
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
