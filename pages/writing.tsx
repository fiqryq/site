import { allDocuments, DocumentTypes } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { useState } from 'react';

import Card from '@/components/card';
import { Meta } from '@/components/meta';
import Content from '@/layouts/content';
import Section from '@/layouts/section';
import { ArticleProps } from '@/types/article';

export async function getStaticProps() {
  const articles: DocumentTypes[] = allDocuments.sort((a: any, b: any) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { articles } };
}

const Writing: React.FC = ({ articles }: any) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredBlogPosts = articles?.filter((article: { title: string }) =>
    article?.title?.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <Meta title="Blog" description="- A blog about my thoughts." />
      <Section>
        <Content
          title="Writing"
          description="- A blog about my thoughts."
          topSpacer="mt-5"
        >
          <div className="relative mb-4 w-full">
            <input
              aria-label="Search articles"
              type="text"
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-zinc-900 focus:border-zinc-400 focus:ring-zinc-400 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-zinc-400 dark:text-zinc-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {!filteredBlogPosts?.length && (
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              No posts found.
            </p>
          )}
          <div className="grid grid-cols-3 gap-3">
            {filteredBlogPosts?.map((article: ArticleProps, index: number) => {
              return (
                <Card
                  key={index}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  tag={article.tag}
                  date={article.date}
                  readingTime={article.body.raw}
                  banner={article.banner}
                />
              );
            })}
          </div>
        </Content>
      </Section>
    </>
  );
};

export default Writing;
