import React from 'react'
import { View, Text, Button, Imag } from 'react-native'
import { connect } from 'react-redux'



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

export default connect(({menuReducer}) => ({menuReducer}))(LoginScreen)