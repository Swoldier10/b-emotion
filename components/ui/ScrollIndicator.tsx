"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-white/60">
        Scroll
      </span>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M10 3L10 17M10 17L4 11M10 17L16 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}
