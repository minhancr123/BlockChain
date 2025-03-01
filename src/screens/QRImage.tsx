import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { APP_COLOR } from '../utils/constant';

export default function QRCodeScreen() {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(60); // Đếm ngược 60 giây

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR code định danh điện tử</Text>

          <LinearGradient colors={['#425A8B', '#1E2A47']} style={styles.qrBox}>
              <Image source={require('../../assets/icon/QR.png')} style={[styles.qrCode, { tintColor: '#000' }]} />
              <Text style={styles.timerText}>
                  Hiệu lực của QR code còn <Text style={styles.timer}>{`0:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</Text>
              </Text>
          </LinearGradient>

     

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/icon/arrow-left.png')} style={styles.backIcon} />
              <Text style={styles.backText}>Quay lại</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3B5998',
    marginTop: 60,
    marginBottom: 30,
  },
  qrBox: {
    width: 400,
    height: 600,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  qrCode: {
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    width: 300,
    height: 300,
  },
  timerText: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
  timer: {
    fontWeight: 'bold',
    color: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    marginTop: "25%",
    marginRight: "60%",
  },
  backIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
      tintColor: APP_COLOR.PRIMARY,
    },
  backText: {
    fontSize: 22,
    color: '#3B5998',
    fontWeight: 'bold',
  },
});
