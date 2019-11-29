import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import CartComponent from '../components/CartComponent'

function createOrder(){
    fetch()
}

function CartScreen(props){

    let totalArray = props.cart.map(sandwich => Number(sandwich.price))
    let total = totalArray.reduce((a,b) => a+b, 0)

    return(
        <View>
            <Text> {props.firstName}'s Cart </Text>
            <FlatList
                data={props.cart}
                renderItem={({item}) => <CartComponent sandwich={item.name} />}
                keyExtractor={ (item, index) => index.toString()}
            />

            <Text> Total: ${total.toFixed(2)} </Text>
            
            <Button 
                title="Order Now"
                onPress={() => {
                    props.navigation.navigate('Confirmation')
                }}
            />

            <Button 
                title="Add More to Cart"
                onPress={() => {
                    props.navigation.navigate('Menu')
                }}
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