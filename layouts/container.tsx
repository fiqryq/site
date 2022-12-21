import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'mx-auto h-full max-w-7xl border-t border-zinc-100 bg-white dark:border-zinc-700/40 dark:bg-zinc-900 dark:ring-zinc-300/20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
