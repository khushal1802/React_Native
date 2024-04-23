import { View, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./Home";
import Product from "./Product";

const Tab = createMaterialTopTabNavigator();
const Header = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Product" component={Product} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:430,
    height:932
  },
});

export default Header;
