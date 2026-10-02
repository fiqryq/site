import { type CollectionEntry, getCollection } from 'astro:content'

export type Project = CollectionEntry<'projects'>

/** Projects in their curated display order. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects')
  return projects.sort((a, b) => a.data.order - b.data.order)
}
