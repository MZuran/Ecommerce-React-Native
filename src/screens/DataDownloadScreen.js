import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { colors } from '../globals/colors'
import { useSQLiteContext } from 'expo-sqlite'

import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/authSlice'

import { insertCards } from '../components/SettingsScreen/cardInsertionSQLite'
import { useGetAllCardsQuery } from '../services/shopService'

export default function DataDownloadScreen() {

    const navigation = useNavigation()
    const db = useSQLiteContext()
    const dispatch = useDispatch()

    const { data, isLoading, error } = useGetAllCardsQuery()
    const [hasInserted, setHasInserted] = useState(false)

    useEffect(
        () => {

            const insertCardsIntoLocalDb = async () => {
                try {

                    await insertCards(db, data)
                    setHasInserted(true)

                    navigation.navigate('User', { screen: 'Settings' })

                } catch (err) {
                    console.error('Failed to insert cards', err)
                }
            }

            if (data && !hasInserted) {
                insertCardsIntoLocalDb()
            }

        },
        [data, hasInserted]
    )

    if (isLoading) {
        return <View style={styles.screen} ><Text>Downloading Cards...</Text></View>
    }

    if (error) {
        return <View style={styles.screen} ><Text>There's been an error trying to download the cards.</Text></View>
    }

    return <View style={styles.screen} ><Text>Saving to local database...</Text></View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
