import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'mdx', 'jsx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism]
  }
});

export default withMDX(nextConfig);
