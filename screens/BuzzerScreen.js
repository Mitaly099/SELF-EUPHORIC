import * as React from 'react';
import { View, Text } from 'react-native';
//import AppHeader from '../components/AppHeader'
import SignIn from './SignIn';


export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        <SignIn color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}
