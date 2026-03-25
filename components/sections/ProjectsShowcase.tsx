"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { projects } from "@/lib/projects";

export function ProjectsShowcase() {
  return (
    <section className="py-16 md:py-40 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="AUSGEWAHLTE ARBEITEN"
        subtitle="Ein Auszug meiner Projekte."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {projects.slice(0, 6).map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-2xl bg-[#111] h-full">
              <div className="aspect-[4/3] w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span
                  className={`text-[9px] uppercase tracking-[0.15em] px-3 py-1 rounded-full font-bold w-fit mb-3 ${
                    project.category === "VIDEO" || project.category === "FOTO"
                      ? "bg-teal text-white"
                      : "bg-primary text-dark"
                  }`}
                >
                  {project.category}
                </span>
                <h3 className="text-base md:text-lg font-black text-white uppercase leading-tight">
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
