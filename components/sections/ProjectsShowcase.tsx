"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { clientProjects } from "@/lib/projects";

export function ProjectsShowcase() {
  return (
    <section className="relative py-16 md:py-40 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Teal ambient glow — top-left */}
      <div className="hidden md:block absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal/[0.04] rounded-full blur-[150px] pointer-events-none" />
      {/* Warm accent glow — bottom-right */}
      <div className="hidden md:block absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
      <SectionHeading
        title="KUNDEN & PROJEKTE"
        subtitle="So sieht Zusammenarbeit in der Praxis aus."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {clientProjects.slice(0, 6).map((cp, i) => (
          <FadeIn key={cp.slug} delay={i * 0.08}>
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#111] border border-white/[0.04] p-6 md:p-8 h-full transition-all duration-500 hover:border-teal/20 hover:bg-[#141414]">
              {/* Category badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {cp.categories.map((cat) => (
                  <span
                    key={cat}
                    className={`text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full font-bold ${
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

              <h3 className="text-lg md:text-xl font-black text-white uppercase leading-tight">
                {cp.client}
              </h3>

              <p className="mt-1.5 text-xs text-white/40 uppercase tracking-wider">
                {cp.period}
              </p>

              <p className="mt-4 text-sm md:text-base text-body-text leading-relaxed line-clamp-3 font-light flex-1">
                {cp.description}
              </p>

              {/* Service pills */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {cp.projects
                  .flatMap((p) => p.services)
                  .slice(0, 4)
                  .map((svc) => (
                    <span
                      key={svc}
                      className="text-xs px-2.5 py-1 rounded-full border border-teal/15 text-teal/80 font-medium"
                    >
                      {svc}
                    </span>
                  ))}
                {cp.projects.flatMap((p) => p.services).length > 4 && (
                  <span className="text-xs px-2.5 py-1 text-white/30 font-medium">
                    +
                    {cp.projects.flatMap((p) => p.services).length - 4}{" "}
                    mehr
                  </span>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="text-center mt-14">
        <a
          href="/projekte"
          className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider font-semibold group"
        >
          Alle Projekte ansehen
          <span className="group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </a>
      </FadeIn>
      </div>
    </section>
  );
}
