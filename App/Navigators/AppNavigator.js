import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import SplashScreen from 'App/Modules/SplashScreen/SplashScreen'
import LoginScreen from '../Modules/Login/LoginScreen';
import DashboardScreen from '../Modules/Dashboard/DashboardScreen';

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: DashboardScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen,
  
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: {
        title: 'Home',
        style: { headerTintColor: 'red' },
        headerTransparent: true,
      },
    },
  },
  {
    initialRouteName: 'SplashScreen',
    defaultNavigationOptions: ({ navigation }) => ({
      header: null,
    })
  }
)
export default createAppContainer(StackNavigator)
