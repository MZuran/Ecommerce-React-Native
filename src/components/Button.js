import React from 'react'
import { Text, StyleSheet, View, Button, Pressable } from 'react-native'
import { applyTransparency } from '../utils/hexToRgba'

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

    danger: {
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 0,
        borderColor: colors.color_4,

        margin: 5,
        padding: 5,

        backgroundColor: colors.danger,

        justifyContent: "center",
        alignItems: "center",

        minWidth: 35,
        minHeight: 35

    },

    faded: {
        borderRadius: 5,

        margin: 5,
        padding: 5,

        backgroundColor: applyTransparency(colors.color_3, 0.5),

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


export default function CustomButton({ children, style = defaultStyle, onPress, buttonType }) {


    if (buttonType == "danger") {
        return <>
            <Pressable
                style={style.danger}
                onPress={onPress}
            >
                <Text style={style.text} >{children}</Text>
            </Pressable>
        </>
    }

    if (buttonType == "faded") {
        return <>
            <Pressable
                style={style.faded}
                onPress={onPress}
            >
                <Text style={style.text} >{children}</Text>
            </Pressable>
        </>
    }

    return (
        <Pressable
            style={style.button}
            onPress={onPress}
        >
            <Text style={style.text} >{children}</Text>
        </Pressable>
    )
}
