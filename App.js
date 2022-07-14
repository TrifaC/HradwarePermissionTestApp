import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from './src/screens/StartScreen';
import AndroidPermissionScreen from './src/screens/AndroidPermissionScreen';

const navigator = createStackNavigator(
  {
    Start: StartScreen,
    AndroidPermission: AndroidPermissionScreen
  },
  {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
      title: 'Hardware Permission Test',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};