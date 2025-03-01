import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { APP_COLOR } from '../utils/constant';

const VerifyCertificateScreen = () => {
    const navigation = useNavigation(); // ✅ Điều hướng màn hình
    const [selectedFile, setSelectedFile] = useState(null);

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles], // Chọn tất cả loại file
            });

            if (result && result.length > 0) {
                setSelectedFile(result[0]); // Lưu file đầu tiên vào state
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User canceled file picker');
            } else {
                console.error('Error picking document:', err);
            }
        }
    };

    const handleVerify = () => {
        console.log('Verifying document:', selectedFile);
    };

    return (
        <View style={styles.container}>
             {/* Nút Quay lại */}
                  <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/icon/arrow-left.png')} style={styles.backIcon} />
                    <Text style={styles.backText}>Quay lại</Text>
                  </TouchableOpacity>

            {/* Khu vực tải file lên với gradient */}
            <LinearGradient colors={['#425A8B', '#1E2A47']} style={styles.uploadBox}>
                <TouchableOpacity onPress={pickDocument} style={styles.uploadContent}>
                    <Image source={require('../../assets/icon/upload.png')} style={styles.uploadIcon} />
                    <Text style={styles.uploadText}>
                        {selectedFile ? selectedFile.name : 'Tải File chứng chỉ lên tại đây'}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>

            {/* Nút Xác minh */}
            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyButtonText}>Xác minh</Text>
            </TouchableOpacity>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backButton: {
      flexDirection: 'row',
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: APP_COLOR.PRIMARY,
  },
    backText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E3A8A',
    },
    uploadBox: {
        marginTop: 30, 
        marginBottom: 50,
        width: '90%',
        height: 600,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    uploadContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadIcon: {
        width: 150,
        height: 150,
        tintColor: 'white',
        marginBottom: 10,
    },
    uploadText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    verifyButton: {
        width: '90%',
        backgroundColor: '#3B5998',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 30,
    },
    verifyButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default VerifyCertificateScreen;
