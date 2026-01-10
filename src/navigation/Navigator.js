import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator()

export default function Navigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={"Home2"} component={HomeScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

