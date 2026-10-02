import { type CollectionEntry, getCollection } from 'astro:content'

/** Collections rendered as link rows on the home page. */
export type ShowcaseCollection = 'projects' | 'skills'

export type ShowcaseItem = CollectionEntry<ShowcaseCollection>

/** Items in their curated display order. */
export async function getShowcase(collection: ShowcaseCollection): Promise<ShowcaseItem[]> {
  const items = await getCollection(collection)
  return items.sort((a, b) => a.data.order - b.data.order)
}
