import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="mt-32">
      <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <div className="flex flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8 lg:px-12">
          <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/uses">Uses</Link>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Fiqry choerudin. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
