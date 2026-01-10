import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { colors } from '../globals/colors'
import CardBrowserContainer from '../components/CardBrowser/CardBrowser'


export default function HomeScreen() {
  return (
    <View style={styles.screen} >
      <CardBrowserContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
