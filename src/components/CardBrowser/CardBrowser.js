import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import CardButton from './CardButton';
import { useGetAllCardsQuery, useGetCardsByArchetypeQuery } from '../../services/shopService';

export default function CardBrowserContainer() {
  const { data, error, isLoading } = useGetCardsByArchetypeQuery("Alien");

  if (isLoading) return <Text>Loading cards...</Text>;
  if (error) return <Text>Error loading cards</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}  // unique key for each card
      numColumns={2}  // number of cards per row
      renderItem={({ item }) => <CardButton cardData={item} />}
      contentContainerStyle={styles.browser}
    />
  );
}

const styles = StyleSheet.create({
  browser: {
    justifyContent: 'center',
    padding: 10,
  },
});
