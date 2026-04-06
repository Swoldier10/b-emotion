"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  height?: "sm" | "md" | "lg";
  titleClassName?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  height = "md",
  titleClassName = "",
}: PageHeroProps) {
  const heights = {
    sm: "md:min-h-[35vh]",
    md: "md:min-h-[40vh]",
    lg: "md:min-h-[50vh]",
  };

  return (
    <section
      className={`${heights[height]} flex flex-col justify-end px-4 md:px-8 pt-24 md:pt-32 pb-8 md:pb-12`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {breadcrumbs && (
          <FadeIn>
            <nav
              className="mb-4 md:mb-6 text-[11px] md:text-xs uppercase tracking-wide text-text-secondary"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center gap-2">
                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {i > 0 && <span>&gt;</span>}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </FadeIn>
        )}
        <TextReveal
          text={title}
          as="h1"
          className={`text-3xl md:text-5xl lg:text-7xl font-black text-white ${titleClassName}`}
        />
        {subtitle && (
          <FadeIn delay={0.3}>
            <p className="mt-3 md:mt-6 text-base md:text-xl text-body-text max-w-2xl">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
