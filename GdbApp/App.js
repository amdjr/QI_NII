// In App.js in a new project

import * as React from 'react';
import 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/pages/Home';
import BioScreen from './src/pages/Bio';
import SplashScreen from './src/pages/Splash';
import LoginScreen from './src/pages/Login';
import GalleryScreen from './src/pages/Gallery';
import AgendaScreen from './src/pages/Agenda';
import PlayerScreen from './src/pages/Player';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bio"
          component={BioScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Agenda"
          component={AgendaScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Player"
          component={PlayerScreen}
          options={{title: 'Player'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
