import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { Footer } from '#/components/footer'
import appCss from '../styles.css?url'

const siteUrl = 'https://www.fiqry.dev'
const siteTitle = 'Fiqry Choerudin — Frontend Engineer'
const siteDescription =
  'Digital garden of Fiqry Choerudin. I do web development and sometimes write about it. I use Vim, btw.'
const ogImage = `${siteUrl}/og-image.png`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteTitle },
      { name: 'description', content: siteDescription },
      { name: 'theme-color', content: '#103dff' },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Fiqry Choerudin' },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { property: 'og:url', content: siteUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: siteTitle },
      { name: 'twitter:description', content: siteDescription },
      { name: 'twitter:image', content: ogImage },

      {
        'script:ld+json': {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Fiqry Choerudin',
          jobTitle: 'Frontend Engineer',
          url: siteUrl,
          worksFor: {
            '@type': 'Organization',
            name: 'Kitabisa',
          },
          sameAs: ['https://github.com/fiqryq'],
        },
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: siteUrl },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
