import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Modal,
    Pressable
} from 'react-native'

import { colors } from '../../globals/colors'
import { applyTransparency } from '../../utils/hexToRgba'
import PinchablePicture from './PinchablePictureZoom'

export default function CardDetailPicture({ cardData }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>
            <Pressable onPress={() => setModalVisible(true)}>
                <Image
                    source={{ uri: cardData.card_images[0].image_url_cropped }}
                    style={styles.cardPicture}
                />
            </Pressable>

            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <Pressable
                        style={StyleSheet.absoluteFill}
                        onPress={() => setModalVisible(false)}
                    />

                    <PinchablePicture url={cardData.card_images[0].image_url} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    cardPicture: {
        width: 330,
        height: 330,
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
        borderColor: colors.color_3,
        borderWidth: 5,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'relative',
        // backgroundColor: applyTransparency(colors.color_5, 0.4),
        justifyContent: 'center',
        alignItems: 'center',
    },
})
