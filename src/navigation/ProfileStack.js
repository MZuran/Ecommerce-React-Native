import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator()

export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={"ProfileStack"} component={ProfileScreen} />
            <Stack.Screen name={"Settings"} component={SettingsScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})