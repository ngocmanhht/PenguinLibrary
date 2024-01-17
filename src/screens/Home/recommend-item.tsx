import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { images } from '../../assets/images';
import { FontSizes } from '../../assets/styles/typography';
import { Text } from '../../components/text';

export const RecommendItem = () => {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 25,
        gap: 10,
      }}
    >
      <Image
        source={images.DefaultBook}
        style={{
          width: 100,
          height: undefined,
          aspectRatio: 1,
          borderRadius: 25,
        }}
        resizeMode={'cover'}
      />
      <View style={{ flex: 1, gap: 5, justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: FontSizes.xxxl,
            fontWeight: 'bold',
            color: '#9D4105',
          }}
        >
          Anime
        </Text>
        <Text>Tác giả: NgocDa</Text>
      </View>
    </TouchableOpacity>
  );
};
