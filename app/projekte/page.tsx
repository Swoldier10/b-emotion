import type { Metadata } from "next";
import { ProjektePage } from "./ProjektePage";

export const metadata: Metadata = {
  title: "Projekte | b-emotion — Ausgewählte Arbeiten",
  description:
    "Entdecken Sie ausgewählte Projekte von b-emotion: Grafik & Design, Foto, Video, Social Media und Webdesign für Schweizer KMU.",
  alternates: { canonical: "/projekte" },
  openGraph: {
    title: "Projekte | b-emotion — Ausgewählte Arbeiten",
    description:
      "Entdecken Sie ausgewählte Projekte von b-emotion: Grafik & Design, Foto, Video, Social Media und Webdesign für Schweizer KMU.",
  },
};

export default function Page() {
  return <ProjektePage />;
}
