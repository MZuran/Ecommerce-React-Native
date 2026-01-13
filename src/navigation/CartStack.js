import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator()

export default function CartStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={"CartScreen"} component={CartScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})