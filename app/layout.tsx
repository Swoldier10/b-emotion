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
  title: "b-emotion | Content, Grafik & Digital für KMU",
  description:
    "b-emotion steht für Grafik & Design, Foto & Video, Social Media Management, Marketing-Beratung, Newsletter-Erstellung. Online und offline. Auch im Abo.",
  metadataBase: new URL("https://b-emotion.ch"),
  alternates: {
    canonical: "/",
    languages: { "de-CH": "/" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "b-emotion | Content, Grafik & Digital für KMU",
    description:
      "b-emotion steht für Grafik & Design, Foto & Video, Social Media Management, Marketing-Beratung, Newsletter-Erstellung. Online und offline. Auch im Abo.",
    url: "https://b-emotion.ch",
    siteName: "b-emotion",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "b-emotion — Content, Grafik & Digital für KMU in der Schweiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "b-emotion | Content, Grafik & Digital für KMU",
    description:
      "Grafik & Design, Foto & Video, Social Media, Marketing-Beratung — alles aus einer Hand. Auch im Abo.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "b-emotion",
    description:
      "Content, Grafik & Digital — Marketing-Agentur für KMU in der Schweiz. Grafik & Design, Foto & Video, Social Media, Websites und laufende Begleitung. Alles im flexiblen Abo.",
    url: "https://b-emotion.ch",
    telephone: "+41765646273",
    email: "mail@b-emotion.ch",
    image: "https://b-emotion.ch/og-image.png",
    priceRange: "$$",
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
      jobTitle: "Inhaber & Marketing-Experte",
    },
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing-Leistungen",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beratung" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grafik & Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foto & Video" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Websites / Newsletter" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Begleitung" } },
      ],
    },
    sameAs: [
      "https://www.instagram.com/bemotion9212",
      "https://www.facebook.com/share/1CcowMku7z/",
      "https://www.linkedin.com/company/bemotion9212/",
      "https://www.youtube.com/@b-emotion_9212",
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
