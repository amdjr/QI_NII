import * as React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#550539BB',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#210429A6',
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
    height: 100,
    paddingTop: 20,
  },
  imgBkg: {flex: 1},
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#9E0D69',
    borderWidth: 5,
  },
});

export default styles;
