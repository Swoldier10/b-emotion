"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const stats = [
  { value: "6", prefix: "", suffix: "+", label: "Leistungen im Paket" },
  { value: "1", prefix: "", suffix: "", label: "Ansprechpartner" },
  { value: "100", prefix: "", suffix: "%", label: "Massgeschneidert" },
  { value: "0", prefix: "", suffix: "", label: "Mindestlaufzeit" },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
}: {
  value: string;
  prefix: string;
  suffix: string;
}) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    if (value === "\u221E") {
      setDisplay("\u221E");
      return;
    }
    const target = parseInt(value);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }
    const duration = 1500;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(target * eased)));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="text-5xl md:text-6xl lg:text-7xl font-black text-white tabular-nums"
    >
      <span className="text-white/40 text-3xl md:text-4xl">{prefix}</span>
      {display}
      <span className="text-teal">{suffix}</span>
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="relative py-20 md:py-28 border-y border-teal/20 overflow-hidden bg-teal/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <p className="mt-3 text-[11px] md:text-xs text-white/60 uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
