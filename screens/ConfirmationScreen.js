import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent'
import { Header } from 'react-navigation-stack'

function ConfirmationScreen(props){
    return (
        <View style={styles.container}>
            <HeaderComponent />
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../sandwiched_logo.png')} 
                        />
                    <Text style={styles.text}>Congratulations, {props.firstName}!</Text>
                    <Text style={styles.text}> You have placed your order and it's waiting for you at the store!</Text> 
                    
                </View>
        </View>
    )
}

function mapStateToProps(state){
    return {
        firstName: state.userReducer.firstName
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
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#22DBE7"
    },
    logo: {
        height: 130, 
        width: 240,
        alignItems: "center",
        marginTop: 30,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    
    },
})

const connectedConfirmationScreen = connect(mapStateToProps, null)(ConfirmationScreen)

export default connectedConfirmationScreen
