import type { Metadata } from "next";
import { ProjektePage } from "./ProjektePage";

export const metadata: Metadata = {
  title: "Projekte | b-emotion — Ausgewahlte Arbeiten",
  description:
    "Entdecken Sie ausgewahlte Projekte von b-emotion: Grafik & Design, Foto, Video, Social Media und Webdesign fur Schweizer KMU.",
  alternates: { canonical: "/projekte" },
  openGraph: {
    title: "Projekte | b-emotion — Ausgewahlte Arbeiten",
    description:
      "Entdecken Sie ausgewahlte Projekte von b-emotion: Grafik & Design, Foto, Video, Social Media und Webdesign fur Schweizer KMU.",
  },
};

export default function Page() {
  return <ProjektePage />;
}
