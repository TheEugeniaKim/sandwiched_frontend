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
            <View style={styles.container} > 

                <HeaderComponent />

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
                                <Text style={styles.textName}> {item.name} </Text>
                                <Text style={styles.textComment}> {item.comment}</Text>
                                <Text style={styles.textPrice}> ${item.price} </Text>
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
        )
    }
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
    item: {
        backgroundColor: '#E39A66',
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 15,
        width: 300,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 35,
        alignItems: 'center',
        width: 350,
        borderRadius: 14,
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
    },
    textName: {
        fontSize: 20,
    },
    textComment: {
        fontSize: 15 
    },
    textPrice: {
        fontSize: 15
    }
})


//* <Text style={styles.button} onPress={() => {this.handleTextOnPress(sandwichOrderArray)}} > Add Items to Cart </Text> */

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