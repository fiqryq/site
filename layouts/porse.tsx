import clsx from 'clsx';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}
const Prose: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  );
};

export default Prose;
