import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { colors } from '../globals/colors'
import { useSelector } from 'react-redux'

export default function CartScreen() {

  const cart = useSelector(state => state.cart)

  return (
    <View style={styles.screen} >
      <Text>Cart Screen</Text>
      <Text>Items in cart: {cart.totalQty}</Text>
      <Text>Total price in cart: {cart.totalPrice}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
