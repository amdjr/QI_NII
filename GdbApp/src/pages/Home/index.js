import * as React from 'react';
import {Text, View, Button, SafeAreaView, ImageBackground} from 'react-native';

import styles from './styleHomeCss';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground>
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
      </ImageBackground>
    </SafeAreaView>
  );
}

export default HomeScreen;
