import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {ArticleAdd} from '../../widgets/ArticleAdd';
import {ArticleList} from '../../widgets/ArticleList';

export function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/jardin.jpg')}
        />
        <View style={styles.articleContainer}>
          <ArticleAdd />
          <ArticleList />
        </View>
      </View>
    </ScrollView>
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
    gap: 10,
  },
  image: {
    height: 200,
    width: '100%',
    objectFit: 'cover',
  },
});
