import React, { useState } from 'react'
import { StyleSheet, View, Image, Dimensions, Pressable } from 'react-native'

const widthDevice = Dimensions.get("window").width

export default function CardPicture({ url, style = styles.container}) {
    const [loading, setLoading] = useState(true)

    return (
        <View style={style}>
            {loading && (
                <Image
                    source={require('../../assets/Placeholder Card.png')}
                    style={styles.picture}
                />
            )}

            <Image
                source={{ uri: url }}
                style={styles.picture}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: widthDevice,
        height: widthDevice * (86 / 59),
    },

    picture: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
    },
})
