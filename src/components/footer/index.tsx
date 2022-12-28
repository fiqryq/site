import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="relative mx-auto max-w-7xl border-t border-zinc-100 bg-white py-10 dark:border-zinc-700/40 dark:bg-zinc-900 dark:bg-zinc-700/40">
      <div className="flex flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8 lg:px-12">
        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="https://dashboard.fiqry.dev/share/GKTWkENc/Fiqry.dev">
            Dashboard
          </Link>
        </div>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-semibold text-zinc-800 dark:text-zinc-100">
            Fiqry choerudin
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
