import React from 'react';
import { ImageBackground, View } from 'react-native';
import { images } from '../assets/images';
import { FontSizes } from '../assets/styles/typography';
import { Text } from '../components/text';

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  // success: (props: any) => (
  //   <BaseToast
  //     {...props}
  //     style={{ borderLeftColor: 'pink' }}
  //     contentContainerStyle={{ paddingHorizontal: 15 }}
  //     text1Style={{
  //       fontSize: 15,
  //       fontWeight: '400',
  //     }}
  //   />
  // ),
  success: ({ text2 }: { text2: string }) => (
    <View
      style={{
        height: 60,
        width: '95%',
        alignSelf: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageBackground
        style={{
          height: 60,
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode={'cover'}
        source={images.BackgroundSuccess}
      >
        <Text
          style={{
            fontSize: FontSizes.xl,
            color: '#3EB655',
            fontWeight: 'bold',
            right: 30,
          }}
        >
          {text2}
        </Text>
      </ImageBackground>
    </View>
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: ({ text2 }: { text2: string }) => (
    <View
      style={{
        height: 60,
        width: '95%',
        alignSelf: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageBackground
        style={{
          height: 60,
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode={'cover'}
        source={images.BackgroundError}
      >
        <Text
          style={{
            fontSize: FontSizes.xl,
            color: 'red',
            fontWeight: 'bold',
            right: 30,
          }}
        >
          {text2}
        </Text>
      </ImageBackground>
    </View>
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  tomatoToast: ({ text1 }: { text1: string }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
    </View>
  ),
};
