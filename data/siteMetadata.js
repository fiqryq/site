const siteMetadata = {
  title: 'Fiqry choerudin',
  author: 'Fiqry choerudin',
  headerTitle: '',
  description:
    'Frontend Developer / Full stuck developer. currently learning everything. love making open source projects on Github.',
  language: 'en-us',
  siteUrl: 'https://fiqrychoerudin.dev',
  siteRepo: 'https://github.com/fiqryq/Fiqrychoerudin.dev',
  siteLogo: '/public/static/images/avatar.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/social-banner.png',
  email: 'halo@fiqrychoerudin.dev',
  github: 'https://github.com/fiqryq',
  twitter: 'https://twitter.com/fiqryq_',
  facebook: 'https://facebook.com/fiqryq',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/fiqrychoerudin',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: true,
    googleAnalyticsId: 'G-8LX651HGWT',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
