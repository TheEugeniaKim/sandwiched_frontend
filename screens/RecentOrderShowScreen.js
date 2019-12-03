import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import HeaderComponent from '../components/HeaderComponent'

function RecentOrderShowScreen(props){
    return (
        <View> 
            <View style={flex=1}>
                <HeaderComponent />
                    <View style={styles.container}>
                        <Text style={styles.title}> {props.firstName}'s Orders </Text>
                                {/* <FlatList 
                                    data={this.props.recentOrders}
                                    keyExtractor={item => "" + item.id}
                                    renderItem={({ item }) => {
                                        return ( 
                                            <ListItem style={{width: 300}}
                                            title={`Ordered At: ${props.order.created_at.slice(0,10)}`}
                                            subtitle={`Price: ${price.toFixed(2)}`}
                                            onPress={handleOnPress}
                                            bottomDivider
                                            chevron
                                            />
                                        )
                                    }}
                                /> */}
                            
                    </View> 
            </View>
        </View>
    )
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
    },
})

function mapStateToProps(state){
    return {
        userId: state.userReducer.userId,
        firstName: state.userReducer.firstName
    }
}

const connectedRecentOrderShowScreen = connect(mapStateToProps, null)(withNavigation(RecentOrderShowScreen))

export default connectedRecentOrderShowScreen