import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Article} from '../interfaces/Article';

export const ArticleItem = ({article}: {article: Article}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>article: {article.text}</Text>
      <View style={styles.images}>
        {article.imageUrls.map((url, index) => (
          <Image style={styles.image} source={{uri: url}} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    gap: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  images: {
    gap: 10,
  },
  image: {
    height: 150,
    width: '100%',
    objectFit: 'cover',
  },
});
