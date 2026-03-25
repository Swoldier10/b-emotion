import type { Metadata } from "next";
import { AngebotPage } from "./AngebotPage";

export const metadata: Metadata = {
  title: "Angebot | b-emotion — Marketing-Leistungen fur KMU",
  description:
    "Massgeschneiderte Marketing-Leistungen fur Schweizer KMU in Arnegg SG: Beratung, Grafik & Design, Foto & Video, Social Media, Websites und laufende Begleitung. Auch im flexiblen Abo.",
  alternates: { canonical: "/angebot" },
  openGraph: {
    title: "Angebot | b-emotion — Marketing-Leistungen fur KMU",
    description:
      "Massgeschneiderte Marketing-Leistungen fur Schweizer KMU: Beratung, Grafik & Design, Foto & Video, Social Media, Websites und laufende Begleitung.",
  },
};

export default function Page() {
  return <AngebotPage />;
}
