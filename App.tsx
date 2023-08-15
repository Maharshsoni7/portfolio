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


const App = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <AppNavigator />
    </SafeAreaView>
  );
}


export default App;
