import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ArticleAdd} from '../../widgets/ArticleAdd';
import {ArticleList} from '../../widgets/ArticleList';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/jardin.jpg')} />
      <View style={styles.articleContainer}>
        <ArticleAdd />
        <ArticleList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  articleContainer: {
    width: '100%',
    padding: 10,
  },
  image: {
    height: 200,
    width: '100%',
    objectFit: 'cover',
  },
});
