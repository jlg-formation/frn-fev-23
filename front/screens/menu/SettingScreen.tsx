import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Locale} from '../../interfaces/Locale';
import {primaryColor} from '../../theme';

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
      <View style={styles.section}>
        <Text style={styles.h2}>Langues</Text>
        <Pressable
          style={[styles.button, styles.primaryButton]}
          onPress={changeLanguage('fr')}>
          <Text style={[styles.buttonText, styles.primaryButtonText]}>
            Français
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.primaryButton]}
          onPress={changeLanguage('en')}>
          <Text style={[styles.buttonText, styles.primaryButtonText]}>
            English
          </Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={styles.h2}>Compte</Text>
        <Pressable
          style={[styles.button, styles.secondaryButton]}
          onPress={disconnect}>
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Se déconnecter
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    gap: 20,
  },
  section: {
    width: '100%',
    gap: 10,
  },
  h1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: 20,
  },
  h2: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: primaryColor,
    borderColor: primaryColor,
  },
  primaryButtonText: {
    color: 'white',
  },
  secondaryButton: {
    borderColor: primaryColor,
  },
  secondaryButtonText: {
    color: primaryColor,
  },
});
