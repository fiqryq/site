import Container from '@/layouts/container';
import Content from '@/layouts/content';
import Section from '@/layouts/section';
import Card from '@/src/components/card';
import Footer from '@/src/components/footer';
import Navigation from '@/components/navigation';
import Resume from '@/src/components/resume';
import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <>
      <Section>
        <Content
          title="Software designer, founder, and amateur astronaut."
          description="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Section>

      <Section className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 pb-10 lg:max-w-none lg:grid-cols-2">
        <div className="space-y-10 p-2 pt-5">
          <Card />
        </div>
        <div className="xl:pl-30 space-y-10 lg:pl-16">
          <Resume />
        </div>
      </Section>
    </>
  );
};

export default Home;
