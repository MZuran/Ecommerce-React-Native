import React from 'react';

import { Text, StyleSheet, View, FlatList } from 'react-native';
import { useGetAllCardsQuery, useGetCardsByArchetypeQuery } from '../../services/shopService';

import { useEffect, useState } from 'react';

import { useSQLiteContext } from 'expo-sqlite';
import { searchCards } from '../../SQLite/cardSearchingFunctions';
import CardButton from './CardButton';

export default function CardBrowserContainer({filters = {}}) {

  const [cardData, setCardData] = useState([])
  const db = useSQLiteContext()

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

  if (!cardData) return <Text>Loading cards...</Text>;

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
});
