import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'

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
        <div className="mb-5 py-14 space-y-2 rounded-lg md:space-y-5 bg-gradient-to-r from-cyan-500 to-blue-500 p-10">
          <div className="flex flex-col space-y-3">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-white dark:text-white sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {`Hi 👋 i'm ${siteMetadata.author}`}
            </h1>
            <p className="text-lg leading-7 text-white dark:text-white">
              {siteMetadata.description}
            </p>
            <div className="flex space-x-2">
              <Link href="/blog">
                <div className="w-28 h-12 rounded-md bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-600/50 flex items-center justify-center">
                  <p className="text-white">Read Blog</p>
                </div>
              </Link>
              <Link href="/about">
                <div className="w-28 h-12 rounded-md bg-sky-700 hover:bg-sky-800 shadow-lg shadow-sky-700/50 flex items-center justify-center">
                  <p className="text-white">About Me</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          <span className="pr-2" role="img" aria-label="wave">
            📋
          </span>
          Recent Post
        </h1>
        <ul className="sdivide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-3">
                <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                  <article className="bg-gray-200 bg-opacity-20 hover:bg-gray-300 hover:bg-opacity-30 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 p-5 rounded-lg">
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <div className="space-y-5 xl:col-span-4">
                        <div className="space-y-3">
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <h2 className="text-3xl font-bold leading-8 tracking-tight">
                            <Link href={`/blog/${slug}`} className="text-cyan-600">
                              {title}
                            </Link>
                          </h2>
                          <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
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
            className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
