import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'


function RecentOrdersComponent(props){
    console.log("Order is:" , props.order)
    return(
        <View style={styles.item}>
            <Text style={styles.title}> Ordered At: {props.order.created_at} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
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
    return {

    }
}


const connectedRecentOrdersComponent = connect(mapStateToProps, null)(withNavigation(RecentOrdersComponent))

export default connectedRecentOrdersComponent


