import * as React from 'react';
import {StyleSheet, Animated } from 'react-native';

const BGColor = '#000000';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  containerLogo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: BGColor,
  },
  animationContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default styles;
