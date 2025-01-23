import React, { ReactElement } from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { styles } from './button.styles';

const Button = ({
  children,
  disabled,
  onPress,
  title,
  style,
}: {
  children: ReactElement;
  disabled?: boolean;
  onPress: () => void;
  title?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style]}
      onPress={onPress}
    >
      {title ? <Text style={styles.buttonText}>{title}</Text> : children}
    </TouchableOpacity>
  );
};

export default Button;
