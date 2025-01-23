import React, { ReactElement } from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { styles } from './roundbutton.styles';

const RoundButton = ({
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
      style={[styles.roundbutton, style]}
      onPress={onPress}
    >
      {title ? <Text style={styles.roundbuttonText}>{title}</Text> : children}
    </TouchableOpacity>
  );
};


export default RoundButton;
