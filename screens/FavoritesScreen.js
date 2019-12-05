import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent'
import SandwichCardComponent from '../components/SandwichCardComponent'


function FavortiesScreen(props){
   
    let favoriteSandwichesArray = () => {
        return props.favorites.map(sandwich => {
            
            props.sandwiches.find(sandwichObj => {
                sandwichObj.id === sandwich.sandwich_id ? 
                sandwich.name = sandwichObj.name :
                null
            })
            return sandwich
        })
    }

    return (
        <View style={styles.container}> 
            <HeaderComponent />
                <View style={styles.container}>
                    <Text style={styles.title}> {props.firstName}'s Favorite Sandwiches </Text>
                    <FlatList
                        data={favoriteSandwichesArray()}
                        renderItem={({item}) => <SandwichCardComponent sandwich={item.name} />}
                        keyExtractor={sandwich => sandwich.id.toString()}
                    />
                </View>
        </View>
    )
}

const Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#22DBE7',
        height: Dimensions.get("window").height, 
        width: Dimensions.get("window").width,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

function mapStateToProps(state){
    return {
        firstName: state.userReducer.firstName,
        favorites: state.userReducer.favorites,
        sandwiches: state.menuReducer.sandwiches
    }
}

const connectedFavoritesScreen = connect(mapStateToProps, null)(FavortiesScreen)

export default connectedFavoritesScreen
