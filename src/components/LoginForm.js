import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

import { colors } from '../globals/colors'
import CustomButton from './Button'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter username"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
                secureTextEntry
            />

            <CustomButton>Log In</CustomButton>
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

