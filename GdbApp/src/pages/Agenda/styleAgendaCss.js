import * as React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#550539BB',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#070122A6',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#dddd',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  pageTitle: {
    fontSize: 35,
    color: '#FFFFFF',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: '#940088',
    width: '100%',
    height: 100,
    paddingTop: 20,
  },
  imgBkg: {flex: 1},
});

export default styles;
