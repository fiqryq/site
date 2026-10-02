import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

const log = defineCollection({
  // Files are named log-001.md, log-002.md, …; the URL comes from the `slug` field.
  loader: glob({ pattern: 'log-*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    wordCount: z.number().int().positive(),
  }),
})

// Link rows on the home page (works, skills), shown in `order`.
const showcaseSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.url(),
  order: z.number().int(),
})

const works = defineCollection({
  loader: file('./src/content/works.json'),
  schema: showcaseSchema,
})

const skills = defineCollection({
  loader: file('./src/content/skills.json'),
  schema: showcaseSchema,
})

export const collections = { log, works, skills }
