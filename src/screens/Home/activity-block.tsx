import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { FontSizes } from '../../assets/styles/typography';
import { Text } from '../../components/text';

export const ActivityBlock = ({
  src,
  title,
}: {
  src: ImageSourcePropType;
  title: string;
}) => {
  return (
    <TouchableOpacity
      style={{ paddingVertical: 10, gap: 10, alignItems: 'center' }}
    >
      <Image
        source={src}
        style={{
          width: 80,
          height: undefined,
          aspectRatio: 1,
        }}
        resizeMode={'contain'}
      />
      <Text
        style={{
          color: '#444444',
          fontSize: FontSizes.xl,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
