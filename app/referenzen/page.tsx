import type { Metadata } from "next";
import { ReferenzenPage } from "./ReferenzenPage";

export const metadata: Metadata = {
  title: "Referenzen | b-emotion — Kundenstimmen",
  description:
    "Was Kunden uber b-emotion sagen. Erfahrungsberichte und Referenzen von Schweizer KMU, die auf b-emotion vertrauen.",
  openGraph: {
    title: "Referenzen | b-emotion — Kundenstimmen",
    description:
      "Was Kunden uber b-emotion sagen. Erfahrungsberichte und Referenzen von Schweizer KMU.",
  },
};

export default function Page() {
  return <ReferenzenPage />;
}
