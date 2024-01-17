import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Container from '../../components/container';
import { images } from '../../assets/images';
import { FontSizes } from '../../assets/styles/typography';
import { Icons } from '../../assets/icons/const';
import { ActivityBlock } from './activity-block';
import { RecommendItem } from './recommend-item';
import { Text } from '../../components/text';

const Home = () => {
  return (
    <Container src={images.MainBackground}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          gap: 25,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
          <Image
            source={images.DefaultAvatar}
            style={{ width: 60, height: 60, borderRadius: 9999 }}
          />
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontSize: FontSizes.lg,
                fontWeight: 'bold',
                color: '#9D4105',
              }}
            >
              Xin chào !
            </Text>
            <Text
              style={{
                fontSize: FontSizes.xl,
                fontWeight: 'bold',
                color: '#9D4105',
              }}
            >
              Nguyễn Thu Hường
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#079DDA',
            padding: 10,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={images.KingPenguin}
            style={{
              width: 150,
              height: undefined,
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
          />
          <View style={{ flex: 1, gap: 15 }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: FontSizes.xl,
              }}
            >
              "Nâng cấp để mở khoá ngay hàng ngàn câu truyện hấp dẫn “
            </Text>

            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 20,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: 'red',
                  fontWeight: 'bold',
                  fontSize: FontSizes.xl,
                  alignSelf: 'center',
                }}
              >
                Nâng cấp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            padding: 15,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                width: '100%',
              }}
            >
              <Text
                style={{
                  color: '#079DDA',
                  fontWeight: 'bold',
                  fontSize: FontSizes.xxl,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}
              >
                Hoạt động
              </Text>
              <Image
                source={Icons.HandWithStar}
                style={{ width: 30, height: 30, resizeMode: 'contain' }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <ActivityBlock src={images.ReadingActivity} title={'Đọc chuyện'} />
            <ActivityBlock src={images.Watching} title={'Xem video'} />
            <ActivityBlock src={images.History} title={'Lịch sử'} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Image
            source={Icons.Recommend}
            style={{
              width: 30,
              height: 30,
            }}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontSize: FontSizes.xl,
              color: '#444444',
              fontWeight: 'bold',
            }}
          >
            Gợi ý cho bé{' '}
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
        </View>
      </ScrollView>
      {/*<Pdf*/}
      {/*  source={{*/}
      {/*    uri: 'https://storage.googleapis.com/lets-read-asia/pdfs/1677c3f7-e83e-47b9-976d-8c4970989f7d/Ch%C3%BA%20S%C3%B3c%20n%C3%A2u_Ti%E1%BA%BFng%20Vi%E1%BB%87t_PORTRAIT_V12021.04.26T043829+0000.pdf',*/}
      {/*    cache: true,*/}
      {/*  }}*/}
      {/*  style={styles.pdf}*/}
      {/*/>*/}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },

  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
