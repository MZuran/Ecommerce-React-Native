import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'

const widthDevice = Dimensions.get("window").width
const heightDevice = Dimensions.get("window").height

export default function CartItem({ itemData }) {
  return (
    <View>
      <Text>textInComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
