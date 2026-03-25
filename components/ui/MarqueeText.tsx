"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
  text?: string;
  className?: string;
}

export function MarqueeText({
  text = "GRAFIK \u2022 DESIGN \u2022 FOTO \u2022 VIDEO \u2022 SOCIAL MEDIA \u2022 WEBSITES \u2022 BERATUNG \u2022 STRATEGIE \u2022 ",
  className = "",
}: MarqueeTextProps) {
  return (
    <div
      className={`overflow-hidden py-8 md:py-10 border-y border-teal/[0.08] ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wider text-primary/20 mr-2"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
