"use client";

import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FadeIn } from "@/components/animations/FadeIn";

export function AngebotPage() {
  return (
    <>
      <PageHero
        title="ANGEBOT"
        subtitle="Massgeschneiderte Losungen fur Ihr Marketing."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Angebot" }]}
      />
      <ServicesGrid showHeading={false} />
      <FadeIn className="text-center pb-20">
        <MagneticButton href="/abo">Jetzt Abo konfigurieren</MagneticButton>
      </FadeIn>
      <CtaBanner />
    </>
  );
}
