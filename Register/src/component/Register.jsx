import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Styles from "../css/Styles";

const Register = () => {
  return (
    <View style={Styles.register_screen}>
      <View style={Styles.register_content}>
        <Text style={Styles.register_heading}>Enter OTP</Text>
        <Text style={Styles.register_text}>
          Lorem ipsum is simply dummy text of the printing and typesetting industry
        </Text>
      </View>
      <View style={Styles.register_input_area}>
        <TextInput style={Styles.register_input}></TextInput>
        <TextInput style={Styles.register_input}></TextInput>
        <TextInput style={Styles.register_input}></TextInput>
        <TextInput style={Styles.register_input}></TextInput>
      </View>

      <TouchableOpacity>
        <Text style={Styles.register_btn}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
