import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Menu Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    padding: 10,
  },
  h1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
