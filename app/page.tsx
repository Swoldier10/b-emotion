"use client";

import { ScrollCanvas } from "@/components/hero/ScrollCanvas";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MarqueeText } from "@/components/ui/MarqueeText";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { AboTeaser } from "@/components/sections/AboTeaser";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsCounter } from "@/components/sections/StatsCounter";

export default function HomePage() {
  return (
    <>
      <ScrollCanvas />

      {/* Content wrapper — slides up OVER the hero like a curtain */}
      <div className="relative z-10 -mt-[50vh]">
        {/* Gradient fade from transparent (hero peeks through) to page bg */}
        <div className="h-[200px] bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] pointer-events-none" />

        <div className="bg-[#050505]">
        <ClientLogos />
        <ServicesGrid />
        <AboTeaser />
        <ProjectsShowcase />
        <AboutTeaser />
        <Testimonials />
        <CtaBanner />
        <MarqueeText />
        <StatsCounter />
        </div>
      </div>
    </>
  );
}
