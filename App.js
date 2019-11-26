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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App

