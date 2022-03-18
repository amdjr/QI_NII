import * as React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Text>Home Screen</Text>
        <Button
          title="ir para contatos"
          onPress={() => navigation.navigate('Contact')}
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
