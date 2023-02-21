import React, {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Locale} from '../../interfaces/Locale';
import {useAuthenticationStore} from '../../stores/authentication.store';
import {primaryColor} from '../../theme';

export function SettingScreen() {
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const authenticationStore = useAuthenticationStore();

  const changeLanguage = (newLocale: Locale) => () => {
    console.log('newLocale: ', newLocale);
  };

  const disconnect = async () => {
    try {
      console.log('disconnect');
      setIsDisconnecting(true);
      await authenticationStore.disconnect();
    } catch (err) {
      console.log('err: ', err);
    } finally {
      setIsDisconnecting(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Paramètres</Text>
      <View style={styles.section}>
        <Text style={styles.h2}>Langues</Text>
        <Pressable
          android_ripple={{color: 'gray'}}
          style={[styles.button, styles.primaryButton]}
          onPress={changeLanguage('fr')}>
          <Text style={[styles.buttonText, styles.primaryButtonText]}>
            Français
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'gray'}}
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
          android_ripple={{color: 'gray'}}
          style={[styles.button, styles.secondaryButton]}
          onPress={disconnect}>
          {isDisconnecting ? (
            <ActivityIndicator />
          ) : (
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>
              Se déconnecter
            </Text>
          )}
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
