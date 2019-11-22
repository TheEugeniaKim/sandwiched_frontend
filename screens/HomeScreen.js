import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import { addText } from '../actions/menuActions'

function HomeScreen(props){
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hangry?</Text>
        <Image 
            style={{height: 130, width: 240}}
            source={require('../sandwiched_logo.png')} 
        />
        <Button
        title="Login/Signup" 
        onPress={() => {
            props.addText('John Doe')
            props.navigation.navigate('Login') 
        }}
        />
    </View>
    )
}  

function mapStateToProps(state){
    return {
        text: state.text
    }
}


export default connect(mapStateToProps, {addText})(HomeScreen)