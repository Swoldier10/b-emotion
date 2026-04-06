"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export function MobileCTA() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShow(latest > 0.35);
  });

  return (
    <motion.div
      className="fixed bottom-6 left-4 right-4 z-[80] md:hidden will-change-transform"
      initial={{ y: 100, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/kontakt"
        className="flex items-center justify-center w-full bg-primary text-dark font-semibold uppercase text-sm tracking-wide py-4 rounded-full shadow-lg shadow-primary/20"
      >
        Projekt starten
      </Link>
    </motion.div>
  );
}
