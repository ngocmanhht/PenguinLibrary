import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from '../../components/text';
import useToast from '../../hooks/use-toast';
import Container from '../../components/container';
import { images } from '../../assets/images';
import { FontSizes } from '../../assets/styles/typography';
import { FunctionBlock } from './function-block';
import { Icons } from '../../assets/icons/const';
import { BookTab } from './book-tab';
import { VideoTab } from './video-tab';
import { HistoryTab } from './history-tab';
import { SearchInput } from '../../components/search-input';

const Library = () => {
  const toast = useToast();
  const [tab, setTab] = useState(1);

  return (
    <Container src={images.MainBackground}>
      <Text
        style={{
          fontSize: FontSizes.xxxl * 1.25,
          color: '#001A72',
          alignSelf: 'center',
          fontWeight: 'bold',
        }}
      >
        Thư viện
      </Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          gap: 15,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            borderWidth: 2,
            borderRadius: 15,
            width: '100%',
            borderColor: '#079DDA',
            flexDirection: 'row',
            padding: 8,
            gap: 20,
          }}
        >
          <FunctionBlock
            onCLick={() => setTab(1)}
            isClicked={tab === 1}
            imgSrc={Icons.Book}
          />

          <FunctionBlock
            onCLick={() => setTab(2)}
            isClicked={tab === 2}
            imgSrc={Icons.Video}
          />

          <FunctionBlock
            onCLick={() => setTab(3)}
            isClicked={tab === 3}
            imgSrc={Icons.Clock}
          />
        </View>
        <SearchInput />

        {tab === 1 && <BookTab />}
        {tab === 2 && <VideoTab />}
        {tab === 3 && <HistoryTab />}
      </ScrollView>
    </Container>
  );
};

export default Library;
