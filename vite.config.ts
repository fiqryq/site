import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import mdx from '@mdx-js/rollup'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from 'rehype-slug'

import rehypeLumis from './src/mdx/rehype-lumis'
import remarkToc from './src/mdx/remark-toc'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkToc],
        rehypePlugins: [rehypeSlug, rehypeLumis],
      }),
    },
    tanstackStart(),
    viteReact({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
})

export default config
