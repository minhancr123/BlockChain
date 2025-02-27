import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ShareButton from '../components/ShareButton';
import {APP_COLOR} from '../utils/constant';
import {useNavigation} from '@react-navigation/native';
const SecuritySettingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/icon/securesets.png')}
          style={styles.image}
        />
        <Text style={styles.headerText}>Cấu hình{'\n'}          bảo mật   </Text>
      </View>

      {/* Danh sách tính năng */}
      <View style={styles.optionsContainer}>
        {renderOption(
          'Lưu Private Key',
          require('../../assets/icon/Access.png'),
          () => console.log('Lưu Private Key được nhấn')
        )}
        {renderOption(
          'Xuất file mã hóa',
          require('../../assets/icon/Password.png'),
          () => console.log('Xuất file mã hóa được nhấn')
        )}
        {renderOption(
          'Xác thực 2 lớp',
          require('../../assets/icon/fingerprint.png'),
          () => console.log('Xác thực 2 lớp được nhấn')
        )}
      </View>


      {/* Nút Quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../assets/icon/arrow-left.png')}
          style={styles.backIcon}
        />
        <Text style={styles.backText}>Quay lại</Text>
      </TouchableOpacity>

      {/* Đưa nút Đăng xuất ra giữa màn hình */}
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

// Component hiển thị mỗi dòng trong danh sách
const renderOption = (title: string, iconSource: any, onPress: () => void) => {
  return (
    <TouchableOpacity style={styles.optionItem} onPress={onPress}>
      <Text style={styles.optionText}>{title}</Text>
      <Image source={iconSource} style={styles.optionIcon} />
    </TouchableOpacity>
  );
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
  },
  header: {
    flexDirection: 'row-reverse', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    marginBottom: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 20,
    height: 250,
   
  },
  image: {
    width: 200, 
    height: 200,
    resizeMode: 'contain',
    marginRight: 20, 
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left', 
    marginRight: 20,
  },
  optionsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 26,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    
  },
  optionText: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
  },
  optionIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#B0B0B0',
  },
  backButton: {
    position: 'absolute',
    bottom: 100,
    left: 15,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: APP_COLOR.PRIMARY,
  },
  backText: {
    color: APP_COLOR.PRIMARY,
    marginLeft: 5,
    fontSize: 20,
  },
  logoutContainer: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignSelf: 'center',
    marginBottom: 28,

  },  
  logoutButton: {
    width: 450,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default SecuritySettingScreen;
