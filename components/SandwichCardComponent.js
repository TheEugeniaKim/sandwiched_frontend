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
        marginHorizontal: 10,
        borderRadius: 14,
        padding: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
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


