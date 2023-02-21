import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Locale} from '../../interfaces/Locale';

export function SettingScreen() {
  const changeLanguage = (newLocale: Locale) => () => {
    console.log('newLocale: ', newLocale);
  };

  const disconnect = () => {
    console.log('disconnect');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Paramètres</Text>
      <View>
        <Text>Langues</Text>
        <Pressable style={styles.button} onPress={changeLanguage('fr')}>
          <Text>Français</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={changeLanguage('en')}>
          <Text>English</Text>
        </Pressable>
      </View>
      <View>
        <Text>Compte</Text>
        <Pressable style={styles.button} onPress={disconnect}>
          <Text>Se déconnecter</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  h1: {},
  button: {},
});
