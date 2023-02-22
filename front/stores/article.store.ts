import {create} from 'zustand';
import {api} from '../api';
import {Article, NewArticle} from '../interfaces/Article';

export interface ArticleStore {
  articles: Article[];
  addArticle(newArticle: NewArticle): Promise<void>;
  refresh(): Promise<void>;
}

export const useArticleStore = create<ArticleStore>(set => ({
  articles: [],
  addArticle: async newArticle => {
    await api.addArticle(newArticle);
    const articles = await api.getArticles();
    set({articles});
  },
  async refresh() {
    const articles = await api.getArticles();
    set({articles});
  },
}));
