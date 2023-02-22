import React from 'react';
import {View, Text} from 'react-native';
import {Article} from '../interfaces/Article';

export const ArticleItem = ({article}: {article: Article}) => {
  return (
    <View>
      <Text>article: {article.text}</Text>
    </View>
  );
};
