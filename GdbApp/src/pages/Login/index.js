import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  KeyboardAvoidingView,
  StatusBar,
  TouchableHighlight,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import styles from './styleLoginCss';

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
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={styles.login}>
        <StatusBar style={{flex: 1}} backgroundColor="#AC0970" />
        <Animated.View
          useNativeDriver="true"
          style={[
            styles.containerLogin,
            {transform: [{translateX: offset.x}]},
          ]}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../../assets/img/splashLogin.jpg')}
            style={styles.imgStyle}>
            <Animated.View
              useNativeDriver="true"
              style={[
                styles.containerLogin,
                {transform: [{translateX: offset.x}]},
              ]}>
              <View style={styles.containerLogin}>
                <Text style={styles.textLogin}>Login</Text>
                <TextInput
                  type="email"
                  style={styles.input}
                  placeholder="email"
                  onChangeText={() => {}}
                  underlayColor="#fff"
                  /* icon="check" */
                />
                <TouchableHighlight
                  activeOpacity={0.7}
                  style={styles.btnSubmit}
                  onPress={() => navigation.navigate('Home')}
                  underlayColor="#fff">
                  <Text style={styles.submitText}>Entrar</Text>
                </TouchableHighlight>
              </View>
            </Animated.View>
          </ImageBackground>
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;
