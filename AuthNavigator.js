import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation' 
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

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
    }, {
        initialRouteParams: 'Home',
        }
))

    


