import { useEffect, useRef, useState } from 'react';
// import { UserAuth } from '../../AuthProvider';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PinViewInterface } from '../components/PinView'; // Sửa lại nếu sai
import ShareButton from '../components/ShareButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import ReactNativePinView from 'react-native-pin-view';
export const PinScreen = () => {
    const [haspin, sethaspin] = useState(false);
    // const { username } = UserAuth();
    const [pin, setpin] = useState('');
    const navigate = useNavigation();
    const pinview = useRef<ReactNativePinView>(null);
    const handleCreatePin = async () => {
        console.log(pin);
    };

    const handleGetPin = async () => {
        console.log(pin);
    };

    // useEffect(() => {
    //     const getpin = async () => {
    //         const result = await axios.post('http://192.168.1.54:3000/get-pin', {
    //             username,
    //         });
    //         if (result.data.success == true) {
    //             sethaspin(true);
    //         }
    //     };
    //     getpin();
    // }, [username]);

    return (
        <View style={styles.container}>
            {haspin ? (
                <View style={styles.container}>
                    <PinViewInterface oncomplete={value => setpin(value)} ref={pinview} />
                    <TouchableOpacity onPress={handleGetPin}>
                        <Text style={{ color: 'black', textDecorationLine: 'underline' }}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text>Tạo mã PIN</Text>
                    <PinViewInterface oncomplete={value => setpin(value)} />
                    <TouchableOpacity onPress={handleCreatePin}>
                        <Text style={{ color: 'black', textDecorationLine: 'underline' }}>
                            Đăng ký
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});