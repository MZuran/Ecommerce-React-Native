import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import HomeScreen from "../screens/HomeScreen";
import CardDetailScreen from "../screens/CardDetailScreen";

const Stack = createNativeStackNavigator()

export default function ProductsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={"Home"} component={HomeScreen} />
            <Stack.Screen name={"Detail"} component={CardDetailScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})