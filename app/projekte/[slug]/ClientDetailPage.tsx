"use client";

import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { ImageIcon, ArrowRight } from "lucide-react";
import { clientProjects } from "@/lib/projects";
import type { ClientProject } from "@/lib/projects";

export function ClientDetailPage({ client }: { client: ClientProject }) {
  const otherClients = clientProjects.filter((c) => c.slug !== client.slug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://b-emotion.ch/" },
      { "@type": "ListItem", position: 2, name: "Projekte", item: "https://b-emotion.ch/projekte" },
      { "@type": "ListItem", position: 3, name: client.client, item: `https://b-emotion.ch/projekte/${client.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHero
        title={client.client}
        subtitle={client.categories.join(" · ")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projekte", href: "/projekte" },
          { label: client.client },
        ]}
      />

      {/* About the client + partnership */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-6">
            {client.categories.map((cat) => (
              <span
                key={cat}
                className={`text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full font-bold ${
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
            <span className="text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/10 text-white/50 font-medium">
              {client.period}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-body-text text-lg md:text-xl leading-relaxed font-light max-w-3xl">
            {client.description}
          </p>
        </FadeIn>

        {/* Services delivered */}
        <FadeIn delay={0.2}>
          <div className="mt-8">
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-3">
              Erbrachte Leistungen
            </h3>
            <div className="flex flex-wrap gap-2">
              {client.projects.flatMap((p) => p.services).map((svc) => (
                <span
                  key={svc}
                  className="text-xs px-3 py-1.5 rounded-full border border-teal/20 text-teal bg-teal/[0.06] font-medium"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Individual projects */}
      {client.projects.map((project, i) => (
        <section
          key={project.title}
          className={`py-16 md:py-24 px-4 md:px-8 ${i % 2 === 0 ? "bg-[#0a1e25]" : ""}`}
        >
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full font-bold ${
                    project.category === "VIDEO" || project.category === "FOTO"
                      ? "bg-teal text-white"
                      : project.category === "SOCIAL MEDIA"
                        ? "bg-teal/70 text-white"
                        : "bg-primary text-dark"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight">
                {project.title}
              </h3>
              <p className="mt-4 text-body-text text-base md:text-lg leading-relaxed font-light max-w-3xl">
                {project.description}
              </p>
            </FadeIn>

            {/* Work examples placeholder grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <FadeIn key={n} delay={n * 0.1}>
                  <div className={`aspect-[4/3] rounded-2xl flex flex-col items-center justify-center gap-3 text-white/20 ${i % 2 === 0 ? "bg-[#0d2a33] border border-teal/10" : "bg-[#111111] border border-white/[0.04]"}`}>
                    <ImageIcon size={36} strokeWidth={1} />
                    <span className="text-[10px] uppercase tracking-wider font-medium">
                      Bild / Video {n}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Other clients */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="WEITERE PROJEKTE"
            subtitle="Entdecken Sie mehr Zusammenarbeiten."
          />
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherClients.slice(0, 3).map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/projekte/${c.slug}`}
                  className="group flex flex-col bg-[#111111] border border-white/[0.04] rounded-2xl p-6 transition-all duration-500 hover:border-teal/20 h-full"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {c.categories.map((cat) => (
                      <span
                        key={cat}
                        className={`text-[8px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full font-bold ${
                          cat === "VIDEO" || cat === "FOTO"
                            ? "bg-teal text-white"
                            : "bg-primary text-dark"
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-lg font-black text-white uppercase">
                    {c.client}
                  </h4>
                  <p className="mt-2 text-xs text-body-text leading-relaxed line-clamp-2 flex-1">
                    {c.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-white/20 group-hover:text-primary transition-colors duration-300">
                    <span className="text-[10px] uppercase tracking-wider font-semibold">
                      Ansehen
                    </span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-dark leading-[0.95]">
            AHNLICHES FUR IHR UNTERNEHMEN?
          </h2>
          <p className="mt-6 text-dark/60 text-lg max-w-xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam Ihr massgeschneidertes Digitalpaket
            zusammenstellen.
          </p>
          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-dark text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full text-sm hover:bg-black transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
