import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { images } from '../../assets/images';

export const Book = () => {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 25,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={images.DefaultBook}
        style={{
          width: undefined,
          height: 200,
          aspectRatio: 2 / 3,
          borderRadius: 25,
          alignSelf: 'center',
        }}
        resizeMode={'cover'}
      />
    </TouchableOpacity>
  );
};
