import * as React from 'react';
import {StyleSheet, Animated} from 'react-native';

const BGColor = '#000000';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
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

  imgSplash: {
    width: 380,
    height: 450,
    paddingBottom: 10,
    marginTop: 170,
  },
});

export default styles;
