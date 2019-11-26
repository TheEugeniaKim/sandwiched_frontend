import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import { getIngredients, getSandwiches } from '../actions/menuActions'

class WelcomeScreen extends React.Component {
    
    componentDidMount() {
        Promise.all([fetch('http://smi.local:3000/sandwiches')
        , fetch('http://smi.local:3000/ingredients')
        ])
    
          .then(([sandwiches, ingredients]) => { 
             return Promise.all([sandwiches.json(), ingredients.json()]) 
          })
          .then(([sandwiches, ingredients]) => {
            this.props.getSandwiches(sandwiches)
            this.props.getIngredients(ingredients)
          })
    }

    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image 
                    style={{height: 130, width: 240}}
                    source={require('../sandwiched_logo.png')} 
                />
                <Text>HELLO, {this.props.firstName}!</Text>
                <Text>You're only a few taps away from your sandwich!</Text> 
                <Button 
                    title="Order Now"
                    onPress={() => {
                        this.props.navigation.navigate('Menu')}
                    }
                />
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
      firstName: state.userReducer.firstName,
    }
  }

const connectedWelcomeScreen = connect(mapStateToProps, {getSandwiches, getIngredients})(WelcomeScreen)

export default connectedWelcomeScreen