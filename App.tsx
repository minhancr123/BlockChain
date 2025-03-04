/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';

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
import { Input } from './android/app/src/Components/Input';
import { RegisterScreen } from './src/screens/Register';
import { LoginScreen } from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import VerificationScreen from './src/screens/Verification';
import UploadFileScreen from './src/screens/UpLoadFile';
import CertificateHistoryScreen from './src/screens/CertificateHIstory';
import SecuritySettingScreen from './src/screens/SecuritySetting';
import { SafeAreaView } from 'react-native-safe-area-context';
import AdminHomeScreen from './src/screens/admin/HomeAdminScreen';
import ListIdentity from './src/screens/admin/ListIdentity';
import ListRequestsScreen from './src/screens/admin/ListRequests';
import ListRequestsRejectedScreen from './src/screens/admin/ListRequestsRejected';
import ConfirmCertification from './src/screens/admin/ConfirmCertification';
import Register1 from './src/screens/admin/Register1';
import Register2 from './src/screens/admin/Register2';
import { RootStackParamList } from './src/utils/type.navigate';
import { PinScreen } from './src/screens/PinScreen';
import RefreshPassword from './src/screens/admin/RefreshPassword';
import DetailIdentity from './src/screens/admin/DetailIdentity';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator<RootStackParamList>();

function Section({ children, title }: SectionProps): React.JSX.Element {
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
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListIdentity">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="Verification"
            component={VerificationScreen}
            options={{ title: 'Xác thực', headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Trang chủ', headerShown: false }}
          />

          <Stack.Screen
            name="UploadFile"
            component={UploadFileScreen}
            options={{ title: 'Upload file', headerShown: false }}
          />

          <Stack.Screen
            name="CertificateHistory"
            component={CertificateHistoryScreen}
            options={{ title: 'Lịch sử truy vấn', headerShown: false }}
          />

          <Stack.Screen
            name="SecuritySettings"
            component={SecuritySettingScreen}
            options={{ title: 'Cấu hình bảo mật', headerShown: false }}
          />
          <Stack.Screen
            name="AdminHome"
            component={AdminHomeScreen}
            options={{ title: 'Admin Home', headerShown: false }}
          />
          <Stack.Screen
            name="ListIdentity"
            component={ListIdentity}
            options={{ title: 'List Identity', headerShown: false }}
          />
          <Stack.Screen
            name="ListRequests"
            component={ListRequestsScreen}
            options={{ title: 'List Requests Identities', headerShown: false }}
          />
          <Stack.Screen
            name="ListRequestsRejected"
            component={ListRequestsRejectedScreen}
            options={{ title: 'List Requests Identities Rejected', headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmCertification"
            component={ConfirmCertification}
            options={{ title: 'Confirm Certification', headerShown: false }}
          />
          <Stack.Screen
            name="Register1"
            component={Register1}
            options={{ title: 'Register 1', headerShown: false }}
          />
          <Stack.Screen
            name="Register2"
            component={Register2}
            options={{ title: 'Register 2', headerShown: false }}
          />
          <Stack.Screen
            name="PinScreen"
            component={PinScreen}
            options={{ title: 'PinScreen', headerShown: false }}
          />
          <Stack.Screen
            name="RefreshPassword"
            component={RefreshPassword}
            options={{ title: 'RefreshPassword', headerShown: false }}
          />
          <Stack.Screen
            name="DetailIdentity"
            component={DetailIdentity}
            options={{ title: 'DetailIdentity', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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
