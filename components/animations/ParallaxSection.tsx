"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  offset = 50,
  className = "",
}: ParallaxSectionProps) {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  // Skip parallax on mobile — removes scroll listener overhead
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
