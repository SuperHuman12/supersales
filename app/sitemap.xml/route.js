import { readFile } from 'fs/promises';

const URL = "https://notionbear.com";

async function loadIntegrations() {
    try {
        const file = await readFile(process.cwd() + '/public/data/integrations.json', 'utf8');
        const data = JSON.parse(file);
        return data.integrations;
    } catch (error) {
        console.error("Failed to load integrations", error);
        return [];
    }
}

function generateSiteMap(integrations) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!--Manually set URLs we know already-->
  <url>
    <loc>${URL}</loc>
  </url>
  <url>
    <loc>${URL}/integration</loc>
  </url>
  <url>
    <loc>${URL}/pricing</loc>
  </url>
  <url>
  <loc>${URL}/affiliate</loc>
</url>
  <url>
    <loc>${URL}/template</loc>
  </url>
  ${integrations
            .map(({ href }) => {
                return `
        <url>
            <loc>${URL}${href}</loc>
        </url>
      `;
            })
            .join("")}
</urlset>
`;
}

export async function GET() {
    const integrations = await loadIntegrations();
    const body = generateSiteMap(integrations);

    return new Response(body, {
        status: 200,
        headers: {
            "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
            "Content-Type": "application/xml",
        },
    });
}
