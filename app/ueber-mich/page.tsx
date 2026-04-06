import type { Metadata } from "next";
import { UeberMichPage } from "./UeberMichPage";

export const metadata: Metadata = {
  title: "Über mich | b-emotion — Marc Baumann",
  description:
    "Marc Baumann — Polygraf EFZ, Marketing-Experte und Gründer von b-emotion. Persönliche Marketing-Betreuung für Schweizer KMU seit 2021.",
  alternates: { canonical: "/ueber-mich" },
  openGraph: {
    title: "Über mich | b-emotion — Marc Baumann",
    description:
      "Marc Baumann — Polygraf EFZ, Marketing-Experte und Gründer von b-emotion. Persönliche Marketing-Betreuung für Schweizer KMU seit 2021.",
  },
};

export default function Page() {
  return <UeberMichPage />;
}
