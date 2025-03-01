import {useEffect, useRef, useState} from 'react';
import {UserAuth} from '../../AuthProvider';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PinViewInteface} from '../components/PinView'; // Sửa lại nếu sai
import ShareButton from '../components/ShareButton';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import ReactNativePinView from 'react-native-pin-view';
export const PinScreen = () => {
  const [haspin, sethaspin] = useState(false);
  const {username} = UserAuth();
  const [pin, setpin] = useState('');
  const navigate = useNavigation();
  const pinview = useRef<ReactNativePinView>(null);
  const handleCreatePin = async () => {
    const CreatedPin = await axios.post('http://192.168.1.54:3000/create-pin', {
      pin,
      username
    });
    
    if(!pin){
      Alert.alert("Vui lòng nhập vào mã pin");
    }
    if(CreatedPin.data.success == true){
      Alert.alert("Tạo mã pin thành công");
    }
    pinview.current?.clearAll();
    sethaspin(true);
  };

  const handleGetPin = async () => {
    const result = await axios.post('http://192.168.1.54:3000/get-pin', {
      username,
    });
    if(!pin){
      Alert.alert("Vui lòng nhập vào mã pin");
    }
    pinview.current?.clearAll();
    if (result.data.pin == pin) {
      navigate.navigate('Verification');
      Alert.alert("Đăng nhập thành công");
    }
  };

  useEffect(() => {
    const getpin = async () => {
      const result = await axios.post('http://192.168.1.54:3000/get-pin', {
        username,
      });
      if (result.data.success == true) {
        sethaspin(true);
      }
    };
    getpin();
  }, [username]);

  return (
    <View style={styles.container}>
      {haspin ? (
        <View style={styles.container}>
          <PinViewInteface oncomplete={value => setpin(value)} ref={pinview}/>
          <TouchableOpacity onPress={handleGetPin}>
            <Text style={{color: 'black', textDecorationLine: 'underline'}}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Text>Tạo mã PIN</Text>
          <PinViewInteface oncomplete={value => setpin(value)} />
          <TouchableOpacity onPress={handleCreatePin}>
            <Text style={{color: 'black', textDecorationLine: 'underline'}}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
