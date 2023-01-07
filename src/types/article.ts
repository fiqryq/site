export type ArticleCardProps = {
  title?: any;
  description?: string;
  tag?: string;
  banner?: any;
  date?: string;
  url?: string;
  readingTime?: any;
};

export type ArticleProps = {
  title: string;
  description: string;
  url: string;
  tag: string;
  date: string;
  banner: string;
  body: {
    raw: string;
  };
};
