import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APP_COLOR } from '../../utils/constant';
import ShareButton from '../../components/ShareButton';
import { useNavigation } from '@react-navigation/native';
import ShareInput from '../../components/ShareInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/type.navigate';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { RegisterSchema1 } from '../../utils/validate.schema';

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
    commonName: string;
    organization: string;
    organizationUnit: string;
    country: string;
    state: string;
    locality: string;
}

const Register1 = () => {
    const navigation = useNavigation<NavigationProps>();

    const handleRegister1 = (commonName: string, organization: string, organizationUnit: string, country: string, state: string, locality: string) => {
        console.log('Common Name: ', commonName);
        console.log('Organization: ', organization);
        console.log('Organization Unit: ', organizationUnit);
        console.log('Country: ', country);
        console.log('State or Province: ', state);
        console.log('Locality: ', locality);
        navigation.navigate('Register2', {
            commonName: commonName,
            organization: organization,
            organizationUnit: organizationUnit,
            country: country,
            state: state,
            locality: locality,
        });
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                validationSchema={RegisterSchema1}
                initialValues={{
                    commonName: '',
                    organization: '',
                    organizationUnit: '',
                    country: '',
                    state: '',
                    locality: '',

                }}
                onSubmit={(values) => handleRegister1(values.commonName, values.organization, values.organizationUnit, values.country, values.state, values.locality)}
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
                            <ShareInput
                                title="Common Name"
                                onChangeText={handleChange('commonName')}
                                onBlur={handleBlur('commonName')}
                                value={values.commonName}
                                errors={errors.commonName}
                            />
                            <ShareInput
                                title="Organization"
                                onChangeText={handleChange('organization')}
                                onBlur={handleBlur('organization')}

                                value={values.organization}
                                errors={errors.organization}
                            />
                            <ShareInput
                                title="Organization Unit"
                                onChangeText={handleChange('organizationUnit')}
                                onBlur={handleBlur('organizationUnit')}

                                value={values.organizationUnit}
                                errors={errors.organizationUnit}
                            />
                            <ShareInput
                                title="Country"
                                onChangeText={handleChange('country')}
                                onBlur={handleBlur('country')}

                                value={values.country}
                                errors={errors.country}
                            />
                            <ShareInput
                                title="State or Province"
                                onChangeText={handleChange('state')}
                                onBlur={handleBlur('state')}
                                value={values.state}
                                errors={errors.state}
                            />
                            <ShareInput
                                title="Locality"
                                onChangeText={handleChange('locality')}
                                onBlur={handleBlur('locality')}
                                value={values.locality}
                                errors={errors.locality}
                            />
                            <ShareButton
                                name="Tiếp theo"
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
                                    marginHorizontal: 50,
                                    paddingVertical: 10,
                                    borderRadius: 30,
                                }}
                            />
                        </View>


                    </View>
                )}
            </Formik>
        </SafeAreaView>

    );
};

export default Register1;
