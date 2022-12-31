import React from 'react';

import NextSeo from '@/components/seo';
import Content from '@/layouts/content';
import Section from '@/layouts/section';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import Card from '@/src/components/card';

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
const index: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <NextSeo title="Blog" description="- A blog about my thoughts." />
      <Section>
        <Content
          title="The Random Thoughts of Me"
          description="- A blog about my thoughts."
          topSpacer="mt-5"
        >
          <div className="grid grid-cols-3 gap-3">
            {articles?.map((items, index) => {
              return (
                <Card
                  key={index}
                  title={items.title}
                  description={items.description}
                  slug={`/blog/post/${items.slug}`}
                  category={items.category}
                  date={items.date}
                  banner={items.banner}
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

export default index;
