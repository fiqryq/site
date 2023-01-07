import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/formatDate';
import { readingTime as time, wordCounter } from '@/lib/readingTime';
import { ArticleCardProps } from '@/types/article';

const Card: React.FC<ArticleCardProps> = ({
  title,
  description,
  banner,
  tag,
  date,
  url = '',
  readingTime
}) => {
  const tagToArrays = tag?.split(',');
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border-[1px] border-zinc-100 dark:border-zinc-800">
      <div className="relative flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={banner}
          alt={title}
          width={300}
          height={300}
        />
        <div className="absolute bottom-0 grid w-full grid-cols-4 gap-3 px-6 py-3 text-sm font-medium text-zinc-600">
          {tagToArrays?.map((cat, idx) => (
            <div
              key={idx}
              className="cursor-pointer rounded-md bg-zinc-50/90 text-center font-serif text-xs text-zinc-600"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-zinc-900">
        <div className="flex-1">
          <Link href={url} className="mt-1 block">
            <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {title}
            </p>
            <p className="mt-3 font-serif text-sm font-semibold text-zinc-500 dark:text-zinc-100">
              {formatDate(date)}
            </p>
            <div className="flex items-center space-x-2">
              <div className="mt-1 flex items-center space-x-1 font-serif text-sm text-zinc-500 dark:text-zinc-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{time(readingTime)}</span>
              </div>
              <div className="mt-1 flex items-center space-x-1 font-serif text-sm text-zinc-500 dark:text-zinc-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span>{wordCounter(readingTime)} words</span>
              </div>
            </div>
            <p className="mt-1 font-serif text-sm text-zinc-500 line-clamp-2 dark:text-zinc-50">
              {description}
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
