import {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Touchable,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import React from "react";

const Home = (props) => {
  console.log(props.route.params);
  const wrn = () => {
    console.warn("press");
  };
  return (
    <View>
      <Text>Home</Text>

      <TouchableHighlight onPress={wrn}>
        <Text style={styles.btn}>TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableOpacity onPress={wrn}>
        <Text style={styles.btn}>TouchableOpacity</Text>
      </TouchableOpacity>
      {/* 
      <Touchable onPress={wrn}>
        <Text style={styles.btn}>Touch Button</Text>
      </Touchable> */}

      <TouchableNativeFeedback onPress={wrn}>
        <Text style={styles.btn}>TouchableNativeFeedback</Text>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback onPress={wrn}>
      <Text style={styles.btn}>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
      <Button title="Normal Button"></Button>
      {/* <Text>Name : {props.route.params.name}</Text>
      <Text>Age : {props.route.params.age}</Text> */}
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
export default Home;
