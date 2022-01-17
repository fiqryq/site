import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <header className="py-5 md:py-10 sticky top-0 z-40 bg-white dark:bg-black">
        <div className="flex items-center justify-between max-w-4xl mx-auto ">
          <div>
            {/* not used */}
            <Link href="/" aria-label="Fiqry Blog">
              <div className="flex items-center justify-between">
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 hover:bg-gray-300 dark:hover:bg-gray-800 hover:bg-opacity-20 hover:rounded-lg font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                  >
                    {link.title}
                  </Link>
                )
              })}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </header>
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <main className="mb-auto ">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
