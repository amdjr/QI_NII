import * as React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#9C0066C7',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 28,
    backgroundColor: '#210429E3',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#dddd',
  },
  title: {
    fontSize: 20,
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
