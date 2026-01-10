import React, { useState } from 'react'
import { Text, StyleSheet, View, Modal, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButtonIcon from './IconButton'
import { colors } from '../globals/colors'
import { applyTransparency } from '../utils/hexToRgba'

export default function ProfileStackModalButton() {
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)

    return (
        <>
            
            <Pressable onPress={() => setVisible(true)} style={styles.pressableContainerStretch} >
                <CustomButtonIcon iconName={"list-ul"} onPress={() => setVisible(true)} size={30} />
            </Pressable>

            {/* Modal */}
            <Modal
                transparent
                animationType="slide"
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <Pressable style={styles.overlay} onPress={() => setVisible(false)}>

                    <View style={styles.footer}>
                        
                        <Pressable onPress={() => { setVisible(false); navigation.navigate('Profile') }} style={styles.pressableContainer} >
                            <CustomButtonIcon iconName="user" />
                            <Text style={styles.openButtonText} >Profile</Text>
                        </Pressable>

                        <Pressable onPress={() => { setVisible(false); navigation.navigate('Settings') }} style={styles.pressableContainer} >
                            <CustomButtonIcon iconName="cog" />
                            <Text style={styles.openButtonText} >Settings</Text>
                        </Pressable>

                    </View>

                </Pressable>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    pressableContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    pressableContainerStretch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: colors.color_3,
        borderRadius: 20,
        height: 50
    },
    openButtonText: {
        color: colors.color_1,
        fontWeight: '600',
        fontSize: 20
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: applyTransparency(colors.color_5, 0.4)

    },
    footer: {
        backgroundColor: colors.color_3,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        elevation: 0,
    },
})
