import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Icons } from '../../assets/icons/const';
import { FontSizes } from '../../assets/styles/typography';

export const CustomTextInput = ({
  placeholder,
  showEyeIcon = false,
  value,
  onChange,
}: {
  placeholder?: string;
  showEyeIcon?: boolean;
  value: string;
  onChange: (e: string) => void;
}) => {
  const [show, setShow] = useState(false);

  return (
    <View
      style={{
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        borderColor: '#E6E6E6',
      }}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(e: string) => onChange(e)}
        secureTextEntry={showEyeIcon ? !show : false}
        style={{
          flex: 1,
          fontWeight: 'bold',
          color: '#ACACAC',
          fontSize: FontSizes.lg,
        }}
      />

      {showEyeIcon && (
        <TouchableOpacity onPress={() => setShow(!show)}>
          {!show ? (
            <Image
              style={{ width: 20, height: 20 }}
              resizeMode={'contain'}
              source={Icons.EyeOpen}
            />
          ) : (
            <Image
              style={{ width: 20, height: 20 }}
              resizeMode={'contain'}
              source={Icons.EyeHide}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
