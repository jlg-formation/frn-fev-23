import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useI18nStore} from '../stores/i18n.store';
import {IconButton} from './IconButton';

export const ArticleAdd = () => {
  const {t} = useI18nStore();
  const [text, setText] = useState('');
  const addPhotos = () => {
    console.log('add photos');
  };
  const reset = () => {
    console.log('reset');
    setText('');
  };
  const addArticle = () => {
    console.log('add article');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textarea}
        multiline={true}
        numberOfLines={5}
        placeholder={t.whatsnew}
        defaultValue={text}
        onChangeText={setText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.leftButtonContainer}>
          <IconButton type="secondary" name="camera" onPress={addPhotos} />
          <IconButton type="secondary" name="trash" onPress={reset} />
        </View>
        <View style={styles.rightButtonContainer}>
          <IconButton type="primary" name="send" onPress={addArticle} />
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
  textarea: {
    textAlignVertical: 'top',
    fontSize: 20,
  },
});
