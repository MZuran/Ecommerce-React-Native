import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CardSearchScreen from "../screens/CardSearchScreen";

const Stack = createNativeStackNavigator()

export default function SearchStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={"Search"} component={CardSearchScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})