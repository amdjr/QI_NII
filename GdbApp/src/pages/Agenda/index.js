import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  SectionList,
  ImageBackground,
} from 'react-native';

import styles from './styleAgendaCss';

import DATA from './DATA.js';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const myIcon = <Icon name="leak" size={30} color="#900" />;

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const AgendaScreen = () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground
      source={{uri: 'https://i.ibb.co/YynxtD2/Grupo-do-Bola6.jpg'}}
      style={styles.imgBkg}>
      <Icon name={myIcon} size={21} />
      <Text style={styles.pageTitle}>Agenda Grupo do Bola</Text>
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

export default AgendaScreen;
