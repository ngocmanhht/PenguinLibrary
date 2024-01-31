import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

export const FunctionBlock = ({
  imgSrc,
  onCLick,
  isClicked,
}: {
  imgSrc: ImageSourcePropType;
  onCLick: () => void;
  isClicked: boolean;
}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        padding: 5,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: isClicked ? '#079DDA' : 'white',
        backgroundColor: 'white',
      }}
      onPress={onCLick}
    >
      <Image
        source={imgSrc}
        style={{ width: 30, height: 30 }}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};
