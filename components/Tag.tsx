import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-2 bg-primary-600 p-1 px-3 rounded-md text-xs font-medium uppercase text-white">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
