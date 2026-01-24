import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

import { colors } from '../../globals/colors'
import CustomButton from '../Button'

import { useSignupMutation } from '../../services/authService'
import { validateEmail } from './EmailValidation'

import { useNavigation } from '@react-navigation/native'

export default function RegisterForm() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [triggerSignUp, result] = useSignupMutation()

    const onSubmitHandler = () => {
        
        if (!validateEmail(email)) {
            alert("Invalid email")
            return
        }

        if (password.length < 6) {
            alert("The password should contain at least 6 characters")
            return
        }

        if (password != confirmPassword) {
            alert("The two passwords do not match")
            return
        }

        triggerSignUp({ email, password })

    }

    useEffect(
        () => {
            if (result.status === "fulfilled") {
                navigation.navigate('User', { screen: 'LoginScreen' })
            } else if (result.status === "rejected") {
                alert("Registration request rejected")
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

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm password"
                secureTextEntry
            />

            <CustomButton onPress={onSubmitHandler} >Register</CustomButton>
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

