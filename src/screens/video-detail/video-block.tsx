import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from '../../components/text';
import { FontSizes } from '../../assets/styles/typography';
import { screenWidth } from '../../responsive';

export const VideoBlock = () => {
  return (
    <TouchableOpacity style={{ width: '100%' }}>
      <Image
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 3 / 2,
        }}
        resizeMode={'stretch'}
        source={{
          uri: 'https://th.bing.com/th/id/R.885d3e0f6645dd3cb87dff367c6f6a6d?rik=jfe%2bYrOEa%2b%2bvCQ&riu=http%3a%2f%2fmylittlescraps.com%2fblog%2fwp-content%2fuploads%2f2007%2f08%2fpic-shark-guad2big.jpg&ehk=2F1kL16YE%2b7iJn844V0Jrd1l6QlSHU2TBDRzyizP810%3d&risl=&pid=ImgRaw&r=0',
        }}
      />
      <Text
        style={{
          color: '#9D4105',
          fontSize: FontSizes.md,
          fontWeight: 'bold',
        }}
      >
        LỚP CHÚNG TA ĐOÀN KẾT - BÉ BẢO AN
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: screenWidth(12),
        }}
      >
        <Text
          style={{
            color: '#444444',
            fontSize: FontSizes.sm,
          }}
        >
          2k6 Lượt xem
        </Text>

        <Text
          style={{
            color: '#444444',
            fontSize: FontSizes.sm,
          }}
        >
          1 tháng trước
        </Text>

        <Text
          style={{
            color: '#444444',
            fontSize: FontSizes.sm,
          }}
        >
          100 Lượt thích
        </Text>
      </View>
    </TouchableOpacity>
  );
};
