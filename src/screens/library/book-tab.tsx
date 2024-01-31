import React from 'react';
import { BookArea } from './book-area';
import { Icons } from '../../assets/icons/const';
import { View } from 'react-native';

export const BookTab = () => {
  return (
    <View>
      <BookArea leftSrc={Icons.Category} title={'Chủ đề'} />
    </View>
  );
};
