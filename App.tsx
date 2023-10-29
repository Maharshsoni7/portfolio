/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, Text, } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';


const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}


export default App;
