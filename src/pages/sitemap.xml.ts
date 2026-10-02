import type { APIRoute } from 'astro'

import { getWritings } from '@/lib/writing'

export const GET: APIRoute = async ({ site }) => {
  const writings = await getWritings()
  const paths = ['/', ...writings.map((writing) => `/writing/${writing.id}`)]

  const urls = paths
    .map((path) => `  <url>\n    <loc>${new URL(path, site)}</loc>\n  </url>`)
    .join('\n')

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  )
}
