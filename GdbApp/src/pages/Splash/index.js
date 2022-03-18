import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  Animated,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation, CommonActions} from '@react-navigation/core';

import Logo from '../../../assets/img/logo2.png';
import styles from './styleSplashCss';

function SplashScreen({}) {
  const edges = useSafeAreaInsets();

  const [offset] = useState(new Animated.ValueXY({x: 0, y: -400}));

  const navigation = useNavigation();

  useEffect(
    () => {
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 2,
        bounciness: 20,
        useNativeDriver: true,
      }).start();
    },
    [offset.y],
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],         
        }),
      );
    }, 5000),
  );

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.containerLogo}>
        <Animated.View
          style={
            (styles.animationContainer, {transform: [{translateY: offset.y}]})
          }>
          <Image
            source={Logo}
            style={{
              width: 380,
              height: 450,
              paddingBottom: 10,
              marginTop: 170,
            }}
          />
        </Animated.View>
      </View>
    </SafeAreaProvider>
  );
}

export default SplashScreen;
