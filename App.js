import React,{Component} from 'react';
import { Text, View, StyleSheet,TouchableOpacity, ImageBackground, Button,  } from 'react-native';
import Constants from 'expo-constants';

/*import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigations/DrawerNavigator';
import TabNavigator  from './navigations/TabNavigator';*/
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import Firebase from './config';

import HomeScreen from './screens/HomeScreen';
import BUzzerScreen from './screens/BuzzerScreen';
import Timetable from './screens/Timetable';
import ToDo from './screens/ToDoScreen';
import Exercise from './screens/Exercise';

//import SignIn from './screens/SignIn';
//import  SignUp from './screens/SignUp';

export default class App extends React.Component { 
  render(){
      return (
      <AppContainer/>
      )
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BUzzerScreen:BUzzerScreen,
  Timetable:Timetable,
  ToDo:ToDo,
  Exercise:Exercise,
})

const AppContainer = createAppContainer(AppNavigator)
