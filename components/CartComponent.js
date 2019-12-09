import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { removeSanwichFromCart } from '../actions/userActions'


function CartComponent(props){

    let sandwichObject = props.sandwiches.find(sandwich => sandwich.name === props.sandwich)

    return(
        <View >
            <TouchableOpacity
                style={styles.item}
            >
                <Text style={styles.title}> {props.sandwich} </Text>
                <Ionicons 
                    name='md-remove-circle-outline'
                    type='ionicon'
                    color='white'
                    size={50}
                    onPress={() => {                        
                        let newCart = [...props.cart.slice(0, props.index),...props.cart.slice((props.index + 1), props.cart.length)]
                        props.removeSanwichFromCart(newCart)
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#E39A66',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#E39A66',
        borderRadius: 2,
        width: 350,
        borderRadius: 14,
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
    title: {
        fontSize: 32,
    },
    ionicon: {

    },
})

function mapStateToProps(state){
    return {
        cart: state.userReducer.cart,
        sandwiches: state.menuReducer.sandwiches
    }
}

const connectedCartComponent = connect(mapStateToProps, {removeSanwichFromCart})(withNavigation(CartComponent))

export default connectedCartComponent


