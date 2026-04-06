import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clientProjects } from "@/lib/projects";
import { ClientDetailPage } from "./ClientDetailPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return clientProjects.map((cp) => ({
    slug: cp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = clientProjects.find((cp) => cp.slug === slug);
  if (!client) return {};

  return {
    title: `${client.client} | b-emotion — Projektübersicht`,
    description: client.description,
    alternates: { canonical: `/projekte/${slug}` },
    openGraph: {
      title: `${client.client} | b-emotion — Projektübersicht`,
      description: client.description,
    },
    twitter: {
      card: "summary",
      title: `${client.client} | b-emotion — Projektübersicht`,
      description: client.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const client = clientProjects.find((cp) => cp.slug === slug);
  if (!client) notFound();

  return <ClientDetailPage client={client} />;
}
