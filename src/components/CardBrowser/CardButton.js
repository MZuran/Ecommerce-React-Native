import React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { colors } from '../../globals/colors'

import { useNavigation } from '@react-navigation/native'

import CardPicture from '../CardPicture'

const scale = 2
const cardWidth = 59 * scale
const cardHeight = 86 * scale

export default function CardButton({ cardData }) {

    const navigation = useNavigation()

    const pressHandler = () => {
        navigation.navigate('Detail', { cardData });
    }

    return (
        <Pressable style={styles.container} onPress={pressHandler}>
            <Text style={styles.cardName} >{cardData.name}</Text>
            <CardPicture url={cardData.image_url_small} style={styles.cardPicture} />
            <Text style={styles.cardPrice} >{cardData.price}$</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",

        borderWidth: 5,
        borderColor: colors.color_3,
        borderRadius: 15,

        alignItems: "center",
        justifyContent: "center",

        padding: 20,
        paddingTop: 0,
        paddingBottom: 0,

        margin: 10
    },

    cardName: {
        fontSize: 19,
        color: colors.text,
        fontWeight: "bold",
        maxWidth: cardWidth,
        textAlign: "center",
        marginBottom: 10,
        marginTop: 10
    },

    cardPrice: {
        fontSize: 17,
        margin: 10
    },

    cardPicture: {
        width: cardWidth,
        height: cardHeight
    }
})
