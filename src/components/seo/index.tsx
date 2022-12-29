import { NextSeo as Seo } from 'next-seo';

const meta = {
  title: 'Fiqry choerudin',
  siteName: 'fiqry.dev',
  description:
    'An online portfolio and blog by Fiqry choerudin. Showcase of my projects.',
  url: 'https://fiqry.dev',
  image: 'https://fiqry.dev/favicon/favicon-32x32.png',
  type: 'website',
  robots: 'follow, index'
};

type Props = {
  canonical?: string;
} & Partial<typeof meta>;

const NextSeo: React.FC<Props> = ({ title, description, canonical }) => {
  return (
    <Seo
      title={title ?? meta.title}
      description={description ?? meta.description}
      canonical={canonical ?? meta.url}
      openGraph={{
        url: meta.url,
        title: title ?? meta.title,
        description: description ?? meta.description,
        images: [{ url: `${meta.url}/api/og?title=${title ?? meta.title}` }],
        siteName: meta.siteName
      }}
      twitter={{
        handle: '@fiqryq_',
        site: meta.url,
        cardType: 'summary_large_image'
      }}
    />
  );
};

export default NextSeo;
