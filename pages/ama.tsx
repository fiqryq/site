import type { NextPage } from 'next';
import React from 'react';

import Giscus from '@/components/giscus';
import { Meta } from '@/components/meta';
import {
  GISCUS_CATEGORY_AMA,
  GISCUS_CATEGORY_ID_AMA,
  GISCUS_REPO,
  GISCUS_REPOSITORY_ID
} from '@/constant/giscus';
import Content from '@/layouts/content';
import Section from '@/layouts/section';

const Ama: NextPage = () => {
  const [Theme, setTheme] = React.useState<string>('light');

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme')?.toString();
    if (localTheme === 'system') setTheme('light');
    else setTheme(localTheme || Theme);
  }, [Theme]);

  return (
    <>
      <Meta
        title="AMA (Ask Me Anything)"
        description="you can ask me about anything you want."
      />
      <Section>
        <Content
          title="AMA (Ask Me Anything)"
          description="you can ask me about anything you want just write down below."
        >
          <Giscus
            repo={GISCUS_REPO}
            repoId={GISCUS_REPOSITORY_ID}
            category={GISCUS_CATEGORY_AMA}
            categoryId={GISCUS_CATEGORY_ID_AMA}
            mapping="specific"
            strict="1"
            term="Ask me anything."
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={Theme}
            lang="en"
          />
        </Content>
      </Section>
    </>
  );
};

export default Ama;
