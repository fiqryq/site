import type { APIRoute } from 'astro'

import { getLogEntries, getLogEntryUrl } from '@/lib/log'

export const GET: APIRoute = async ({ site }) => {
  const entries = await getLogEntries()
  const paths = ['/', '/skills/awwwards-craft', ...entries.map(getLogEntryUrl)]

  const urls = paths
    .map((path) => `  <url>\n    <loc>${new URL(path, site)}</loc>\n  </url>`)
    .join('\n')

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  )
}
