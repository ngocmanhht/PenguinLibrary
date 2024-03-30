import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from '../../components/text';
import Container from '../../components/container';
import { images } from '../../assets/images';
import { FontSizes } from '../../assets/styles/typography';
import { CustomTextInput } from '../../components/text-input';
import { Controller, useForm } from 'react-hook-form';
import { RegisterInformation } from '../../model/register';
import { Icons } from '../../assets/icons/const';
import { StepOne } from './stepOne';

export const Register = () => {
  const { control } = useForm<RegisterInformation>({ defaultValues: {} });

  return (
    <Container src={images.RegisterBackground}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ flex: 1 }} />
        <View style={{ marginTop: 25, flex: 2 }}>
          <Text
            style={{
              fontSize: FontSizes.xxxl * 1.25,
              fontWeight: 'bold',
              color: '#444444',
              alignSelf: 'center',
            }}
          >
            Đăng ký
          </Text>
          <View
            style={{
              flex: 1,
              width: '100%',
              padding: 20,
              gap: 10,
            }}
          >
            <StepOne control={control} />
          </View>
        </View>
      </View>
    </Container>
  );
};
