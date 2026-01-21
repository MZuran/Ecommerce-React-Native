import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { colors } from '../globals/colors'

import ProfileStackModalButton from '../components/ProfileScreen/ProfileStackModalButton'

export default function SettingsScreen() {
  return (
    <View style={styles.screen} >
      <Text>Estoy en Settings</Text>
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
