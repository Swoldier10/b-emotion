import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { MobileCTA } from "@/components/ui/MobileCTA";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "b-emotion | Content, Grafik & Digital fur KMU",
  description:
    "b-emotion steht fur Grafik & Design, Foto & Video, Social Media Management, Marketing-Beratung, Newsletter-Erstellung. Online und offline. Auch im Abo.",
  metadataBase: new URL("https://b-emotion.ch"),
  alternates: {
    canonical: "/",
    languages: { "de-CH": "/" },
  },
  openGraph: {
    title: "b-emotion | Content, Grafik & Digital fur KMU",
    description:
      "b-emotion steht fur Grafik & Design, Foto & Video, Social Media Management, Marketing-Beratung, Newsletter-Erstellung. Online und offline. Auch im Abo.",
    url: "https://b-emotion.ch",
    siteName: "b-emotion",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "b-emotion | Content, Grafik & Digital fur KMU",
    description:
      "Grafik & Design, Foto & Video, Social Media, Marketing-Beratung — alles aus einer Hand. Auch im Abo.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "b-emotion",
    description:
      "Content, Grafik & Digital — Marketing-Agentur fur KMU in der Schweiz",
    url: "https://b-emotion.ch",
    telephone: "+41765646273",
    email: "mail@b-emotion.ch",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bettenstrasse 19",
      addressLocality: "Arnegg",
      postalCode: "9212",
      addressRegion: "SG",
      addressCountry: "CH",
    },
    founder: {
      "@type": "Person",
      name: "Marc Baumann",
    },
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    sameAs: [
      "https://www.instagram.com/b_emotion.ch/",
      "https://www.facebook.com/bemotion.ch",
      "https://www.linkedin.com/company/b-emotion",
      "https://www.youtube.com/@b-emotion",
    ],
  };

  return (
    <html lang="de-CH" className={`${nunitoSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-page">
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileCTA />
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
