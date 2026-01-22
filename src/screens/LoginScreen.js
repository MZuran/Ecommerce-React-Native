import React, { useEffect } from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { colors } from '../globals/colors'
import LoginForm from '../components/ProfileScreen/LoginForm'
import { useSQLiteContext } from 'expo-sqlite'

import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/authSlice'


export default function LoginScreen() {

    const navigation = useNavigation()
    const db = useSQLiteContext()
    const dispatch = useDispatch()

    useEffect(
        () => {

            async function setup() {
                const result = await db.getFirstAsync('SELECT * FROM sessions')
                console.log("Usuarios en base de datos", result)

                if (result.email) {
                    //dispatch(setUser({ email: result.email, localId: result.localId }))
                    dispatch(setUser(result))
                    navigation.navigate('Products', { screen: 'Home' })
                }
            }

            setup()

        },
        []
    )

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
