import React from 'react';
import { ImageBackground } from 'react-native';
import { images } from '../../assets/images';
import LongButton from '../../components/long-button';
import { screenHeight } from '../../responsive';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../const';

const Begin = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: 'flex-end', padding: 20, gap: 10 }}
      source={images.Begin}
    >
      <LongButton
        style={{
          bottom: screenHeight(10),
        }}
        title={'Đăng nhập'}
        onPress={() => {
          navigation.navigate(Screens.Login as never);
        }}
      />
      <LongButton
        style={{
          bottom: screenHeight(10),
        }}
        title={'Đăng ký'}
        onPress={() => {}}
      />
    </ImageBackground>
  );
};

export default Begin;
