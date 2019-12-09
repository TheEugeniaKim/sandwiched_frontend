import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { withNavigation } from 'react-navigation'
import HeaderComponent from '../components/HeaderComponent'

class AccountEditScreen extends React.Component {


    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent />
                    <View style={styles.logoContainer}>
                        <Image 
                        style={styles.logo}
                        source={require('../sandwiched_logo.png')} 
                        />
                    </View>

                    <KeyboardAwareScrollView>

                        <Text style={styles.text}> First Name: {this.props.firstName} </Text> 
                        <Text style={styles.text}> Last Name: {this.props.lastName} </Text>
                        <Text style={styles.text}> Email: {this.props.email} </Text>
                                            
                    </KeyboardAwareScrollView>
            </View>
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
        justifyContent: 'center',
        marginBottom: 120,
        borderRadius: 10
    },
    logo: {
        height: 175, 
        width: 350,
        borderRadius: 8
    },
    text: {
        fontSize: 25,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
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
        marginTop: 20,
    }
})

function mapStateToProps(state){
    return {
      firstName: state.userReducerfirstName,
      lastName: state.userReducer.lastName,
      email: state.userReducer.email
    }
  }

const connectedAccountEditScreen = connect(mapStateToProps, null)(withNavigation(AccountEditScreen))

export default connectedAccountEditScreen 



