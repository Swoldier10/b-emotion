"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import {
  Lightbulb,
  Palette,
  Camera,
  Share2,
  Globe,
  Users,
} from "lucide-react";
import Link from "next/link";

const aboServices = [
  { icon: Lightbulb, label: "Beratung" },
  { icon: Palette, label: "Design" },
  { icon: Camera, label: "Foto & Video" },
  { icon: Share2, label: "Social Media" },
  { icon: Globe, label: "Web" },
  { icon: Users, label: "Begleitung" },
];

export function AboTeaser() {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  // On mobile: skip borderRadius animation (non-compositable, causes layout thrash)
  const scale = useTransform(scrollYProgress, [0, 1], [isMobile ? 1 : 0.92, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], isMobile ? [16, 16] : [40, 0]);

  return (
    <section ref={ref} className="py-4 md:py-8 px-4 md:px-0">
      <motion.div
        className="bg-primary overflow-hidden"
        style={{ scale, borderRadius }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <FadeIn direction="right">
              <p className="text-dark/40 text-xs uppercase tracking-[0.3em] font-bold mb-4">
                Flexibel & skalierbar
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-dark leading-[0.9]">
                ALLES
                <br />
                IM ABO.
              </h2>
              <p className="mt-3 text-dark/50 text-base md:text-lg font-bold uppercase tracking-wide">
                Flexibel und skalierbar
              </p>
              <p className="mt-8 text-dark/60 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Nicht ein Spezialist — sondern Ihr kompletter Marketing-Partner.
                Durch die Zusammenarbeit mit b-emotion profitieren kleine
                Unternehmen von einer kosteneffizienten, flexiblen und
                qualitativ hochwertigen Marketinglösung, die Ihre Ressourcen
                schont und ihre Ziele effektiv unterstützt.
              </p>
              <div className="mt-10">
                <Link
                  href="/abo"
                  className="inline-flex items-center justify-center bg-dark text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full text-sm hover:bg-black transition-colors"
                >
                  Jetzt Abo konfigurieren
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2 flex items-center justify-center">
            <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {aboServices.map((svc) => (
                <StaggerItem key={svc.label}>
                  <div className="bg-dark/[0.12] rounded-2xl p-6 md:p-8 text-center border border-dark/[0.10] hover:bg-dark/[0.18] transition-colors duration-300 h-full flex flex-col items-center justify-center">
                    <svc.icon
                      size={36}
                      strokeWidth={1.3}
                      className="text-dark/80 mb-3"
                    />
                    <p className="text-dark/80 text-xs md:text-sm font-bold uppercase tracking-wider">
                      {svc.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
              {/* Center "1 ABO" badge */}
            </StaggerChildren>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
