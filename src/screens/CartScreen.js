import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

import { colors } from '../globals/colors'
import { useSelector } from 'react-redux'

import CustomButton from '../components/Button'
import { useCartActions } from '../hooks/useCartActions'

import CartItem from '../components/CartScreen/CartItem'

export default function CartScreen() {

  const cart = useSelector(state => state.cart)
  const { handleClearCart } = useCartActions()

  return (
    <View style={styles.screen} >
      <Text>Cart Screen</Text>
      <Text>Items in cart: {cart.totalQty}</Text>
      <Text>Total price in cart: {cart.totalPrice}</Text>

      <CustomButton onPress={handleClearCart} >Clear Cart</CustomButton>
      <CustomButton onPress={() => { console.log(cart) }} >Show Cart</CustomButton>

        <FlatList
          data={cart.items}
          renderItem={(item) => <CartItem itemData={item} />}
          keyExtractor={(item) => item.id}
        />

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
