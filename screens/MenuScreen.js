import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import SandwichCategoryComponent from '../components/SandwichCategoryComponent'
import HeaderComponent from '../components/HeaderComponent'

function MenuScreen(props){
    
    let categories = [
        {id: 1, category: "All-Time-Favorites"},
        {id: 2, category: "Grilled Chicken"}, 
        {id: 3, category: "Breaded Chicken"},
        {id: 4, category: "Chef's Selection"},
        {id: 5, category: "Fish"},
        {id: 6, category: "Gourmet Turkey"},
        {id: 7, category: "Grilled Steak"}
    ]

    return (
        <View style={styles.container}>
            <HeaderComponent />
                <View style={styles.container}>
                    <Text style={styles.text}> Menu </Text>
                    <FlatList
                        data={categories}
                        renderItem={({item}) => <SandwichCategoryComponent category={item.category}/>}
                        keyExtractor={category => category.id.toString()}
                        />
                </View>
        </View>
    )
}

const Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: '#22DBE7',
        height: Dimensions.get("window").height, 
        width: Dimensions.get("window").width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 3,
        backgroundColor: '#22DBE7',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

function mapStateToProps(state){
    return {newState: state} 
}

const connectedMenuScreen = connect(mapStateToProps, null)(MenuScreen)

export default connectedMenuScreen


