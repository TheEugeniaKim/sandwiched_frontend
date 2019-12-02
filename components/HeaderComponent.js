import React from 'react';
import { View, Image } from 'react-native'
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';


function HeaderComponent(props){
    return (
        <View > 
            <Header 
                containerStyle = {{backgroundColor: '#358E96', height: 100}}
                centerComponent={{ text: "SANDWICHED", style: { color: '#fff', fontSize: 30, fontWeight: 'bold'} }}
                leftComponent = {<Ionicons 
                    name='ios-menu'
                    style={{width: 150, height: 150}}
                    type='ionicon'
                    onPress={()=>props.navigation.navigate('MenuNavigator')} 
                />}
                rightComponent = {<Ionicons 
                    name='ios-cart'
                    style={{width: 150, height: 150}}
                    type='ionicon'
                    onPress={()=>props.navigation.navigate('Cart')} 
                />}
            />
        </View>
    )
}

export default HeaderComponent