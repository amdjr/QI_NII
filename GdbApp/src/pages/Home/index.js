import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  Text,
  Image,
  StatusBar,
  View,
  Animated,
  SafeAreaView,
  Button,
  TouchableHighlight,
} from 'react-native';

import styles from './styleHomeCss';

function HomeScreen({navigation}) {
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
    <SafeAreaView style={styles.container}>
      <View style={[styles.container2]}>
        <View style={styles.containerLogo}>
          <Image
            style={styles.logoImg}
            source={require('../../../assets/img/logo2.png')}
          />
        </View>
        <View style={styles.containerFoto}>
          <Image
            style={styles.logoImg}
            source={{uri: 'https://i.ibb.co/92z2mZz/Grupo-do-Bola.png'}}
          />
        </View>
        <View style={styles.containerBtn}>
          <TouchableHighlight
            activeOpacity={0.7}
            style={styles.btnLink}
            onPress={() => navigation.navigate('Bio')}
            underlayColor="#fff">
            <Text style={styles.btnText}>Bio</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.7}
            style={styles.btnLink}
            onPress={() => navigation.navigate('Gallery')}
            underlayColor="#fff">
            <Text style={styles.btnText}>Galeria</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.7}
            style={styles.btnLink}
            onPress={() => navigation.navigate('Agenda')}
            underlayColor="#fff">
            <Text style={styles.btnText}>Agenda</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.7}
            style={styles.btnLink}
            onPress={() => navigation.navigate('Player')}
            underlayColor="#fff">
            <Text style={styles.btnText}>Player</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
