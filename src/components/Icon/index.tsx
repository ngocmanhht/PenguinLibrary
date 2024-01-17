import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

export const Icon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => {
  return (
    <View style={{ gap: 5 }}>
      <Image
        source={source}
        style={{ width: 25, height: 25 }}
        resizeMode={'cover'}
      />
      <View
        style={{ borderWidth: 1.5, borderColor: focused ? '#079DDA' : 'white' }}
      />
    </View>
  );
};
