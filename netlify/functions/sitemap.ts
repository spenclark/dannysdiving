import type { Handler } from "@netlify/functions";

const handler: Handler = async () => {
  const baseUrl = "https://dannysdiving.com";
  const currentDate = new Date().toISOString().split("T")[0];

  // Service slugs must match those defined in the frontend
  const serviceSlugs = [
    "hull-cleaning",
    "underwater-inspections",
    "zinc-changes",
    "mooring-services",
    "lost-item-retrieval",
    "commercial-diving",
  ];

  const pages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/videos", priority: "0.8", changefreq: "weekly" },
    ...serviceSlugs.map((slug) => ({
      url: `/services/${slug}`,
      priority: "0.9",
      changefreq: "monthly",
    })),
    { url: "/privacy", priority: "0.3", changefreq: "yearly" },
    { url: "/terms", priority: "0.3", changefreq: "yearly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
    body: sitemap,
  };
};

export { handler };

