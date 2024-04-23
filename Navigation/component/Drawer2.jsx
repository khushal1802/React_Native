import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Reg from './Reg';
const Drawer = createDrawerNavigator();

const Drawer2 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Reg" component={Reg} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Drawer2