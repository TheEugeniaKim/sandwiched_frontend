import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Form = t.form.Form;

const CreateUser = t.struct({
    first_name: t.String,
    last_name: t.String,
    email: t.String,
    password: t.String,
    phone: t.Number,
    birthday: t.Date
})

const options = {
    fields : {
        Recorded_Date: {
            label: 'birthday',
            mode: 'date',
            config: {
            format: (date) => moment(date).format('DD-MMM-YYYY'),
            },
        },
    }
}



class SignupScreen extends React.Component {

    createUser = (value) => {
        fetch('http://smi.local:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                first_name: value.first_name,
                last_name: value.last_name,
                email: value.email,
                birthday: value.birthday,
                password: value.password,
                phone: value.phone
            })
        })
        .then(this.props.navigation.navigate('Login'))
    }

    handleSubmit = () => {
        value = this._form.getValue()
        this.createUser(value)
    }

    render() {
        return(
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <View style={styles.logoContainer}> 
                        <Image 
                            style={styles.logo}
                            source={require('../sandwiched_logo.png')} 
                        />
                    </View>
                    <View style={styles.formContainer}>
                        <Form 
                            ref={c => this._form = c}
                            type={CreateUser} 
                            options={options}
                        /> 
                    </View>
                    <Text style={styles.button} onPress={this.handleSubmit.bind(this)}>
                        Create User
                    </Text>
                    
                </KeyboardAwareScrollView>
            </View>
        )}
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
    logo: {
        height: 130, 
        width: 240,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30,
    },
    logoContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#22DBE7",
        marginTop: 30,
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#22DBE7',
        alignItems: 'baseline',
        alignSelf: 'center',
        justifyContent: 'center',
        width: Dimensions.get("window").width,
        marginTop: 20
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
  

export default SignupScreen