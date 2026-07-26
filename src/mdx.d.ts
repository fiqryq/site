declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const frontmatter: {
    title: string
    description: string
    words: number
  }

  export const tableOfContents: Array<{
    depth: number
    text: string
    id: string
  }>

  const MDXComponent: ComponentType
  export default MDXComponent
}
