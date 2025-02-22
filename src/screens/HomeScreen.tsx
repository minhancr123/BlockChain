import React from 'react'
import { Button, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation: any = useNavigation();

    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate("Profile")} title="Go to Profile"></Button>

        </View>
    )
}
