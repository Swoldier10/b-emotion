import type { Metadata } from "next";
import { KontaktPage } from "../kontakt/KontaktPage";

export const metadata: Metadata = {
  title: "Abo-Modelle | b-emotion — Flexibles Marketing-Abo",
  description:
    "Flexibles Marketing-Abo fur Schweizer KMU. Wahlen Sie die Leistungen, die Sie benotigen — ohne Mindestlaufzeit. Jetzt Abo konfigurieren.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Abo-Modelle | b-emotion — Flexibles Marketing-Abo",
    description:
      "Flexibles Marketing-Abo fur Schweizer KMU. Wahlen Sie die Leistungen, die Sie benotigen — ohne Mindestlaufzeit.",
  },
};

export default function Page() {
  return <KontaktPage defaultTab="abo" />;
}
