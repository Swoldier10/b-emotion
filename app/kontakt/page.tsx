import type { Metadata } from "next";
import { KontaktPage } from "./KontaktPage";

export const metadata: Metadata = {
  title: "Kontakt | b-emotion — Projekt starten",
  description:
    "Kontaktieren Sie b-emotion fur Ihr nachstes Marketing-Projekt. Personliche Beratung, schnelle Antwort. Telefon, E-Mail oder WhatsApp.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | b-emotion — Projekt starten",
    description:
      "Kontaktieren Sie b-emotion fur Ihr nachstes Marketing-Projekt. Personliche Beratung, schnelle Antwort.",
  },
};

export default function Page() {
  return <KontaktPage />;
}
