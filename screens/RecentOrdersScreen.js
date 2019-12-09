import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import RecentOrdersComponent from '../components/RecentOrdersComponent'
import HeaderComponent from '../components/HeaderComponent'

class RecentOrdersShowScreen extends React.Component {

    render () {    
        return (
            <View style={styles.container}>
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

const Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 3, 
        alignItems: 'center', 
        backgroundColor: '#22DBE7',
        height: Dimensions.get("window").height, 
        width: Dimensions.get("window").width,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
})
  
function mapStateToProps(state){
    return {
        userId: state.userReducer.userId, 
        firstName: state.userReducer.firstName,
        recentOrders: state.userReducer.recentOrders, 
        sandwiches: state.menuReducer.sandwiches
    }
}


const connectedRecentOrdersScreen = connect(mapStateToProps, null)(RecentOrdersShowScreen)


export default connectedRecentOrdersScreen