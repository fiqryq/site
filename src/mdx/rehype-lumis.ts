import { createHighlighter } from '@lumis-sh/lumis'
import { htmlInline } from '@lumis-sh/lumis/formatters'
import bash from '@lumis-sh/lumis/langs/bash'
import ini from '@lumis-sh/lumis/langs/ini'
import githubLight from '@lumis-sh/themes/github_light'
import type { Element, Root } from 'hast'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic'
import { toString as hastToString } from 'hast-util-to-string'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | undefined

async function getHighlighter() {
  highlighter ??= await createHighlighter({ languages: [bash, ini] })
  return highlighter
}

interface CodeBlock {
  parent: Root | Element
  index: number
  language: string
  source: string
}

const rehypeLumis: Plugin<[], Root> = () => async (tree: Root) => {
  const blocks: CodeBlock[] = []

  visit(tree, 'element', (node, index, parent) => {
    if (node.tagName !== 'pre' || !parent || typeof index !== 'number') return

    const [codeEl] = node.children
    if (!codeEl || codeEl.type !== 'element' || codeEl.tagName !== 'code') return

    const classNames = Array.isArray(codeEl.properties?.className)
      ? (codeEl.properties.className as string[])
      : []
    const languageClass = classNames.find((name) => name.startsWith('language-'))
    if (!languageClass) return

    blocks.push({
      parent: parent as Root | Element,
      index,
      language: languageClass.replace('language-', ''),
      source: hastToString(codeEl),
    })
  })

  if (blocks.length === 0) return

  const hl = await getHighlighter()

  for (const block of blocks) {
    try {
      const html = hl.highlight(
        block.source,
        htmlInline({ language: block.language, theme: githubLight }),
      )
      const fragment = fromHtmlIsomorphic(html, { fragment: true })
      const [highlighted] = fragment.children
      if (highlighted) {
        block.parent.children[block.index] = highlighted as Element
      }
    } catch {
      // Unsupported/unregistered language — leave the original plain code block.
    }
  }
}

export default rehypeLumis
