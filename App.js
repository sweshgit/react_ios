import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ReactMoE from 'react-native-moengage';

export default class HomePage extends React.Component{
  render(){
    ReactMoE.initialize()
    ReactMoE.showInApp()
    return(
      <View style={styles.home}>
        <Text>
          Welcome to Home Page
        </Text>
      </View>
    );
   }
}
const styles = StyleSheet.create({
  home : {
    fontSize : 30,
    color : '#abfe23',
    justifyContent : "center",
    textAlign : "center",
    padding : 100,
    flex : 1
  }
});
