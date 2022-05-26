import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, ImageBackground, Button, } from 'react-native';

export default class SignUp extends React.Component{
  render(){
    return(
      
      <form> 
       <div>
       <label htmlFor="name">NAME . . . </label>
       <input type="text" name="name" id="name"/>
       </div>
             <div>
              <label htmlFor="email">EMAIL . . .</label>
              <input type="text" name="email" id="email"/> 
          </div>

            <div>
              <label htmlFor="password">PASSWORD . . .</label>
              <input type="text" name="password" id="password"/> 
          </div>

              <Button type="submit"> 🇸‌🇺‌🇧‌🇲‌🇮‌🇹‌ </Button>

      </form>
       
    )
  
  }
}

