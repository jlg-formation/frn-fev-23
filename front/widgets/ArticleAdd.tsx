import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IconButton} from './IconButton';

export const ArticleAdd = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textarea} multiline={true} numberOfLines={5} />
      <View style={styles.buttonContainer}>
        <View style={styles.leftButtonContainer}>
          <IconButton type="secondary" name="camera" />
          <IconButton type="secondary" name="trash" />
        </View>
        <View style={styles.rightButtonContainer}>
          <IconButton type="primary" name="send" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftButtonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  rightButtonContainer: {},
  textarea: {},
});
