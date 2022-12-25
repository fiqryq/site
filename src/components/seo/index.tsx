import { siteMetadata } from '@/constant/meta-data';
import { SITE_URL as BASE_URL } from '@/constant/global';
import Head from 'next/head';
interface Props {
  title?: string;
  description?: string;
  ogTitle?: string;
}

const HeadSeo: React.FC<Props> = ({ title, description, ogTitle }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${BASE_URL}/api/og?title=${ogTitle}`}
      />

      <meta property="og:url" content={`${BASE_URL}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${BASE_URL}/api/og?title=${ogTitle}`}
      />

      <link rel="canonical" href={`${BASE_URL}`} />

      <link
        rel="alternate"
        type="application/rss+xml"
        href={`${BASE_URL}/rss/feed.xml`}
      />
      <link
        rel="alternate"
        type="application/feed+json"
        href={`${BASE_URL}/rss/feed.json`}
      />
    </Head>
  );
};

export default HeadSeo;
