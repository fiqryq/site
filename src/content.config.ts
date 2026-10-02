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

// Link rows on the home page (projects, agent skills), shown in `order`.
const showcaseSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon: z.enum(iconNames),
  url: z.url(),
  order: z.number().int(),
})

const projects = defineCollection({
  loader: file('./src/content/projects.json'),
  schema: showcaseSchema,
})

const skills = defineCollection({
  loader: file('./src/content/skills.json'),
  schema: showcaseSchema,
})

export const collections = { log, projects, skills }
