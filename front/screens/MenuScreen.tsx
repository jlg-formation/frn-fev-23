import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from './menu/HomeScreen';
import {LegalScreen} from './menu/LegalScreen';
import {SettingScreen} from './menu/SettingScreen';

const Tab = createBottomTabNavigator();

export const MenuScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Legal" component={LegalScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
