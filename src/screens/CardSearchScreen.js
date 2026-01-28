import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Pressable, ScrollView, FlatList } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Checkbox from 'expo-checkbox'

import { colors } from '../globals/colors'
import CustomButton from '../components/Button'

import { useNavigation } from '@react-navigation/native'
import { uniqueValuesDb } from '../utils/uniqueKeys'

export default function CardSearchScreen() {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [archetype, setArchetype] = useState('')
    const [frameType, setFrameType] = useState(null)
    const [atk, setAtk] = useState('')
    const [defense, setDefense] = useState('')
    const [level, setLevel] = useState('')
    const [desc, setDesc] = useState('')
    const [sortBy, setSortBy] = useState('name') // placeholder sorting options


    const onSubmit = () => {
        // Create object with only filled-in filters
        const selectedFilters = {}

        if (name) selectedFilters.name = name
        if (archetype) selectedFilters.archetype = archetype
        if (frameType) selectedFilters.frameType = frameType
        if (atk) selectedFilters.atk = atk
        if (defense) selectedFilters.def = defense
        if (level) selectedFilters.level = level
        if (desc) selectedFilters.desc = desc
        selectedFilters.sortBy = sortBy

        console.log("Navigating with new filters", selectedFilters)

        // Navigate and send the filters
        navigation.navigate('Products', {
            screen: 'Home',
            params: { filters: selectedFilters }
        })
    }


    return (
        <ScrollView contentContainerStyle={styles.page}>
            <View style={styles.container}>
                <Text style={styles.sectionLabel} >Text Filtering</Text>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Card Name"
                />

                <Text style={styles.label}>desc</Text>
                <TextInput
                    style={styles.input}
                    value={desc}
                    onChangeText={setDesc}
                    placeholder="Card description"
                    multiline
                />

                <Text style={styles.label}>Archetype</Text>
                <TextInput
                    style={styles.input}
                    value={archetype}
                    onChangeText={setArchetype}
                    placeholder="Archetype"
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.sectionLabel} >Card Style</Text>
                <Text style={styles.label}>Card Frame</Text>
                <Picker
                    selectedValue={frameType}
                    onValueChange={(itemValue) => setFrameType(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Any" value={null} />

                    {uniqueValuesDb.frameType.map((item, index) => (
                        <Picker.Item
                            key={`${item}-${index}`}
                            label={item}
                            value={item}
                        />
                    ))}

                </Picker>
            </View>

            {/* <View style={styles.container}>
                <Text style={styles.sectionLabel} >Card Stats</Text>

                <Text style={styles.label}>ATK</Text>
                <TextInput
                    style={styles.input}
                    value={atk}
                    onChangeText={setAtk}
                    placeholder="Attack"
                    keyboardType="numeric"
                />

                <Text style={styles.label}>DEF</Text>
                <TextInput
                    style={styles.input}
                    value={defense}
                    onChangeText={setDefense}
                    placeholder="Defense"
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Level</Text>
                <TextInput
                    style={styles.input}
                    value={level}
                    onChangeText={setLevel}
                    placeholder="Level"
                    keyboardType="numeric"
                />
            </View> */}

            {/* <View style={styles.container}>
                <Text style={styles.sectionLabel} >Card Sorting</Text>

                <Text style={styles.label}>Sort By</Text>
                <Picker
                    selectedValue={sortBy}
                    onValueChange={(itemValue) => setSortBy(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Name" value="name" />
                    <Picker.Item label="ATK" value="atk" />
                    <Picker.Item label="DEF" value="def" />
                    <Picker.Item label="Level" value="level" />
                </Picker>
            </View> */}

            <CustomButton onPress={onSubmit}>Search Cards</CustomButton>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        flexGrow: 1,
        backgroundColor: colors.background,
        //alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },

    container: {
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: colors.color_4,

        backgroundColor: colors.white,

        minWidth: '95%',
        alignItems: "stretch",

        padding: 10,
        marginBottom: 20
    },

    input: {
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.color_2,

        padding: 8,

        width: '100%',
        backgroundColor: 'white',
        fontSize: 16,
        alignSelf: "stretch"
    },

    label: {
        alignSelf: 'flex-start',
        marginTop: 10,
        fontSize: 16,
        width: "100%",
        color: colors.text
    },

    sectionLabel: {
        alignSelf: 'flex-start',
        fontSize: 20,
        width: "100%",
        fontWeight: "bold",
        color: colors.text
    },

    picker: {
        width: '100%',
        borderWidth: 1,

        borderColor: colors.color_2,
        borderRadius: 5,

        marginVertical: 5,
        backgroundColor: 'white',
    },
})
