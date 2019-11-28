import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addSandwichToCart } from '../actions/userActions'


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
                    onPress={this.handleAddToCart}
                    title="Add to Cart"
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
        sandwiches: state.menuReducer.sandwiches
    }
}

const connectedSandwichShowScreen = connect(mapStateToProps, {addSandwichToCart})(SandwichShowScreen)

export default connectedSandwichShowScreen