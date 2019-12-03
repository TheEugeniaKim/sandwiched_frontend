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
        {id: 7, category: "Grilled Steak"},
        {id: 8, category: "Build Your Own"}
    ]

    return (
        <View >
            <HeaderComponent />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text> Menu </Text>
                    <FlatList
                        data={categories}
                        renderItem={({item}) => <SandwichCategoryComponent category={item.category}/>}
                        keyExtractor={category => category.id.toString()}
                        />
                </View>
        </View>
    )
}

function mapStateToProps(state){
    return {newState: state} 
}

const connectedMenuScreen = connect(mapStateToProps, null)(MenuScreen)

export default connectedMenuScreen


