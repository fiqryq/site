import { Text } from '@fiqryq/piqui';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

const Card: React.FC = () => {
  return (
    <article className="group relative flex flex-col items-start">
      <Text
        as="h2"
        className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
      >
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
        <Link href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">
            <Balancer>
              Crafting a design system for a multiplanetary future
            </Balancer>
          </span>
        </Link>
      </Text>
      <time
        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
        dateTime="2022-09-05"
      >
        September 5, 2022
      </time>
      <Text
        as="p"
        className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
      >
        Most companies try to stay ahead of the curve when it comes to visual
        design, but for Planetaria we needed to create a brand that would still
        inspire us 100 years from now when humanity has spread across our entire
        solar system.
      </Text>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
      >
        Read article
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="ml-1 h-4 w-4 stroke-current"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </article>
  );
};

export default Card;
