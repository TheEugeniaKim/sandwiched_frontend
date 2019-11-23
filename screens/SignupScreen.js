import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native';

const Form = t.form.Form;

const CreateUser = t.struct({
    first_name: t.String,
    last_name: t.String,
    email: t.String,
    password: t.String,
    birthday: t.Date, 
    phone: t.Number 
});


class SignupScreen extends React.Component {

    createUser = () => {
        console.log("hi we're creating a user")
    }

    render() {
        return(
            <View>
                <Image 
                    style={{height: 130, width: 240, justifyContent: 'center'}}
                    source={require('../sandwiched_logo.png')} 
                />
                <Form 
                    ref={c => this._form = c}
                    type={CreateUser} 
                /> 
                <Button 
                    title="Create User"
                    onPress={this.createUser} 
                />
            </View>
        )}
}

export default SignupScreen