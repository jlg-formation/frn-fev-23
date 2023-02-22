import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useArticleStore} from '../stores/article.store';
import {useI18nStore} from '../stores/i18n.store';
import {IconButton} from './IconButton';
import {launchImageLibrary} from 'react-native-image-picker';
import {domainUrl} from '../app.json';
import {generateId, getExtension} from '../misc';

export const ArticleAdd = () => {
  const {t} = useI18nStore();
  const {addArticle} = useArticleStore();
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const addPhotos = async () => {
    try {
      console.log('add photos');
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 5,
      });
      console.log('result: ', result);
      if (result.assets === undefined) {
        return;
      }
      for (const asset of result.assets) {
        console.log('asset: ', asset);
        console.log('asset.fileName: ', asset.fileName);
        if (asset.fileName === undefined) {
          return;
        }

        const extension = getExtension(asset.fileName);
        console.log('extension: ', extension);
        const imageName = generateId() + '.' + extension;
        console.log('imageName: ', imageName);

        const data = new FormData();
        data.append('file', {
          uri: asset.uri,
          name: imageName,
          type: asset.type,
        });
        const response = await fetch(domainUrl + '/api/upload', {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status >= 400) {
          throw new Error('Technical Error');
        }
        console.log('image sent', response.status);
      }
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const reset = () => {
    console.log('reset');
    setText('');
  };

  const sendArticle = async () => {
    try {
      console.log('add article');
      setIsSending(true);
      await addArticle({text: text, imageUrls: []});
      reset();
    } catch (err) {
      console.log('err: ', err);
      Alert.alert(t.technicalError);
    } finally {
      setIsSending(false);
    }
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
          {isSending ? (
            <ActivityIndicator />
          ) : (
            <IconButton
              type="primary"
              name="send"
              onPress={sendArticle}
              disabled={text.length === 0}
            />
          )}
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
