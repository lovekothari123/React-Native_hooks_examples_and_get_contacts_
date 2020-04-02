/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Dashboard from './src/contaner/Dashboard'
import {Provider as PaperProvider} from 'react-native-paper'
import AppNavigator from './src/navigations/index'

export default function App (){
  return (
    // <Dashboard/>
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
  );
};



