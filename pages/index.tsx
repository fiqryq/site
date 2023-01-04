import Balancer from 'react-wrap-balancer';

import Card from '@/components/card';
import NextSeo from '@/components/seo';
import Section from '@/layouts/section';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';

interface Props {
  articles?: Array<{
    author?: string;
    date?: string;
    description?: string;
    banner?: string;
    category?: Array<string>;
    slug?: string;
    title?: string;
  }>;
}

const Home = ({ articles }: Props) => {
  return (
    <>
      <NextSeo
        title="Home"
        description="Hi, my name is Fiqry and I am a frontend engineer based in Bandung, Indonesia. I am currently learning everything about react ecosystem."
      />
      <Section className="relative mb-0 grid grid-cols-1 overflow-hidden rounded-b-3xl pb-6 md:px-12 md:pb-6 lg:mb-0 lg:grid-cols-2 lg:gap-4 lg:overflow-visible lg:pl-12 lg:pr-0">
        <div className="order-2 py-4 lg:order-1 lg:py-32">
          <span className="mt-4 mb-2 inline-block text-xl text-gray-500 dark:text-zinc-100 md:mb-3 md:text-2xl">
            Hello, I'm Fiqry —
          </span>
          <h1 className="text-primary text-4xl font-bold tracking-tight antialiased dark:text-zinc-100 md:text-5xl lg:leading-headers">
            <Balancer>
              I'm a front-end engineer with{' '}
              <span className="text-pink-400">css</span> superpowers
            </Balancer>
          </h1>
        </div>
        {/* content here */}
      </Section>
      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          <span>Writing</span>
          <span className="leading-snug mb-1 ml-2">&rarr;</span>
        </h2>
      </Section>
      <Section className="mx-auto grid max-w-xl grid-cols-1 gap-5 pt-5 pb-10 lg:max-w-none lg:grid-cols-3">
        {articles?.map((items, index) => {
          return (
            <Card
              key={index}
              title={items.title}
              description={items.description}
              slug={`/writing/post/${items.slug}`}
              category={items.category}
              date={items.date}
              banner={items.banner}
            />
          );
        })}
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
      articles: (await getAllArticles())
        .slice(0, 3)
        .map(({ component, ...meta }) => meta)
    }
  };
}

export default Home;
