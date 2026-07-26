import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { cn } from 'cnfast'
import { Array as Arr, Effect, Either, Option } from 'effect'
import { useEffect, useState } from 'react'

import { adjacentWritings, getWriting, getWritingBySlug } from '#/content/writing/writings'

export const Route = createFileRoute('/writing/$slug')({
  loader: ({ params }) => {
    const result = Effect.runSync(Effect.either(getWriting(params.slug)))
    if (Either.isLeft(result)) throw notFound()

    const writing = result.right
    return {
      slug: writing.slug,
      title: writing.title,
      description: writing.description,
      words: writing.words,
    }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
        { title: `${loaderData.title} — Fiqry Choerudin` },
        { name: 'description', content: loaderData.description },
      ]
      : [],
  }),
  component: WritingPage,
  notFoundComponent: NotFound,
})

interface Section {
  id: string
  text: string
  subs: Array<{ id: string; text: string }>
}

function buildSections(tableOfContents: Array<{ depth: number; text: string; id: string }>) {
  return Arr.reduce(tableOfContents, [] as Section[], (sections, heading) => {
    if (heading.depth === 2) {
      return [...sections, { id: heading.id, text: heading.text, subs: [] }]
    }
    const last = Arr.last(sections)
    if (Option.isNone(last)) return sections
    const rest = sections.slice(0, -1)
    return [...rest, { ...last.value, subs: [...last.value.subs, { id: heading.id, text: heading.text }] }]
  })
}

function computeActiveId(targets: HTMLElement[], offset: number): Effect.Effect<string | null> {
  return Effect.sync(() => {
    let current: string | null = null
    for (const el of targets) {
      if (el.getBoundingClientRect().top <= offset) {
        current = el.id
      } else {
        break
      }
    }

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    if (atBottom) {
      return Arr.last(targets).pipe(
        Option.map((el) => el.id),
        Option.getOrElse(() => current),
      )
    }

    return current
  })
}

function useActiveHeading(headingIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const ids = headingIds.join(',')

  useEffect(() => {
    const targets = ids
      .split(',')
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (targets.length === 0) return

    const offset = 96
    const update = () => setActiveId(Effect.runSync(computeActiveId(targets, offset)))

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids])

  return activeId
}

function WritingPage() {
  const writing = Route.useLoaderData()
  const { prev, next } = adjacentWritings(writing.slug)
  const prevWriting = Option.getOrNull(prev)
  const nextWriting = Option.getOrNull(next)
  const current = Option.getOrNull(getWritingBySlug(writing.slug))
  const Content = current?.Content
  const sections = current ? buildSections(current.tableOfContents) : []
  const activeId = useActiveHeading(current?.tableOfContents.map((h) => h.id) ?? [])

  return (
    <div className="relative mx-auto max-w-screen-2xl px-6 sm:px-12">
      <aside className="absolute inset-y-0 left-0 hidden w-56 xl:block">
        <div className="sticky top-0">
          <span className="fig-label py-4 block text-accent">Content</span>
          <ul className="space-y-4">
            {sections.map((section, i) => {
              const isSectionActive =
                section.id === activeId || section.subs.some((sub) => sub.id === activeId)
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={cn(
                      'block font-pixel-square text-[0.688rem] uppercase',
                      isSectionActive ? 'text-accent underline' : 'text-foreground hover:text-accent',
                    )}
                  >
                    {(i + 1).toString().padStart(2, '0')}. {section.text}
                  </a>
                  {section.subs.length > 0 && (
                    <ul className="mt-2 space-y-0">
                      {section.subs.map((sub) => (
                        <li
                          key={sub.id}
                          className={cn(
                            'text-xs leading-6 font-serif list-disc list-inside normal-case underline-offset-2 decoration-accent/40 decoration-1 [text-decoration-skip-ink:all] hover:text-accent hover:underline',
                            sub.id === activeId ? 'text-accent underline' : 'text-foreground',
                          )}
                        >
                          <a href={`#${sub.id}`}>{sub.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </aside>

      <div className="mx-auto max-w-2xl">
        <div className="sticky top-0 z-10 flex items-center gap-2 bg-background py-4">
          <Link to="/" className="fig-label hover:text-accent">
            ‹
          </Link>
          <span className="fig-label">
            writings / {writing.title}
          </span>
        </div>

        <div className="divider-dotted my-8" />

        <div className="text-center">
          <p className="fig-label">
            {writing.words} · FIQRY CHOERUDIN
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-foreground">
            {writing.title}
          </h1>
          {writing.description && (
            <p className="mt-3 font-serif text-sm leading-5 text-muted">{writing.description}</p>
          )}
        </div>

        <div className="prose-writing mt-12">{Content && <Content />}</div>

        <div className="mt-6 flex justify-between gap-4">
          {prevWriting ? (
            <Link
              to="/writing/$slug"
              params={{ slug: prevWriting.slug }}
              className="fig-label hover:text-accent"
            >
              ‹ {prevWriting.title}
            </Link>
          ) : (
            <span />
          )}
          {nextWriting ? (
            <Link
              to="/writing/$slug"
              params={{ slug: nextWriting.slug }}
              className="fig-label hover:text-accent"
            >
              {nextWriting.title} ›
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-12">
      <span className="fig-label">404</span>
      <h1 className="mt-3 font-serif text-2xl text-foreground">Writing not found.</h1>
      <Link to="/" className="fig-label mt-4 inline-block hover:text-accent">
        ‹ Back home
      </Link>
    </section>
  )
}
