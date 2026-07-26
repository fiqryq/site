import { Link, createFileRoute } from '@tanstack/react-router'

import { writings } from '#/content/writing/writings'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-12">
        <h1 className="font-pixel-square text-4xl tracking-wide text-accent sm:text-5xl">
          Fiqry Choerudin
        </h1>
        <h2 className="fig-label mt-3 mb-4">Frontend Engineer</h2>

        <p className="max-w-2xl font-serif text-base leading-loose tracking-wide text-foreground">
          Software Engineer based in Indonesia, currently at Kitabisa. I mainly work with React and
          enjoy building web applications. I spend my free time experimenting with side projects on
          GitHub and fine-tuning my Neovim setup.
        </p>

        <div className="divider-dotted mt-8" />
      </section>

      <section className="mx-auto max-w-screen-2xl px-6 pb-16 sm:px-12">
        <div className="flex items-end gap-4">
          <div>
            <span className="fig-label block">v1.0</span>
            <h2 className="font-serif text-xl text-foreground">writings.</h2>
          </div>
          <div className="leader-dots hidden sm:block" />
          <span className="fig-label whitespace-nowrap">
            {writings.length.toString().padStart(2, '0')} {writings.length === 1 ? 'POST' : 'POSTS'}
          </span>
        </div>

        <ol className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2">
          {writings.map((post, i) => (
            <li key={post.slug} className="flex items-baseline gap-2 border-border py-3">
              <span className="fig-label">{(i + 1).toString().padStart(2, '0')}</span>
              <Link
                to="/writing/$slug"
                params={{ slug: post.slug }}
                className="whitespace-nowrap font-serif text-sm text-foreground hover:text-accent"
              >
                {post.title}
              </Link>
              <span className="leader-dots" />
              <span className="fig-label whitespace-nowrap">{post.words}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
