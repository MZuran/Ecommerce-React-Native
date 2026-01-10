import { EvilIcons, FontAwesome } from "@expo/vector-icons";

import React from 'react'
import CustomButton from "./Button";

import { StyleSheet } from "react-native";

import { colors } from '../globals/colors'

export default function CustomButtonIcon({ iconName, style = {}, onPress, size = 35 }) {
    return (
        <CustomButton style={defaultStyle} onPress={onPress}>
            <FontAwesome
                        name={iconName}
                        size={size}
                    />
        </CustomButton>
    )
}


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

        width: 50,
        height: 50
        
    },

    text: {
        color: colors.color_1,
        fontWeight: 'bold',
        size: 12
    }
})