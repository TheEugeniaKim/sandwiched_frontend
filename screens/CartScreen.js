import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

function CartScreen(){

    return(
        <View>
            <Text> Cart Screen </Text>

            <Button 
                title="Order Now"
            />
        </View>
    )
}


function mapStateToProps(state){
    return {
        cart: state.userReducer.cart
    }
}

const connectedCartScreen = connect(mapStateToProps, null)(withNavigation(CartScreen))

export default connectedCartScreen