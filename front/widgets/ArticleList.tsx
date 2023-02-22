import React from 'react';
import {View} from 'react-native';
import {Article} from '../interfaces/Article';
import {ArticleItem} from './ArticleItem';

export const ArticleList = () => {
  const articles: Article[] = [
    {id: 'a1', text: 'coucou', imageUrls: []},
    {id: 'a2', text: 'hello', imageUrls: []},
    {id: 'a3', text: 'toto', imageUrls: []},
  ];
  return (
    <View>
      {articles.map(article => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </View>
  );
};
