import React from 'react'
import { View, Button, Image, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

class LoginScreen extends React.Component {

  handleSubmit = () => {
    const value = this._form.getValue()
    const email = value.email 
    fetch('http://smi.local:3000/users/login/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email: value.email, 
      })
    })
    .then(response => response.json())
    .then(user = () => {
      this.props.login(user)
    })
    .then(this.props.navigation.navigate('Welcome'))
  }

  render(){
    const { userReducer = {} } = this.props

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          style={{height: 130, width: 240}}
          source={require('../sandwiched_logo.png')} 
        />
        <Text>Don't have an account yet?</Text>
        <Button 
          title="Join Now" 
          onPress={() => {this.props.navigation.navigate('SignUp')}}
        />
        <Form 
          ref={c => this._form = c}
          type={User} 
        /> 
        <Button
          title="Login"
          onPress={this.handleSubmit}
        />

        {/* <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate('Home') 
          }}
        /> */}
      </View>
    )
  }  
}

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 150,
      padding: 120,
      backgroundColor: '#ffffff',
    },
  });

  function mapStateToProps(state){
    return {
      firstName: state.firstName,
    }
  }

  const connectedLoginScreen = connect(mapStateToProps, {
    login
  })(LoginScreen)

export default connectedLoginScreen