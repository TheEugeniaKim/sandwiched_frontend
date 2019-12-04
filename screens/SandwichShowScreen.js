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
                null
            } else {
                this.props.addSandwichToFavorites(favoriteSandwich)
            }
        })
        .then(this.props.navigation.navigate("Favorites"))

    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}> {this.props.selectedSandwich} </Text>
                <Text > {this.ingredients} </Text>
                <Text> Price: ${this.sandwich.price} </Text>

                <TextInput 
                    placeholder="Comment" 
                    onChangeText={(v)=>this.setState({comment: v})}
                    value={this.state.comment}
                    style={styles.input}
                />

                <Button 
                    onPress={() => {null}}
                    title="Add to Cart"
                /> 

                <Button 
                    onPress={() => {this.handleAddToFavorites()}}
                    title="Add to Favorites"
                />
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
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
        input: {
            backgroundColor: "white",
            paddingLeft: 5,
            marginVertical: 10,
            height: 35,
            borderRadius: 10
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