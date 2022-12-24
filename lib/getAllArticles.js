import glob from 'fast-glob';
import * as path from 'path';

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/blog/post/${articleFilename}`
  );
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), '/pages/blog/post')
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  // @ts-ignore
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}
