export type NewsApiArgs = {
  type: "technology" | "business" | "health" | "sports";
};

export interface NewsApiRes {
  status: string;
  totalResults: number;
  articles: ArticleItemType[];
}

export interface ArticleItemType {
  source: Source;
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: null | string;
  publishedAt: string;
  content: string;
}

interface Source {
  id: null | string;
  name: string;
}
