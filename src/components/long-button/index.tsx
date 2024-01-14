import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

const LongButton = ({
  onPress,
  title,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          padding: 12,
          backgroundColor: '#079DDA',
          borderRadius: 12,
          alignItems: 'center',
        },
        style,
      ]}
    >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LongButton;
