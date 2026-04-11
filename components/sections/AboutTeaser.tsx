"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { ParallaxSection } from "@/components/animations/ParallaxSection";

export function AboutTeaser() {
  return (
    <section className="relative py-16 md:py-40 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Teal ambient glow behind image area */}
      <div className="hidden md:block absolute top-1/4 -left-32 w-[600px] h-[600px] bg-teal/[0.07] rounded-full blur-[180px] pointer-events-none" />
      {/* Warm accent glow — right side */}
      <div className="hidden md:block absolute bottom-1/4 -right-20 w-[350px] h-[350px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <SectionHeading title="ÜBER MICH" align="left" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ParallaxSection offset={30}>
          <div className="relative">
            <div className="aspect-[3/4] bg-[#111] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/marc-baumann.avif"
                alt="Marc Baumann — Inhaber von b-emotion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-teal/30 rounded-2xl" />
          </div>
        </ParallaxSection>

        <FadeIn direction="left">
          <div className="space-y-6">
            <p className="text-body-text text-lg md:text-xl leading-relaxed font-light">
              Mein Name ist Marc Baumann, und meine Leidenschaft für Grafik und
              Marketing begleitet mich bereits seit meiner Ausbildung zum
              Polygrafen EFZ.
            </p>
            <p className="text-body-text text-lg md:text-xl leading-relaxed font-light">
              Seit dem 1. Januar 2025 widme ich mich vollständig b-emotion. Mein
              Ziel ist es, kleinen Unternehmen eine zentrale Anlaufstelle für
              Marketing zu bieten.
            </p>
            <Link
              href="/ueber-mich"
              className="inline-flex items-center gap-2 mt-4 text-primary text-sm uppercase tracking-wider font-semibold group"
            >
              Mehr erfahren
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
