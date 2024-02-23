import React, { useState } from 'react';
import { Image, SafeAreaView, Switch, View } from 'react-native';
import { Text } from '../../components/text';
import Container from '../../components/container';
import { images } from '../../assets/images';
import { FontSizes } from '../../assets/styles/typography';
import FunctionTab from './function-tab';
import { Icons } from '../../assets/icons/const';
import UIStore from '../../stores/ui';
import useStores from '../../hooks/use-stores';

export const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const uiStore: UIStore = useStores().uiStore;

  return (
    <Container src={images.SettingBackground}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 25,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Image
            source={images.DefaultAvatar}
            style={{
              width: 100,
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode='contain'
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: FontSizes.xxxl * 1.25,
              color: 'white',
            }}
          >
            Đoàn Ngọc
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            backgroundColor: 'white',
            padding: 20,
            paddingTop: 50,
            gap: 20,
          }}
        >
          <FunctionTab
            icon={Icons.PersonalInformation}
            functText='Thông tin tài khoản'
          />
          <View
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
                source={Icons.FaceId}
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
                {'Đăng nhập bằng FaceID'}
              </Text>
            </View>

            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={'#f4f3f4'}
              ios_backgroundColor='#767577'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <FunctionTab icon={Icons.Update} functText='Nâng cấp tài khoản' />

          <FunctionTab icon={Icons.ResetPassword} functText='Đổi mật khẩu' />

          <FunctionTab
            icon={Icons.Logout}
            functText='Đăng xuất'
            showArrowRight={false}
            onPress={() =>
              uiStore.showAlertBox({
                msg: 'Bạn có chắc chắn muốn đăng xuất khỏi tài khoản ?',
              })
            }
          />
        </View>
      </View>
    </Container>
  );
};
