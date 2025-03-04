import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { APP_COLOR } from '../../utils/constant';
import ShareButton from '../../components/ShareButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import ShareInput from '../../components/ShareInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/type.navigate';
import { getUserById } from '../../utils/api';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_COLOR.PRIMARY,
    },
    card: {
        backgroundColor: "#D3D3D3",
        height: 700,
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
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        fontFamily: "Poppins",
        color: APP_COLOR.PRIMARY,
        marginBottom: 20,
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
        top: 20, // Đặt gần đầu màn hình
        left: 20,
        flexDirection: 'row',
        // alignItems: 'center',
        padding: 10,
        zIndex: 3,
    },
    backIcon: {
        width: 30,
        height: 30,
        marginRight: 8,
        resizeMode: 'contain',
        tintColor: "#ffffff", // Đảm bảo màu sắc của icon
    },
    backText: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: 'bold',
    },
});

type NavigationProps = StackNavigationProp<RootStackParamList, 'DetailIdentity'>;

interface DetailIdentityProps {
    CommonName: string;
    Organization: string;
}

const DetailIdentity = () => {
    const route = useRoute();
    const { id } = route.params;
    const navigation = useNavigation<NavigationProps>();

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserById(id);
            if (res.success) {
                setUser(res.users);
            }
        }
        fetchUser();
    }, [id])


    return (
        <View style={styles.container}>

            {/* Hai lớp màu nền */}
            <View style={{ backgroundColor: APP_COLOR.PRIMARY, height: "30%", alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
                    <Image
                        source={require('../../../assets/icon/arrow-left.png')}
                        style={styles.backIcon}
                    />
                    <Text style={styles.backText}>Quay lại</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#ffffff", height: "70%" }} />

            {/* Card hiển thị thông tin */}
            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.text}>Chi tiết danh tính</Text>
                    <View>
                        <Text style={{ paddingLeft: 8 }}>Tên danh tính</Text>
                        <ShareInput
                            title="Tên danh tính"
                            // onChangeText={() => console.log('Tên danh tính')}
                            // onBlur={() => console.log('Tên danh tính')}
                            value={user.common_name}
                        // errors={'Tên danh tính'}
                        />
                    </View>
                    <View>
                        <Text style={{ paddingLeft: 8 }}>Mã số sinh viên</Text>
                        <ShareInput
                            title="MSSV"

                            value={user.username}

                        />
                    </View>

                    <View>
                        <Text style={{ paddingLeft: 8 }}>Căn cước công dân</Text>
                        <ShareInput
                            title="MSSV"
                            value={user.citizen_id}
                        />
                    </View>

                    <View>
                        <Text style={{ paddingLeft: 8 }}>Common Name</Text>
                        <ShareInput
                            title="CommonName"
                            value={user.common_name}

                        />
                    </View>
                    <View>
                        <Text style={{ paddingLeft: 8 }}>Organization</Text>
                        <ShareInput
                            title="Organization"
                            value={user.organization}
                        />
                    </View>

                    <View>
                        <Text style={{ paddingLeft: 8 }}>Organization Unit</Text>
                        <ShareInput
                            title="OrganizationUnit"
                            value={user.organizational_unit}
                        />
                    </View>
                    <View>
                        <Text style={{ paddingLeft: 8 }}>Country</Text>
                        <ShareInput
                            title="Country"
                            value={user.country}

                        />
                    </View>
                    <View>
                        <Text style={{ paddingLeft: 8 }}>State or Province</Text>
                        <ShareInput
                            title="State"
                            value={user.state}

                        />
                    </View>
                    <View>
                        <Text style={{ paddingLeft: 8 }}>Locality</Text>
                        <ShareInput
                            title="Locality"
                            value={user.locality}
                        />
                    </View>
                </ScrollView>


            </View>


        </View>
    );
};

export default DetailIdentity;
