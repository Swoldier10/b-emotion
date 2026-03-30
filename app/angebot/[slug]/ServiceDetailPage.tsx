"use client";

import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { ImageIcon, ArrowRight } from "lucide-react";
import {
  Lightbulb,
  Palette,
  Camera,
  Share2,
  Globe,
  Users,
} from "lucide-react";
import { services } from "@/lib/services";
import type { ServiceData } from "@/lib/services";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  palette: Palette,
  camera: Camera,
  share2: Share2,
  globe: Globe,
  users: Users,
};

export function ServiceDetailPage({ service }: { service: ServiceData }) {
  const Icon = iconMap[service.iconName] || Globe;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "b-emotion",
      url: "https://b-emotion.ch",
    },
    areaServed: { "@type": "Country", name: "CH" },
    url: `https://b-emotion.ch/angebot/${service.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://b-emotion.ch/" },
      { "@type": "ListItem", position: 2, name: "Angebot", item: "https://b-emotion.ch/angebot" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://b-emotion.ch/angebot/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <PageHero
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Angebot", href: "/angebot" },
          { label: service.title },
        ]}
      />

      {/* Section 1: Description + Deliverables */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
              <Icon size={28} strokeWidth={1.2} className="text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase leading-tight pt-2">
              {service.tagline}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-5">
            {service.longDescription.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-body-text text-base md:text-lg leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Deliverables as inline pills */}
        <FadeIn delay={0.2}>
          <div className="mt-10 pt-8 border-t border-white/[0.04]">
            <p className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">
              Leistungen
            </p>
            <div className="flex flex-wrap gap-2">
              {service.deliverables.map((d) => (
                <span
                  key={d}
                  className="text-xs px-3 py-1.5 rounded-full border border-teal/15 text-teal bg-teal/[0.06] font-medium"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 2: Work Examples */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#0a1e25]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-8">
              {service.title} — Beispiele
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <FadeIn key={n} delay={n * 0.1}>
                <div className="aspect-[4/3] rounded-2xl bg-[#0d2a33] border border-teal/10 flex flex-col items-center justify-center gap-3 text-white/20">
                  <ImageIcon size={36} strokeWidth={1} />
                  <span className="text-[10px] uppercase tracking-wider font-medium">
                    Beispiel {n}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Other services + CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Other services — compact horizontal row */}
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-6">
              Weitere Leistungen im Paket
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-12">
              {otherServices.map((s) => {
                const SIcon = iconMap[s.iconName] || Globe;
                return (
                  <Link
                    key={s.slug}
                    href={`/angebot/${s.slug}`}
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.06] bg-[#111111] hover:border-teal/30 hover:bg-[#141414] transition-all duration-300"
                  >
                    <SIcon
                      size={16}
                      strokeWidth={1.5}
                      className="text-white/40 group-hover:text-primary transition-colors duration-300"
                    />
                    <span className="text-xs text-white/60 font-semibold uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                      {s.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.2}>
            <div className="text-center pt-8 border-t border-white/[0.04]">
              <p className="text-body-text text-base mb-6">
                Interessiert an {service.title.toLowerCase()} als Teil Ihres Digitalpakets?
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-primary text-dark font-bold uppercase tracking-wider px-10 py-4 rounded-full text-sm hover:bg-white transition-colors"
              >
                Jetzt starten
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
