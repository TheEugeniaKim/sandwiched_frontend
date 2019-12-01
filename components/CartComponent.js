import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

function CartComponent(props){

    let sandwichObject = props.sandwiches.find(sandwich => sandwich.name === props.sandwich)

    return(
        <View style={styles.item}>
            <TouchableOpacity
                onPress={() => {
                    null 
                }}
                // style={[
                //     styles.item,
                //     { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
                // ]}
            >

<Text style={styles.title}> {props.sandwich} </Text>
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
        backgroundColor: '#E39A66',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})

function mapStateToProps(state){
    return {
        cart: state.userReducer.cart,
        sandwiches: state.menuReducer.sandwiches
    }
}

const connectedCartComponent = connect(mapStateToProps, null)(withNavigation(CartComponent))

export default connectedCartComponent

