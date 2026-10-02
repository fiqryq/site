# fiqry.dev

Personal site and writing for Fiqry Choerudin.

## Stack

- **[Astro](https://astro.build)**: a static site with no UI framework. Pages and components are `.astro` files.
- **Plain CSS**: global design tokens are in `src/styles/global.css`, and each component has its own scoped `<style>`.
- **Content collections**: log entries are Markdown files in `src/content/log/`, validated by the schema in `src/content.config.ts`.
- **Shiki**: Astro's built-in syntax highlighting. Custom transformers live in `src/lib/shiki-transformers.ts`.
- **Astro Fonts API**: self-hosted fonts in `src/assets/fonts/`, configured in `astro.config.ts`.
- **Biome**: linting and formatting.
- **Cloudflare Workers**: deployment as static assets, via `wrangler`.

## Getting started

```bash
bun install
bun run dev
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start the dev server |
| `bun run build` | Type-check (`astro check`), then build to `dist/` |
| `bun run preview` | Preview the production build |
| `bun run check` | Type-check `.astro` and `.ts` files |
| `bun run lint` / `format` | Biome lint / format |
| `bun run deploy` | Build and deploy to Cloudflare Workers |

## Writing a log entry

Add the next numbered file to `src/content/log/`: `log-001.md`, `log-002.md`, … Entries are listed in file order. The `slug` sets the URL (`/log/<slug>`).

```md
---
slug: short-readable-url
title: "Entry title"
description: "One-line summary shown under the title."
wordCount: 1030
---

## A section

Body text…
```

To show a code block as a numbered figure ("Fig. 1"), give it a caption:

````md
```bash caption="One command rebuilds the whole machine."
hms personal
```
````

## Naming conventions

| What | Convention | Example |
|---|---|---|
| Components and layouts | PascalCase | `TableOfContents.astro` |
| Pages, routes, lib modules | kebab-case | `sitemap.xml.ts`, `shiki-transformers.ts` |
| Log entries | `log-NNN.md` | `log-001.md` |
| Assets (fonts, images) | kebab-case | `geist-mono-variable.woff2` |
| CSS custom properties | `--group-name` | `--color-muted`, `--font-serif` |

Old URLs are redirected in both `public/_redirects` (Cloudflare, real 301s) and `redirects` in `astro.config.ts` (dev/preview). Keep them in sync.

## Structure

```
src/
├── pages/                  # routes
│   ├── index.astro          # homepage
│   ├── log/[slug].astro     # log entry page
│   ├── 404.astro
│   └── sitemap.xml.ts       # generated sitemap
├── layouts/BaseLayout.astro # <head>, SEO meta, fonts, footer
├── components/             # toolbar, table of contents, prose styles, icons
├── content/log/            # log entries (log-001.md, log-002.md, …)
├── content.config.ts       # content collection schema
├── lib/                    # log helpers, Shiki transformers
├── assets/fonts/           # self-hosted fonts (served via the Fonts API)
└── styles/global.css       # design tokens + base styles
```
