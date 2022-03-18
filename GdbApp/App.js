// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/Home';
import BioScreen from './src/pages/Bio';
import SplashScreen from './src/pages/Splash';
import LoginScreen from './src/pages/Login';
import GalleryScreen from './src/pages/Gallery';
import AboutScreen from './src/pages/About';
import PlayerScreen from './src/pages/Player';



const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }}  />
        <Stack.Screen name="Bio" component={BioScreen} options={{ title: 'Bio do Grupo' }} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ title: 'splash' }}  />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}  />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }}  />
        <Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Galeria' }}  />
        <Stack.Screen name="Player" component={PlayerScreen} options={{ title: 'Player' }}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;