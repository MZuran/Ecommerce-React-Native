import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { colors } from '../globals/colors'
import CardBrowserContainer from '../components/CardBrowser/CardBrowser'

import { useState, useEffect } from 'react'

export default function HomeScreen({ route }) {

  const [filters, setFilters] = useState({})

  useEffect(
    () => {
      if (route.params?.filters) {
        setFilters(route.params.filters)
      }
    }, [route.params && route.params.filters]
  )

  return (
    <View style={styles.screen} >
      <CardBrowserContainer filters={filters} />
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
