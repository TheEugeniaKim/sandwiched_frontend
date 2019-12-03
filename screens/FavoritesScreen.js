import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent'

function FavortiesScreen(props){
    return (
        <View style={flex=1}> 
            <HeaderComponent />
                <View style={styles.container}>
                    <Text style={styles.title}> This is {props.firstName}'s Favorite Sandwiches </Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
    },
})

function mapStateToProps(state){
    return {
        firstName: state.userReducer.firstName
    }
}

const connectedFavoritesScreen = connect(mapStateToProps, null)(FavortiesScreen)

export default connectedFavoritesScreen
