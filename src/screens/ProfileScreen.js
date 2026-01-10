import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { colors } from '../globals/colors'
import ProfileStackModalButton from '../components/ProfileStackModalButton'

import PinchablePicture from '../components/CardDetail/PinchablePictureZoom'
import { testLinkMonster } from '../utils/testCard'

export default function ProfileScreen() {

    return (
        <View style={styles.screen} >
            <Text>Estoy en Profile</Text>
            <ProfileStackModalButton/>
            <PinchablePicture url={testLinkMonster.card_images[0].image_url} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
