import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from './src/screens/StartScreen';

const navigator = createStackNavigator(
  {
    Start: StartScreen,
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