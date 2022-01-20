import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import TopTracks from 'components/TopTrack'
import WhatIdo from '@/components/WhatIdo'

const MAX_DISPLAY = 2

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.author} description={siteMetadata.description} />
      <div className="divide-gray-200 dark:divide-gray-700">
        <div className="py-10 space-y-2 rounded-lg md:space-y-5">
          <div className="flex flex-col space-y-3">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 dark:text-white sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {`Hi 👋 i'm ${siteMetadata.author}`}
            </h1>
            <p className="text-lg leading-7 text-gray-800 dark:text-white">
              {siteMetadata.description}
              <span className="font-bold text-sky-600 ml-3 hover:underline hover:underline-offset-3">
                <Link href="/about">Read About Me &rarr;</Link>
              </span>
            </p>
            {/* <div className="flex space-x-2 pt-3">
              <Link href="/blog">
                <div className="w-28 h-12 rounded-md bg-sky-700 hover:bg-sky-800 shadow-lg shadow-sky-600/50 flex items-center justify-center">
                  <p className="text-white">Read Blog</p>
                </div>
              </Link>
              <Link href="/about">
                <div className="w-28 h-12 rounded-md bg-emerald-500 hover:bg-emerald-800 shadow-lg shadow-sky-700/50 flex items-center justify-center">
                  <p className="text-white">About Me</p>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Recent Post
        </h1>
        <ul className="sdivide-gray-200">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-2">
                <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                  <article className="space-y-2 hover:bg-gray-200 hover:bg-opacity-30 gap-3 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline bg-gray-200 bg-opacity-20 dark:bg-gray-900 dark:hover:bg-black p-5">
                    <div className="space-y-1 xl:col-span-4">
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-sky-600 ">
                          {title}
                        </Link>
                      </h3>
                      <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-sky-600 font-bold hover:text-sky-700 dark:hover:text-sky-700"
            aria-label="all posts"
          >
            Read All Post &rarr;
          </Link>
        </div>
      )}
      <div className="py-5 space-y-5">
        <WhatIdo />
      </div>
      <div className="py-7">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          My <span className="text-green-500">Spotify</span> Top Song
        </h1>
        <TopTracks />
      </div>
    </>
  )
}
