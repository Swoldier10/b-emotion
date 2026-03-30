import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { ServiceDetailPage } from "./ServiceDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/angebot/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
    twitter: {
      card: "summary",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
