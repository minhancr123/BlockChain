import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Rect } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { APP_COLOR } from '../utils/constant';

const QRCodeScannerScreen = () => {
  const navigation = useNavigation();
  const [flashOn, setFlashOn] = useState(false);

  const toggleFlash = () => {
    setFlashOn(!flashOn);
    // Nếu muốn điều khiển flash thực tế, cần tích hợp với `react-native-torch`
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Quét mã QR</Text>
      </View>

      {/* Khung quét QR */}
      <View style={styles.qrContainer}>
        <Svg height="100%" width="100%">
          <Rect x="15%" y="10%" width="70%" height="55%" stroke="black" strokeWidth="4" fill="none" />
        </Svg>

        {/* Nút hướng dẫn */}
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.scanButtonText}>Đưa mã QR vào giữa khung</Text>
        </TouchableOpacity>

        {/* Nút bật/tắt Flash */}
        <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
          <Ionicons name={flashOn ? 'flash' : 'flash-off'} size={30} color="white" />
        </TouchableOpacity>
        
      </View>

      {/* Nút Quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/icon/arrow-left.png')} style={styles.backIcon} />
        <Text style={styles.backText}>Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
    paddingVertical: 40,
    marginBottom: 20,
    position: 'relative',
  },
  scanButton: {
    position: 'absolute',
    bottom: 150, // Cách nút flash 70px
    backgroundColor: '#3B5998',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  flashButton: {
    position: 'absolute',
    bottom: 75, // Đặt nút flash ngay dưới nút hướng dẫn
    backgroundColor: '#fff', // Màu vàng cam
    width: 50,
    height: 50,
    borderRadius: 25, // Hình tròn
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
