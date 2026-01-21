import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

import { colors } from '../globals/colors'

import ProfileStackModalButton from '../components/ProfileScreen/ProfileStackModalButton'
import LogoutButton from '../components/ProfileScreen/LogoutButton'

export default function ProfileScreen() {

    return (
        <View style={styles.screen} >

            <ProfileStackModalButton />
            <LogoutButton/>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
