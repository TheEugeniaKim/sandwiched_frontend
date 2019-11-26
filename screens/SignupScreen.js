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

    createUser = () => {
        const value = this._form.getValue()
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
        .then(response => response.json())
        .then(user = () => {
        this.props.login(user)
        })
        .then(this.props.navigation.navigate('Login'))
    }

    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <KeyboardAwareScrollView>

                    <Image 
                        style={{height: 130, width: 240, justifyContent: 'center'}}
                        source={require('../sandwiched_logo.png')} 
                        />
                    <Form 
                        ref={c => this._form = c}
                        type={CreateUser} 
                        options={options}
                        /> 
                    <Button 
                        title="Create User"
                        onPress={this.createUser} 
                        />
                </KeyboardAwareScrollView>
            </View>
        )}
}

// function mapStateToProps(state){
//     return {
//       firstName: state.firstName,
//     }
//   }

  

export default SignupScreen