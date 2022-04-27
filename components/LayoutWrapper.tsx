import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import { useState, useEffect } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const [navShow, setNavShow] = useState(false)
  const [scroll, setScroll] = useState(false)
  const onToggleNav = () => setNavShow((status) => !status)

  const handleScroll = () => {
    if (scroll !== window.pageYOffset > 0) {
      setScroll(window.pageYOffset > 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <MobileNav show={navShow} toggle={onToggleNav} />
      <header
        className={`overflow-x-hidden ${
          scroll ? 'border-b-[1px] dark:border-gray-900 border-gray-300/50' : ''
        }  backdrop-blur supports-backdrop-blur:bg-white/95 py-5 fixed w-full top-0 z-40 bg-white/50 dark:bg-black/50`}
      >
        <div className="mx-auto max-w-3xl xl:max-w-3xl flex items-center justify-between px-3 xl:px-0">
          <div>
            <Link href="/" aria-label="Leo's Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3 flex justify-center items-center">
                  {/* <NextImage
                    src="/static/images/logo.jpg"
                    width={45}
                    height={45}
                    className="rounded-full"
                  /> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-semibold text-gray-700 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <button
              className="w-8 h-8 ml-2 mr-1 rounded sm:hidden"
              type="button"
              aria-label="Toggle Menu"
              onClick={onToggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen pt-16">
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
