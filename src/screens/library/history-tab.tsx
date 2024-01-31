import React from 'react';
import { View } from 'react-native';
import { BookArea } from './book-area';
import { Icons } from '../../assets/icons/const';
import { VideoArea } from './video-area';

export const HistoryTab = () => {
  return (
    <View style={{ marginTop: 10, gap: 10 }}>
      <BookArea leftSrc={Icons.MostView} title={'Sách đã đọc'} />
      <VideoArea leftSrc={Icons.MostView} title={'Video đã xem'} />
    </View>
  );
};
