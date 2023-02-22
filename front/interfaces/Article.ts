export interface Article {
  id: string;
  text: string;
  imageUrls: string[];
}

export type NewArticle = Omit<Article, 'id'>;
