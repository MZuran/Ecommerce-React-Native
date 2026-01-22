import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import Checkbox from 'expo-checkbox'

import { colors } from '../../globals/colors'
import CustomButton from '../Button'

import { useLoginMutation } from '../../services/authService'
import { useNavigation } from '@react-navigation/native'

import { setUser } from '../../store/slices/authSlice'
import { useDispatch } from 'react-redux'
import { useSQLiteContext } from 'expo-sqlite'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin, result] = useLoginMutation()
    const [saveSession, setSaveSession] = useState(false)

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const db = useSQLiteContext()

    const onSubmit = () => {
        triggerLogin({ email, password })
    }

    const saveUserInLocalDatabase = async (email, localId) => {
        try {
            const result = await db.runAsync(`INSERT INTO SESSIONS (email, localId) VALUES (?,?)`, email, localId)
        } catch (error) {
            console.error("Error tratando de guardar al usuario en la base de datos", error)
        }
    }

    useEffect(
        () => {
            async function createSession() {
                if (result.status === "fulfilled") {

                    dispatch(setUser(result.data))

                    if (saveSession) {
                        await saveUserInLocalDatabase(result.data.email, result.data.localId)
                    }

                    navigation.navigate('Products', { screen: 'Home' })

                } else if (result.status === "rejected") {

                    alert("Login request rejected")

                }
            }

            createSession()
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

            <View style={styles.checkboxContainer} >
                <Checkbox
                    value={saveSession}
                    onValueChange={setSaveSession}
                    style={styles.checkBox}
                    color={saveSession ? colors.color_3 : undefined}
                />
                <Text style={styles.label} >Keep session active?</Text>
            </View>

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
    },

    checkboxContainer: {
        flexDirection: "row",
        marginVertical: 10,
        padding: 5,
        justifyContent: "center"
    },

    checkBox: {
        borderRadius: 5,
        marginRight: 0,

        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.color_2,
    }
})

