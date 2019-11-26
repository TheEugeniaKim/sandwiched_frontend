import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'


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
                props.navigation.navigate('Login') 
            }}
            />
        </View>
    )
}  

function mapStateToProps(state){
    return {
        sandwiches: state.sandwiches,
        ingredients: state.ingredients
    }
}

const connectedHomeScreen = connect(mapStateToProps, null)(HomeScreen)


export default connectedHomeScreen