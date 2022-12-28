import Content from '@/layouts/content';
import Section from '@/layouts/section';
import Card from '@/components/card';
import Balancer from 'react-wrap-balancer';
import HeadSeo from '@/components/seo';
import { getAllArticles } from '@/lib/getAllArticles';
import { generateRssFeed } from '@/lib/generateRssFeed';
interface Props {
  articles?: Array<{
    author?: string;
    date?: string;
    description?: string;
    slug?: string;
    title?: string;
  }>;
}

const Home = ({ articles }: Props) => {
  return (
    <>
      <HeadSeo
        title="Home"
        description="Hi, my name is Fiqry and I am a frontend engineer based in Bandung, Indonesia. I am currently learning everything about react ecosystem."
        ogTitle="github.com/fiqryq"
      />
      <Section>
        <Content
          title="Basic Frontend Enginner"
          description="Hi, my name is Fiqry and I am a frontend engineer based in Bandung, Indonesia. I am currently learning everything about software development."
          withSocialLink
        />
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          <Balancer>Blog Post</Balancer>
        </h2>
      </Section>

      <Section className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 pb-10 lg:max-w-none lg:grid-cols-2">
        <div className="space-y-10 pt-8">
          {articles?.map((items, index) => {
            return (
              <Card
                key={index}
                title={items.title}
                description={items.description}
                date={items.date}
                link={items.slug}
              />
            );
          })}
        </div>
        <div className="xl:pl-30 space-y-10 lg:pl-16">
          {/* fill with content right side here */}
        </div>
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
        .slice(0, 2)
        .map(({ component, ...meta }) => meta)
    }
  };
}
