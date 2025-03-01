import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ShareButton from '../components/ShareButton';
import ShareInput from '../components/ShareInput';
import { APP_COLOR } from '../utils/constant';

import Axios from '../../axios/axiosAsixtance';
import axios from 'axios';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    height: 'auto',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    marginVertical: 20,
  },
  Button: {
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 2,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export const RegisterScreen = () => {
  // Sửa CommonName thành string thay vì string[]
  const [CommonName, setCommonName] = useState<string>('');
  const [Organization, setOrganization] = useState<string>('');
  const [OrganizationUnit, setOrganizationUnit] = useState<string>('');
  const [Country, setCountry] = useState<string>('');
  const [State, setState] = useState<string>('');
  const [Locality, setLocality] = useState<string>('');
  const [error , seterror] = useState<string>('');
  const [Email , setEmail] = useState<string>('');
  const [mount , setmount] = useState(false);
  const navigation = useNavigation();

  
  const handleRegister = async () => {
    try {
      const result = await axios.post(
        `http://192.168.1.54:3000/register`,
        {
          
         username : CommonName,
         CommonName,
         Organization,
         OrganizationUnit,
         Country,
         State,
         Locality,
         Email
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if(result.data.success) {
        Alert.alert('Thông báo', 'Đăng ký thành công');
        navigation.navigate('Login');
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
  };
  
  useEffect(() => {
    setmount(true);
  } , []);

  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.text}>Register</Text>
      </View>

      <View style={{ padding: 28 }}>
      <ShareInput
        title="Common Name"
        onChangeText={(text : string) => setCommonName(text)} // Đảm bảo cập nhật state
        onBlur={() => console.log(CommonName)}
        value={CommonName} // Giá trị được bind từ state
        // errors={'Error Common Name'}
      />

        <ShareInput
          title="Organization"
          onChangeText={(text: string) => setOrganization(text)} // Cập nhật state
          onBlur={() => console.log(Organization)}
          value={Organization}
          // errors={'Error Organization'}
        />
        <ShareInput
          title="Organization Unit"
          onChangeText={(text: string) => setOrganizationUnit(text)}
          onBlur={() => console.log(OrganizationUnit)}
          value={OrganizationUnit}
          // errors={'Error Organization Unit'}
        />
        <ShareInput
          title="Country"
          onChangeText={(text: string) => setCountry(text)}
          onBlur={() => console.log(Country)}
          value={Country}
          // errors={'Error Country'}
        />
        <ShareInput
          title="State or Province"
          onChangeText={(text: string) => setState(text)}
          onBlur={() => console.log(State)}
          value={State}
          // errors={'Error State or Province'}
        />
        <ShareInput
          title="Locality"
          onChangeText={(text: string) => setLocality(text)}
          onBlur={() => console.log(Locality)}
          value={Locality}
          // errors={error}
        />
        <ShareInput
          title="Email"
          onChangeText={(text : string) => setEmail(text)} // Ví dụ tạm thời
          onBlur={() => console.log('Email')}
          value={Email} // Nếu cần lưu, thêm state mới
           errors={error}
        />
      </View>

      <ShareButton
        name="Đăng ký"
        onPress={handleRegister}
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

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          marginVertical: 15,
        }}>
        <Text style={{ color: 'black' }}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'black', textDecorationLine: 'underline' }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};