import { View, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const Product = () => {
  return (
    <View style={Exstyles.product}>
      <Card />
      <Text>Product</Text>
    </View>
  )
}


export default Product