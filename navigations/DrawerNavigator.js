import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './TabNavigator'
import SignUp from "../screens/SignUp";
import SignIn from '../screens/SignIn';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
  
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;