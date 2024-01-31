import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets/icons/const';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../text';
import { FontSizes } from '../../assets/styles/typography';

const Header = ({ title }: { title: string }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          resizeMode={'contain'}
          source={Icons.ArrowBluelLeft}
          style={{ width: 30, height: undefined, aspectRatio: 1 }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: FontSizes.xxxl * 1.25,
          alignSelf: 'center',
          color: '#001A72',
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
      <View style={{ width: 30 }} />
    </View>
  );
};

export default Header;
