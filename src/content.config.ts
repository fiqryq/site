import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

import { iconNames } from './lib/icons'

const log = defineCollection({
  // Files are named log-001.md, log-002.md, …; the URL comes from the `slug` field.
  loader: glob({ pattern: 'log-*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    wordCount: z.number().int().positive(),
  }),
})

// Projects listed on the home page, in `order`.
const projects = defineCollection({
  loader: file('./src/content/projects.json'),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.enum(iconNames),
    url: z.url(),
    order: z.number().int(),
  }),
})

export const collections = { log, projects }
