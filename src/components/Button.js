import React from 'react'
import { Text, StyleSheet, View, Button, Pressable } from 'react-native'

import { colors } from '../globals/colors'

const defaultStyle = StyleSheet.create({
    button: {
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 0,
        borderColor: colors.color_4,

        margin: 5,
        padding: 5,

        backgroundColor: colors.color_3,

        justifyContent: "center",
        alignItems: "center",

        minWidth: 35,
        minHeight: 35
        
    },
    text: {
        color: colors.color_1,
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default function CustomButton({ children, style = defaultStyle, onPress }) {
    return (
        <Pressable
            style={style.button}
            onPress={onPress}
        >
            <Text style={style.text} >{children}</Text>
        </Pressable>
    )
}
