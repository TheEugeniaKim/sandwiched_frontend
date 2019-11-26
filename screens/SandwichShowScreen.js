import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class SandwichShowScreen extends React.Component {

    state = {
        comment: ""
    }

    handleAddToCart = () => {
        console.log(this.state)
        this.props.navigation.navigate("Cart")
    }

    render(){

        let sandwich = this.props.sandwiches.filter(sandwich => sandwich.name === this.props.selectedSandwich)
        let ingredientsArray = sandwich[0].ingredients.map(ingredient => ingredient.name)
        let ingredients = ingredientsArray.join()
    
        return(
            <View style={styles.container}>
                <Text style={styles.title}> {this.props.selectedSandwich} </Text>
                <Text > {ingredients} </Text>
                <Text> Price: {sandwich[0].price} </Text>

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

const connectedSandwichShowScreen = connect(mapStateToProps, null)(SandwichShowScreen)

export default connectedSandwichShowScreen