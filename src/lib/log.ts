import { type CollectionEntry, getCollection } from 'astro:content'

export type LogEntry = CollectionEntry<'log'>

/**
 * All log entries, oldest first. Files are named `log-001.md`, `log-002.md`, …
 * so sorting by file path gives publication order.
 */
export async function getLogEntries(): Promise<LogEntry[]> {
  const entries = await getCollection('log')
  return entries.sort((a, b) => (a.filePath ?? '').localeCompare(b.filePath ?? ''))
}

export function getLogEntryUrl(entry: LogEntry): string {
  return `/log/${entry.id}`
}

export function formatWordCount(count: number): string {
  return count < 1000 ? `${count} words` : `${(count / 1000).toFixed(1)}k words`
}
