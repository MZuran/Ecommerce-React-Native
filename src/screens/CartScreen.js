import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

import { useSelector } from 'react-redux'
import { useCartActions } from '../hooks/useCartActions'

import CustomButton from '../components/Button'
import ConfirmPurchaseButton from '../components/CartScreen/ConfirmPurchaseButton'
import CartItem from '../components/CartScreen/CartItem'
import { colors } from '../globals/colors'


export default function CartScreen() {

  const cart = useSelector(state => state.cart)
  const { handleClearCart } = useCartActions()

  return (
    <View style={styles.screen} >

      {
        cart.items.length > 0 &&
        <View style={styles.cartContinar}>

          <FlatList
            data={cart.items}
            renderItem={(item) => <CartItem itemData={item} />}
            keyExtractor={(item) => item.id}
          />

          <View style={styles.purchaseInfoContainer}>
            <Text style={styles.text} onPress={()=>{console.log(cart)}}>${cart.totalPrice}</Text>
            <ConfirmPurchaseButton cart={cart} clearCartFunction={handleClearCart}/>
            <CustomButton onPress={handleClearCart} >Clear Cart</CustomButton>
          </View>

        </View>
      }

      {
        cart.items.length == 0 &&
        <View>
          <Text style={styles.text} >There are no items in the shopping cart!</Text>
        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  cartContinar: {
    justifyContent: "center"
  },

  flatListContainer: {
    
  },

  purchaseInfoContainer: {
    marginTop: 10,
    marginBottom: 10
  }
})
