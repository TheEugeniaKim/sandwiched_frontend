import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'


function HomeScreen(props){

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image 
                style={{height: 130, width: 240}}
                source={require('../sandwiched_logo.png')} 
            />
            <Text>HELLO, HUNGRY FRIEND!</Text>
            <Text>You're only a few taps away from your sandwich!</Text> 
            <Button 
                title="Order Now"
            />
        </View>
    )
}

export default HomeScreen