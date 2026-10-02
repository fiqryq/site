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

/** The entry's number from its file name: `log-001.md` → `001`. */
export function getLogEntryNumber(entry: LogEntry): string {
  const match = /log-(\d+)\.md$/.exec(entry.filePath ?? '')
  if (!match?.[1]) throw new Error(`Log entry "${entry.id}" must be named log-NNN.md`)
  return match[1]
}

export function getLogEntryUrl(entry: LogEntry): string {
  return `/log/${entry.id}`
}

export function formatWordCount(count: number): string {
  return count < 1000 ? `${count} words` : `${(count / 1000).toFixed(1)}k words`
}
