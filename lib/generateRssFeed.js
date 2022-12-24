import ReactDOMServer from 'react-dom/server';
import { Feed } from 'feed';
import { mkdir, writeFile } from 'fs/promises';
import { getAllArticles } from './getAllArticles';

export const generateRssFeed = async () => {
  let articles = await getAllArticles();
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  let author = {
    name: 'Fiqry choerudin',
    email: 'hi@fiqry.dev'
  };

  let feed = new Feed({
    title: author.name,
    description: '',
    author,
    id: siteUrl || '',
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`
    }
  });

  for (let article of articles) {
    let url = `${siteUrl}/blog/post/${article.slug}`;
    let html = ReactDOMServer.renderToStaticMarkup(
      // @ts-ignore
      <article.component isRssFeed />
    );

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date)
    });
  }

  await mkdir('./public/rss', { recursive: true });
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8')
  ]);
};
