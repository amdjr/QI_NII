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
  Alert,
} from 'react-native';

import styles from './styleLoginCss';

function LoginScreen({navigation}) {
  /* validando o email */

  const [email, setEmail] = useState(null);
  const validation = () => {
    if (email === null) {
      console.log(email);
      Alert.alert('É preciso um email para continuar');
    } else if (email.search('@' && '.com') === -1) {
      console.log(email);
      Alert.alert('Verifique o email digitado');
    } else {
      console.log(email);
      navigation.navigate('Home');
    }
  };

  /* função esconder titulo ao clicar no textInput */

  const [titleOnOff, setTitleOnOff] = useState(true);

  /* animação */

  const [offset] = useState(new Animated.ValueXY({x: -200, y: 0}));

  useEffect(() => {
    Animated.spring(offset.x, {
      toValue: 0,
      speed: 1,
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
                {titleOnOff ? (
                  <Text style={styles.textLogin}>Login</Text>
                ) : (
                  <Text style={styles.textLogin2} />
                )}
                <TextInput
                  value={email}
                  type={email}
                  style={styles.input}
                  placeholder="digite seu email"
                  onChangeText={value => setEmail(value)}
                  underlayColor="#fff"
                  onFocus={() => setTitleOnOff(!setTitleOnOff)}
                />
                <TouchableHighlight
                  activeOpacity={0.7}
                  style={styles.btnSubmit}
                  onPress={validation}
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
