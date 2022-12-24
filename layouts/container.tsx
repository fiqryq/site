import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <main
      className={clsx(
        'mx-auto h-full max-w-7xl bg-white dark:bg-zinc-900 dark:ring-zinc-300/20',
        className
      )}
    >
      {children}
    </main>
  );
};

export default Container;
