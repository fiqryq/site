import { format, parseISO } from 'date-fns';

export function formatDate(args: string | undefined) {
  const date = args ?? '';
  return format(parseISO(date), 'LLLL d, yyyy');
}
