import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'

class WelcomeScreen extends React.Component {

    render(){
        return(
            <View>
                
            </View>
        )
    }

}

function mapStateToProps(state){
    return {
      ingredients: state.menuReducer.ingredients
    }
  }

const connectedBuildYourOwnScreen = connect(mapStateToProps, null)(BuildYourOwnScreen)

export default connectedBuildYourOwnScreen