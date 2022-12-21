import { clsx } from 'clsx';
import ThemeSelector from '@/components/theme-selector';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 p-4 pt-6 sm:flex-row sm:px-8 lg:px-12">
      <img
        src="https://avatars.githubusercontent.com/u/25787603?v=4"
        alt="avatar"
        className={clsx(
          'h-10 w-10 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
        )}
      />
      <div className="text-md flex gap-6 font-medium text-zinc-800 dark:text-zinc-200">
        <Link href="/Linkbout">Linkbout</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/uses">Uses</Link>
        <ThemeSelector />
      </div>
    </div>
  );
};

export default Navigation;
