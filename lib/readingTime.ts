import word from 'reading-time';

export function readingTime(content: string) {
  const rt = word(content);
  return rt.text;
}

export function wordCounter(content: string) {
  const rt = word(content);
  return rt.words;
}
