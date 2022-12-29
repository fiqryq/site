import type { NextPage } from 'next';

import NextSeo from '@/components/seo';
import Content from '@/layouts/content';
import Section from '@/layouts/section';

const Gear: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Gear"
        description="ere are all the software and hardware that I use on a daily basis."
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

export default Gear;
