
import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator)