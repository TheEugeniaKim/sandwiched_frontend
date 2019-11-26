import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation' 
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MenuScreen from './screens/MenuScreen'
import SandwichCategoryShowScreen from './screens/SandwichCategoryShowScreen'
import SandwichShowScreen from './screens/SandwichShowScreen'
import CartScreen from './screens/CartScreen'

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
  SandwichCategoryShow: {
    screen: SandwichCategoryShowScreen
  },
  SandwichShow: {
    screen: SandwichShowScreen 
  },
  Cart: {
    screen: CartScreen
  }
}, {
    initialRouteName: 'Home',
  }
))

