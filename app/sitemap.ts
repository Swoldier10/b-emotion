import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { clientProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://b-emotion.ch";

  const staticRoutes = [
    { route: "", priority: 1, lastModified: "2025-04-01" },
    { route: "/angebot", priority: 0.9, lastModified: "2025-03-15" },
    { route: "/projekte", priority: 0.9, lastModified: "2025-03-15" },
    { route: "/kontakt", priority: 0.9, lastModified: "2025-03-01" },
    { route: "/abo", priority: 0.9, lastModified: "2025-03-01" },
    { route: "/ueber-mich", priority: 0.8, lastModified: "2025-03-01" },
    { route: "/referenzen", priority: 0.7, lastModified: "2025-03-01" },
    { route: "/impressum", priority: 0.3, lastModified: "2025-01-01" },
    { route: "/datenschutz", priority: 0.3, lastModified: "2025-01-01" },
    { route: "/agb", priority: 0.3, lastModified: "2025-01-01" },
  ];

  const serviceRoutes = services.map((s) => ({
    route: `/angebot/${s.slug}`,
    priority: 0.8,
    lastModified: "2025-03-15",
  }));

  const projectRoutes = clientProjects.map((cp) => ({
    route: `/projekte/${cp.slug}`,
    priority: 0.7,
    lastModified: "2025-03-15",
  }));

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes];

  return allRoutes.map(({ route, priority, lastModified }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(lastModified),
    changeFrequency: "weekly" as const,
    priority,
  }));
}
