import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { Text } from '../../components/text';
import useToast from '../../hooks/use-toast';

const Library = () => {
  const toast = useToast();
  return (
    <SafeAreaView>
      <Button
        onPress={() => {
          toast.show({
            type: 'success',
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
