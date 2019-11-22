import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
});


class LoginScreen extends React.Component {
    render() {
        const { menuReducer = {} } = this.props
        const { text = ''} = menuReducer
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image 
            style={{height: 130, width: 240}}
            source={require('../sandwiched_logo.png')} 
          />
          <Form type={User} /> 
          <Button
          title="Login"
          onPress={this.handleSubmit}
        />

          <Text>My name is : {text}</Text>
          <Button
            title="Go to Home"
            onPress={() => {
              this.props.navigation.navigate('Home') 
            }}
          />
        </View>
      );
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

export default connect(({menuReducer}) => ({menuReducer}))(LoginScreen)