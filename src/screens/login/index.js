import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import InputBox from '../../components/inputbox';
import image from '../../assets/images/puppy.jpg';
import SocialCard from '../../components/socialcard';
import {useSelector, useDispatch} from 'react-redux';
import * as loginActions from '../../redux/actions/loginActions';
import {styles} from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const counter = useSelector(state => state);
  // console.warn('count--', counter);

  const emailInputValue = value => {
    setEmail(value);
  };
  const passwordInputValue = value => {
    setPassword(value);
  };

  const onLoginPress = () => {
    if (email === '') {
      Alert.alert('Alert', 'Please enter an email.');
    } else if (!isEmailValid()) {
      Alert.alert('Alert', 'Please enter a valid email.');
    } else if (password === '') {
      Alert.alert('Alert', 'Please enter a password.');
    } else if (password < 6) {
      Alert.alert('Alert', 'Password must contain atleast 6 character..');
    } else {
      dispatch(loginActions.requestLogin(email, password, navigation));
    }
  };

  const isEmailValid = () => {
    let _email = email;
    let pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(_email.trim()).toLowerCase());
  };

  return (
    <View style={styles.main}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.headerTitle}>Plie</Text>
          </ImageBackground>
          <View style={styles.container}>
            <View style={styles.email}>
              <InputBox
                placeHolderName={'email@email.com'}
                value={email}
                onChangeText={emailInputValue}
              />
            </View>
            <View style={styles.password}>
              <InputBox
                placeHolderName={'Password'}
                value={password}
                onChangeText={passwordInputValue}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{alignSelf: 'flex-end'}}>
              <TouchableOpacity style={styles.signInBtn} onPress={onLoginPress}>
                <Text style={styles.signText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Not a member? </Text>
              <TouchableOpacity>
                <Text style={[styles.signUpText, styles.underLine]}>
                  Sign Up Here
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 70,
              }}>
              <Text style={styles.signWith}>or Sign In with:</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <SocialCard
              width={20}
              height={20}
              path={require('../../assets/images/google.png')}
            />
            <SocialCard
              width={20}
              height={20}
              path={require('../../assets/images/apple.png')}
            />
            <SocialCard
              width={20}
              height={20}
              path={require('../../assets/images/facebook.png')}
            />
          </View>
          <Text style={styles.guest}>Enter as Guest</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
