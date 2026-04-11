"use client";

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
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#050505] via-primary/[0.02] to-[#050505]">
      {/* Gold ambient glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        <SlideUp>
          <p className="text-center text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/50 mb-10 font-medium">
            Kunden, die auf uns setzen
          </p>
        </SlideUp>

        {/* Marquee with fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

          <div className="overflow-hidden" aria-label="Kundenlogos">
            <div
              className="flex whitespace-nowrap items-center"
              style={{ animation: "marquee 30s linear infinite" }}
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-primary/[0.15] to-transparent pointer-events-none" />
    </section>
  );
}
