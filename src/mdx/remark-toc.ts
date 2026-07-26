import { valueToEstree } from 'estree-util-value-to-estree'
import GithubSlugger from 'github-slugger'
import type { Heading, Root } from 'mdast'
import { toString as mdastToString } from 'mdast-util-to-string'
import type { Plugin } from 'unified'
import { define } from 'unist-util-mdx-define'
import { visit } from 'unist-util-visit'

export interface TocEntry {
  depth: number
  text: string
  id: string
}

// Mirrors rehype-slug's own GithubSlugger usage so ids generated here match
// the ids rehype-slug attaches to the rendered headings.
const remarkToc: Plugin<[], Root> = () => (tree, file) => {
  const slugger = new GithubSlugger()
  const toc: TocEntry[] = []

  visit(tree, 'heading', (node: Heading) => {
    if (node.depth === 2 || node.depth === 3) {
      const text = mdastToString(node)
      toc.push({ depth: node.depth, text, id: slugger.slug(text) })
    }
  })

  define(tree, file, { tableOfContents: valueToEstree(toc) })
}

export default remarkToc
