import { View, Text, ActivityIndicator, Button, Alert } from 'react-native'
import React from 'react'
import Exstyles from './style'

const Home = () => {
  return (
    <View style={Exstyles.home}>
      {/* <ActivityIndicator size="large" color="#0000ff" animating={false}/> */}
      <Button title="Alert" onPress={() => Alert.alert('Button Clicked','Invalid Data',[{
        text:'Ok',
        onPress:()=>console.log('Ok Pressed')
      },
      {
        text:'Cancel',
        onPress:()=>console.log('Cancel Pressed')
      }
      ])}/>
      <Text>Home</Text>
    </View>
  )
}

export default Home