import * as React from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';

import styles from './styleHomeCss';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerButtons}>
        <Text>Home Screen</Text>
        <Button
          title="ir para Bio"
          onPress={() => navigation.navigate('Bio')}
        />
        <Button
          title="ir para sobre"
          onPress={() => navigation.navigate('About')}
        />
        <Button
          title="ir para galeria"
          onPress={() => navigation.navigate('Gallery')}
        />
        <Button
          title="ir para player"
          onPress={() => navigation.navigate('Player')}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
