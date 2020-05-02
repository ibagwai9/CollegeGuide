import React from 'react';
import {  
  Text, 
  View,
  StyleSheet,
  StatusBar 
} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.defaultTxt}>Hello</Text>
      <Text style={[styles.defaultTxt, styles.selected]}>Kano</Text>
      <Text style={styles.defaultTxt}>Ramadhan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',//space-between, space-around, flex-end
    alignItems: 'flex-start',
    backgroundColor:'#DDDDDD',

  },
  defaultTxt: {
    textAlign:'center',
    fontSize: 22,
    padding:5,
    margin:5,
    borderWidth: 0.1,
    borderColor:'black',
  },
  header:{
    padding:5,
    margin:5,
    fontWeight:'bolder',
    color:'purple',
  },
  selected:{
    alignSelf:'flex-end',
    backgroundColor:'yellow',
    color:'purple'
  }
});
