import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

import { colors } from '../globals/colors'
import RegisterForm from '../components/ProfileScreen/RegisterForm'

import { useNavigation } from '@react-navigation/native'


export default function RegisterScreen() {

    const navigation = useNavigation()

    return (
        <View style={styles.screen} >
            <RegisterForm />
            <Pressable onPress={() => { navigation.navigate('LoginScreen') }} >
                <Text style={styles.toggleLoginRegisterButton} >Log in to an existing account</Text>
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
