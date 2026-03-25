"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/animations/FadeIn";
import { projects, categories } from "@/lib/projects";

export function ProjektePage() {
  const [active, setActive] = useState("ALLE");

  const filtered =
    active === "ALLE"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        title="PROJEKTE"
        subtitle="Geschichten, die bewegen. Ergebnisse, die uberzeugen."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <div className="relative overflow-hidden rounded-xl bg-dark aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span
                    className={`text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full font-bold w-fit mb-3 ${
                      project.category === "VIDEO" ||
                      project.category === "FOTO"
                        ? "bg-teal text-white"
                        : "bg-primary text-dark"
                    }`}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-lg font-black text-white uppercase">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/50 leading-relaxed line-clamp-2">
                    {project.excerpt}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
