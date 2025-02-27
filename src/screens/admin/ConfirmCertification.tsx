import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APP_COLOR } from '../../utils/constant';
import ShareButton from '../../components/ShareButton';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_COLOR.PRIMARY,
    },
    card: {
        backgroundColor: "#D3D3D3",
        height: 524,
        position: "absolute",
        top: 50,
        left: 20,
        right: 20,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        elevation: 5, // Bóng đổ giúp card nổi bật
    },
    text: {
        fontSize: 26,
        fontWeight: "700",
        fontFamily: "Poppins",
        color: APP_COLOR.PRIMARY,
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

const ConfirmCertification = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Hai lớp màu nền */}
            <View style={{ backgroundColor: APP_COLOR.PRIMARY, height: "30%" }} />
            <View style={{ backgroundColor: "#ffffff", height: "70%" }} />

            {/* Card hiển thị thông tin */}
            <View style={styles.card}>
                <Text style={styles.text}>Thông tin bằng cấp</Text>
            </View>

            {/* Button xác nhận & từ chối */}
            <View style={styles.buttonContainer}>
                <ShareButton
                    name="Chấp nhận"
                    onPress={() => Alert.alert("Thành công")}
                    textStyles={styles.buttonText}
                    btnStyles={styles.button}
                />
                <ShareButton
                    name="Từ chối"
                    onPress={() => Alert.alert("Thành công")}
                    textStyles={styles.buttonText}
                    btnStyles={styles.button}
                />
            </View>

            {/* Nút quay lại */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../../assets/icon/arrow-left.png')}
                    style={styles.backIcon}
                />
                <Text style={styles.backText}>Quay lại</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConfirmCertification;
