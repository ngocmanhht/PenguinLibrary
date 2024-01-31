import React, { useState } from 'react';
import Container from '../../components/container';
import { images } from '../../assets/images';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/header';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import { Text } from '../../components/text';
import { Icons } from '../../assets/icons/const';
import { FontSizes } from '../../assets/styles/typography';
import { screenWidth } from '../../responsive';
import { VideoBlock } from './video-block';

export const VideoDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [isLiked, setIsLiked] = useState(false);

  console.log(route?.params);

  return (
    <Container src={images.MainBackground}>
      <Header title={'Xem video'} />
      <View style={{ padding: 0 }}>
        <Video
          source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
          style={{
            height: 250,
          }}
          repeat={true}
          resizeMode={'stretch'}
          controls
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          padding: 10,
          flex: 1,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text
            style={{
              flex: 1,
              color: '#9D4105',
              fontSize: FontSizes.xl,
              fontWeight: 'bold',
            }}
          >
            TOP NHỮNG BỘ PHIM HOẠT HÌNH CHO BÉ GÁI NỔI TIẾNG NHẤT
          </Text>
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Image
              style={{ width: 30, height: undefined, aspectRatio: 1 }}
              source={!isLiked ? Icons.Unlike : Icons.Like}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#444444',
            fontSize: FontSizes.lg,
            fontWeight: 'bold',
          }}
        >
          NgocDa
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: screenWidth(12),
          }}
        >
          <Text
            style={{
              color: '#444444',
              fontSize: FontSizes.md,
            }}
          >
            2k6 Lượt xem
          </Text>

          <Text
            style={{
              color: '#444444',
              fontSize: FontSizes.md,
            }}
          >
            1 tháng trước
          </Text>

          <Text
            style={{
              color: '#444444',
              fontSize: FontSizes.md,
            }}
          >
            100 Lượt thích
          </Text>
        </View>

        <View style={{ marginTop: 20, flex: 1, gap: 10 }}>
          <Text
            style={{
              color: '#444444',
              fontSize: FontSizes.md,
              fontWeight: 'bold',
            }}
          >
            Tiếp theo
          </Text>

          <FlatList
            data={[0, 1, 2, 3]}
            style={{ flex: 1 }}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item, index }) => <VideoBlock />}
          />
        </View>
      </View>
      {/*<View style={{ flex: 1 }}>*/}
      {/*  <WebView*/}
      {/*    style={{ marginTop: Platform.OS == 'ios' ? 20 : 0 }}*/}
      {/*    javaScriptEnabled={true}*/}
      {/*    domStorageEnabled={true}*/}
      {/*    source={{*/}
      {/*      uri: 'https://youtu.be/15JQuSE_g9Y?list=RD15JQuSE_g9Y',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</View>*/}
    </Container>
  );
};
