import * as React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from './styleAgendaCss';

function AgendaScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Agenda</Text>
      <View style={styles.containerBtn}>
        <ImageBackground
          style={styles.logoFoto}
          source={{uri: 'https://i.ibb.co/WDTwHrK/foto2.png'}}>
          <Button title="button" />
        </ImageBackground>
      </View>
    </View>
  );
}

export default AgendaScreen;
