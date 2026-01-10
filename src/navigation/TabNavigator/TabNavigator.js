import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import ProductsStack from "../ProductsStack";
import ProfileStack from "../ProfileStack";

import returnTabScreenOptions from "./TabScreenOptions";

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar, animation: "shift" }} >

            <Tab.Screen
                name={"Products"}
                component={ProductsStack}
                options={returnTabScreenOptions("th")}
            />
            
            <Tab.Screen
                name={"Search"}
                component={ProductsStack}
                options={returnTabScreenOptions("search")}
            />

            <Tab.Screen
                name={"Cart"}
                component={ProductsStack}
                options={returnTabScreenOptions("shopping-cart")}
            />

            <Tab.Screen
                name={"Profile"}
                component={ProfileStack}
                options={returnTabScreenOptions("user")}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        elevation: 0,
    }
})
