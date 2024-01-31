import React from 'react';
import { Screens } from '../../const';
import Library from '../../screens/library';
import { createStackNavigator } from '@react-navigation/stack';
import { VideoDetail } from '../../screens/video-detail';

const Stack = createStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.Library} component={Library} />
      <Stack.Screen name={Screens.VideoDetail} component={VideoDetail} />
    </Stack.Navigator>
  );
};

export default LibraryStack;
