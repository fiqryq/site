import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import NowPlaying from './NowPlaying'

export default function Footer() {
  return (
    <footer>
      <ul className="flex flex-col md:flex-row justify-center mb-0 pt-10 space-x-0 md:space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <li>
          <Link href="/">{siteMetadata.title}</Link>
        </li>
        <li>{` • `}</li>
        <li>{`© ${new Date().getFullYear()}`}</li>
        <li>{` • `}</li>
        <li>
          <Link href="/activity">Activity</Link>
        </li>
        <li>{` • `}</li>
        <li>
          <NowPlaying />
        </li>
      </ul>
    </footer>
  )
}
