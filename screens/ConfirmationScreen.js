import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'

function ConfirmationScreen(props){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image 
                style={{height: 130, width: 240}}
                source={require('../sandwiched_logo.png')} 
            />
            <Text>Congratulations, {props.firstName}!</Text>
            <Text> You have placed your order and it's waiting for you at the store!</Text> 
            
        </View>
    )
}

function mapStateToProps(state){
    return {
        firstName: state.userReducer.firstName
    }
}

const connectedConfirmationScreen = connect(mapStateToProps, null)(ConfirmationScreen)

export default connectedConfirmationScreen
