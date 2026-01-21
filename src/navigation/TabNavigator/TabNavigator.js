import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import ProductsStack from "../ProductsStack";
import ProfileStack from "../ProfileStack";
import CartStack from "../CartStack";

import returnTabScreenOptions from "./TabScreenOptions";

import { colors } from "../../globals/colors";

import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator()

export default function TabNavigator() {

    const cartItemsNumber = useSelector(state => state.cart.totalQty)
    const user = useSelector(state => state.auth.value.email)

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
                component={CartStack}
                options={{ ...returnTabScreenOptions("shopping-cart"), tabBarBadge: (cartItemsNumber ? cartItemsNumber : null), tabBarBadgeStyle: styles.tabBarBadge }}
            />

            <Tab.Screen
                name={"User"}
                component={ProfileStack}
                options={{
                    ...(user ? returnTabScreenOptions("user") : returnTabScreenOptions("user-secret")),
                    tabBarLabel: (user ? "My Account" : "Log In")
                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        elevation: 0,
    },

    tabBarBadge: {
        //color: colors.color_5,
        //backgroundColor: colors.color_2,
        fontWeight: 900
    }
})
