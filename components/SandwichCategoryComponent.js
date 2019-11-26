import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';


function SandwichCategoryComponent(props){
    // let categories = props.sandwiches.map(sandwich => sandwich.category)
    // let uniqueCategories = categories.filter((v,i) => categories.indexOf(v) === i)
    console.log("Props here==> ",props)
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{props.category}</Text>

      </View>
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#E39A66',
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
export default SandwichCategoryComponent