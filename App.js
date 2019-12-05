import React from 'react';
import { StyleSheet } from 'react-native';
// import Router from './Navigator'
import store from './store'
import { Provider } from 'react-redux'
import Navigator from './Navigator'

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }

}


export default App

