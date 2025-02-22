import { Image, Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native"
import { Input } from "../../android/app/src/Components/Input"
import { Button } from "../../android/app/src/Components/Button";
import ShareInput from "../components/ShareInput";
import { APP_COLOR } from "../utils/constant";
import ShareButton from "../components/ShareButton";
import { Link, useNavigation } from "@react-navigation/native";


const LoginImage = require("../../assets/image/Login.png");
const IdentityIcon = require("../../assets/icon/Identification.png");
const AccessIcon = require("../../assets/icon/Access.png");


export const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View >
            <View style={styles.imageContainer}>
                <Image source={LoginImage} style={styles.image}></Image>
            </View>

            <View style={styles.title}>
                <Text style={styles.text}>Login</Text>
            </View>

            <View style={{ padding: 28 }}>
                <ShareInput
                    title="User Name"
                    onChangeText={() => console.log('User')}
                    onBlur={console.log('User')}
                    value={"User"}
                    errors={"Error User"}
                />
                <ShareInput
                    title="Password"
                    secureTextEntry
                    onChangeText={() => console.log('Password')}
                    onBlur={console.log('Password')}
                    value={"Password"}
                    errors={"Error Password"}
                />
            </View>


            <ShareButton
                // loading={loading}
                name="Đăng nhập"
                onPress={() => Alert.alert("Đăng nhập thành công")}
                textStyles={{ textTransform: "uppercase", color: "#fff", paddingVertical: 5 }}
                pressStyles={{ alignSelf: "stretch" }}
                btnStyles={{
                    backgroundColor: APP_COLOR.PRIMARY,
                    justifyContent: "center",
                    marginHorizontal: 50,
                    paddingVertical: 10,
                    borderRadius: 30,

                }}
            />

            <View style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                marginVertical: 15
            }}>
                <Text style={{ color: "black" }}>Chưa có có tài khoản?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={{ color: "black", textDecorationLine: "underline" }}>Đăng ký</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    image: {
        // height: 240,
        marginVertical: 20
    },
    Button: {
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        marginBottom: 20,
        gap: 2
    },
    text: {
        fontSize: 36,
        fontWeight: "bold",
        fontFamily: "Poppins",
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
})