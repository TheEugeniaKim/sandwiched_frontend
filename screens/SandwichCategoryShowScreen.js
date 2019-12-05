import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import SandwichCardComponent from '../components/SandwichCardComponent'

function SandwichCategoryShowScreen(props){
    
    let category = props.selectedSandwichCategory
    let sandwiches = props.sandwiches.filter(sandwich => sandwich.category === category)
    
    return (
        <View style={styles.container}>
            <View style={styles.wrappingContainer}>
                <Text style={styles.text}> {props.selectedSandwichCategory} Sandwiches </Text>
                <FlatList
                    data={sandwiches}
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
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#22DBE7',
        height: Dimensions.get("window").height, 
        width: Dimensions.get("window").width,
    },
    wrappingContainer: {
        marginTop: 50
    },
    text: {
        fontSize: 40, 
        fontWeight: 'bold',
        textAlign: 'center',
    },
})


function mapStateToProps(state){
    return {
        selectedSandwichCategory: state.menuReducer.selectedSandwichCategory, 
        sandwiches: state.menuReducer.sandwiches
    }
}


const SandwichCategoryShowScreenConnected = connect(mapStateToProps, null)(SandwichCategoryShowScreen)


export default SandwichCategoryShowScreenConnected