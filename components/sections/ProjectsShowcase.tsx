"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { clientProjects } from "@/lib/projects";

export function ProjectsShowcase() {
  return (
    <section className="py-16 md:py-40 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="AUSGEWAHLTE KUNDEN"
        subtitle="Vielfalt in der Zusammenarbeit."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {clientProjects.slice(0, 6).map((cp, i) => (
          <FadeIn key={cp.slug} delay={i * 0.08}>
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#111] border border-white/[0.04] p-6 md:p-8 h-full transition-all duration-500 hover:border-teal/20 hover:bg-[#141414]">
              {/* Category badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
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

              <h3 className="text-base md:text-lg font-black text-white uppercase leading-tight">
                {cp.client}
              </h3>

              <p className="mt-1 text-[10px] text-white/40 uppercase tracking-wider">
                {cp.period}
              </p>

              <p className="mt-3 text-xs text-body-text leading-relaxed line-clamp-3 font-light flex-1">
                {cp.description}
              </p>

              {/* Service pills */}
              <div className="mt-4 flex flex-wrap gap-1">
                {cp.projects
                  .flatMap((p) => p.services)
                  .slice(0, 4)
                  .map((svc) => (
                    <span
                      key={svc}
                      className="text-[9px] px-2 py-0.5 rounded-full border border-teal/15 text-teal/80 font-medium"
                    >
                      {svc}
                    </span>
                  ))}
                {cp.projects.flatMap((p) => p.services).length > 4 && (
                  <span className="text-[9px] px-2 py-0.5 text-white/30 font-medium">
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
    </section>
  );
}
