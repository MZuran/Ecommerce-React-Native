import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DataDownloadScreen from "../screens/DataDownloadScreen";

const Stack = createNativeStackNavigator()

import { useSelector } from "react-redux";

export default function ProfileStack() {

    const user = useSelector(state => state.auth.value.email)

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {
                !user ?
                    <>
                        <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
                        <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} />
                    </>
                    :
                    <>
                        <Stack.Screen name={"ProfileStack"} component={ProfileScreen} />
                    </>
            }
            <Stack.Screen name={"Settings"} component={SettingsScreen} />
            <Stack.Screen name={"DataDownload"} component={DataDownloadScreen} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})