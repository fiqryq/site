import { siteMetadata } from '@/constant/meta-data';
import { SITE_URL as URL } from '@/constant/global';
import Head from 'next/head';
interface Props {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogTwitterImage?: any;
  ogType?: any;
  ogTitle?: string;
}

const HeadSeo: React.FC<Props> = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  ogTitle
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogTwitterImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${URL}/api/og?title=${ogTitle}`} />
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default HeadSeo;
