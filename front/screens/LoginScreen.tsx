import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export const LoginScreen = ({onConnected}: {onConnected: () => void}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Connexion</Text>
      <View style={styles.form}>
        <View style={styles.label}>
          <Text style={styles.labelText}>Login</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Mot de passe</Text>
          <TextInput secureTextEntry={true} style={styles.input} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Se connecter" onPress={onConnected} />
        </View>
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
    width: '100%',
    padding: 10,
  },
  h1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    gap: 20,
  },
  label: {},
  labelText: {
    color: 'black',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 40,
  },
});
