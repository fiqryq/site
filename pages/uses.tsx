import Image from 'next/image';
import React from 'react';

import { Meta } from '@/components/meta';
import Content from '@/layouts/content';
import Prose from '@/layouts/porse';
import Section from '@/layouts/section';

const Uses = () => {
  const [Theme, setTheme] = React.useState<string>('light');

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme')?.toString();
    if (localTheme === 'system') setTheme('light');
    else setTheme(localTheme || Theme);
  }, [Theme]);

  return (
    <>
      <Meta
        title="Any hardware or software that I use and recommend"
        description="Here are all the software and hardware that I use on a daily basis."
      />
      <Section>
        <Content
          title="Any hardware or software that I use and recommend"
          description="Here are all the software and hardware that I use on a daily basis."
          topSpacer="mt-10"
        >
          <Image
            src="https://user-images.githubusercontent.com/25787603/210138419-daa06efc-2c5a-4a14-9202-91b1b8d0168e.jpeg"
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto'
            }}
            alt="banner"
          />
          <Prose className="mt-7"></Prose>
        </Content>
      </Section>
    </>
  );
};

export default Uses;
