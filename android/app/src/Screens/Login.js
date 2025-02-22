import {Image, Text, View, StyleSheet} from 'react-native';
import {Input} from '../Components/Input';
import {Button} from '../Components/Button';

const LoginImage = require('../assets/image/Login.png');
const IdentityIcon = require('../assets/icon/Identification Documents.png');
const AccessIcon = require('../assets/icon/Access.png');

export const LoginScreen = () => {
  return (
    <View>
      <Image source={LoginImage} style={styles.image}></Image>
      <Text style={styles.title}>Login</Text>

      <Input placeholder="Organization" icon={IdentityIcon}></Input>

      <Input placeholder="Organization Unit" icon={AccessIcon}></Input>

      <View style={styles.buttonContainer}>
        <Button title="Register" type="primary"></Button>
        <Button title="Login" type="secondary"></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 305,
    height: 240,
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
});
