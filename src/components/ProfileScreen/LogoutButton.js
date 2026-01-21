import React, { useState } from 'react'

import { Text, StyleSheet, View, Modal, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../globals/colors'
import { useSelector } from 'react-redux'

import { resetUser } from '../../store/slices/authSlice'
import { useDispatch } from 'react-redux'

export default function LogoutButton() {

    const navigation = useNavigation()
    const user = useSelector(state => state.auth.value.email)
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(resetUser())
        navigation.navigate('Products', { screen: 'Home' })
    }

    return (
        <>
            <Pressable style={styles.logOutButton} onPress={onSubmit}>
                <Text style={styles.logOutButton.text} >Log Out</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({

    logOutButton: {

        backgroundColor: colors.danger,

        margin: 10,
        padding: 10,

        width: "90%",
        borderRadius: 20,

        text: {
            color: colors.white,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
        }

    }

})