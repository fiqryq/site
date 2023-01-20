import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import Button from '@/components/button';
import {
  ArrowDownIcon,
  BriefcaseIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon
} from '@/components/icons';
import { Meta } from '@/components/meta';
import Timeline from '@/components/timeline';
import { download } from '@/constant/resume';
import { socialLink } from '@/constant/social-link';
import Section from '@/layouts/section';

const About: NextPage = () => {
  return (
    <>
      <Meta title="About" description="About Fiqry choerudin." />
      <Section>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-5 gap-y-20 py-10 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              <Balancer>Meet Fiqry Choerudin</Balancer>
            </h1>
            <p className="font-serif text-base text-zinc-500">
              This is the story of my journey to becoming a programmer. I have
              loved technology since I was little, but I didn't study software
              development initially because I was interested in multimedia, such
              as photography, 3D modeling, and drawing. I only started studying
              software development when I entered college.
            </p>
            <p className="font-serif text-base text-zinc-500">
              I began by learning Java and PHP, but at the time, I wasn't sure
              if this field was really for me. However, as I approached
              graduation, I became more interested in software development and
              got my first job as a frontend developer at Telkom University. My
              first project was to create a web admin tool for managing
              international student permits.
            </p>
            <p className="font-serif text-base text-zinc-500">
              As I gained more experience, I became more passionate about the
              world of software development and started actively using GitHub to
              contribute to open-source projects and create my own open-source
              projects.
            </p>

            <div className="py-5">
              <h2 className="mb-5 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Timeline</span>
              </h2>
              <Timeline />
            </div>
          </div>
          <div className="lg:col-span-1 lg:px-16">
            <Image
              className="rounded-xl"
              src="https://avatars.githubusercontent.com/u/25787603?v=4"
              width="452"
              height="475"
              alt="avatar"
            />
            <Button
              href={download}
              variant="secondary"
              className="group mt-4 w-full"
            >
              Download CV
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-500 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>

            <div className="mt-6 flex flex-col gap-6 font-semibold">
              <Link
                href={socialLink.twitter.link}
                className="group flex cursor-pointer items-center space-x-2"
              >
                <TwitterIcon className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-800" />
                <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-800">
                  Follow me on Twitter
                </span>
              </Link>
              <Link
                href={socialLink.instagram.link}
                className="group flex cursor-pointer items-center space-x-2"
              >
                <InstagramIcon className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-800" />
                <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-800">
                  Follow me on Instagram
                </span>
              </Link>
              <Link
                href={socialLink.github.link}
                className="group flex cursor-pointer items-center space-x-2"
              >
                <GitHubIcon className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-800" />
                <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-800">
                  Follow me on Github
                </span>
              </Link>
              <Link
                href={socialLink.linkedin.link}
                className="group flex cursor-pointer items-center space-x-2"
              >
                <LinkedInIcon className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-800" />
                <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-800">
                  Follow me on Linkedin
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
