import React from 'react'
import { Text, StyleSheet, View, Dimensions, Pressable } from 'react-native'

import { useGetCardByIdQuery } from '../../services/shopService'
import { useNavigation } from '@react-navigation/native'

import CardPicture from '../CardPicture'

const widthDevice = Dimensions.get("window").width
const heightDevice = Dimensions.get("window").height

export default function CartItem({ itemData }) {

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
    </View>
  )
}


const styles = StyleSheet.create({

  itemContainer: {
    marginBottom: 5
  },

  pictureContainer: {
    height: heightDevice / 4,
    width: heightDevice / 5,
    backgroundColor: "red"
  }
})
