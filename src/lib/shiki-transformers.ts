import type { ShikiConfig } from 'astro'

type Transformer = NonNullable<ShikiConfig['transformers']>[number]

/** Drops the theme's inline background so the site's CSS styles code blocks. */
export const plainCodeBlock: Transformer = {
  name: 'plain-code-block',
  pre(node) {
    delete node.properties.style
  },
}

const CAPTION = /caption="([^"]*)"/

/**
 * Wraps a fenced code block that carries a `caption="…"` meta in a
 * <figure>/<figcaption> pair, so it renders as a numbered figure:
 *
 *   ```bash caption="Switching profiles"
 */
export const figureCaption: Transformer = {
  name: 'figure-caption',
  root(root) {
    const caption = CAPTION.exec(this.options.meta?.__raw ?? '')?.[1]
    if (!caption) return

    root.children = [
      {
        type: 'element',
        tagName: 'figure',
        properties: {},
        children: [
          ...root.children.filter((node) => node.type === 'element'),
          {
            type: 'element',
            tagName: 'figcaption',
            properties: {},
            children: [{ type: 'text', value: caption }],
          },
        ],
      },
    ]
  },
}
