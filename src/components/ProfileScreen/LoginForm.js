import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

import { colors } from '../../globals/colors'
import CustomButton from '../Button'

import { useLoginMutation } from '../../services/authService'
import { useNavigation } from '@react-navigation/native'

import { setUser } from '../../store/slices/authSlice'
import { useDispatch } from 'react-redux'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin, result] = useLoginMutation()

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerLogin({ email, password })
    }

    useEffect(
        () => {
            if (result.status === "fulfilled") {

                dispatch(setUser(result.data))
                navigation.navigate('Products', { screen: 'Home' })

            } else if (result.status === "rejected") {

                alert("Login request rejected")
                
            }
        },
        [result]
    )

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter Email"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
                secureTextEntry
            />

            <CustomButton onPress={onSubmit} >Log In</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: colors.color_4,

        padding: 5,
        backgroundColor: 'white',
        minWidth: '80%',
    },

    input: {
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.color_2,
        margin: 5,
        padding: 8,
    },

    label: {
        marginLeft: 5,
    }
})

