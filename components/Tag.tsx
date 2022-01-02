import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 bg-gray-300 bg-opacity-20 p-1 px-3 rounded-md text-xs font-medium uppercase text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
