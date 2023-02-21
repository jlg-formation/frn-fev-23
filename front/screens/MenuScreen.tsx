import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from './menu/HomeScreen';
import {LegalScreen} from './menu/LegalScreen';
import {SettingScreen} from './menu/SettingScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const getTabBarIcons =
  (iconName: string) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
    const icon = focused ? iconName : iconName + '-outline';
    return <Ionicons name={icon} size={size} color={color} />;
  };

const Tab = createBottomTabNavigator();

export const MenuScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: getTabBarIcons('home'),
          }}
        />
        <Tab.Screen
          name="Legal"
          component={LegalScreen}
          options={{
            tabBarIcon: getTabBarIcons('home'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarIcon: getTabBarIcons('home'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
