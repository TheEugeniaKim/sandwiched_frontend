import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import CartComponent from '../components/CartComponent'

function CartScreen(props){

    let total = props.cart.map(sandwich => sandwich.price)
    console.log("total is", total)

    return(
        <View>
            <Text> {props.firstName}'s Cart </Text>
            <FlatList
                data={props.cart}
                renderItem={({item}) => <CartComponent sandwich={item.name} />}
                keyExtractor={ (item, index) => index.toString()}
            />

            <Text> Total: ${null} </Text>
            
            <Button 
                title="Order Now"
            />
        </View>
    )
}


function mapStateToProps(state){
    return {
        firstName: state.userReducer.firstName,
        cart: state.userReducer.cart
    }
}

const connectedCartScreen = connect(mapStateToProps, null)(withNavigation(CartScreen))

export default connectedCartScreen