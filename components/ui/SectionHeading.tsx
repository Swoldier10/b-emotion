"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <TextReveal
        text={title}
        as="h2"
        className="text-3xl md:text-5xl lg:text-6xl font-black text-white"
      />
      {subtitle && (
        <FadeIn delay={0.3}>
          <div className={`mt-4 flex flex-col items-${align === "center" ? "center" : "start"} gap-3`}>
            <div className="w-8 h-[2px] bg-teal rounded-full" />
            <p className="text-lg md:text-xl text-body-text max-w-2xl">
              {subtitle}
            </p>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
