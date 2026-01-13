import React from 'react'
import { Text, StyleSheet, View, Dimensions} from 'react-native'

import CustomButton from '../Button'
import { useGetCardByIdQuery } from '../../services/shopService'

const widthDevice = Dimensions.get("window").width
const heightDevice = Dimensions.get("window").height

export default function CartItem({ itemData }) {

  // itemData.id
  // itemData.name
  // itemData.price
  // itemData.qty

  return (
    <View>
      <Text>textInComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
