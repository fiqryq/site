import Prose from '@/layouts/porse';
import React from 'react';
import NextSeo from '@/src/components/seo';
import Content from './content';
import Section from './section';
import Image from 'next/image';

const Uses = ({ children, meta, isRssFeed = false }: any) => {
  const [Theme, setTheme] = React.useState<string>('light');

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme')?.toString();
    if (localTheme === 'system') setTheme('light');
    else setTheme(localTheme || Theme);
  }, [Theme]);

  if (isRssFeed) {
    return children;
  }

  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Section>
        <Content
          title={meta.title}
          description={meta.description}
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
          <Prose className="mt-7">{children}</Prose>
        </Content>
      </Section>
    </>
  );
};

export default Uses;
