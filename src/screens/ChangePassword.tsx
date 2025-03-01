import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { APP_COLOR } from '../utils/constant';
import ShareButton from '../components/ShareButton';

const ChangePasswordScreen = () => {
  const [form, setForm] = useState({
    username: null,
    oldPassword: null,
    newPassword: null,
    confirmPassword: null,
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log('Changing password...', form);
  };
  const handleLogout = () => {
    console.log('Logging out...');
  };
  return (
    <View style={styles.container}>
      {/* Background chia 2 phần */}
      <View style={styles.blueBackground} />

      {/* Container đổi mật khẩu */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Đổi mật khẩu</Text>

        {/* Tên tài khoản */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tên tài khoản</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="User name"
              value={form.username}
              onChangeText={(text) => handleChange('username', text)}
            />
            <Image source={require('../../assets/icon/User.png')} style={styles.icon} />
          </View>
        </View>

        {/* Mật khẩu cũ */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mật khẩu cũ</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Old password"
              secureTextEntry
              value={form.oldPassword}
              onChangeText={(text) => handleChange('oldPassword', text)}
            />
            <Image source={require('../../assets/icon/Password.png')} style={styles.icon} />
          </View>
        </View>

        {/* Mật khẩu mới */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mật khẩu mới</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry
              value={form.newPassword}
              onChangeText={(text) => handleChange('newPassword', text)}
            />
            <Image source={require('../../assets/icon/Password.png')} style={styles.icon} />
          </View>
        </View>

        {/* Xác nhận mật khẩu mới */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Xác nhận mật khẩu mới</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Confirm new password"
              secureTextEntry
              value={form.confirmPassword}
              onChangeText={(text) => handleChange('confirmPassword', text)}
            />
            <Image source={require('../../assets/icon/Password.png')} style={styles.icon} />
          </View>
        </View>

        {/* Nút Đổi mật khẩu */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Đổi mật khẩu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <ShareButton
          name="Đăng xuất"
          onPress={() => console.log('Đăng xuất')}
          btnStyles={styles.logoutButton}
          textStyles={styles.logoutText}
        />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  blueBackground: {
    position: 'absolute',
    width: '100%',
    height: '30%', // 30% màn hình
    backgroundColor: APP_COLOR.PRIMARY, // Màu xanh
  },
  formContainer: {
    position: 'absolute',
    top: '15%', // Chìm vào giữa 2 nền xanh & trắng
    left: 30,
    right: 30,
    backgroundColor: '#D3D3D3',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4, // Đổ bóng Android
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
  button: {
    width: '50%',
    backgroundColor: APP_COLOR.PRIMARY,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: '50%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignSelf: 'center',
    marginBottom: 120,

  },  
  logoutButton: {
    width: 196,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '40%',

  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
