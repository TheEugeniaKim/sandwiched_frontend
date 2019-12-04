import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { logout } from './actions/userActions'
import { withNavigation } from 'react-navigation'


function MenuNavigator(props){

    

    return(
        <View style={styles.container}>
            <Text style={styles.title} onPress={() => {props.navigation.navigate('Menu')}} > Menu </Text>
            <Text style={styles.title} onPress={() => {props.navigation.navigate('RecentOrders')}} > Recent Orders </Text>
            <Text style={styles.title} onPress={() => {props.navigation.navigate('Favorites')}} > Favorites </Text>
            <Text style={styles.title} onPress={() => {props.navigation.navigate('Account')}} > Account </Text>
            <Text style={styles.title} onPress={() => {props.logout()}} > Logout </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#965522'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        alignContent: 'center',
        height: 120,
        width: 250,
        borderBottomColor: '#fff',
        padding: 5
    },
})

function mapStateToProps(state){
    return {
        loggedIn: state.userReducer.loggedIn
    }
}

const connectedMenuNavigator = connect(mapStateToProps, {logout})(withNavigation(MenuNavigator))

export default connectedMenuNavigator

