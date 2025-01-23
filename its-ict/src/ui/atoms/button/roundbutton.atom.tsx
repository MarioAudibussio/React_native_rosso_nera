import React, { ReactElement } from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

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

const styles = StyleSheet.create({
  roundbutton: {
    marginRight:8,
    height: 50,
    width:50,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderColor: '#C7CACD',
    borderWidth: 1
  },
  roundbuttonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoundButton;
