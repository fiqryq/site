import { type CollectionEntry, getCollection } from 'astro:content'

export type Writing = CollectionEntry<'writing'>

/** All posts, in display order. */
export async function getWritings(): Promise<Writing[]> {
  const writings = await getCollection('writing')
  return writings.sort((a, b) => a.data.title.localeCompare(b.data.title))
}

export function formatWords(count: number): string {
  return count < 1000 ? `${count} words` : `${(count / 1000).toFixed(1)}k words`
}
