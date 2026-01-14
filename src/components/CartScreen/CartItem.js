import React from 'react'
import { Text, StyleSheet, View, Dimensions, Pressable } from 'react-native'

import { useGetCardByIdQuery } from '../../services/shopService'
import { useNavigation } from '@react-navigation/native'

import CardPicture from '../CardPicture'
import { useCartActions } from '../../hooks/useCartActions'

import { colors } from '../../globals/colors'
import { FontAwesome5 } from "@expo/vector-icons";

const widthDevice = Dimensions.get("window").width
const heightDevice = Dimensions.get("window").height

export default function CartItem({ itemData }) {

  const { handleRemoveFromCart } = useCartActions()

  const { data, error, isLoading } = useGetCardByIdQuery(itemData.item.id)
  const navigation = useNavigation()

  const onPicturePress = () => {
    navigation.navigate('Products', {
      screen: 'Detail',
      params: { cardData: data },
    })

  }

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text onPress={() => { console.log(itemData) }} >Error loading card</Text>
  }

  return (
    <View style={styles.itemContainer} >


      <Pressable onPress={onPicturePress}>
        <CardPicture url={data.card_images[0].image_url_small} style={styles.pictureContainer} />
      </Pressable>

      <View style={styles.textsContainer}>
        <View>
          <Text style={styles.mainText} >{data.name}</Text>
          <Text style={styles.secondaryText}>
            {itemData.item.qty > 1 ? `${itemData.item.qty} copies` : `${itemData.item.qty} copy`}{"\n"}
            ${itemData.item.price * itemData.item.qty}
          </Text>
        </View>
        <View>
          <Text style={styles.iconText}>
            <FontAwesome5 onPress={ () => { handleRemoveFromCart(itemData.item.id) } } name={"trash"} size={30} />
          </Text>
          <Text onPress={ () => { console.log(itemData.item.qty, data.stock) } } >Testadsasd</Text>
        </View>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({

  itemContainer: {

    flexDirection: "row",
    justifyContent: "start",

    width: (widthDevice) * 0.95,

    padding: 5,
    margin: 5,

    backgroundColor: "white",

    borderWidth: 5,
    borderColor: colors.color_3,
    borderRadius: 15,
  },

  textsContainer: {
    paddingVertical: 5,
    marginLeft: 10,

    flexDirection: "column",
    justifyContent: "space-between",

    width: widthDevice / 1.7
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.text,
  },

  secondaryText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "bold"
  },

  iconText: {
    color: colors.text,
    textAlign: "right"
  },

  pictureContainer: {
    height: heightDevice / 6,
    width: (heightDevice / 6) * (59 / 86),

    margin: 5,
    borderWidth: 0,
    borderColor: colors.color_3
    //backgroundColor: "red"
  }
})
