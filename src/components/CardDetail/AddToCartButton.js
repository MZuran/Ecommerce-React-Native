import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { colors } from '../../globals/colors'

import { useCartActions } from '../../hooks/useCartActions'

export default function AddToCart({ cardData }) {

    const { handleAddToCart } = useCartActions() 

    const stock = cardData?.stock ?? 0
    const [quantity, setQuantity] = useState(1)
    const total = (cardData.price * quantity).toFixed(2)

    const onQuantityChange = (value) => {
        let num = parseInt(value, 10)

        if (isNaN(num)) num = 1
        if (num < 1) num = 1
        if (num > stock) num = stock

        setQuantity(num)
    }

    const onAddToCartPress = (cardData, quantity) => {
        alert(`Added ${quantity} card${quantity > 1 ? "s" : ""} to the cart.`)
        handleAddToCart(cardData, quantity)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.stockText}>
                Stock: {stock} - Total: { total }
            </Text>

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, stock === 0 && styles.disabledInput]}
                    keyboardType="numeric"
                    value={String(quantity)}
                    editable={stock > 0}
                    onChangeText={onQuantityChange}
                />

                <Pressable onPress={() => { onAddToCartPress(cardData, quantity) }} style={{width: "50%"}}>
                    <Text style={styles.cartButton}>Add to cart</Text>
                </Pressable>
            </View>

            {stock === 0 && (
                <Text style={styles.outOfStock}>Out of stock</Text>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        width: "100%"
    },

    container: {
        padding: 10
    },

    stockText: {
        fontStyle: "italic",
        fontSize: 16,
        color: colors.subtext
    },

    input: {
        borderWidth: 3,
        borderColor: colors.color_3,
        margin: 0,

        height: 50,
        width: "50%",

        fontSize: 20,

        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
    },

    cartButton: {
        borderWidth: 0,
        borderColor: colors.color_3,
        margin: 0,

        justifyContent: "center",
        alignItems: "center",

        textAlignVertical: "center",
        textAlign: "center",

        paddingLeft: -5,

        height: 50,

        backgroundColor: colors.color_3,
        color: colors.color_1,
        fontSize: 20,
        fontWeight: 700,

        borderTopRightRadius: 16,
        borderBottomRightRadius: 16

    }
})
