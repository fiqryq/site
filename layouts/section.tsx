import clsx from 'clsx';

interface Props {
  className?: string;
  children: React.ReactNode;
}
const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx('px-4 sm:px-8 lg:px-12', className)}>
      {children}
    </section>
  );
};

export default Section;
