import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { cn } from 'cnfast'
import { Array as Arr, Effect, Either, Option } from 'effect'
import { AlignLeft, BookOpen, Check, ChevronLeft, Copy, FileText, Link2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import {
  adjacentWritings,
  getWriting,
  getWritingBySlug,
  writings,
} from '#/content/writing/writings'

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

function useCopied() {
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(null), 1500)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const copy = (key: string, text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(key))
      .catch(() => setCopied(null))
  }

  return { copied, copy }
}

const chip =
  'inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground shadow-xs'

const toolbarButton =
  'inline-flex h-8 items-center gap-1.5 rounded-full border border-border bg-background px-3 text-[13px] text-foreground shadow-xs transition-colors hover:bg-surface'

function WritingPage() {
  const writing = Route.useLoaderData()
  const { prev, next } = adjacentWritings(writing.slug)
  const prevWriting = Option.getOrNull(prev)
  const nextWriting = Option.getOrNull(next)
  const current = Option.getOrNull(getWritingBySlug(writing.slug))
  const Content = current?.Content
  const headings = current?.tableOfContents ?? []
  const activeId = useActiveHeading(headings.map((h) => h.id))
  const articleRef = useRef<HTMLElement>(null)
  const { copied, copy } = useCopied()
  const index = writings.findIndex((w) => w.slug === writing.slug) + 1

  return (
    <div className="mx-auto flex max-w-screen-2xl">
      <aside className="sticky top-0 hidden h-screen w-56 shrink-0 overflow-y-auto border-r border-border px-4 py-6 lg:block">
        <div className="flex items-center gap-2 px-2 text-[13px] font-medium text-foreground">
          <BookOpen className="size-3.5" />
          Writing
        </div>
        <ul className="mt-2 space-y-0.5">
          {writings.map((w) => (
            <li key={w.slug}>
              <Link
                to="/writing/$slug"
                params={{ slug: w.slug }}
                className={cn(
                  'block truncate rounded-md px-2 py-1.5 text-[13px] transition-colors',
                  w.slug === writing.slug
                    ? 'bg-surface text-foreground'
                    : 'text-muted hover:text-foreground',
                )}
              >
                {w.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="min-w-0 flex-1 px-6 pt-8 pb-24 sm:px-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-2">
          <Link to="/" className={toolbarButton}>
            <ChevronLeft className="size-3.5" />
            Back
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={toolbarButton}
              onClick={() => copy('page', articleRef.current?.innerText ?? '')}
            >
              {copied === 'page' ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied === 'page' ? 'Copied' : 'Copy page'}
            </button>
            <button
              type="button"
              aria-label="Copy link"
              className={cn(toolbarButton, 'w-8 justify-center px-0')}
              onClick={() => copy('link', window.location.href)}
            >
              {copied === 'link' ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
            </button>
          </div>
        </div>

        <article id="top" ref={articleRef} className="mx-auto mt-16 max-w-[34rem] scroll-mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className={chip}>
              Writing
              <span className="rounded-full bg-surface px-1.5 text-[11px] text-muted tabular-nums">
                {index}
              </span>
            </span>
            <span className={chip}>
              <FileText className="size-3 text-muted" />
              {writing.words.toLowerCase()}
            </span>
          </div>

          <h1 className="mt-5 text-balance text-xl font-medium tracking-tight text-foreground">
            {writing.title}
          </h1>
          {writing.description && (
            <p className="prose-writing mt-4 text-pretty">{writing.description}</p>
          )}

          <div className="prose-writing mt-4">{Content && <Content />}</div>

          <nav className="mt-16 flex justify-between gap-4 border-t border-border pt-6 text-[13px]">
            {prevWriting ? (
              <Link
                to="/writing/$slug"
                params={{ slug: prevWriting.slug }}
                className="text-muted hover:text-foreground"
              >
                ← {prevWriting.title}
              </Link>
            ) : (
              <span />
            )}
            {nextWriting ? (
              <Link
                to="/writing/$slug"
                params={{ slug: nextWriting.slug }}
                className="text-muted hover:text-foreground"
              >
                {nextWriting.title} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>
      </main>

      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto py-8 pr-6 xl:block">
        <div className="flex items-center gap-2 text-xs text-muted">
          <AlignLeft className="size-3.5" />
          On this page
        </div>
        <ul className="mt-4 space-y-2.5">
          {[{ id: 'top', text: writing.title }, ...headings].map((heading) => {
            const isActive = heading.id === (activeId ?? 'top')
            return (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className={cn(
                    'flex items-center gap-3 text-xs transition-colors',
                    isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-px shrink-0 transition-all',
                      isActive ? 'w-7 bg-foreground' : 'w-3 bg-border',
                    )}
                  />
                  <span className="truncate">{heading.text}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
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
