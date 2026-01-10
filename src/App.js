import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { colors } from "./globals/colors";
import { store } from "./store/store";
import TabNavigator from "./navigation/TabNavigator/TabNavigator";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Provider } from "react-redux";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>

        <SafeAreaProvider>

          {/* Status Bar */}
          <SafeAreaView edges={['top']} style={{ backgroundColor: colors.color_3 }} >
            <StatusBar barStyle="light-content" />
          </SafeAreaView>

          {/* Main content */}
          <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: colors.color_3 }}>
            <NavigationContainer>
              <TabNavigator />
            </NavigationContainer>
          </SafeAreaView>

        </SafeAreaProvider>

      </Provider>
    </GestureHandlerRootView>
  );
}
