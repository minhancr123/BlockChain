import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APP_COLOR } from '../../utils/constant';
import ShareButton from '../../components/ShareButton';
import { useNavigation } from '@react-navigation/native';
import ShareInput from '../../components/ShareInput';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_COLOR.PRIMARY,
    },
    card: {
        backgroundColor: "#D3D3D3",
        height: 425,
        position: "absolute",
        bottom: 250,
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
        position: "absolute",
        bottom: 100, // Đặt gần đáy
        left: 50,
        right: 50,
        zIndex: 2,
        justifyContent: 'center',
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

const Register2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Hai lớp màu nền */}
            <View style={{ backgroundColor: APP_COLOR.PRIMARY, height: "30%", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.text}>Đăng ký danh tính</Text>
            </View>
            <View style={{ backgroundColor: "#ffffff", height: "70%" }} />

            {/* Card hiển thị thông tin */}
            <View style={styles.card}>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ padding: 10, fontSize: 16, fontWeight: 600 }}>User name</Text>
                    <ShareInput
                        title="User name"
                        onChangeText={() => console.log('User name')}
                        onBlur={() => console.log('User name')}
                        value={'User name'}
                        errors={'User name'}
                    />
                </View>

                <View style={{ marginVertical: 5 }}>
                    <Text style={{ padding: 10, fontSize: 16, fontWeight: 600 }}>Căn cước công dân</Text>
                    <ShareInput
                        title="CCCD"
                        onChangeText={() => console.log('CCCD')}
                        onBlur={() => console.log('CCCD')}
                        value={'CCCD'}
                        errors={'CCCD'}
                    />
                </View>

                <View style={{ marginVertical: 5 }}>
                    <Text style={{ padding: 10, fontSize: 16, fontWeight: 600 }}>Email</Text>
                    <ShareInput
                        title="Email"
                        onChangeText={() => console.log('Email')}
                        onBlur={() => console.log('Email')}
                        value={'Email'}
                        errors={'Email'}
                    />
                </View>


            </View>
            <View style={styles.buttonContainer}>
                <ShareButton
                    name="Đăng ký"
                    onPress={() => Alert.alert("Đăng ký thành công")}
                    textStyles={{
                        textTransform: 'uppercase',
                        color: '#fff',
                        paddingVertical: 5,
                    }}
                    pressStyles={{ alignSelf: 'stretch' }}
                    btnStyles={{
                        backgroundColor: APP_COLOR.PRIMARY,
                        justifyContent: 'center',
                        width: 295,
                        // marginHorizontal: 20,
                        // paddingVertical: 10,
                        borderRadius: 9,
                    }}
                />
            </View>




        </View>
    );
};

export default Register2;
