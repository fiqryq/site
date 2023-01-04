import React, { useState } from 'react';

import Card from '@/components/card';
import NextSeo from '@/components/seo';
import Content from '@/layouts/content';
import Section from '@/layouts/section';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';

interface Props {
  articles?: Array<{
    author?: string;
    date?: string;
    description?: string;
    category?: Array<string>;
    banner?: string;
    slug?: string;
    title?: string;
  }>;
}
const Writing: React.FC<Props> = ({ articles }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredBlogPosts = articles?.filter(post =>
    post?.title?.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <NextSeo title="Blog" description="- A blog about my thoughts." />
      <Section>
        <Content
          title="The random thoughts of me"
          description="- A blog about my thoughts."
          topSpacer="mt-5"
        >
          <div className="relative mb-4 w-full">
            <input
              aria-label="Search articles"
              type="text"
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-zinc-900 focus:border-pink-400 focus:ring-pink-400 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
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
            {filteredBlogPosts?.map((post, index) => {
              return (
                <Card
                  key={index}
                  title={post.title}
                  description={post.description}
                  slug={`/blog/post/${post.slug}`}
                  category={post.category}
                  date={post.date}
                  banner={post.banner}
                />
              );
            })}
          </div>
        </Content>
      </Section>
    </>
  );
};

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta)
    }
  };
}

export default Writing;
