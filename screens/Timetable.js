import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import BgTB from '../assets/tb.jfif'

export default class Timetable extends React.Component{
  render(){
    return(
    <View style={styles.container}>
     <ImageBackground source={require('../assets/tb.jfif')}style={styles.image}>
     <Text style={styles.text}> ᴛɪᴍᴇᴛᴀʙʟᴇ </Text>
      <TouchableOpacity >  
          <Text style ={ styles.button}> Make your timetable</Text>
     </TouchableOpacity>
    
      <TouchableOpacity> 
      <Text style={styles.button}> Alarm </Text>
      </TouchableOpacity>

          <TouchableOpacity> 
      <Text style={styles.button}> Next ---></Text>
      </TouchableOpacity>
       </ImageBackground>
      
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    width:"100%",
    height:"100%"
  },
   text: {
     backgroundColor:'pink',
     color:'white',
    textAlign: 'center',
    fontSize: 30,
    margin:30,
    fontWeight: 'bold',
   
    //fontFamily:'Times New Roman',
   
   },
    button: {
    width: '90%',
    height: 50,
    margin:30,
    marginLeft:150,
    alignSelf: 'center',
    padding: 10,
    backgroundColor:"white",
  
    color:"pink",
    fontSize: 22,
   
  }
});
