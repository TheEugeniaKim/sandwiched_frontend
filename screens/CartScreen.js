import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import CartComponent from '../components/CartComponent'

function createOrder(props){
    fetch('http://smi.local:3000/orders', {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accepts":"application/json"
        }, 
        body: JSON.stringify({
            userId: props.userId
        })
    })
    .then(response => response.json())
    .then(order => console.log(order))
}

// createSandwichOrder(order, props)

function createSandwichOrder(order, props){
    for (i = 0; i < props.cart.length; i++) {
        fetch('http://smi.local:3000/sandwich_orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                orderId: order.id,
                sandwichId: props.cart[i].id,
                price: props.cart[i].price,
                comment: props.cart[i].comment
            })
        })
    }
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
                    createOrder(props)
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
        userId: state.userReducer.userId,
        cart: state.userReducer.cart
    }
}

const connectedCartScreen = connect(mapStateToProps, null)(withNavigation(CartScreen))

export default connectedCartScreen