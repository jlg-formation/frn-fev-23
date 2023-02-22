import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Article} from '../interfaces/Article';
import {ArticleItem} from './ArticleItem';

export const ArticleList = () => {
  const articles: Article[] = [
    {
      id: 'a1',
      text: 'coucou',
      imageUrls: [
        'http://localhost:3000/images/user-background.jpg',
        'http://localhost:3000/images/user-background.jpg',
      ],
    },
    {id: 'a2', text: 'hello', imageUrls: []},
    {id: 'a3', text: 'toto', imageUrls: []},
  ];
  return (
    <View style={styles.container}>
      {articles.map(article => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
