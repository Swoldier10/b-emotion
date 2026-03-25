import type { Metadata } from "next";
import { UeberMichPage } from "./UeberMichPage";

export const metadata: Metadata = {
  title: "Uber mich | b-emotion — Marc Baumann",
  description:
    "Marc Baumann — Polygraf EFZ, Marketing-Experte und Grunder von b-emotion. Personliche Marketing-Betreuung fur Schweizer KMU seit 2021.",
  alternates: { canonical: "/ueber-mich" },
  openGraph: {
    title: "Uber mich | b-emotion — Marc Baumann",
    description:
      "Marc Baumann — Polygraf EFZ, Marketing-Experte und Grunder von b-emotion. Personliche Marketing-Betreuung fur Schweizer KMU seit 2021.",
  },
};

export default function Page() {
  return <UeberMichPage />;
}
