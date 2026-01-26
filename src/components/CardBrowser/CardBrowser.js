import React from 'react';

import { Text, StyleSheet, View, FlatList, Pressable } from 'react-native';
import { useGetAllCardsQuery, useGetCardsByArchetypeQuery } from '../../services/shopService';
import { colors } from '../../globals/colors';

import { useEffect, useState } from 'react';

import { useSQLiteContext } from 'expo-sqlite';
import { searchCards } from '../../SQLite/cardSearchingFunctions';
import CardButton from './CardButton';
import { useNavigation } from '@react-navigation/native';

export default function CardBrowserContainer({ filters = {} }) {

  const [cardData, setCardData] = useState([])
  const db = useSQLiteContext()
  const navigation = useNavigation()

  useEffect(
    () => {

      const applyFilters = async () => {
        try {

          const result = await searchCards(db, filters)

          setCardData(
            result && typeof result === 'object'
              ? Object.values(result)
              : []
          )

          console.log("Setting new cardData")


        } catch (error) {
          console.error(error)
          setCardData([])
        }
      }

      applyFilters()

    },
    [filters]
  )

  useEffect(
    () => {
      if (cardData && cardData.length > 0) {
      }
    },
    [cardData]
  )

  if (cardData.length == 0) return (
    <View>
      <Text style={styles.text} >No cards found!</Text>

      <Pressable onPress={() => { navigation.navigate('User', { screen: 'Settings' }) }}>
        <Text style={styles.subText}>Did you download the <Text style={styles.decoratedText} >Card Table</Text> yet?</Text>
      </Pressable>
    </View>
  );

  return (
    <>
      {
        cardData &&
        <FlatList
          data={cardData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => <CardButton cardData={item} />}
          contentContainerStyle={styles.browser}
        />
      }
    </>
  );
}

const styles = StyleSheet.create({
  browser: {
    justifyContent: 'center',
    padding: 10,
  },

  text: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },

  subText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 25,
  },

  decoratedText: {
    textDecorationLine: "underline",
    fontSize: 20,
    color: colors.color_5
  }
});
