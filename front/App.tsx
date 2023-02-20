import React, {useCallback, useEffect, useState} from 'react';
import {SplashScreen} from './screens/SplashScreen';
import {displayName} from './app.json';
import {version} from './package.json';
import {LoginScreen} from './screens/LoginScreen';
import {MenuScreen} from './screens/MenuScreen';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('set to false');
      setShowSplashScreen(false);
    }, 500);
  }, []);

  const onConnected = useCallback(() => {
    setIsConnected(true);
  }, [setIsConnected]);

  return showSplashScreen ? (
    <SplashScreen name={displayName} version={version} />
  ) : isConnected ? (
    <MenuScreen />
  ) : (
    <LoginScreen onConnected={onConnected} />
  );
};

export default App;
