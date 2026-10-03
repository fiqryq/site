import { defineConfig, fontProviders } from 'astro/config'

import { figureCaption, plainCodeBlock } from './src/lib/shiki-transformers'

export default defineConfig({
  site: 'https://fiqry.dev',
  trailingSlash: 'never',
  build: {
    format: 'file',
    // Inline all CSS: no render-blocking stylesheet request before first paint.
    inlineStylesheets: 'always',
  },
  // Keep in sync with public/_redirects (used by Cloudflare for real 301s).
  redirects: {
    '/writing/how-i-setup-my-terminal': '/log/ai-coding-agents-from-the-terminal',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      transformers: [plainCodeBlock, figureCaption],
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Geist',
      cssVariable: '--font-sans',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [{ src: ['./src/assets/fonts/geist-variable.woff2'], weight: '100 900' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      fallbacks: ['ui-monospace', 'monospace'],
      options: {
        variants: [{ src: ['./src/assets/fonts/geist-mono-variable.woff2'], weight: '100 900' }],
      },
    },
  ],
})
