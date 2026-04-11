import type { Metadata } from "next";
import { KontaktPage } from "../kontakt/KontaktPage";

export const metadata: Metadata = {
  title: "Abo-Modelle | b-emotion — Flexibles Marketing-Abo",
  description:
    "Flexibles Marketing-Abo für Schweizer KMU. Wählen Sie die Leistungen, die Sie benötigen — ohne Mindestlaufzeit. Jetzt Abo konfigurieren.",
  alternates: { canonical: "/abo" },
  openGraph: {
    title: "Abo-Modelle | b-emotion — Flexibles Marketing-Abo",
    description:
      "Flexibles Marketing-Abo für Schweizer KMU. Wählen Sie die Leistungen, die Sie benötigen — ohne Mindestlaufzeit.",
  },
};

export default function Page() {
  return <KontaktPage />;
}
