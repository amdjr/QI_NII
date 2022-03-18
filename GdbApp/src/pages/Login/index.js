import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Animated,
  KeyboardAvoidingView,
  StatusBar,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from './styleLoginCss';
import imgBackground from '../../../assets/img/foto3.jpeg';

function LoginScreen({navigation}) {
  const [offset] = useState(new Animated.ValueXY({x: -200, y: 0}));

  useEffect(() => {
    Animated.spring(offset.x, {
      toValue: 0,
      speed: 1,
      /*  bounciness: 10, */
      useNativeDriver: true,
    }).start();
  }, [offset.x]);

  return (
    <KeyboardAvoidingView style={styles.login}>
      <StatusBar style={{flex: 1}} backgroundColor="#FC009F" />
      <Animated.View
        useNativeDriver="true"
        // eslint-disable-next-line no-sparse-arrays
        style={[styles.containerLogin, {transform: [{translateY: offset.x}]}]}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../../assets/img/splashLogin.jpg')}
          style={styles.imgStyle}>
          <Animated.View
            useNativeDriver="true"
            // eslint-disable-next-line no-sparse-arrays
            style={[
              styles.containerLogin,
              {transform: [{translateX: offset.x}]},
            ]}>
            <View style={styles.containerLogin}>
              <Text style={styles.textLogin}>Login</Text>
              <TextInput
                style={styles.input}
                placeholder="email"
                onChangeText={() => {}}
                underlayColor="#fff"
              />
              <TouchableHighlight activeOpacity={0.7} style={styles.btnSubmit} underlayColor="#fff">
                <Text
                  
                  onPress={() => navigation.navigate('Home')}
                  style={styles.submitText}>
                  Entrar
                </Text>
              </TouchableHighlight>
            </View>
          </Animated.View>
        </ImageBackground>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
