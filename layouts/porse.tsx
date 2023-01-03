import clsx from 'clsx';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}
const Prose: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        'prose-a:text-darkseafoam prose-a:border-darkseafoam leading-8 prose-blockquote:text-tertiary prose prose-xl prose-stone max-w-none font-serif -tracking-[.005em] antialiased prose-h2:font-sans prose-h2:text-3xl prose-h2:font-bold prose-h3:font-sans prose-h3:text-xl prose-h3:font-semibold prose-h4:mt-0 prose-h4:text-xl prose-a:border-b prose-a:no-underline hover:prose-a:bg-gray-100 prose-blockquote:text-2xl prose-blockquote:not-italic prose-ol:-my-2 prose-ul:-my-1 prose-li:my-1 prose-hr:border-t-2 prose-hr:border-b-0 prose-hr:border-dotted dark:prose-invert'
      )}
    >
      {children}
    </div>
  );
};

export default Prose;
