import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const SplashScreen = ({
  name,
  version,
}: {
  name: string;
  version: string;
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Text style={styles.h1}>{name}</Text>
      <Text style={styles.h2}>{version}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    width: '80%',
    height: 200,
    objectFit: 'contain',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  h2: {
    fontSize: 20,
    color: 'black',
  },
});
