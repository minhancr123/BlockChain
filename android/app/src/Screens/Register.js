import {Image, Text, View, StyleSheet} from 'react-native';
import {Input} from '../Components/Input';
import {Button} from '../Components/Button';
const unitIcon = require('../assets/icon/Unit.png');
const ModuleIcon = require('../assets/icon/Module.png');
const userIcon = require('../assets/icon/User.png');
const VectorIcon = require('../assets/icon/Vector.png');
const registerImage = require('../assets/image/Register.png');
export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={registerImage} style={styles.image}></Image>
      <Text style={styles.title}>Register</Text>

      <Input placeholder="Organization" icon={unitIcon}></Input>

      <Input placeholder="Organization Unit" icon={ModuleIcon}></Input>
      <Input placeholder="Common Name" icon={userIcon}></Input>
      <Input placeholder="Email" icon={VectorIcon}></Input>

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
    height: 230,
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
