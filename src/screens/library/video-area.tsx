import React from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from '../../components/text';
import { FontSizes } from '../../assets/styles/typography';
import { Icons } from '../../assets/icons/const';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../const';

export const VideoArea = ({
  leftSrc,
  title,
}: {
  leftSrc: ImageSourcePropType;
  title: string;
}) => {
  const navigation = useNavigation();
  return (
    <View style={{ width: '100%', gap: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Image
            source={leftSrc}
            style={{ width: 45, height: undefined, aspectRatio: 1 }}
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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Screens.VideoDetail as never, { id: 1 } as never)
        }
      >
        <ImageBackground
          source={{ uri: 'https://wallpapercave.com/wp/wp3405080.jpg' }}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 5 / 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          resizeMode={'contain'}
        >
          <Image
            source={Icons.Play}
            style={{
              width: 40,
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode={'contain'}
          />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
