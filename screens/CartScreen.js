import React from 'react'
import { View, Text, Button, FlatList, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import CartComponent from '../components/CartComponent'
import { clearCart } from '../actions/userActions'
import HeaderComponent from '../components/HeaderComponent'

function createOrder(props){
        fetch('http://smi.local:3000/orders', {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accepts":"application/json"
            }, 
            body: JSON.stringify({
                user_id: props.userId
            })
        })
        .then(response => response.json())
        .then(order => createSandwichOrder(order, props))
}

function createSandwichOrder(order, props){
    for (i = 0; i < props.cart.length; i++) {
        fetch('http://smi.local:3000/sandwich_orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                order_id: order.id,
                sandwich_id: props.cart[i].id,
                price: props.cart[i].price,
                comment: props.cart[i].comment
            })
        })
        .then(response => response.json())
        .then(sandwich_order => props.clearCart())
    }
}


function handleOnPress(props){
    if (props.cart.length === 0) { 
        Alert.alert('There are no items in your cart. Please add sandwiches')
    } else {
        createOrder(props)
        props.navigation.navigate('Confirmation')
    }
}

function CartScreen(props){

    let totalArray = props.cart.map(sandwich => Number(sandwich.price))
    let total = totalArray.reduce((a , b) => a + b, 0)

    return(
        <View style={styles.container}>
            <HeaderComponent />
                <View>
                    <Text style={styles.heading}> {props.firstName}'s Cart </Text>
                    <FlatList
                        data={props.cart}
                        renderItem={({item, index}) => <CartComponent sandwich={item.name} index={index} />}
                        keyExtractor={ (item, index) => index.toString()}
                        />

                    <View style={styles.buttonContainer} >
                        <Text style={styles.total} > Total: ${total.toFixed(2)} </Text>

                        <Text onPress={() => {handleOnPress(props)}} style={styles.button}> Order Now </Text>

                        <Text onPress={() => {props.navigation.navigate('Menu')}} style={styles.button}> Add More Items To Cart </Text>
                    
                    </View> 
                    
                </View>
        </View>
    )
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
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    total: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#22DBE7',
        justifyContent: 'flex-end'
    },
    button: {
        fontSize: 25,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#E39A66',
        borderRadius: 2,
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
        marginTop: 15
      },
})

function mapStateToProps(state){
    return {
        firstName: state.userReducer.firstName,
        userId: state.userReducer.userId,
        cart: state.userReducer.cart
    }
}

const connectedCartScreen = connect(mapStateToProps, {clearCart})(withNavigation(CartScreen))

export default connectedCartScreen