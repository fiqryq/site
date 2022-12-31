import type { NextPage } from 'next';
import Link from 'next/link';

import { LinkIcon } from '@/components/icons';
import NextSeo from '@/components/seo';
import { projects } from '@/constant/project';
import Content from '@/layouts/content';
import Section from '@/layouts/section';

const Project: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Project"
        description="In my opinion, a software engineer should leave their mark on the internet in the form of an article or project. Here are some projects that I have worked on as a software developer."
      />
      <Section>
        <Content
          title="The project that I am working on to leave a trail on the internet."
          description="In my opinion, a software engineer should leave their mark on the internet in the form of an article or project. Here are some projects that I have worked on as a software developer."
        >
          <div className="grid grid-cols-1 gap-3 pb-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <Link
                key={project.name}
                href={project.link.href}
                target="_blank"
                className="relative cursor-pointer rounded-md border-[1px] border-zinc-100 p-5 dark:border-zinc-800"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="h-8 w-8 rounded-full bg-white"
                  />
                </div>
                <h2 className="relative z-10 mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {project.name}
                </h2>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2 hover:text-zinc-500">
                    {project.link.label}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </Content>
      </Section>
    </>
  );
};

export default Project;
