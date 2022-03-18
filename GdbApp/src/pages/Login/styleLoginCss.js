import * as React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerLogin: {
    flex: 1,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  input: {
    backgroundColor: '#FFFFFFA4',
    width: '90%',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    borderRadius: 25,
    borderColor: '#22313175',
    borderWidth: 5,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 5,
    zIndex: 10,
  },
  textLogin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 50,
    textShadowColor: 'rgba(208, 32, 144, 8.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 15,
  },
  btnSubmit: {
    backgroundColor: '#9E0D69',

    width: '60%',
    height: 50,
    borderRadius: 25,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 20,
  },
  submitText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(208, 32, 144, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  btnCadastro: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 80,
    color: '#FFF',
  },
});

export default styles;
