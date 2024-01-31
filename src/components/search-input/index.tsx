import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets/icons/const';

export const SearchInput = () => {
  return (
    <View
      style={{
        borderWidth: 2,
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        gap: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderColor: '#079DDA',
      }}
    >
      <TouchableOpacity>
        <Image
          style={{ width: 30, height: 30 }}
          resizeMode={'contain'}
          source={Icons.Search}
        />
      </TouchableOpacity>
      <TextInput placeholder={'Nhập tên sách'} style={{ flex: 1 }} />
    </View>
  );
};
