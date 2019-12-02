import React from 'react';
import { View } from 'react-native'
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

function HeaderComponent(props){
    return (
        <View > 
            <Header 
                containerStyle = {{backgroundColor: '#358E96', height: 100}}
                leftComponent = {<Ionicons 
                    name='ios-menu' 
                    type='ionicon'
                    color='white'
                    size={50}
                    onPress={()=>props.navigation.navigate('MenuNavigator')} 
                />}
                centerComponent={{ text: "SANDWICHED", style: { color: '#fff', fontSize: 25, fontWeight: 'bold'} }}
                rightComponent = {<Ionicons 
                    name='ios-cart'
                    type='ionicon'
                    color='white'
                    size={50}
                    onPress={()=>props.navigation.navigate('Cart')} 
                />}
            />
        </View>
    )
}

const connectedHeaderComponent = (withNavigation(HeaderComponent))

export default connectedHeaderComponent