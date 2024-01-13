import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import { Screens } from '../../const';
import Library from '../../screens/library';
import { Favourite } from '../../screens/favourite';
import { Settings } from '../../screens/settings';
import { Icon } from '../../components/Icon';
import { Icons } from '../../assets/icons/const';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderRadius: 15,
          paddingTop: 35,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon source={focused ? Icons.ActiveHome : Icons.Home} />
          ),
        }}
        name={Screens.Home}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon source={focused ? Icons.ActiveLibrary : Icons.Library} />
          ),
        }}
        name={Screens.Library}
        component={Library}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon source={focused ? Icons.ActiveHeart : Icons.Heart} />
          ),
        }}
        name={Screens.Favorites}
        component={Favourite}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon source={focused ? Icons.ActiveSettings : Icons.Settings} />
          ),
        }}
        name={Screens.Settings}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
