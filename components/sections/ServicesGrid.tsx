"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
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
import { services } from "@/lib/services";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  palette: Palette,
  camera: Camera,
  share2: Share2,
  globe: Globe,
  users: Users,
};

export function ServicesGrid() {
  return (
    <section className="relative py-16 md:py-40 px-4 md:px-8 overflow-hidden">
      {/* Teal ambient glow top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="ANGEBOT"
          subtitle="Was ich fur Sie tun kann."
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <StaggerItem key={service.slug}>
                <div
                  id={service.slug}
                  className="group relative bg-[#111111] border border-white/[0.04] rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-primary/20 hover:bg-[#141414] h-full overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal/[0.08] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-teal/30 transition-colors duration-500">
                      <Icon
                        size={26}
                        strokeWidth={1.2}
                        className="text-white/50 transition-colors duration-500 group-hover:text-primary"
                      />
                    </div>

                    <h4 className="text-base md:text-lg font-black text-white uppercase tracking-wide">
                      {service.title}
                    </h4>

                    <p className="mt-3 text-sm text-white/40 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Deliverables list */}
                    <p className="mt-5 text-xs leading-relaxed text-primary/50">
                      {service.deliverables.slice(0, 4).join(" · ")}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
