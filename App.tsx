/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Input} from './android/app/src/Components/Input';
import {RegisterScreen} from './src/screens/Register';
import {LoginScreen} from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import VerificationScreen from './src/screens/Verification';
import UploadFileScreen from './src/screens/UpLoadFile';
import CertificateHistoryScreen from './src/screens/CertificateHIstory';
import SecuritySettingScreen from './src/screens/SecuritySetting';
import QRCodeScannerScreen from './src/screens/QRScreen';
import ChangePasswordScreen from './src/screens/ChangePassword';
import VerifyCertificateScreen from './src/screens/VerifiCertificate';
import QRCodeScreen from './src/screens/QRImage';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{title: 'Xác thực'}}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Trang chủ'}}
        />

        <Stack.Screen
          name="UploadFile"
          component={UploadFileScreen}
          options={{title: 'Upload file'}}
        />

        <Stack.Screen
          name="CertificateHistory"
          component={CertificateHistoryScreen}
          options={{title: 'Lịch sử truy vấn'}}
        />

        <Stack.Screen
          name="SecuritySettings"
          component={SecuritySettingScreen}
          options={{title: 'Cấu hình bảo mật'}}
        />
        <Stack.Screen name="QRScan" component={QRCodeScannerScreen} options={{title: 'Quét QR'}} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{title: 'Đổi mật khẩu'}} />
        <Stack.Screen name="VerifyCertificate" component={VerifyCertificateScreen} options={{title: 'Xác thực bằng cấp'}} />
        <Stack.Screen name="QRScreen" component={QRCodeScreen} options={{title: 'Xác thực bằng cấp'}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
