"use client";

import { motion } from "framer-motion";
import { SlideUp } from "@/components/animations/SlideUp";

const clients = [
  "Folienzuschnitt.ch",
  "VinoDiverso",
  "Vinato",
  "GRUEBLEREI",
  "Signvision Werbetechnik AG",
];

export function ClientLogos() {
  const allClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#050505]">
      <div className="relative z-10">
        <SlideUp>
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-white/30 mb-10 font-medium">
            Vertraut von
          </p>
        </SlideUp>

        {/* Marquee with fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

          <div className="overflow-hidden" aria-label="Kundenlogos">
            <motion.div
              className="flex whitespace-nowrap items-center"
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {allClients.map((client, i) => (
                <div
                  key={i}
                  className="inline-flex items-center justify-center mx-10 md:mx-16"
                >
                  <span
                    className="text-lg md:text-2xl font-black whitespace-nowrap cursor-default uppercase tracking-wider bg-gradient-to-r from-teal to-primary bg-clip-text text-transparent opacity-50 hover:opacity-90 transition-opacity duration-500"
                  >
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
