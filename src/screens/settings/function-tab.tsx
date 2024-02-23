import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Icons } from '../../assets/icons/const';
import { images } from '../../assets/images';
import { FontSizes } from '../../assets/styles/typography';

const FunctionTab = ({
  icon,
  functText,
  showArrowRight = true,
  onPress,
}: {
  icon: ImageSourcePropType;
  functText: string;
  showArrowRight?: boolean;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      disabled={showArrowRight}
      onPress={onPress}
      style={{
        borderBottomWidth: 1,
        paddingVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#C7C7C7',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Image
          source={icon}
          style={{
            width: 35,
            height: undefined,
            aspectRatio: 1,
          }}
          resizeMode={'contain'}
        />
        <Text
          style={{
            color: '#444444',
            fontWeight: 'bold',
            fontSize: FontSizes.lg,
          }}
        >
          {functText}
        </Text>
      </View>

      {showArrowRight && (
        <TouchableOpacity>
          <Image
            style={{
              width: 20,
              height: undefined,
              aspectRatio: 1,
              alignSelf: 'center',
            }}
            resizeMode={'contain'}
            source={Icons.RightArrow}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default FunctionTab;

const styles = StyleSheet.create({});
