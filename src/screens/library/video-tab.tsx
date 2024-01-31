import React from 'react';
import { View } from 'react-native';
import { VideoArea } from './video-area';
import { Icons } from '../../assets/icons/const';

export const VideoTab = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <VideoArea leftSrc={Icons.Recommend} title={'Video xem nhiều nhất'} />
    </View>
  );
};
