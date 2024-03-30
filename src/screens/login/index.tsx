import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Container from '../../components/container';
import { images } from '../../assets/images';
import { FontSizes } from '../../assets/styles/typography';
import { CustomTextInput } from '../../components/text-input';
import LongButton from '../../components/long-button';
import { screenHeight } from '../../responsive';
import useToast from '../../hooks/use-toast';
import { Controller, useForm } from 'react-hook-form';
import UIStore from '../../stores/ui';
import useStores from '../../hooks/use-stores';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../const';
import { Text } from '../../components/text';

const Login = () => {
  const toast = useToast();

  const uiStore: UIStore = useStores().uiStore;

  const navigaton = useNavigation();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = (values: any) => {
    navigaton.navigate(Screens.BottomTab as never);
  };

  return (
    <Container src={images.AuthenticationBackground}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 15,
          marginTop: 15,
        }}
      >
        <View style={{ width: '100%', gap: 15 }}>
          <Text
            style={{
              fontSize: FontSizes.xxxl * 1.5,
              fontWeight: 'bold',
              color: '#444444',
              alignSelf: 'center',
            }}
          >
            Đăng nhập
          </Text>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { value, onBlur, onChange } }) => (
              <CustomTextInput
                onChange={onChange}
                value={value}
                placeholder={'Nhập tên đăng nhập'}
              />
            )}
            name={'userName'}
          />

          <View style={{ gap: 10 }}>
            <Controller
              control={control}
              // rules={{
              //   required: true,
              // }}
              render={({ field: { value, onBlur, onChange } }) => (
                <CustomTextInput
                  showEyeIcon
                  onChange={onChange}
                  value={value}
                  placeholder={'Nhập mật khẩu'}
                />
              )}
              name={'password'}
            />

            <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
              <Text
                style={{
                  color: '#ACACAC',
                  fontSize: FontSizes.lg,
                  fontWeight: 'bold',
                }}
              >
                Quên mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: '100%', gap: 15, top: screenHeight(15) }}>
          <LongButton title={'Đăng nhập'} onPress={handleSubmit(onSubmit)} />
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#ACACAC',
                fontSize: FontSizes.lg,
              }}
            >
              Bạn chưa có tài khoản ?
            </Text>
            <TouchableOpacity
              onPress={() => navigaton.navigate(Screens.Register as never)}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#079DDA',
                  fontSize: FontSizes.lg,
                }}
              >
                Đăng ký ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;
