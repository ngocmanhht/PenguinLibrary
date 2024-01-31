import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from '../../components/text';
import { Icons } from '../../assets/icons/const';
import { FontSizes } from '../../assets/styles/typography';
import { Book } from './book';

export const BookArea = ({
  leftSrc,
  title,
}: {
  leftSrc: ImageSourcePropType;
  title: string;
}) => {
  return (
    <View style={{ width: '100%', gap: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={leftSrc}
            style={{ width: 50, height: undefined, aspectRatio: 1 }}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontSize: FontSizes.xxl,
              fontWeight: 'bold',
              color: '#444444',
            }}
          >
            {title}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 10,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: FontSizes.lg,
              color: '#444444',
            }}
          >
            Xem thêm
          </Text>
          <Image
            style={{ width: 15, height: 15 }}
            resizeMode={'contain'}
            source={Icons.RightGray}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 20,
        }}
        style={{
          width: '100%',
        }}
        horizontal={true}
      >
        <Book />
        <Book />
        <Book />
        <Book />
      </ScrollView>
    </View>
  );
};
