import React from 'react';
import { ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { images } from '../../assets/images';
import Begin from './begin';

const Walkthrough = () => {
  return (
    // <Swiper>
    //   <ImageBackground
    //     style={{ flex: 1, height: '100%' }}
    //     source={images.WalkthroughImage1}
    //     resizeMode='cover'
    //   >
    //     <Text>11</Text>
    //   </ImageBackground>
    //
    //   <ImageBackground source={images.WalkthroughImage1}>
    //     <Text>12</Text>
    //   </ImageBackground>
    //   <ImageBackground source={images.WalkthroughImage1}>
    //     <Text>13</Text>
    //   </ImageBackground>
    // </Swiper>
    <Swiper loop={false}>
      <ImageBackground source={images.WalkthroughImage1} style={{ flex: 1 }} />
      <ImageBackground source={images.WalkthroughImage2} style={{ flex: 1 }} />
      <ImageBackground source={images.WalkthroughImage3} style={{ flex: 1 }} />
      <Begin />
    </Swiper>
  );
};

export default Walkthrough;
