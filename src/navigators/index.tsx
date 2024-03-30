import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottom-tab';
import { Screens } from '../const';
import Walkthrough from '../screens/walkthrough';
import Login from '../screens/login';
import { Register } from '../screens/register';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.Walkthrough} component={Walkthrough} />
      <Stack.Screen name={Screens.Login} component={Login} />
      <Stack.Screen name={Screens.Register} component={Register} />
      <Stack.Screen name={Screens.BottomTab} component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
