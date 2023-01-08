import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import Button from '@/components/button';
import { ArrowDownIcon, BriefcaseIcon } from '@/components/icons';
import { download, resume } from '@/constant/resume';

interface Props {
  className?: React.ReactNode;
}

const Resume: React.FC<Props> = ({ className }) => (
  <div
    className={clsx(
      'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40',
      className
    )}
  >
    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <BriefcaseIcon className="h-6 w-6 flex-none" />
      <span className="ml-3">Experience</span>
    </h2>
    <ol className="mt-6 space-y-4">
      {resume.map((role: any, roleIndex) => (
        <li key={roleIndex} className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              className="h-7 w-7 rounded-full"
              src={role.logo}
              width="28"
              height="28"
              alt={role.company}
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {role.company}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              {role.title}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${role.start.label ?? role.start} until ${
                role.end.label ?? role.end
              }`}
            >
              <time dateTime={role.start.dateTime ?? role.start}>
                {role.start.label ?? role.start}
              </time>{' '}
              <span aria-hidden="true">—</span>{' '}
              <time dateTime={role.end.dateTime ?? role.end}>
                {role.end.label ?? role.end}
              </time>
            </dd>
          </dl>
        </li>
      ))}
    </ol>
    <Button href={download} variant="secondary" className="group mt-6 w-full">
      Download CV
      <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
    </Button>
  </div>
);

export default Resume;
