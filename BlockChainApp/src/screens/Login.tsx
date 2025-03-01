import { Image, Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native"
import { Input } from "../../android/app/src/Components/Input"
import { Button } from "../../android/app/src/Components/Button";
import ShareInput from "../components/ShareInput";
import { APP_COLOR } from "../utils/constant";
import ShareButton from "../components/ShareButton";
import { Link, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";
import { UserAuth } from "../../AuthProvider";


const LoginImage = require("../../assets/image/Login.png");
const IdentityIcon = require("../../assets/icon/Identification.png");
const AccessIcon = require("../../assets/icon/Access.png");


export const LoginScreen = () => {
     const [username, setusername] = useState<string>('');
     const [error , seterror] = useState<string>('');
    const navigation = useNavigation();
    const {setUsername} = UserAuth();
    const [qrcode , setqrcode] = useState();
    const [loginsuccess , setloginsuccess] = useState(false);
    const handleLogin = async () => {
try {
        const result = await axios.post(
          `http://192.168.1.54:3000/login`,
          {
            
           username ,
        
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
  
        if(result.data.success) {
            setqrcode(result.data.qrCode);
            console.log(result.data.qrCode);
          Alert.alert('Thông báo', 'Đăng nhập thành công');
          navigation.navigate('Home');
          setUsername(username);
          setloginsuccess(true);
        }
        else {
          seterror(result.data.message);
        }
      } catch (error) {
        if (error.response) {
          console.log("📌 Response Error: ", error.response.data);
        } else if (error.request) {
          console.log("📡 Network Error: ", error.request);
        } else {
          console.log("❌ Error: ", error.message);
        }
      }
    }
    
    return (
        <View >
            <View style={styles.imageContainer}>
                <Image source={LoginImage} style={styles.image}></Image>
            </View>

            <View style={styles.title}>
                <Text style={styles.text}>Login</Text>
            </View>
            {loginsuccess && (<View>
                <Text>QR Code của bạn</Text>
                <Image  source={{ uri: qrcode }}  style={{ width: 200, height: 200, marginTop: 20 }}/>

            </View>)}
            <View style={{ padding: 28 }}>
                <ShareInput
                    title="User Name"
                    onChangeText={(text : string) => setusername(text)}
                    onBlur={console.log('User')}
                    value={username}
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
                onPress={handleLogin}
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