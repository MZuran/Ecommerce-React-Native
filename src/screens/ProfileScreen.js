import React from 'react'
import { Text, StyleSheet, View, Pressable, Dimensions, Image } from 'react-native'

import { colors } from '../globals/colors'

import ProfileStackModalButton from '../components/ProfileScreen/ProfileStackModalButton'
import LogoutButton from '../components/ProfileScreen/LogoutButton'
import CustomButtonIcon from '../components/IconButton'
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from "@expo/vector-icons";

import { useSelector } from 'react-redux'
import { setProfilePicture } from '../store/slices/userSlice'
import { usePutProfilePictureMutation, useGetProfilePictureQuery } from '../services/userService'

import { useDispatch } from 'react-redux'

const widthDevice = Dimensions.get("window").width
const heightDevice = Dimensions.get("window").height

export default function ProfileScreen() {

    const { email, localId } = useSelector(state => state.auth.value)
    const { profilePicture, userName } = useSelector(state => state.user.value)

    const [triggerPutProfilePicture, result] = usePutProfilePictureMutation()

    const dispatch = useDispatch()

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()

        if (!granted) { return false }
        return true
    }

    const takePicture = async () => {
        const hasPermission = await verifyCameraPermissions()

        if (!hasPermission) { return }


        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            base64: true,
            quality: 0.6
        })

        if (!result.canceled) {

            const pictureString = `data:image/jpeg;base64,${result.assets[0].base64}`

            dispatch(setProfilePicture(pictureString))
            triggerPutProfilePicture( { image: pictureString, localId } )

        }
    }

    return (
        <View style={styles.screen} >

            <ProfileStackModalButton />
            <LogoutButton />

            <Pressable
                style={styles.cameraButtonContainer}
                onPress={takePicture}
            >
                <Text
                    style={styles.cameraButtonIcon}
                >Update Profile Picture</Text>
                <FontAwesome
                    name={"camera"}
                    size={30}
                    style={styles.cameraButtonIcon}
                />
            </Pressable>

            {
                email && profilePicture ?
                    <Image source={{ uri: profilePicture }} style={styles.profilePicture} resizeMode='cover' />
                    :
                    <Text style={{ ...(styles.profilePicture), ...(styles.profilePicturePlaceHolder) }} >{email.charAt(0).toUpperCase()}</Text>
            }

            <Text>{email}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center'
    },

    profilePicture: {

        width: widthDevice / 3,
        height: widthDevice / 3,

        borderRadius: 100

    },

    profilePicturePlaceHolder: {

        backgroundColor: colors.darker_color_1,
        color: colors.white,

        textAlign: "center",
        textAlignVertical: "center",

        fontSize: widthDevice / 8,
        fontWeight: "bold"

    },

    cameraButtonContainer: {
        backgroundColor: colors.color_3,
        width: "90%",

        margin: 10,
        padding: 10,

        width: "90%",
        borderRadius: 20,

        flexDirection: "row",
        justifyContent: "center"
    },

    cameraButtonIcon: {

        textAlign: "center",
        textAlignVertical: "center",

        fontWeight: "bold",
        fontSize: 20,

        color: colors.color_1,
        marginInline: 5,
    }
})
