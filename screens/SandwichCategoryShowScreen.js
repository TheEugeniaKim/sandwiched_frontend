import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import SandwichCardComponent from '../components/SandwichCardComponent'

function SandwichCategoryShowScreen(props){
    
    let category = props.selectedSandwichCategory
    let sandwiches = props.sandwiches.filter(sandwich => sandwich.category === category)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> {props.selectedSandwichCategory} Sandwiches </Text>
            <FlatList
                data={sandwiches}
                renderItem={({item}) => <SandwichCardComponent sandwich={item.name} />}
                keyExtractor={sandwich => sandwich.id.toString()}
            />
        </View>
    )

}


function mapStateToProps(state){
    return {
        selectedSandwichCategory: state.menuReducer.selectedSandwichCategory, 
        sandwiches: state.menuReducer.sandwiches
    }
}


const SandwichCategoryShowScreenConnected = connect(mapStateToProps, null)(SandwichCategoryShowScreen)


export default SandwichCategoryShowScreenConnected