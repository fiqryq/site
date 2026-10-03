import type { APIRoute } from 'astro'

import { getCollection } from 'astro:content'

import { getLogEntries, getLogEntryUrl } from '@/lib/log'

export const GET: APIRoute = async ({ site }) => {
  const [entries, skills] = await Promise.all([getLogEntries(), getCollection('skills')])
  const skillPages = skills.flatMap((skill) => (skill.data.page ? [skill.data.page] : []))
  const paths = ['/', ...skillPages, ...entries.map(getLogEntryUrl)]

  const urls = paths
    .map((path) => `  <url>\n    <loc>${new URL(path, site)}</loc>\n  </url>`)
    .join('\n')

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  )
}
