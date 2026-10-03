import { defineCollection, reference } from 'astro:content'
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
  /** Internal page to link to instead of `url`, e.g. /skills/awwwards-craft. */
  page: z.string().startsWith('/').optional(),
  order: z.number().int(),
})

// A skill's own page: an intro plus install and usage steps.
const guideStep = z.object({
  text: z.string(),
  /** Shown in a code block with a copy button. */
  commands: z.array(z.string()).optional(),
  /** An example prompt, shown as a quote. */
  quote: z.string().optional(),
})

const works = defineCollection({
  loader: file('./src/content/works.json'),
  schema: showcaseSchema,
})

const skills = defineCollection({
  loader: file('./src/content/skills.json'),
  schema: showcaseSchema.extend({
    intro: z.string().optional(),
    guide: z.array(guideStep).default([]),
    /** How /examples shows: a scrolling row of cards, or full-width screenshots. */
    examplesLayout: z.enum(['cards', 'screenshots']).default('cards'),
  }),
})

// Things built with a skill, shown on /skills/<skill> in `order`.
// Images are paths relative to the JSON file, e.g. "../assets/images/examples/foo.png".
// With a `video`, the image becomes its poster frame.
const examples = defineCollection({
  loader: file('./src/content/examples.json'),
  schema: ({ image }) =>
    z.object({
      skill: reference('skills'),
      name: z.string(),
      url: z.url().optional(),
      image: image().optional(),
      video: z.url().optional(),
      order: z.number().int(),
    }),
})

export const collections = { log, works, skills, examples }
