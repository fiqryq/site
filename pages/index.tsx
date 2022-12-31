import Warning from '@/components/alert';
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
      <Section>
        <Content
          title="Fiqry choerudin"
          description="Hi, my name is Fiqry and I am a frontend engineer based in Bandung, Indonesia. I am currently learning everything about engineering especialy frontend development."
          withSocialLink
        >
          <Warning />
        </Content>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Blog Post
        </h2>
      </Section>

      <Section className="mx-auto grid max-w-xl grid-cols-1 gap-5 pt-5 pb-10 lg:max-w-none lg:grid-cols-3">
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
      </Section>
    </>
  );
};

export default Home;

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
