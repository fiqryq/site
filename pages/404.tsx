import HeadSeo from '@/components/seo';
import Link from 'next/link';
import { forurofour } from '@/constant/404-constant';
import { ArrowLeftIcon } from '@/components/icons';

const ErrorFourOFour = () => {
  return (
    <>
      <HeadSeo
        title="Omg this page broken. hehe"
        description="404 page not found"
        ogTitle="404 page not found"
      />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl py-16 sm:py-24">
          <div className="text-center">
            <p className="text-base font-semibold text-zinc-600 dark:text-zinc-100">
              404
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-100">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-base font-semibold text-zinc-500 dark:text-zinc-100">
              Page List
            </h2>
            <div className="mt-4 divide-y divide-zinc-100 border-t-[1px] border-b-[1px] border-zinc-50 dark:divide-zinc-800 dark:border-zinc-800 dark:text-zinc-800">
              {forurofour.map((items, itemsIdx) => (
                <Link
                  key={itemsIdx}
                  href={items.slug}
                  className="relative flex items-start space-x-4 py-6"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                      <span className="rounded-sm ">
                        <Link href={items.slug}>
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {items.title}
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-zinc-500">
                      {items.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ArrowLeftIcon
                      className="h-5 w-5 text-zinc-400"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="text-base font-medium text-zinc-500 hover:text-zinc-600"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorFourOFour;
