import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


function HomeScreen(props){
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Hangry?</Text>
            </View>

            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../sandwiched_logo.png')} 
                    />
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.button} onPress={() => {props.navigation.navigate('Login')}}>
                Login/Signup
                </Text>
                
            </View>

        </View>
    )
}  

const Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 120,
      backgroundColor: '#22DBE7',
      alignItems: 'center',
      height: height, 
      width: width
    },
    headerContainer:{
        flex: 1, 
        marginTop: 20
    },
    header: {
        justifyContent: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        // marginVertical: 1,
        // marginHorizontal: 2
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 120,
        borderRadius: 10
    },
    logo: {
        height: 175, 
        width: 350,
        borderRadius: 8
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#E39A66',
        height: 60,
        width: 200,
        borderRadius: 8
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 35,
        backgroundColor: '#E39A66',
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
    }
  })


function mapStateToProps(state){
    return {
        sandwiches: state.sandwiches,
        ingredients: state.ingredients
    }
}

const connectedHomeScreen = connect(mapStateToProps, null)(HomeScreen)


export default connectedHomeScreen