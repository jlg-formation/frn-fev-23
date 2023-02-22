import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ArticleAdd} from '../../widgets/ArticleAdd';
import {ArticleList} from '../../widgets/ArticleList';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/jardin.jpg')} />
      <ArticleAdd />
      <ArticleList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: '100%',
    objectFit: 'cover',
  },
});
