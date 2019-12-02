import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation' 
import MenuNavigator from './MenuNavigator'
import WelcomeScreen from './screens/WelcomeScreen'
import MenuScreen from './screens/MenuScreen'
import SandwichCategoryShowScreen from './screens/SandwichCategoryShowScreen'
import SandwichShowScreen from './screens/SandwichShowScreen'
import CartScreen from './screens/CartScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'

export default createAppContainer( 
    createStackNavigator({
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
        },
        Confirmation: {
          screen: ConfirmationScreen
        },
        MenuNavigator: {
          screen: MenuNavigator,
        },
      }, {
        initialRouteParams: 'Home',
        }
    )
)
        