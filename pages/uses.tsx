import Container from '@/layouts/container';
import Content from '@/layouts/content';
import Section from '@/layouts/section';
import Footer from '@/src/components/footer';
import type { NextPage } from 'next';

const Uses: NextPage = () => {
  return (
    <Container className="space-y-5">
      <Section>
        <Content
          title="Software designer, founder, and amateur astronaut."
          description="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        >
          Test
        </Content>
      </Section>
      <Footer />
    </Container>
  );
};

export default Uses;
