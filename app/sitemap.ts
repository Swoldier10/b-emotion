import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { clientProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://b-emotion.ch";

  const staticRoutes = [
    { route: "", priority: 1 },
    { route: "/angebot", priority: 0.9 },
    { route: "/projekte", priority: 0.9 },
    { route: "/kontakt", priority: 0.9 },
    { route: "/ueber-mich", priority: 0.8 },
    { route: "/referenzen", priority: 0.7 },
    { route: "/impressum", priority: 0.3 },
    { route: "/datenschutz", priority: 0.3 },
    { route: "/agb", priority: 0.3 },
  ];

  const serviceRoutes = services.map((s) => ({
    route: `/angebot/${s.slug}`,
    priority: 0.8,
  }));

  const projectRoutes = clientProjects.map((cp) => ({
    route: `/projekte/${cp.slug}`,
    priority: 0.7,
  }));

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes];

  return allRoutes.map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));
}
