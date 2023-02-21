import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAuthenticationStore} from '../stores/authentication.store';

export const LoginScreen = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [login, setLogin] = useState('jlg@jlg.com');
  const [password, setPassword] = useState('');
  const {connect} = useAuthenticationStore();

  const onConnected = async () => {
    setIsConnecting(true);
    await connect(login, password);
    setIsConnecting(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Connexion</Text>
      <View style={styles.form}>
        <View style={styles.label}>
          <Text style={styles.labelText}>Login</Text>
          <TextInput
            style={styles.input}
            defaultValue={login}
            onChange={event => {
              setLogin(event.nativeEvent.text);
            }}
          />
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Mot de passe</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            defaultValue={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          {isConnecting ? (
            <ActivityIndicator />
          ) : (
            <Button title="Se connecter" onPress={onConnected} />
          )}
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
