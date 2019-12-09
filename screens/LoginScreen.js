import React from 'react'
import { View, Image, Text, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import t from 'tcomb-form-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Form = t.form.Form;

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

const User = t.struct({
  email: t.String,
  password: t.String
});

class LoginScreen extends React.Component {


  handleSubmit = () => {
    const value = this._form.getValue()
    if (!value){
      return alert('Please complete the full form')
    }
    fetch('http://smi.local:3000/users/login/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email: value.email 
      })
    })
    .then(response => response.json())
    .then(user => {
      this.handleLogin(user)
    })
    .then(this.props.navigation.navigate('Welcome'))
  }

  handleLogin = (user) => {
    if (user.error)
      return Alert.alert('User Not Found. Please Try Again')
    else 
      return this.props.login(user)
  }

  

  render(){
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}} styles={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
              style={{height: 130, width: 240}}
              source={require('../sandwiched_logo.png')} 
            />
       
        </View>

        <View style={styles.signupContainer}>
          <Text>Don't have an account yet?</Text>
        
          <Text style={styles.joinNow} onPress={() => {this.props.navigation.navigate('SignUp')}}>
          Join Now
          </Text>             
        </View>
    
          <View style={styles.formContainer}>
            <Form 
              ref={c => this._form = c}
              type={User} 
              options={options}
            /> 
          </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.button} onPress={this.handleSubmit}>
          Login
          </Text>
        </View>
      </KeyboardAwareScrollView>
    )
  }  
}

const Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#22DBE7',
      height: Dimensions.get("window").height, 
      width: Dimensions.get("window").width,
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 100,
      alignItems: 'center',
      backgroundColor: '#22DBE7',
    },
    signupContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#22DBE7',
      alignItems: 'baseline',
      alignSelf: 'center',
      justifyContent: 'center',
      width: Dimensions.get("window").width,
    },
    joinNow: {
      fontSize: 20,
      color: 'blue'
    
    },
    formContainer: {
      flex: 2,
      backgroundColor: '#22DBE7',
      paddingHorizontal: 20,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: '#22DBE7',
      height: 60,
    }, 
    button: {
      fontSize: 35,
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#E39A66',
      width: 150,
      alignItems: 'center',
      width: 350,
      borderRadius: 14,
      padding: 10,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
})

  function mapStateToProps(state){
    return {
      state
    }
  }

  const connectedLoginScreen = connect(mapStateToProps, {
    login
  })(LoginScreen)

export default connectedLoginScreen