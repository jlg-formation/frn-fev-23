import React, {useCallback, useEffect, useState} from 'react';
import {SplashScreen} from './screens/SplashScreen';
import {displayName} from './app.json';
import {version} from './package.json';
import {LoginScreen} from './screens/LoginScreen';
import {MenuScreen} from './screens/MenuScreen';
import {useAuthenticationStore} from './stores/authentication.store';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const authenticationStore = useAuthenticationStore();

  useEffect(() => {
    setTimeout(() => {
      console.log('set to false');
      setShowSplashScreen(false);
    }, 500);
  }, []);

  const onConnected = useCallback(() => {
    authenticationStore.connect();
  }, [authenticationStore]);

  return showSplashScreen ? (
    <SplashScreen name={displayName} version={version} />
  ) : authenticationStore.user ? (
    <MenuScreen />
  ) : (
    <LoginScreen onConnected={onConnected} />
  );
};

export default App;
