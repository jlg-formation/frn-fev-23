import React, {useMemo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../theme';

export type ButtonType = 'primary' | 'secondary';

const size = 30;

export const IconButton = ({
  type,
  name,
  onPress,
  disabled,
}: {
  type: ButtonType;
  name: string;
  onPress?: () => void;
  disabled?: boolean;
}) => {
  const buttonPrimaryColor = 'white';
  const secondaryColor = primaryColor;

  const color = type === 'primary' ? buttonPrimaryColor : secondaryColor;

  const opacity = useMemo(() => (disabled ? 0.4 : 1), [disabled]);
  return (
    <View style={[styles.container, styles[type], {opacity: opacity}]}>
      <Pressable
        style={[styles.pressable]}
        android_ripple={{color: 'gray'}}
        onPress={onPress}
        disabled={disabled}>
        <Ionicons
          style={styles.icon}
          name={name + '-outline'}
          size={size}
          color={color}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 2,
  },
  pressable: {
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  primary: {
    backgroundColor: primaryColor,
    borderColor: primaryColor,
  },
  secondary: {
    borderColor: primaryColor,
  },
  icon: {
    transform: [
      {
        scale: 1.05,
      },
      {
        translateX: 0,
      },
    ],
  },
});
