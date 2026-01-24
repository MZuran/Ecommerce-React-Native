import React, { useState } from 'react'

import { Text, StyleSheet, View, Modal, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../globals/colors'
import { useSelector } from 'react-redux'

import { useGetAllCardsQuery } from '../../services/shopService'
import { useDispatch } from 'react-redux'

import { useSQLiteContext } from 'expo-sqlite'

export default function DatabaseDownloadButton() {

    const navigation = useNavigation()
    const db = useSQLiteContext()

    const onSubmit = () => {
        navigation.navigate('User', { screen: 'DataDownload' })
    }

    return (
        <>
            <Pressable style={styles.downloadDatabaseButton} onPress={onSubmit}>
                <Text style={styles.downloadDatabaseButton.text} >Download Card Table</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({

    downloadDatabaseButton: {

        backgroundColor: colors.darker_color_1,

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