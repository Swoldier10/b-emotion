import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://b-emotion.ch";

  const routes = [
    "",
    "/angebot",
    "/projekte",
    "/ueber-mich",
    "/abo",
    "/referenzen",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/agb",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
