import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ShareButton from '../../components/ShareButton';
import ShareInput from '../../components/ShareInput';
import { APP_COLOR } from '../../utils/constant';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/type.navigate';

const DATA = [
    {
        id: '1',
        title: 'Tên danh tính',
    },
    {
        id: '2',
        title: 'Tên danh tính',
    },
    {
        id: '3',
        title: 'Tên danh tính',
    },
    {
        id: '4',
        title: 'Tên danh tính',
    },
    {
        id: '5',
        title: 'Tên danh tính',
    },
    {
        id: '6',
        title: 'Tên danh tính',
    },
    {
        id: '7',
        title: 'Tên danh tính',
    },
    {
        id: '8',
        title: 'Tên danh tính',
    },
    {
        id: '9',
        title: 'Tên danh tính',
    },
    {
        id: '10',
        title: 'Tên danh tính',
    },
    {
        id: '11',
        title: 'Tên danh tính',
    },
    {
        id: '12',
        title: 'Tên danh tính',
    },
];
type NavigationProps = StackNavigationProp<RootStackParamList, 'ListIdentity'>;

const ListIdentity = () => {
    const navigation = useNavigation<NavigationProps>();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.userName}>Danh sách danh tính</Text>
            </View>

            {/* Nội dung chính */}
            <View style={styles.content}>
                <View style={{ width: '100%', margin: 20 }}>
                    <ShareInput
                        title="Tìm theo tên danh tính"
                        onChangeText={() => console.log('User')}
                        onBlur={() => console.log('User')}
                        value={"User"}
                    />
                    <Image
                        source={require('../../../assets/icon/search.png')}
                        style={{ position: 'absolute', top: 15, right: 15 }}
                    />
                </View>
                {/* Các nút bấm */}
                {/* <View style={styles.buttonContainer}> */}
                <FlatList
                    style={styles.buttonContainer}
                    data={DATA}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <ShareButton
                                    name={item.title}
                                    onPress={() => console.log("Hello navigate")}
                                    btnStyles={styles.button}
                                    textStyles={styles.buttonText}
                                />
                                <Image
                                    source={require('../../../assets/icon/Action_1.png')}
                                    style={{ position: 'absolute', top: 35, right: 50 }}
                                />
                                <Image
                                    source={require('../../../assets/icon/Action_2.png')}
                                    style={{ position: 'absolute', top: 35, right: 15 }}
                                />
                            </View>


                        )
                    }
                    }
                    keyExtractor={item => item.id}
                />
                {/* </View> */}
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => { navigation.navigate("AdminHome") }}>
                        <Image
                            source={require('../../../assets/icon/arrow-left.png')}
                            style={styles.backIcon}
                        />
                        <Text style={styles.backText}>Quay lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B5998',
        alignItems: 'center',
    },

    /* Header */
    header: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    userName: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
    },

    /* Nội dung chính */
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    /* Các nút */
    buttonContainer: {
        paddingBottom: 20,
    },

    button: {
        width: 363,
        height: 81,
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: '#3B5998',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingLeft: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left', // Đảm bảo văn bản được căn trái
    },

    backButtonContainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 20,
    },

    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
    },
    backIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: APP_COLOR.PRIMARY, // Đảm bảo màu sắc của icon
    },
    backText: {
        color: APP_COLOR.PRIMARY,
        marginLeft: 5,
        fontSize: 20,
    }
});

export default ListIdentity;