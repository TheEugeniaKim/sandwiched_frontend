import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'


function RecentOrdersComponent(props){
    
    let priceArray = props.order.sandwiches.map(sandwich => Number(sandwich.price))
    let price = priceArray.reduce((a,b) => a + b, 0)

    return(
        <ListItem style={styles.item}
            title={`Ordered At: ${props.order.created_at.slice(0,10)}`}
            subtitle={`Price: ${price.toFixed(2)}`}
            bottomDivider
            chevron
        />
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#E39A66',
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 15,
        width: 300
    },
    title: {
        fontSize: 25,
    },
})

function mapStateToProps(state){
    return {
        recentOrders: state.userReducer.recentOrders,
        sandwiches: state.menuReducer.sandwiches
    }
}


const connectedRecentOrdersComponent = connect(mapStateToProps, null)(withNavigation(RecentOrdersComponent))

export default connectedRecentOrdersComponent


