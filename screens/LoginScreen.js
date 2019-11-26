import React from 'react'
import { View, Button, Image, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import t from 'tcomb-form-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getSandwiches, getIngredients } from '../actions/menuActions'


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
    .then(user => {
      this.props.login(user)
    })


    .then(this.props.navigation.navigate('Welcome'))
  }

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardAwareScrollView >
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
        </KeyboardAwareScrollView>
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
      state
    }
  }

  const connectedLoginScreen = connect(mapStateToProps, {
    login,
    getSandwiches,
    getIngredients
  })(LoginScreen)

export default connectedLoginScreen