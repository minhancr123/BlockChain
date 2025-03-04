import React, { useState, useRef } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ShareButton from '../components/ShareButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/type.navigate';
type NavigationProps = StackNavigationProp<RootStackParamList, 'PinScreen'>;

export const PinScreen = () => {
    const [pin, setPin] = useState(["", "", "", "", "", ""]);
    const navigation = useNavigation<NavigationProps>();
    const pinRefs = useRef([]);

    const handlePinChange = (value, index) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);

        // Tự động chuyển sang ô tiếp theo
        if (value && index < 5) {
            pinRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && !pin[index] && index > 0) {
            const newPin = [...pin];
            newPin[index - 1] = "";
            setPin(newPin);
            pinRefs.current[index - 1].focus();
        }
    };

    const handleComplete = () => {
        const enteredPin = pin.join("");
        Alert.alert("Mã PIN đã nhập", enteredPin);
        setTimeout(() => {
            navigation.navigate("AdminHome");
        }, 1000)

        // Thực hiện các hành động khác với mã PIN đã nhập
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nhập mã PIN của bạn</Text>
            <View style={styles.pinContainer}>
                {pin.map((p, index) => (
                    <TextInput
                        key={index}
                        ref={input => { pinRefs.current[index] = input; }}
                        style={styles.pinInput}
                        keyboardType="numeric"
                        secureTextEntry={true}
                        textContentType="oneTimeCode"
                        maxLength={1}
                        onChangeText={value => handlePinChange(value, index)}
                        onKeyPress={event => handleKeyPress(event, index)}
                        value={p}
                    />
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <ShareButton
                    name="Xác nhận"
                    onPress={handleComplete}
                    textStyles={styles.buttonText}
                    btnStyles={styles.confirmButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    pinContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    pinInput: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 100,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 100,
        // width: '100%',
        right: 50,
        alignItems: 'center',
    },
    buttonText: {
        textTransform: 'uppercase',
        color: '#fff',
        paddingVertical: 5,
    },
    confirmButton: {
        backgroundColor: '#3B5998',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});

export default PinScreen;
