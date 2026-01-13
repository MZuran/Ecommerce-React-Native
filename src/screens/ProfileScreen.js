import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { colors } from '../globals/colors'
import ProfileStackModalButton from '../components/ProfileStackModalButton'

export default function ProfileScreen() {

    return (
        <View style={styles.screen} >
            <Text>Estoy en Profile</Text>
            <ProfileStackModalButton/>
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
