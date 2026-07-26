# fiqry.dev

Personal site and writing for Fiqry Choerudin.

## Stack

- **[TanStack Start](https://tanstack.com/start)** + Router — file-based routing in `src/routes`
- **Tailwind CSS v4** — design tokens in `src/styles.css`
- **MDX** — posts in `src/content/writing/*.mdx`, with custom remark/rehype plugins for table-of-contents extraction and syntax highlighting ([Lumis](https://lumis.sh))
- **[Effect](https://effect.website)** — content-layer logic (`src/content/writing/writings.ts`, route loaders)
- **Biome** — linting and formatting
- **Cloudflare Workers** — deployment, via `wrangler`

## Getting started

```bash
bun install
bun run dev
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start the dev server |
| `bun run build` | Production build |
| `bun run preview` | Preview the production build |
| `bun run lint` / `format` / `check` | Biome lint / format / both |
| `bun run deploy` | Build and deploy to Cloudflare Workers |

## Structure

```
src/
├── routes/             # pages (file-based routing)
│   ├── index.tsx        # homepage
│   └── writing/$slug.tsx  # blog post layout
├── content/writing/    # blog posts (.mdx) + the content registry
├── components/         # nav, footer
├── mdx/                # remark/rehype plugins for MDX
└── styles.css          # design tokens (colors, fonts) + Tailwind
```
