import type { Metadata } from "next";
import { AboPage } from "./AboPage";

export const metadata: Metadata = {
  title: "Abo-Modelle | b-emotion — Flexibles Marketing-Abo",
  description:
    "Flexibles Marketing-Abo fur Schweizer KMU. Wahlen Sie die Leistungen, die Sie benotigen — ohne Mindestlaufzeit. Jetzt Abo konfigurieren.",
  openGraph: {
    title: "Abo-Modelle | b-emotion — Flexibles Marketing-Abo",
    description:
      "Flexibles Marketing-Abo fur Schweizer KMU. Wahlen Sie die Leistungen, die Sie benotigen — ohne Mindestlaufzeit.",
  },
};

export default function Page() {
  return <AboPage />;
}
