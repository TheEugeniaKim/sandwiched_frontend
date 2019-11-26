import React from 'react'
import { View, Button, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import SandwichCategoryComponent from '../components/SandwichCategoryComponent'

function MenuScreen(props){
    
    let categories = [
        {id: 1, category: "All-Time-Favorites"},
        {id: 2, category: "Grilled Chicken"}, 
        {id: 3, category: "Breaded Chicken"},
        {id: 4, category: "Chef's Selection"},
        {id: 5, category: "Fish"},
        {id: 6, category: "Gourmet Turkey"},
        {id: 7, category: "Grilled Steak"},
        {id: 8, category: "Build Your Own"}
    ]
    // let sandwiches = props.newState.menuReducer.sandwiches
    // let categories = sandwiches.map(sandwich => sandwich.category)
    // let uniqueCategories = categories.filter((v,i) => categories.indexOf(v) === i)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>YOU ARE ON THE MENU PAGE..</Text>
            <FlatList
                data={categories}
                renderItem={({item}) => <SandwichCategoryComponent category={item.category}/>}
                keyExtractor={category => category.id.toString()}
            />
        </View>
    )
}

function mapStateToProps(state){
    return {newState: state}   
}

const connectedMenuScreen = connect(mapStateToProps, null)(MenuScreen)

export default connectedMenuScreen


