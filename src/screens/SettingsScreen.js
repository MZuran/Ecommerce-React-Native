import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

import { colors } from '../globals/colors'

import { useNavigation } from '@react-navigation/native'
import { useSQLiteContext } from 'expo-sqlite'

import ProfileStackModalButton from '../components/ProfileScreen/ProfileStackModalButton'
import DatabaseDownloadButton from '../components/SettingsScreen/databaseDownloadButton'

export default function SettingsScreen() {

  const navigation = useNavigation()
  const db = useSQLiteContext()

  const handleDeleteCards = async () => {
    try {
      await db.execAsync('DELETE FROM cards;')
      console.log('Cards table cleared')
    } catch (err) {
      console.error('Failed to delete cards', err)
    }
  }


  return (
    <View style={styles.screen} >

      <DatabaseDownloadButton />

      <Pressable style={styles.dangerButton} onPress={handleDeleteCards}>
        <Text style={styles.buttonText} >Delete Card Table</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => { navigation.goBack() }}>
        <Text style={styles.buttonText} >Go Back</Text>
      </Pressable>

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

  button: {

    backgroundColor: colors.color_3,

    margin: 10,
    padding: 10,

    width: "90%",
    borderRadius: 20,

  },

  dangerButton: {

    backgroundColor: colors.danger,

    margin: 10,
    padding: 10,

    width: "90%",
    borderRadius: 20,

  },

  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  }
})
