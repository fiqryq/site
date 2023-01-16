import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="relative mx-auto max-w-7xl border-t border-dashed border-zinc-200 bg-white py-10 dark:border-zinc-700/40 dark:bg-zinc-900">
      <div className="flex flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8 lg:px-12">
        <div className="flex gap-6 text-sm text-zinc-800 dark:text-zinc-200">
          <Link href="/uses">
            <span>Uses</span>
            <span className="leading-snug mb-1 ml-1">↗</span>
          </Link>
          <Link href="/ama">
            <span>Ama</span>
            <span className="leading-snug mb-1 ml-1">↗</span>
          </Link>
          <Link href="https://github.com/fiqryq/fiqry.dev/blob/main/CHANGELOG.md">
            <span>Changelog</span>
            <span className="leading-snug mb-1 ml-1">↗</span>
          </Link>
          <Link href="https://dashboard.fiqry.dev/share/GKTWkENc/Fiqry.dev">
            <span>Dashboard</span>
            <span className="leading-snug mb-1 ml-1">↗</span>
          </Link>
        </div>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          {new Date().getFullYear()} &copy; Built with next by Fiqry choerudin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
