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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
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
              <Link href="https://www.linkedin.com/in/fiqrychoerudin/">
                <AiFillLinkedin size={20} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/fiqryq">
                <FaGithub size={20} />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/fiqryq_">
                <FaTwitter size={20} />
              </Link>
            </li>
            <li>
              <Link href="https://open.spotify.com/user/fiqrychoerudin?si=8832a12d23984f63">
                <FaSpotify size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
