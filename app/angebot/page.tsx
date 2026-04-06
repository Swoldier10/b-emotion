import type { Metadata } from "next";
import { AngebotPage } from "./AngebotPage";

export const metadata: Metadata = {
  title: "Angebot | b-emotion — Marketing-Leistungen für KMU",
  description:
    "Massgeschneiderte Marketing-Leistungen für Schweizer KMU in Arnegg SG: Beratung, Grafik & Design, Foto & Video, Social Media, Websites und laufende Begleitung. Auch im flexiblen Abo.",
  alternates: { canonical: "/angebot" },
  openGraph: {
    title: "Angebot | b-emotion — Marketing-Leistungen für KMU",
    description:
      "Massgeschneiderte Marketing-Leistungen für Schweizer KMU: Beratung, Grafik & Design, Foto & Video, Social Media, Websites und laufende Begleitung.",
  },
};

export default function Page() {
  return <AngebotPage />;
}
