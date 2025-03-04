import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APP_COLOR } from '../../utils/constant';
import ShareButton from '../../components/ShareButton';
import { useNavigation } from '@react-navigation/native';
import ShareInput from '../../components/ShareInput';
import { RootStackParamList } from '../../utils/type.navigate';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { RegisterSchema2 } from '../../utils/validate.schema';
import { registerAPI } from '../../utils/api';

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
type NavigationProps = StackNavigationProp<RootStackParamList, 'Register2'>;
const Register2 = ({ route, navigate }: any) => {
    const { commonName,
        organization,
        organizationUnit,
        country,
        state,
        locality, } = route.params;
    console.log(commonName, organization, organizationUnit, country, state, locality);
    const navigation = useNavigation<NavigationProps>();


    const handleRegister2 = async (username: string, cccd: string, email: string) => {
        console.log(commonName,
            organization,
            organizationUnit,
            country,
            state,
            locality, username, cccd, email);

        const res = await registerAPI(username, email, cccd, commonName, organization, organizationUnit, country, state, locality);
        console.log(res);
        if (res?.success === true) {
            Alert.alert('Thông báo', 'Đăng ký thành công');
            navigation.navigate('Login');
        }
        else if (res?.success === false) {
            Alert.alert('Thông báo', res?.message);
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                validationSchema={RegisterSchema2}
                initialValues={{
                    username: '',
                    cccd: '',
                    email: '',
                }}
                onSubmit={(values) => handleRegister2(values.username, values.cccd, values.email)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

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
                                    title="username"
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    errors={errors.username}
                                />
                            </View>

                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ padding: 10, fontSize: 16, fontWeight: 600 }}>Căn cước công dân</Text>
                                <ShareInput
                                    title="CCCD"
                                    onChangeText={handleChange('cccd')}
                                    onBlur={handleBlur('cccd')}
                                    value={values.cccd}
                                    errors={errors.cccd}
                                />
                            </View>

                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ padding: 10, fontSize: 16, fontWeight: 600 }}>Email</Text>
                                <ShareInput
                                    title="Email"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}

                                    value={values.email}
                                    errors={errors.email}
                                />
                            </View>


                        </View>
                        <View style={styles.buttonContainer}>
                            <ShareButton
                                name="Đăng ký"
                                onPress={handleSubmit}
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
                )}
            </Formik>
        </SafeAreaView>

    );
};

export default Register2;
