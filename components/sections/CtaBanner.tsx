"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function CtaBanner() {
  return (
    <section className="relative py-16 md:py-40 overflow-hidden bg-gradient-to-b from-[#050505] via-teal/[0.06] to-[#050505]">
      {/* Dual ambient glow — teal atmosphere + warm yellow near CTAs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-teal/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <TextReveal
          text="LASSEN SIE UNS GEMEINSAM IDEEN ZUM LEBEN ERWECKEN."
          as="h2"
          className="text-2xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05]"
        />

        <FadeIn delay={0.3}>
          <p className="mt-8 text-body-text text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Ich bin Ihr Sparring-Partner für die Verwirklichung Ihrer Visionen —
            von Grafik- und Designaufgaben über Foto- und Videoproduktion bis
            hin zur Betreuung Ihrer Social-Media-Kanäle.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton href="/kontakt">Projekt starten</MagneticButton>
            <Button href="/abo" variant="secondary">
              Abo konfigurieren
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
