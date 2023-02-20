import React from 'react';
import {Image, Text, View} from 'react-native';

export const SplashScreen = ({
  name,
  version,
}: {
  name: string;
  version: string;
}) => {
  return (
    <View>
      <Image source={require('../assets/logo.png')} />
      <Text>{name}</Text>
      <Text>{version}</Text>
    </View>
  );
};
