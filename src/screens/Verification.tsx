import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function VerificationScreen() {
  const [selectedTab, setSelectedTab] = useState('verified');
  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabContainer}>
          {['verified', 'pending', 'failed'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                selectedTab === tab && styles.activeTab,
              ]}
              onPress={() => setSelectedTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.activeTabText,
                ]}
                numberOfLines={1}
                ellipsizeMode="tail">
                {tab === 'verified'
                  ? 'Đã xác thực'
                  : tab === 'pending'
                  ? 'Chờ xác thực'
                  : 'Xác thực không thành công'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <LinearGradient colors={['#425A8B', '#1E2A47']} style={styles.card}>
          <View style={styles.statusContainer}>
            <Image
              source={require('../../assets/icon/check.png')}
              style={styles.checkIcon}
            />
            <Text style={styles.statusText}>Đã xác thực</Text>
          </View>
          <View style={{position: 'relative', width: '100%'}}>
            <Image
              source={require('../../assets/icon/QR.png')}
              style={styles.qrIcon}
            />
          </View>
        </LinearGradient>

        <TouchableOpacity style={styles.historyButton}>
          <View style={styles.historyContainer}>
            <Image
              source={require('../../assets/icon/arrow-right.png')}
              style={styles.arrowRightIcon}
            />
            <Text style={styles.historyText}>Lịch sử thay đổi bằng cấp</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyText}>Xác thực bằng cấp</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 0,
    flex: 1, // Đảm bảo mở rộng toàn bộ màn hình
    height: '100%', // Chiếm toàn bộ chiều cao màn hình
  },

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 5,
    marginBottom: 20,
    minWidth: '100%',
  },
  text: {
    fontFamily: 'Poppins',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    marginHorizontal: 5,
    // minWidth: '180px',
    height: 30,
    backgroundColor: '#D2D9E7',
  },

  activeTab: {
    backgroundColor: '#3B5998',
    borderRadius: 50,
  },
  tabText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
  card: {
    width: '93%',
    height: 600,
    borderRadius: 20,
    padding: 15,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  qrIcon: {
    position: 'absolute',
    top: -280,
    right: 5,
    borderRadius: 20,
    width: 35,
    height: 35,
  },

  arrowRightIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
    marginLeft: -10,
  },
  statusContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingRight: 50,
  },

  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  historyButton: {
    marginTop: 15,
  },
  historyText: {
    fontSize: 16,
    color: '#3B5998',
    fontWeight: 'bold',
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: '#3B5998',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  verifyText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
