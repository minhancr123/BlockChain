import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APP_COLOR } from '../../utils/constant';
import ShareButton from '../../components/ShareButton';
import { useNavigation } from '@react-navigation/native';
import ShareInput from '../../components/ShareInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/type.navigate';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_COLOR.PRIMARY,
    },
    card: {
        backgroundColor: "#D3D3D3",
        height: 627,
        position: "absolute",
        bottom: 50,
        left: 20,
        right: 20,
        padding: 28,
        borderRadius: 20,
        // alignItems: "center",
        // elevation: 5, // Bóng đổ giúp card nổi bật
    },
    text: {
        fontSize: 40,
        fontWeight: "700",
        fontFamily: "Poppins",
        color: "#ffffff",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 100, // Đặt gần đáy
        left: 40,
        right: 40,
        zIndex: 2,
    },
    button: {
        backgroundColor: APP_COLOR.PRIMARY,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        borderRadius: 30,
        flex: 1,
        marginHorizontal: 10,
        width: 150,
    },
    buttonText: {
        textTransform: "uppercase",
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    // Nút quay lại
    backButton: {
        position: "absolute",
        bottom: 20, // Đặt gần đầu màn hình
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        zIndex: 3,
    },
    backIcon: {
        width: 30,
        height: 30,
        marginRight: 8,
        resizeMode: 'contain',
    },
    backText: {
        fontSize: 18,
        color: APP_COLOR.PRIMARY,
        fontWeight: 'bold',
    },
});

type NavigationProps = StackNavigationProp<RootStackParamList, 'Register1'>;

interface Register1Props {
    CommonName: string;
    Organization: string;
}

const Register1 = () => {
    const navigation = useNavigation<NavigationProps>();
    return (
        <View style={styles.container}>
            {/* Hai lớp màu nền */}
            <View style={{ backgroundColor: APP_COLOR.PRIMARY, height: "30%", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.text}>Đăng ký danh tính</Text>
            </View>
            <View style={{ backgroundColor: "#ffffff", height: "70%" }} />

            {/* Card hiển thị thông tin */}
            <View style={styles.card}>
                <ShareInput
                    title="Common Name"
                    onChangeText={() => console.log('Common Name')}
                    onBlur={() => console.log('Common Name')}
                    value={'Common Name'}
                    errors={'Error Common Name'}
                />
                <ShareInput
                    title="Organization"
                    onChangeText={() => console.log('Organization')}
                    onBlur={() => console.log('Organization')}
                    value={'Organization'}
                    errors={'Error Organization'}
                />
                <ShareInput
                    title="Organization Unit"
                    onChangeText={() => console.log('Organization Unit')}
                    onBlur={() => console.log('Organization Unit')}
                    value={'Organization Unit'}
                    errors={'Error Organization Unit'}
                />
                <ShareInput
                    title="Country"
                    onChangeText={() => console.log('Country')}
                    onBlur={() => console.log('Country')}
                    value={'Country'}
                    errors={'Error Country'}
                />
                <ShareInput
                    title="State or Province"
                    onChangeText={() => console.log('State or Province')}
                    onBlur={() => console.log('State or Province')}
                    value={'State or Province'}
                    errors={'Error State or Province'}
                />
                <ShareInput
                    title="Locality"
                    onChangeText={() => console.log('Locality')}
                    onBlur={() => console.log('Locality')}
                    value={'Locality'}
                    errors={'Error Locality'}
                />
                <ShareButton
                    name="Tiếp theo"
                    onPress={() => navigation.navigate('Register2', { name: 'Register2' })}
                    textStyles={{
                        textTransform: 'uppercase',
                        color: '#fff',
                        paddingVertical: 5,
                    }}
                    pressStyles={{ alignSelf: 'stretch' }}
                    btnStyles={{
                        backgroundColor: APP_COLOR.PRIMARY,
                        justifyContent: 'center',
                        marginHorizontal: 50,
                        paddingVertical: 10,
                        borderRadius: 30,
                    }}
                />
            </View>


        </View>
    );
};

export default Register1;
