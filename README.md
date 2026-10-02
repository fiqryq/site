# fiqry.dev

Personal site of Fiqry Choerudin, built with [Astro](https://astro.build) and plain CSS.

## Develop

```bash
bun install
bun run dev
```

`bun run build` type-checks and builds to `dist/`. `bun run deploy` publishes it to Cloudflare.

## Content

- **Log:** add `src/content/log/log-NNN.md` with `slug`, `title`, `description` and `wordCount` in the frontmatter.
- **Works / skills:** add an entry to `src/content/works.json` or `src/content/skills.json`.
