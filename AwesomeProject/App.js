import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Data from "./component/Data";
import { ImageBackground } from "react-native-web";
// import {back} from './assets/back.jpg'

const back = require("./assets/back.jpg");
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={back} resizeMode="cover" style={styles.image}>
        <Text style={styles.hending}>Wel-come to the my app</Text>
        <StatusBar style="auto" />
        <Data />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hending: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#00000",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

// use json server
// npm i json-server
// npx json-server db.json --port 3001
