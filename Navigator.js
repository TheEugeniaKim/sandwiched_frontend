import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation' 
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MenuScreen from './screens/MenuScreen'


export default createAppContainer( 
  createStackNavigator({
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
  Menu: {
    screen: MenuScreen,
  },
}, {
    initialRouteName: 'Home',
  }
))

