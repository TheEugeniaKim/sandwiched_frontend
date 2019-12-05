import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addSandwichToCart, addSandwichToFavorites } from '../actions/userActions'


class SandwichShowScreen extends React.Component {
    
    state = {
        comment: ""
    }
    
    sandwich = this.props.sandwiches.find(sandwich => sandwich.name === this.props.selectedSandwich)
    ingredientsArray = this.sandwich.ingredients.map(ingredient => ingredient.name)
    ingredients = this.ingredientsArray.join(", ")
    sandwichOrder = Object.assign(this.sandwich, {comment: this.state.comment})
    
    handleAddToCart = () => {
        this.props.addSandwichToCart(this.sandwichOrder)
        this.props.navigation.navigate("Cart")
    }

    handleAddToFavorites = () => {
        fetch('http://smi.local:3000/favorite_sandwich', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                user_id: this.props.userId,
                sandwich_id: this.sandwich.id
            })
        })
        .then(response => response.json())
        .then(favoriteSandwich => {
            if (favoriteSandwich.error) {
                return null 
            } else {
                this.props.addSandwichToFavorites(favoriteSandwich.payload)
            }
        })
        .then(this.props.navigation.navigate("Favorites"))

    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}> {this.props.selectedSandwich} </Text>
                <Text style={styles.ingredients}> {this.ingredients} </Text>
                <Text style={styles.price}> Price: ${this.sandwich.price} </Text>

                <TextInput 
                    placeholder="Comment" 
                    onChangeText={(v)=>this.setState({comment: v})}
                    value={this.state.comment}
                    style={styles.input}
                />
                <Text onPress={() => {this.handleAddToCart()}} style={styles.button}> Add To Cart </Text>
                <View style={styles.margin}>
                <Text onPress={() => {this.handleAddToFavorites()}} style={styles.button}> Add To Favorites </Text>
                </View>
            
            </View>
        )
    }
}

const Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#22DBE7',
        height: Dimensions.get("window").height, 
        width: Dimensions.get("window").width,
    },
    item: {
        backgroundColor: '#E39A66',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ingredients: {
        fontSize: 20,
        textAlign: 'center',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        backgroundColor: "white",
        paddingLeft: 5,
        marginVertical: 10,
        height: 150,
        width: 300,
        borderRadius: 10
    },
    button: {
        fontSize: 35,
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
    },
    margin: {
        marginTop: 20
    }
})


function mapStateToProps(state){
    return {
        selectedSandwich: state.menuReducer.selectedSandwich,
        sandwiches: state.menuReducer.sandwiches,
        userId: state.userReducer.userId
    }
}

const connectedSandwichShowScreen = connect(mapStateToProps, {addSandwichToCart, addSandwichToFavorites})(SandwichShowScreen)

export default connectedSandwichShowScreen