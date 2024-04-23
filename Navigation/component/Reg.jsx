import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Reg = () => {
  const wrn = () => {
    console.warn("press");
  };
  return (
    <View>
      <TouchableOpacity onPress={wrn}>
        <Text style={styles.btn}>onPress</Text>
      </TouchableOpacity>
      <TouchableOpacity onLongPress={wrn}>
        <Text style={styles.btn}>onLongPress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={wrn}>
        <Text style={styles.btn}>onPressIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressOut={wrn}>
        <Text style={styles.btn}>onPressOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#bbb",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default Reg;
