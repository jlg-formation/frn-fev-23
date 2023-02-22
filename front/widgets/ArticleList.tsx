import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useArticleStore} from '../stores/article.store';
import {ArticleItem} from './ArticleItem';

export const ArticleList = () => {
  const {articles, refresh} = useArticleStore();
  useEffect(() => {
    refresh();
  }, [refresh]);

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
