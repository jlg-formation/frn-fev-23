import React from 'react';
import {SplashScreen} from './screens/SplashScreen';
import {displayName} from './app.json';
import {version} from './package.json';
import {LoginScreen} from './screens/LoginScreen';
import {MenuScreen} from './screens/MenuScreen';

const App = () => {
  const showSplashScreen = false;
  const isConnected = true;

  return showSplashScreen ? (
    <SplashScreen name={displayName} version={version} />
  ) : isConnected ? (
    <MenuScreen />
  ) : (
    <LoginScreen />
  );
};

export default App;
