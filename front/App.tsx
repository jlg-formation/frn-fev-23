import React, {useEffect, useState} from 'react';
import {displayName} from './app.json';
import {version} from './package.json';
import {LoginScreen} from './screens/LoginScreen';
import {MenuScreen} from './screens/MenuScreen';
import {SplashScreen} from './screens/SplashScreen';
import {useAuthenticationStore} from './stores/authentication.store';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const {user, checkIfConnected} = useAuthenticationStore();

  useEffect(() => {
    (async () => {
      await checkIfConnected();
      setShowSplashScreen(false);
    })();
  }, [checkIfConnected]);

  return showSplashScreen ? (
    <SplashScreen name={displayName} version={version} />
  ) : user ? (
    <MenuScreen />
  ) : (
    <LoginScreen />
  );
};

export default App;
