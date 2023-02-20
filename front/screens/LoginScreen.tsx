import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Connexion</Text>
      <View style={styles.form}>
        <View style={styles.label}>
          <Text>Login</Text>
          <TextInput />
        </View>
        <View style={styles.label}>
          <Text>Mot de passe</Text>
          <TextInput />
        </View>
        <Button title="Se connecter" />
      </View>
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
  h1: {},
  form: {},
  label: {},
});
