import { formatDate } from '@/lib/formatDate';

interface Props {
  title?: string;
  description?: string;
  category?: Array<string>;
  banner?: string;
  date?: string;
  slug?: string;
}

const Card: React.FC<Props> = ({
  title,
  description,
  banner,
  category,
  date,
  slug
}) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border-[1px] border-zinc-100 dark:border-zinc-800">
      <div className="relative flex-shrink-0">
        <img className="h-48 w-full object-cover" src={banner} alt={title} />
        <div className="absolute bottom-0 grid w-full grid-cols-4 gap-3 px-6 py-3 text-sm font-medium text-zinc-600">
          {category?.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-md bg-zinc-900 text-center text-xs text-zinc-100"
            >
              {' '}
              {cat}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-zinc-900">
        <div className="flex-1">
          <a href={slug} className="mt-1 block">
            <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {title}
            </p>
            <p className="mt-3 text-sm font-semibold text-zinc-500 dark:text-zinc-100">
              {formatDate(date)}
            </p>
            <p className="mt-1 text-sm text-zinc-500 line-clamp-2 dark:text-zinc-50">
              {description}
            </p>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
