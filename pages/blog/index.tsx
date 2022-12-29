import Content from '@/layouts/content';
import Card from '@/components/card';
import Section from '@/layouts/section';
import { getAllArticles } from '@/lib/getAllArticles';
import { generateRssFeed } from '@/lib/generateRssFeed';
import HeadSeo from '@/components/seo';

interface Props {
  articles?: Array<{
    author?: string;
    date?: string;
    description?: string;
    slug?: string;
    title?: string;
  }>;
}

const index: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <HeadSeo
        title="Blog"
        description="- A blog about the author thoughts."
        ogTitle="Blog page."
      />
      <Section>
        <Content
          title="The Random Ruminations of Fiqry"
          description="- A blog about the author's thoughts."
        >
          <div className="mb-10 space-y-10">
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
