import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { APP_COLOR } from '../utils/constant';

const QRCodeScannerScreen = () => {
  const navigation = useNavigation();
  const [flashOn, setFlashOn] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Quyền sử dụng Camera",
          message: "Ứng dụng cần quyền truy cập Camera để quét mã QR",
          buttonPositive: "OK"
        }
      );
      const permissionGranted = granted === PermissionsAndroid.RESULTS.GRANTED;
      setHasCameraPermission(permissionGranted);
      return permissionGranted;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  const onSuccess = (e: any) => {
    console.log(e);
    // alert(`Mã QR: ${e.data}`); // Xử lý dữ liệu từ mã QR
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {hasCameraPermission ? (
          <QRCodeScanner
            onRead={onSuccess}
            reactivate={true} // Cho phép quét liên tục
            reactivateTimeout={2000} // Thời gian giữa các lần quét
            flashMode={flashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
            topViewStyle={{ display: 'none' }}
            bottomViewStyle={{ display: 'none' }}
            containerStyle={styles.qrContainer}
            cameraStyle={styles.camera}
          />
        ) : (
          <Text>Đang chờ quyền truy cập Camera...</Text>
        )}
      </View>

      {/* Nút bật/tắt Flash */}
      <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
        <Ionicons name={flashOn ? 'flash' : 'flash-off'} size={30} color="white" />
      </TouchableOpacity>

      {/* Nút Quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/icon/arrow-left.png')} style={styles.backIcon} />
        <Text style={styles.backText}>Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  qrContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    height: '100%',
    width: '100%',
  },
  flashButton: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: APP_COLOR.PRIMARY,
  },
  backText: {
    fontSize: 18,
    color: APP_COLOR.PRIMARY,
    marginLeft: 5,
  },
});

export default QRCodeScannerScreen;
