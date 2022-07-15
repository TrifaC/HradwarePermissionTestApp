import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as PermissionProvider } from './src/contexts/PermissionContext';

import PermissionListScreen from './src/screens/PermissionListScreen';

const navigator = createStackNavigator(
  {
    PermissionList: PermissionListScreen,
  },
  {
    initialRouteName: 'PermissionList',
    defaultNavigationOptions: {
      title: 'Hardware Permission Test',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <PermissionProvider>
      <App />
    </PermissionProvider>
  );
};