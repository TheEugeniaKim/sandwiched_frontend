import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import HeaderComponent from '../components/HeaderComponent'
import { addSandwichToCart } from '../actions/userActions'

class RecentOrderShowScreen extends React.Component{

    state = {
        comment: ""
    }
    
    
    onChangeText = (text) => {
        this.setState({
            comment: []
        })
    }

    handleOnPress = (item) => {
        this.props.addSandwichToCart(item)
        this.props.navigation.navigate('Cart')
    }

    // handleTextOnPress = (sandwichOrderArray) => {
    //     console.log(sandwichOrderArray)
    //     this.props.addSandwichToCart(sandwichOrderArray)
    //     this.props.navigation.navigate('Cart')
    // }
    
    render () {
        let order = this.props.recentOrders.find(order => order.id === this.props.selectedOrder)
        let sandwichArray = order.sandwiches
        let sandwichOrderArray = order.sandwich_orders
        let dataArray = () => {
             return sandwichArray.map(sandwich => {
                sandwichOrderArray.find(sandwichOrder => {
                    sandwichOrder.sandwich_id === sandwich.id
                    return sandwich.comment = sandwichOrder.comment
                })
                return sandwich
            })
        }
            
        return (
            <View> 
                <View style={flex=1}>
                    <HeaderComponent />
                        <View style={styles.container}>
                            <Text style={styles.title}> Express Re-Order? </Text>

                                <FlatList 
                                    data={dataArray()}
                                    keyExtractor={item => "" + item.id}
                                    renderItem={({ item }) => {
                                        return ( 
                                            <TouchableOpacity 
                                                onPress={() => {this.handleOnPress(item)}}
                                                style={styles.item}
                                            > 
                                                <Text> {item.name} </Text>
                                                <Text> {item.comment}</Text>
                                                <Text> ${item.price} </Text>
                                            </TouchableOpacity>

                                        )
                                    }}
                                />

                            {/* <Text style={styles.button} onPress={() => {this.handleTextOnPress(sandwichOrderArray)}} > Add Items to Cart </Text> */}
                                
                        </View> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    item: {
        backgroundColor: '#E39A66',
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 15,
        width: 300
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold', 
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center'
    }
})



// <TextInput
// style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
// onChangeText={text => onChangeText(text)}
// value={sadnwich_orders.comment}
// />
function mapStateToProps(state){
    return {
        userId: state.userReducer.userId,
        firstName: state.userReducer.firstName,
        selectedOrder: state.menuReducer.selectedOrder,
        recentOrders: state.userReducer.recentOrders
    }
}

const connectedRecentOrderShowScreen = connect(mapStateToProps, {addSandwichToCart})(withNavigation(RecentOrderShowScreen))

export default connectedRecentOrderShowScreen