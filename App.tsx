/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigators';
import { Provider } from 'mobx-react';
import stores from './src/stores';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/config/toast-config';
import SplashScreen from 'react-native-splash-screen';
import AlertBox from './src/components/alert-box';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider {...stores}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
        <AlertBox />
        <Toast config={toastConfig as any} />
      </Provider>
    </>
  );
}

export default App;
