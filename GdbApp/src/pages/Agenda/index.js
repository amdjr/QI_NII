import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  SectionList,
  ImageBackground,
  Animated,
} from 'react-native';

import styles from './styleAgendaCss';

import DATA from './components/DATA.js';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function AgendaScreen() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: -200}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 2,
      /*  bounciness: 10, */
      useNativeDriver: true,
    }).start();
  }, [offset.y]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: 'https://i.ibb.co/YynxtD2/Grupo-do-Bola6.jpg'}}
        style={styles.imgBkg}>
        <Animated.View
          useNativeDriver="true"
          style={[
            styles.containerLogin,
            {transform: [{translateY: offset.y}]},
          ]}>
          <View style={styles.topContainer}>
            <Ionicons
              name="md-star-half"
              size={50}
              color="white"
              backgroundColor="black"
            />
            <Text style={styles.pageTitle}>Agenda</Text>
            <Ionicons
              name="md-star-half"
              size={50}
              color="white"
              backgroundColor="black"
            />
          </View>
        </Animated.View>

        {/* Section Agenda */}

        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
