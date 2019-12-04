import React from 'react'
import { View, Text, FlatList, List, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import RecentOrdersComponent from '../components/RecentOrdersComponent'
import HeaderComponent from '../components/HeaderComponent'

class RecentOrdersShowScreen extends React.Component {

    render () {    
        return (
            <View style={flex=1}>
                <HeaderComponent />
                    <View style={styles.container}>
                        <Text style={styles.title}> {this.props.firstName}'s Recent Orders </Text>
                                <FlatList 
                                    data={this.props.recentOrders}
                                    keyExtractor={item => "" + item.id}
                                    renderItem={({ item }) => {
                                        return ( <RecentOrdersComponent id={item.id} order={item} />)
                                    }}
                                />
                            
                    </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#22DBE7',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    button: {
        height: 20,
        width: 30,
        borderRadius: 2
    }
})
  
function mapStateToProps(state){
    return {
        userId: state.userReducer.userId, 
        firstName: state.userReducer.firstName,
        recentOrders: state.userReducer.recentOrders, 
        sandwiches: state.menuReducer.sandwiches
    }
}

// {this.props.recentOrders.map(order => {
//     return <RecentOrdersComponent 
//         order={order}
//         key={order.id}
//     />
// })}


const connectedRecentOrdersScreen = connect(mapStateToProps, null)(RecentOrdersShowScreen)


export default connectedRecentOrdersScreen