import { Array as Arr, Data, Effect, Match, Option, Order, pipe } from 'effect'
import type { ComponentType } from 'react'

interface TocEntry {
  depth: number
  text: string
  id: string
}

interface WritingModule {
  default: ComponentType
  frontmatter: {
    title: string
    description: string
    words: number
  }
  tableOfContents: TocEntry[]
}

const modules = import.meta.glob<WritingModule>('./*.mdx', { eager: true })

function formatWords(count: number): string {
  return pipe(
    Match.value(count),
    Match.when(
      (n) => n < 1000,
      (n) => `${n} WORDS`,
    ),
    Match.orElse((n) => `${(n / 1000).toFixed(1)}K WORDS`),
  )
}

export interface Writing {
  slug: string
  title: string
  description: string
  words: string
  tableOfContents: TocEntry[]
  Content: ComponentType
}

export class WritingNotFoundError extends Data.TaggedError('WritingNotFoundError')<{
  slug: string
}> {}

const byTitle = Order.mapInput(Order.string, (writing: Pick<Writing, 'title'>) => writing.title)

export const writings: Writing[] = pipe(
  Object.entries(modules),
  Arr.map(([path, mod]) => {
    const slug = path.replace('./', '').replace('.mdx', '')
    return {
      slug,
      title: mod.frontmatter.title,
      description: mod.frontmatter.description,
      words: formatWords(mod.frontmatter.words),
      tableOfContents: mod.tableOfContents,
      Content: mod.default,
    }
  }),
  Arr.sort(byTitle),
)

export function getWritingBySlug(slug: string): Option.Option<Writing> {
  return Arr.findFirst(writings, (writing) => writing.slug === slug)
}

export function getWriting(slug: string): Effect.Effect<Writing, WritingNotFoundError> {
  return pipe(
    getWritingBySlug(slug),
    Option.match({
      onNone: () => Effect.fail(new WritingNotFoundError({ slug })),
      onSome: (writing) => Effect.succeed(writing),
    }),
  )
}

export function adjacentWritings(slug: string): {
  prev: Option.Option<Writing>
  next: Option.Option<Writing>
} {
  const index = writings.findIndex((writing) => writing.slug === slug)
  return {
    prev: Arr.get(writings, index - 1),
    next: Arr.get(writings, index + 1),
  }
}
