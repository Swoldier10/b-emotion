"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { clientProjects, categories } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export function ProjektePage() {
  const [active, setActive] = useState("ALLE");

  const filtered =
    active === "ALLE"
      ? clientProjects
      : clientProjects.filter((cp) => cp.categories.includes(active));

  return (
    <>
      <PageHero
        title="PROJEKTE"
        subtitle="Fur jeden Kunden ein massgeschneidertes Paket."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projekte" }]}
      />

      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wide rounded-full border transition-all ${
                active === cat
                  ? "bg-primary text-dark border-primary font-semibold"
                  : "border-white/20 text-white/60 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {filtered.map((cp, i) => (
            <FadeIn key={cp.slug} delay={i * 0.05}>
              <Link
                href={`/projekte/${cp.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#111111] border border-white/[0.04] transition-all duration-500 hover:border-teal/20 h-full"
              >
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Category badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cp.categories.map((cat) => (
                      <span
                        key={cat}
                        className={`text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full font-bold ${
                          cat === "VIDEO" || cat === "FOTO"
                            ? "bg-teal text-white"
                            : cat === "SOCIAL MEDIA"
                              ? "bg-teal/70 text-white"
                              : "bg-primary text-dark"
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Client name */}
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-tight">
                    {cp.client}
                  </h3>

                  {/* Period */}
                  <p className="mt-1 text-xs text-white/40 uppercase tracking-wider">
                    {cp.period}
                  </p>

                  {/* Description — fixed height via line-clamp */}
                  <p className="mt-4 text-sm text-body-text leading-relaxed font-light line-clamp-3 flex-1">
                    {cp.description}
                  </p>

                  {/* Service pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cp.projects
                      .flatMap((p) => p.services)
                      .slice(0, 5)
                      .map((svc) => (
                        <span
                          key={svc}
                          className="text-[10px] px-2.5 py-1 rounded-full border border-teal/15 text-teal bg-teal/[0.06] font-medium"
                        >
                          {svc}
                        </span>
                      ))}
                    {cp.projects.flatMap((p) => p.services).length > 5 && (
                      <span className="text-[10px] px-2.5 py-1 text-white/30 font-medium">
                        +{cp.projects.flatMap((p) => p.services).length - 5}
                      </span>
                    )}
                  </div>

                  {/* View link */}
                  <div className="mt-6 flex items-center gap-2 text-white/20 group-hover:text-primary transition-colors duration-300">
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      Projekt ansehen
                    </span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
