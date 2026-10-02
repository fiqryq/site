# fiqry.dev

Personal site and writing for Fiqry Choerudin.

## Stack

- **[Astro](https://astro.build)**: a static site with no UI framework. Pages and components are `.astro` files.
- **Plain CSS**: global design tokens are in `src/styles/global.css`, and each component has its own scoped `<style>`.
- **Content collections**: posts are Markdown files in `src/content/writing/`, validated by the schema in `src/content.config.ts`.
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

## Writing a post

Add a Markdown file to `src/content/writing/`. The file name becomes the URL (`/writing/<file-name>`).

```md
---
title: "Post title"
description: "One-line summary shown under the title."
words: 1030
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

## Structure

```
src/
├── pages/                  # routes
│   ├── index.astro          # homepage
│   ├── writing/[slug].astro # blog post page
│   ├── 404.astro
│   └── sitemap.xml.ts       # generated sitemap
├── layouts/BaseLayout.astro # <head>, SEO meta, fonts, footer
├── components/             # toolbar, table of contents, prose styles, icons
├── content/writing/        # blog posts (.md)
├── content.config.ts       # content collection schema
├── lib/                    # post helpers, Shiki transformers
├── assets/fonts/           # self-hosted fonts (served via the Fonts API)
└── styles/global.css       # design tokens + base styles
```
