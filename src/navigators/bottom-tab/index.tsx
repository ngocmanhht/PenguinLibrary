import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import { Screens } from '../../const';
import { Favourite } from '../../screens/favourite';
import { Settings } from '../../screens/settings';
import { Icon } from '../../components/Icon';
import { Icons } from '../../assets/icons/const';
import LibraryStack from '../library-stack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderRadius: 15,
          paddingTop: 30,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon focused={focused} source={Icons.Home} />
          ),
        }}
        name={Screens.Home}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon focused={focused} source={Icons.Library} />
          ),
        }}
        name={Screens.LibraryStack}
        component={LibraryStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon focused={focused} source={Icons.Heart} />
          ),
        }}
        name={Screens.Favorites}
        component={Favourite}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon focused={focused} source={Icons.Settings} />
          ),
        }}
        name={Screens.Settings}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
