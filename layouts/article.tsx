import Prose from '@/layouts/porse';
import router from 'next/router';
import { formatDate } from '@/lib/formatDate';
import { ArrowLeftIcon } from '@/components/icons';
import Giscus from '@/components/giscus';
import {
  GISCUS_CATEGORY,
  GISCUS_CATEGORY_ID,
  GISCUS_REPO,
  GISCUS_REPOSITORY_ID
} from '@/constant/giscus';
import React from 'react';
import NextSeo from '@/src/components/seo';

const ArticleLayout = ({ children, meta, isRssFeed = false }: any) => {
  const [Theme, setTheme] = React.useState<string>('light');

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme')?.toString();
    if (localTheme === 'system') setTheme('light');
    else setTheme(localTheme || Theme);
  }, [Theme]);

  if (isRssFeed) {
    return children;
  }

  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className="bg-white pb-16 dark:bg-zinc-900">
        <div className="pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="xl:relative">
                <div className="mx-auto max-w-3xl">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    aria-label="Go back to articles"
                    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
                  >
                    <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
                  </button>
                  <article>
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {meta.title}
                      </h1>
                      <span className="mt-2 text-sm text-zinc-500 dark:text-zinc-600">
                        Written on {formatDate(meta.date)} by {meta.author}.
                      </span>
                      <time
                        dateTime={meta.date}
                        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                      >
                        <span>{formatDate(meta.date)}</span>
                      </time>
                    </header>
                    <Prose className="mt-7">{children}</Prose>
                  </article>
                  <div className="mb-5 border-b-[1px] border-zinc-100 pt-5 dark:border-zinc-800" />
                  <Giscus
                    repo={GISCUS_REPO}
                    repoId={GISCUS_REPOSITORY_ID}
                    category={GISCUS_CATEGORY}
                    categoryId={GISCUS_CATEGORY_ID}
                    mapping="specific"
                    strict="1"
                    term={`blog discussion - ${meta.title}`}
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    theme={Theme}
                    lang="en"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleLayout;
