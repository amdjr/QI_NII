import * as React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#4B0E36FB',
    padding: 20,
    marginVertical: 8,
    borderRadius: 50,
    margin: 10,
    elevation: 22,
    borderColor: '#F3F3F391',
    borderWidth: 3,
  },
  header: {
    fontSize: 28,
    backgroundColor: '#000000CB',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#dddd',
    borderColor: '#ECECEC',
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
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
