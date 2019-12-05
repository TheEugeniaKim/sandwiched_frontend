import React from 'react';
import AuthNavigator from './AuthNavigator'
import {connect} from 'react-redux'
import AppNavigator from './AppNavigator';

function Navigator(props){
  // if (props.loggedIn === true) 
    return <AppNavigator />
  // else
    // return <AuthNavigator />
}

function mapStateToProps(state){
  return { 
    loggedIn: state.userReducer.loggedIn
  }
}

export default connect(mapStateToProps, null)(Navigator)
