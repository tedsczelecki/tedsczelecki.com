export type Blog = {
  items: Article[];
};

export type Article = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};
