"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  href,
  className = "",
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    x.set(Math.max(-8, Math.min(8, deltaX)));
    y.set(Math.max(-8, Math.min(8, deltaY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass = `inline-flex items-center justify-center font-semibold uppercase tracking-wide bg-primary text-dark px-8 py-3.5 text-sm rounded-full transition-colors duration-300 hover:bg-primary/90 ${className}`;

  const content = href ? (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      className="inline-block"
    >
      {content}
    </motion.div>
  );
}
