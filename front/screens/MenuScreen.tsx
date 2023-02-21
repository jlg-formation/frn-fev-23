import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from './menu/HomeScreen';
import {LegalScreen} from './menu/LegalScreen';
import {SettingScreen} from './menu/SettingScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../theme';
import {useI18nStore} from '../stores/i18n.store';

const getTabBarIcons =
  (iconName: string) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
    const icon = focused ? iconName : iconName + '-outline';
    return <Ionicons name={icon} size={size} color={color} />;
  };

const Tab = createBottomTabNavigator();

export const MenuScreen = () => {
  const {t} = useI18nStore();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: getTabBarIcons('home'),
            tabBarLabel: t.menu.home,
          }}
        />
        <Tab.Screen
          name="Legal"
          component={LegalScreen}
          options={{
            tabBarIcon: getTabBarIcons('information-circle'),
            tabBarLabel: t.menu.legal,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarIcon: getTabBarIcons('settings'),
            tabBarLabel: t.menu.settings,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
