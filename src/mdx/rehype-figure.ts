import type { Element, Root } from 'hast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

const CAPTION = /caption="([^"]*)"/

// Wraps fenced code blocks that carry a `caption="…"` meta in a
// <figure>/<figcaption> pair, so they render as numbered paper-style figures:
//
//   ```bash caption="Switching profiles"
//
// Must run before rehype-lumis, which replaces the <pre> node itself.
const rehypeFigure: Plugin<[], Root> = () => (tree: Root) => {
  visit(tree, 'element', (node, index, parent) => {
    if (node.tagName !== 'pre' || !parent || typeof index !== 'number') return
    if (parent.type === 'element' && parent.tagName === 'figure') return

    const [codeEl] = node.children
    if (!codeEl || codeEl.type !== 'element' || codeEl.tagName !== 'code') return

    const meta = (codeEl.data as { meta?: string } | undefined)?.meta
    const caption = meta ? CAPTION.exec(meta)?.[1] : undefined
    if (!caption) return

    const figure: Element = {
      type: 'element',
      tagName: 'figure',
      properties: {},
      children: [
        node,
        {
          type: 'element',
          tagName: 'figcaption',
          properties: {},
          children: [{ type: 'text', value: caption }],
        },
      ],
    }
    parent.children[index] = figure
  })
}

export default rehypeFigure
