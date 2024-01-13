import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import useToast from '../../hooks/use-toast';

const Library = () => {
  const toast = useToast();
  return (
    <SafeAreaView>
      <Button
        onPress={() => {
          toast.show({
            type: 'success',
            title: '12',
            content: 'Hello World',
          });
        }}
        title={'show toast'}
      />
      <Text>Library</Text>
    </SafeAreaView>
  );
};

export default Library;
