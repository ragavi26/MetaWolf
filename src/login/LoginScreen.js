import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import location from '../common/assets/Gremany.png';
import metaLogo from '../common/assets/metaLogo.png';
import appleIcon from '../common/assets/AppleIcon.png';
import {useNavigation} from '@react-navigation/native';
import {LoginStyles} from './LoginStyles';
import LoginConstants from './LoginConstants';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const styles = LoginStyles();

  const goToHome = () => {
    if (email !== '' && password != '') {
      navigation.replace('Home', {});
    } else {
      Alert.alert('Please enter valid credentials');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image source={location} style={styles.logoView} resizeMode="contain" />
        <View style={styles.mainTextView}>
          <Text style={styles.welcomeTxt}>
            {LoginConstants.WELCOME_TO}
            <Text style={styles.metaWolfTxt}>
              {LoginConstants.METAWOLF_SOLAR}
            </Text>
          </Text>

          <Text style={styles.startedText}>{LoginConstants.LETS_START}</Text>
        </View>
      </View>
      <View style={styles.metaLogoView}>
        <Image
          source={metaLogo}
          style={styles.metaLogoViewImage}
          resizeMode="contain"
        />
        <View style={styles.inputView}>
          <TextInput
            value={email}
            style={styles.inputText}
            placeholder="email"
            placeholderTextColor="#AFAFAF"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            value={password}
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#AFAFAF"
            secureTextEntry={true}
            maxLength={20}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.forgotTxtView}>
          <Text style={styles.sizeFont}>{LoginConstants.FORGOT_PASSWORD}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToHome()} style={styles.loginBtn}>
          <Text style={styles.loginText}>{LoginConstants.LOGIN}</Text>
        </TouchableOpacity>
        <View style={styles.actions}>
          <Text style={styles.accessText}>
            {LoginConstants.DONT_HAVE_ACCESS}{' '}
          </Text>

          <TouchableOpacity>
            <Text style={styles.singUp}>{LoginConstants.REGISTER_ACCOUNT}</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={appleIcon}
          style={styles.appleLogo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default LoginScreen;
