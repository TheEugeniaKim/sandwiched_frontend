import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

function MenuNavigator(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title} > Menu </Text>
            <Text style={styles.title} > Recent Orders </Text>
            <Text style={styles.title} > Favorites </Text>
            <Text style={styles.title} > Account </Text>
            <Text style={styles.title} > Logout </Text>


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
        borderBottomColor: '#fff',
        padding: 5
    },
})


export default MenuNavigator