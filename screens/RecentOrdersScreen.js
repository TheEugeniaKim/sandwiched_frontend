import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import RecentOrdersComponent from '../components/RecentOrdersComponent'

function RecentOrdersShowScreen(props){
    
    let category = props.selectedSandwichCategory
    let sandwiches = props.sandwiches.filter(sandwich => sandwich.category === category)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> {props.selectedSandwichCategory} Sandwiches </Text>
            <FlatList
                data={sandwiches}
                renderItem={({item}) => <RecentOrdersComponent sandwich={item.name} />}
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


const connectedRecentOrdersShowScreen = connect(mapStateToProps, null)(RecentOrdersShowScreen)


export default connectedRecentOrdersShowScreen