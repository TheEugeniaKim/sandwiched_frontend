import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { selectedSandwich } from '../actions/menuActions'

function SandwichCardComponent(props){

    return(
        <View style={styles.item}>
        <TouchableOpacity
            onPress={() => {
                props.selectedSandwich(props.sandwich)
                props.navigation.navigate('SandwichShow')
            }}
            // style={[
            //     styles.item,
            //     { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
            // ]}
        >

        <Text style={styles.title}>{props.sandwich} </Text>
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#E39A66',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})

function mapStateToProps(state){
    return {newState: state}
}


const connectedSandwichCardComponent = connect(mapStateToProps, {selectedSandwich})(withNavigation(SandwichCardComponent))

export default connectedSandwichCardComponent


