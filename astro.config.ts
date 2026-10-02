import { defineConfig, fontProviders } from 'astro/config'

import { figureCaption, plainCodeBlock } from './src/lib/shiki-transformers'

export default defineConfig({
  site: 'https://www.fiqry.dev',
  trailingSlash: 'never',
  build: {
    format: 'file',
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
        variants: [{ src: ['./src/assets/fonts/Geist-Variable.woff2'], weight: '100 900' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      fallbacks: ['ui-monospace', 'monospace'],
      options: {
        variants: [{ src: ['./src/assets/fonts/GeistMono-Variable.woff2'], weight: '100 900' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Pixel Square',
      cssVariable: '--font-pixel',
      fallbacks: ['monospace'],
      options: {
        variants: [{ src: ['./src/assets/fonts/GeistPixel-Square.woff2'], weight: 500 }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-serif',
      fallbacks: ['ui-serif', 'Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Newsreader-Variable.woff2'],
            weight: '200 800',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Newsreader-Italic-Variable.woff2'],
            weight: '200 800',
            style: 'italic',
          },
        ],
      },
    },
  ],
})
