import React from 'react';
import { ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { images } from '../../assets/images';
import Begin from './begin';

const Walkthrough = () => {
  return (
    <Swiper autoplay loop={false}>
      <ImageBackground source={images.WalkthroughImage1} style={{ flex: 1 }} />
      <ImageBackground source={images.WalkthroughImage2} style={{ flex: 1 }} />
      <ImageBackground source={images.WalkthroughImage3} style={{ flex: 1 }} />
      <Begin />
    </Swiper>
  );
};

export default Walkthrough;
