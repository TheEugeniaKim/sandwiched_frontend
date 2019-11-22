import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './Navigator'
import store from './store'
import { Provider } from 'react-redux'

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router />
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

