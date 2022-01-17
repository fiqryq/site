import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import NowPlaying from './NowPlaying'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaTwitter, FaGithub, FaSpotify } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col space-y-6 justify-start py-10 mb-0 space-x-0 text-md text-gray-500 dark:text-gray-400">
        <NowPlaying />
        <div className="flex justify-between items-center">
          <ul className="flex space-x-2">
            <li>{`© ${new Date().getFullYear()}`}</li>
            <li>{` • `}</li>
            <li>
              <Link href="/">{siteMetadata.title}</Link>
            </li>
            <li>{` • `}</li>
            <li>
              <Link href="/activity">Activity</Link>
            </li>
          </ul>
          <ul className="flex space-x-5 items-center cursor-pointer">
            <li>
              <AiFillLinkedin size={20} />
            </li>
            <li>
              <FaGithub size={20} />
            </li>
            <li>
              <FaTwitter size={20} />
            </li>
            <li>
              <FaSpotify size={20} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
