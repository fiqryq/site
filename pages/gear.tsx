import Content from '@/layouts/content';
import Section from '@/layouts/section';
import HeadSeo from '@/components/seo';
import { siteMetadata } from '@/constant/meta-data';
import type { NextPage } from 'next';

const Uses: NextPage = () => {
  return (
    <>
      <HeadSeo
        title={`Gear`}
        description={`Here are all the software and hardware that I use on a daily basis.`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />
      <Section>
        <Content
          title="Any hardware or software that I use and recommend."
          description="Here are all the software and hardware that I use on a daily basis."
        >
          soon
        </Content>
      </Section>
    </>
  );
};

export default Uses;
