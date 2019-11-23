import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import WelcomeScreen from './screens/WelcomeScreen'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignupScreen,
  },
  Welcome: {
    screen: WelcomeScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator)