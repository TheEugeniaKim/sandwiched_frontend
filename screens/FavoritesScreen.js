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
        <View > 
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

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center', 
        justifyContent: 'center'
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
