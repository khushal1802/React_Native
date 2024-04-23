import { View, Text, Button, StatusBar } from 'react-native'
import React from 'react'

const Login = (props) => {
  return (
    <View>
      <StatusBar backgroundColor='#000' barStyle="default" hidden={true} />
      <Text>Login</Text>
      {/* <Button title='GO TO HOME' onPress={() => props.navigation.navigate("Home",{name:'tps', age:20})} /> */}
    </View>
  )
}

export default Login