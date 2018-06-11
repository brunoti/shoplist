import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Drawer from './components/Drawer';
import HomeScreen from './screens/HomeScreen';
import InitialScreen from './screens/InitialScreen';
import LoginScreen from './screens/LoginScreen';

const DrawerStack = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
  gesturesEnabled: true,
  contentComponent: Drawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export default StackNavigator (
  {
    DrawerStack: {
      screen: DrawerStack,
    },
    Initial: {
      screen: InitialScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  }, {
    initialRouteName: 'InitialScreen',
    navigationOptions: {
      header: null
    }
  },
);
