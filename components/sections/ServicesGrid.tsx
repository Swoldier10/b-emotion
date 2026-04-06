"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
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

export function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="relative py-16 md:py-40 px-4 md:px-8 overflow-hidden">
      {/* Teal ambient glow top-right */}
      <div className="hidden md:block absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {showHeading && (
          <>
            <SectionHeading
              title="EIN PAKET. ALLES DIGITAL."
              subtitle="Alle Leistungen, die Ihr Abo umfassen kann."
            />
            <FadeIn>
              <p className="text-center text-body-text text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-14 md:mb-20 font-light -mt-4 md:-mt-8">
                Kein Spezialist für ein einzelnes Gebiet — sondern Ihr
                kompletter Marketing-Partner. Von Grafik über Foto und Video bis
                hin zu Social Media und Webdesign. Alles aus einer Hand, im
                flexiblen Abo.
              </p>
            </FadeIn>
          </>
        )}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/angebot/${service.slug}`}
                  className="group relative flex flex-col bg-[#111111] border border-white/[0.04] rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-primary/20 hover:bg-[#141414] h-full overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal/[0.15] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10 flex flex-col flex-1">
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

                    <p className="mt-3 text-sm text-body-text leading-relaxed font-light flex-1">
                      {service.description}
                    </p>

                    {/* Deliverables list */}
                    <p className="mt-5 text-xs leading-relaxed text-primary/70">
                      {service.deliverables.slice(0, 4).join(" · ")}
                    </p>

                    {/* Hover affordance */}
                    <div className="mt-6 flex items-center gap-2 text-white/20 group-hover:text-primary transition-colors duration-300">
                      <span className="text-xs uppercase tracking-wider font-semibold">
                        Mehr erfahren
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
