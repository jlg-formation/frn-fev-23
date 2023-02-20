import React from 'react';
import {SplashScreen} from './screens/SplashScreen';
import {displayName} from './app.json';
import {version} from './package.json';
import {LoginScreen} from './screens/LoginScreen';

const App = () => {
  const showSplashScreen = false;

  return showSplashScreen ? (
    <SplashScreen name={displayName} version={version} />
  ) : (
    <LoginScreen />
  );
};

export default App;
