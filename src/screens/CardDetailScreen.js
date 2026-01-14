import React from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'

import CustomButtonIcon from '../components/IconButton'
import AddToCart from '../components/CardDetail/AddToCartButton'
import CardDetailPicture from '../components/CardDetail/CardDetailPicture'

import { useGetCardByIdQuery } from '../services/shopService'

import { colors } from '../globals/colors'

export default function CardDetailScreen({ route, navigation }) {

    const { cardData } = route.params
    const { data, error, isLoading } = useGetCardByIdQuery(cardData.id)

    const backPressHandler = () => { navigation.goBack() }

    if (cardData.atk && cardData.atk == -1) { cardData.atk = "?" }
    if (cardData.def && cardData.def == -1) { cardData.def = "?" }

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text onPress={() => { console.log(itemData) }} >Error loading card</Text>
    }

    return (
        <ScrollView contentContainerStyle={styles.screen} >
            <View style={styles.container}>

                <View style={styles.backContainer}>
                    <CustomButtonIcon iconName={"reply"} onPress={backPressHandler} />
                    <Text style={styles.textBig} >Go back</Text>
                </View>

                <CardDetailPicture cardData={cardData} />

                <View style={styles.textContainer}>
                    <Text style={styles.title} >{cardData.name}</Text>
                    <Text style={styles.desc}>{cardData.desc}</Text>
                    <Text style={styles.type} >
                        {cardData.level > 0 && `Level ${cardData.level} `}
                        {cardData.linkval && `Link ${cardData.linkval} - `}
                        {cardData.attribute && `${cardData.attribute} `}
                        {cardData.race && cardData.atk !== null && cardData.atk !== undefined && `${cardData.race} `}
                        {cardData.humanReadableCardType}
                    </Text>
                    {cardData.archetype && <Text style={styles.textThin}>Archetype: <Text style={styles.textBold} >{cardData.archetype}</Text></Text>}
                    {cardData.atk !== null && cardData.atk !== undefined && <Text style={styles.type}>{cardData.atk} ATK {cardData.def !== null && cardData.def !== undefined && `${cardData.def} DEF`}</Text>}
                    {cardData.linkmarkers && <Text style={styles.type}>Link Arrows: {cardData.linkmarkers.join(' ')}</Text>}
                </View>

                <AddToCart cardData={data} />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        minHeight: "100%"
    },

    title: {
        fontSize: 20,
        fontWeight: 700,
        color: colors.text
    },

    textThin: {
        fontSize: 20,
        color: colors.subtext,
        marginBottom: 10,
    },

    textBold: {
        fontSize: 20,
        fontWeight: 700,
        color: colors.text
    },

    type: {
        fontSize: 20,
        color: colors.text,
        marginBottom: 10
    },

    desc: {
        fontStyle: "italic",
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 10,
        color: colors.subtext
    },

    container: {
        backgroundColor: "white",
        width: "100%",

        borderRadius: 10,
        borderColor: colors.color_3,
        borderWidth: 5,

        padding: 10
    },

    textBig: {
        fontSize: 20,
        color: colors.text
    },

    textContainer: {
        width: 330,
        alignSelf: "center",
    },

    backContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
})
