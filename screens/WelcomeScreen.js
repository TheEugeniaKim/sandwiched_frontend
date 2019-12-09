import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getIngredients, getSandwiches } from '../actions/menuActions'
import HeaderComponent from '../components/HeaderComponent'

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
            <View style={styles.container}>
                <HeaderComponent /> 
                    <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo}
                            source={require('../sandwiched_logo.png')} 
                            />
                        <View style={styles.textContainer}>
                          <Text style={styles.text}>HELLO, {this.props.firstName}!</Text>
                          <Text style={styles.text}>You're only a few taps away from your sandwich!</Text> 

                        </View>
                        <View styles={{marginTop: 200}}></View>
                        <View style={styles.buttonContainer}>
                          <Text 
                            style={styles.button} 
                            onPress={() => this.props.navigation.navigate('Menu')}
                          > Order Now </Text>
                        </View>

                        <View style={{marginTop: 250}}></View>
                    </View>
            </View>
        )
    }
}

const Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22DBE7',
    height: Dimensions.get("window").height, 
    width: Dimensions.get("window").width,
  },
  logoContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "#22DBE7"
  },
  logo: {
    height: 130, 
    width: 240,
    alignItems: "center",
    marginTop: 30,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#22DBE7',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#22DBE7',
    height: 5,
    borderRadius: 8,
  },
  button: {
    fontSize: 35,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#E39A66',
    borderRadius: 2,
    width: 350,
    borderRadius: 14,
    padding: 10,
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
})

function mapStateToProps(state){
    return {
      firstName: state.userReducer.firstName
    }
  }

const connectedWelcomeScreen = connect(mapStateToProps, {getSandwiches, getIngredients})(WelcomeScreen)

export default connectedWelcomeScreen