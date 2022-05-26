import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,ImageBackground, Image } from 'react-native';

//import AppHeader from '../components/AppHeader'
//Images
import FbIcon from '../assets/fbicon.png';
import InstaIcon from '../assets/InstaIcon.png';
import TwitterIcon from '../assets/twittericon.png';
import GoogleIcon from '../assets/googleicon.png';

export default class HomeScreen extends React.Component {

  goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }
  render(){
    return(
         <View style = {styles.container}>
    <ImageBackground source ={require("../assets/bg1.jpg")}style={styles.image}>
      <Text style={styles.text}> ♡ self euphoric ♡</Text>
     <TouchableOpacity
        style={styles.button1}
        onPress={this.goToBuzzerScreen("red")} >
        <Text style={styles.buttonText}> SIGN IN ♡ </Text>
      </TouchableOpacity>

     <TouchableOpacity
        style={styles.button2} >
        <Text style={styles.buttonText}> SIGN UP ♡ </Text>
      </TouchableOpacity>
    </ImageBackground>



      <Image
      source={require('../assets/googleicon.png')}
      style={{width:50, height:50, marginTop:-160, alignSelf:"center"}}/>

       <Image
      source={require('../assets/fbicon.png')}
      style={{width:50, height:50, marginTop:0, marginLeft:36}}/>

      <Image
      source={require('../assets/twittericon.png')}
      style={{width:50, height:50, marginTop:-50, marginLeft:146}}/>
 
     <Image
      source={require('../assets/InstaIcon.png')}
      style={{width:50, height:50, marginTop:-50, marginLeft:250}}/>
                                                                          
    </View>
  );
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
 button1: {
    width: '60%',
    height: 50,
    margin:130,
    alignSelf: 'center',
    padding: 10,
    color:"red",
   backgroundColor:'white'
  },
  button2: {
    width: '60%',
    height: 50,
    margin:-100,
    alignSelf: 'center',
    padding: 10,
   backgroundColor:'white'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color:'#005892',
    fontFamily:'Times New Roman',
    backgroundColor:'white',
  
  },
   text: {
     color:'white',
    textAlign: 'center',
    fontSize: 24,
    margin:40,
    fontWeight: 'bold',
   
    fontFamily:'Times New Roman',
   
   }
});