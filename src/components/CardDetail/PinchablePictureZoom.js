import React from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler"

const widthDevice = Dimensions.get("window").width
const heightDevice = Dimensions.get("window").height

// 59 x 86
// 59x = 86y

export default function PinchablePicture({ url }) {

    const tapGesture = Gesture.Tap().onStart(() => {
        console.log('Tap!');
    });

    return (
            <GestureDetector gesture={tapGesture}>
                <Image
                    source={{ uri: url }}
                    style={styles.picture}
                />
            </GestureDetector>
    )
}

const styles = StyleSheet.create({
    picture: {
        width: widthDevice,
        height: widthDevice * (86 / 59),
        resizeMode: 'contain',
    },
})
