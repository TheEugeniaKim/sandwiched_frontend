import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation' 
import MenuNavigator from './MenuNavigator'
import WelcomeScreen from './screens/WelcomeScreen'
import MenuScreen from './screens/MenuScreen'
import SandwichCategoryShowScreen from './screens/SandwichCategoryShowScreen'
import SandwichShowScreen from './screens/SandwichShowScreen'
import RecentOrdersScreen from './screens/RecentOrdersScreen'
import RecentOrderShowScreen from './screens/RecentOrderShowScreen'
import FavoritesScreen from './screens/FavoritesScreen'
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
      RecentOrders: {
        screen: RecentOrdersScreen
      },
      RecentOrderShow: {
        screen: RecentOrderShowScreen
      },
      Favorites: {
        screen: FavoritesScreen
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
      },{
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    }
  )
)
        