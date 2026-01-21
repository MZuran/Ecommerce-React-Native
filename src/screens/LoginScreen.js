import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { colors } from '../globals/colors'
import LoginForm from '../components/ProfileScreen/LoginForm'


export default function LoginScreen() {

    const navigation = useNavigation()

    return (
        <View style={styles.screen} >
            <LoginForm />
            <Pressable onPress={() => { navigation.navigate('RegisterScreen') }} >
                <Text style={styles.toggleLoginRegisterButton} >Create Account</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },

    toggleLoginRegisterButton: {
        margin: 15,
        color: colors.text,
        fontWeight: "bold",
        fontSize: 16
    }
})
