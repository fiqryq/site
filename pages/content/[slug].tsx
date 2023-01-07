import { allDocuments } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import router from 'next/router';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useEffect, useState } from 'react';

import Giscus from '@/components/giscus';
import { ArrowLeftIcon } from '@/components/icons';
import SEO from '@/components/seo';
import {
  GISCUS_CATEGORY,
  GISCUS_CATEGORY_ID,
  GISCUS_REPO,
  GISCUS_REPOSITORY_ID
} from '@/constant/giscus';
import Prose from '@/layouts/porse';
import { readingTime, wordCounter } from '@/lib/readingTime';

export async function getStaticPaths() {
  const paths = allDocuments.map(article => article.url);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const article = allDocuments.find(
    article => article._raw.flattenedPath === params.slug
  );
  return {
    props: {
      article
    }
  };
}

const ArticleLayout = ({ article }: any) => {
  const MDXContent = useMDXComponent(article.body.code);
  const [Theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')?.toString();
    if (localTheme === 'system') setTheme('light');
    else setTheme(localTheme || Theme);
  }, [Theme]);

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        date={article.date}
      />
      <div className="bg-white pb-16 dark:bg-zinc-900">
        <div className="pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="xl:relative">
                {/* back button */}
                <div className="mx-auto max-w-3xl">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    aria-label="Go back to articles"
                    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
                  >
                    <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
                  </button>
                  {/* article section */}
                  <article>
                    {/* header article */}
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {article.title}
                      </h1>
                      <span className="mt-2 text-base font-medium text-zinc-500 dark:text-zinc-600">
                        Written on{' '}
                        {format(parseISO(article.date), 'LLLL d, yyyy')} by{' '}
                        <span className="font-semibold">{article.author}</span>
                      </span>
                      <span className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                        <span>
                          {format(parseISO(article.date), 'LLLL d, yyyy')}
                        </span>
                      </span>

                      <div className="flex items-center space-x-2 border-b-2 border-dotted border-zinc-100 pb-2 dark:border-zinc-800">
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
                          <span>{readingTime(article.body.raw)}</span>
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
                          <span>{wordCounter(article.body.raw)} words</span>
                        </div>
                      </div>
                    </header>
                    {/* body of article */}
                    <Prose className="mt-7">
                      <MDXContent />
                    </Prose>
                  </article>
                  <div className="mb-5 border-b-2 border-dotted border-zinc-100 pt-5 dark:border-zinc-800" />
                  {/* Comment section */}
                  <Giscus
                    repo={GISCUS_REPO}
                    repoId={GISCUS_REPOSITORY_ID}
                    category={GISCUS_CATEGORY}
                    categoryId={GISCUS_CATEGORY_ID}
                    mapping="specific"
                    strict="1"
                    term={`blog discussion - ${article.title}`}
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
