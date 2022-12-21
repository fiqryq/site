import React from 'react';

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}
const Content: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className="sm:mt-26 mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </div>
  );
};

export default Content;
