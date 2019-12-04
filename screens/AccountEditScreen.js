import React from 'react'
import { View, Text, Button, Image  } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { withNavigation } from 'react-navigation'
import HeaderComponent from '../components/HeaderComponent'

class AccountEditScreen extends React.Component {


    render() {
        return(
            <View>
                <HeaderComponent />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image 
                            style={{height: 130, width: 240}}
                            source={require('../sandwiched_logo.png')} 
                            />

                        <KeyboardAwareScrollView>

                            <Text> First Name: {this.props.firstName} </Text> 
                            <Text> Last Name: {this.props.lastName} </Text>
                            <Text> Email: {this.props.email} </Text>
                            <Button 
                                title="Edit Account Info (Later)"
                                onPress={null} 
                                />
                        </KeyboardAwareScrollView>
                    </View>
            </View>
        )}
        
    // Form = t.form.Form;

    // EditUser = t.struct({
    //     first_name: t.String,
    //     last_name: t.String,
    //     email: t.String,
    //     password: t.String,
    //     phone: t.Number,
    //     birthday: t.Date
    // })

    // options = {
    //     fields : {
    //         Recorded_Date: {
    //             label: 'birthday',
    //             mode: 'date',
    //             config: {
    //             format: (date) => moment(date).format('DD-MMM-YYYY'),
    //             },
    //         },
    //     }
    // }

}

function mapStateToProps(state){
    return {
      firstName: state.userReducerfirstName,
      lastName: state.userReducer.lastName,
      email: state.userReducer.email
    }
  }

const connectedAccountEditScreen = connect(mapStateToProps, null)(withNavigation(AccountEditScreen))

export default connectedAccountEditScreen 



