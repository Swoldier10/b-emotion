import type { Metadata } from "next";
import { KontaktPage } from "./KontaktPage";

export const metadata: Metadata = {
  title: "Kontakt | b-emotion — Projekt starten",
  description:
    "Kontaktieren Sie b-emotion für Ihr nächstes Marketing-Projekt. Persönliche Beratung, schnelle Antwort. Telefon, E-Mail oder WhatsApp.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | b-emotion — Projekt starten",
    description:
      "Kontaktieren Sie b-emotion für Ihr nächstes Marketing-Projekt. Persönliche Beratung, schnelle Antwort.",
  },
};

export default function Page() {
  return <KontaktPage />;
}
