import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>  
      <TextInput placeholder="user"/> 
      <TextInput placeholder="password"/> 
      <Button
          title="Fazer login"
          onPress={() => navigation.navigate('Home')}
        />  
    </View>
  );
}

export default LoginScreen;